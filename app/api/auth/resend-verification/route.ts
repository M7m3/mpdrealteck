import { NextRequest, NextResponse } from 'next/server'
import { issueOtp } from '@/lib/otpFlow'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''

  if (!email) return NextResponse.json({ error: 'Email is required.' }, { status: 400 })

  const result = await issueOtp(email, 'verify-email')
  if (!result.ok) return NextResponse.json({ error: result.error }, { status: 429 })

  return NextResponse.json({ ok: true, delivered: result.delivered })
}

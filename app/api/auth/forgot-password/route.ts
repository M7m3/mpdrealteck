import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { issueOtp } from '@/lib/otpFlow'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 })
  }

  const user = await prisma.user.findUnique({ where: { email } })

  // Always respond the same way whether or not the account exists, to avoid
  // leaking which emails are registered.
  if (!user) {
    return NextResponse.json({ ok: true, delivered: false })
  }

  const result = await issueOtp(email, 'reset-password')
  if (!result.ok) return NextResponse.json({ error: result.error }, { status: 429 })

  return NextResponse.json({ ok: true, delivered: result.delivered })
}

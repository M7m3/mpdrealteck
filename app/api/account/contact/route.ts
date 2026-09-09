import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/session'
import { sendAccountInquiryEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: 'Not signed in.' }, { status: 401 })

  const body = await request.json().catch(() => null)
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  if (!message || message.length > 4000) {
    return NextResponse.json({ error: 'Enter a message up to 4000 characters.' }, { status: 400 })
  }

  await sendAccountInquiryEmail({
    name: user.name || user.email,
    email: user.email,
    message,
  })

  return NextResponse.json({ ok: true })
}

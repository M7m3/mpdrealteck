import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hashOtp, OTP_MAX_ATTEMPTS } from '@/lib/otp'
import { createSession } from '@/lib/session'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
  const code = typeof body?.code === 'string' ? body.code.trim() : ''

  if (!email || !code) {
    return NextResponse.json({ error: 'Email and code are required.' }, { status: 400 })
  }

  const otp = await prisma.otpCode.findFirst({
    where: { email, consumedAt: null },
    orderBy: { createdAt: 'desc' },
  })

  if (!otp) {
    return NextResponse.json({ error: 'No active code found. Request a new one.' }, { status: 400 })
  }

  if (otp.expiresAt < new Date()) {
    return NextResponse.json({ error: 'This code has expired. Request a new one.' }, { status: 400 })
  }

  if (otp.attempts >= OTP_MAX_ATTEMPTS) {
    return NextResponse.json({ error: 'Too many incorrect attempts. Request a new code.' }, { status: 429 })
  }

  if (hashOtp(code) !== otp.codeHash) {
    await prisma.otpCode.update({ where: { id: otp.id }, data: { attempts: { increment: 1 } } })
    return NextResponse.json({ error: 'Incorrect code. Please try again.' }, { status: 400 })
  }

  await prisma.otpCode.update({ where: { id: otp.id }, data: { consumedAt: new Date() } })

  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: { email },
  })

  await createSession(user.id)

  return NextResponse.json({ ok: true, user: { id: user.id, email: user.email, name: user.name } })
}

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateOtp, hashOtp, otpExpiryDate, OTP_RESEND_COOLDOWN_SECONDS } from '@/lib/otp'
import { sendOtpEmail } from '@/lib/email'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 })
  }

  const recent = await prisma.otpCode.findFirst({
    where: { email },
    orderBy: { createdAt: 'desc' },
  })

  if (recent) {
    const secondsSinceLast = (Date.now() - recent.createdAt.getTime()) / 1000
    if (secondsSinceLast < OTP_RESEND_COOLDOWN_SECONDS) {
      return NextResponse.json(
        { error: `Please wait ${Math.ceil(OTP_RESEND_COOLDOWN_SECONDS - secondsSinceLast)}s before requesting another code.` },
        { status: 429 }
      )
    }
  }

  const code = generateOtp()
  await prisma.otpCode.create({
    data: {
      email,
      codeHash: hashOtp(code),
      expiresAt: otpExpiryDate(),
    },
  })

  const result = await sendOtpEmail(email, code)

  return NextResponse.json({ ok: true, delivered: result.delivered })
}

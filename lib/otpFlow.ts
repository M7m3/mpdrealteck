import { prisma } from '@/lib/prisma'
import { generateOtp, hashOtp, otpExpiryDate, OTP_MAX_ATTEMPTS, OTP_RESEND_COOLDOWN_SECONDS } from '@/lib/otp'
import { sendOtpEmail } from '@/lib/email'

export type OtpPurpose = 'verify-email' | 'reset-password'

interface IssueResult {
  ok: boolean
  error?: string
  delivered?: boolean
}

export async function issueOtp(email: string, purpose: OtpPurpose): Promise<IssueResult> {
  const recent = await prisma.otpCode.findFirst({
    where: { email, purpose },
    orderBy: { createdAt: 'desc' },
  })

  if (recent) {
    const secondsSinceLast = (Date.now() - recent.createdAt.getTime()) / 1000
    if (secondsSinceLast < OTP_RESEND_COOLDOWN_SECONDS) {
      return {
        ok: false,
        error: `Please wait ${Math.ceil(OTP_RESEND_COOLDOWN_SECONDS - secondsSinceLast)}s before requesting another code.`,
      }
    }
  }

  const code = generateOtp()
  await prisma.otpCode.create({
    data: { email, purpose, codeHash: hashOtp(code), expiresAt: otpExpiryDate() },
  })

  const result = await sendOtpEmail(email, code, purpose)
  return { ok: true, delivered: result.delivered }
}

interface ConsumeResult {
  ok: boolean
  error?: string
}

export async function consumeOtp(email: string, code: string, purpose: OtpPurpose): Promise<ConsumeResult> {
  const otp = await prisma.otpCode.findFirst({
    where: { email, purpose, consumedAt: null },
    orderBy: { createdAt: 'desc' },
  })

  if (!otp) return { ok: false, error: 'No active code found. Request a new one.' }
  if (otp.expiresAt < new Date()) return { ok: false, error: 'This code has expired. Request a new one.' }
  if (otp.attempts >= OTP_MAX_ATTEMPTS) return { ok: false, error: 'Too many incorrect attempts. Request a new code.' }

  if (hashOtp(code) !== otp.codeHash) {
    await prisma.otpCode.update({ where: { id: otp.id }, data: { attempts: { increment: 1 } } })
    return { ok: false, error: 'Incorrect code. Please try again.' }
  }

  await prisma.otpCode.update({ where: { id: otp.id }, data: { consumedAt: new Date() } })
  return { ok: true }
}

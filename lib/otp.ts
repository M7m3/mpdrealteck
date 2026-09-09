import crypto from 'crypto'

export const OTP_LENGTH = 6
export const OTP_TTL_MINUTES = 10
export const OTP_MAX_ATTEMPTS = 5
export const OTP_RESEND_COOLDOWN_SECONDS = 45

export function generateOtp(): string {
  const max = 10 ** OTP_LENGTH
  const code = crypto.randomInt(0, max)
  return code.toString().padStart(OTP_LENGTH, '0')
}

export function hashOtp(code: string): string {
  return crypto.createHash('sha256').update(code).digest('hex')
}

export function otpExpiryDate(): Date {
  return new Date(Date.now() + OTP_TTL_MINUTES * 60 * 1000)
}

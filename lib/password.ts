import crypto from 'crypto'

const KEY_LENGTH = 64

export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex')
  const derived = crypto.scryptSync(password, salt, KEY_LENGTH).toString('hex')
  return `${salt}:${derived}`
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(':')
  if (!salt || !hash) return false

  const hashBuffer = Buffer.from(hash, 'hex')
  const derivedBuffer = crypto.scryptSync(password, salt, KEY_LENGTH)
  if (hashBuffer.length !== derivedBuffer.length) return false

  return crypto.timingSafeEqual(hashBuffer, derivedBuffer)
}

export function isPasswordValid(password: string): boolean {
  return typeof password === 'string' && password.length >= 8 && password.length <= 200
}

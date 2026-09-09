import crypto from 'crypto'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'

export const ADMIN_PIN_COOKIE = 'mpdrealteck_admin_pin'
export const ADMIN_SESSION_COOKIE = 'mpdrealteck_admin_session'
const PIN_TTL_MINUTES = 15
const SESSION_TTL_HOURS = 12

function hashToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex')
}

function timingSafeStringEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) {
    // Still run a comparison of equal length to avoid leaking length via timing.
    crypto.timingSafeEqual(bufA, bufA)
    return false
  }
  return crypto.timingSafeEqual(bufA, bufB)
}

export function verifyPin(pin: string): boolean {
  const expected = process.env.ADMIN_PIN || ''
  return expected.length > 0 && timingSafeStringEqual(pin, expected)
}

export async function markPinVerified() {
  const cookieStore = await cookies()
  cookieStore.set(ADMIN_PIN_COOKIE, '1', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: PIN_TTL_MINUTES * 60,
  })
}

export async function hasPinAccess(): Promise<boolean> {
  const cookieStore = await cookies()
  return cookieStore.get(ADMIN_PIN_COOKIE)?.value === '1'
}

export function verifyAdminCredentials(username: string, password: string): boolean {
  const expectedUsername = process.env.ADMIN_USERNAME || ''
  const expectedPassword = process.env.ADMIN_PASSWORD || ''
  if (!expectedUsername || !expectedPassword) return false
  return timingSafeStringEqual(username, expectedUsername) && timingSafeStringEqual(password, expectedPassword)
}

export async function createAdminSession() {
  const token = crypto.randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + SESSION_TTL_HOURS * 60 * 60 * 1000)

  await prisma.adminSession.create({ data: { tokenHash: hashToken(token), expiresAt } })

  const cookieStore = await cookies()
  cookieStore.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: expiresAt,
  })

  return token
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value
  if (!token) return false

  const session = await prisma.adminSession.findUnique({ where: { tokenHash: hashToken(token) } })
  if (!session || session.expiresAt < new Date()) {
    if (session) await prisma.adminSession.delete({ where: { id: session.id } }).catch(() => {})
    return false
  }
  return true
}

export async function destroyAdminSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value
  if (token) {
    await prisma.adminSession.deleteMany({ where: { tokenHash: hashToken(token) } })
  }
  cookieStore.delete(ADMIN_SESSION_COOKIE)
  cookieStore.delete(ADMIN_PIN_COOKIE)
}

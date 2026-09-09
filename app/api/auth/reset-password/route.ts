import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { consumeOtp } from '@/lib/otpFlow'
import { hashPassword, isPasswordValid } from '@/lib/password'
import { createSession } from '@/lib/session'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
  const code = typeof body?.code === 'string' ? body.code.trim() : ''
  const newPassword = typeof body?.newPassword === 'string' ? body.newPassword : ''

  if (!email || !code) return NextResponse.json({ error: 'Email and code are required.' }, { status: 400 })
  if (!isPasswordValid(newPassword)) {
    return NextResponse.json({ error: 'Password must be at least 8 characters.' }, { status: 400 })
  }

  const result = await consumeOtp(email, code, 'reset-password')
  if (!result.ok) return NextResponse.json({ error: result.error }, { status: 400 })

  const user = await prisma.user.update({
    where: { email },
    data: { passwordHash: hashPassword(newPassword), emailVerifiedAt: new Date() },
  })

  await createSession(user.id)

  return NextResponse.json({ ok: true, user: { id: user.id, email: user.email, name: user.name } })
}

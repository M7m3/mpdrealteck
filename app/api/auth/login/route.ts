import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyPassword } from '@/lib/password'
import { createSession } from '@/lib/session'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
  const password = typeof body?.password === 'string' ? body.password : ''

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 })
  }

  const user = await prisma.user.findUnique({ where: { email } })

  if (!user || !user.passwordHash || !verifyPassword(password, user.passwordHash)) {
    return NextResponse.json({ error: 'Incorrect email or password.' }, { status: 401 })
  }

  if (!user.emailVerifiedAt) {
    return NextResponse.json(
      { error: 'Please verify your email before signing in.', needsVerification: true },
      { status: 403 }
    )
  }

  await createSession(user.id)

  return NextResponse.json({ ok: true, user: { id: user.id, email: user.email, name: user.name } })
}

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { consumeOtp } from '@/lib/otpFlow'
import { createSession } from '@/lib/session'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
  const code = typeof body?.code === 'string' ? body.code.trim() : ''

  if (!email || !code) return NextResponse.json({ error: 'Email and code are required.' }, { status: 400 })

  const result = await consumeOtp(email, code, 'verify-email')
  if (!result.ok) return NextResponse.json({ error: result.error }, { status: 400 })

  const user = await prisma.user.update({
    where: { email },
    data: { emailVerifiedAt: new Date() },
  })

  await createSession(user.id)

  return NextResponse.json({ ok: true, user: { id: user.id, email: user.email, name: user.name } })
}

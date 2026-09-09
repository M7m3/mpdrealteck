import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/session'

export async function PATCH(request: NextRequest) {
  const user = await getCurrentUser()
  if (!user) return NextResponse.json({ error: 'Not signed in.' }, { status: 401 })

  const body = await request.json().catch(() => null)
  const name = typeof body?.name === 'string' ? body.name.trim() : ''

  if (!name || name.length > 80) {
    return NextResponse.json({ error: 'Enter a name between 1 and 80 characters.' }, { status: 400 })
  }

  const updated = await prisma.user.update({ where: { id: user.id }, data: { name } })

  return NextResponse.json({ ok: true, user: { id: updated.id, email: updated.email, name: updated.name } })
}

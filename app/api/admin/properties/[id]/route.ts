import { NextRequest, NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/adminAuth'
import { getPropertyById, updateProperty, deleteProperty } from '@/lib/properties'

interface RouteParams {
  params: Promise<{ id: string }>
}

export async function GET(_request: NextRequest, { params }: RouteParams) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  const property = await getPropertyById(id)
  if (!property) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  return NextResponse.json({ property })
}

export async function PATCH(request: NextRequest, { params }: RouteParams) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  const body = await request.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })

  let details: object | undefined
  if (typeof body.details === 'string') {
    if (body.details.trim()) {
      try {
        details = JSON.parse(body.details)
      } catch {
        return NextResponse.json({ error: 'Advanced Details must be valid JSON.' }, { status: 400 })
      }
    }
  } else if (typeof body.details === 'object' && body.details) {
    details = body.details
  }

  if (body.slug && !/^[a-z0-9-]+$/.test(body.slug)) {
    return NextResponse.json({ error: 'Slug must contain only lowercase letters, numbers, and hyphens.' }, { status: 400 })
  }

  try {
    const property = await updateProperty(id, {
      ...(body.slug !== undefined ? { slug: body.slug.trim() } : {}),
      ...(body.name !== undefined ? { name: body.name.trim() } : {}),
      ...(body.developer !== undefined ? { developer: body.developer || null } : {}),
      ...(body.image !== undefined ? { image: body.image.trim() } : {}),
      ...(body.city !== undefined ? { city: body.city || null } : {}),
      ...(body.state !== undefined ? { state: body.state || null } : {}),
      ...(body.status !== undefined ? { status: body.status || null } : {}),
      ...(body.priceRange !== undefined ? { priceRange: body.priceRange || null } : {}),
      ...(body.description !== undefined ? { description: body.description || null } : {}),
      ...(body.reraCertified !== undefined ? { reraCertified: !!body.reraCertified } : {}),
      ...(body.reraNumber !== undefined ? { reraNumber: body.reraNumber || null } : {}),
      ...(details !== undefined ? { details } : {}),
    })
    return NextResponse.json({ ok: true, property })
  } catch {
    return NextResponse.json({ error: 'Could not update property.' }, { status: 400 })
  }
}

export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  try {
    await deleteProperty(id)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Could not delete property.' }, { status: 400 })
  }
}

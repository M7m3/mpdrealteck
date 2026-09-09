import { NextRequest, NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/adminAuth'
import { getAllPropertiesAdmin, createProperty } from '@/lib/properties'

export async function GET() {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const properties = await getAllPropertiesAdmin()
  return NextResponse.json({ properties })
}

export async function POST(request: NextRequest) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await request.json().catch(() => null)
  const source = body?.source
  const slug = typeof body?.slug === 'string' ? body.slug.trim() : ''
  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const image = typeof body?.image === 'string' ? body.image.trim() : ''

  if (source !== 'buy' && source !== 'corporate-leasing') {
    return NextResponse.json({ error: 'source must be "buy" or "corporate-leasing".' }, { status: 400 })
  }
  if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
    return NextResponse.json({ error: 'Slug must contain only lowercase letters, numbers, and hyphens.' }, { status: 400 })
  }
  if (!name) return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
  if (!image) return NextResponse.json({ error: 'Image is required.' }, { status: 400 })

  let details = {}
  if (typeof body?.details === 'string' && body.details.trim()) {
    try {
      details = JSON.parse(body.details)
    } catch {
      return NextResponse.json({ error: 'Advanced Details must be valid JSON.' }, { status: 400 })
    }
  } else if (typeof body?.details === 'object' && body.details) {
    details = body.details
  }

  try {
    const property = await createProperty({
      source,
      slug,
      name,
      developer: body?.developer || null,
      image,
      city: body?.city || null,
      state: body?.state || null,
      status: body?.status || null,
      priceRange: body?.priceRange || null,
      description: body?.description || null,
      reraCertified: !!body?.reraCertified,
      reraNumber: body?.reraNumber || null,
      details,
    })
    return NextResponse.json({ ok: true, property })
  } catch (err: unknown) {
    const message = err instanceof Error && err.message.includes('Unique constraint')
      ? 'A property with this slug already exists for this source.'
      : 'Could not create property.'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}

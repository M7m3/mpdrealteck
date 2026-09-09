import { NextRequest, NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/adminAuth'
import { uploadImageFromDataUrl } from '@/lib/cloudinary'

const MAX_BYTES = 8 * 1024 * 1024 // 8MB

export async function POST(request: NextRequest) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await request.json().catch(() => null)
  const dataUrl = typeof body?.dataUrl === 'string' ? body.dataUrl : ''
  const folder = body?.folder === 'blog' ? 'mpdrealteck/blog' : 'mpdrealteck/properties'

  if (!dataUrl.startsWith('data:image/')) {
    return NextResponse.json({ error: 'A valid image is required.' }, { status: 400 })
  }

  // Rough size check on the base64 payload before sending to Cloudinary.
  const base64Length = dataUrl.length - dataUrl.indexOf(',') - 1
  const approxBytes = base64Length * 0.75
  if (approxBytes > MAX_BYTES) {
    return NextResponse.json({ error: 'Image must be under 8MB.' }, { status: 400 })
  }

  try {
    const url = await uploadImageFromDataUrl(dataUrl, folder)
    return NextResponse.json({ ok: true, url })
  } catch {
    return NextResponse.json({ error: 'Image upload failed. Please try again.' }, { status: 500 })
  }
}

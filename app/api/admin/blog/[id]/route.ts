import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { isAdminAuthenticated } from '@/lib/adminAuth'
import { prisma } from '@/lib/prisma'
import { sanitizeBlogContent, extractImageUrls, countImages, MAX_IMAGES } from '@/lib/blog'
import { BLOG_CACHE_TAG } from '@/lib/blogData'

interface RouteParams {
  params: Promise<{ id: string }>
}

export async function GET(_request: NextRequest, { params }: RouteParams) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  const post = await prisma.blogPost.findUnique({ where: { id } })
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ post })
}

export async function PATCH(request: NextRequest, { params }: RouteParams) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  const body = await request.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })

  const data: Record<string, unknown> = {}
  if (typeof body.title === 'string') data.title = body.title.trim()
  if (typeof body.excerpt === 'string') data.excerpt = body.excerpt.trim() || null
  if (typeof body.published === 'boolean') data.published = body.published

  if (typeof body.contentHtml === 'string') {
    if (countImages(body.contentHtml) > MAX_IMAGES) {
      return NextResponse.json({ error: `A post can have at most ${MAX_IMAGES} images.` }, { status: 400 })
    }
    const contentHtml = sanitizeBlogContent(body.contentHtml)
    data.contentHtml = contentHtml
    data.images = extractImageUrls(contentHtml)
  }

  const post = await prisma.blogPost.update({ where: { id }, data }).catch(() => null)
  if (!post) return NextResponse.json({ error: 'Could not update post.' }, { status: 400 })

  revalidateTag(BLOG_CACHE_TAG, { expire: 0 })
  return NextResponse.json({ ok: true, post })
}

export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  await prisma.blogPost.delete({ where: { id } }).catch(() => null)
  revalidateTag(BLOG_CACHE_TAG, { expire: 0 })
  return NextResponse.json({ ok: true })
}

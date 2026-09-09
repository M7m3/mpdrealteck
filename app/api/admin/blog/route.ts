import { NextRequest, NextResponse, after } from 'next/server'
import { isAdminAuthenticated } from '@/lib/adminAuth'
import { prisma } from '@/lib/prisma'
import { sanitizeBlogContent, extractImageUrls, countImages, MAX_IMAGES } from '@/lib/blog'
import { sendBlogNotificationEmail } from '@/lib/email'
import { revalidateTag } from 'next/cache'
import { BLOG_CACHE_TAG } from '@/lib/blogData'

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export async function GET() {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const posts = await prisma.blogPost.findMany({ orderBy: { publishedAt: 'desc' } })
  return NextResponse.json({ posts })
}

export async function POST(request: NextRequest) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await request.json().catch(() => null)
  const title = typeof body?.title === 'string' ? body.title.trim() : ''
  const excerpt = typeof body?.excerpt === 'string' ? body.excerpt.trim() : ''
  const rawContent = typeof body?.contentHtml === 'string' ? body.contentHtml : ''

  if (!title) return NextResponse.json({ error: 'Title is required.' }, { status: 400 })
  if (!rawContent.trim()) return NextResponse.json({ error: 'Content is required.' }, { status: 400 })
  if (countImages(rawContent) > MAX_IMAGES) {
    return NextResponse.json({ error: `A post can have at most ${MAX_IMAGES} images.` }, { status: 400 })
  }

  const contentHtml = sanitizeBlogContent(rawContent)
  const images = extractImageUrls(contentHtml)

  let slug = slugify(title)
  const existing = await prisma.blogPost.findUnique({ where: { slug } })
  if (existing) slug = `${slug}-${Date.now().toString(36)}`

  const post = await prisma.blogPost.create({
    data: { title, slug, excerpt: excerpt || null, contentHtml, images, published: true },
  })

  revalidateTag(BLOG_CACHE_TAG, { expire: 0 })

  // Notify subscribers after the response is sent — after() keeps the
  // serverless function alive for this instead of racing the response.
  after(async () => {
    const subscribers = await prisma.notificationSubscriber.findMany({ where: { active: true } })
    for (const sub of subscribers) {
      await sendBlogNotificationEmail({
        to: sub.email,
        title: post.title,
        excerpt: post.excerpt || 'A new market trends update has been published.',
        slug: post.slug,
        unsubscribeToken: sub.unsubscribeToken,
      }).catch(() => {})
    }
  })

  return NextResponse.json({ ok: true, post })
}

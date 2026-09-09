import { NextRequest, NextResponse } from 'next/server'
import { getPublishedPosts } from '@/lib/blogData'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const limitParam = searchParams.get('limit')
  const limit = limitParam ? Number(limitParam) : undefined

  const posts = await getPublishedPosts(limit)
  return NextResponse.json({
    posts: posts.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      images: p.images,
      publishedAt: p.publishedAt,
    })),
  })
}

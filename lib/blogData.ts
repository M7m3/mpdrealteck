import { unstable_cache } from 'next/cache'
import { prisma } from '@/lib/prisma'

export const BLOG_CACHE_TAG = 'blog-posts'

export const getPublishedPosts = unstable_cache(
  async (limit?: number) =>
    prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { publishedAt: 'desc' },
      ...(limit ? { take: limit } : {}),
    }),
  ['published-blog-posts'],
  { revalidate: 300, tags: [BLOG_CACHE_TAG] }
)

export const getPostBySlug = unstable_cache(
  async (slug: string) => prisma.blogPost.findFirst({ where: { slug, published: true } }),
  ['blog-post-by-slug'],
  { revalidate: 300, tags: [BLOG_CACHE_TAG] }
)

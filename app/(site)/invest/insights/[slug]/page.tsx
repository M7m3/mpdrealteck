import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/blogData'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Update Not Found | MPD Realteck' }
  return {
    title: `${post.title} | MPD Realteck Market Trends`,
    description: post.excerpt || undefined,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-24 md:pt-32">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link href="/invest" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 hover:text-blue-700">
          &larr; Back to Market Trends
        </Link>

        <span className="mt-6 block text-xs font-semibold text-slate-400">
          {new Date(post.publishedAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{post.title}</h1>

        <div
          className="prose-content mt-8 max-w-none text-base leading-relaxed text-slate-700 [&_img]:my-6 [&_img]:w-full [&_img]:rounded-xl [&_p]:mb-4 [&_strong]:font-bold [&_strong]:text-slate-900"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  )
}

import React from 'react'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import BlogTable from '@/components/admin/BlogTable'

export default async function AdminBlogPage() {
  const posts = await prisma.blogPost.findMany({ orderBy: { publishedAt: 'desc' } })
  const subscriberCount = await prisma.notificationSubscriber.count({ where: { active: true } })

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Market Trends Blog</h1>
          <p className="mt-1 text-sm text-slate-400">
            {subscriberCount} subscriber{subscriberCount === 1 ? '' : 's'} will be emailed when you publish.
          </p>
        </div>
        <Link
          href="/mpd-88/dashboard/blog/new"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700"
        >
          + New Update
        </Link>
      </div>

      <BlogTable
        posts={posts.map((p) => ({
          id: p.id,
          title: p.title,
          published: p.published,
          publishedAt: p.publishedAt.toISOString(),
        }))}
      />
    </div>
  )
}

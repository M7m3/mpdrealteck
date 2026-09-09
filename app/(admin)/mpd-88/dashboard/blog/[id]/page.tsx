import React from 'react'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import BlogForm from '@/components/admin/BlogForm'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function EditBlogPostPage({ params }: PageProps) {
  const { id } = await params
  const post = await prisma.blogPost.findUnique({ where: { id } })
  if (!post) notFound()

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-white">Edit Update</h1>
      <p className="mt-1 text-sm text-slate-400">{post.title}</p>
      <div className="mt-8">
        <BlogForm post={post} />
      </div>
    </div>
  )
}

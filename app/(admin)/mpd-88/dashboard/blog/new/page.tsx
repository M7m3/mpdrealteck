import React from 'react'
import BlogForm from '@/components/admin/BlogForm'

export default function NewBlogPostPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-white">New Market Trends Update</h1>
      <p className="mt-1 text-sm text-slate-400">This publishes immediately and notifies subscribers.</p>
      <div className="mt-8">
        <BlogForm />
      </div>
    </div>
  )
}

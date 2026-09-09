"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface PostRow {
  id: string
  title: string
  published: boolean
  publishedAt: string
}

export default function BlogTable({ posts }: { posts: PostRow[] }) {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return
    setDeletingId(id)
    try {
      const res = await fetch(`/api/admin/blog/${id}`, { method: 'DELETE' })
      if (res.ok) router.refresh()
    } finally {
      setDeletingId(null)
    }
  }

  if (posts.length === 0) {
    return <p className="mt-8 text-sm text-slate-500">No market trend updates yet.</p>
  }

  return (
    <div className="mt-6 space-y-3">
      {posts.map((post) => (
        <div key={post.id} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 p-5">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-white">{post.title}</h3>
              {!post.published && (
                <span className="rounded bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-400">Draft</span>
              )}
            </div>
            <p className="mt-1 text-xs text-slate-500">{new Date(post.publishedAt).toLocaleString()}</p>
          </div>
          <div className="flex gap-2">
            <Link
              href={`/mpd-88/dashboard/blog/${post.id}`}
              className="rounded-md border border-slate-700 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-slate-800"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(post.id, post.title)}
              disabled={deletingId === post.id}
              className="rounded-md border border-red-500/30 px-3 py-1.5 text-xs font-semibold text-red-400 hover:bg-red-500/10 disabled:opacity-50"
            >
              {deletingId === post.id ? 'Deleting…' : 'Delete'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

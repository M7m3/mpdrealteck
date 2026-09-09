"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import RichTextEditor from '@/components/admin/RichTextEditor'

interface BlogFormProps {
  post?: {
    id: string
    title: string
    excerpt: string | null
    contentHtml: string
    published: boolean
  }
}

export default function BlogForm({ post }: BlogFormProps) {
  const router = useRouter()
  const isEdit = !!post

  const [title, setTitle] = useState(post?.title || '')
  const [excerpt, setExcerpt] = useState(post?.excerpt || '')
  const [contentHtml, setContentHtml] = useState(post?.contentHtml || '')
  const [published, setPublished] = useState(post?.published ?? true)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const res = await fetch(isEdit ? `/api/admin/blog/${post!.id}` : '/api/admin/blog', {
        method: isEdit ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, excerpt, contentHtml, published }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong.')
        return
      }
      router.push('/mpd-88/dashboard/blog')
      router.refresh()
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
  const labelClass = 'mb-1.5 block text-[10px] font-bold uppercase tracking-wide text-slate-500'

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">{error}</div>
      )}

      {!isEdit && (
        <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 p-3 text-xs text-blue-200">
          Publishing sends an email to every subscriber who has enabled market trend notifications.
        </div>
      )}

      <div>
        <label className={labelClass}>Title</label>
        <input required value={title} onChange={(e) => setTitle(e.target.value)} className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>Excerpt (shown in the listing and notification email)</label>
        <textarea
          rows={2}
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className={inputClass}
          placeholder="A one or two sentence summary of today's update…"
        />
      </div>

      <div>
        <label className={labelClass}>Content</label>
        <RichTextEditor value={contentHtml} onChange={setContentHtml} />
      </div>

      <label className="flex items-center gap-2 text-sm text-slate-300">
        <input
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
          className="h-4 w-4 rounded border-slate-700 bg-slate-800"
        />
        Published (visible on the Invest page)
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 disabled:opacity-60"
      >
        {submitting ? 'Saving…' : isEdit ? 'Save Changes' : 'Publish Update'}
      </button>
    </form>
  )
}

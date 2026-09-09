"use client"

import React, { useEffect, useRef, useState } from 'react'

const MAX_IMAGES = 3

interface RichTextEditorProps {
  value: string
  onChange: (html: string) => void
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [imageCount, setImageCount] = useState(0)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || ''
      setImageCount(editorRef.current.querySelectorAll('img').length)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const emitChange = () => {
    if (!editorRef.current) return
    onChange(editorRef.current.innerHTML)
    setImageCount(editorRef.current.querySelectorAll('img').length)
  }

  const format = (command: 'bold' | 'italic') => {
    editorRef.current?.focus()
    document.execCommand(command)
    emitChange()
  }

  const handleImageFile = async (file: File) => {
    if (imageCount >= MAX_IMAGES) {
      setError(`You can add up to ${MAX_IMAGES} images per post.`)
      return
    }
    setError('')
    setUploading(true)
    try {
      const dataUrl: string = await new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = reject
        reader.readAsDataURL(file)
      })

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dataUrl, folder: 'blog' }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Image upload failed.')
        return
      }

      editorRef.current?.focus()
      document.execCommand('insertHTML', false, `<img src="${data.url}" alt="" style="max-width:100%;border-radius:12px;margin:16px 0;" />`)
      emitChange()
    } catch {
      setError('Image upload failed. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 rounded-t-lg border border-b-0 border-slate-700 bg-slate-800 px-3 py-2">
        <button
          type="button"
          onClick={() => format('bold')}
          className="flex h-8 w-8 items-center justify-center rounded-md font-black text-slate-200 hover:bg-slate-700"
          aria-label="Bold"
        >
          B
        </button>
        <button
          type="button"
          onClick={() => format('italic')}
          className="flex h-8 w-8 items-center justify-center rounded-md italic text-slate-200 hover:bg-slate-700"
          aria-label="Italic"
        >
          I
        </button>
        <div className="mx-1 h-5 w-px bg-slate-700" />
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) handleImageFile(file)
            e.target.value = ''
          }}
        />
        <button
          type="button"
          disabled={uploading || imageCount >= MAX_IMAGES}
          onClick={() => fileInputRef.current?.click()}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-slate-700 disabled:opacity-50"
        >
          {uploading ? 'Uploading…' : `Add Image (${imageCount}/${MAX_IMAGES})`}
        </button>
        {error && <span className="text-xs text-red-400">{error}</span>}
      </div>
      <div
        ref={editorRef}
        contentEditable
        onInput={emitChange}
        onBlur={emitChange}
        suppressContentEditableWarning
        className="min-h-[240px] rounded-b-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm leading-relaxed text-slate-100 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 [&_img]:rounded-xl"
      />
      <p className="mt-1.5 text-[11px] text-slate-500">
        Select text and use Bold/Italic to format. Up to {MAX_IMAGES} images can be inserted anywhere in the post.
      </p>
    </div>
  )
}

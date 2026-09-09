"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export default function AccountSettings() {
  const { user, loading, logout, refreshUser } = useAuth()
  const router = useRouter()

  const [name, setName] = useState('')
  const [nameSaved, setNameSaved] = useState(false)
  const [nameError, setNameError] = useState('')
  const [savingName, setSavingName] = useState(false)

  const [message, setMessage] = useState('')
  const [messageSent, setMessageSent] = useState(false)
  const [messageError, setMessageError] = useState('')
  const [sendingMessage, setSendingMessage] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login?redirect=/account')
    }
  }, [loading, user, router])

  useEffect(() => {
    // Seed the editable field once the async-loaded user arrives.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (user) setName(user.name || '')
  }, [user])

  if (loading || !user) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="text-sm text-slate-500">Loading your account…</p>
      </div>
    )
  }

  const handleSaveName = async (e: React.FormEvent) => {
    e.preventDefault()
    setNameError('')
    setNameSaved(false)
    setSavingName(true)
    try {
      const res = await fetch('/api/account', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      })
      const data = await res.json()
      if (!res.ok) {
        setNameError(data.error || 'Could not save your name.')
        return
      }
      await refreshUser()
      setNameSaved(true)
    } catch {
      setNameError('Network error. Please try again.')
    } finally {
      setSavingName(false)
    }
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessageError('')
    setSendingMessage(true)
    try {
      const res = await fetch('/api/account/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      })
      const data = await res.json()
      if (!res.ok) {
        setMessageError(data.error || 'Could not send your message.')
        return
      }
      setMessageSent(true)
      setMessage('')
    } catch {
      setMessageError('Network error. Please try again.')
    } finally {
      setSendingMessage(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">

      {/* Profile Card */}
      <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-lg font-bold tracking-tight text-slate-900">Profile</h2>
        <p className="mt-1 text-sm text-slate-500">Update how your name appears across your account.</p>

        <div className="mt-6">
          <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">
            Email Address
          </label>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500">
            {user.email}
          </div>
        </div>

        <form onSubmit={handleSaveName} className="mt-5">
          <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">
            Display Name
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              required
              maxLength={80}
              placeholder="Your full name"
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setNameSaved(false)
              }}
            />
            <button
              type="submit"
              disabled={savingName}
              className="shrink-0 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 disabled:opacity-60"
            >
              {savingName ? 'Saving…' : 'Save'}
            </button>
          </div>
          {nameError && <p className="mt-2 text-xs font-medium text-red-600">{nameError}</p>}
          {nameSaved && <p className="mt-2 text-xs font-medium text-emerald-600">Name updated.</p>}
        </form>
      </div>

      {/* Shortlist Link */}
      <Link
        href="/shortlist"
        className="flex items-center justify-between rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:border-blue-500/30 hover:shadow-md sm:p-8"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-bold tracking-tight text-slate-900">Your Shortlisted Properties</h3>
            <p className="text-sm text-slate-500">Review the flats and homes you&apos;ve shown interest in.</p>
          </div>
        </div>
        <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>

      {/* Contact Us Card */}
      <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-lg font-bold tracking-tight text-slate-900">Contact Us Regarding Our Services</h2>
        <p className="mt-1 text-sm text-slate-500">
          Send a message directly to our team — it goes straight to our advisory desk.
        </p>

        {messageSent && (
          <div className="mt-5 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <svg className="h-5 w-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <div>
              <p className="text-sm font-bold text-emerald-800">Message sent successfully</p>
              <p className="mt-0.5 text-xs text-emerald-700">Our team will get back to you shortly.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSendMessage} className="mt-5">
          <textarea
            rows={4}
            required
            maxLength={4000}
            placeholder="Tell us what you need help with…"
            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm leading-relaxed text-slate-700 outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {messageError && <p className="mt-2 text-xs font-medium text-red-600">{messageError}</p>}
          <button
            type="submit"
            disabled={sendingMessage}
            className="mt-4 w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 disabled:opacity-60 sm:w-auto"
          >
            {sendingMessage ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Sign Out */}
      <button
        onClick={async () => {
          await logout()
          router.push('/')
        }}
        className="w-full rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50"
      >
        Sign Out
      </button>
    </div>
  )
}

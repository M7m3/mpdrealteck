"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminGate({ pinVerified }: { pinVerified: boolean }) {
  const router = useRouter()
  const [step, setStep] = useState<'pin' | 'login'>(pinVerified ? 'login' : 'pin')
  const [pin, setPin] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const submitPin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const res = await fetch('/api/admin/pin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Incorrect PIN.')
        return
      }
      setStep('login')
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const submitLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Incorrect username or password.')
        return
      }
      router.push('/mpd-88/dashboard')
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-sm rounded-xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">MPD Realteck</span>
          <h1 className="mt-2 text-xl font-bold tracking-tight text-white">
            {step === 'pin' ? 'Admin Access' : 'Sign In'}
          </h1>
          <p className="mt-2 text-xs text-slate-500">
            {step === 'pin' ? 'Enter the access PIN to continue.' : 'Enter your admin credentials.'}
          </p>
        </div>

        {error && (
          <div className="mt-5 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300">
            {error}
          </div>
        )}

        {step === 'pin' ? (
          <form onSubmit={submitPin} className="mt-6 space-y-4">
            <input
              type="password"
              inputMode="numeric"
              required
              autoFocus
              placeholder="Access PIN"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-center text-lg font-bold tracking-[0.4em] text-white outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 disabled:opacity-60"
            >
              {submitting ? 'Verifying…' : 'Continue'}
            </button>
          </form>
        ) : (
          <form onSubmit={submitLogin} className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wide text-slate-500">Username</label>
              <input
                type="text"
                required
                autoFocus
                autoComplete="username"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wide text-slate-500">Password</label>
              <input
                type="password"
                required
                autoComplete="current-password"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 disabled:opacity-60"
            >
              {submitting ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

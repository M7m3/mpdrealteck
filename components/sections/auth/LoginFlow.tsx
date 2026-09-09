"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

const RESEND_COOLDOWN_SECONDS = 45

export default function LoginFlow() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get('redirect') || '/account'
  const { refreshUser } = useAuth()

  const [step, setStep] = useState<'email' | 'otp'>('email')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [devHint, setDevHint] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [cooldown, setCooldown] = useState(0)
  const cooldownRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    return () => {
      if (cooldownRef.current) clearInterval(cooldownRef.current)
    }
  }, [])

  const startCooldown = () => {
    setCooldown(RESEND_COOLDOWN_SECONDS)
    if (cooldownRef.current) clearInterval(cooldownRef.current)
    cooldownRef.current = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          if (cooldownRef.current) clearInterval(cooldownRef.current)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const requestOtp = async (e?: React.FormEvent) => {
    e?.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const res = await fetch('/api/auth/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }
      setDevHint(!data.delivered)
      setStep('otp')
      startCooldown()
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const verifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }
      await refreshUser()
      router.push(redirectTo)
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-xl border border-slate-200/60 bg-white p-8 shadow-sm">
      <div className="text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          Secure Email Sign-In
        </div>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
          {step === 'email' ? 'Sign in to your account' : 'Enter your code'}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {step === 'email'
            ? "We'll email you a one-time code — no password needed."
            : (
              <>We sent a 6-digit code to <span className="font-semibold text-slate-900">{email}</span></>
            )}
        </p>
      </div>

      {error && (
        <div className="mt-5 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {devHint && step === 'otp' && (
        <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
          Email sending isn&apos;t configured yet — check the server console/logs for your verification code.
        </div>
      )}

      {step === 'email' ? (
        <form onSubmit={requestOtp} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">
              Email Address
            </label>
            <input
              type="email"
              required
              autoFocus
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98] disabled:opacity-60"
          >
            {submitting ? 'Sending code…' : 'Send Verification Code'}
          </button>
        </form>
      ) : (
        <form onSubmit={verifyOtp} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">
              6-Digit Code
            </label>
            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              required
              autoFocus
              placeholder="000000"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-center text-2xl font-bold tracking-[0.5em] outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
            />
          </div>
          <button
            type="submit"
            disabled={submitting || code.length !== 6}
            className="w-full rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98] disabled:opacity-60"
          >
            {submitting ? 'Verifying…' : 'Verify & Sign In'}
          </button>

          <div className="flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={() => {
                setStep('email')
                setCode('')
                setError('')
              }}
              className="font-semibold text-slate-500 hover:text-slate-700"
            >
              &larr; Change email
            </button>
            <button
              type="button"
              disabled={cooldown > 0 || submitting}
              onClick={() => requestOtp()}
              className="font-semibold text-blue-600 hover:text-blue-700 disabled:text-slate-400"
            >
              {cooldown > 0 ? `Resend code in ${cooldown}s` : 'Resend code'}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

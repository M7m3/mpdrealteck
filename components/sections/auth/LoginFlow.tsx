"use client"

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

const RESEND_COOLDOWN_SECONDS = 45

type Tab = 'login' | 'register'
type RegisterStep = 'form' | 'verify'

export default function LoginFlow() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get('redirect') || '/account'
  const { refreshUser } = useAuth()

  const [tab, setTab] = useState<Tab>('login')

  // Login state
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [loginSubmitting, setLoginSubmitting] = useState(false)
  const [needsVerification, setNeedsVerification] = useState(false)

  // Register state
  const [registerStep, setRegisterStep] = useState<RegisterStep>('form')
  const [name, setName] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [registerError, setRegisterError] = useState('')
  const [registerSubmitting, setRegisterSubmitting] = useState(false)
  const [devHint, setDevHint] = useState(false)

  // Verify-email state
  const [code, setCode] = useState('')
  const [verifyError, setVerifyError] = useState('')
  const [verifySubmitting, setVerifySubmitting] = useState(false)
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError('')
    setNeedsVerification(false)
    setLoginSubmitting(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      })
      const data = await res.json()
      if (!res.ok) {
        setLoginError(data.error || 'Something went wrong. Please try again.')
        if (data.needsVerification) {
          setNeedsVerification(true)
          setRegisterEmail(loginEmail)
        }
        return
      }
      await refreshUser()
      router.push(redirectTo)
    } catch {
      setLoginError('Network error. Please try again.')
    } finally {
      setLoginSubmitting(false)
    }
  }

  const resendFromLogin = async () => {
    setLoginSubmitting(true)
    try {
      await fetch('/api/auth/resend-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail }),
      })
      setTab('register')
      setRegisterStep('verify')
      startCooldown()
    } finally {
      setLoginSubmitting(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setRegisterError('')
    if (password !== confirmPassword) {
      setRegisterError('Passwords do not match.')
      return
    }
    setRegisterSubmitting(true)
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email: registerEmail, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        setRegisterError(data.error || 'Something went wrong. Please try again.')
        return
      }
      setDevHint(!data.delivered)
      setRegisterStep('verify')
      startCooldown()
    } catch {
      setRegisterError('Network error. Please try again.')
    } finally {
      setRegisterSubmitting(false)
    }
  }

  const resendVerification = async () => {
    setVerifySubmitting(true)
    try {
      const res = await fetch('/api/auth/resend-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: registerEmail }),
      })
      const data = await res.json()
      if (res.ok) {
        setDevHint(!data.delivered)
        startCooldown()
      }
    } finally {
      setVerifySubmitting(false)
    }
  }

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setVerifyError('')
    setVerifySubmitting(true)
    try {
      const res = await fetch('/api/auth/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: registerEmail, code }),
      })
      const data = await res.json()
      if (!res.ok) {
        setVerifyError(data.error || 'Something went wrong. Please try again.')
        return
      }
      await refreshUser()
      router.push(redirectTo)
    } catch {
      setVerifyError('Network error. Please try again.')
    } finally {
      setVerifySubmitting(false)
    }
  }

  const showingVerify = tab === 'register' && registerStep === 'verify'

  return (
    <div className="mx-auto w-full max-w-md rounded-xl border border-slate-200/60 bg-white p-8 shadow-sm">
      {!showingVerify && (
        <div className="mb-6 grid grid-cols-2 gap-1 rounded-lg bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setTab('login')}
            className={`rounded-md py-2.5 text-sm font-semibold transition-all duration-200 ${
              tab === 'login' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Existing User? Log In
          </button>
          <button
            type="button"
            onClick={() => setTab('register')}
            className={`rounded-md py-2.5 text-sm font-semibold transition-all duration-200 ${
              tab === 'register' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            New User? Register Now
          </button>
        </div>
      )}

      {tab === 'login' && (
        <>
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Welcome back</h1>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">Sign in with your email and password.</p>
          </div>

          {loginError && (
            <div className="mt-5 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {loginError}
              {needsVerification && (
                <button
                  type="button"
                  onClick={resendFromLogin}
                  disabled={loginSubmitting}
                  className="mt-2 block font-semibold text-red-800 underline underline-offset-2"
                >
                  Resend verification code
                </button>
              )}
            </div>
          )}

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Email Address</label>
              <input
                type="email"
                required
                autoFocus
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 font-mono">Password</label>
                <Link href="/forgot-password" className="text-xs font-semibold text-blue-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={loginSubmitting}
              className="w-full rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98] disabled:opacity-60"
            >
              {loginSubmitting ? 'Signing in…' : 'Log In'}
            </button>
          </form>
        </>
      )}

      {tab === 'register' && registerStep === 'form' && (
        <>
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Create your account</h1>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">We&apos;ll send a code to verify your email.</p>
          </div>

          {registerError && (
            <div className="mt-5 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{registerError}</div>
          )}

          <form onSubmit={handleRegister} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Full Name</label>
              <input
                type="text"
                required
                autoFocus
                placeholder="Your full name"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Email Address</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Password</label>
              <input
                type="password"
                required
                minLength={8}
                placeholder="At least 8 characters"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Confirm Password</label>
              <input
                type="password"
                required
                minLength={8}
                placeholder="Re-enter your password"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={registerSubmitting}
              className="w-full rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98] disabled:opacity-60"
            >
              {registerSubmitting ? 'Creating account…' : 'Register Now'}
            </button>
          </form>
        </>
      )}

      {showingVerify && (
        <>
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Verify your email</h1>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              We sent a 6-digit code to <span className="font-semibold text-slate-900">{registerEmail}</span>
            </p>
          </div>

          {verifyError && (
            <div className="mt-5 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{verifyError}</div>
          )}
          {devHint && (
            <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
              Email sending isn&apos;t configured yet — check the server console/logs for your verification code.
            </div>
          )}

          <form onSubmit={handleVerify} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">6-Digit Code</label>
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
              disabled={verifySubmitting || code.length !== 6}
              className="w-full rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98] disabled:opacity-60"
            >
              {verifySubmitting ? 'Verifying…' : 'Verify & Continue'}
            </button>

            <div className="flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={() => {
                  setRegisterStep('form')
                  setCode('')
                  setVerifyError('')
                }}
                className="font-semibold text-slate-500 hover:text-slate-700"
              >
                &larr; Back
              </button>
              <button
                type="button"
                disabled={cooldown > 0 || verifySubmitting}
                onClick={resendVerification}
                className="font-semibold text-blue-600 hover:text-blue-700 disabled:text-slate-400"
              >
                {cooldown > 0 ? `Resend code in ${cooldown}s` : 'Resend code'}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

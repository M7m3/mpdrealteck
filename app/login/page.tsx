import React, { Suspense } from 'react'
import LoginFlow from '@/components/sections/auth/LoginFlow'

export const metadata = {
  title: 'Sign In | Brijvaas Assets',
  description: 'Sign in with your email to save shortlisted properties and manage your account.',
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Suspense fallback={null}>
          <LoginFlow />
        </Suspense>
      </div>
    </main>
  )
}

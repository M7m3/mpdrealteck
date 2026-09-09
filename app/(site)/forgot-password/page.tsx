import React, { Suspense } from 'react'
import ForgotPasswordFlow from '@/components/sections/auth/ForgotPasswordFlow'

export const metadata = {
  title: 'Reset Password | MPD Realteck',
  description: 'Reset your account password using a one-time email code.',
}

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Suspense fallback={null}>
          <ForgotPasswordFlow />
        </Suspense>
      </div>
    </main>
  )
}

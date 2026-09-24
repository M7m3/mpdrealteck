import React from 'react'
import AboutSection from '@/components/sections/about/About'

export const metadata = {
  title: '40 Years of Real Estate Trust',
  description:
    'Since 1986, MPD Realteck has built real estate trust under Madhusudan and Hardik Tundon, now serving clients with end-to-end services across India.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-16 md:pt-24">
      {/* Editorial Mini-Hero */}
      <div className="relative bg-slate-900 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            The Standard of Veracity
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-slate-400 leading-relaxed">
            We operate out of absolute transparency. Meet the generations steering clean processing lines across forty years of active execution.
          </p>
        </div>
      </div>

      {/* Main Legacy Component Block */}
      <AboutSection />
    </main>
  )
}
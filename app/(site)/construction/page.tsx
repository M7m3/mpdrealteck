import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Construction from '@/components/sections/construction/Construction'

export const metadata = {
  title: 'MPD Construction Services in India',
  description:
    'MPD Construction delivers end-to-end building and project execution, from groundbreaking to handover, RERA-compliant and managed across India.',
  alternates: { canonical: '/construction' },
}

const TRUST_STRIP = ['40+ Years of Legacy', 'RERA-Compliant Execution', 'In-House Project Management']

export default function ConstructionPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Photo Hero */}
      <div className="relative mt-0 w-full min-h-[70vh] overflow-hidden bg-slate-900 md:mt-16">
        <Image
          src="https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e"
          alt="Construction workers on an active MPD Construction building site"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/30 sm:bg-gradient-to-r sm:from-slate-950/90 sm:via-slate-950/55 sm:to-slate-950/10" />

        <div className="relative z-10 flex min-h-[70vh] w-full items-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-300 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                MPD Construction
              </div>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08]">
                Building real estate,
                <br />
                <span className="text-blue-400">end to end.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 lg:text-lg">
                In-house construction and project execution for residential, commercial, and industrial developments, built to RERA compliance standards and delivered on schedule.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="#construction-inquiry">
                  <button className="rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]">
                    Get a Construction Quote
                  </button>
                </Link>
                <Link href="#construction-process">
                  <button className="rounded-lg border border-white/25 bg-white/5 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/15">
                    Our Process
                  </button>
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                {TRUST_STRIP.map((item) => (
                  <span key={item} className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-300">
                    <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Construction />
    </main>
  )
}

import React from 'react'
import Invest from '@/components/sections/home/Invest'

export const metadata = {
  title: 'Invest in Real Estate | Brijvaas Assets',
  description: 'Yield-driven real estate investment, managed end-to-end — vetted asset portfolios, optimized tax pipelines, and institutional-grade compliance.',
}

export default function InvestPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-16 md:pt-24">
      {/* Editorial Header Segment */}
      <div className="relative bg-slate-900 py-20 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />
        <div className="absolute -bottom-32 left-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-md bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-400 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Institutional Asset Management
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-[1.1]">
            Invest in Real Estate, Managed End-to-End
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-slate-400 leading-relaxed">
            We acquire, optimize, and manage commercial land and high-performing corporate assets — so your capital compounds without the operational friction.
          </p>
        </div>
      </div>

      <Invest />
    </main>
  )
}

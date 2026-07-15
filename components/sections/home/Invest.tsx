"use client"

import React from 'react'
import Image from 'next/image'

export default function Invest() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32" id="invest">
      {/* Structural Design Element: Subtle Geometric Grid & Ambient Accent Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40" />
      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-slate-900/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
          
          {/* Left Column: Asymmetric Copy Block & Micro-Metrics Grid */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2.5 rounded-full bg-blue-50 border border-blue-100 px-3 py-1">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Institutional Asset Management
              </span>
            </div>
            
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.1]">
              Yield-driven real estate. <br className="hidden sm:inline" />
              <span className="text-blue-600">Managed end-to-end.</span>
            </h2>
            
            <p className="mt-6 text-base leading-relaxed text-slate-600 lg:text-lg">
              We acquire, optimize, and manage commercial land and high-performing corporate assets. Our investment framework strips away the friction of property management while maintaining deep risk mitigation and institutional-grade compliance at every step.
            </p>

            {/* Custom Structural Content Blocks with Interactive Layers */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              
              {/* Card 1 */}
              <div className="group rounded-xl border border-slate-200/80 bg-white/75 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-white hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-600/20 transition-transform duration-300 group-hover:scale-110">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-bold tracking-tight text-slate-900"> Vetted Asset Portfolios </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Every asset undergoes strict title confirmation, zoning clearances, and long-term macro-economic performance tracking before listing.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group rounded-xl border border-slate-200/80 bg-white/75 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-white hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-bold tracking-tight text-slate-900"> Optimized Tax Pipelines </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Structure your capital deployment through custom legal frameworks designed to minimize write-offs and shield recurring distribution yields.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Imagery with Balanced Geometric Accents & Live Stat Overlay */}
          <div className="relative lg:col-span-5 flex justify-center">
            {/* Structural Architectural Backdrop Block */}
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-slate-900 pointer-events-none hidden sm:block lg:translate-x-2 lg:translate-y-2" />
            
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-200/20 bg-slate-900 shadow-2xl lg:aspect-[3/4]">
              <Image
                src="/commonImages/invettt.png"
                alt="Premium commercial real estate architecture asset modeling"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover object-center opacity-95 transition-transform duration-700 hover:scale-105"
                priority
              />
              
              {/* Inner Gradient Shade Overlay for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Creative Feature Overlay: Live Portfolio Stats Widget */}
            <div className="absolute -bottom-6 -left-6 hidden w-72 rounded-xl border border-slate-200/80 bg-white/95 backdrop-blur-md p-5 shadow-xl sm:block transition-all duration-300 hover:-translate-y-1 hover:border-slate-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Active Asset Pool
                  </span>
                </div>
                <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold font-mono text-emerald-700">
                  LIVE YIELD
                </span>
              </div>
              <div className="mt-3 flex items-baseline space-x-2">
                <span className="text-3xl font-extrabold tracking-tight text-slate-900">14.8%</span>
                <span className="text-xs font-bold text-emerald-600 font-mono flex items-center">
                  <svg className="mr-0.5 h-3 w-3" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M6 2l2.5 4h-5L6 2z" />
                  </svg>
                  +1.2% YOY
                </span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500 border-t border-slate-100 pt-2">
                Average annualized net lease yield distributed across regional commercial portfolios.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
"use client"

import React from 'react'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-36 border-t border-slate-800" id="cta">
      {/* Precision Geometric Grid Mesh & Dramatic Light Flare Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/4 w-[300px] h-[300px] bg-slate-800/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Active Brokerage Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-400 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            Direct Property Desk & Land Trading
          </div>

          {/* Section Heading & Aggressive Action Sub-Copy */}
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            Ready to acquire your next <br className="hidden sm:inline" />
            <span className="text-blue-500">Commercial Site or Land Plot?</span>
          </h2>
          
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-400 lg:text-lg">
            Connect directly with Brijvaas Asset Dealers. From prime roadside commercial land allocations to ready-to-move corporate leasing buildings, we negotiate, clear titles, and secure the inventory you need to build or scale.
          </p>

          {/* Premium High-Contrast Deal Box Action Hub */}
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-800 bg-slate-950/60 p-6 backdrop-blur-md sm:p-8 shadow-2xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-center text-left">
              
              {/* Context Block */}
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h18v3.75H3V3Z" />
                  </svg>
                  On-Market & Off-Market Registry
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  Speak directly with our field managers for instant hot-list inventories, verified layout plot drawings, and immediate physical site visits.
                </p>
              </div>

              {/* Action Buttons Layer mapped to agents.md tokens */}
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]">
                    Contact Dealer Desk
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </Link>
                
                <Link href="/buy" className="w-full sm:w-auto">
                  <button className="w-full rounded-lg border border-slate-700 bg-slate-800/40 px-6 py-4 text-sm font-bold text-slate-300 transition-all duration-200 hover:bg-slate-800 hover:text-white backdrop-blur-sm">
                    View Plot Maps
                  </button>
                </Link>
              </div>

            </div>
          </div>

          {/* Footnote Compliance Anchor */}
          <div className="mt-10 flex items-center justify-center gap-6 text-xs text-slate-500 tracking-wide">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-500/80" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
              100% Direct Registry
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <span>Full UP-RERA Legal Compliance</span>
          </div>

        </div>
      </div>
    </section>
  )
}
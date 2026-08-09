"use client"

import React from 'react'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32" id="about-legacy">
      {/* Precision grid backdrop simulating master architecture lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      <div className="absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Upper Layout: The 40-Year Creed */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-md bg-blue-50 border border-blue-100 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Four Decades of Veracity
              </span>
            </div>
            
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.15]">
              Built on word. <br />
              Sustained through <span className="text-blue-600">unflinching execution.</span>
            </h2>
            
            <p className="mt-6 text-base leading-relaxed text-slate-600 lg:text-lg">
              For over forty years, our handshake has stood as an unalterable contract. We do not navigate the markets with transient agendas or short-term gains; our focus remains anchored in multi-generational transparency, clean legal pathways, and safeguarding relationships across regional territories.
            </p>

            {/* Core Pillars Grid — High Texture & Alternating Shades */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                <span className="text-xs font-bold font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">1986 – ORIGIN</span>
                <h4 className="mt-3 text-base font-bold text-slate-900 tracking-tight">Absolute Title Integrity</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Every dealing is subjected to ruthless verification pipelines, confirming historical lineage before formal handovers.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-md transition-all duration-300 hover:bg-slate-950">
                <span className="text-xs font-bold font-mono text-blue-400 bg-slate-800 px-2 py-1 rounded">PERMANENCE</span>
                <h4 className="mt-3 text-base font-bold text-white tracking-tight">Zero Advisory Posturing</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  We are market principles and operators. We do not offer passing speculations—we defend clear, uncompromised real transactions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Layout: Asymmetric Dual Image Comp */}
          <div className="relative lg:col-span-5 flex items-center justify-center pt-12 lg:pt-0">
            <div className="relative w-full max-w-[360px] aspect-[3/4] rounded-2xl bg-slate-900 shadow-2xl overflow-hidden border border-slate-200/20">
              <Image 
                src="/commonImages/about1.jpg"
                alt="Institutional structural lineage representation"
                fill
                sizes="360px"
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 opacity-90"
                priority
              />
            </div>
            
            {/* Offset Floating Secondary Image Block */}
            <div className="absolute -bottom-8 -left-6 w-[200px] aspect-square rounded-xl bg-slate-950 shadow-2xl overflow-hidden border-4 border-white hidden sm:block">
              <Image 
                src="/commonImages/about3.jpg"
                alt="Generational legacy documentation detail"
                fill
                sizes="200px"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Lower Layout: Executive Boardroom Identity (No Images) */}
        <div className="mt-24 lg:mt-36 border-t border-slate-200/80 pt-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
              The Directorate Desk
            </span>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Accountability Stops Here
            </h3>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Chairman / CEO Block */}
            <div className="group relative rounded-xl border border-slate-800 bg-slate-900 p-8 shadow-xl transition-all duration-300 hover:border-blue-500/40">
              <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl from-blue-600/10 to-transparent rounded-tr-xl pointer-events-none" />
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold tracking-widest text-blue-400 uppercase font-mono">Chief Executive Officer</span>
                  <h4 className="mt-1 text-2xl font-bold tracking-tight text-white">Madhusudan Tundon</h4>
                </div>
                <div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-colors">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
                  </svg>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 border-t border-slate-800 pt-4">
                Guarding the fundamental transactional structures of the organization. Four decades of direct market resolution across regional corridors.
              </p>
            </div>

            {/* COO Block */}
            <div className="group relative rounded-xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-500/30 hover:shadow-md">
              <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl from-blue-600/5 to-transparent rounded-tr-xl pointer-events-none" />
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold tracking-widest text-blue-600 uppercase font-mono">Chief Operating Officer</span>
                  <h4 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">Hardik Tundon</h4>
                </div>
                <div className="h-10 w-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
                Directing deployment modernizations and operational legal processing. Orchestrating pristine procedural clearance for active deal tables.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
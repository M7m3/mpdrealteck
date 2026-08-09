"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PROPERTIES_DB } from '@/data/db'

export default function PropertyAll() {
  // Extract all 5 verified physical property holdings from data.js
  const activeHoldings = PROPERTIES_DB.slice(0, 5)

  return (
    <section className="relative bg-slate-50 py-24 lg:py-32" id="brokerage-inventory">
      {/* Structural background architectural grid alignment token */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic, Alternating Layout Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {activeHoldings.map((asset, index) => {
            const isFullWidthRow = index === 3 || index === 4
            const displayPrice = asset.pricingAndInventory?.priceRange || "Price on Request"
            const uniqueCity = asset.location?.city || "Uttar Pradesh"
            
            return (
              <div
                key={asset.id}
                className={`group relative rounded-xl border border-slate-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/20 flex flex-col justify-between
                  ${isFullWidthRow ? 'md:col-span-1 lg:col-span-1' : ''}`}
              >
                <div>
                  {/* Media Wrapper Layer */}
                  <div className="relative h-64 w-full overflow-hidden rounded-lg bg-slate-900 shadow-inner">
                    <Image
                      src={asset.image}
                      alt={`${asset.name} structural development site imagery`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      priority={index < 3}
                    />
                    
                    {/* Absolute Overlays matching compliance registries */}
                    <div className="absolute inset-x-3 top-3 flex items-center justify-between pointer-events-none">
                      <span className="rounded bg-slate-900/90 border border-white/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md">
                        {asset.projectTimeline?.status || "Verified Real Estate"}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Core Description Layers */}
                  <div className="mt-6">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                      <svg className="h-4 w-4 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      <span>{uniqueCity}</span>
                    </div>

                    <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-1">
                      {asset.name}
                    </h3>
                    
                    <span className="block mt-1 text-[11px] font-medium font-mono text-slate-400 tracking-tight">
                      Developer: {asset.developer}
                    </span>

                    <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-3">
                      {asset.location?.geographicalContext || "Direct brokerage allocation mapping to active development transport sectors."}
                    </p>
                  </div>
                </div>

                {/* Technical Micro Spec Metrics Board */}
                <div className="mt-6 border-t border-b border-slate-100 py-4 my-1 text-xs text-slate-500 font-semibold grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5m16.5-16.5v16.5M3.75 12h16.5M5.625 5.625h12.75M5.625 18.375h12.75" />
                    </svg>
                    <span className="truncate">{asset.geometry?.projectSize || "Verified Plot"}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-end text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] uppercase tracking-wider font-bold">Registry Ready</span>
                  </div>
                </div>

                {/* Costing Base and Navigation Interactive Key Footer */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="max-w-[70%]">
                    <span className="block text-[9px] uppercase tracking-widest font-bold text-slate-400">
                      Inventory Assessment Base
                    </span>
                    <span className="text-sm font-extrabold tracking-tight text-slate-900 truncate block">
                      {displayPrice}
                    </span>
                  </div>

                  <Link href={`/buy/${asset.id}`} className="focus:outline-none shrink-0">
                    <button className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md transition-all duration-200 hover:bg-blue-700 active:scale-95">
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </Link>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
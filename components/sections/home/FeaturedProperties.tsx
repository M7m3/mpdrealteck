"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PROPERTIES_DB } from '@/data/db'

export default function FeaturedProperties() {
  // Extract exactly four primary properties from our centralized dataset
  const featuredAssets = PROPERTIES_DB.slice(0, 4)

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32" id="featured-properties">
      {/* Background Subtle Tech-Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-slate-200 pb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 border border-blue-100 px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Curated Portfolio
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Featured Asset Allocations
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Explore high-performance corporate leasing, institutional commercial infrastructure, and premium residential land packages[cite: 6].
            </p>
          </div>
          <div className="mt-6 md:mt-0 shrink-0">
            <Link href="/properties">
              <button className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 hover:text-slate-900 shadow-sm">
                View Full Inventory
              </button>
            </Link>
          </div>
        </div>

        {/* Dynamic, Alternating High-Contrast Asset Grid Layout */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredAssets.map((asset, index) => {
            const displayPrice = asset.pricingAndInventory?.priceRange?.split('-')[0]?.trim() || "Inquire"
            // Alternate card styling: Even indexes get Deep Base Dark, Odd indexes get Premium White
            const isDarkCard = index % 2 === 0

            return (
              <div 
                key={asset.id}
                className={`group relative rounded-xl border p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between
                  ${isDarkCard 
                    ? 'bg-slate-900 border-slate-800 text-slate-400' 
                    : 'bg-white border-slate-200/80 text-slate-600'
                  }`}
              >
                <div>
                  {/* Media Container Layer */}
                  <div className="relative h-52 w-full overflow-hidden rounded-lg bg-slate-950 shadow-inner">
                    <Image
                      src={asset.image}
                      alt={`${asset.name} asset imagery`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
                    />
                    
                    {/* Absolute Overlays */}
                    <div className="absolute inset-x-3 top-3 flex items-center justify-between pointer-events-none">
                      <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border
                        ${isDarkCard 
                          ? 'bg-slate-900/90 text-white border-white/10' 
                          : 'bg-slate-900/85 text-white border-white/15'
                        }`}
                      >
                        {asset.approvalStatus?.reraCertified ? 'RERA Certified' : 'Verified'}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Meta Details Layer */}
                  <div className="mt-5">
                    <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-500">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      <span>{asset.location?.city || "Regional"}</span>
                    </div>
                    
                    <h3 className={`mt-2 text-lg font-bold tracking-tight transition-colors duration-200 line-clamp-1
                      ${isDarkCard ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'}`}
                    >
                      {asset.name}
                    </h3>
                  </div>
                </div>

                {/* Tactical Features Micro-Specs Block */}
                <div className={`mt-5 grid grid-cols-2 gap-2 border-t border-b py-3.5 my-1
                  ${isDarkCard ? 'border-slate-800' : 'border-slate-100'}`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-medium">
                    <svg className="h-4 w-4 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L12 7.5l4.143 2.25m-11.143 4.5L2.25 12l4.179 2.25m0 0 5.571 3 5.571-3m0 0 4.179-2.25-4.179-2.25m-11.142 4.5L12 16.5l4.143-2.25" />
                    </svg>
                    <span className={isDarkCard ? 'text-slate-400' : 'text-slate-500'}>Clear Title</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium justify-end">
                    <svg className="h-4 w-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.956 11.956 0 0 1 12 2.714Z" />
                    </svg>
                    <span className={isDarkCard ? 'text-slate-400' : 'text-slate-500'}>100% Vetted</span>
                  </div>
                </div>

                {/* Pricing and Streamlined Icon Action Footer */}
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest font-bold text-slate-400">
                      Investment Base
                    </span>
                    <span className={`text-base font-extrabold tracking-tight ${isDarkCard ? 'text-white' : 'text-slate-900'}`}>
                      {displayPrice}
                    </span>
                  </div>
                  
                  <Link href={`/properties/${asset.id}`} className="focus:outline-none">
                    <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm transition-all duration-200 hover:bg-blue-700 active:scale-95">
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
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
import React from 'react'
import PropertyAll from '@/components/sections/buyProperty/PropertyAll'

export const metadata = {
  title: 'Direct Placement Brokerage Listings | Brijvaas Assets',
  description: 'Examine clear-title commercial site allocations, independent plots, and high-rise vertical holdings managed under firm regulatory guidelines.',
}

export default function BuyInventoryPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-16 md:pt-24">
      
      {/* Luxury Editorial Header Segment */}
      <div className="relative bg-slate-900 py-24 text-center md:text-left overflow-hidden border-b border-slate-800">
        {/* Spatial blueprint grid system lines overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
        <div className="absolute -bottom-32 right-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-400 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              On-Market Placement Desk
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Verified Physical <br />
              <span className="text-blue-500">Asset Registries</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-400 max-w-xl">
              Avoid intermediate chain vulnerabilities. Secure verified layout plot structures and grade-A commercial configurations directly through our processing table.
            </p>
          </div>
        </div>
      </div>

      {/* Main Core Showcase Component Section */}
      <PropertyAll />
    </main>
  )
}
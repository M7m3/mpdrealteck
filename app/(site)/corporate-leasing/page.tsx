import React from 'react'
import CorporateLeasing from '@/components/sections/corporateLeasing/CorporateLeasing'
import { getProperties, toLeasingAsset } from '@/lib/properties'

export const metadata = {
  title: 'Corporate Leasing Desk | MPD Realteck',
  description: 'Grade-A office space and premium commercial units available for corporate leasing, including One FNG in Noida and Ganga Ratan Square in Agra.',
}

export default async function CorporateLeasingPage() {
  const properties = await getProperties('corporate-leasing')
  const assets = properties.map(toLeasingAsset)
  return (
    <main className="min-h-screen bg-slate-50 pt-16 md:pt-24">
      {/* Editorial Header Segment */}
      <div className="relative bg-slate-900 py-20 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />
        <div className="absolute -bottom-32 right-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-md bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-400 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Corporate Leasing Desk
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-[1.1]">
            Grade-A Office & Commercial Space, Leased Directly
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-slate-400 leading-relaxed">
            Skip the intermediary chain. Our corporate leasing desk connects you directly with verified office and commercial inventory across Noida and Agra.
          </p>
        </div>
      </div>

      <CorporateLeasing properties={assets} />
    </main>
  )
}

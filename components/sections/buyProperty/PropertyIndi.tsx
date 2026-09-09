"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ShortlistButton from '@/components/common/ShortlistButton'
import PropertyReviews from '@/components/common/PropertyReviews'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BuyAsset = Record<string, any>

interface PropertyIndiProps {
  asset: BuyAsset | null
}

export default function PropertyIndi({ asset }: PropertyIndiProps) {
  if (!asset) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center bg-slate-50">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-600 mb-6 border border-red-200">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Asset Profile Archive Not Found</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">The requested identification pointer does not match active inventory ledger items.</p>
        <Link href="/buy" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]">
          Return to Active Inventory
        </Link>
      </div>
    )
  }

  const displayPrice = asset.pricingAndInventory?.priceRange || "Price on Request"
  const isApproved = asset.approvalStatus?.mvdaApproved || asset.approvalStatus?.noidaAuthorityApproved || asset.approvalStatus?.jilaPanchayatApproved

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      
      {/* 1. Immersive Corporate Header Layer */}
      <div className="relative bg-slate-900 pt-20 pb-16 text-white overflow-hidden border-b border-slate-800 md:pt-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/buy" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300 transition-colors mb-6 group">
            <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Active Portfolio
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded bg-blue-500/10 border border-blue-500/30 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-blue-400 backdrop-blur-md">
                  {asset.projectTimeline?.status || "Verified Real Estate"}
                </span>
                {isApproved && (
                  <span className="rounded bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 backdrop-blur-md flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Regulatory Cleared
                  </span>
                )}
              </div>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">{asset.name}</h1>
              <p className="mt-2 text-sm text-slate-400">
                Developed by <span className="text-blue-400 font-semibold">{asset.developer}</span> {asset.legacyEstablished && `— Institutional Track Record since ${asset.legacyEstablished}`}
              </p>
            </div>
            
            <div className="bg-slate-800/60 border border-slate-700/50 p-5 rounded-xl backdrop-blur-md lg:text-right shrink-0 min-w-[280px]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block font-mono">Market Asset Valuation</span>
              <span className="text-3xl font-black text-white tracking-tight block mt-1">{displayPrice}</span>
              {asset.pricingAndInventory?.eoiTokenAmount && (
                <div className="mt-2 flex items-center lg:justify-end gap-2 text-xs text-blue-400 font-mono font-medium">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                  EOI Allocation Token: {asset.pricingAndInventory.eoiTokenAmount}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Structural Layout Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Informative Column Block (Left/Center) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Primary High-Resolution Architectural Frame */}
            <div className="relative h-[320px] sm:h-[480px] w-full overflow-hidden rounded-xl border border-slate-200/60 bg-slate-900 shadow-md group">
              <Image
                src={asset.image}
                alt={`${asset.name} Asset Representation Imagery`}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              <div className="absolute top-4 right-4">
                <ShortlistButton propertyId={asset.id} propertySource="buy" />
              </div>
            </div>

            {/* Geographical Site Identification Matrix */}
            <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm sm:p-8 transition-all duration-200 hover:shadow-md">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Geographical Context & Core Matrix
              </h3>
              <p className="mt-4 text-xs font-bold tracking-widest text-blue-600 uppercase font-mono">
                {asset.location?.city}, {asset.location?.state} {asset.location?.postalCode && `— ${asset.location.postalCode}`}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {asset.location?.geographicalContext}
              </p>
              <div className="mt-5 rounded-lg bg-slate-50 border border-slate-200/60 p-4 text-xs text-slate-700">
                <span className="font-bold text-slate-900 block uppercase mb-2 font-mono tracking-wider text-[10px]">Site Parcel Legal Registry:</span>
                <span className="font-medium selection:bg-blue-100">{asset.location?.address}</span>
              </div>
            </div>

            {/* Structural Parameters & Geometry Metrics */}
            <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-5 flex items-center gap-3">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5m16.5-16.5v16.5M3.75 12h16.5M5.625 5.625h12.75M5.625 18.375h12.75" />
                </svg>
                Blueprint Geometry & Metrics
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-lg bg-slate-50 border border-slate-200/40 p-4 transition-colors hover:bg-slate-100/50">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">Project Size</span>
                  <span className="text-base font-bold text-slate-900 block mt-1">{asset.geometry?.projectSize}</span>
                </div>
                <div className="rounded-lg bg-slate-50 border border-slate-200/40 p-4 transition-colors hover:bg-slate-100/50">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">Total Allocation</span>
                  <span className="text-base font-bold text-slate-900 block mt-1">{asset.geometry?.totalUnits || "Plotted Space"} Units</span>
                </div>
                <div className="rounded-lg bg-slate-50 border border-slate-200/40 p-4 transition-colors hover:bg-slate-100/50">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">Elevation Scale</span>
                  <span className="text-sm font-bold text-slate-900 block mt-1 truncate">
                    {typeof asset.geometry?.structuralFloors === 'object' ? 'Multi-Structure' : asset.geometry?.structuralFloors || "Ground Layout"}
                  </span>
                </div>
                <div className="rounded-lg bg-slate-50 border border-slate-200/40 p-4 transition-colors hover:bg-slate-100/50">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">Target Delivery</span>
                  <span className="text-xs font-bold text-slate-900 block mt-1 truncate">{asset.projectTimeline?.expectedPossession}</span>
                </div>
              </div>
            </div>

            {/* Inventory Real Estate Configuration Sub-Table */}
            <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4 flex items-center gap-3">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 17.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                Available Core Configuration Profiles
              </h3>
              <div className="overflow-x-auto rounded-lg border border-slate-200/60">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-bold uppercase font-mono tracking-wider text-slate-500">
                      <th className="px-4 py-3">Typology Unit Type</th>
                      <th className="px-4 py-3">Dimension Scale Area</th>
                      <th className="px-4 py-3 text-right">Base Floor Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
                    {Array.isArray(asset.pricingAndInventory?.unitTypes) && asset.pricingAndInventory.unitTypes.map((unit: BuyAsset, idx: number) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="px-4 py-4 text-slate-900 font-bold">{unit.type}</td>
                        <td className="px-4 py-4 text-slate-600 font-mono">
                          {typeof unit.sizes === 'object' && !Array.isArray(unit.sizes) 
                            ? `Carpet: ${unit.sizes.carpetArea || 'N/A'}` 
                            : Array.isArray(unit.sizes) ? unit.sizes.join(' | ') : unit.sizes}
                        </td>
                        <td className="px-4 py-4 text-right font-bold text-blue-600 font-mono">{unit.startingPrice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Micro-Proximity Logistics Metric Timeline Map */}
            <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-5 flex items-center gap-3">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8m6-3h.008v.008H21V12Zm-3 3h.008v.008H18v-.008Zm-3 3h.008v.008H15v-.008Zm-3-6h.008v.008H12v-.008ZM9 15h.008v.008H9V15Zm-3 3h.008v.008H6v-.008Zm-3-3h.008v.008H3V15Zm0-3h.008v.008H3V12Zm0-3h.008v.008H3V9Zm0-3h.008v.008H3V6Z" />
                </svg>
                Proximity Metrics & Transit Nodes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {asset.proximityMetrics?.map((metric: BuyAsset, idx: number) => (
                  <div key={idx} className="flex justify-between items-center p-3 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
                    <span className="text-xs text-slate-700 font-semibold truncate pr-2">{metric.target}</span>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-1 rounded shrink-0 font-mono">{metric.distance}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Comprehensive Facilities Blueprint Array */}
            <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-5 flex items-center gap-3">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A1.79 1.79 0 0 0 20 19.75l-5.83-5.83m0 0a2.89 2.89 0 0 1-4.07-4.07m4.07 4.07a2.89 2.89 0 0 0-4.07-4.07m0 0A2.25 2.25 0 0 0 8 10.5a2.25 2.25 0 0 0 2.25 2.25m-4.07-4.07L1.42 1.42A1.79 1.79 0 0 0 0 2.83l5.83 5.83m0 0a2.89 2.89 0 0 0 4.07 4.07M24 4.25a1.79 1.79 0 0 0-1.42-1.42l-5.83 5.83m0 0a2.89 2.89 0 0 0-4.07-4.07m0 0A2.25 2.25 0 0 0 10.5 8a2.25 2.25 0 0 0 2.25 2.25m4.07-4.07 5.83-5.83A1.79 1.79 0 0 0 24 1.42l-5.83 5.83" />
                </svg>
                Integrated Infrastructure Ecosystem
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {asset.amenitiesList?.map((amenity: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                    <svg className="h-4 w-4 text-emerald-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span className="text-xs font-semibold text-slate-700 leading-tight">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <PropertyReviews propertyId={asset.id} propertySource="buy" />
          </div>

          {/* Strategic Side-panel Column Block (Right) */}
          <div className="space-y-6">
            
            {/* Regulatory Governance Vault */}
            <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4 font-mono">Governance & Framework Compliance</h4>
              <div className="space-y-4">
                {asset.approvalStatus?.reraCertified ? (
                  <div className="rounded-lg bg-emerald-50 border border-emerald-200/60 p-4">
                    <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      UP-RERA Certified Tracking Node
                    </div>
                    {asset.approvalStatus.reraNumber && (
                      <span className="block mt-2 text-xs font-mono font-bold text-slate-600 select-all bg-white border border-slate-200 rounded-md px-3 py-2 shadow-xs">
                        {asset.approvalStatus.reraNumber}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="rounded-lg bg-amber-50 border border-amber-200/60 p-4">
                    <span className="text-amber-800 text-xs font-bold uppercase tracking-wider block">Zoning Registration</span>
                    <span className="block mt-1 text-xs text-amber-700 leading-relaxed font-semibold">Verification tracking parameters active within local authority masterplans.</span>
                  </div>
                )}

                <div className="divide-y divide-slate-100 border-t border-slate-100 mt-2">
                  {asset.approvalStatus?.mvdaApproved && (
                    <div className="flex justify-between py-3 text-xs font-semibold">
                      <span className="text-slate-500">MVDA Clearance</span>
                      <span className="text-emerald-600 font-bold">Approved Authority</span>
                    </div>
                  )}
                  {asset.approvalStatus?.noidaAuthorityApproved && (
                    <div className="flex justify-between py-3 text-xs font-semibold">
                      <span className="text-slate-500">Noida Authority Clearance</span>
                      <span className="text-emerald-600 font-bold">Validated Mapping</span>
                    </div>
                  )}
                  {asset.approvalStatus?.jilaPanchayatApproved && (
                    <div className="flex flex-col gap-1 py-3 text-xs font-semibold">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Zila Panchayat Agra</span>
                        <span className="text-emerald-600 font-bold">Permit Authorized</span>
                      </div>
                      {asset.approvalStatus.permitNumber && (
                        <span className="text-[10px] text-slate-400 font-mono tracking-tight text-right block mt-1">
                          No: {asset.approvalStatus.permitNumber}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Signature Asset Value Framework (USPs) */}
            <div className="rounded-xl border border-slate-200/60 bg-slate-900 p-6 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />
              <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-blue-400 mb-5 font-mono flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.173-.443.833-.443 1.006 0l2.094 5.258 5.688.43c.48.036.672.624.293.94l-4.242 3.904 1.316 5.592c.11.468-.389.83-.818.554l-5.022-2.642-5.022 2.642c-.43.276-.928-.086-.818-.554l1.316-5.592-4.243-3.904c-.379-.317-.187-.904.292-.94l5.688-.43 2.094-5.258Z" />
                </svg>
                Signature Value Framework
              </h4>
              <ul className="space-y-4">
                {asset.signatureUSPs?.map((usp: string, idx: number) => (
                  <li key={idx} className="flex gap-3 text-xs leading-relaxed text-slate-300">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-blue-500/10 border border-blue-500/30 text-[10px] font-black text-blue-400 font-mono">
                      0{idx + 1}
                    </span>
                    <span>{usp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Investment Intelligence Insights Block */}
            <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4 font-mono">Investment Intelligence Insights</h4>
              <div className="space-y-3">
                {Object.entries(asset.investmentInsights || {}).map(([key, val], idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-slate-100 flex gap-3 items-start">
                    <svg className="h-4 w-4 text-blue-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                    </svg>
                    <div>
                      <span className="block text-[9px] uppercase font-bold tracking-wider text-slate-400 font-mono leading-none">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-xs font-bold text-slate-800 leading-snug block mt-1">{String(val)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Channel Transaction Control Terminal */}
            <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm text-center transition-all duration-200 hover:shadow-md">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501c1.153-.086 2.294-.213 3.423-.379 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v5.278Z" />
                </svg>
              </span>
              <h4 className="text-base font-bold tracking-tight text-slate-900">Initiate Acquisition Framework</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 max-w-xs mx-auto">
                Connect with our transactional placement desk to lock portfolio pricing lines and evaluate title abstracts.
              </p>
              <div className="mt-5">
                <Link href="/contact" className="block focus:outline-none">
                  <button className="w-full rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]">
                    Contact Us Page Direct Axis
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
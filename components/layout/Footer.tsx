"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PROPERTIES_DB } from '@/data/db'

export default function Footer() {
  // Extract active project links dynamically from our central schema
  const assetLinks = PROPERTIES_DB.map(p => ({ name: p.name, href: `/buy/${p.id}` }))

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800" id="global-footer">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Main Structural Link Matrix Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          
          {/* Brand/Authority Column (Takes 4 Grid Units on Large Screens) */}
          <div className="space-y-5 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-9 w-9 overflow-hidden shrink-0">
                <Image
                  src="/logo/logo-nobg.png"
                  alt="MPD Realteck Corporate Symbol"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white uppercase font-sans">
                MPD <span className="text-blue-600">Realteck</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Premium infrastructure, high-value asset positioning, and institutional land development portfolios engineered for modern market execution.
            </p>
          </div>

          {/* Dynamic Portfolio Items Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Asset Portfolios
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {assetLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors duration-200 block truncate">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Hub Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Corporate Desk
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {[
                { name: 'Corporate Profile', href: '/about' },
                { name: 'Asset Catalog', href: '/buy' },
                { name: 'Acquisition Inquiry', href: '/contact' },
                { name: 'Sell Property Portal', href: '/sell' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Offices Deployments Grid (Takes 4 Grid Units) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Regional Operations
            </h3>
            <ul role="list" className="space-y-4 text-xs leading-relaxed">
              
              {/* HQ Desk */}
              <li className="flex items-start gap-3 border-b border-slate-800/60 pb-3">
                <span className="text-blue-500 font-bold font-mono uppercase shrink-0">MAIN HQ:</span>
                <span className="text-slate-300">GF-1 Ekta Raj Arcade Complex, Shastripuram, Agra, UP</span>
              </li>

              {/* Branch 2 Desk */}
              <li className="flex items-start gap-3 border-b border-slate-800/60 pb-3">
                <span className="text-blue-500 font-bold font-mono uppercase shrink-0">ZONE 02:</span>
                <span className="text-slate-300">First Floor, Block 94, Sanjay Place, Civil Lines, Agra (Near St. Patricks School)</span>
              </li>

              {/* Alternate/Vrindavan Base Contact Node */}
              <li className="flex items-start gap-3 pb-2">
                <span className="text-slate-500 font-bold font-mono uppercase shrink-0">VRINDAVAN:</span>
                <span className="text-slate-400">A6, Shri Radha Florence, Rukmini Vihar, Vrindavan</span>
              </li>

              {/* Audio Pipelines & Communications Contact Channels */}
              <li className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-mono uppercase">Desk 1:</span>
                  <a href="tel:+917055848887" className="font-semibold text-slate-300 hover:text-white transition-colors font-mono">+91 70558 48887</a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-mono uppercase">Desk 2:</span>
                  <a href="tel:+918218707339" className="font-semibold text-slate-300 hover:text-white transition-colors font-mono">+91 82187 07339</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Structural Horizontal Privacy Divider */}
        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} MPD Realteck Infrastructure Group. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500 font-mono">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Protocol</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Placement</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
"use client"

import React from 'react'
import Link from 'next/link'
import { PROPERTIES_DB } from '@/data/db'

export default function Footer() {
  // Extract active project links dynamically from our central schema
  const assetLinks = PROPERTIES_DB.map(p => ({ name: p.name, href: `/properties/${p.id}` }))

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800" id="global-footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        
        {/* Main Links Structure */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand/Authority Column */}
          <div className="space-y-4">
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              BRIJVAAS ASSETS
            </span>
            <p className="text-sm leading-relaxed text-slate-400">
              Premium infrastructure, institutional leasing frameworks, and gated residential land portfolios engineered for high-value execution[cite: 7].
            </p>
          </div>

          {/* Dynamic Portfolio Items Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Asset Locations
            </h3>
            <ul role="list" className="mt-4 space-y-2">
              {assetLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Hub Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Corporate Desk
            </h3>
            <ul role="list" className="mt-4 space-y-2">
              {[
                { name: 'Corporate Profile', href: '/about' },
                { name: 'Asset Catalog', href: '/properties' },
                { name: 'Acquisition Inquiry', href: '/contact' },
                { name: 'RERA Compliance Ledger', href: '/compliance' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support Grid */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Regional Offices
            </h3>
            <ul role="list" className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-slate-500 font-medium">HQ:</span>
                <span>A6, Shri Radha Florence, Rukmini Vihar, Vrindavan</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-500 font-medium">Inquiries:</span>
                <a href="tel:+918003209733" className="hover:text-white transition-colors">+91 800-3209-733</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-500 font-medium">Email:</span>
                <a href="mailto:info@brijvaas.com" className="hover:text-white transition-colors">info@brijvaas.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Structural Horizontal Divider */}
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Brijvaas Infrastructure. All rights reserved. 
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-slate-400">Privacy Protocol</Link>
            <Link href="/terms" className="hover:text-slate-400">Terms of Escrow</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
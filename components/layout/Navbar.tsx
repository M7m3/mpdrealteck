"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './MobileMenu'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Sell Property', href: '/sell' },
  { label: 'Buy Property', href: '/buy' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 z-40 h-16 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-all duration-200 md:h-20">
        <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-full items-center justify-between">
            
            {/* Logo Grouping - Optimized for 563x443 aspect ratio to maximize visibility */}
            <div className="flex shrink-0 items-center">
              <Link 
                href="/" 
                className="relative block h-12 w-20 transition-transform duration-200 hover:scale-[1.02] md:h-16 md:w-28"
              >
                <Image
                  src="/logo/logo-nobg.png"
                  alt="Brand Logo"
                  fill
                  priority
                  sizes="(max-width: 768px) 112px, 112px"
                  className="object-contain object-left"
                />
              </Link>
            </div>

            {/* Desktop Menu - Pure Premium Typography & Transitions */}
            <div className="hidden items-center space-x-10 md:flex">
              <div className="flex items-center space-x-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="relative py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-200 hover:after:scale-x-100"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              {/* CTA Blueprint Component from agents.md */}
              <div className="flex items-center border-l border-slate-200 pl-8">
                <button className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]">
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile Toggle Trigger Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                type="button"
                className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 focus:outline-none"
                aria-label="Open Menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Decoupled Mobile Slide-over Drawer Menu Sheet Component */}
      <MobileMenu 
        open={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navLinks={NAV_LINKS} 
      />
    </>
  )
}
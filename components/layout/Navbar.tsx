"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/contexts/AuthContext'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Sell Property', href: '/sell' },
  { label: 'Buy Property', href: '/buy' },
  { label: 'Corporate Leasing', href: '/corporate-leasing' },
  { label: 'Invest in Real Estate', href: '/invest' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const { user, loading } = useAuth()

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

              {/* Auth-Aware Action Cluster */}
              <div className="flex items-center gap-4 border-l border-slate-200 pl-8">
                {!loading && user ? (
                  <>
                    <Link
                      href="/shortlist"
                      aria-label="Your Shortlisted Properties"
                      className="flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-blue-600"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                      </svg>
                      Saved
                    </Link>
                    <Link href="/account" aria-label="Account Settings">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600 transition-all duration-200 hover:bg-blue-100">
                        {(user.name || user.email).charAt(0).toUpperCase()}
                      </span>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-blue-600"
                    >
                      Log In
                    </Link>
                    <Link href="/contact">
                      <button className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]">
                        Get Started
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Auth Quick Access — primary browsing nav lives in the bottom app tab bar */}
            <div className="flex items-center gap-1 md:hidden">
              {!loading && user ? (
                <>
                  <Link
                    href="/shortlist"
                    aria-label="Your Shortlisted Properties"
                    className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 focus:outline-none"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                  </Link>
                  <Link href="/account" aria-label="Account Settings" className="p-1">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                      {(user.name || user.email).charAt(0).toUpperCase()}
                    </span>
                  </Link>
                </>
              ) : (
                <Link
                  href="/login"
                  aria-label="Log In"
                  className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H3" />
                  </svg>
                </Link>
              )}
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/contexts/AuthContext'
import { NAV_SERVICES } from '@/lib/services'

const NAV_LINKS_BEFORE = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Buy & Sell', href: '/buy' },
]

const NAV_LINKS_AFTER = [
  { label: 'Contact Us', href: '/contact' },
]

const navLinkClass =
  'relative py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-blue-600 after:transition-transform after:duration-200 hover:after:scale-x-100'

function ServicesMenu() {
  return (
    <div className="group relative">
      <button
        type="button"
        className={`flex items-center gap-1 ${navLinkClass}`}
      >
        Services
        <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      <div className="invisible absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
          <div className="grid grid-cols-2 gap-1 p-3">
            {NAV_SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-lg p-3 transition-colors duration-150 hover:bg-slate-50"
              >
                <span className="block text-sm font-bold text-slate-900">{service.name}</span>
                <span className="mt-1 block text-xs leading-relaxed text-slate-500 line-clamp-2">{service.description}</span>
              </Link>
            ))}
          </div>
          <Link
            href="/services"
            className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-5 py-3 text-sm font-semibold text-blue-600 transition-colors duration-150 hover:bg-slate-100"
          >
            View All Services
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

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
                {NAV_LINKS_BEFORE.map((link) => (
                  <Link key={link.label} href={link.href} className={navLinkClass}>
                    {link.label}
                  </Link>
                ))}
                <ServicesMenu />
                {NAV_LINKS_AFTER.map((link) => (
                  <Link key={link.label} href={link.href} className={navLinkClass}>
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
                <Link href="/login">
                  <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 hover:text-slate-900">
                    Log In
                  </button>
                </Link>
              )}
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

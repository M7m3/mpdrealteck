"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  navLinks: Array<{ label: string; href: string }>
}

export default function MobileMenu({ open, onClose, navLinks }: MobileMenuProps) {
  
  // Prevent body scrolling when menu drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div 
      className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop Dimmer Overlay */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Slide-over Drawer Frame */}
      <div 
        className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header inside drawer */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200">
          <Link href="/" onClick={onClose} className="relative block h-10 w-16">
            <Image
              src="/logo/logo-nobg.png"
              alt="Brand Logo"
              fill
              sizes="64px"
              className="object-contain object-left"
            />
          </Link>
          
          {/* Circular Close Target */}
          <button
            onClick={onClose}
            type="button"
            className="rounded-full p-2 text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Dynamic Nav Target Links Stack */}
        <div className="mt-8 flex flex-col space-y-2 flex-grow">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="flex h-12 items-center rounded-lg px-4 text-base font-medium text-slate-900 transition-all duration-150 hover:bg-slate-50 hover:text-blue-600 hover:pl-6 border-l-0 hover:border-l-4 hover:border-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Callouts mapped to agents.md Blueprint */}
        <div className="mt-auto border-t border-slate-200 pt-6 space-y-3">
          <button className="w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 active:scale-[0.98]">
            Get Started
          </button>
          <button 
            onClick={onClose}
            className="w-full rounded-lg border border-slate-200 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
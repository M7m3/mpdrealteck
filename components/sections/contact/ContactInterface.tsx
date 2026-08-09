"use client"

import React, { useState } from 'react'

export default function ContactInterface() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Asset Acquisition',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Routing communications channel initiated:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: 'Asset Acquisition', message: '' })
  }

  return (
    <div className="text-slate-900 font-sans selection:bg-blue-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings Hierarchy */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
            Verified Corporate Advisory Desks
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Commanding Presence in Regional Property Placement
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Whether launching an expressions-of-interest campaign for your land holdings or seeking institutional leasing access, our partners welcome your brief.
          </p>
        </div>

        {/* Master Layout Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Core Communication Vectors & Offices */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Rapid Escalation Hotlines */}
            <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 font-mono block mb-4">Direct Audio Pipelines</span>
              <div className="space-y-4">
                <a href="tel:+917055848887" className="group flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 bg-blue-50 rounded-lg text-blue-600 flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.018a14.991 14.991 0 0 1-6.505-6.505l2.017-1.514c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <span className="text-base font-semibold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">+91 70558 48887</span>
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-400">Primary Desk</span>
                </a>
                
                <a href="tel:+918218707339" className="group flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 bg-blue-50 rounded-lg text-blue-600 flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.018a14.991 14.991 0 0 1-6.505-6.505l2.017-1.514c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <span className="text-base font-semibold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">+91 82187 07339</span>
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-400">Secondary Desk</span>
                </a>
              </div>
            </div>

            {/* Office Locations Block */}
            <div className="space-y-5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono block">Physical Office Deployments</span>
              
              {/* HQ */}
              <div className="rounded-xl border border-slate-200/60 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-5 w-5 text-blue-600 shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight uppercase">Main Corporate Branch</h4>
                    <p className="text-sm leading-relaxed text-slate-600 mt-1 font-medium">
                      GF-1 Ekta Raj Arcade Complex,<br />
                      Shastripuram, Agra, UP
                    </p>
                  </div>
                </div>
              </div>

              {/* Branch 2 */}
              <div className="rounded-xl border border-slate-200/60 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-5 w-5 text-blue-600 shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-10.5h16.5M2.25 5.25h19.5m-18 10.5h16.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight uppercase">Commercial Trade Zone Office</h4>
                    <p className="text-sm leading-relaxed text-slate-600 mt-1 font-medium">
                      First floor, Block 94, Sanjay Place,<br />
                      Civil Lines, Agra, UP
                    </p>
                    <span className="inline-block mt-2 text-xs bg-slate-100 rounded-md px-2 py-1 font-semibold text-slate-600 border border-slate-200">
                      Locality Anchor: Near St. Patricks School
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Block: Secure Transmission Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-slate-200/60 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-6">Initialize Structured Correspondence</h3>

              {submitted && (
                <div className="mb-6 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                  <svg className="h-5 w-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <div>
                    <p className="text-sm font-bold text-emerald-800">Message dispatched successfully</p>
                    <p className="mt-1 text-xs text-emerald-700">A member of our brokerage desk will respond within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSendMessage} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Principal Representative Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g., Mandeep Singh"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Secure Return Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="representative@firm.com"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Primary Matter Classification</label>
                  <select 
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm bg-white outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-slate-700 font-medium"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="Asset Acquisition">Asset Acquisition Interest</option>
                    <option value="Property Liquidation">Property Liquidation / Listing Onboarding</option>
                    <option value="Industrial Foundry Leasing">Industrial & Foundry Space Leasing</option>
                    <option value="Corporate Partnerships">General Trust & Estate Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 font-mono">Brief Statement of Intent</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Outline spatial parameters, valuation expectations, or development plots under consideration..."
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-slate-700 leading-relaxed"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full text-center rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]">
                    Dispatch Message to Brokerage Desk
                  </button>
                  <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest mt-3 font-mono">
                    Routing Protected by Standard End-to-End Encryption Channels
                  </p>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
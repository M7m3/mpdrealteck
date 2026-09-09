import React from 'react'

export const metadata = {
  title: 'Privacy Protocol | MPD Realteck',
  description: 'How MPD Realteck collects, uses, and safeguards information shared through our brokerage desks and digital channels.',
}

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: 'When you submit an inquiry, valuation request, or listing intake form, we collect the details you provide directly — including your name, contact information, property details, and stated preferences.',
  },
  {
    title: 'How We Use Your Information',
    body: 'Submitted information is routed to the relevant regional brokerage desk to respond to your inquiry, schedule site visits, or progress a listing or acquisition. We do not sell your personal information to third parties.',
  },
  {
    title: 'Data Retention',
    body: 'Inquiry and listing records are retained for as long as reasonably necessary to service your request and maintain accurate transaction history, after which they are securely archived or removed.',
  },
  {
    title: 'Your Choices',
    body: 'You may request access to, correction of, or deletion of information you have shared with us at any time by contacting our advisory desk directly.',
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-16 md:pt-24">
      <div className="relative bg-slate-900 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Privacy Protocol
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-slate-400 leading-relaxed">
            How we collect, use, and safeguard information shared through our brokerage desks and digital channels.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-bold tracking-tight text-slate-900">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{section.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-slate-400">
          For questions regarding this protocol, contact our advisory desk via the{' '}
          <a href="/contact" className="font-semibold text-blue-600 hover:underline">Contact page</a>.
        </p>
      </div>
    </main>
  )
}

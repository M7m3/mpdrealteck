import React from 'react'

export const metadata = {
  title: 'Terms of Placement | MPD Realteck',
  description: 'The terms governing engagement with MPD Realteck brokerage desks, listing submissions, and acquisition inquiries.',
}

const SECTIONS = [
  {
    title: 'Brokerage Role',
    body: 'MPD Realteck acts as a direct placement intermediary between buyers, sellers, and developers. Listings, pricing, and availability are subject to change and should be independently verified before any transaction is finalized.',
  },
  {
    title: 'Listing Accuracy',
    body: 'Property details, approvals, and specifications are sourced from developers and regional authorities. While we make every effort to keep this information current, we recommend confirming title status, RERA registration, and physical specifications directly during site verification.',
  },
  {
    title: 'Inquiries & Communication',
    body: 'By submitting an inquiry, valuation request, or listing intake form, you consent to being contacted by our brokerage desk regarding your request via phone, email, or messaging channels.',
  },
  {
    title: 'No Financial Advice',
    body: 'Content on this site is provided for informational purposes and does not constitute investment, legal, or financial advice. Buyers and sellers should conduct independent due diligence before entering any agreement.',
  },
]

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-16 md:pt-24">
      <div className="relative bg-slate-900 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Terms of Placement
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-slate-400 leading-relaxed">
            The terms governing engagement with our brokerage desks, listing submissions, and acquisition inquiries.
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
          For questions regarding these terms, contact our advisory desk via the{' '}
          <a href="/contact" className="font-semibold text-blue-600 hover:underline">Contact page</a>.
        </p>
      </div>
    </main>
  )
}

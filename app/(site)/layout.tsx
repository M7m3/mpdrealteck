import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import '@/app/globals.css' // Or your path to tailwind styles
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import MobileTabBar from '@/components/layout/MobileTabBar'
import AppProviders from '@/components/providers/AppProviders'

const SITE_URL = 'https://www.mpdrealteck.in'
const DEFAULT_TITLE = 'Real Estate Consultants in Agra & Noida | MPD Realteck'
const DEFAULT_DESCRIPTION =
  'MPD Realteck is a 40-year real estate brokerage offering corporate land leasing, plot & land investment, property due diligence, and real estate consulting across Agra, Noida, Vrindavan, and emerging UP growth corridors.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | MPD Realteck',
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    'corporate leasing Agra',
    'commercial space for lease Noida',
    'land investment Agra',
    'plot investment Noida',
    'real estate due diligence Agra',
    'property title verification Noida',
    'real estate consultant Agra',
    'real estate advisory Noida',
    'RERA verified plots Agra',
  ],
  authors: [{ name: 'MPD Realteck' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'MPD Realteck',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: '/commonImages/hero4.webp', width: 1200, height: 630, alt: 'MPD Realteck Real Estate Brokerage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/commonImages/hero4.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'MPD Realteck',
  url: SITE_URL,
  logo: `${SITE_URL}/logo/logo-nobg.png`,
  image: `${SITE_URL}/commonImages/hero4.webp`,
  description: DEFAULT_DESCRIPTION,
  telephone: ['+91-70558-48887', '+91-90849-90284'],
  areaServed: ['Agra', 'Noida', 'Vrindavan', 'Dholera', 'Mumbai', 'Goa', 'Ayodhya'],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'GF-1 Ekta Raj Arcade Complex, Shastripuram',
      addressLocality: 'Agra',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'First Floor, Block 94, Sanjay Place, Civil Lines',
      addressLocality: 'Agra',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'A6, Shri Radha Florence, Rukmini Vihar',
      addressLocality: 'Vrindavan',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
  ],
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <AppProviders>
          <Navbar />
          <div className="pb-20 md:pb-0">
            {children}
            <Footer />
          </div>
          <WhatsAppButton />
          <MobileTabBar />
        </AppProviders>
      </body>
    </html>
  )
}
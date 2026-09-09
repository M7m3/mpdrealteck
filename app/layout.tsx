import Navbar from '@/components/layout/Navbar'
import '@/app/globals.css' // Or your path to tailwind styles
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import MobileTabBar from '@/components/layout/MobileTabBar'
import AppProviders from '@/components/providers/AppProviders'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 antialiased">
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
import Navbar from '@/components/layout/Navbar'
import '@/app/globals.css' // Or your path to tailwind styles
import Footer from '@/components/layout/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
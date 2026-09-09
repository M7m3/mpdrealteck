import '@/app/globals.css'

export const metadata = {
  title: 'Admin | MPD Realteck',
  robots: { index: false, follow: false },
}

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 antialiased">
        {children}
      </body>
    </html>
  )
}

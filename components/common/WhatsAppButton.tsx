import React from 'react'

const WHATSAPP_NUMBER = '918958182366'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-20 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-200 hover:scale-105 hover:shadow-2xl active:scale-95 md:bottom-6"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <svg className="relative h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38a9.96 9.96 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.49-9.84-10.01-9.84Zm5.86 14.19c-.25.7-1.45 1.34-2 1.42-.51.08-1.15.11-1.86-.12-.43-.13-.98-.31-1.69-.61-2.97-1.28-4.91-4.27-5.06-4.47-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.29.6-.36.8-.36.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.86 2.07.93 2.22.07.15.12.32.02.52-.1.2-.15.33-.29.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.61.17.3.75 1.25 1.62 2.02 1.11.99 2.05 1.3 2.35 1.45.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.75.83 2.05.98.3.15.5.23.57.35.08.13.08.72-.17 1.42Z" />
      </svg>
    </a>
  )
}

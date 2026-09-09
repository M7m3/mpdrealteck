import React from 'react'

export default function DesktopOnlyGate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-slate-900 px-6 text-center lg:hidden">
        <div>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
          </div>
          <h1 className="mt-6 text-xl font-bold tracking-tight text-white">Desktop Required</h1>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
            The admin panel is only available on desktop devices. Please access it from a computer.
          </p>
        </div>
      </div>
      <div className="hidden lg:block">{children}</div>
    </>
  )
}

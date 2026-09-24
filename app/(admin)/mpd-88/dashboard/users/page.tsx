import React from 'react'
import { prisma } from '@/lib/prisma'

export default async function AdminUsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
      email: true,
      emailVerifiedAt: true,
      createdAt: true,
      _count: { select: { sessions: true, shortlists: true, reviews: true } },
      sessions: { orderBy: { createdAt: 'desc' }, take: 1, select: { createdAt: true } },
    },
  })

  const loggedInCount = users.filter((u) => u._count.sessions > 0).length
  const neverLoggedInCount = users.length - loggedInCount

  const stats = [
    { label: 'Registered Users', value: users.length },
    { label: 'Logged In At Least Once', value: loggedInCount },
    { label: 'Never Logged In', value: neverLoggedInCount },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-white">Users</h1>
      <p className="mt-1 text-sm text-slate-400">Everyone registered on the site, and whether they&apos;ve logged in.</p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</span>
            <span className="mt-2 block text-3xl font-extrabold text-white">{stat.value}</span>
          </div>
        ))}
      </div>

      {users.length === 0 ? (
        <p className="mt-8 text-sm text-slate-500">No one has registered yet.</p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Verified</th>
                <th className="px-4 py-3">Registered On</th>
                <th className="px-4 py-3">Last Login</th>
                <th className="px-4 py-3 text-right">Logins</th>
                <th className="px-4 py-3 text-right">Shortlisted</th>
                <th className="px-4 py-3 text-right">Reviews</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {users.map((u) => {
                const lastLogin = u.sessions[0]?.createdAt
                return (
                  <tr key={u.id} className="text-slate-300 hover:bg-slate-900/60">
                    <td className="px-4 py-3 font-semibold text-white">{u.name || '—'}</td>
                    <td className="px-4 py-3 text-xs">{u.email}</td>
                    <td className="px-4 py-3 text-xs">
                      {u.emailVerifiedAt ? (
                        <span className="rounded bg-emerald-500/10 px-2 py-1 font-semibold text-emerald-400">Verified</span>
                      ) : (
                        <span className="rounded bg-amber-500/10 px-2 py-1 font-semibold text-amber-400">Unverified</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-xs">{u.createdAt.toLocaleDateString()}</td>
                    <td className="px-4 py-3 text-xs">{lastLogin ? lastLogin.toLocaleDateString() : 'Never'}</td>
                    <td className="px-4 py-3 text-right text-xs">{u._count.sessions}</td>
                    <td className="px-4 py-3 text-right text-xs">{u._count.shortlists}</td>
                    <td className="px-4 py-3 text-right text-xs">{u._count.reviews}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

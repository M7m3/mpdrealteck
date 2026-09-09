import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token') || ''
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mpdrealteck.in'

  if (token) {
    await prisma.notificationSubscriber.updateMany({ where: { unsubscribeToken: token }, data: { active: false } })
  }

  return NextResponse.redirect(`${siteUrl}/invest?unsubscribed=1`)
}

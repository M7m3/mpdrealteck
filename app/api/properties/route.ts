import { NextRequest, NextResponse } from 'next/server'
import { getProperties, toBuyAsset, toLeasingAsset } from '@/lib/properties'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const source = searchParams.get('source')

  if (source !== 'buy' && source !== 'corporate-leasing') {
    return NextResponse.json({ error: 'source must be "buy" or "corporate-leasing".' }, { status: 400 })
  }

  const properties = await getProperties(source)
  const assets = source === 'buy' ? properties.map(toBuyAsset) : properties.map(toLeasingAsset)

  return NextResponse.json({ properties: assets })
}

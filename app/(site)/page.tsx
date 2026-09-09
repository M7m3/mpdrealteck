import CallToAction from '@/components/sections/home/CallToAction'
import Cities from '@/components/sections/home/Cities'
import FeaturedProperties from '@/components/sections/home/FeaturedProperties'
import Hero from '@/components/sections/home/Hero'
import Invest from '@/components/sections/home/Invest'
import { getProperties, toBuyAsset } from '@/lib/properties'

export default async function Home() {
  const properties = await getProperties('buy')
  const featuredAssets = properties.slice(0, 4).map(toBuyAsset)

  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <Cities/>
      <Invest/>
      <FeaturedProperties properties={featuredAssets} />
      <CallToAction/>
           {/* Other sections will go here */}
    </main>
  )
}

import CallToAction from '@/components/sections/home/CallToAction'
import Cities from '@/components/sections/home/Cities'
import FeaturedProperties from '@/components/sections/home/FeaturedProperties'
import Hero from '@/components/sections/home/Hero'
import Invest from '@/components/sections/home/Invest'
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <Cities/>
      <Invest/>
      <FeaturedProperties/>
      <CallToAction/>
           {/* Other sections will go here */}
    </main>
  )
}
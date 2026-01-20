import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import ServicesHero from './_components/ServicesHero'
import ServicesIntro from './_components/ServicesIntro'
import ServicesSpotlights from './_components/ServicesSpotlights'
import ServicesProcess from './_components/ServicesProcess'
import ServicesIndustries from './_components/ServicesIndustries'
import ServicesCardsGrid from './_components/ServicesCardsGrid'

export const metadata: Metadata = {
  title: 'Services',
  description: `Explore the professional accounting, tax, and advisory services offered by ${siteConfig.name}.`,
}

export default function Services() {
  return (
    <div>
      <Header />
      <ServicesHero />

      <main className='container mx-auto py-32 px-6'>
        <ServicesIntro />
        <ServicesSpotlights />
        <ServicesProcess />
        <ServicesIndustries />
        <ServicesCardsGrid />
      </main>
      <Footer />
    </div>
  )
}

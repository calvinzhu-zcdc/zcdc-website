import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Mission from '@/components/Mission'
import Hero from './_components/Hero'
import Features from './_components/Features'
import ServicesGrid from './_components/ServicesGrid'
import Testimonials from './_components/Testimonials'

export default function Home() {
  return (
    <div>
      <Header />
      <main className='pt-20'>
        <Hero />
        <Mission />
        <ServicesGrid />
        <Testimonials />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

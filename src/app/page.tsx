import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import MobileCta from '@/components/MobileCta'

export default function Home() {
  return (
    <div>
      <Header />
      <MobileCta />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

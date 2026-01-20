import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export default function ServicesHero() {
  return (
    <section className='relative h-[55vh] flex items-center justify-center text-white'>
      <Image
        src='/images/hero/handshake.jpg'
        alt='Professional advisory services'
        fill
        className='z-0 object-cover'
        priority
      />
      <div className='absolute inset-0 bg-black/60 z-0' />
      <div className='z-10 text-center max-w-4xl mx-auto px-4'>
        <h1 className='text-5xl md:text-6xl font-bold'>
          Financial Strategies Tailored to Your Growth
        </h1>
        <p className='mt-4 text-xl md:text-2xl text-white/90'>
          Practical accounting, defensible reporting, and proactive advisory—built for organizations
          that operate under scrutiny.
        </p>
        <div className='mt-8 flex justify-center'>
          <Button
            size='lg'
            asChild
            className='px-8 py-6 text-lg bg-white text-black hover:bg-white hover:-translate-y-0.5 transition-all duration-200'
          >
            <a href={`tel:${siteConfig.contact.phone}`}>{`Schedule a consultation`}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

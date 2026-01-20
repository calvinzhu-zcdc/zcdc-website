import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export default function ServicesHero() {
  return (
    <section className='relative overflow-hidden pt-24 pb-32 bg-background'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          {/* Text Block */}
          <div className='lg:w-1/2 z-10'>
            <h1 className='font-serif text-5xl md:text-6xl font-light leading-tight text-foreground tracking-tighter'>
              Financial Strategies <span className='italic font-normal'>Tailored</span> to Your
              Growth
            </h1>
            <p className='mt-8 font-sans text-lg text-muted-foreground max-w-md leading-relaxed'>
              Practical accounting, defensible reporting, and proactive advisory—built for
              organizations that operate under scrutiny.
            </p>
            <div className='mt-10'>
              <Button
                size='lg'
                asChild
                className='bg-primary text-primary-foreground px-8 py-3 rounded-none font-sans tracking-wide hover:bg-primary/90 transition-colors'
              >
                <a href={`tel:${siteConfig.contact.phone}`}>Schedule a Consultation</a>
              </Button>
            </div>
          </div>

          {/* Image Block */}
          <div className='lg:w-1/2 relative'>
            <div className='aspect-[4/3] bg-muted overflow-hidden shadow-xl'>
              <Image
                src='/images/hero/handshake.jpg'
                alt='Professional advisory services'
                width={800}
                height={600}
                className='w-full h-full object-cover transition-all duration-700 hover:scale-105'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

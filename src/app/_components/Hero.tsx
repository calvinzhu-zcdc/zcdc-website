import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export default function Hero() {
  return (
    <section className='relative overflow-hidden pt-16 pb-32 bg-background'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col lg:flex-row items-start gap-12'>
          {/* Text Block - Offset and asymmetrical */}
          <div className='lg:w-1/2 mt-12 z-10'>
            <h1 className='font-serif text-6xl md:text-7xl font-light leading-tight text-foreground tracking-tighter'>
              Precision in <br />
              <span className='italic font-normal'>Partnership.</span>
            </h1>
            <p className='mt-8 font-sans text-lg text-muted-foreground max-w-md leading-relaxed'>
              ZCDC LLP provides sophisticated accounting solutions for enterprises that value
              meticulous detail and strategic foresight.
            </p>
            <div className='mt-10 flex gap-4'>
              <Button
                size='lg'
                asChild
                className='bg-primary text-primary-foreground px-8 py-3 rounded-none font-sans tracking-wide hover:bg-primary/90 transition-colors'
              >
                <Link href='/contact'>Contact the Firm</Link>
              </Button>
              <Button
                size='lg'
                variant='outline'
                asChild
                className='px-8 py-3 rounded-none font-sans tracking-wide border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors'
              >
                <a href={`tel:${siteConfig.contact.phone}`}>Call Now</a>
              </Button>
            </div>
          </div>

          {/* Image Block - Asymmetrical and layered */}
          <div className='lg:w-3/5 relative lg:-mr-20'>
            <div className='aspect-[4/5] bg-muted overflow-hidden shadow-2xl'>
              <Image
                src='/images/hero/calculator_paper.jpg'
                alt='Professional accounting workspace'
                width={800}
                height={1000}
                className='w-full h-full object-cover transition-all duration-700 hover:scale-105'
                priority
              />
            </div>
            {/* Floating decorative element */}
            <div className='absolute -bottom-6 -left-12 hidden lg:block bg-card p-8 border border-border shadow-xl max-w-xs'>
              <p className='font-serif text-sm italic text-muted-foreground'>
                &quot;We don&apos;t just balance books; we build financial foundations.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

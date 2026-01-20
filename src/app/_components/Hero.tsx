import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export default function Hero() {
  return (
    <section className='relative h-150 flex items-center justify-center text-white'>
      <Image
        src='/images/hero/coffee_laptop_table.jpg'
        alt='Hero Image'
        fill
        className='z-0 object-cover'
      />
      <div className='absolute inset-0 bg-black opacity-50 z-0'></div>
      <div className='z-10 text-center'>
        <h1 className='text-6xl font-bold'>Your Trusted Partner in Accounting</h1>
        <p className='mt-4 text-2xl'>
          Providing expert financial services to help your business thrive.
        </p>
        <div className='mt-8 flex justify-center gap-4'>
          <Button size='lg' asChild className='px-8 py-6 text-lg'>
            <Link href='/about'>Learn More</Link>
          </Button>
          <Button
            size='lg'
            variant='outline'
            asChild
            className='px-8 py-6 text-lg bg-white border-white text-black transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lg'
          >
            <a href={`tel:${siteConfig.contact.phone}`}>Call Now</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

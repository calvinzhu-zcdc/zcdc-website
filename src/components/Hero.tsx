import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className='relative h-[600px] flex items-center justify-center text-white'>
      <Image
        src='/images/hero/coffee_laptop_table.jpg'
        alt='Hero Image'
        fill
        className='z-0 object-cover'
      />
      <div className='absolute inset-0 bg-black opacity-50 z-0'></div>
      <div className='z-10 text-center'>
        <h1 className='text-5xl font-bold'>Your Trusted Partner in Accounting</h1>
        <p className='mt-4 text-xl'>
          Providing expert financial services to help your business thrive.
        </p>
        <Button className='mt-8' asChild>
          <Link href='/about'>Learn More</Link>
        </Button>
      </div>
    </section>
  )
}

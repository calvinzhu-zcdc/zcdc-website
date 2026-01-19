import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className='relative h-[600px] flex items-center justify-center text-white'>
      <Image
        src='/images/Banner.jpg'
        alt='Hero Image'
        layout='fill'
        objectFit='cover'
        className='z-0'
      />
      <div className='z-10 text-center'>
        <h1 className='text-5xl font-bold'>Your Trusted Partner in Accounting</h1>
        <p className='mt-4 text-xl'>
          Providing expert financial services to help your business thrive.
        </p>
        <Button className='mt-8'>Learn More</Button>
      </div>
    </section>
  )
}

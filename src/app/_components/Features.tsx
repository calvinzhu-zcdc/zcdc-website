import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function Features() {
  return (
    <section className='py-32 bg-muted'>
      <div className='container mx-auto px-6'>
        <h2 className='font-serif text-4xl md:text-5xl font-light text-center mb-20 text-foreground tracking-tight'>
          Why Choose Us?
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          <Link href='/about'>
            <Card className='text-center'>
              <CardHeader>
                <Image
                  src='/images/hero/handshake.jpg'
                  alt='Our Approach'
                  width={400}
                  height={250}
                  className='rounded-t-lg mx-auto'
                />
                <CardTitle className='mt-4'>Our Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We take a proactive approach to help you achieve your financial goals.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href='/about'>
            <Card className='text-center'>
              <CardHeader>
                <Image
                  src='/images/hero/our_team.jpg'
                  alt='Our Team'
                  width={400}
                  height={250}
                  className='rounded-t-lg mx-auto'
                />
                <CardTitle className='mt-4'>Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our team of experienced professionals is dedicated to your success.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href='/about'>
            <Card className='text-center'>
              <CardHeader>
                <Image
                  src='/images/hero/thumbs_up.jpg'
                  alt='Our Value'
                  width={400}
                  height={250}
                  className='rounded-t-lg mx-auto'
                />
                <CardTitle className='mt-4'>Our Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We provide exceptional value and build long-lasting relationships.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function Features() {
  return (
    <section className='py-20 bg-gray-50'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-12'>Why Choose Us?</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Card>
            <CardHeader>
              <Image
                src='/images/Our Approach.jpg'
                alt='Our Approach'
                width={400}
                height={250}
                className='rounded-t-lg'
              />
              <CardTitle className='mt-4'>Our Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We take a proactive approach to help you achieve your financial goals.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Image
                src='/images/Our Team.jpg'
                alt='Our Team'
                width={400}
                height={250}
                className='rounded-t-lg'
              />
              <CardTitle className='mt-4'>Our Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our team of experienced professionals is dedicated to your success.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Image
                src='/images/Our value.jpg'
                alt='Our Value'
                width={400}
                height={250}
                className='rounded-t-lg'
              />
              <CardTitle className='mt-4'>Our Value</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We provide exceptional value and build long-lasting relationships.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Image from 'next/image'

export default function Contact() {
  return (
    <div>
      <Header />
      <main className='container mx-auto py-20'>
        <h1 className='text-4xl font-bold text-center mb-12'>Contact Us</h1>

        {/* Contact Info Section */}
        <section className='mb-16 rounded-xl bg-gray-50 px-6 py-10 md:px-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            <div className='flex justify-center'>
              <Image
                src='/images/hero/our_team.jpg'
                alt='Our Team'
                width={400}
                height={300}
                className='rounded-lg object-cover shadow-md'
                priority
              />
            </div>
            <div className='text-gray-800 text-lg'>
              <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
              <ul className='space-y-2'>
                <li>
                  <span className='font-medium'>Address:</span> 123 Main Street, Suite 400, Toronto,
                  ON, Canada
                </li>
                <li>
                  <span className='font-medium'>Phone:</span> (416) 555-1234
                </li>
                <li>
                  <span className='font-medium'>Email:</span> info@zcdc-cpa.ca
                </li>
                <li>
                  <span className='font-medium'>Hours:</span> Mon–Fri, 9am–5pm
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <div className='max-w-2xl mx-auto'>
          <form className='grid grid-cols-1 gap-6'>
            <div>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' placeholder='Your Name' className='mt-2' />
            </div>
            <div>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' placeholder='Your Email' className='mt-2' />
            </div>
            <div>
              <Label htmlFor='message'>Message</Label>
              <Textarea id='message' placeholder='Your Message' className='mt-2' />
            </div>
            <Button type='submit'>Send Message</Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

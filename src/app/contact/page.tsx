import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { siteConfig } from '@/config/site'
import { Metadata } from 'next'
import ContactHero from './_components/ContactHero'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name} for a consultation.`,
}

export default function Contact() {
  return (
    <div className='pt-20'>
      <Header />
      <ContactHero />
      <main>
        <div className='container mx-auto py-32 px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch'>
            {/* Contact Form Section */}
            <Card className='shadow-2xl h-full lg:min-h-[640px] border-border'>
              <CardHeader>
                <CardTitle className='font-serif text-4xl font-light tracking-tight text-foreground'>
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className='h-full'>
                <form className='flex h-full flex-col gap-6'>
                  <div>
                    <Label htmlFor='name'>Name</Label>
                    <Input id='name' placeholder='Your Name' className='mt-2' />
                  </div>
                  <div>
                    <Label htmlFor='email'>Email</Label>
                    <Input id='email' type='email' placeholder='Your Email' className='mt-2' />
                  </div>
                  <div className='flex flex-1 flex-col'>
                    <Label htmlFor='message'>Message</Label>
                    <Textarea
                      id='message'
                      placeholder='Your Message'
                      className='mt-2 flex-1 resize-none'
                    />
                  </div>
                  <Button
                    type='submit'
                    size='lg'
                    className='mt-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 rounded-none tracking-wide'
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info Section */}
            <div className='space-y-8'>
              <Card className='shadow-2xl border-border'>
                <CardHeader>
                  <CardTitle className='font-serif text-4xl font-light tracking-tight text-foreground'>
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className='text-foreground text-lg'>
                  <ul className='space-y-6'>
                    <li className='flex items-start'>
                      <MapPin className='h-6 w-6 text-accent mt-1 mr-4 flex-shrink-0' />
                      <div>
                        <span className='font-semibold'>Address:</span>
                        <p>{siteConfig.contact.address}</p>
                      </div>
                    </li>
                    <li className='flex items-center'>
                      <Phone className='h-6 w-6 text-accent mr-4 flex-shrink-0' />
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className='font-bold text-xl hover:underline'
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </li>
                    <li className='flex items-center'>
                      <Mail className='h-6 w-6 text-accent mr-4 flex-shrink-0' />
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className='font-bold text-xl hover:underline'
                      >
                        {siteConfig.contact.email}
                      </a>
                    </li>
                    <li className='flex items-center'>
                      <Clock className='h-6 w-6 text-accent mr-4 flex-shrink-0' />
                      <span>
                        <span className='font-semibold'>Hours:</span> {siteConfig.contact.hours}
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className='shadow-2xl border-border'>
                <CardContent className='p-0 rounded-lg overflow-hidden'>
                  <div className='aspect-w-16 aspect-h-9'>
                    <iframe
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.992259950363!2d-79.3831843845022!3d43.64256697912103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb2b2a6b0b2f%3A0x8f4d3a3c2b4b5b1e!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1674236456789!5m2!1sen!2sca'
                      width='100%'
                      height='100%'
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading='lazy'
                      referrerPolicy='no-referrer-when-downgrade'
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
              <div className='text-center'>
                <Button
                  asChild
                  size='lg'
                  className='w-full sm:w-2/3 mx-auto bg-primary text-primary-foreground font-semibold text-lg shadow-xl hover:bg-primary/90 transition-all duration-200 rounded-none tracking-wide'
                >
                  <a
                    href='https://www.google.com/maps/dir/?api=1&destination=CN+Tower'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

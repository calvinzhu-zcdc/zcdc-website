import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import Mission from '@/components/Mission'
import CompetitiveAdvantages from './_components/CompetitiveAdvantages'
import CoreValues from './_components/CoreValues'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn more about ${siteConfig.name} and our commitment to excellence.`,
}

const teamMembers = [
  {
    name: 'Olivia Chen',
    title: 'Chartered Professional Accountant',
    description: 'Specializes in audit and assurance services for non-profit organizations.',
    image: '/images/people/headshot1.png',
  },
  {
    name: 'Benjamin Carter',
    title: 'Chartered Professional Accountant',
    description: 'Expertise in corporate and personal tax planning and compliance.',
    image: '/images/people/headshot2.png',
  },
  {
    name: 'Sophia Rodriguez',
    title: 'Chartered Professional Accountant',
    description:
      'Focuses on advisory services, helping clients with financial strategy and risk management.',
    image: '/images/people/headshot3.png',
  },
  {
    name: 'Liam Goldberg',
    title: 'Chartered Professional Accountant',
    description: 'Leads our forensic accounting and litigation support services.',
    image: '/images/people/headshot4.png',
  },
  {
    name: 'Ava Nguyen',
    title: 'Chartered Professional Accountant',
    description: 'Manages complex GST/HST filings and provides commodity tax advice.',
    image: '/images/people/headshot5.png',
  },
  {
    name: 'Noah Patel',
    title: 'Chartered Professional Accountant',
    description: 'Advises on business valuation and due diligence for mergers and acquisitions.',
    image: '/images/people/headshot6.png',
  },
]

export default function About() {
  return (
    <div className='pt-20'>
      <Header />
      <section className='relative overflow-hidden pt-24 pb-32 bg-background'>
        <div className='container mx-auto px-6'>
          <div className='flex flex-col lg:flex-row items-center gap-16'>
            {/* Text Block */}
            <div className='lg:w-1/2 z-10'>
              <h1 className='font-serif text-5xl md:text-6xl font-light leading-tight text-foreground tracking-tighter'>
                Driving Financial <span className='italic font-normal'>Integrity</span> and
                Strategic Growth
              </h1>
              <p className='mt-8 font-sans text-lg text-muted-foreground max-w-md leading-relaxed'>
                We are a premier Canadian Chartered Professional Accounting firm dedicated to
                excellence in regulated and accountability-driven sectors.
              </p>
              <div className='mt-10 flex gap-4'>
                <Button
                  size='lg'
                  asChild
                  className='bg-primary text-primary-foreground px-8 py-3 rounded-none font-sans tracking-wide hover:bg-primary/90 transition-colors'
                >
                  <Link href='/contact'>Schedule a Consultation</Link>
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  asChild
                  className='px-8 py-3 rounded-none font-sans tracking-wide border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors'
                >
                  <Link href='/services'>View Our Services</Link>
                </Button>
              </div>
            </div>

            {/* Image Block */}
            <div className='lg:w-1/2 relative'>
              <div className='aspect-[4/3] bg-muted overflow-hidden shadow-xl'>
                <Image
                  src='/images/hero/our_team.jpg'
                  alt='Our professional team'
                  width={800}
                  height={600}
                  className='w-full h-full object-cover transition-all duration-700 hover:scale-105'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Mission />
      <main className='container mx-auto py-32 px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div>
            <Image
              src='/images/hero/calculator_paper.jpg'
              alt='Our Story'
              width={600}
              height={400}
              className='shadow-xl transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl'
            />
          </div>
          <div>
            <h2 className='font-serif text-4xl md:text-5xl font-light mb-6 text-foreground tracking-tight'>
              Our Story
            </h2>
            <p className='text-foreground/80 mb-6 leading-relaxed'>
              ZCDC LLP was founded with a clear vision: to provide unparalleled financial expertise
              to organizations that operate under intense scrutiny. From non-profits and charities
              to political entities, we saw a need for a firm that not only understands the numbers
              but also the nuances of accountability.
            </p>
            <p className='text-foreground/80 leading-relaxed'>
              Our approach is built on a foundation of clear, defensible financial reporting, robust
              internal controls, and proactive compliance management. We are more than just
              accountants; we are strategic partners committed to ensuring your long-term
              organizational sustainability and success.
            </p>
          </div>
        </div>
      </main>
      <CompetitiveAdvantages />
      <CoreValues />
      <section className='bg-muted py-32'>
        <div className='container mx-auto px-6'>
          <h2 className='font-serif text-4xl md:text-5xl font-light text-center mb-20 text-foreground tracking-tight'>
            Meet the Team
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {teamMembers.map((member) => (
              <Card key={member.name}>
                <CardHeader>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className='rounded-full mx-auto'
                  />
                  <CardTitle className='text-center'>{member.name}</CardTitle>
                  <CardDescription className='text-center'>{member.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='text-center text-foreground/80'>{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

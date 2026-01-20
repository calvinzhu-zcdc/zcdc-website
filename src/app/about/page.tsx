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
    <div>
      <Header />
      <section className='relative h-[60vh] flex items-center justify-center text-white'>
        <Image src='/images/hero/our_team.jpg' alt='About Us Hero' fill className='object-cover' />
        <div className='absolute inset-0 bg-black opacity-60' />
        <div className='z-10 text-center max-w-4xl mx-auto px-4'>
          <h1 className='text-5xl md:text-6xl font-bold'>
            Driving Financial Integrity and Strategic Growth
          </h1>
          <p className='mt-4 text-xl md:text-2xl'>
            We are a premier Canadian Chartered Professional Accounting firm dedicated to excellence
            in regulated and accountability-driven sectors.
          </p>
          <div className='mt-8 flex justify-center gap-4'>
            <Button size='lg' asChild className='px-8 py-6 text-lg'>
              <Link href='/contact'>Schedule a Consultation</Link>
            </Button>
            <Button
              size='lg'
              variant='outline'
              asChild
              className='px-8 py-6 text-lg border-white text-black'
            >
              <Link href='/services'>View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
      <Mission />
      <main className='container mx-auto py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mx-6 md:mx-0'>
          <div>
            <Image
              src='/images/hero/calculator_paper.jpg'
              alt='Our Story'
              width={600}
              height={400}
              className='rounded-lg shadow-lg'
            />
          </div>
          <div>
            <h2 className='text-3xl font-semibold mb-4'>Our Story</h2>
            <p className='text-gray-700 mb-4'>
              ZCDC LLP was founded with a clear vision: to provide unparalleled financial expertise
              to organizations that operate under intense scrutiny. From non-profits and charities
              to political entities, we saw a need for a firm that not only understands the numbers
              but also the nuances of accountability.
            </p>
            <p className='text-gray-700'>
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
      <section className='bg-gray-50 py-20'>
        <div className='container mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-12'>Meet the Team</h2>
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
                  <p className='text-center text-gray-700'>{member.description}</p>
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

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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
      <main className='container mx-auto py-20'>
        <h1 className='text-4xl font-bold text-center mb-12'>About ZCDC LLP</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div>
            <Image
              src='/images/hero/calculator_paper.jpg'
              alt='About Us'
              width={600}
              height={400}
              className='rounded-lg'
            />
          </div>
          <div>
            <h2 className='text-2xl font-semibold mb-4'>Our Commitment to Excellence</h2>
            <p className='text-gray-700 mb-4'>
              ZCDC LLP is a Canadian Chartered Professional Accounting firm committed to financial
              integrity, accountability, and regulatory excellence. We specialize in supporting
              organizations operating in regulated, funder-dependent, or accountability-driven
              environments, including non-profit, charitable, and political finance sectors.
            </p>
            <p className='text-gray-700'>
              Our approach emphasizes clear and defensible financial reporting, strong internal
              controls and documentation, proactive compliance management, and long-term
              organizational sustainability.
            </p>
          </div>
        </div>
      </main>
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

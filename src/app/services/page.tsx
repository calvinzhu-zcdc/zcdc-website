import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  FileText,
  Briefcase,
  DollarSign,
  Globe,
  Cloud,
  Users,
  BarChart2,
  Calendar,
  CreditCard,
} from 'lucide-react'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Services',
  description: `Explore the professional accounting, tax, and advisory services offered by ${siteConfig.name}.`,
}

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: 'Audit & Assurance',
      desc: 'Independent audits, reviews, and assurance engagements for organizations of all sizes.',
    },
    {
      icon: Briefcase,
      title: 'Accounting & Bookkeeping',
      desc: 'Monthly bookkeeping, financial statements, and management reporting.',
    },
    {
      icon: DollarSign,
      title: 'Tax Services',
      desc: 'Corporate, personal and commodity tax planning and compliance.',
    },
    {
      icon: Globe,
      title: 'International & Cross-border',
      desc: 'Cross-border tax structuring and international tax advice.',
    },
    {
      icon: Cloud,
      title: 'Cloud Bookkeeping & Payroll',
      desc: 'Cloud-based bookkeeping, payroll and ongoing operational support.',
    },
    {
      icon: Users,
      title: 'Public Company Consulting',
      desc: 'Advisory on reporting standards and disclosure for public companies.',
    },
    {
      icon: BarChart2,
      title: 'Business Valuation',
      desc: 'Reliable valuations for transactions, disputes, and strategic planning.',
    },
    {
      icon: Calendar,
      title: 'Transaction Advisory',
      desc: 'Mergers, acquisitions and transaction due diligence support.',
    },
    {
      icon: CreditCard,
      title: 'Estates & Trusts',
      desc: 'Tax planning and administration for estates, trusts and succession.',
    },
  ]

  return (
    <div>
      <Header />
      <main className='container mx-auto py-20'>
        <h1 className='text-4xl font-bold text-center mb-6'>Our Services</h1>

        <p className='max-w-3xl mx-auto text-center text-gray-700 mb-12'>
          ZCDC LLP provides a broad range of accounting, audit, tax, and advisory services to
          businesses, not-for-profits, charities, and regulated entities. We combine practical
          experience with strong documentation and defensible reporting to help clients meet
          regulatory, funder and stakeholder requirements.
        </p>

        <section aria-labelledby='services-grid' className='mt-8'>
          <h2 id='services-grid' className='sr-only'>
            Services Grid
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className='bg-white shadow-sm rounded-lg p-6 text-center border border-gray-100'
                >
                  <div className='mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-50'>
                    <Icon className='h-10 w-10 text-sky-600' />
                  </div>
                  <h3 className='text-lg font-semibold mb-2'>{s.title}</h3>
                  <p className='text-sm text-gray-600'>{s.desc}</p>
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

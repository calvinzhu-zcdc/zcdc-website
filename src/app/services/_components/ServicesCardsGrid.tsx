import {
  BarChart2,
  Briefcase,
  Calendar,
  Cloud,
  CreditCard,
  DollarSign,
  FileText,
  Globe,
  Users,
  type LucideIcon,
} from 'lucide-react'

const services: Array<{ icon: LucideIcon; title: string; desc: string }> = [
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

export default function ServicesCardsGrid() {
  return (
    <section aria-labelledby='services-grid' className='mt-8'>
      <h2 id='services-grid' className='sr-only'>
        Services Grid
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {services.map((s) => {
          const Icon = s.icon
          return (
            <div key={s.title} className='bg-card shadow-lg p-8 text-center border border-border'>
              <div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted'>
                <Icon className='h-10 w-10 text-accent' />
              </div>
              <h3 className='text-lg font-semibold mb-3 text-foreground'>{s.title}</h3>
              <p className='text-sm text-foreground/80 leading-relaxed'>{s.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

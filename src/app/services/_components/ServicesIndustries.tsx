import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const industryCards = [
  {
    title: 'Not-for-Profits & Charities',
    desc: 'Funding compliance, defensible reporting, and stakeholder-ready governance.',
    image: '/images/hero/our_team.jpg',
  },
  {
    title: 'Regulated & Accountability-Driven',
    desc: 'Clear documentation, strong controls, and audit-ready financial packages.',
    image: '/images/hero/handshake.jpg',
  },
  {
    title: 'Growing Businesses',
    desc: 'Better closes, better decisions—so leadership can focus on execution.',
    image: '/images/hero/coffee_laptop_table.jpg',
  },
]

export default function ServicesIndustries() {
  return (
    <section aria-labelledby='industries' className='mb-20'>
      <h2
        id='industries'
        className='font-serif text-4xl md:text-5xl font-light text-center mb-20 text-foreground tracking-tight'
      >
        Industry Experience That Shows
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
        {industryCards.map((card) => (
          <a
            key={card.title}
            href='/contact'
            className='group relative overflow-hidden border border-border shadow-xl'
          >
            <div className='absolute inset-0'>
              <Image
                src={card.image}
                alt={card.title}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-black/55 transition-colors duration-300 group-hover:bg-black/65' />
            </div>

            <div className='relative z-10 p-7 min-h-[200px] flex flex-col justify-between'>
              <div>
                <h3 className='text-xl font-semibold text-white'>{card.title}</h3>
                <p className='mt-3 text-white/85 font-light'>{card.desc}</p>
              </div>
              <span className='mt-6 inline-flex items-center gap-2 text-white font-semibold opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0'>
                Learn More <ArrowRight className='h-4 w-4' />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

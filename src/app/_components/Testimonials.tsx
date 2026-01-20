'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'

type Testimonial = {
  name: string
  role: string
  quote: string
  image: string
}

export default function Testimonials() {
  const testimonials = useMemo<Testimonial[]>(
    () => [
      {
        name: 'Ava Chen',
        role: 'Founder, Northbridge Studio',
        quote:
          'ZCDC LLP helped us streamline our monthly close and made our cash flow reporting crystal clear. We finally feel in control.',
        image: '/images/people/headshot1.png',
      },
      {
        name: 'Michael Patel',
        role: 'Managing Director, Harborline Logistics',
        quote:
          'Their tax planning saved us real money and their team always explains the why. It feels like having a CFO on call.',
        image: '/images/people/headshot2.png',
      },
      {
        name: 'Priya Singh',
        role: 'Owner, Bloom Dental',
        quote:
          'From payroll to year-end, every deliverable is precise and on time. ZCDC LLP is as dependable as they come.',
        image: '/images/people/headshot3.png',
      },
      {
        name: 'Daniel Brooks',
        role: 'COO, Cedar Ridge Homes',
        quote:
          'They modernized our bookkeeping and introduced dashboards our team actually uses. The clarity is a game changer.',
        image: '/images/people/headshot4.png',
      },
      {
        name: 'Sofia Alvarez',
        role: 'Principal, Meridian Advisory',
        quote:
          'ZCDC LLP is thorough, proactive, and easy to reach. Their guidance helped us scale with confidence.',
        image: '/images/people/headshot5.png',
      },
      {
        name: 'Noah Walker',
        role: 'CEO, Summit Retail Group',
        quote:
          'The audit process was smooth and transparent. We appreciated the professionalism and the attention to detail.',
        image: '/images/people/headshot6.png',
      },
    ],
    [],
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const intervalMs = 8000

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, intervalMs)

    return () => window.clearInterval(id)
  }, [testimonials.length])

  return (
    <section className='py-20 bg-linear-to-r from-blue-900 to-blue-500 text-white'>
      <div className='container mx-auto px-4'>
        <div className='relative overflow-hidden'>
          <div
            className='flex transition-transform duration-700 ease-in-out'
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className='w-full shrink-0 px-4 md:px-10'
                aria-hidden={testimonial !== testimonials[activeIndex]}
              >
                <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12'>
                  <div className='shrink-0'>
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} headshot`}
                      width={150}
                      height={150}
                      className='rounded-full border-4 border-white/20'
                    />
                  </div>
                  <div className='max-w-2xl text-center md:text-left'>
                    <blockquote className='text-xl italic'>
                      <p>&quot;{testimonial.quote}&quot;</p>
                      <cite className='block mt-4 not-italic font-semibold'>
                        {testimonial.name}
                        <span className='block text-sm font-normal text-white/80'>
                          {testimonial.role}
                        </span>
                      </cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-10 flex items-center justify-center gap-2'>
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type='button'
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-white w-6' : 'bg-white/40'
                }`}
                aria-label={`View testimonial from ${testimonial.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

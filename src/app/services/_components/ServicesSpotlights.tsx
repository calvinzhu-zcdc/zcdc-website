import Image from 'next/image'
import { Check } from 'lucide-react'

export default function ServicesSpotlights() {
  return (
    <section aria-labelledby='service-spotlights' className='mb-20'>
      <h2 id='service-spotlights' className='text-3xl md:text-4xl font-bold text-center mb-10'>
        Solutions, Delivered with Clarity
      </h2>

      <div className='space-y-14'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          <div className='relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm overflow-hidden'>
            <h3 className='text-2xl font-semibold mb-3'>Tax Planning & Compliance</h3>
            <p className='text-gray-700 mb-6'>
              Reduce surprises, improve cash flow visibility, and keep filings defensible. We help
              you plan ahead, document decisions, and stay compliant.
            </p>
            <ul className='space-y-3 text-gray-700'>
              <li className='flex gap-3'>
                <Check className='h-5 w-5 mt-0.5 text-gold-500' />
                <span>Quarterly tax projections and cash flow planning</span>
              </li>
              <li className='flex gap-3'>
                <Check className='h-5 w-5 mt-0.5 text-gold-500' />
                <span>Corporate and personal compliance support</span>
              </li>
              <li className='flex gap-3'>
                <Check className='h-5 w-5 mt-0.5 text-gold-500' />
                <span>Clear documentation for audits and stakeholders</span>
              </li>
            </ul>
          </div>

          <div className='relative h-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg'>
            <Image
              src='/images/hero/calculator_paper.jpg'
              alt='Tax planning and documentation'
              fill
              className='object-cover'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          <div className='relative h-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg lg:order-1'>
            <Image
              src='/images/hero/coffee_laptop_table.jpg'
              alt='Modern bookkeeping and reporting'
              fill
              className='object-cover'
            />
          </div>

          <div className='relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm overflow-hidden lg:order-2'>
            <h3 className='text-2xl font-semibold mb-3'>Accounting & Bookkeeping</h3>
            <p className='text-gray-700 mb-6'>
              Consistent month-end closes, meaningful management reporting, and stronger controls.
              We build a reliable financial foundation you can operate on.
            </p>
            <ul className='space-y-3 text-gray-700'>
              <li className='flex gap-3'>
                <Check className='h-5 w-5 mt-0.5 text-gold-500' />
                <span>Monthly close, reconciliations, and variance review</span>
              </li>
              <li className='flex gap-3'>
                <Check className='h-5 w-5 mt-0.5 text-gold-500' />
                <span>Board-ready reporting packages and KPIs</span>
              </li>
              <li className='flex gap-3'>
                <Check className='h-5 w-5 mt-0.5 text-gold-500' />
                <span>Process improvement and internal controls support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          <div className='relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm overflow-hidden'>
            <h3 className='text-2xl font-semibold mb-3'>Transaction Advisory</h3>
            <p className='text-gray-700 mb-6'>
              When deals move fast, clarity matters. We help evaluate risk, validate numbers, and
              support stakeholder-ready decisions.
            </p>
            <ul className='space-y-3 text-gray-700'>
              <li className='flex gap-3'>
                <Check className='h-5 w-5 mt-0.5 text-gold-500' />
                <span>Due diligence support and working capital analysis</span>
              </li>
              <li className='flex gap-3'>
                <Check className='h-5 w-5 mt-0.5 text-gold-500' />
                <span>Valuation inputs and defensible assumptions</span>
              </li>
              <li className='flex gap-3'>
                <Check className='h-5 w-5 mt-0.5 text-gold-500' />
                <span>Reporting readiness and post-close integration guidance</span>
              </li>
            </ul>
          </div>

          <div className='relative h-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg'>
            <Image
              src='/images/hero/thumbs_up.jpg'
              alt='Advisory support and decision-making'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

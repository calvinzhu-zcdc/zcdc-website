import { ArrowRight } from 'lucide-react'

const steps = [
  {
    step: '1',
    title: 'Discovery Call',
    desc: 'Understand your goals, deadlines, and reporting requirements.',
  },
  {
    step: '2',
    title: 'Financial Review',
    desc: 'Assess records, controls, and risk—then prioritize quick wins.',
  },
  {
    step: '3',
    title: 'Roadmap',
    desc: 'Agree on deliverables, timelines, and success measures.',
  },
  {
    step: '4',
    title: 'Execution',
    desc: 'Implement, report, and iterate with ongoing support.',
  },
]

export default function ServicesProcess() {
  return (
    <section
      aria-labelledby='process'
      className='mb-20 rounded-2xl bg-gray-50 border border-gray-100 p-10'
    >
      <h2 id='process' className='text-3xl md:text-4xl font-bold text-center mb-3'>
        What Working Together Looks Like
      </h2>
      <p className='text-center text-gray-700 max-w-3xl mx-auto mb-10'>
        A clear, predictable process—so you always know what’s next and what you’ll receive.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch'>
        {steps.map((s, idx) => (
          <div
            key={s.step}
            className='relative rounded-xl bg-white border border-gray-100 p-6 shadow-sm'
          >
            <div className='flex items-center gap-3 mb-3'>
              <div className='h-10 w-10 rounded-full bg-gold-500 text-white font-bold flex items-center justify-center'>
                {s.step}
              </div>
              <h3 className='text-lg font-semibold'>{s.title}</h3>
            </div>
            <p className='text-gray-600'>{s.desc}</p>

            {idx < steps.length - 1 && (
              <div className='hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 text-navy-900/40'>
                <ArrowRight className='h-5 w-5' />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

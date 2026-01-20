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
      className='mb-32 bg-muted border border-border p-12 shadow-xl'
    >
      <h2
        id='process'
        className='font-serif text-4xl md:text-5xl font-light text-center mb-4 text-foreground tracking-tight'
      >
        What Working Together Looks Like
      </h2>
      <p className='text-center text-foreground/80 max-w-3xl mx-auto mb-16 text-lg leading-relaxed'>
        A clear, predictable process—so you always know what’s next and what you’ll receive.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch'>
        {steps.map((s, idx) => (
          <div key={s.step} className='relative bg-card border border-border p-8 shadow-lg'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='h-10 w-10 rounded-full bg-accent text-foreground font-semibold flex items-center justify-center'>
                {s.step}
              </div>
              <h3 className='text-lg font-semibold text-foreground'>{s.title}</h3>
            </div>
            <p className='text-foreground/80 leading-relaxed'>{s.desc}</p>

            {idx < steps.length - 1 && (
              <div className='hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 text-foreground/20'>
                <ArrowRight className='h-5 w-5' />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

const values = [
  {
    value: 'Integrity',
    meaning:
      'We uphold the highest ethical standards, ensuring transparency and honesty in all our financial dealings. Your trust is our most valued asset.',
  },
  {
    value: 'Accountability',
    meaning:
      'We take ownership of our work and are fully accountable for the results. We provide clear, defensible reporting that stands up to scrutiny.',
  },
  {
    value: 'Excellence',
    meaning:
      'We are committed to continuous improvement and delivering superior service. Our team stays ahead of industry changes to provide you with the best advice.',
  },
  {
    value: 'Collaboration',
    meaning:
      'We work as an extension of your team. By understanding your unique challenges and goals, we build collaborative partnerships for long-term success.',
  },
]

export default function CoreValues() {
  return (
    <section className='bg-muted py-32'>
      <div className='container mx-auto px-6'>
        <h2 className='font-serif text-4xl md:text-5xl font-light text-center mb-20 text-foreground tracking-tight'>
          Our Core Values
        </h2>
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-card border border-border shadow-xl'>
            <thead>
              <tr className='bg-background'>
                <th className='text-left py-4 px-6 font-serif text-xl font-light text-foreground tracking-tight'>
                  Value
                </th>
                <th className='text-left py-4 px-6 font-serif text-xl font-light text-foreground tracking-tight'>
                  What It Means for You
                </th>
              </tr>
            </thead>
            <tbody>
              {values.map((item) => (
                <tr key={item.value} className='border-b border-border'>
                  <td className='py-6 px-6 font-semibold text-lg text-foreground'>{item.value}</td>
                  <td className='py-6 px-6 text-foreground/80'>{item.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

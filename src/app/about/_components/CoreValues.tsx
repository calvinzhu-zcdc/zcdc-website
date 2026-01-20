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
    <section className='bg-gray-50 py-20'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-12'>Our Core Values</h2>
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white border-t border-b border-gray-200'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='text-left py-3 px-6 font-semibold text-gray-700'>Value</th>
                <th className='text-left py-3 px-6 font-semibold text-gray-700'>
                  What It Means for You
                </th>
              </tr>
            </thead>
            <tbody>
              {values.map((item) => (
                <tr key={item.value} className='border-b border-gray-200'>
                  <td className='py-4 px-6 font-bold text-lg text-gray-800'>{item.value}</td>
                  <td className='py-4 px-6 text-gray-700'>{item.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calculator, Book, Briefcase } from 'lucide-react'

const services = [
  {
    icon: <Calculator className='w-12 h-12 text-yellow-500' />,
    title: 'Tax Planning',
    description: 'Manage your tax planning. Beify for trme calculator castxilons.',
  },
  {
    icon: <Book className='w-12 h-12 text-yellow-500' />,
    title: 'Bookkeeping',
    description: 'Ledger proroantics and Inwwr mokkeeping and accountants.',
  },
  {
    icon: <Briefcase className='w-12 h-12 text-yellow-500' />,
    title: 'Business Advisory',
    description: 'Chart and inter Ds advisory business business and prosnots.',
  },
]

export default function ServicesGrid() {
  return (
    <section className='py-32 bg-background'>
      <div className='container mx-auto px-6'>
        <h2 className='font-serif text-4xl md:text-5xl font-light text-center mb-20 text-foreground tracking-tight'>
          Services Overview
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {services.map((service) => (
            <Card key={service.title} className='text-center'>
              <CardHeader>
                <div className='flex justify-center mb-4'>{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

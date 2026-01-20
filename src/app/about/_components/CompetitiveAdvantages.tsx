import { ShieldCheck, TrendingUp, Users, Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const advantages = [
  {
    icon: <ShieldCheck className='h-12 w-12 text-accent' />,
    title: 'Unwavering Precision',
    description: 'We deliver meticulous, error-free financial reporting you can trust.',
  },
  {
    icon: <TrendingUp className='h-12 w-12 text-accent' />,
    title: 'Strategic Foresight',
    description: 'Our advisory services turn financial data into actionable growth strategies.',
  },
  {
    icon: <Users className='h-12 w-12 text-accent' />,
    title: 'Client-Centric Approach',
    description: 'Your goals are our priority. We build lasting partnerships based on your needs.',
  },
  {
    icon: <Award className='h-12 w-12 text-accent' />,
    title: 'Regulatory Mastery',
    description: 'We navigate complex compliance landscapes to ensure you are always protected.',
  },
]

export default function CompetitiveAdvantages() {
  return (
    <section className='bg-background py-32'>
      <div className='container mx-auto px-6'>
        <h2 className='font-serif text-4xl md:text-5xl font-light text-center mb-20 text-foreground tracking-tight'>
          What Sets Us Apart
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {advantages.map((advantage) => (
            <Card key={advantage.title} className='text-center'>
              <CardHeader>
                <div className='flex justify-center mb-4'>{advantage.icon}</div>
                <CardTitle>{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-foreground/80'>{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

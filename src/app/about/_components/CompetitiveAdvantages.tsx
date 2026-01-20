import { ShieldCheck, TrendingUp, Users, Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const advantages = [
  {
    icon: <ShieldCheck className='h-12 w-12 text-blue-600' />,
    title: 'Unwavering Precision',
    description: 'We deliver meticulous, error-free financial reporting you can trust.',
  },
  {
    icon: <TrendingUp className='h-12 w-12 text-blue-600' />,
    title: 'Strategic Foresight',
    description: 'Our advisory services turn financial data into actionable growth strategies.',
  },
  {
    icon: <Users className='h-12 w-12 text-blue-600' />,
    title: 'Client-Centric Approach',
    description: 'Your goals are our priority. We build lasting partnerships based on your needs.',
  },
  {
    icon: <Award className='h-12 w-12 text-blue-600' />,
    title: 'Regulatory Mastery',
    description: 'We navigate complex compliance landscapes to ensure you are always protected.',
  },
]

export default function CompetitiveAdvantages() {
  return (
    <section className='bg-white py-20'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-12'>What Sets Us Apart</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {advantages.map((advantage) => (
            <Card key={advantage.title} className='text-center'>
              <CardHeader>
                <div className='flex justify-center mb-4'>{advantage.icon}</div>
                <CardTitle>{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-700'>{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

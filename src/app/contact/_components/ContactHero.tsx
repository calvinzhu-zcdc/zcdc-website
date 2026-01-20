import Image from 'next/image'

export default function ContactHero() {
  return (
    <section className='relative overflow-hidden pt-24 pb-32 bg-background'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          {/* Text Block */}
          <div className='lg:w-1/2 z-10'>
            <h1 className='font-serif text-5xl md:text-6xl font-light leading-tight text-foreground tracking-tighter'>
              Let&apos;s Start a <span className='italic font-normal'>Conversation.</span>
            </h1>
            <p className='mt-8 font-sans text-lg text-muted-foreground max-w-md leading-relaxed'>
              We&apos;re here to help you achieve your financial goals with precision and
              partnership.
            </p>
          </div>

          {/* Image Block */}
          <div className='lg:w-1/2 relative'>
            <div className='aspect-[4/3] bg-muted overflow-hidden shadow-xl'>
              <Image
                src='/images/hero/our_team.jpg'
                alt='Our professional team'
                width={800}
                height={600}
                className='w-full h-full object-cover transition-all duration-700 hover:scale-105'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

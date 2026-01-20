import Image from 'next/image'

export default function ContactHero() {
  return (
    <section className='relative h-[50vh] flex items-center justify-center text-white'>
      <Image
        src='/images/hero/our_team.jpg'
        alt='Contact Us'
        fill
        className='z-0 object-cover'
        priority
      />
      <div className='absolute inset-0 bg-black opacity-50 z-0' />
      <div className='z-10 text-center max-w-4xl mx-auto px-4'>
        <h1 className='text-5xl md:text-6xl font-bold'>Let’s Start a Conversation</h1>
        <p className='mt-4 text-xl md:text-2xl'>
          We’re here to help you achieve your financial goals.
        </p>
      </div>
    </section>
  )
}

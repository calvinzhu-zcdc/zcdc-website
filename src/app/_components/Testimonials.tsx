import Image from 'next/image'

export default function Testimonials() {
  return (
    <section className='py-20 bg-linear-to-r from-blue-900 to-blue-500 text-white'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12'>
          <div className='shrink-0'>
            <Image
              src='/images/people/headshot1.png'
              alt='Client Testimonial'
              width={150}
              height={150}
              className='rounded-full'
            />
          </div>
          <div className='max-w-2xl text-center md:text-left'>
            <blockquote className='text-xl italic'>
              <p>
                &quot;Alex Financial Partners is just accofa: ebly exberling cerxomity to accounting
                firm, we had a respectionaly thank you for the inter and adviced for a brighter
                future.&quot;
              </p>
              <cite className='block mt-4 not-italic font-bold'>David Mish</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

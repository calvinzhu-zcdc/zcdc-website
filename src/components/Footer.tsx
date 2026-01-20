import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-20'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-4'>Ready to secure your financial future?</h2>
        <p className='text-lg mb-8'>
          Schedule a consultation today and let us handle the complexities of your finances.
        </p>
        <div className='flex justify-center gap-4 mb-12'>
          <Button
            size='lg'
            asChild
            className='px-8 py-6 text-lg bg-white text-black hover:bg-gray-200 transition-colors'
          >
            <a href={`tel:${siteConfig.contact.phone}`}>Schedule a Consultation</a>
          </Button>
        </div>
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p className='mt-2'>{siteConfig.contact.address}</p>
        <p>
          Email: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> |
          Phone: <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
        </p>
      </div>
    </footer>
  )
}

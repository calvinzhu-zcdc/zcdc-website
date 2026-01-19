import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function MobileCta() {
  return (
    <div className='fixed bottom-0 left-0 w-full z-50 md:hidden'>
      <Link
        href={`tel:${siteConfig.contact.phone}`}
        className='block bg-green-500 py-4 text-center text-white font-bold text-lg'
      >
        {`Call ${siteConfig.contact.phone}`}
      </Link>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className='flex items-center justify-between p-4 bg-white shadow-md'>
      <Link href='/'>
        <Image
          src='/images/logo/ZDCD Transaparent Logo.png'
          alt='ZCDC Logo'
          width={150}
          height={50}
        />
      </Link>
      <nav className='hidden md:flex gap-8'>
        <Link href='/about' className='text-gray-600 hover:text-black'>
          About Us
        </Link>
        <Link href='/services' className='text-gray-600 hover:text-black'>
          Services
        </Link>
        <Link href='/contact' className='text-gray-600 hover:text-black'>
          Contact
        </Link>
      </nav>
      <Button>Get Started</Button>
    </header>
  )
}

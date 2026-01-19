'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='relative flex items-center justify-between p-4 bg-white shadow-md md:justify-between py-12 md:py-0'>
      {/* Hamburger Menu */}
      <div className='md:hidden'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Logo */}
      <div className='absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0'>
        <Link href='/'>
          <Image
            src='/images/logo/zcdc_logo_transparent.png'
            alt='ZCDC Logo'
            width={150}
            height={50}
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className='hidden md:flex gap-16'>
        <Link
          href='/about'
          className='text-gray-800 hover:underline uppercase font-semibold text-lg'
        >
          About Us
        </Link>
        <Link
          href='/services'
          className='text-gray-800 hover:underline uppercase font-semibold text-lg'
        >
          Services
        </Link>
        <Link
          href='/contact'
          className='text-gray-800 hover:underline uppercase font-semibold text-lg'
        >
          Contact
        </Link>
      </nav>

      {/* CTA */}
      <a
        href='tel:4165551234'
        className='hidden md:inline-flex items-center rounded-md bg-sky-900 px-5 py-2 text-white font-semibold shadow hover:bg-sky-800 transition-colors text-base'
      >
        (416) 555-1234
      </a>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='absolute top-full left-0 w-full bg-white shadow-md md:hidden z-20'>
          <nav className='flex flex-col items-center gap-4 p-4'>
            <Link href='/about' className='text-gray-800 hover:underline uppercase font-semibold'>
              About Us
            </Link>
            <Link
              href='/services'
              className='text-gray-800 hover:underline uppercase font-semibold'
            >
              Services
            </Link>
            <Link href='/contact' className='text-gray-800 hover:underline uppercase font-semibold'>
              Contact
            </Link>
            <a
              href='tel:4165551234'
              className='inline-flex items-center rounded-md bg-sky-900 px-5 py-2 text-white font-semibold shadow hover:bg-sky-800 transition-colors text-base'
            >
              (416) 555-1234
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

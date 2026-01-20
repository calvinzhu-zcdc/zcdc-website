'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='fixed top-0 w-full z-50 border-b border-border bg-background md:bg-background/80 md:backdrop-blur-md'>
      <div className='container mx-auto px-6 h-20 flex items-center justify-between'>
        {/* Logo - Left Aligned */}
        <div className='flex-shrink-0'>
          <Link href='/' className='block'>
            <Image
              src='/images/logo/zcdc_logo_transparent.png'
              alt='ZCDC Logo'
              width={140}
              height={47}
              className='h-16 w-auto transition-all duration-500'
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-10'>
          <Link
            href='/about'
            className='font-sans text-base uppercase tracking-[0.12em] font-medium text-foreground/70 hover:text-foreground transition-colors'
          >
            About Us
          </Link>
          <Link
            href='/services'
            className='font-sans text-base uppercase tracking-[0.12em] font-medium text-foreground/70 hover:text-foreground transition-colors'
          >
            Services
          </Link>
          <Link
            href='/contact'
            className='font-sans text-base uppercase tracking-[0.12em] font-medium text-foreground/70 hover:text-foreground transition-colors'
          >
            Contact
          </Link>

          {/* Subtle CTA with border separator */}
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className='flex items-center gap-2 font-sans text-base uppercase tracking-[0.12em] font-bold text-foreground border-l pl-10 border-border hover:text-primary transition-colors'
          >
            <Phone size={18} strokeWidth={2.5} />
            {siteConfig.contact.phone}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className='md:hidden text-foreground hover:text-primary transition-colors'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Editorial Style */}
      {isMenuOpen && (
        <div className='fixed inset-0 top-20 bg-background z-40 md:hidden flex flex-col p-8 space-y-8 animate-in fade-in'>
          <Link
            href='/about'
            className='font-serif text-3xl text-foreground border-b border-border pb-4 hover:text-primary transition-colors'
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href='/services'
            className='font-serif text-3xl text-foreground border-b border-border pb-4 hover:text-primary transition-colors'
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href='/contact'
            className='font-serif text-3xl text-foreground border-b border-border pb-4 hover:text-primary transition-colors'
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>

          <div className='pt-4'>
            <p className='font-sans text-[10px] uppercase tracking-widest text-muted-foreground mb-4'>
              Inquiries
            </p>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className='font-serif text-2xl text-foreground underline decoration-border underline-offset-8 hover:text-primary transition-colors'
            >
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

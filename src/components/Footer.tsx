import { siteConfig } from '@/config/site'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-foreground text-background pt-20 pb-10'>
      <div className='container mx-auto px-6'>
        {/* SECTION 1: MAIN CONTENT BLOCK */}
        <div className='flex flex-col lg:flex-row justify-between items-start gap-12 pb-16'>
          {/* Brand Pillar */}
          <div className='max-w-sm'>
            <Image
              src='/images/logo/zcdc_logo_transparent.png'
              alt='ZCDC CPA'
              width={140}
              height={47}
              className='h-10 w-auto mb-6 opacity-90'
            />
            <p className='font-serif text-2xl leading-snug text-background/90'>
              Ready to secure your <span className='italic text-background'>financial future?</span>
            </p>
            <p className='mt-4 text-background/60 font-sans text-sm max-w-xs'>
              Meticulous accounting for enterprises that value strategic foresight.
            </p>
          </div>

          {/* Action & Info Pillar */}
          <div className='flex flex-col sm:flex-row gap-12 lg:gap-24'>
            <div className='space-y-4'>
              <p className='font-sans text-[10px] uppercase tracking-[0.2em] text-background/50 font-bold'>
                Inquiries
              </p>
              <ul className='space-y-3 font-sans text-sm'>
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className='hover:text-background transition-colors text-background/80'
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className='hover:text-background transition-colors text-background/80'
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li className='text-background/60'>{siteConfig.contact.address}</li>
              </ul>
            </div>

            <div className='space-y-6'>
              <p className='font-sans text-[10px] uppercase tracking-[0.2em] text-background/50 font-bold'>
                Engagement
              </p>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className='inline-block border border-background/20 hover:bg-background hover:text-foreground px-8 py-3 transition-all duration-300 font-sans text-xs uppercase tracking-widest'
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 2: UTILITY BAR */}
        <div className='border-t border-background/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-background/50 uppercase tracking-widest font-sans'>
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className='flex gap-8'>
            <a href='#' className='hover:text-background transition-colors'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-background transition-colors'>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

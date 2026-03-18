import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${siteConfig.name}. Review the terms governing the use of our website and professional services.`,
}

export default function Terms() {
  return (
    <div className='pt-20'>
      <Header />
      <section className='pt-24 pb-32 bg-background'>
        <div className='container mx-auto px-4 md:px-6 max-w-3xl'>
          <h1 className='font-serif text-4xl md:text-5xl font-light text-foreground tracking-tighter mb-20'>
            Terms of <span className='italic font-normal'>Service</span>
          </h1>

          <div className='space-y-12 font-sans text-foreground/80 leading-relaxed'>
            <p className='text-sm text-muted-foreground uppercase tracking-widest'>
              Effective Date: March 18, 2026
            </p>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Acceptance of Terms
              </h2>
              <p>
                By accessing and using the {siteConfig.name} website (&ldquo;Site&rdquo;), you agree
                to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to
                these Terms, please do not use the Site. We reserve the right to modify these Terms
                at any time, and your continued use of the Site constitutes acceptance of any changes.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Description of Services
              </h2>
              <p>
                {siteConfig.name} is a Chartered Professional Accounting firm providing audit,
                assurance, tax, advisory, and related professional services. This Site provides
                general information about our firm and services. The content on this Site does not
                constitute professional accounting, tax, or financial advice and should not be relied
                upon as such.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Professional Engagement
              </h2>
              <p>
                A professional client relationship with {siteConfig.name} is established only through
                a formal engagement letter signed by both parties. Browsing this Site, submitting a
                contact form, or communicating with us through this Site does not create a
                professional client relationship.
              </p>
              <p>
                All professional services are governed by separate engagement agreements, which
                outline the scope, fees, responsibilities, and terms specific to each engagement.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                No Professional Advice
              </h2>
              <p>
                The information provided on this Site is for general informational purposes only. It
                is not intended to be, and should not be construed as, professional accounting, tax,
                legal, or financial advice. You should consult with a qualified professional before
                making any financial or business decisions.
              </p>
              <p>
                Tax laws, regulations, and standards change frequently. While we strive to keep the
                information on this Site current, we do not warrant that it reflects the most recent
                legal or regulatory developments.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Intellectual Property
              </h2>
              <p>
                All content on this Site, including text, graphics, logos, images, and software, is
                the property of {siteConfig.name} or its content suppliers and is protected by
                Canadian and international copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works from any
                content on this Site without our prior written consent.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Use of the Site
              </h2>
              <p>You agree to use this Site only for lawful purposes and in a manner that does not:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>Infringe upon the rights of others</li>
                <li>Restrict or inhibit anyone else&rsquo;s use of the Site</li>
                <li>Violate any applicable local, provincial, national, or international law</li>
                <li>Attempt to gain unauthorized access to the Site or its related systems</li>
                <li>Transmit any harmful, threatening, or objectionable material</li>
              </ul>
            </div>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, {siteConfig.name}, its partners, employees,
                and affiliates shall not be liable for any direct, indirect, incidental, special, or
                consequential damages arising from your use of, or inability to use, this Site or any
                information contained herein.
              </p>
              <p>
                This Site is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis
                without warranties of any kind, either express or implied.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Third-Party Links
              </h2>
              <p>
                This Site may contain links to third-party websites. These links are provided for
                your convenience only. We do not endorse, control, or assume responsibility for the
                content, privacy policies, or practices of any third-party sites. Accessing
                third-party websites is at your own risk.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Confidentiality
              </h2>
              <p>
                Please do not send confidential or sensitive information through this Site&rsquo;s
                contact forms or email links. Information transmitted through these channels may not
                be secure. A secure method of information exchange will be established once a formal
                engagement is in place.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Governing Law
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of the Province
                of Ontario and the federal laws of Canada applicable therein. Any disputes arising
                from these Terms or your use of the Site shall be subject to the exclusive
                jurisdiction of the courts of the Province of Ontario.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Professional Standards
              </h2>
              <p>
                {siteConfig.name} is governed by the professional and ethical standards established
                by the Chartered Professional Accountants of Ontario (CPA Ontario). Our professional
                obligations, including those related to independence, confidentiality, and due care,
                are outlined in the CPA Code of Professional Conduct.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Changes to These Terms
              </h2>
              <p>
                We reserve the right to update or modify these Terms at any time without prior notice.
                Changes will be effective immediately upon posting to this Site. Your continued use of
                the Site after any modifications constitutes your acceptance of the revised Terms.
              </p>
            </div>

            <div className='space-y-4 border-t border-border pt-12'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Contact Us
              </h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className='space-y-1'>
                <p className='text-foreground'>{siteConfig.name}</p>
                <p>{siteConfig.contact.address}</p>
                <p>
                  Email:{' '}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className='text-foreground underline underline-offset-4 hover:text-foreground/70 transition-colors'
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className='text-foreground underline underline-offset-4 hover:text-foreground/70 transition-colors'
                  >
                    {siteConfig.contact.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

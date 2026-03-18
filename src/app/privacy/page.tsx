import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
}

export default function Privacy() {
  return (
    <div className='pt-20'>
      <Header />
      <section className='pt-24 pb-32 bg-background'>
        <div className='container mx-auto px-4 md:px-6 max-w-3xl'>
          <h1 className='font-serif text-4xl md:text-5xl font-light text-foreground tracking-tighter mb-20'>
            Privacy <span className='italic font-normal'>Policy</span>
          </h1>

          <div className='space-y-12 font-sans text-foreground/80 leading-relaxed'>
            <p className='text-sm text-muted-foreground uppercase tracking-widest'>
              Effective Date: March 18, 2026
            </p>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Introduction
              </h2>
              <p>
                {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is
                committed to protecting the privacy and confidentiality of personal information
                entrusted to us. This Privacy Policy describes how we collect, use, disclose, and
                safeguard your information when you visit our website or engage our professional
                services.
              </p>
              <p>
                As a Chartered Professional Accounting firm, we are bound by the professional and
                ethical standards of the Chartered Professional Accountants of Ontario (CPA Ontario)
                and applicable Canadian privacy legislation, including the Personal Information
                Protection and Electronic Documents Act (PIPEDA).
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Information We Collect
              </h2>
              <p>We may collect the following types of personal information:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>
                  <strong className='text-foreground'>Contact Information:</strong> Name, email
                  address, phone number, and mailing address when you reach out to us through our
                  contact form or other channels.
                </li>
                <li>
                  <strong className='text-foreground'>Financial Information:</strong> Tax records,
                  financial statements, and other documentation provided in connection with our
                  professional services.
                </li>
                <li>
                  <strong className='text-foreground'>Website Usage Data:</strong> IP address, browser
                  type, pages visited, and other analytics data collected through cookies and similar
                  technologies.
                </li>
                <li>
                  <strong className='text-foreground'>Business Information:</strong> Company name,
                  role, and industry details relevant to our engagement.
                </li>
              </ul>
            </div>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                How We Use Your Information
              </h2>
              <p>We use personal information for the following purposes:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>To provide and deliver our professional accounting, audit, tax, and advisory services</li>
                <li>To communicate with you regarding your account, inquiries, or service requests</li>
                <li>To comply with legal and regulatory obligations, including those set by CPA Ontario and the Canada Revenue Agency</li>
                <li>To improve our website functionality and user experience</li>
                <li>To send relevant updates about our services, with your consent</li>
              </ul>
            </div>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Disclosure of Information
              </h2>
              <p>
                We do not sell, trade, or rent your personal information. We may share your
                information only in the following circumstances:
              </p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>
                  <strong className='text-foreground'>With Your Consent:</strong> When you have
                  authorized us to share information with specific third parties.
                </li>
                <li>
                  <strong className='text-foreground'>Legal Requirements:</strong> When required by
                  law, regulation, or legal process, including filings with the Canada Revenue Agency
                  or other regulatory bodies.
                </li>
                <li>
                  <strong className='text-foreground'>Professional Obligations:</strong> As required
                  by CPA Ontario&rsquo;s rules of professional conduct and regulatory requirements.
                </li>
                <li>
                  <strong className='text-foreground'>Service Providers:</strong> With trusted
                  third-party vendors who assist in operating our website or conducting our business,
                  subject to confidentiality agreements.
                </li>
              </ul>
            </div>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect personal
                information against unauthorized access, alteration, disclosure, or destruction. These
                measures include encryption, secure file storage, access controls, and regular
                security assessments.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Data Retention
              </h2>
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes
                for which it was collected, or as required by applicable laws and professional
                standards. Financial records and engagement documentation are retained in accordance
                with CPA Ontario guidelines and Canadian tax legislation.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Your Rights
              </h2>
              <p>Under Canadian privacy law, you have the right to:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Withdraw consent for the collection or use of your information, subject to legal and contractual restrictions</li>
                <li>File a complaint with the Office of the Privacy Commissioner of Canada if you believe your privacy rights have been violated</li>
              </ul>
            </div>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Cookies
              </h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing
                experience. You may control cookie settings through your browser preferences. Disabling
                cookies may affect certain website functionality.
              </p>
            </div>

            <div className='space-y-4'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page with an updated effective date. We encourage you to review this policy
                periodically.
              </p>
            </div>

            <div className='space-y-4 border-t border-border pt-12'>
              <h2 className='font-serif text-2xl font-light text-foreground tracking-tight'>
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your personal
                information, please contact us:
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

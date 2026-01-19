export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto text-center'>
        <p>&copy; {new Date().getFullYear()} ZCDC CPA. All rights reserved.</p>
        <p className='mt-2'>123 Accounting Lane, Suite 100, Financial City, 12345</p>
        <p>Email: contact@zcdccpa.com | Phone: (123) 456-7890</p>
      </div>
    </footer>
  )
}

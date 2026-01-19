import Link from 'next/link'

export default function MobileCta() {
  return (
    <div className='fixed bottom-0 left-0 w-full z-50 md:hidden'>
      <Link
        href='tel:4165551234'
        className='block bg-green-500 py-4 text-center text-white font-bold text-lg'
      >
        Call (416) 555-1234
      </Link>
    </div>
  )
}

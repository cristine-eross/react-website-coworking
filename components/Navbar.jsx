import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

function Navbar() {
  return (
    <div className='px-4 py-2 w-full sticky top-2'>
        <div className="bg-white w-full flex justify-between border border-slate-600 pr-4 shadow-md shadow-slate-700 rounded-sm">
        <div>
          <Image
          className=""
          src="/studium.svg"
          alt="Studium Hub Logo"
          width={180}
          height={37}
          priority
          />
        </div>
        <div className='font-bold text-xl flex gap-8 items-center tracking-tight'>  
          <Link href={'#'} className='hover:border rounded-sm px-4 py-2 hover:text-slate-700'>
            <h2>about us</h2>
          </Link>
          <Link href={'#'} className='hover:border rounded-sm px-4 py-2 hover:text-slate-700'>
            <h2>your space</h2>
          </Link>
          <Link href={'#'} className='hover:border rounded-sm px-4 py-2 hover:text-slate-700'>
            <h2>packages</h2>
          </Link>
          <Link href={'#'} className='hover:border rounded-sm px-4 py-2 hover:text-gradient-to-r from-slate-700 to-slate-400'>
            <h2>contact</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

function Navbar() {
  return (
    <div className='px-4 py-2 w-full sticky top-2'>
        <div className="bg-white w-full flex justify-between items-center border border-slate-600 pr-4 shadow-md shadow-slate-700 rounded-sm">
        <div>
          <Link href={'#'}>
            <Image
            className=""
            src="/studium.svg"
            alt="Studium Hub Logo"
            width={180}
            height={37}
            priority
            />
          </Link>
        </div>
        <div className='font-bold text-xl flex gap-8 items-center justify-center tracking-tight'>  
          <Link href={'#'} className='hover:border border-slate-700 rounded-sm px-4 py-2 hover:text-slate-700'>
            <h2> <span className='text-lg font-light'> · : : </span> about us <span className='text-lg font-light'> : : · </span> </h2>
          </Link>
          <Link href={'#'} className='hover:border border-slate-700 rounded-sm px-4 py-2 hover:text-slate-700'>
          <h2> <span className='text-lg font-light'> · : : </span> your space <span className='text-lg font-light'> : : · </span> </h2>
          </Link>
          <Link href={'#'} className='hover:border border-slate-700 rounded-sm px-4 py-2 hover:text-slate-700'>
          <h2> <span className='text-lg font-light'> · : : </span> packages <span className='text-lg font-light'> : : · </span> </h2>
          </Link>
          <Link href={'#'} className='hover:border border-slate-700 rounded-sm px-4 py-2 hover:text-gradient-to-r from-slate-700 to-slate-400'>
          <h2> <span className='text-lg font-light'> · : : </span> contact <span className='text-lg font-light'> : : · </span> </h2>
          </Link>
        </div>
        <div className='flex gap-1 items-center h-8 w-30'>
          <div className='w-8 font-bold text-lg rounded-sm text-center bg-slate-500 hover:bg-white hover:border hover:border-slate-700'>
            <button><h2>EN</h2></button> 
          </div>
          <div className='w-8 font-bold text-lg rounded-sm text-center bg-slate-400 hover:bg-white hover:border hover:border-slate-700'>
            <button><h2>RO</h2></button>
          </div>
          <div className='w-8 font-bold text-lg rounded-sm text-center bg-slate-300 hover:bg-white hover:border hover:border-slate-700'>
            <button><h2>HU</h2></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar({navText1, navText2, navText3, navText4}) {
  return (
    <div className='px-4 py-4 w-full sticky top-0 z-50 bg-slate-100'>
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
        <div className='font-bold text-xl flex gap-8 items-center justify-between tracking-tight'>  
          <Link href={'#'} className='hover:border border-slate-700 rounded-sm px-4 py-2 hover:text-slate-700'>
            <h2>{navText1}</h2>
          </Link>
          <Link href={'#'} className='hover:border border-slate-700 rounded-sm px-4 py-2 hover:text-slate-700'>
          <h2>{navText2}</h2>
          </Link>
          <Link href={'#'} className='hover:border border-red-100 rounded-sm px-4  hover:text-slate-700'>
          <h2 className='bg-red-50 p-2 rounded-sm'>{navText3}</h2>
          </Link>
          <Link href={'#'} className='hover:border border-slate-700 rounded-sm px-4 py-2 hover:text-gradient-to-r from-slate-700 to-slate-400'>
          <h2>{navText4}</h2>
          </Link>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='font-bold text-lg rounded-full p-3 text-center bg-slate-500 hover:bg-white hover:border hover:border-slate-700'>
            <Link href={'/en'}><h2>EN</h2></Link>
          </div>
          <div className='font-bold text-lg rounded-full p-3 text-center bg-slate-400 hover:bg-white hover:border hover:border-slate-700'>
            <Link href={'/ro'}><h2>RO</h2></Link>
          </div>
          <div className='font-bold text-lg rounded-full p-3 text-center bg-slate-300 hover:bg-white hover:border hover:border-slate-700'>
            <Link href={'/hu'}><h2>HU</h2></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import Link from 'next/link'

function Hero({ line1, strong1, line2, line3, strong2, cta }) {
  return (
    <div className='w-full max-h-[800px]'>
        <div className='border bg-hero_image_mobile h-[800px] lg:bg-hero_image max-h-full lg:h-[600px] bg-no-repeat bg-cover lg:mb-[250px]'>
          <div className=' bg-gray-100 shadow-xl shadow-slate-900 w-5/6 mx-auto mt-[550px] mb-3 flex flex-col justify-center items-center text-center py-10'>
            <h1 className='text-xl p-2 md:text-3xl lg:text-4xl leading-loose tracking-tight'>{line1} <strong> {strong1} </ strong> <br /> {line2} <br /> {line3} <br/> <strong>
              <span> {strong2}</span> </strong>
            </h1>
          </div>
        </div>
        <div className='bg-slate-300 w-[250px] h-[90px] z-0 flex justify-center items-center mt-[-50px] mx-auto rounded-sm'>
          <div className='flex justify-center align-center z-1 mr-[-50px]'>
            <Link href={'#'} className='bg-slate-700 text-slate-100 text-2xl px-8 py-4 rounded-sm shadow-lg lowercase font-bold tracking-wider hover:bg-slate-900 hover:text-3xl'>{cta}</Link>
          </div>
        </div>
    </div>
  )
}

export default Hero
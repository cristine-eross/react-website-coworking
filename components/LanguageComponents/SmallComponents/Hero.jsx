import React from 'react'

function Hero({ line1, strong1, line2, line3, strong2 }) {
  return (
    <div className='w-full my-4 max-h-[800px]'>
        <div className='border bg-hero_image_mobile h-[800px] lg:bg-hero_image max-h-full lg:h-[600px] bg-no-repeat bg-cover mb-1 lg:mb-[300px]'>
          <div className=' bg-gray-100 shadow-xl shadow-slate-900 w-5/6 mx-auto my-[550px] flex flex-col justify-center items-center text-center py-8'>
            <h1 className='text-xl p-2 md:text-3xl lg:text-4xl leading-loose tracking-tight'>{line1} <strong> {strong1} </ strong> <br /> {line2} <br /> {line3} <br/> <strong>
              <span> {strong2}</span> </strong>
            </h1>
          </div>
        </div>
    </div>
  )
}

export default Hero
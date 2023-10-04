import React from 'react'

function SectionTitle({ title }) {
  return (
    <div className='bg-slate-100 w-full h-auto py-10 flex flex-col align-center items-center mt-52'>
        <h2 className='text-xl mg:text-2xl lg:text-3xl tracking-tight'>{title}</h2>
    </div>
  )
}

export default SectionTitle
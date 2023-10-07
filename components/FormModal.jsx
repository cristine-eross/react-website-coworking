'use client'
import { BhuTuka_Expanded_One } from 'next/font/google'
import React from 'react'
import { useState, useEffect, useRef } from 'react'


function FormModal({formTitle, name, email, phone, company, invoice, startDate, endDate, amount, rules, btn}) {

  const [daysRemaining, setDaysRemaining] = useState(0)
  const date1input = useRef(null)
  const date2input = useRef(null)


  useEffect(() => {
    const calculateDaysRemaining = () => {
      const secondDate = new Date('{date1input.current.value}')
      const firstDate = new Date('{date2input.current.value}')
      const timeDifference = Math.abs(secondDate-firstDate)
      const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))
      setDaysRemaining(daysRemaining)
    }

    if (date1input.current.value && date2input.current.value) {
      calculateDaysRemaining()
    } else {
      setDaysRemaining(0)
    }
  }, [])

  return (
    <div id='modal' className='visible w-[90%] md:w-5/6 lg:w-5/6 h-auto pb-5 bg-slate-200 mx-auto bg-opacity-50 rounded-sm'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider text-center font-bold pb-10 pt-5 text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600'>{formTitle}</h2>
        <form className='mx-10 flex flex-col items-start justify-center gap-2 text-2xl'>
        <label className='w-full'>{name} <br />
        <input
          type="text" 
           className='w-full my-2 px-3 py-2 shadow-lg rounded-sm'
        />
        <input
          type="text"
          className='w-full my-2 px-3 py-2 shadow-lg rounded-sm' 
        />
      </label>
      <label className='w-full'>{email} <br />
        <input
          type="text"
          className='w-full my-2 px-3 py-2 shadow-lg rounded-sm' 
        />
        </label>
        <label className='w-full'>{phone} <br />
            <input 
                type="number" 
                placeholder='#### ### ###'
                className='w-full my-2 px-3 py-2 shadow-lg rounded-sm'
            />
        </label>
        <label className='w-full'> {company} <br />
            <p className='text-lg'>{invoice}</p>
            <input 
                type="text"
                className='w-full my-2 px-3 py-2 shadow-lg rounded-sm'
                />
        </label>
        <label id='startDate' className='w-full'>{startDate} <br />
            <input 
                type="date"
                id='date1'
                name='date1'
                ref={date1input}
                className='w-full my-2 px-3 py-2 shadow-lg rounded-sm'
            />
        </label>
        <label id='endDate' className='w-full'>{endDate} <br />
            <input 
                type="date"
                id='date2'
                name='date2'
                ref={date2input}
                className='w-full my-2 px-3 py-2 shadow-lg rounded-sm'
            />
        </label>
    </form>
    <div className='bg-red-50 shadow-lg mx-0 md:mx-10 lg:mx-10 mt-10 flex flex-col justify-center items-center gap-2 py-2 rounded-sm'>
        <h3 className='text-2xl'>{amount}</h3>
        <p id='countedAmount' className='text-4xl'>
            {daysRemaining}
        </p>
    </div>
    <p className='mx-10 my-5'>{rules}</p>
    <div className='w-full flex justify-center align-center'>
        <button className='content-center bg-red-50 border-4 rounded-sm border-slate-900 px-20 py-2 text-3xl tracking-wider font-bold uppercase text-slate-900 hover:bg-gradient-to-r from-slate-900 to-slate-600 hover:text-slate-100 shadow-lg'>{btn}</button>
    </div>
    </div>
  )
}

export default FormModal
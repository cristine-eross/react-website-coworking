import React from 'react'

function FormModal() {
  return (
    <div id='modal' className='visible w-[90%] md:w-5/6 lg:w-5/6 h-auto pb-5 bg-slate-200 mx-auto bg-opacity-50 rounded-sm'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider text-center font-bold pb-10 pt-5 text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600'>Book your office spot</h2>
        <form className='mx-10 flex flex-col items-start justify-center gap-2 text-2xl'>
        <label className='w-full'>Name: <br />
        <input
          type="text" 
           className='w-full my-2 px-3 py-2 shadow-lg rounded-sm'
        />
        <input
          type="text"
          className='w-full my-2 px-3 py-2 shadow-lg rounded-sm' 
        />
      </label>
      <label className='w-full'>Email: <br />
        <input
          type="text"
          className='w-full my-2 px-3 py-2 shadow-lg rounded-sm' 
        />
        </label>
        <label className='w-full'>Phone number: <br />
            <input 
                type="number" 
                placeholder='#### ### ###'
                className='w-full my-2 px-3 py-2 shadow-lg rounded-sm'
            />
        </label>
        <label className='w-full'> Company / Organisation <br />
            <p className='text-lg'>If you would like the invoice to be issued for a company, please provide us with company full name, CIF, trade registry number and company's full address</p>
            <input 
                type="text"
                className='w-full my-2 px-3 py-2 shadow-lg rounded-sm'
                />
        </label>
        <label className='w-full'>Start Date: <br />
            <input 
                type="date"
                className='w-full my-2 px-3 py-2 shadow-lg rounded-sm'
            />
        </label>
        <label className='w-full'>End Date: <br />
            <input 
                type="date"
                className='w-full my-2 px-3 py-2 shadow-lg rounded-sm'
            />
        </label>
    </form>
    <div className='bg-red-50 shadow-lg mx-0 md:mx-10 lg:mx-10 mt-10 flex flex-col justify-center items-center gap-2 py-2 rounded-sm'>
        <h3 className='text-2xl'>Amount:</h3>
        <p className='text-4xl'>
            80 RON
        </p>
    </div>
    <p className='mx-10 my-5'>I've read the Office Rules and Terms and Services, and by buying for my spot I agree and accept them.</p>
    <div className='w-full flex justify-center align-center'>
        <button className='content-center bg-red-50 border-4 rounded-sm border-slate-900 px-20 py-2 text-3xl tracking-wider font-bold uppercase text-slate-900 hover:bg-gradient-to-r from-slate-900 to-slate-600 hover:text-slate-100 shadow-lg'>Buy</button>
    </div>
    </div>
  )
}

export default FormModal
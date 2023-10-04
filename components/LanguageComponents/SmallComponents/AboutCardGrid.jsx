import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function AboutCardGrid() {
  return (
    <>
    <Image
        src={'/office.png'}
        width={800}
        height={500}
        className='mx-auto mt-10 mb-20'
    />
    <div className='flex flex-col mg:flex-col lg:flex-row justify-center items-center gap-20'>
        <div className='bg-white shadow-md shadow-slate-600 w-[350px] h-[450px] flex flex-col justify-between items-center text-center'>
            <h3 className='text-5xl pt-8 font-bold'>where?</h3>
            <h4 className='text-2xl leading-tight p-8'>Our address is < br/> 540064 Targu Mures, Bolyai street 15.</h4>
            <Link href={'https://www.google.com/maps/dir//Studium+HUB,+Strada+Bolyai+15,+T%C3%A2rgu+Mure%C8%99+540064/@46.5431976,24.5625423,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x474bb7c4013b963d:0x2a5f120a30b07209!2m2!1d24.5651172!2d46.5431976!3e0?entry=ttu'}  className='hover:shadow-inner'>
                <Image 
                src={'/map.svg'}
                alt={'Studium HUB on Google Maps'}
                width={350}
                height={200}
             />
            </Link>
        </div>
    <div className='bg-white shadow-md shadow-slate-600 w-[350px] h-[450px] flex flex-col justify-between items-center text-center'>
        <h3 className='text-5xl pt-8 font-bold'>when?</h3>
        <h4 className='text-2xl p-5 pb-10'>Monday-Friday <br /> 7:00 - 19:00 <br /> <br /> Saturday <br /> 9:00 - 17:00 <br /><br />Sunday <br /> 9:00 - 14:00</h4>
    </div>
    <div className='bg-white shadow-md shadow-slate-600 w-[350px] h-[450px] flex flex-col justify-between items-center text-center'>
        <h3 className='text-5xl pt-8 font-bold'>why?</h3>
        <ul className='text-xl p-5'>
            <li>superfast internet (cable too)</li>
            <li>comfortable desks with lockers</li>
            <li>ergonomic chairs</li>
            <li>rentable gadgets and devices</li>
            <li>printers and scanners</li>
            <li>kitchen area with coffee machine</li>
            <li>free parking spots</li>
            <li>conference room</li>
            <li>auditorium for events</li>
            <li>cozy garden for breaks</li>
            <li>friendly coworkers</li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default AboutCardGrid
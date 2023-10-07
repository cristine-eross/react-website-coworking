import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function page() {
  return (
    <>
    <Navbar
      navText1= 'biroul tău'
      navText2= 'prețuri'
      navText3= 'rezervare'
      navText4= 'contact'
    />
    <Hero 
        line1 = 'Studium HUB e un'
        strong1 = 'spațiu de coworking'
        line2 = 'în centrul Târgu Mureșului,'
        line3 = 'un perfect loc de muncă'
        strong2 = 'pentru antreprenori și liber profesioniști.' 
        cta = 'rezervare'
    />
</>
  )
}

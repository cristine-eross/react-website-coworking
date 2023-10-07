import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function page() {
  return (
    <>
    <Navbar 
        navText1 = 'your office'
        navText2 = 'prices'
        navText3 = 'reservation'
        navText4 = 'contact'

      />
      <Hero 
        line1 = 'Studium HUB is a'
        strong1 = 'coworking space'
        line2 = 'in the heart of Targu Mures,'
        line3 = 'the perfect office environment'
        strong2 = 'for entrepreneurs, remotes or freelancers.' 
        cta = 'reservation'
      />
    </>
  )
}

import React from 'react'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

export default function page() {
  return (
    <>
        <Navbar
          navText1= 'az irodád'
          navText2= 'árak'
          navText3= 'foglalás'
          navText4= 'kapcsolat'
        />
        <Hero 
            line1 = 'A Studium HUB egy'
            strong1 = 'közösségi iroda'
            line2 = 'Marosvásárhely szívében,'
            line3 = 'egy tökéletes munkakörnyezet'
            strong2 = 'vállalkozóknak vagy szabadúszóknak.' 
            cta = 'helyfoglalás'
        />
    </>
  )
}

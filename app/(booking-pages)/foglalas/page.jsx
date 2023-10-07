import Navbar from '@/components/Navbar'
import React from 'react'
import FormModal from '@/components/FormModal'


export default function page() {
  return (
    <>
      <Navbar 
        navText1 = 'az irodád'
        navText2 = 'árak'
        navText3 = 'foglalás'
        navText4 = 'kapcsolat'
      />
      <FormModal 
        formTitle = 'Foglald le az irodád'
        name = 'Név:'
        email = 'E-mail cím:'
        phone = 'Telefonszám:' 
        company = 'Cég / Szervezet'
        invoice = "Amennyiben szeretnél a kifizetett díjról számlát kiállíttatni a céged vagy szervezeted részére, kérünk tüntesd fel a cég teljes nevét, cégjegyzékszámát, regisztrációs számát és a cég bejegyzett címét."
        startDate = 'Első napod:'
        endDate = 'Utolsó napod:'
        amount= 'Fizetendő összeg' 
        rules = "Elolvastam az Irodaszabályzatot és a Felhasználási feltételeket. Az oldalon történő regisztrációval és vásárlással elfogadom őket és vállalom a szabályzat betartását."
        btn = 'Vásárlás'
      />
    </>
  )
}

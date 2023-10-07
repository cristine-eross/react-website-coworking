import React from 'react'
import Navbar from '@/components/Navbar'
import FormModal from '@/components/FormModal'

export default function page() {
  return (
    <>
      <Navbar 
        navText1 = 'biroul tău'
        navText2 = 'prețuri'
        navText3 = 'rezervare'
        navText4 = 'contact'
      />
      <FormModal 
        formTitle = 'Rezervă biroul tău acum'
        name = 'Nume:'
        email = 'Adresa de email:'
        phone = 'Număr de telefon:' 
        company = 'Compania / Organizația'
        invoice = "Dacă dorești o factură pentru compania sau organizația ta, te rugăm frumos să completezi titlul companiei, numărul de registrație și adresa companiei."
        startDate = 'Prima dată:'
        endDate = 'Ultima dată:'
        amount= 'Costul total' 
        rules = "Am citit Regulamentul Biroului, la fel și Termeni și Condiții. Cu rezervare și plătire le accept și țin pe toate."
        btn = 'Plătesc'
      />
    </>
  )
}

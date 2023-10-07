import React from 'react'
import Navbar from '@/components/Navbar'
import FormModal from '@/components/FormModal'

export default function page() {
  return (
    <>
      <Navbar 
        navText1 = 'your office'
        navText2 = 'prices'
        navText3 = 'reservation'
        navText4 = 'contact'
      />
      <FormModal 
        formTitle = 'Book your office now'
        name = 'Name:'
        email = 'Email:'
        phone = 'Phone number:' 
        company = 'Company / Organisation'
        invoice = "If you would like the invoice to be issued for a company, please provide us with company full name, CIF, trade registry number and company's full address."
        startDate = 'Start Date:'
        endDate = 'End Date:'
        amount= 'Amount' 
        rules = "I've read the Office Rules and Terms and Services, and by buying for my spot I agree and accept them."
        btn = 'Buy'
      />
    </>
  )
}

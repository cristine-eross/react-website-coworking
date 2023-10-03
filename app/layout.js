import './globals.css'
import { Gabarito } from 'next/font/google'
import Navbar from '@/components/Navbar'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'Studium HUB',
  description: 'Co-working space in Targu Mures',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={gabarito.className}>
        <div className='bg-triangles_image h-[6600px] bg-repeat'>
          <Navbar />
          {children}
        </div>
        </body>
    </html>
  )
}

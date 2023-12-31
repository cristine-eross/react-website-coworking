import Hero from '@/components/Hero'
import ImagesGrid from '@/components/ImagesGrid'
import AboutCardGrid from '@/components/AboutCardGrid'
import SectionTitle from '@/components/SectionTitle'
import Navbar from '@/components/Navbar'


export default function Home() {
  
  return (
    <main className="bg-triangles_image h-[6600px] bg-repeat">
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
        cta = 'book your spot'
      />
      <SectionTitle 
        title = 'about us'
      />
      <ImagesGrid />
      <AboutCardGrid />
    </main>
  )
}

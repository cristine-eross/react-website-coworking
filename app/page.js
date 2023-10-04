import Navbar from '@/components/LanguageComponents/SmallComponents/Navbar'
import Hero from '@/components/LanguageComponents/SmallComponents/Hero'
import SectionTitle from '@/components/LanguageComponents/SmallComponents/SectionTitle'
import AboutCardGrid from '@/components/LanguageComponents/SmallComponents/AboutCardGrid'


export default function Home() {


  return (
    <main className="bg-triangles_image h-[6600px] bg-repeat">
      <Navbar />
      <Hero 
        line1 = 'Studium HUB is an inspiring'
        strong1 = 'coworking space'
        line2 = 'in the heart of Targu Mures offering'
        line3 ='the perfect office environment for'
        strong2 = 'entrepreneurs, remotes or freelancers'
      />
      <SectionTitle 
        title = 'about us'
      />
      <AboutCardGrid />
      <SectionTitle 
        title = 'your space'
      />
      <SectionTitle 
        title = 'packages'
      />
      <SectionTitle 
        title = 'contact'
      />
    </main>
  )
}

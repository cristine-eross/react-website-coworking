import Hero from '@/components/LanguageComponents/SmallComponents/Hero'
import ImagesGrid from '@/components/LanguageComponents/SmallComponents/ImagesGrid'
import AboutCardGrid from '@/components/LanguageComponents/SmallComponents/AboutCardGrid'
import SectionTitle from '@/components/LanguageComponents/SmallComponents/SectionTitle'

export default function Home() {


  return (
    <main className="bg-triangles_image h-[6600px] bg-repeat">
      <Hero 
        line1 = 'Studium HUB is a'
        strong1 = 'coworking space'
        line2 = 'in the heart of Targu Mures,'
        line3 = 'the perfect office environment'
        strong2 = 'for entrepreneurs, remotes or freelancers.' 
        cta = 'show me around'
      />
      <SectionTitle 
        title = 'about us'
      />
      <ImagesGrid />
      <AboutCardGrid />
    </main>
  )
}

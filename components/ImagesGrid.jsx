import Image from 'next/image'

export default function ImagesGrid() {

  const images = [
    { src: '/garden.png', alt: 'office garden' },
    { src: '/office.png', alt: 'office' },
    { src: '/coffeearea.png', alt: 'coffee area' },
    { src: '/auditorium.png', alt: 'auditorium' },
    { src: '/hiredevice.png', alt: 'hire device' },
    { src: '/conferenceroom.png', alt: 'Samsung' },
    { src: '/printer.png', alt: 'printer' },
    { src: '/parking.png', alt: 'parking lot' },
  ]

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {images.map((image, index) => (
          <li key={index}>
            <Image src={image.src} alt={image.alt} width={500} height={400} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {images.map((image, index) => (
          <li key={index}>
            <Image src={image.src} alt={image.alt} width={500} height={400} />
          </li>
        ))}
      </ul>
    </div>
  )
}
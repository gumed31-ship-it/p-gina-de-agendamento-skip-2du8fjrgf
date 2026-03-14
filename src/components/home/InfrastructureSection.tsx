import { ScrollReveal } from '@/components/ui/scroll-reveal'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'

export function InfrastructureSection() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  const images = [
    {
      src: 'https://img.usecurling.com/p/800/600?q=modern%20waiting%20room',
      alt: 'Recepção Moderna',
    },
    { src: 'https://img.usecurling.com/p/800/600?q=mri%20machine', alt: 'Sala de Exames Imagem' },
    {
      src: 'https://img.usecurling.com/p/800/600?q=doctor%20office',
      alt: 'Consultórios Equipados',
    },
    {
      src: 'https://img.usecurling.com/p/800/600?q=medical%20laboratory',
      alt: 'Laboratório Integrado',
    },
  ]

  return (
    <section id="estrutura" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-ultra-gold font-semibold uppercase tracking-wider mb-2 text-sm">
              Nossa Estrutura
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-ultra-blue">
              Ambiente planejado para seu bem-estar
            </h3>
          </div>
          <p className="text-slate-600 max-w-md">
            Instalações modernas, acessíveis e confortáveis para tornar sua experiência a mais
            agradável possível.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Carousel
            opts={{ align: 'start', loop: true }}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-4">
              {images.map((img, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-2xl group relative aspect-[4/3]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <h4 className="text-white font-semibold text-lg">{img.alt}</h4>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-8">
              <CarouselPrevious className="relative inset-auto translate-y-0 h-12 w-12 border-ultra-blue text-ultra-blue hover:bg-ultra-blue hover:text-white" />
              <CarouselNext className="relative inset-auto translate-y-0 h-12 w-12 border-ultra-blue text-ultra-blue hover:bg-ultra-blue hover:text-white" />
            </div>
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  )
}

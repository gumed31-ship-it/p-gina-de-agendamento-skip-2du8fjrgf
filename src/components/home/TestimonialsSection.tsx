import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { TESTIMONIALS } from '@/lib/data'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'

export function TestimonialsSection() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  return (
    <section id="depoimentos" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-ultra-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-ultra-blue/5 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-ultra-gold font-semibold uppercase tracking-wider mb-2 text-sm">
            Depoimentos
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-ultra-blue mb-4">
            O que nossos pacientes dizem
          </h3>
        </ScrollReveal>

        <ScrollReveal delay={200} className="max-w-4xl mx-auto">
          <Carousel
            opts={{ align: 'center', loop: true }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {TESTIMONIALS.map((testimonial, idx) => (
                <CarouselItem key={idx} className="md:basis-full lg:basis-full">
                  <div className="px-4 py-2">
                    <Card className="border-none shadow-lg bg-slate-50 relative">
                      <Quote className="absolute top-6 right-8 h-12 w-12 text-ultra-gold/20" />
                      <CardContent className="p-8 md:p-12 text-center">
                        <div className="flex justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-ultra-gold fill-ultra-gold" />
                          ))}
                        </div>
                        <p className="text-lg md:text-xl text-slate-700 italic mb-8 relative z-10 leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        <div className="flex flex-col items-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-ultra-gold mb-4 shadow-sm"
                          />
                          <h4 className="font-bold text-ultra-blue">{testimonial.name}</h4>
                          <span className="text-sm text-slate-500">Paciente</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative inset-auto translate-y-0 h-10 w-10 border-slate-200" />
              <CarouselNext className="relative inset-auto translate-y-0 h-10 w-10 border-slate-200" />
            </div>
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  )
}

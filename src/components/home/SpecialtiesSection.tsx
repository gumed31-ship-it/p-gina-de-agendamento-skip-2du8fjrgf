import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { SPECIALTIES } from '@/lib/data'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'

export function SpecialtiesSection() {
  return (
    <section id="especialidades" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-ultra-gold font-semibold uppercase tracking-wider mb-2 text-sm">
            Nossas Especialidades
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-ultra-blue mb-4">
            Cuidado Integrado para Você
          </h3>
          <p className="text-slate-600 text-lg">
            Oferecemos uma ampla gama de especialidades médicas em um só lugar, focando no
            atendimento resolutivo e humanizado.
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-6">
          {SPECIALTIES.map((spec, idx) => {
            const Icon = spec.icon
            return (
              <ScrollReveal
                key={spec.id}
                delay={(idx % 5) * 100}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-19.2px)] flex"
              >
                <Card className="w-full group border border-slate-100 hover:border-ultra-gold/30 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden bg-slate-50 hover:bg-white flex flex-col">
                  <CardContent className="p-8 flex flex-col items-start flex-grow">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-ultra-gold transition-all duration-500 shrink-0">
                      <Icon className="h-7 w-7 text-ultra-blue group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h4 className="text-xl font-bold text-ultra-blue mb-3 font-serif leading-tight">
                      {spec.name}
                    </h4>
                    <p className="text-slate-600 mb-6 flex-grow">{spec.desc}</p>
                    <a
                      href="#agendamento"
                      className="inline-flex items-center text-sm font-semibold text-ultra-gold hover:text-ultra-blue transition-colors mt-auto"
                    >
                      Agendar <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </CardContent>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

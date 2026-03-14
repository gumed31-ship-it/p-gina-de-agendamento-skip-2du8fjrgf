import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { DOCTORS } from '@/lib/data'
import { Card, CardContent } from '@/components/ui/card'

export function TeamSection() {
  return (
    <section id="equipe" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-ultra-gold font-semibold uppercase tracking-wider mb-2 text-sm">
            Corpo Clínico
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-ultra-blue mb-4">
            Especialistas de Referência
          </h3>
          <p className="text-slate-600 text-lg">
            Profissionais altamente capacitados e em constante atualização para oferecer a você o
            melhor diagnóstico e tratamento.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DOCTORS.map((doc, idx) => (
            <ScrollReveal key={doc.id} delay={idx * 100}>
              <Card className="border-none shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ultra-blue/20 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <CardContent className="p-6 text-center bg-white">
                  <h4 className="text-lg font-bold text-ultra-blue mb-1 font-serif">{doc.name}</h4>
                  <p className="text-ultra-gold font-medium text-sm mb-2">{doc.specialty}</p>
                  <p className="text-slate-400 text-xs">{doc.crm}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

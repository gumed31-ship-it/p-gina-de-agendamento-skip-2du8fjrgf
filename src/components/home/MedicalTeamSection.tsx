import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { MEDICAL_TEAM } from '@/lib/data'
import { Card, CardContent } from '@/components/ui/card'

export function MedicalTeamSection() {
  return (
    <section id="equipe" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-ultra-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-ultra-blue/5 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-ultra-gold font-semibold uppercase tracking-wider mb-2 text-sm">
            Corpo Clínico
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-ultra-blue mb-4">
            Nossa Equipe Médica
          </h3>
          <p className="text-slate-600 text-lg">
            Profissionais altamente qualificados e dedicados ao cuidado com a sua saúde.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {MEDICAL_TEAM.map((doctor, idx) => (
            <ScrollReveal key={doctor.id} delay={idx * 100}>
              <Card className="border border-slate-100 hover:border-ultra-gold/30 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden bg-slate-50 group h-full">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="aspect-[4/5] sm:aspect-square overflow-hidden relative">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ultra-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 text-center bg-white flex-grow flex flex-col justify-center border-t border-slate-100 group-hover:bg-ultra-blue group-hover:border-ultra-blue transition-colors duration-300">
                    <h4 className="font-bold text-xl text-ultra-blue mb-1 font-serif group-hover:text-white transition-colors duration-300">
                      {doctor.name}
                    </h4>
                    <p className="text-sm text-ultra-gold font-medium">{doctor.specialty}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

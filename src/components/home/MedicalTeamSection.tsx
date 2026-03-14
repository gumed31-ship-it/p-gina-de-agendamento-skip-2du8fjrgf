import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import drJoseImg from '@/assets/dr-jose-guilherme-0608b.jpeg'

const teamMembers = [
  {
    name: 'Dr. Gustavo Teixeira Gomes',
    specialty: 'Ultrassonografia, Angiologia e Geriatria',
    image: 'https://img.usecurling.com/ppl/large?gender=male&seed=1',
  },
  {
    name: 'Dr. José Guilherme Gonçalves',
    specialty: 'Ortopedia e Traumatologia',
    image: drJoseImg,
  },
]

export function MedicalTeamSection() {
  return (
    <section id="corpo-clinico" className="py-24 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20 mb-4 border-none px-4 py-1.5 text-sm font-medium transition-colors">
              Corpo Clínico
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] mb-4">
              Nossa Equipe Médica
            </h2>
            <p className="text-lg text-slate-600">
              Profissionais altamente qualificados e dedicados a oferecer o melhor atendimento para
              você e sua família.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((doctor, index) => (
            <ScrollReveal key={doctor.name} delay={index * 100}>
              <Card className="overflow-hidden h-full flex flex-col group border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white rounded-xl">
                <div className="aspect-[3/4] md:aspect-[4/5] relative overflow-hidden bg-slate-100">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="object-cover w-full h-full object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-sm">
                      {doctor.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialty.split(', ').map((spec) => (
                        <Badge
                          key={spec}
                          variant="secondary"
                          className="bg-[#D4AF37] text-white hover:bg-[#C5A028] border-none font-medium shadow-sm"
                        >
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

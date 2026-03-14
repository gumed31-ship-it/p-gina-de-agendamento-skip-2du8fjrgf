import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import drJoseImg from '@/assets/dr-jose-guilherme-0608b.jpeg'

const teamMembers = [
  {
    name: 'Dr. Gustavo Teixeira Gomes',
    specialty: 'Angiologia, Ultrassonografia, Geriatria',
    image: 'https://img.usecurling.com/ppl/large?gender=male&seed=1',
  },
  {
    name: 'Dr. José Guilherme Gonçalves',
    specialty: 'Ortopedia e Traumatologia',
    image: drJoseImg,
  },
  {
    name: 'Dr. Augusto Brinati',
    specialty: 'Anestesiologia',
    image: 'https://img.usecurling.com/ppl/large?gender=male&seed=2',
  },
  {
    name: 'Dr. Sérgio Paulo Motta',
    specialty: 'Oftalmologia',
    image: 'https://img.usecurling.com/ppl/large?gender=male&seed=3',
  },
  {
    name: 'Dr. Rodrigo Bertani',
    specialty: 'Urologia',
    image: 'https://img.usecurling.com/ppl/large?gender=male&seed=4',
  },
  {
    name: 'Dra. Marley Rodrigues',
    specialty: 'Ginecologia e Obstetrícia',
    image: 'https://img.usecurling.com/ppl/large?gender=female&seed=5',
  },
  {
    name: 'Dra. Daniela Emerick',
    specialty: 'Cardiologia',
    image: 'https://img.usecurling.com/ppl/large?gender=female&seed=6',
  },
  {
    name: 'Dr. Edney Gomes',
    specialty: 'Neurologia adulta e pediátrica',
    image: 'https://img.usecurling.com/ppl/large?gender=male&seed=7',
  },
]

export function MedicalTeamSection() {
  return (
    <section id="corpo-clinico" className="py-24 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-ultra-gold/10 text-ultra-gold hover:bg-ultra-gold/20 mb-4 border-none px-4 py-1.5 text-sm font-medium transition-colors">
              Corpo Clínico
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-ultra-blue mb-4">
              Nossa Equipe Médica
            </h2>
            <p className="text-lg text-slate-600">
              Profissionais altamente qualificados e dedicados a oferecer o melhor atendimento para
              você e sua família.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((doctor, index) => (
            <ScrollReveal key={doctor.name} delay={(index % 4) * 100}>
              <Card className="overflow-hidden h-full flex flex-col group border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white rounded-xl">
                <div className="aspect-[3/4] relative overflow-hidden bg-slate-100 flex-1">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="object-cover w-full h-full object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ultra-blue/95 via-ultra-blue/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-serif font-bold text-white mb-3 drop-shadow-sm leading-tight">
                      {doctor.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialty.split(', ').map((spec) => (
                        <Badge
                          key={spec}
                          variant="secondary"
                          className="bg-ultra-gold text-white hover:bg-ultra-goldDark border-none font-medium shadow-sm text-xs"
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

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

import drGustavoImg from '@/assets/whatsapp-image-2026-01-19-at-08.28.50-1-8dfe6.jpeg'

const medicalTeam = [
  {
    name: 'Dr. Gustavo Teixeira Gomes',
    specialties: ['Ultrassonografia', 'Angiologia', 'Geriatria'],
    image: drGustavoImg,
  },
  {
    name: 'Dr. José Guilherme Gonçalves',
    specialties: ['Ortopedia e Traumatologia'],
    image: 'https://img.usecurling.com/ppl/large?gender=male&seed=42',
  },
]

export function MedicalTeamSection() {
  return (
    <section id="corpo-clinico" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Corpo Clínico</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Conheça os especialistas dedicados a oferecer o melhor atendimento para você e sua
              família.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {medicalTeam.map((doctor, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <Card className="overflow-hidden group h-full border-none shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/5] relative overflow-hidden bg-muted rounded-xl">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent opacity-90 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-primary-foreground mb-3 drop-shadow-sm">
                      {doctor.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((specialty, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold border-none shadow-sm"
                        >
                          {specialty}
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

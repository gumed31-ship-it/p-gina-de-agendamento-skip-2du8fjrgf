import { Card, CardContent } from '@/components/ui/card'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { User } from 'lucide-react'

import drAugustoImg from '@/assets/dr-augusto-66e9e.jpeg'
import drEdneyImg from '@/assets/de-edionei-67532.jpeg'
import drSergioImg from '@/assets/dr-sergio-edc13.jpeg'

const team = [
  {
    name: 'Dr. Gustavo Teixeira Gomes',
    specialty: 'Angiologia, Ultrassonografia, Geriatria',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=1',
  },
  {
    name: 'Dr. José Guilherme Gonçalves',
    specialty: 'Ortopedia e Traumatologia',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=2',
  },
  {
    name: 'Dr. Augusto Brinati',
    specialty: 'Anestesiologia',
    image: drAugustoImg,
  },
  {
    name: 'Dr. Sérgio Paulo Motta',
    specialty: 'Oftalmologia',
    image: drSergioImg,
  },
  {
    name: 'Dr. Rodrigo Bertani',
    specialty: 'Urologia',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=3',
  },
  {
    name: 'Dra. Marley Rodrigues',
    specialty: 'Ginecologia e Obstetrícia',
    image: 'https://img.usecurling.com/ppl/medium?gender=female&seed=4',
  },
  {
    name: 'Dra. Daniela Emerick',
    specialty: 'Cardiologia',
    image: 'https://img.usecurling.com/ppl/medium?gender=female&seed=5',
  },
  {
    name: 'Dr. Edney Gomes',
    specialty: 'Neurologia adulta e pediátrica',
    image: drEdneyImg,
  },
]

export function MedicalTeamSection() {
  return (
    <section id="corpo-clinico" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Corpo Clínico</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground text-lg">
              Conheça nossa equipe de especialistas altamente qualificados e dedicados à sua saúde e
              bem-estar.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((doctor, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="h-full border-primary/10 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-card">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    {doctor.image ? (
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        <User size={64} className="opacity-20" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 text-center border-t-4 border-secondary flex-1 flex flex-col justify-center bg-card z-10 relative shadow-sm">
                    <h3 className="text-lg font-bold text-primary mb-2 leading-tight">
                      {doctor.name}
                    </h3>
                    <p className="text-sm font-semibold text-secondary">{doctor.specialty}</p>
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

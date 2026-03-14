import { Card, CardContent } from '@/components/ui/card'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Button } from '@/components/ui/button'
import { CalendarDays } from 'lucide-react'
import drJoseGuilherme from '@/assets/dr-jose-guilherme-509d0.jpeg'

const medicalTeam = [
  {
    id: 'dr-gustavo-teixeira',
    name: 'Dr. Gustavo Teixeira Gomes',
    specialty: 'Ultrassonografia, Angiologia e Geriatria',
    image: 'https://img.usecurling.com/ppl/large?gender=male&seed=42',
    description:
      'Profissional dedicado ao diagnóstico preciso por imagem e cuidado integral com foco no bem-estar e na longevidade.',
  },
  {
    id: 'dr-jose-guilherme',
    name: 'Dr. José Guilherme Gonçalves',
    specialty: 'Ortopedia e Traumatologia',
    image: drJoseGuilherme,
    description:
      'Especialista no diagnóstico e tratamento de lesões e doenças do sistema musculoesquelético.',
  },
  {
    id: 'dra-helena-costa',
    name: 'Dra. Helena Costa',
    specialty: 'Clínica Geral',
    image: 'https://img.usecurling.com/ppl/large?gender=female&seed=12',
    description:
      'Atendimento humanizado com foco na prevenção e cuidado integral da saúde do paciente.',
  },
  {
    id: 'dra-beatriz-alves',
    name: 'Dra. Beatriz Alves',
    specialty: 'Pediatria',
    image: 'https://img.usecurling.com/ppl/large?gender=female&seed=28',
    description: 'Cuidado especializado e carinhoso para o desenvolvimento saudável das crianças.',
  },
]

export function MedicalTeamSection() {
  return (
    <section id="corpo-clinico" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ultra-blue mb-4">
              Nosso Corpo Clínico
            </h2>
            <div className="w-24 h-1.5 bg-ultra-gold mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-600 text-lg">
              Conheça nossa equipe de especialistas altamente qualificados, prontos para oferecer o
              melhor atendimento para a sua saúde com excelência e dedicação.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {medicalTeam.map((doctor, index) => (
            <ScrollReveal key={doctor.id} delay={index * 100}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group h-full bg-white flex flex-col">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="object-cover w-full h-full object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ultra-blue/90 via-ultra-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <Button
                      className="w-full bg-ultra-gold hover:bg-ultra-goldDark text-ultra-blue font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100 delay-100"
                      onClick={() =>
                        document
                          .getElementById('agendamento')
                          ?.scrollIntoView({ behavior: 'smooth' })
                      }
                    >
                      <CalendarDays className="w-4 h-4 mr-2" />
                      Agendar Consulta
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                  <h3 className="text-xl font-bold text-ultra-blue mb-2">{doctor.name}</h3>
                  <p className="text-ultra-goldDark font-semibold mb-4">{doctor.specialty}</p>
                  <p className="text-slate-500 text-sm mt-auto line-clamp-3">
                    {doctor.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

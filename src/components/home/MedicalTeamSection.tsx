import { Card, CardContent } from '@/components/ui/card'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Button } from '@/components/ui/button'
import { CalendarDays } from 'lucide-react'
import drJoseGuilherme from '@/assets/dr-jose-guilherme-509d0.jpeg'

const medicalTeam = [
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
    id: 'dr-marcos-silva',
    name: 'Dr. Marcos Silva',
    specialty: 'Cardiologia',
    image: 'https://img.usecurling.com/ppl/large?gender=male&seed=45',
    description:
      'Dedicação completa à saúde do seu coração, com avaliações precisas e acompanhamento contínuo.',
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
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Nosso Corpo Clínico
            </h2>
            <div className="w-24 h-1.5 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <Button
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-950 font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100 delay-100"
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
                  <h3 className="text-xl font-bold text-blue-950 mb-2">{doctor.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-4">{doctor.specialty}</p>
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

import { Card, CardContent } from '@/components/ui/card'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import drGustavoImg from '@/assets/whatsapp-image-2026-01-19-at-08.28.50-3-e13c1.jpeg'

const doctors = [
  {
    name: 'Dr. Gustavo Teixeira Gomes',
    specialties: 'Angiologia, Ultrassonografia, Geriatria',
    image: drGustavoImg,
  },
  {
    name: 'Dr. José Guilherme Gonçalves',
    specialties: 'Ortopedia e Traumatologia',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=42',
  },
  {
    name: 'Dr. Augusto Brinati',
    specialties: 'Anestesiologia',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=33',
  },
  {
    name: 'Dr. Sérgio Paulo Motta',
    specialties: 'Oftalmologia',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=45',
  },
  {
    name: 'Dr. Rodrigo Bertani',
    specialties: 'Urologia',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=55',
  },
  {
    name: 'Dra. Marley Rodrigues',
    specialties: 'Ginecologia e Obstetrícia',
    image: 'https://img.usecurling.com/ppl/medium?gender=female&seed=12',
  },
  {
    name: 'Dra. Daniela Emerick',
    specialties: 'Cardiologia',
    image: 'https://img.usecurling.com/ppl/medium?gender=female&seed=24',
  },
  {
    name: 'Dr. Edney Gomes',
    specialties: 'Neurologia adulta e pediátrica',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=68',
  },
]

export function MedicalTeamSection() {
  return (
    <section id="corpo-clinico" className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4 tracking-tight">
              Corpo Clínico
            </h2>
            <div className="h-1.5 w-24 bg-[#D4AF37] mx-auto mb-6 rounded-full" />
            <p className="text-slate-600 text-lg">
              Nossa equipe é formada por especialistas altamente qualificados, comprometidos em
              oferecer um atendimento de excelência e cuidado humanizado.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {doctors.map((doctor, index) => (
            <ScrollReveal key={index} animation="slide-up" delay={index * 100}>
              <Card className="overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-300 bg-white group h-full flex flex-col rounded-xl">
                <div className="aspect-[3/4] overflow-hidden relative bg-slate-200">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-[#003366]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <p className="text-white text-sm font-medium leading-relaxed">
                      Especialista com ampla experiência no cuidado focado na saúde e bem-estar do
                      paciente.
                    </p>
                  </div>
                </div>

                <CardContent className="p-6 text-center flex-grow flex flex-col justify-center bg-white z-10 relative">
                  <h3 className="text-lg font-bold text-[#003366] mb-2 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                    {doctor.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider line-clamp-2">
                    {doctor.specialties}
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

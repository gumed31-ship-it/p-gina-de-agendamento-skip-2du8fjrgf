import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Card } from '@/components/ui/card'
import drGustavoImg from '@/assets/whatsapp-image-2026-01-19-at-08.28.50-1-df56a.jpeg'

const team = [
  {
    name: 'Dr. Gustavo Teixeira Gomes',
    role: 'Diretor Clínico & Médico Ultrassonografista',
    specialties: 'Angiologia, Ultrassonografia, Geriatria',
    image: drGustavoImg,
    description:
      'Especialista em diagnóstico por imagem, dedicado a oferecer exames de excelência com precisão e atendimento humanizado.',
  },
]

export function MedicalTeamSection() {
  return (
    <section id="equipe" className="py-20 md:py-32 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">
              Corpo Clínico
            </h2>
            <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600">
              Contamos com profissionais altamente capacitados para oferecer o melhor em diagnóstico
              por imagem, unindo tecnologia de ponta e excelência no atendimento.
            </p>
          </ScrollReveal>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((doctor, index) => (
            <div key={index} className="w-full sm:max-w-sm">
              <ScrollReveal>
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 group bg-white h-full">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="object-cover w-full h-full object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002855] via-[#002855]/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform sm:translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-bold mb-1 text-white">{doctor.name}</h3>
                      <p className="text-[#D4AF37] font-semibold mb-1">{doctor.role}</p>

                      {doctor.specialties && (
                        <p className="text-[#D4AF37]/90 text-sm font-medium mb-3">
                          {doctor.specialties}
                        </p>
                      )}

                      <p className="text-white/90 text-sm opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                        {doctor.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

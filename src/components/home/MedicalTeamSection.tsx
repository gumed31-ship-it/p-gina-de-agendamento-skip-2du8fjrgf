import { Card, CardContent } from '@/components/ui/card'
import { Stethoscope } from 'lucide-react'

const doctors = [
  {
    name: 'Dr. Gustavo Teixeira Gomes',
    specialty: 'Angiologia, Ultrassonografia, Geriatria',
  },
  {
    name: 'Dr. José Guilherme Gonçalves',
    specialty: 'Ortopedia e Traumatologia',
  },
  {
    name: 'Dr. Augusto Brinati',
    specialty: 'Anestesiologia',
  },
  {
    name: 'Dr. Sérgio Paulo Motta',
    specialty: 'Oftalmologia',
  },
  {
    name: 'Dr. Rodrigo Bertani',
    specialty: 'Urologia',
  },
  {
    name: 'Dra. Marley Rodrigues',
    specialty: 'Ginecologia e Obstetrícia',
  },
  {
    name: 'Dra. Daniela Emerick',
    specialty: 'Cardiologia',
  },
  {
    name: 'Dr. Edney Gomes',
    specialty: 'Neurologia adulta e pediátrica',
  },
]

export function MedicalTeamSection() {
  return (
    <section className="py-24 bg-slate-50" id="corpo-clinico">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ultra-blue mb-4 tracking-tight">
            Nosso Corpo Clínico
          </h2>
          <div className="w-20 h-1.5 bg-ultra-gold mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600">
            Conheça nossa equipe de especialistas altamente qualificados, dedicados a oferecer o
            melhor atendimento para sua saúde e bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-ultra-gold/50 transition-all duration-300 bg-white group flex flex-col h-full rounded-2xl relative"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-ultra-blue to-ultra-gold opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

              <CardContent className="p-8 text-center flex-grow flex flex-col justify-center items-center h-full">
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-ultra-gold/10 transition-all duration-500 shrink-0 border border-slate-100 group-hover:border-ultra-gold/20">
                  <Stethoscope className="h-8 w-8 text-ultra-blue group-hover:text-ultra-gold transition-colors duration-500" />
                </div>

                <h3 className="text-xl font-bold text-ultra-blue mb-3 leading-tight font-serif">
                  {doctor.name}
                </h3>

                {/* Divider */}
                <div className="w-12 h-px bg-slate-200 mx-auto mb-4 group-hover:bg-ultra-gold/50 transition-colors duration-300"></div>

                <p className="text-ultra-gold font-medium text-sm leading-relaxed uppercase tracking-wide">
                  {doctor.specialty}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

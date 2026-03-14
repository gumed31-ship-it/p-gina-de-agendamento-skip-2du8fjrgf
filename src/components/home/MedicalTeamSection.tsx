import { Card, CardContent, CardHeader } from '@/components/ui/card'
import imgRodrigo from '@/assets/whatsapp-image-2026-03-14-at-17.06.13-155d0.jpeg'
import imgMarley from '@/assets/whatsapp-image-2026-03-14-at-17.07.55-270ce.jpeg'
import imgDaniela from '@/assets/whatsapp-image-2026-03-14-at-17.07.33-75023.jpeg'

const doctors = [
  {
    name: 'Dr. Gustavo Teixeira Gomes',
    specialty: 'Angiologia, Ultrassonografia, Geriatria',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=gustavo',
  },
  {
    name: 'Dr. José Guilherme Gonçalves',
    specialty: 'Ortopedia e Traumatologia',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=jose',
  },
  {
    name: 'Dr. Augusto Brinati',
    specialty: 'Anestesiologia',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=augusto',
  },
  {
    name: 'Dr. Sérgio Paulo Motta',
    specialty: 'Oftalmologia',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=sergio',
  },
  {
    name: 'Dr. Rodrigo Bertani',
    specialty: 'Urologia',
    image: imgRodrigo,
  },
  {
    name: 'Dra. Marley Rodrigues',
    specialty: 'Ginecologia e Obstetrícia',
    image: imgMarley,
  },
  {
    name: 'Dra. Daniela Emerick',
    specialty: 'Cardiologia',
    image: imgDaniela,
  },
  {
    name: 'Dr. Edney Gomes',
    specialty: 'Neurologia adulta e pediátrica',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=edney',
  },
]

export function MedicalTeamSection() {
  return (
    <section className="py-24 bg-slate-50" id="corpo-clinico">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 tracking-tight">
            Nosso Corpo Clínico
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600">
            Conheça nossa equipe de especialistas altamente qualificados, dedicados a oferecer o
            melhor atendimento para sua saúde e bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white group flex flex-col h-full rounded-2xl"
            >
              <CardHeader className="pt-8 pb-0 px-6 flex items-center justify-center relative border-b-0">
                {/* Blue top accent background */}
                <div className="absolute top-0 left-0 w-full h-28 bg-blue-900/5 rounded-t-2xl z-0 transition-colors duration-300 group-hover:bg-blue-900/10"></div>

                {/* Avatar Container with Gold Accent */}
                <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-white shadow-md z-10 bg-slate-100 ring-2 ring-amber-500/20 group-hover:ring-amber-500/50 transition-all duration-300">
                  <img
                    src={doctor.image}
                    alt={`Foto de ${doctor.name}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </CardHeader>

              <CardContent className="p-6 pt-6 text-center flex-grow flex flex-col justify-start z-10 bg-white">
                <h3 className="text-xl font-bold text-blue-900 mb-2 leading-tight">
                  {doctor.name}
                </h3>
                <p className="text-amber-600 font-medium text-sm px-2">{doctor.specialty}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { ScrollReveal } from '@/components/ui/scroll-reveal'

import imgMain from '@/assets/usphtop-ed46b.jfif'
import imgPros from '@/assets/usph3-490a3.jfif'
import imgDetail from '@/assets/usph5-26c1b.jfif'

const infrastructureImages = [
  {
    src: imgMain,
    alt: 'Philips EPIQ Elite - Redefining performance',
    title: 'Philips EPIQ Elite',
    description:
      'Tecnologia de ponta para diagnósticos com qualidade excepcional e alta precisão clínica.',
    className: 'md:col-span-2 md:row-span-2 h-[350px] md:h-[600px]',
  },
  {
    src: imgPros,
    alt: 'Profissionais e equipamento de ultrassom',
    title: 'Equipe Especializada',
    description:
      'Profissionais altamente capacitados operando o que há de melhor em tecnologia a favor da sua saúde.',
    className: 'col-span-1 h-[300px] md:h-auto',
  },
  {
    src: imgDetail,
    alt: 'Detalhe da marca Elite no equipamento',
    title: 'Precisão Elite',
    description:
      'Foco nos mínimos detalhes para garantir os resultados mais confiáveis em cada exame.',
    className: 'col-span-1 h-[300px] md:h-auto',
  },
]

export function InfrastructureSection() {
  return (
    <section id="tecnologia" className="py-24 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Tecnologia e <span className="text-amber-500">Equipamentos</span>
            </h2>
            <p className="text-lg text-slate-600">
              Investimos em tecnologia de ponta, como o Philips EPIQ Elite, para oferecer imagens de
              altíssima resolução, garantindo diagnósticos precisos e total segurança para nossos
              pacientes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {infrastructureImages.map((image, index) => (
            <ScrollReveal
              key={index}
              delay={index * 150}
              className={`group relative overflow-hidden rounded-2xl shadow-lg ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover object-center w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 transform transition-transform duration-500 md:translate-y-4 group-hover:translate-y-0">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                  {image.title}
                </h3>
                <p className="text-slate-200 text-sm sm:text-base opacity-100 md:opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {image.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

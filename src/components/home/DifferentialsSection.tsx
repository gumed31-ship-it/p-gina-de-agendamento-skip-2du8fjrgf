import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Microscope, Users, Zap } from 'lucide-react'

export function DifferentialsSection() {
  const diffs = [
    {
      title: 'Tecnologia Avançada',
      desc: 'Investimos continuamente nos melhores equipamentos do mercado para garantir imagens de alta resolução e diagnósticos infalíveis.',
      icon: Microscope,
    },
    {
      title: 'Atendimento Humanizado',
      desc: 'Aqui você não é um número. Nossa equipe é treinada para oferecer um acolhimento caloroso, escuta ativa e respeito total ao paciente.',
      icon: Users,
    },
    {
      title: 'Resultados Rápidos',
      desc: 'Sabemos que a ansiedade por resultados é grande. Otimizamos nossos processos para entregar seus laudos no menor tempo possível.',
      icon: Zap,
    },
  ]

  return (
    <section className="py-20 bg-ultra-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Por que escolher a UltraCenter?
          </h2>
          <div className="w-24 h-1 bg-ultra-gold mx-auto rounded-full" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {diffs.map((item, idx) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={idx} delay={idx * 150} className="text-center group">
                <div className="mx-auto w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-ultra-gold transition-colors duration-300">
                  <Icon className="h-10 w-10 text-ultra-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold mb-4 font-serif">{item.title}</h4>
                <p className="text-slate-300 leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

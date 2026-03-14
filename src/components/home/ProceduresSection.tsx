import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight, Target, Activity, Stethoscope } from 'lucide-react'

const PROCEDURES = [
  {
    id: '1',
    name: 'Biópsia de Próstata guiada por ultrassonografia',
    desc: 'Procedimento minimamente invasivo que utiliza imagens de ultrassom em tempo real para garantir a coleta precisa e segura de amostras da próstata.',
    icon: Target,
  },
  {
    id: '2',
    name: 'Biópsia de Mama guiada por ultrassonografia',
    desc: 'Método altamente preciso e confortável para a paciente, guiado por ultrassom, fundamental no diagnóstico assertivo de alterações mamárias.',
    icon: Activity,
  },
  {
    id: '3',
    name: 'Biópsia de Tireóide guiada por ultrassonografia',
    desc: 'Punção aspirativa guiada por ultrassom para avaliação detalhada de nódulos tireoidianos, proporcionando resultados confiáveis com máxima segurança.',
    icon: Stethoscope,
  },
]

export function ProceduresSection() {
  return (
    <section id="procedimentos" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-ultra-gold font-semibold uppercase tracking-wider mb-2 text-sm">
            Procedimentos
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-ultra-blue mb-4">
            Biópsias Guiadas por Ultrassom
          </h3>
          <p className="text-slate-600 text-lg">
            Realizamos procedimentos diagnósticos com o auxílio de ultrassonografia de alta
            resolução, garantindo a máxima segurança, conforto e precisão.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROCEDURES.map((proc, idx) => {
            const Icon = proc.icon
            return (
              <ScrollReveal key={proc.id} delay={idx * 100}>
                <Card className="group border border-slate-200 hover:border-ultra-gold/30 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden bg-white h-full">
                  <CardContent className="p-8 flex flex-col items-start h-full">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-ultra-gold transition-all duration-500">
                      <Icon className="h-7 w-7 text-ultra-blue group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h4 className="text-xl font-bold text-ultra-blue mb-3 font-serif leading-tight">
                      {proc.name}
                    </h4>
                    <p className="text-slate-600 mb-6 flex-grow">{proc.desc}</p>
                    <a
                      href="#agendamento"
                      className="inline-flex items-center text-sm font-semibold text-ultra-gold hover:text-ultra-blue transition-colors mt-auto"
                    >
                      Agendar <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </CardContent>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

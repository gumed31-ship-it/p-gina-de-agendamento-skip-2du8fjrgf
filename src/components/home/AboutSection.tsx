import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutSection() {
  const points = [
    'Mais de 15 anos de tradição e confiança',
    'Equipe multidisciplinar qualificada',
    'Equipamentos de última geração',
    'Fácil acesso e estacionamento no local',
  ]

  return (
    <section id="sobre" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="relative">
            <div className="absolute -inset-4 bg-ultra-gold/10 rounded-[2rem] transform -rotate-3" />
            <img
              src="https://img.usecurling.com/p/800/800?q=doctors%20team"
              alt="Equipe UltraCenter"
              className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-square md:aspect-[4/3] lg:aspect-square"
            />

            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-float hidden md:flex">
              <div className="bg-ultra-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                15+
              </div>
              <div>
                <p className="font-bold text-ultra-blue leading-tight">Anos de</p>
                <p className="text-sm text-slate-500">Experiência</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h2 className="text-ultra-gold font-semibold uppercase tracking-wider mb-2 text-sm">
              Sobre a UltraCenter
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-ultra-blue mb-6">
              Nossa missão é cuidar da sua saúde com excelência.
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Fundada em Minas Gerais, a UltraCenter nasceu do desejo de oferecer um padrão superior
              em atendimento médico e diagnóstico por imagem. Acreditamos que o diagnóstico preciso
              aliado ao atendimento humano transforma vidas.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Nosso compromisso é proporcionar segurança, agilidade e conforto em todas as etapas do
              seu atendimento, desde o agendamento até a entrega dos resultados.
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-ultra-gold flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="btn-gold rounded-full px-8 h-12">
              <a href="#equipe">Conheça Nossa Equipe</a>
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

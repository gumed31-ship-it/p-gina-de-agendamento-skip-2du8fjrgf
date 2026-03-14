import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { CheckCircle2 } from 'lucide-react'

const EXAMS_LIST = [
  'Ultrassonografia Geral e Vascular com Doppler Colorido',
  'Obstétrico Morfológico com 4D e 8D',
  'Elastografia Hepática',
  'Quantificação de Gordura no fígado com IHR',
  'Eletrocardiograma',
  'Bioimpedância',
  'Eletroneuromiografia',
  'Risco Cirúrgico e Anestésico',
  'Endoscopia Digestiva',
  'Colonoscopia',
]

export function ExamsSection() {
  return (
    <section id="exames" className="py-24 bg-ultra-blue text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full bg-ultra-gold blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 rounded-full bg-ultra-gold blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-ultra-gold font-semibold uppercase tracking-wider mb-2 text-sm">
            Diagnóstico Completo
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Exames de Imagem e Procedimentos
          </h3>
          <p className="text-slate-300 text-lg">
            Nossa estrutura conta com tecnologia de ponta para oferecer a você um diagnóstico
            preciso, rápido e seguro em uma ampla variedade de procedimentos médicos.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {EXAMS_LIST.map((exam, idx) => (
            <ScrollReveal key={idx} delay={idx * 50}>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-ultra-gold/50 hover:bg-white/10 transition-all duration-300 h-full group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ultra-gold/20 flex items-center justify-center group-hover:bg-ultra-gold text-ultra-gold group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <p className="font-medium text-white text-base leading-snug flex-1">{exam}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

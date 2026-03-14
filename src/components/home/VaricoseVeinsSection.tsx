import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Button } from '@/components/ui/button'
import { MessageCircle, CheckCircle2, Sparkles } from 'lucide-react'

export function VaricoseVeinsSection() {
  const benefits = [
    'Procedimento não cirúrgico',
    'Minimamente invasivo',
    'Rápida recuperação',
    'Excelentes resultados estéticos',
  ]

  return (
    <section id="tratamento-varizes" className="py-24 bg-ultra-blue relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-ultra-gold/5 skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-ultra-gold/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ultra-gold/10 border border-ultra-gold/30 text-ultra-gold text-sm font-semibold tracking-wide uppercase mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <Sparkles className="w-4 h-4" />
              Tratamento Premium
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Tratamento de Varizes <br />
              <span className="text-ultra-gold">com Espuma</span>
            </h2>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Livre-se das varizes com um procedimento moderno, seguro e sem necessidade de
              cirurgia. A escleroterapia com espuma densa é uma alternativa minimamente invasiva que
              oferece excelentes resultados, permitindo uma rápida recuperação para você voltar à
              sua rotina com pernas mais saudáveis e bonitas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10"
                >
                  <CheckCircle2 className="h-5 w-5 text-ultra-gold flex-shrink-0" />
                  <span className="text-slate-200 font-medium text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="btn-gold rounded-full text-base px-8 h-14 text-ultra-blue hover:text-ultra-blue flex items-center justify-center gap-2 w-full sm:w-auto shadow-gold-lg transition-transform hover:-translate-y-1"
            >
              <a href="https://wa.me/5533991488020" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Saber mais no WhatsApp
              </a>
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={200} className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-4 bg-gradient-to-tr from-ultra-gold/30 to-transparent rounded-[2rem] transform rotate-3" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-ultra-gold/20 aspect-square md:aspect-[4/3] lg:aspect-square group bg-ultra-blueLight">
              <img
                src="https://img.usecurling.com/p/800/800?q=healthy%20legs%20medical%20clinic&color=blue"
                alt="Tratamento de Varizes com Espuma"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ultra-blue via-ultra-blue/20 to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                <p className="text-white font-medium text-center italic">
                  "Pernas lindas e saudáveis sem internação ou repouso prolongado."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

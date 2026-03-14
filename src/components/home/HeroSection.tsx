import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1920/1080?q=modern%20clinic%20interior&color=blue"
          alt="Clínica Moderna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ultra-blue/80 bg-gradient-to-r from-ultra-blue to-ultra-blue/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-20">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-ultra-gold/20 text-ultra-gold border border-ultra-gold/30 text-sm font-semibold mb-6 tracking-wide uppercase">
            Centro Médico de Excelência
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Excelência e Cuidado <br />
            <span className="text-ultra-gold">com a sua Saúde.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
            Equipe médica altamente especializada e tecnologia de ponta para garantir diagnósticos
            precisos e o seu bem-estar completo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="btn-gold rounded-full text-base px-8 h-14">
              <a href="#agendamento">Agendar Consulta</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full text-base px-8 h-14 border-white/30 text-white hover:bg-white hover:text-ultra-blue bg-transparent backdrop-blur-sm transition-all duration-300"
            >
              <a href="#especialidades" className="flex items-center gap-2">
                Ver Especialidades <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

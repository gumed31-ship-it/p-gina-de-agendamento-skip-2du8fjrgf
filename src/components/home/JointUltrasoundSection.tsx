import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Card, CardContent } from '@/components/ui/card'
import { Activity } from 'lucide-react'

import img1 from '@/assets/24531620250917_elcis-lopes-s_20250917170129485-5d36b.jpg'
import img2 from '@/assets/25131620250917_erica-o-m-teixeira_20250917161940582-f658e.jpg'
import img3 from '@/assets/25131620250917_erica-o-m-teixeira_20250917161628303-cd873.jpg'

export function JointUltrasoundSection() {
  return (
    <section
      id="ultrassonografia-articulacoes"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Background accents matching Dark Blue & Gold theme */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 mb-6 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
            <Activity className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wider uppercase">
              Inovação e Precisão
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
            Ultrassonografia de <span className="text-amber-500">Articulações</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto">
            Realizamos diagnósticos ortopédicos avançados{' '}
            <span className="text-white font-semibold">
              com qualidade de Ressonância Magnética em imagens de altíssima definição
            </span>
            .
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <ScrollReveal animation="slide-up" delay={0}>
            <Card className="h-full bg-slate-900/60 border-slate-800/80 overflow-hidden group hover:border-amber-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)]">
              <CardContent className="p-3 h-full flex flex-col">
                <div className="overflow-hidden rounded-lg flex-1 relative bg-black/50">
                  <img
                    src={img1}
                    alt="Ultrassonografia de Articulação 1"
                    className="w-full h-full min-h-[250px] object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none"></div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={150}>
            <Card className="h-full bg-slate-900/60 border-slate-800/80 overflow-hidden group hover:border-amber-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)]">
              <CardContent className="p-3 h-full flex flex-col">
                <div className="overflow-hidden rounded-lg flex-1 relative bg-black/50">
                  <img
                    src={img2}
                    alt="Ultrassonografia de Articulação 2"
                    className="w-full h-full min-h-[250px] object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none"></div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={300}>
            <Card className="h-full bg-slate-900/60 border-slate-800/80 overflow-hidden group hover:border-amber-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)]">
              <CardContent className="p-3 h-full flex flex-col">
                <div className="overflow-hidden rounded-lg flex-1 relative bg-black/50">
                  <img
                    src={img3}
                    alt="Ultrassonografia de Articulação 3"
                    className="w-full h-full min-h-[250px] object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none"></div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

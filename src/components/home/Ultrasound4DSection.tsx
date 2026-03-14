import { Card, CardContent } from '@/components/ui/card'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

import img1 from '@/assets/08150920250917_daiane-g-vieira_20250917092239286-3906c.jpg'
import img2 from '@/assets/51310920250917_sthefane-da-silva-neves_20250917094008363-3eb4e.jpg'

export function Ultrasound4DSection() {
  return (
    <section
      className="bg-blue-950 py-16 md:py-24 relative overflow-hidden"
      id="ultrassonografia-4d"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
              Ultrassonografia Obstétrica 4D
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              Acompanhe o desenvolvimento do seu bebê com imagens de alta definição e realismo
              impressionante, proporcionando momentos inesquecíveis para toda a família.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ScrollReveal animation="slide-up" delay={100}>
            <Card className="bg-blue-900/50 border-amber-500/30 overflow-hidden group hover:border-amber-400 transition-colors duration-300">
              <CardContent className="p-2">
                <div className="relative overflow-hidden rounded-sm aspect-video bg-black flex items-center justify-center">
                  <img
                    src={img1}
                    alt="Ultrassonografia Obstétrica 4D - Saco Gestacional e Embrião"
                    className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-amber-500/20 pointer-events-none"></div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={200}>
            <Card className="bg-blue-900/50 border-amber-500/30 overflow-hidden group hover:border-amber-400 transition-colors duration-300">
              <CardContent className="p-2">
                <div className="relative overflow-hidden rounded-sm aspect-video bg-black flex items-center justify-center">
                  <img
                    src={img2}
                    alt="Ultrassonografia Obstétrica 4D - Detalhes do Embrião"
                    className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-amber-500/20 pointer-events-none"></div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

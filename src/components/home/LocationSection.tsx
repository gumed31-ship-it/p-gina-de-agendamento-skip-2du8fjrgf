import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function LocationSection() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-ultra-gold font-semibold uppercase tracking-wider mb-2 text-sm">
            Localização
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-ultra-blue">
            Fácil Acesso para Você
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ScrollReveal delay={100} className="lg:col-span-1 space-y-6">
            <Card className="border-none shadow-md bg-slate-50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-ultra-gold">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-ultra-blue mb-1">Endereço</h4>
                  <p className="text-slate-600 text-sm">
                    Av. Afonso Pena, 1500 - Centro
                    <br />
                    Belo Horizonte - MG, 30130-003
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-slate-50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-ultra-gold">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-ultra-blue mb-1">Telefone / WhatsApp</h4>
                  <p className="text-slate-600 text-sm">
                    (31) 99999-0000
                    <br />
                    (31) 3222-0000
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-slate-50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-ultra-gold">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-ultra-blue mb-1">E-mail</h4>
                  <p className="text-slate-600 text-sm">ultracentermg@gmail.com</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-slate-50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-ultra-gold">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-ultra-blue mb-1">Horário</h4>
                  <p className="text-slate-600 text-sm">
                    Seg a Sex: 07h às 19h
                    <br />
                    Sábados: 07h às 13h
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal
            delay={200}
            className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto border border-slate-100 relative"
          >
            {/* Using an iframe for Google Maps - Coordinates for Av Afonso Pena, BH */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.8872688099353!2d-43.93721382582855!3d-19.929112238246342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e159ab95c7%3A0xc3c94f5fb2b3b723!2sAv.%20Afonso%20Pena%2C%201500%20-%20Centro%2C%20Belo%20Horizonte%20-%20MG%2C%2030130-005!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Localização UltraCenter"
              className="absolute inset-0"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

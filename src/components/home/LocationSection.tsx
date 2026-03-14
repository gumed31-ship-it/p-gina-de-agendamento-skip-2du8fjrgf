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
                    Rua Luís Pascoal Borges, 219, Centro
                    <br />
                    Mutum, MG, CEP 36955-000
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
                  <p className="text-slate-600 text-sm">(33) 99148-8020</p>
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
            {/* Using an iframe for Google Maps */}
            <iframe
              src="https://maps.google.com/maps?q=Rua%20Lu%C3%ADs%20Pascoal%20Borges,%20219,%20Centro,%20Mutum,%20MG&t=&z=15&ie=UTF8&iwloc=&output=embed"
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

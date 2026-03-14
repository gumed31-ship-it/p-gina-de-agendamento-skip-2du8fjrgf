import { Calendar, Clock, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AppointmentSection() {
  return (
    <section id="agendamento" className="py-24 bg-ultra-blue relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full bg-ultra-gold blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Info Side */}
          <div className="bg-ultra-gold p-8 md:p-12 text-white md:w-2/5 flex flex-col justify-center">
            <h3 className="font-serif font-bold text-3xl mb-4 text-ultra-blue">
              Agende sua Consulta
            </h3>
            <p className="text-ultra-blue/80 font-medium mb-8">
              Fale diretamente com nossa equipe e agende seu horário de forma rápida e prática.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-ultra-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-ultra-blue">Retorno Imediato</h4>
                  <p className="text-sm text-ultra-blue/80">Durante horário comercial</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-ultra-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-ultra-blue">Flexibilidade</h4>
                  <p className="text-sm text-ultra-blue/80">Diversos horários disponíveis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Side */}
          <div className="p-8 md:p-12 md:w-3/5 flex flex-col items-center justify-center text-center bg-white">
            <div className="bg-[#25D366]/10 p-5 rounded-full mb-6">
              <MessageCircle className="h-12 w-12 text-[#25D366]" />
            </div>
            <h4 className="text-2xl font-serif font-bold text-ultra-blue mb-4">
              Agendamento via WhatsApp
            </h4>
            <p className="text-slate-600 mb-8 max-w-sm mx-auto">
              Clique no botão abaixo para iniciar uma conversa com nossa central de atendimento no
              WhatsApp.
            </p>
            <Button
              asChild
              className="w-full sm:w-auto btn-gold h-14 px-8 text-lg rounded-full flex items-center justify-center gap-2 text-ultra-blue hover:text-ultra-blue"
            >
              <a href="https://wa.me/5533991488020" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Agende pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

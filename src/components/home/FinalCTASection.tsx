import { Button } from '@/components/ui/button'

export function FinalCTASection() {
  return (
    <section className="bg-ultra-blue py-16 border-t border-ultra-blueLight">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
          Sua saúde merece o padrão <span className="text-ultra-gold">UltraCenter</span>
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
          Não deixe para amanhã os cuidados que você precisa hoje. Nossa equipe está pronta para
          receber você com toda segurança e conforto.
        </p>
        <Button asChild size="lg" className="btn-gold rounded-full px-10 h-14 text-lg">
          <a href="#agendamento">Agende seu horário agora</a>
        </Button>
      </div>
    </section>
  )
}

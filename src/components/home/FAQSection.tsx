import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { FAQS } from '@/lib/data'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQSection() {
  return (
    <section id="duvidas" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-ultra-gold font-semibold uppercase tracking-wider mb-2 text-sm">
            Dúvidas Frequentes
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-ultra-blue">
            Perguntas e Respostas
          </h3>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Accordion
            type="single"
            collapsible
            className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-2 md:p-6"
          >
            {FAQS.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-b-slate-100 last:border-0"
              >
                <AccordionTrigger className="text-left font-semibold text-ultra-blue hover:text-ultra-gold text-lg py-4 px-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 px-4 pb-4 leading-relaxed text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  )
}

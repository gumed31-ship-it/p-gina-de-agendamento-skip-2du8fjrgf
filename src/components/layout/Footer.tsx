import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react'

const LINKS_UTEIS = [
  { id: 'sobre', label: 'Sobre Nós' },
  { id: 'especialidades', label: 'Especialidades' },
  { id: 'agendamento', label: 'Agendar Consulta' },
  { id: 'contato', label: 'Fale Conosco' },
]

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-slate-950 pt-20 pb-8 border-t border-slate-900 text-slate-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          <div className="md:col-span-12 lg:col-span-3 space-y-8">
            <Link to="/" onClick={scrollToTop} className="inline-block group">
              <div className="flex flex-col items-start justify-center transition-transform duration-300 group-hover:scale-105 mb-2">
                <span className="text-2xl md:text-3xl font-serif font-bold text-ultra-gold tracking-widest uppercase leading-none">
                  Ultra Center
                </span>
                <span className="text-[0.7rem] md:text-xs font-sans text-slate-400 tracking-[0.25em] uppercase mt-2 opacity-90">
                  Especialidades Médicas
                </span>
              </div>
            </Link>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Mais de 25 anos de experiência
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Oferecendo atendimento médico humanizado e de excelência. Uma trajetória de
                dedicação integral à sua saúde, aliando tecnologia, conhecimento e empatia.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-2 space-y-6">
            <h3 className="text-white font-semibold text-lg tracking-wide relative inline-block">
              Links Úteis
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-amber-600 rounded-full"></span>
            </h3>
            <ul className="space-y-4 mt-8">
              {LINKS_UTEIS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-600 opacity-0 transition-opacity" />{' '}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2 space-y-6">
            <h3 className="text-white font-semibold text-lg tracking-wide relative inline-block">
              Siga-nos
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-amber-600 rounded-full"></span>
            </h3>
            <div className="space-y-4 mt-8">
              <a
                href="https://www.instagram.com/ultracentermutum"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-amber-500 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                  <Instagram className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">@ultracentermutum</span>
              </a>
              <a
                href="https://www.instagram.com/drgustavotgomes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-amber-500 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                  <Instagram className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">@drgustavotgomes</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-8 lg:col-span-5 space-y-6">
            <h3 className="text-white font-semibold text-lg tracking-wide relative inline-block">
              Informações de Contato
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-600 rounded-full"></span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Endereço</p>
                    <a
                      href="https://maps.google.com/?q=Rua+Luís+Pascoal+Borges,+219,+Centro,+Mutum,+MG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-amber-500 transition-colors text-sm mt-1 leading-relaxed block"
                    >
                      Rua Luis Pascoal Borges, 219, Centro
                      <br />
                      Mutum, MG, CEP 36955-000
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Atendimento</p>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                      Segunda a sexta-feira
                      <br />
                      07:30 às 17:30
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Telefone / WhatsApp</p>
                    <a
                      href="https://wa.me/5533991488020"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-amber-500 transition-colors text-sm mt-1 leading-relaxed block"
                    >
                      (33) 99148-8020
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">E-mail</p>
                    <a
                      href="mailto:ultracentermg@gmail.com"
                      className="text-slate-400 hover:text-amber-500 transition-colors text-sm mt-1 leading-relaxed block"
                    >
                      ultracentermg@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Ultra Center Especialidades Médicas. Todos os direitos
            reservados.
          </p>
          <p className="text-slate-500 text-sm text-center md:text-right">
            Responsável Técnico: Dr. Gustavo Teixeira Gomes - CRM 12345/SP
          </p>
        </div>
      </div>
    </footer>
  )
}

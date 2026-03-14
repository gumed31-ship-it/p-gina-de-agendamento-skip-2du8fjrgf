import { HeartPulse, Instagram, Facebook, Smartphone, MapPin, Mail, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-ultra-blue text-slate-300 pt-16 pb-8 border-t-4 border-ultra-gold">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-ultra-gold p-1.5 rounded-lg">
                <HeartPulse className="h-6 w-6 text-white" />
              </div>
              <span className="font-serif text-2xl font-bold text-white">UltraCenter</span>
            </div>
            <p className="text-sm leading-relaxed">
              Excelência e cuidado com a sua saúde. Referência em diagnósticos e atendimento médico
              humanizado em Minas Gerais.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-ultra-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-ultra-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-ultra-gold transition-colors">
                <Smartphone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 font-serif">Acesso Rápido</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#especialidades" className="hover:text-ultra-gold transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-ultra-gold transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-ultra-gold transition-colors">
                  Corpo Clínico
                </a>
              </li>
              <li>
                <a href="#agendamento" className="hover:text-ultra-gold transition-colors">
                  Agendamento Online
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ultra-gold transition-colors">
                  Portal de Resultados
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 font-serif">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-ultra-gold shrink-0 mt-0.5" />
                <span>
                  Rua Luís Pascoal Borges, 219 - Centro
                  <br />
                  Mutum, MG, 36955-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-ultra-gold shrink-0" />
                <span>(31) 99999-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-ultra-gold shrink-0" />
                <span>ultracentermg@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 font-serif">
              Horário de Funcionamento
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-ultra-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Segunda a Sexta</p>
                  <p>07:00 às 19:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 shrink-0" />
                <div>
                  <p className="text-white">Sábados</p>
                  <p>07:00 às 13:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} UltraCenter. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

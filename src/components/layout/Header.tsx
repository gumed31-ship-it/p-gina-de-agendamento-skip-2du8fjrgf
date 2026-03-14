import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, Calendar, Instagram, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const NAV_ITEMS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'especialidades', label: 'Especialidades' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'contato', label: 'Contato' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-slate-800 shadow-md py-2'
          : 'bg-slate-950 md:bg-slate-950/80 py-4',
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={scrollToTop}
            className="flex-shrink-0 z-50 group"
            aria-label="Página Inicial - Ultra Center"
          >
            <div className="flex flex-col items-start justify-center transition-transform duration-300 group-hover:scale-105 py-1">
              <span className="text-xl md:text-2xl font-serif font-bold text-ultra-gold tracking-widest uppercase leading-none">
                Ultra Center
              </span>
              <span className="text-[0.65rem] md:text-[0.7rem] font-sans text-slate-300 tracking-[0.25em] uppercase mt-1.5 opacity-90">
                Especialidades Médicas
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors"
              >
                {item.label}
              </button>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors flex items-center gap-1.5 focus:outline-none"
                  aria-label="Redes Sociais"
                >
                  <Instagram className="w-4 h-4" />
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-slate-950 border-slate-800 text-slate-300 min-w-[180px]"
              >
                <DropdownMenuItem
                  asChild
                  className="hover:text-amber-500 hover:bg-slate-900 focus:text-amber-500 focus:bg-slate-900 cursor-pointer"
                >
                  <a
                    href="https://www.instagram.com/ultracentermutum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full"
                  >
                    <Instagram className="w-4 h-4" />
                    @ultracentermutum
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="hover:text-amber-500 hover:bg-slate-900 focus:text-amber-500 focus:bg-slate-900 cursor-pointer"
                >
                  <a
                    href="https://www.instagram.com/drgustavotgomes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full"
                  >
                    <Instagram className="w-4 h-4" />
                    @drgustavotgomes
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              onClick={() => handleNavClick('agendamento')}
              className="bg-amber-600 hover:bg-amber-700 text-white gap-2 shadow-lg shadow-amber-900/20"
            >
              <Calendar className="w-4 h-4" />
              Agendar Consulta
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-slate-300 hover:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-slate-950 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out md:hidden',
          mobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none',
        )}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className="text-xl font-medium text-slate-300 hover:text-amber-500 transition-colors"
          >
            {item.label}
          </button>
        ))}

        <div className="flex flex-col items-center gap-4 mt-2">
          <div className="w-12 h-0.5 bg-slate-800 rounded-full mb-2"></div>
          <a
            href="https://www.instagram.com/ultracentermutum"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-base">@ultracentermutum</span>
          </a>
          <a
            href="https://www.instagram.com/drgustavotgomes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-base">@drgustavotgomes</span>
          </a>
        </div>

        <Button
          onClick={() => handleNavClick('agendamento')}
          size="lg"
          className="bg-amber-600 hover:bg-amber-700 text-white mt-4 gap-2"
        >
          <Calendar className="w-5 h-5" />
          Agendar Consulta
        </Button>
      </div>
    </header>
  )
}

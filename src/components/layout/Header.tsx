import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, Calendar } from 'lucide-react'
import logoImg from '@/assets/editedimage_1773515584704-651da.png'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
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
            <img
              src={logoImg}
              alt="Ultra Center - Especialidades Médicas - Dr. Gustavo Teixeira Gomes"
              className="h-10 md:h-14 w-auto object-contain mix-blend-screen transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick('sobre')}
              className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => handleNavClick('especialidades')}
              className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors"
            >
              Especialidades
            </button>
            <button
              onClick={() => handleNavClick('depoimentos')}
              className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => handleNavClick('contato')}
              className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors"
            >
              Contato
            </button>
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
        <button
          onClick={() => handleNavClick('sobre')}
          className="text-xl font-medium text-slate-300 hover:text-amber-500 transition-colors"
        >
          Sobre
        </button>
        <button
          onClick={() => handleNavClick('especialidades')}
          className="text-xl font-medium text-slate-300 hover:text-amber-500 transition-colors"
        >
          Especialidades
        </button>
        <button
          onClick={() => handleNavClick('depoimentos')}
          className="text-xl font-medium text-slate-300 hover:text-amber-500 transition-colors"
        >
          Depoimentos
        </button>
        <button
          onClick={() => handleNavClick('contato')}
          className="text-xl font-medium text-slate-300 hover:text-amber-500 transition-colors"
        >
          Contato
        </button>
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

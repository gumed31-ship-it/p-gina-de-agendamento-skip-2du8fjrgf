import { useState, useEffect } from 'react'
import { Menu, HeartPulse } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { NAVIGATION } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const Logo = () => (
    <div className="flex items-center gap-2">
      <div className="bg-ultra-gold p-1.5 rounded-lg">
        <HeartPulse className="h-6 w-6 text-white" />
      </div>
      <span className="font-serif text-2xl font-bold text-ultra-blue">UltraCenter</span>
    </div>
  )

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'glass-header py-3' : 'bg-transparent py-5',
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#inicio" className="flex-shrink-0">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-ultra-gold transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="btn-gold animate-pulse-gold rounded-full px-6">
            <a href="#agendamento">Agendar Agora</a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-ultra-blue">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col pt-12">
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              <nav className="flex flex-col gap-6 mt-8">
                {NAVIGATION.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-slate-800 hover:text-ultra-gold transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <Button asChild className="btn-gold mt-4 w-full">
                  <a href="#agendamento" onClick={() => setIsOpen(false)}>
                    Agendar Agora
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

import { Outlet } from 'react-router-dom'
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { FloatingWhatsApp } from './layout/FloatingWhatsApp'

export default function Layout() {
  return (
    <main className="flex flex-col min-h-screen bg-ultra-light selection:bg-ultra-gold/30 selection:text-ultra-blue">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}

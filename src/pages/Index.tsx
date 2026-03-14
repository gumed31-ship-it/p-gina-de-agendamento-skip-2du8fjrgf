import { HeroSection } from '@/components/home/HeroSection'
import { AboutSection } from '@/components/home/AboutSection'
import { DifferentialsSection } from '@/components/home/DifferentialsSection'
import { SpecialtiesSection } from '@/components/home/SpecialtiesSection'
import { ExamsSection } from '@/components/home/ExamsSection'
import { Ultrasound4DSection } from '@/components/home/Ultrasound4DSection'
import { InfrastructureSection } from '@/components/home/InfrastructureSection'
import { TeamSection } from '@/components/home/TeamSection'
import { AppointmentSection } from '@/components/home/AppointmentSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { FAQSection } from '@/components/home/FAQSection'
import { LocationSection } from '@/components/home/LocationSection'
import { FinalCTASection } from '@/components/home/FinalCTASection'

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-background">
      <HeroSection />
      <AboutSection />
      <DifferentialsSection />
      <SpecialtiesSection />
      <ExamsSection />
      <Ultrasound4DSection />
      <InfrastructureSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <LocationSection />
      <AppointmentSection />
      <FinalCTASection />
    </main>
  )
}

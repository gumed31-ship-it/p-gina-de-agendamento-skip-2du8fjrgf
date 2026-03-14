import { HeroSection } from '@/components/home/HeroSection'
import { SpecialtiesSection } from '@/components/home/SpecialtiesSection'
import { ExamsSection } from '@/components/home/ExamsSection'
import { AboutSection } from '@/components/home/AboutSection'
import { DifferentialsSection } from '@/components/home/DifferentialsSection'
import { InfrastructureSection } from '@/components/home/InfrastructureSection'
import { TeamSection } from '@/components/home/TeamSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { FAQSection } from '@/components/home/FAQSection'
import { AppointmentSection } from '@/components/home/AppointmentSection'
import { LocationSection } from '@/components/home/LocationSection'
import { FinalCTASection } from '@/components/home/FinalCTASection'

const Index = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <SpecialtiesSection />
      <ExamsSection />
      <AboutSection />
      <DifferentialsSection />
      <InfrastructureSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <AppointmentSection />
      <LocationSection />
      <FinalCTASection />
    </div>
  )
}

export default Index

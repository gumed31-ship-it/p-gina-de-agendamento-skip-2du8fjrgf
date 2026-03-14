import { HeroSection } from '@/components/home/HeroSection'
import { AboutSection } from '@/components/home/AboutSection'
import { DifferentialsSection } from '@/components/home/DifferentialsSection'
import { SpecialtiesSection } from '@/components/home/SpecialtiesSection'
import { ProceduresSection } from '@/components/home/ProceduresSection'
import { ExamsSection } from '@/components/home/ExamsSection'
import { Ultrasound4DSection } from '@/components/home/Ultrasound4DSection'
import { JointUltrasoundSection } from '@/components/home/JointUltrasoundSection'
import { VaricoseVeinsSection } from '@/components/home/VaricoseVeinsSection'
import { InfrastructureSection } from '@/components/home/InfrastructureSection'
import { MedicalTeamSection } from '@/components/home/MedicalTeamSection'
import { FAQSection } from '@/components/home/FAQSection'
import { LocationSection } from '@/components/home/LocationSection'
import { AppointmentSection } from '@/components/home/AppointmentSection'
import { FinalCTASection } from '@/components/home/FinalCTASection'

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <DifferentialsSection />
      <AboutSection />
      <SpecialtiesSection />
      <ProceduresSection />
      <ExamsSection />
      <Ultrasound4DSection />
      <JointUltrasoundSection />
      <VaricoseVeinsSection />
      <InfrastructureSection />
      <MedicalTeamSection />
      <FAQSection />
      <LocationSection />
      <AppointmentSection />
      <FinalCTASection />
    </main>
  )
}

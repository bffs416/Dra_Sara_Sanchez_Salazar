import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { TreatmentCatalog } from '@/components/sections/treatment-catalog';
import { BeforeAfterShowcase } from '@/components/sections/before-after-showcase';
import { PersonalizedRecommendations } from '@/components/sections/personalized-recommendations';
import { MedicalJournal } from '@/components/sections/medical-journal';
import { AppointmentScheduler } from '@/components/sections/appointment-scheduler';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <TreatmentCatalog />
        <BeforeAfterShowcase />
        <PersonalizedRecommendations />
        <MedicalJournal />
        <AppointmentScheduler />
      </main>
      <Footer />
    </div>
  );
}

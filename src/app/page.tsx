import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { TreatmentCatalog } from '@/components/sections/treatment-catalog';
import { BeforeAfterShowcase } from '@/components/sections/before-after-showcase';
import { MedicalJournal } from '@/components/sections/medical-journal';
import { Philosophy } from '@/components/sections/philosophy';
import { ActionPanel } from '@/components/sections/action-panel';


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TreatmentCatalog />
        <BeforeAfterShowcase />
        <MedicalJournal />
        <Philosophy />
        <ActionPanel />
      </main>
      <Footer />
    </>
  );
}

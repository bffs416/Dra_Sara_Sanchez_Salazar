import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { VideoBanner } from '@/components/sections/video-banner';
import { Procedures } from '@/components/sections/procedures';
import { BeforeAfterShowcase } from '@/components/sections/before-after-showcase';
import { MedicalJournal } from '@/components/sections/medical-journal';
import { Testimonials } from '@/components/sections/testimonials';
import { Contact } from '@/components/sections/contact';
import { ActionPanel } from '@/components/sections/action-panel';


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <VideoBanner />
        <Procedures />
        <BeforeAfterShowcase />
        <MedicalJournal />
        <Testimonials />
        <Contact />
        <ActionPanel />
      </main>
      <Footer />
    </>
  );
}

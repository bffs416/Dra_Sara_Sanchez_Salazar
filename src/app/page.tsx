import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { VideoBanner } from '@/components/sections/video-banner';
import { Procedures } from '@/components/sections/procedures';
import { BeforeAfterShowcase } from '@/components/sections/before-after-showcase';
import { Contact } from '@/components/sections/contact';
import { ActionPanel } from '@/components/sections/action-panel';
import { DoctorProfile } from '@/components/sections/doctor-profile';
import { Philosophy } from '@/components/sections/philosophy';
import { ConsultTopics } from '@/components/sections/consult-topics';


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <DoctorProfile />
        <VideoBanner />
        <Procedures />
        <ConsultTopics />
        <BeforeAfterShowcase />
        <Philosophy />
        <Contact />
        <ActionPanel />
      </main>
      <Footer />
    </>
  );
}

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { DoctorProfile } from '@/components/sections/doctor-profile';
import { Philosophy } from '@/components/sections/philosophy';

export default function DraSaraPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-12 md:pt-0">
        <DoctorProfile />
        <Philosophy />
      </main>
      <Footer />
    </>
  );
}

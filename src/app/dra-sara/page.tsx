import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { DoctorProfile } from '@/components/sections/doctor-profile';
import { Philosophy } from '@/components/sections/philosophy';
import Image from 'next/image';
import placeholderData from '@/app/lib/placeholder-images.json';

export default function DraSaraPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50">
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              className="w-full h-full object-cover opacity-20 grayscale brightness-125"
              autoPlay
              muted
              loop
              playsInline
              poster={placeholderData.videoBanner.posterUrl}
            >
              <source src={placeholderData.videoBanner.videoUrl} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50/80 to-slate-50"></div>
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 lg:w-5/12">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-secondary">
                  <Image
                    src={placeholderData.hero.doctorPortrait.src}
                    alt="Dra. Sara Sanchez Salazar"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-7/12">
                <span className="text-accent-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Médica Certificada</span>
                <h1 className="serif-title text-5xl md:text-7xl text-slate-900 leading-tight mb-6">
                  Dra. Sara <br />
                  <span className="text-accent-gold italic font-normal">Sánchez Salazar</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-xl font-serif italic border-l-4 border-accent-gold/20 pl-6 mb-8">
                  "Mi compromiso es brindar resultados auténticos y seguros, respetando siempre la esencia y el proceso natural de cada paciente."
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-5 py-2.5 bg-white border border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 shadow-sm">Medicina Estética</span>
                  <span className="px-5 py-2.5 bg-white border border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 shadow-sm">Revitalización Capilar</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <DoctorProfile />
        <Philosophy />
      </main>
      <Footer />
    </>
  );
}

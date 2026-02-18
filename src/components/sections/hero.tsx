import Image from 'next/image';
import Link from 'next/link';
import placeholderData from '@/app/lib/placeholder-images.json';

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-secondary">
            <Image
              alt="Professional medical portrait of Dr. Sara Sanchez"
              className="grayscale hover:grayscale-0 transition-all duration-700 object-cover"
              src={placeholderData.hero.doctorPortrait.src}
              width={800}
              height={1000}
              data-ai-hint={placeholderData.hero.doctorPortrait.hint}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border max-w-[240px]">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-accent-gold">verified</span>
              <span className="text-xs font-bold uppercase tracking-widest text-accent-gold">Certificada</span>
            </div>
            <p className="text-sm italic font-serif">"La elegancia es la única belleza que nunca se marchita."</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 order-1 md:order-2">
          <div className="space-y-4">
            <span className="text-accent font-bold text-sm tracking-[0.3em] uppercase block">
              Revitalización Capilar · Medicina Estética · Rejuvenecimiento
            </span>
            <h2 className="serif-title text-5xl md:text-6xl font-bold leading-[1.1] text-foreground">
              Tu cabello y tu piel merecen una <span className="text-accent-gold">decisión inteligente.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
              Dra. Sara Sánchez Salazar, experta en <strong>revitalización capilar avanzada</strong> y medicina estética.
              Enfoque médico basado en ciencia para acompañar tu proceso natural de rejuvenecimiento con criterio y seguridad.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/573023674189" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground h-14 px-10 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
              Agendar Cita
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
            <a href="https://wa.me/573023674189" target="_blank" rel="noopener noreferrer" className="border-2 border-primary text-primary h-14 px-10 rounded-lg font-bold text-lg hover:bg-primary/5 transition-all flex items-center justify-center">
              Ver Catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

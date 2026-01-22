import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-secondary">
            <Image 
              alt="Professional medical portrait of Dr. Sara Sanchez" 
              className="grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              fill
              style={{ objectFit: 'cover' }}
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
              Implante Capilar · Resultados Naturales
            </span>
            <h2 className="serif-title text-5xl md:text-6xl font-bold leading-[1.1] text-foreground">
              Recuperar tu cabello es una decisión <span className="text-accent-gold">inteligente.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
              Especialista en implante capilar y medicina estética avanzada. Tratamientos personalizados para
              recuperar densidad capilar y, cuando lo necesitas, complementar con procedimientos faciales para
              armonizar tu imagen con resultados naturales y seguros.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-primary-foreground h-14 px-10 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
              Agendar Cita
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            <button className="border-2 border-primary text-primary h-14 px-10 rounded-lg font-bold text-lg hover:bg-primary/5 transition-all">
              Ver Catálogo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

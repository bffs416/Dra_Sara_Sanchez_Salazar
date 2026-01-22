export function Testimonials() {
  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Testimonios</span>
          <h2 className="serif-title text-4xl text-foreground">Lo que dicen nuestros <span className="text-accent-gold italic">pacientes</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background p-8 rounded-2xl relative">
            <div className="flex text-accent-gold mb-4">
              {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
            </div>
            <p className="text-muted-foreground italic mb-6 leading-relaxed">"El trato de la Dra. Sanchez es excepcional. Mi resultado de implante capilar ha superado todas mis expectativas. La naturalidad es absoluta."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">JD</div>
              <div>
                <h5 className="font-bold text-sm text-foreground">Javier Domínguez</h5>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Implante FUE</span>
              </div>
            </div>
          </div>

          <div className="bg-background p-8 rounded-2xl relative">
            <div className="flex text-accent-gold mb-4">
              {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
            </div>
            <p className="text-muted-foreground italic mb-6 leading-relaxed">"Buscaba un retoque sutil en mis labios y el resultado es increíblemente elegante. Nadie nota que me hice algo, solo me ven mejor."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-gold/10 rounded-full flex items-center justify-center text-accent-gold font-bold">MR</div>
              <div>
                <h5 className="font-bold text-sm text-foreground">María Rodríguez</h5>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Ácido Hialurónico</span>
              </div>
            </div>
          </div>

          <div className="bg-background p-8 rounded-2xl relative">
            <div className="flex text-accent-gold mb-4">
              {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
            </div>
            <p className="text-muted-foreground italic mb-6 leading-relaxed">"La clínica es espectacular y el equipo muy profesional. Me sentí acompañado en todo el proceso de recuperación."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold">AL</div>
              <div>
                <h5 className="font-bold text-sm text-foreground">Antonio López</h5>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Medicina Facial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

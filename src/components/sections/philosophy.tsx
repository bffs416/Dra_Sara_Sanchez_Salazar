export function Philosophy() {
  return (
    <section className="py-24 md:py-32 bg-background" id="philosophy">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-accent-gold font-bold tracking-widest text-xs uppercase mb-4 block">Medical Foundation</span>
            <h2 className="serif-title text-4xl md:text-5xl text-foreground leading-tight mb-8">
              A Clinical Approach <br />to Hair Restoration & Natural Longevity
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              Dr. Sara Sanchez centra su práctica en el implante capilar y la medicina estética, con el objetivo de
              recuperar la densidad del cabello y armonizar el rostro sin cambiar tu identidad.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Our "Prevention-First" philosophy integrates advanced pharmacology and bio-regenerative
              techniques to slow the biological markers of aging before they become structural
              concerns.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-accent-gold mb-4 text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>clinical_notes</span>
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Implante Capilar Basado en Evidencia</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Experta en implante capilar guiando cada plan de tratamiento capilar y facial con criterios científicos.</p>
            </div>
            <div className="p-8 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-accent-gold mb-4 text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>nature_people</span>
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Natural Prevention</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Subtle enhancements that respect your unique anatomical architecture.</p>
            </div>
            <div className="p-8 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-accent-gold mb-4 text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Ethical Standards</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Commitment to clinical integrity and evidence-based aesthetic protocols.</p>
            </div>
            <div className="p-8 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-accent-gold mb-4 text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>science</span>
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Advanced Biologics</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Utilizing the latest regenerative fillers and bio-stimulators.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

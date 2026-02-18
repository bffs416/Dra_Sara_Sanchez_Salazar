export function Philosophy() {
  return (
    <section className="py-24 md:py-32 bg-white" id="philosophy">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <span className="text-accent-gold font-bold tracking-widest text-xs uppercase mb-4 block">Filosofía Profesional</span>
            <h2 className="serif-title text-4xl md:text-5xl text-slate-900 leading-tight mb-8">
              "Revitalizar & Rejuvenecer" <br /><span className="text-accent-gold italic text-3xl">La ciencia detrás de tu mejor versión.</span>
            </h2>
            <div className="space-y-6">
              <p className="text-slate-600 text-lg leading-relaxed">
                Mi enfoque une la <strong>revitalización capilar avanzada</strong> con la medicina estética basada en criterio médico. Buscamos resultados que acompañen el proceso natural del tiempo con seguridad.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-accent-gold pl-6 italic">
                "Envejecer con dignidad, no borrar los años. Menos promesas, más ciencia."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <span className="material-symbols-outlined text-accent-gold mb-4 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>science</span>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Criterio Científico</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Procedimientos respaldados por evidencia médica y protocolizados para tu seguridad.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <span className="material-symbols-outlined text-accent-gold mb-4 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Seguridad Médica</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Cada aplicación se realiza bajo estrictos estándares de higiene y control médico.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <span className="material-symbols-outlined text-accent-gold mb-4 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Naturalidad</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Buscamos resultados que armonicen tu rostro sin alterar tu identidad esencial.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <span className="material-symbols-outlined text-accent-gold mb-4 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Prevención Anti-Edad</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Invertir hoy en salud de la piel es la clave para un envejecimiento saludable.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

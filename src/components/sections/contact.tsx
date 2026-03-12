export function Contact() {
  return (
    <section className="relative overflow-hidden" id="contacto">
      {/* Full-width dark background — extreme to extreme */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#1a1f2e] to-slate-900"></div>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, #C9A96E 0px, #C9A96E 1px, transparent 1px, transparent 60px)`
      }}></div>

      <div className="relative z-10 py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-accent-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Consulta Privada</span>
            <h2 className="serif-title text-4xl md:text-5xl text-white mb-4">
              Inicie su <span className="text-accent-gold italic">Transformación</span>
            </h2>
            <div className="w-24 h-px bg-accent-gold/40 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: CTA + Info */}
            <div className="space-y-8">
              <p className="text-slate-300 text-lg leading-relaxed">
                Escríbenos por WhatsApp para agendar tu consulta personalizada. Respuesta rápida y atención directa de la Dra. Sara Sánchez.
              </p>

              <a
                href="https://wa.me/573023674189?text=Hola%2C%20quiero%20agendar%20una%20cita%20con%20la%20Dra.%20Sara%20S%C3%A1nchez"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#20BD5A] transition-all shadow-lg shadow-[#25D366]/20 hover:scale-[1.02]"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Agendar Cita por WhatsApp
              </a>

              {/* Quick info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-white/[0.04] border border-white/[0.08] p-5 rounded-2xl">
                  <span className="material-symbols-outlined text-accent-gold text-2xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                  <div>
                    <h4 className="font-bold text-sm text-white">Horario</h4>
                    <p className="text-xs text-slate-400">Lun - Vie: 8:00 AM - 6:00 PM<br />Sáb: 8:00 AM - 1:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/[0.04] border border-white/[0.08] p-5 rounded-2xl">
                  <span className="material-symbols-outlined text-accent-gold text-2xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  <div>
                    <h4 className="font-bold text-sm text-white">Contacto Directo</h4>
                    <p className="text-xs text-slate-400">+57 302 367 4189<br />citas@drasarasanchez.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Map + Address */}
            <div className="space-y-6">
              <h3 className="serif-heading text-2xl text-white mb-2">Nuestra Ubicación</h3>
              <div className="rounded-2xl overflow-hidden h-[280px] shadow-2xl border border-white/10 relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d-75.578!3d6.196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429a5!2sCalle+16AA+Sur+%2342-91%2C+El+Poblado%2C+Medell%C3%ADn!5e0!3m2!1ses!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="group-hover:filter-none transition-all duration-700"
                ></iframe>
                <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur px-3 py-1.5 rounded-lg">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-accent-gold">El Poblado, Medellín</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/[0.04] border border-white/[0.08] p-5 rounded-2xl">
                <span className="material-symbols-outlined text-accent-gold text-2xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">Dirección</h4>
                  <p className="text-xs text-slate-400">Calle 16 AA Sur # 42-91<br />Edificio Campestre 16.43, Oficina 210-211<br />Sector Campestre, El Poblado — Medellín</p>
                  <p className="text-[10px] text-slate-500 mt-1 italic">Al lado del edificio de la DIAN, sobre la Av. El Poblado sentido sur-norte.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

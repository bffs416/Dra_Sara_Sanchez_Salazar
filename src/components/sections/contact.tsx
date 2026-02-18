export function Contact() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="contacto">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-gold/5 -skew-x-12 translate-x-1/2"></div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-card p-8 md:p-12 rounded-[2.5rem] shadow-xl border">
            <span className="text-accent-gold font-bold tracking-widest text-xs uppercase mb-4 block">Consulta Privada</span>
            <h2 className="serif-title text-3xl md:text-4xl text-foreground mb-8">
              Inicie su Transformación
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Nombre Completo</label>
                  <input type="text" className="w-full bg-secondary/30 border-0 border-b-2 border-border focus:border-accent-gold focus:ring-0 px-0 py-3 transition-colors text-foreground dark:bg-transparent" placeholder="Ej. Ana García" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Teléfono</label>
                  <input type="tel" className="w-full bg-secondary/30 border-0 border-b-2 border-border focus:border-accent-gold focus:ring-0 px-0 py-3 transition-colors text-foreground dark:bg-transparent" placeholder="+57 302 3674189" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Interés</label>
                  <select className="w-full bg-secondary/30 border-0 border-b-2 border-border focus:border-accent-gold focus:ring-0 px-0 py-3 transition-colors text-foreground dark:bg-transparent">
                    <option>Valoración Capilar</option>
                    <option>Rejuvenecimiento Facial</option>
                    <option>Armonización Corporal</option>
                    <option>Otros</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Mensaje (Opcional)</label>
                  <textarea rows={3} className="w-full bg-secondary/30 border-0 border-b-2 border-border focus:border-accent-gold focus:ring-0 px-0 py-3 transition-colors text-foreground dark:bg-transparent resize-none" placeholder="Cuéntenos sus objetivos..."></textarea>
                </div>
              </div>
              <a href="https://wa.me/573023674189" target="_blank" rel="noopener noreferrer" className="block w-full mt-4">
                <button type="button" className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-primary/90 transition-all flex justify-center items-center gap-2 group">
                  Solicitar Cita
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </a>
            </form>
          </div>

          <div className="space-y-12 md:pt-12">
            <div>
              <h3 className="serif-heading text-2xl text-foreground mb-6">Nuestra Ubicación</h3>
              <div className="rounded-2xl overflow-hidden h-[300px] shadow-lg border relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63466.75932911293!2d-75.59295199999999!3d6.20093845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad09%3A0x42137cfcc7b53b56!2sEl%20Poblado%2C%20Medell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1sen!2sus!4v1715893307772!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="group-hover:filter-none transition-all duration-700"
                ></iframe>
                <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-card-foreground">El Poblado, Medellín</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-accent-gold text-3xl">location_on</span>
                <div>
                  <h4 className="font-bold text-foreground">Dirección</h4>
                  <p className="text-sm text-muted-foreground">El Poblado<br />Medellín, Colombia</p>
                </div>
              </div>
              <div className="space-y-4">
                <span className="material-symbols-outlined text-accent-gold text-3xl">mark_email_read</span>
                <div>
                  <h4 className="font-bold text-foreground">Contacto Directo</h4>
                  <p className="text-sm text-muted-foreground">+57 302 3674189<br />citas@drasarasanchez.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

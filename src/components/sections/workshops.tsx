export function Workshops() {
    return (
        <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden" id="talleres">
            {/* Background accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-gold/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>
            </div>

            <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-accent-gold/10 rounded-full border border-accent-gold/20 mb-8">
                            <span className="material-symbols-outlined text-accent-gold text-lg">school</span>
                            <span className="text-accent-gold font-bold tracking-[0.25em] uppercase text-[10px]">Formación Médica</span>
                        </div>

                        <h2 className="serif-title text-4xl md:text-5xl text-white leading-tight mb-6">
                            Talleres <span className="text-accent-gold italic">Personalizados</span>
                        </h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-8">
                            Dicto talleres personalizados de formación práctica en procedimientos estéticos médicos avanzados. Sesiones teórico-prácticas diseñadas para el gremio médico.
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-accent-gold">check_circle</span>
                                <span className="text-slate-200 font-medium">Ácido Hialurónico — Técnicas de aplicación</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-accent-gold">check_circle</span>
                                <span className="text-slate-200 font-medium">Toxina Botulínica — Protocolos y aplicaciones</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-accent-gold">check_circle</span>
                                <span className="text-slate-200 font-medium">Estimuladores de Colágeno — Manejo y protocolos</span>
                            </div>
                        </div>

                        <div className="bg-accent-gold/10 border border-accent-gold/20 rounded-2xl p-5 inline-flex items-start gap-3">
                            <span className="material-symbols-outlined text-accent-gold mt-0.5">info</span>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                <strong className="text-accent-gold">Exclusivo para profesionales médicos.</strong> Se requiere acreditar formación y práctica médica.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                            <span className="material-symbols-outlined text-accent-gold text-3xl mb-4">groups</span>
                            <h3 className="font-bold text-xl text-white mb-2">Modalidad Personalizada</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">Talleres diseñados según el nivel de experiencia y las necesidades específicas de cada profesional o grupo.</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                            <span className="material-symbols-outlined text-accent-gold text-3xl mb-4">biotech</span>
                            <h3 className="font-bold text-xl text-white mb-2">Práctica Supervisada</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">Sesiones teórico-prácticas con casos reales, supervisión directa y retroalimentación personalizada.</p>
                        </div>
                        <div className="text-center mt-4">
                            <a href="https://wa.me/573023674189?text=Hola%2C%20me%20interesa%20información%20sobre%20los%20talleres%20de%20formación%20médica" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent-gold text-slate-900 font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-2xl hover:bg-accent-gold/90 transition-all hover:scale-105 shadow-lg shadow-accent-gold/20">
                                Solicitar Información
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

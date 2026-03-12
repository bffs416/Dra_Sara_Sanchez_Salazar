export function ConsultTopics() {
    const topics = [
        {
            title: "Manejo de Acné",
            desc: "Diagnóstico y tratamiento integral del acné: desde el acné juvenil hasta el acné del adulto. Protocolos personalizados.",
            icon: "dermatology",
        },
        {
            title: "Manejo de Rosácea y Piel Sensible",
            desc: "Evaluación y tratamiento de la rosácea, enrojecimiento facial y pieles reactivas con protocolos médicos especializados.",
            icon: "healing",
        },
        {
            title: "Manejo de Manchas y Melasma",
            desc: "Diagnóstico del tipo de hiperpigmentación y protocolo despigmentante personalizado para un tono de piel uniforme.",
            icon: "brightness_high",
        },
        {
            title: "Manejo de Alopecia",
            desc: "Evaluación capilar completa, diagnóstico de tipo de alopecia y plan de tratamiento médico para frenar la caída.",
            icon: "psychology",
        },
        {
            title: "Manejo de Aumento de Peso",
            desc: "Valoración médica integral y plan personalizado para el control de peso con enfoque en salud metabólica.",
            icon: "monitor_weight",
        },
    ];

    return (
        <section className="py-24 md:py-32 relative overflow-hidden" id="consultas">
            {/* Full-width dark background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#1a1f2e] to-slate-900"></div>
            {/* Subtle gold texture */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `repeating-linear-gradient(45deg, #C9A96E 0px, #C9A96E 1px, transparent 1px, transparent 60px)`
            }}></div>

            <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-accent-gold/10 rounded-full border border-accent-gold/20 mb-6">
                        <span className="material-symbols-outlined text-accent-gold text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>stethoscope</span>
                        <span className="text-accent-gold font-bold tracking-[0.25em] uppercase text-[10px]">Temas de Consulta</span>
                    </div>
                    <h2 className="serif-title text-4xl md:text-5xl text-white mb-4">
                        Consulta <span className="text-accent-gold italic">Especializada</span>
                    </h2>
                    <div className="w-24 h-px bg-accent-gold/40 rounded-full mx-auto mb-6"></div>
                    <p className="max-w-xl mx-auto text-slate-400 text-lg leading-relaxed">
                        Diagnóstico y tratamiento médico personalizado para cada condición. Atención experta con enfoque integral.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                    {topics.map((topic) => (
                        <a
                            key={topic.title}
                            href={`https://wa.me/573023674189?text=${encodeURIComponent(`Hola, quiero agendar una consulta especializada para: ${topic.title}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-7 hover:bg-white/[0.08] hover:border-accent-gold/25 transition-all duration-400 block overflow-hidden"
                        >
                            {/* Gold accent line on hover */}
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom rounded-r-full"></div>

                            <div className="flex items-start gap-5">
                                {/* Icon: gold, material symbols style matching the rest of the site */}
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors duration-400">
                                    <span className="material-symbols-outlined text-accent-gold text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        {topic.icon}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-serif text-base font-bold text-white mb-2 group-hover:text-accent-gold transition-colors">{topic.title}</h3>
                                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{topic.desc}</p>
                                    <span className="inline-flex items-center gap-1.5 text-accent-gold/70 text-[10px] font-bold uppercase tracking-wider group-hover:text-accent-gold group-hover:gap-2.5 transition-all">
                                        Solicitar consulta
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Virtual & Presencial */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={`https://wa.me/573023674189?text=${encodeURIComponent('Hola, quiero agendar una consulta presencial con la Dra. Sara Sánchez')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] rounded-2xl px-8 py-5 hover:bg-accent-gold/10 hover:border-accent-gold/30 transition-all group"
                    >
                        <span className="material-symbols-outlined text-accent-gold text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                        <div>
                            <span className="block font-bold text-white text-sm group-hover:text-accent-gold transition-colors">Consulta Presencial</span>
                            <span className="text-xs text-slate-400">El Poblado, Medellín</span>
                        </div>
                        <span className="material-symbols-outlined text-slate-500 group-hover:text-accent-gold group-hover:translate-x-1 transition-all ml-2">arrow_forward</span>
                    </a>
                    <a
                        href={`https://wa.me/573023674189?text=${encodeURIComponent('Hola, quiero agendar una consulta virtual con la Dra. Sara Sánchez')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] rounded-2xl px-8 py-5 hover:bg-accent-gold/10 hover:border-accent-gold/30 transition-all group"
                    >
                        <span className="material-symbols-outlined text-accent-gold text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>videocam</span>
                        <div>
                            <span className="block font-bold text-white text-sm group-hover:text-accent-gold transition-colors">Consulta Virtual</span>
                            <span className="text-xs text-slate-400">Desde cualquier lugar</span>
                        </div>
                        <span className="material-symbols-outlined text-slate-500 group-hover:text-accent-gold group-hover:translate-x-1 transition-all ml-2">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

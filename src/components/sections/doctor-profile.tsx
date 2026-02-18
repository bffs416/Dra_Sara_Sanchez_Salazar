import Image from 'next/image';
import placeholderData from '@/app/lib/placeholder-images.json';

const certifications = [
    {
        title: "ACICME (Asociación Científica Colombiana de Medicina Estética)",
        desc: "Certificado de Excelencia Académica durante el XII Curso Superior de Medicina Estética.",
        institution: "ACICME"
    },
    {
        title: "Allergan Medical Institute",
        desc: "Certificaciones en Taller de Fillers JUVÉDER®, Manejo de Complicaciones con Fillers (Básico) y Ácido Hialurónico.",
        institution: "Allergan"
    },
    {
        title: "PBserum Academy",
        desc: "Certificada en PBserum Facial y Corporal (Septiembre 2022).",
        institution: "PBserum"
    },
    {
        title: "Endolaser by Dekalaser",
        desc: "Entrenamiento especializado en tecnología fotónica avanzada, endolifting, lipopapada y lipoescultura.",
        institution: "Dekalaser"
    },
    {
        title: "AMWC & Simposio Internacional",
        desc: "Certificados de Asistencia a congresos mundiales y simposios internacionales de estética.",
        institution: "Congresos"
    }
];

const affiliations = [
    { name: "ACICME", handle: "@acicmecolombia", full: "Asociación Científica Colombiana de Medicina Estética" },
    { name: "SIRF Sociedad", handle: null, full: "Sociedad de Medicina Estética" }
];

export function DoctorProfile() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden" id="perfil">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Visuals & General Info */}
                    <div className="space-y-12">
                        <div className="relative">
                            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-accent-gold/5 rounded-full border border-accent-gold/10 mb-6 group cursor-default">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse"></span>
                                <span className="text-accent-gold font-bold tracking-[0.25em] uppercase text-[9px]">Excelencia Médica</span>
                            </div>

                            <h2 className="serif-title text-5xl md:text-6xl text-slate-900 leading-[1.1] mb-8 relative max-w-md">
                                Dra. <span className="text-slate-900 font-medium">Sara Sánchez</span>
                                <span className="text-accent-gold italic font-normal block mt-1">Salazar</span>
                                <div className="w-12 h-[2px] bg-accent-gold/30 mt-6 rounded-full"></div>
                            </h2>

                            <div className="flex flex-wrap gap-2.5 mb-10">
                                <span className="px-4 py-2 bg-white text-slate-500 border border-slate-100 rounded-xl text-[9px] font-black uppercase tracking-[0.15em] shadow-sm hover:border-accent-gold hover:text-accent-gold transition-all cursor-default">Revitalización Capilar</span>
                                <span className="px-4 py-2 bg-white text-slate-500 border border-slate-100 rounded-xl text-[9px] font-black uppercase tracking-[0.15em] shadow-sm hover:border-accent-gold hover:text-accent-gold transition-all cursor-default">Medicina Estética</span>
                                <span className="px-4 py-2 bg-white text-slate-500 border border-slate-100 rounded-xl text-[9px] font-black uppercase tracking-[0.15em] shadow-sm hover:border-accent-gold hover:text-accent-gold transition-all cursor-default">Armonización</span>
                            </div>

                            <p className="text-slate-600 text-lg leading-relaxed max-w-xl relative z-10 italic font-serif border-l-2 border-accent-gold/10 pl-6">
                                "Mi enfoque une la revitalización capilar avanzada con la medicina estética basada en criterio médico. Buscamos resultados que acompañen el proceso natural del tiempo con seguridad."
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="flex items-center gap-3 text-accent-gold mb-3">
                                    <span className="material-symbols-outlined">location_on</span>
                                    <span className="font-bold text-sm uppercase tracking-wider">Ubicación</span>
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed">
                                    Calle 16 Aa sur # 42-91, Edificio Campestre 16.43, Medellín, Antioquia
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="flex items-center gap-3 text-accent-gold mb-3">
                                    <span className="material-symbols-outlined">group</span>
                                    <span className="font-bold text-sm uppercase tracking-wider">Comunidad</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div>
                                        <span className="block text-xl font-bold text-slate-900">1,974</span>
                                        <span className="text-xs text-slate-500 uppercase tracking-tight">Seguidores</span>
                                    </div>
                                    <div className="w-px h-8 bg-slate-200"></div>
                                    <div>
                                        <span className="block text-xl font-bold text-slate-900">381</span>
                                        <span className="text-xs text-slate-500 uppercase tracking-tight">Publicaciones</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-2xl group">
                            <Image
                                src={placeholderData.doctorProfile.clinicSpace.src}
                                alt="Clinic Space"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8">
                                <p className="text-white font-serif italic text-xl">"Menos promesas, más ciencia."</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Certifications & Experience */}
                    <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-slate-100">
                        <h3 className="serif-title text-3xl text-slate-900 mb-8 border-b border-slate-100 pb-6 uppercase tracking-tight">Certificaciones & Estudios</h3>

                        <div className="space-y-8">
                            {certifications.map((cert, idx) => (
                                <div key={idx} className="group relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-accent-gold before:rounded-full before:z-10 after:content-[''] after:absolute after:left-[2.5px] after:top-4 after:bottom-[-2rem] after:w-px after:bg-slate-100 last:after:hidden">
                                    <h4 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-accent-gold transition-colors">{cert.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{cert.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 pt-10 border-t border-slate-100">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">Afiliaciones Profesionales</h3>
                            <div className="flex flex-wrap gap-6">
                                {affiliations.map((aff, idx) => (
                                    <div key={idx} className="flex items-center gap-4 bg-slate-50 pr-6 py-2 rounded-full border border-slate-100 hover:border-accent-gold transition-colors cursor-default">
                                        <div className="w-10 h-10 bg-white rounded-full border border-slate-100 flex items-center justify-center font-bold text-accent-gold text-xs">
                                            {aff.name.substring(0, 2)}
                                        </div>
                                        <div>
                                            <span className="block font-bold text-slate-800 text-sm">{aff.name}</span>
                                            {aff.handle && <span className="text-[10px] text-slate-400 font-medium">{aff.handle}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 bg-accent-gold/5 p-6 rounded-2xl border border-accent-gold/20">
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-accent-gold">event_available</span>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm mb-1">Próxima Participación</h4>
                                    <p className="text-slate-600 text-xs leading-relaxed">
                                        <strong>AMWC 2025:</strong> 12ª Edición del Congreso Mundial de Medicina Estética (Octubre 2025, Medellín).
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-100">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-6">Línea de Productos Recomendados</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <div className="w-2 h-2 rounded-full bg-accent-gold mt-2 shrink-0"></div>
                                    <div>
                                        <span className="font-bold text-slate-800 text-sm">NOVEXPERT (Cosmética Natural)</span>
                                        <p className="text-xs text-slate-500">Productos seguros para embarazadas, recomendados por dermatólogos.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-2 h-2 rounded-full bg-accent-gold mt-2 shrink-0"></div>
                                    <div>
                                        <span className="font-bold text-slate-800 text-sm">Proteokel</span>
                                        <p className="text-xs text-slate-500">Ampollas anticaída regeneradoras capilares de alta eficacia.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

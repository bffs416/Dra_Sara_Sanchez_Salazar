import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Workshops } from '@/components/sections/workshops';

export default function TalleresPage() {
    return (
        <>
            <Header />
            <main className="flex-1 pt-24">
                {/* Hero */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
                        <span className="text-accent-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">Formación Médica Especializada</span>
                        <h1 className="serif-title text-5xl md:text-6xl text-slate-900 leading-tight mb-6">
                            Talleres <span className="text-accent-gold italic">para Médicos</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-slate-500 leading-relaxed">
                            Sesiones teórico-prácticas diseñadas exclusivamente para profesionales médicos
                            que desean perfeccionar sus técnicas en medicina estética.
                        </p>
                    </div>
                </section>

                {/* Workshops content */}
                <Workshops />

                {/* Additional details */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-6 md:px-12">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                <span className="material-symbols-outlined text-accent-gold text-4xl mb-4">workspace_premium</span>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Certificación</h3>
                                <p className="text-sm text-slate-500">Cada taller incluye certificado de asistencia y participación.</p>
                            </div>
                            <div className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                <span className="material-symbols-outlined text-accent-gold text-4xl mb-4">schedule</span>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Flexibilidad</h3>
                                <p className="text-sm text-slate-500">Horarios adaptados a la disponibilidad del profesional.</p>
                            </div>
                            <div className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                <span className="material-symbols-outlined text-accent-gold text-4xl mb-4">support_agent</span>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">Seguimiento</h3>
                                <p className="text-sm text-slate-500">Acompañamiento post-taller para resolver dudas.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

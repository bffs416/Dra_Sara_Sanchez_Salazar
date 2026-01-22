'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const cases = [
    {
        sectionTitle: `Resultados Científicos, <br><span class="italic font-normal">Cabello Auténtico</span>`,
        sectionDesc: "Interactúa con nuestra data clínica. Selecciona un caso de implante capilar y explora la diferencia en densidad, diseño de línea frontal y cobertura de coronilla tras el tratamiento.",
        title: "Implante Capilar Frontal Completo",
        description: "Paciente 40 años. Recesión marcada en entradas y disminución de densidad frontal. Se realiza implante capilar estratégico con diseño natural de la línea capilar y aumento uniforme de densidad.",
        before: "https://images.unsplash.com/photo-1580798204642-0a284c5a7552?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        after: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        recovery: "7-10 Días",
        durability: "Resultado Permanente",
        tags: ["Implante Capilar", "Línea Frontal", "Alta Densidad"]
    },
    {
        sectionTitle: `Rejuvenecimiento Facial, <br><span class="italic font-normal">Sutil & Natural</span>`,
        sectionDesc: "Protocolos combinados para restaurar volumen y luminosidad. Nuestros casos demuestran cómo pequeñas correcciones estratégicas logran un impacto global en la armonía del rostro.",
        title: "Diseño Labial Arquitectónico",
        description: "Paciente 28 años. Definición del filtro y restauración de volumen labial sutil. Enfoque en hidratación y proyección natural sin efecto de 'pato'.",
        before: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        after: "https://images.unsplash.com/photo-1597586124394-fbd1ef2b4269?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        recovery: "24-48 Horas",
        durability: "12 Meses",
        tags: ["Ácido Hialurónico", "Hidratación", "Perfilado"]
    },
    {
        sectionTitle: `Armonización Facial, <br><span class="italic font-normal">Estructura & Definición</span>`,
        sectionDesc: "Redefinición del óvalo facial y masculinización sin cirugía. Utilizando inductores de colágeno para proyectar mentón y definir la mandíbula con resultados duraderos.",
        title: "Perfilado Mandibular",
        description: "Paciente 35 años. Definición del ángulo mandibular y reducción de la papada. Resultado: perfil más definido y cuello estilizado.",
        before: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?q=80&w=2580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        after: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        recovery: "48 Horas",
        durability: "18 Meses",
        tags: ["Radiesse", "Lifting", "Definición"]
    }
];

export function BeforeAfterShowcase() {
    const [activeCaseIndex, setActiveCaseIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const currentCase = cases[activeCaseIndex];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const updateLens = (e: MouseEvent | TouchEvent) => {
            const rect = container.getBoundingClientRect();
            let x, y;

            if ('touches' in e && e.touches.length > 0) {
                x = e.touches[0].clientX - rect.left;
                y = e.touches[0].clientY - rect.top;
            } else {
                x = (e as MouseEvent).clientX - rect.left;
                y = (e as MouseEvent).clientY - rect.top;
            }

            container.style.setProperty('--mouse-x', `${x}px`);
            container.style.setProperty('--mouse-y', `${y}px`);
        };

        container.addEventListener('mousemove', updateLens);
        container.addEventListener('touchstart', updateLens, { passive: true });
        container.addEventListener('touchmove', updateLens, { passive: true });

        return () => {
            container.removeEventListener('mousemove', updateLens);
            container.removeEventListener('touchstart', updateLens);
            container.removeEventListener('touchmove', updateLens);
        };
    }, []);

    return (
        <section className="py-24 bg-card" id="results">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <span className="text-accent-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Casos Clínicos</span>
                        <h2 className="serif-heading text-4xl md:text-5xl text-foreground leading-tight mb-6" dangerouslySetInnerHTML={{ __html: currentCase.sectionTitle }}>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            {currentCase.sectionDesc}
                        </p>
                    </div>
                    <div className="flex gap-2 md:gap-4 flex-wrap">
                        {cases.map((_c, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCaseIndex(index)}
                                className={cn(
                                    "case-selector border border-primary/10 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all",
                                    activeCaseIndex === index ? 'bg-primary text-primary-foreground' : 'bg-card text-primary'
                                )}
                            >
                                {index === 0 ? "Implante Capilar" : index === 1 ? "Rejuvenecimiento Facial" : "Armonización Facial"}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div ref={containerRef} className="analysis-container relative aspect-[4/3] rounded-2xl bg-secondary shadow-2xl overflow-visible group">
                            <div className="absolute inset-0 grayscale-[20%]">
                                <Image src={currentCase.before} alt="Before treatment" fill style={{ objectFit: 'cover', borderRadius: '1rem' }} />
                            </div>
                            <div className="after-overlay" style={{ backgroundImage: `url(${currentCase.after})` }}></div>
                            <div className="lens-ring">
                                <span className="lens-ui">Analizando Restauración</span>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2">
                                    <div className="w-px h-8 bg-accent-gold/50"></div>
                                </div>
                            </div>
                            <div className="absolute top-6 left-6 flex gap-4 pointer-events-none z-10">
                                <span className="bg-black/20 backdrop-blur-md px-4 py-1 text-[9px] uppercase tracking-widest text-white border border-white/10 font-bold rounded-full">Casos Clínicos de Implante Capilar</span>
                            </div>
                            <div className="absolute bottom-6 right-6 group-hover:opacity-0 transition-opacity duration-300 z-10">
                                <div className="flex items-center gap-3 animate-pulse">
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-white/80 drop-shadow-md">Explorar resultado</span>
                                    <span className="material-symbols-outlined text-white text-lg drop-shadow-md">biotech</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-10">
                        <div>
                            <h3 className="serif-heading text-3xl text-foreground mb-4">{currentCase.title}</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">{currentCase.description}</p>
                            <div className="flex flex-wrap gap-3">
                                {currentCase.tags.map(tag => (
                                    <span key={tag} className="px-4 py-2 bg-accent-gold/10 border border-accent-gold/20 rounded-lg text-[10px] uppercase font-bold tracking-widest text-accent-gold">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 bg-secondary/30 p-6 rounded-xl border">
                            <div className="space-y-1">
                                <span className="text-[10px] text-accent font-bold tracking-widest uppercase">Tiempo Recuperación</span>
                                <p className="text-xl serif-heading font-medium">{currentCase.recovery}</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] text-accent font-bold tracking-widest uppercase">Durabilidad</span>
                                <p className="text-xl serif-heading font-medium">{currentCase.durability}</p>
                            </div>
                        </div>

                        <div className="pt-2">
                            <a href="#" className="flex items-center gap-3 text-foreground font-bold text-[11px] tracking-widest uppercase hover:text-accent-gold transition-colors group">
                                Ver Galería Completa
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

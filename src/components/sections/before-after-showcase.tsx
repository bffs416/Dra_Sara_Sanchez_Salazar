'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import placeholderData from '@/app/lib/placeholder-images.json';

const InstagramReel = ({ videoUrl, index }: { videoUrl: string, index: number }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    let embedUrl = videoUrl;
    if (!videoUrl.includes('/embed')) {
        const match = videoUrl.match(/\/(?:p|reel|reels)\/([A-Za-z0-9_-]+)/);
        if (match && match[1]) {
            embedUrl = `https://www.instagram.com/reel/${match[1]}/embed/`;
        } else {
            embedUrl = `${videoUrl.split('?')[0].replace(/\/$/, '')}/embed/`;
        }
    }

    return (
        <div ref={containerRef} className="flex-shrink-0 w-[350px] rounded-3xl overflow-hidden shadow-2xl border border-primary/5 aspect-[9/16] relative group bg-slate-100">
            {isLoaded ? (
                <iframe
                    className="w-full h-full grayscale-[25%] group-hover:grayscale-0 transition-all duration-700"
                    src={embedUrl}
                    title={`Instagram Video ${index + 1}`}
                    frameBorder="0"
                    allow="encrypted-media"
                    scrolling="no">
                </iframe>
            ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200">
                    <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <span className="material-symbols-outlined text-accent-gold text-3xl">play_circle</span>
                    </div>
                    <span className="mt-4 text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">Cargando Reel...</span>
                </div>
            )}
        </div>
    );
};

const cases = [
    {
        sectionTitle: `Estimulación Capilar, <br><span class="italic font-normal">Revitalización Folicular</span>`,
        sectionDesc: "Protocolos médicos diseñados para frenar la caída y potenciar el grosor del cabello. Resultados visibles mediante terapias de bioestimulación avanzada.",
        title: "Tratamiento de Estimulación Capilar",
        description: "Paciente con pérdida de densidad capilar. Se realiza protocolo de estimulación mediante inductores de crecimiento y revitalización, restaurando la salud del cuero cabelludo y el volumen capilar.",
        before: placeholderData.beforeAfterShowcase.cases[0].before.src,
        after: placeholderData.beforeAfterShowcase.cases[0].after.src,
        recovery: "Inmediata",
        durability: "Mantenimiento Continuo",
        tags: ["Estimulación", "Salud Capilar", "Bioestimulación"]
    },
    {
        sectionTitle: `Rejuvenecimiento Facial, <br><span class="italic font-normal">Sutil & Natural</span>`,
        sectionDesc: "Protocolos combinados para restaurar volumen y luminosidad. Nuestros casos demuestran cómo pequeñas correcciones estratégicas logran un impacto global en la armonía del rostro.",
        title: "Diseño Labial Arquitectónico",
        description: "Paciente 28 años. Definición del filtro y restauración de volumen labial sutil. Enfoque en hidratación y proyección natural sin efecto de 'pato'.",
        before: placeholderData.beforeAfterShowcase.cases[1].before.src,
        after: placeholderData.beforeAfterShowcase.cases[1].after.src,
        recovery: "24-48 Horas",
        durability: "12 Meses",
        tags: ["Ácido Hialurónico", "Hidratación", "Perfilado"]
    },
    {
        sectionTitle: `Armonización Facial, <br><span class="italic font-normal">Estructura & Definición</span>`,
        sectionDesc: "Redefinición del óvalo facial y masculinización sin cirugía. Utilizando inductores de colágeno para proyectar mentón y definir la mandíbula con resultados duraderos.",
        title: "Perfilado Mandibular",
        description: "Paciente 35 años. Definición del ángulo mandibular y reducción de la papada. Resultado: perfil más definido y cuello estilizado.",
        before: placeholderData.beforeAfterShowcase.cases[2].before.src,
        after: placeholderData.beforeAfterShowcase.cases[2].after.src,
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
        <section className="" id="results">
            {/* Instagram Videos */}
            <div className="py-24 bg-card">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Testimonios</span>
                        <h2 className="serif-title text-4xl text-foreground">Lo que dicen nuestros <span className="text-accent-gold italic">pacientes</span></h2>
                    </div>

                    <div className="relative mb-20 overflow-hidden">
                        <div className="flex gap-6 animate-marquee w-max">
                            {[...placeholderData.beforeAfterShowcase.featuredVideos, ...placeholderData.beforeAfterShowcase.featuredVideos].map((videoUrl, index) => (
                                <InstagramReel key={index} videoUrl={videoUrl} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Patient Testimonials — Full-width dark background */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-accent-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Testimonios Reales</span>
                        <h3 className="serif-title text-3xl text-white">Historias de <span className="text-accent-gold italic">Transformación</span></h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Santiago M.", comment: "Increíble naturalidad en mi implante FUE. La recuperación fue rapidísima y el diseño quedó perfecto.", proc: "Implante Capilar", init: "SM" },
                            { name: "Elena V.", comment: "Mis labios se ven hermosos y super definidos, justo lo que buscaba. Un resultado sutil pero muy elegante.", proc: "Ácido Hialurónico", init: "EV" },
                            { name: "Ricardo P.", comment: "La marcación mandibular me cambió el perfil por completo. Un nivel de detalle y profesionalismo insuperable.", proc: "Armonización Facial", init: "RP" },
                            { name: "Laura G.", comment: "Mi cabello dejó de caerse y tiene mucho más brillo. Me siento mucho más segura con la revitalización capilar.", proc: "Revitalización Capilar", init: "LG" },
                            { name: "Juan C.", comment: "El trato es de primera y el resultado de la bioestimulación es genial. Piel más firme y descansada.", proc: "Bioestimulación", init: "JC" },
                            { name: "Marcela F.", comment: "La rinoplastia sin cirugía fue indolora y el cambio es impresionante. Mi perfil se ve armónico.", proc: "Rinomodelación", init: "MF" },
                            { name: "Carlos T.", comment: "Súper recomendado, la Dra. Sara explica todo con detalle. Resultados visibles desde la segunda sesión.", proc: "Fibrina Capilar", init: "CT" }
                        ].map((testi, i) => (
                            <div key={i} className={cn(
                                "bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:bg-white/10 hover:border-accent-gold/20 transition-all",
                                i === 6 ? "lg:col-span-2 lg:max-w-md lg:mx-auto" : ""
                            )}>
                                <div>
                                    <div className="flex text-accent-gold mb-3">
                                        {[...Array(5)].map((_, j) => <span key={j} className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                                    </div>
                                    <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">&quot;{testi.comment}&quot;</p>
                                </div>
                                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                    <div className="w-8 h-8 rounded-full bg-accent-gold/10 flex items-center justify-center text-[10px] font-bold text-accent-gold uppercase">
                                        {testi.init}
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">{testi.name}</h4>
                                        <span className="text-[9px] text-slate-400 uppercase tracking-widest">{testi.proc}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Clinical Cases */}
            <div className="py-24 bg-card">
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
                        <div className="flex gap-4 md:gap-6 flex-wrap">
                            {cases.map((_c, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveCaseIndex(index)}
                                    className={cn(
                                        "relative px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden group",
                                        activeCaseIndex === index
                                            ? 'bg-slate-900 text-white shadow-xl scale-105 border-transparent'
                                            : 'bg-white text-slate-500 border border-slate-200 hover:border-accent-gold hover:text-accent-gold shadow-sm'
                                    )}
                                >
                                    <span className="relative z-10 flex items-center gap-3">
                                        <span className={cn(
                                            "w-2 h-2 rounded-full transition-all duration-500",
                                            activeCaseIndex === index ? 'bg-accent-gold animate-pulse' : 'bg-slate-200 group-hover:bg-accent-gold'
                                        )}></span>
                                        {index === 0 ? "Estimulación Capilar" : index === 1 ? "Rejuvenecimiento Facial" : "Armonización Facial"}
                                    </span>
                                    {activeCaseIndex === index && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/20 to-transparent opacity-50"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <div ref={containerRef} className="analysis-container relative aspect-[4/3] rounded-2xl bg-secondary shadow-2xl overflow-hidden group">
                                <div className="absolute inset-0 grayscale-[20%]">
                                    <Image
                                        src={currentCase.before}
                                        alt="Antes"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                    />
                                </div>
                                <div className="after-overlay absolute inset-0 z-20">
                                    <Image
                                        src={currentCase.after}
                                        alt="Después"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                    />
                                </div>
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
                                <Link href="/gallery" className="flex items-center gap-3 text-foreground font-bold text-[11px] tracking-widest uppercase hover:text-accent-gold transition-colors group">
                                    Ver Galería Completa
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

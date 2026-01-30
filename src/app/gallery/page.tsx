'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import placeholderData from '@/app/lib/placeholder-images.json';

const GalleryCard = ({ before, after, title, description, tags, delay, beforeHint, afterHint }: { before: string, after: string, title: string, description: string, tags: string[], delay: string, beforeHint: string, afterHint: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div className="group fade-in" style={{ animationDelay: delay }}>
      <div ref={containerRef} className="analysis-container aspect-[4/5] bg-pearl-gray mb-6 shadow-xl">
        <div data-ai-hint={beforeHint} className="absolute inset-0 bg-cover bg-center transition-opacity duration-500" style={{ backgroundImage: `url('${before}')` }}>
          <span className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Antes</span>
        </div>
        <div data-ai-hint={afterHint} className="after-overlay" style={{ backgroundImage: `url('${after}')` }}></div>
        <div className="lens-ring">
          <span className="lens-ui">Después</span>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2">
            <div className="w-px h-6 bg-accent-gold/50"></div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 pointer-events-none opacity-60 group-hover:opacity-0 transition-opacity">
          <span className="material-symbols-outlined text-white drop-shadow-md">touch_app</span>
        </div>
      </div>
      <h3 className="serif-heading text-2xl text-[#1A1A1A] dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-[#1A1A1A]/60 dark:text-gray-400 mb-3 line-clamp-2">{description}</p>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-[10px] uppercase font-bold text-accent-gold border border-accent-gold/20 px-2 py-1 rounded">{tag}</span>
        ))}
      </div>
    </div>
  );
};


const galleryCases = [
    {
        title: "Restauración Facial",
        description: "Recuperación de volumen en tercio medio y tratamiento de ojeras.",
        tags: ["Rellenos", "Lifting"],
        delay: "0.1s"
    },
    {
        title: "Perfilado Labial",
        description: "Definición sutil e hidratación profunda sin exceso de volumen.",
        tags: ["Labios", "Hidratación"],
        delay: "0.2s"
    },
    {
        title: "Calidad de Piel",
        description: "Bio-estimulación para mejora de textura, poros y luminosidad.",
        tags: ["Piel", "Bio-Estimulación"],
        delay: "0.3s"
    },
    {
        title: "Definición Mandibular",
        description: "Marcación del óvalo facial y reducción de flacidez en cuello.",
        tags: ["Mandíbula", "Radiesse"],
        delay: "0.4s"
    },
    {
        title: "Rinomodelación",
        description: "Corrección de imperfecciones nasales sin cirugía.",
        tags: ["Nariz", "Rellenos"],
        delay: "0.5s"
    },
    {
        title: "Rejuvenecimiento de Manos",
        description: "Restauración de volumen y mejora de la calidad de piel en manos.",
        tags: ["Manos", "Volumen"],
        delay: "0.6s"
    }
];

export default function GalleryPage() {
    return (
        <div className="bg-[#FAFAFA] dark:bg-[#121212] text-[#1A1A1A] dark:text-gray-200 font-sans antialiased selection:bg-accent-plum/20 gallery-page">

            <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
                            <Image 
                                src={placeholderData.header.logo.src}
                                alt="Dra. Sara Sanchez Logo"
                                width={40}
                                height={40}
                                data-ai-hint={placeholderData.header.logo.hint}
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold tracking-widest uppercase text-[#1A1A1A] dark:text-white">Dra. Sara Sanchez</span>
                            <span className="text-[10px] tracking-widest uppercase text-[#1A1A1A]/50 dark:text-gray-400">Medicina Estética</span>
                        </div>
                    </Link>
                    <Link href="/" className="text-xs font-bold uppercase tracking-widest hover:text-accent-gold transition-colors">Volver al Inicio</Link>
                </div>
            </nav>

            <header className="pt-40 pb-20 px-6">
                <div className="max-w-6xl mx-auto text-center fade-in">
                    <span className="text-accent-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">Portfolio Clínico</span>
                    <h1 className="serif-heading text-5xl md:text-7xl text-[#1A1A1A] dark:text-white leading-tight mb-8">
                        Galería de <span className="italic font-normal text-accent">Transformaciones</span>
                    </h1>
                    <p className="text-xl text-[#1A1A1A]/60 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Resultados reales que respetan la anatomía y potencian la belleza natural de cada paciente. Mueve el cursor para revelar los detalles.
                    </p>
                </div>
            </header>

            <main className="pb-32 px-6">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryCases.map((item, index) => (
                       <GalleryCard 
                            key={index}
                            before={placeholderData.gallery.cases[index].before.src}
                            after={placeholderData.gallery.cases[index].after.src}
                            beforeHint={placeholderData.gallery.cases[index].before.hint}
                            afterHint={placeholderData.gallery.cases[index].after.hint}
                            title={item.title}
                            description={item.description}
                            tags={item.tags}
                            delay={item.delay}
                       />
                    ))}
                </div>
            </main>

            <footer className="py-12 border-t border-pearl-gray dark:border-gray-800 text-center">
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/30">© {new Date().getFullYear()} Dra. Sara Sanchez Medical Clinic. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

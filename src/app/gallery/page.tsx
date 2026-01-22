'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const GalleryCard = ({ before, after, title, description, tags, delay }: { before: string, after: string, title: string, description: string, tags: string[], delay: string }) => {
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
        <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-500" style={{ backgroundImage: `url('${before}')` }}>
          <span className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Antes</span>
        </div>
        <div className="after-overlay" style={{ backgroundImage: `url('${after}')` }}></div>
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
        before: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4AKwIxTx1jemgOIt5v604UQ1575QypZN1DOj-CWsZC7LRabPniM8BDb1EWydsVnJr2LYVPVCTocaHkvq-YTlSmaIi130_YXbPrNKxe7QsRZCnSBn_KCGlyU-ng1aScyAmenVuLpDHhzzR3jTJbn9nZQn_tNtcOJiNGW-2NvWInj7B-emP6rVmKC8y21TRft47rZvfxABmz_4yV897f7wx0hxi-eacGDbK3VDYsQ7bCh-LpiZUhPteP3Eqcc3m-YmHVzr1Rjx2k1A",
        after: "https://placehold.co/600x800/1A1A1A/e9edf1?text=DESPU%C3%89S:+Resultado+Final&font=playfair-display",
        title: "Restauración Facial",
        description: "Recuperación de volumen en tercio medio y tratamiento de ojeras.",
        tags: ["Rellenos", "Lifting"],
        delay: "0.1s"
    },
    {
        before: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzYYkeph2zSVE2miWsJQ9osLJWKP1JBmpknMK2Ue4VpsmQ2xR9wLgZ2kyoHSs1k8GlMU_6tbXouH4t7Cn9OlsmnW9R53Tvf3ewxJ1doyp6pZe44JNK9W8ienGnLo9XsGCjhNOUeM22QzHg1q4yI8mYhtgWsrk8l59DwZ12Q0sPMRnwvAQYl2oD67Un1PLeotOrSMPKm4L1hQWhd1kLUtcllZarr8RMletwkDzTsPPdw_XqajrEYsjDuMcXaIZLVMQ3wlREVeaZM7k",
        after: "https://placehold.co/600x800/7F5589/ffffff?text=DESPU%C3%89S:+Labios+Hidratados&font=playfair-display",
        title: "Perfilado Labial",
        description: "Definición sutil e hidratación profunda sin exceso de volumen.",
        tags: ["Labios", "Hidratación"],
        delay: "0.2s"
    },
    {
        before: "https://lh3.googleusercontent.com/aida-public/AB6AXuACWGEhodBGrCav9Ti9gG0h7UyBmNT5e-dVmzT1ef_PNHxnYuhCpEyVUAhdkTVChm2AYaQ3ejyv1K6uSZDNqde3C8YOOl2dEW9ZlqnXked0ygxrUHtQ35GGridWE7NJ8u10-LJSBtGxhvmqD9pH9VUoalIynpBfvv0W-Pf3Z9u9OCTaQWpwFZBv9AhzXkqELB41snan271z-NY-HnwLvxX9H-oIMJyrHwatoI4kHbxgvnXDnYr0wLwFIqrWBigMcPnodb0SPLK8CJM",
        after: "https://placehold.co/600x800/B5A47C/ffffff?text=DESPU%C3%89S:+Piel+Luminosa&font=playfair-display",
        title: "Calidad de Piel",
        description: "Bio-estimulación para mejora de textura, poros y luminosidad.",
        tags: ["Piel", "Bio-Estimulación"],
        delay: "0.3s"
    },
    {
        before: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkK13l5_4exbugBS9hJFavu9jiBSS6nuKkyH0EEk-S_cM3x7dv4A5omOrKIbnSRfrwK3vMrI1bEdW2eU8h-K7pSldZpiqpUng4g5PF_imdxNgvhlQX_SBOku4khHa2hvGjpX1ZjlTn_10XVV-_WBHVgwec5tyxUsE6sgxr_lAp6KR2Qvk8jDndFraxZguWdEhd_rZ92XUSw7UpwJFKzRXvrAK-o-r9Nuoy74dnMHX21LN9wpz08Z5YAzIDRWRgGnSqiYdC0L2g7Qw",
        after: "https://placehold.co/600x800/121212/ffffff?text=DESPU%C3%89S:+Mand%C3%ADbula+Definida&font=playfair-display",
        title: "Definición Mandibular",
        description: "Marcación del óvalo facial y reducción de flacidez en cuello.",
        tags: ["Mandíbula", "Radiesse"],
        delay: "0.4s"
    },
    {
        before: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3RS_9yUFdlnMW5--VqUsWrPFL1gKXLxtm0jIyzMACMeqeFE1_vTU7LUwkPBD3zh6N46ZLJvAmIvcUmCAfvJxiKFUlM39bw9-NjY59eL-Kad8BW5iVNRIZpzLzkECwCxzWPX6_CDQDFOtd0syjciwGdEVlc_ytFidwBpSrOJP2Xe6OZcxrsq9ZYQLl-njwTxqgBSneScEEBp7sLPCxl-LGIeLwSAfoQZyI_yGJK_N6Im8_uQcU9XgQsiADqgvci8fY1d1WDjgN398",
        after: "https://placehold.co/600x800/8c7e6d/ffffff?text=DESPU%C3%89S:+Nariz+Perfilada&font=playfair-display",
        title: "Rinomodelación",
        description: "Corrección de imperfecciones nasales sin cirugía.",
        tags: ["Nariz", "Rellenos"],
        delay: "0.5s"
    },
    {
        before: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHhAwyDDTrgzn9f6_AaWpAqwZNEIIpxzk6kyyNPLXB-U3vwajWQHU51YDNhtAOJ3SBJCaxthZRLnxhkpaIwbUXQ7W4AI_frIlCptAwVYHvIyJWmezLAXdKGAcWjM_Q1_dT_OqZH_0bYVWE6NpZnNnm-3_7pWAl7eIplh955mlIOEgKqGW51vMrtsldplFj-bOdQ1UY940EgSeczGjk6_bxGSdORMrZPA6NToOmEiOO7lOrzwWgfZKmwpkOB-sPf71fRe5uoDRvy6Q",
        after: "https://placehold.co/600x800/e9edf1/1A1A1A?text=DESPU%C3%89S:+Manos+J%C3%B3venes&font=playfair-display",
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
                        <div className="w-10 h-10 bg-[#1A1A1A] dark:bg-white rounded-full flex items-center justify-center text-white dark:text-[#1A1A1A] transition-transform group-hover:scale-105">
                            <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>spa</span>
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
                            before={item.before}
                            after={item.after}
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

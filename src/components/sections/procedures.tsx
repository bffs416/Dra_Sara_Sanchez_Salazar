"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import placeholderData from '@/app/lib/placeholder-images.json';

const services = [
    // --- CAPILARES ---
    {
        id: 'trasplante_capilar',
        cat: 'capilar',
        title: "Trasplante Capilar",
        short: "Recuperación capilar definitiva en colaboración con especialistas.",
        desc: "Procedimiento de restauración capilar avanzada realizado en colaboración con el Dr. David Vega (@trasplantedepelord). Utilizamos técnicas de micro-injerto para resultados naturales y densos.",
        features: ["Colaboración Especializada", "Técnica FUE/DHI", "Resultados Naturales", "Seguimiento Médico"],
        price: "Consulta Evaluación",
        benefits: "Recuperación de la línea capilar y densidad perdida con cabello propio que no se cae.",
        duration: "4 - 8 Horas",
        recovery: "5 - 7 Días",
        sessions: "1 Sesión",
        pain: "Anestesia Local",
        contra: "Zonas donantes insuficientes, patologías de piel activas.",
        aftercare: ["No frotar injertos", "Llavado especial", "Evitar sol directo", "Seguir medicación"],
        icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><path d="M12 6a6 6 0 0 0-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74A4 4 0 0 1 8 12a4 4 0 0 1 4-4z" /></svg>,
        cases: placeholderData.procedures.services.find(s => s.id === 'trasplante_capilar')?.cases || []
    },
    {
        id: 'tratamientos_capilares',
        cat: 'capilar',
        title: "Tratamientos Capilares",
        short: "Cuidado y fortalecimiento integral de la salud capilar.",
        desc: "Conjunto de terapias médicas diseñadas para fortalecer el folículo piloso, frenar la caída y mejorar la calidad de la hebra capilar mediante bioestimulación.",
        features: ["Fortalecimiento", "Freno de Caída", "Nutrición Foliar", "Bioestimulación"],
        price: "Desde $150.000",
        benefits: "Cabello más grueso, resistente y con mayor vitalidad. Detención efectiva de la caída prematura.",
        duration: "30 - 45 Minutos",
        recovery: "Inmediata",
        sessions: "Varía según caso",
        pain: "Mínimo",
        contra: "Infecciones en cuero cabelludo.",
        aftercare: ["No lavar en 12h", "Evitar calor extremo", "Masajear zona"],
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 2.67-2 3.5 0 1.21.79 2 2 2 .83 0 2.24-.5 3.5-2" /><path d="m10 10 5.66 5.66" /><path d="M14 6l5.66 5.66" /><path d="m18 2 4 4" /><path d="m5 17 14.5-14.5" /><path d="m15.83 17.17 1.67 1.67" /><path d="m13.17 19.83 1.67 1.67" /></svg>,
        cases: placeholderData.procedures.services.find(s => s.id === 'tratamientos_capilares')?.cases || []
    },

    // --- FACIALES ---
    {
        id: 'facial_profunda',
        cat: 'facial',
        title: "Facial (Limpieza Profunda)",
        short: "Protocolo integral para una piel sana y renovada.",
        desc: "Protocolo de varios pasos diseñado para el cuidado facial integral, eliminando impurezas, células muertas y preparando la piel para otros tratamientos.",
        features: ["Varios Pasos", "Extracción Impurezas", "Hidratación", "Renovación Celular"],
        price: "Desde $180.000",
        benefits: "Piel luminosa, poros limpios y textura suavizada de forma inmediata.",
        duration: "60 - 90 Minutos",
        recovery: "Inmediata",
        sessions: "Mensual recomendado",
        pain: "Mínimo",
        contra: "Acné inflamatorio severo, heridas abiertas.",
        aftercare: ["Protección solar", "Hidratación", "Evitar maquillaje 24h"],
        icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>,
        cases: placeholderData.procedures.services.find(s => s.id === 'facial_profunda')?.cases || []
    },
    {
        id: 'toxina_botulinica',
        cat: 'facial',
        title: "Toxina Botulínica",
        short: "Prevención de líneas de expresión y modulación muscular.",
        desc: "Aplicación estratégica para la modulación muscular, previniendo y suavizando las líneas de expresión con un enfoque natural y preventivo.",
        features: ["Efecto Preventivo", "Naturalidad", "Rápida Aplicación", "Sin Cirugía"],
        price: "Según Unidades",
        benefits: "Aspecto descansado, eliminación de arrugas dinámicas y prevención de surcos permanentes.",
        duration: "20 - 30 Minutos",
        recovery: "4 Horas",
        sessions: "Cada 4-6 meses",
        pain: "Bajo",
        contra: "Embarazo, miastenia gravis.",
        aftercare: ["No tumbarse en 4h", "No ejercicio 24h", "No masajear"],
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 12.33a2.66 2.66 0 0 0 0 3.76l2.12 2.12a2.66 2.66 0 0 0 3.76 0l8.47-8.47" /><path d="m15 11 4 4" /><path d="m19 15 3.5 3.5" /><path d="m11 7 4 4" /><path d="m20 2 2 2" /></svg>,
        cases: placeholderData.procedures.services.find(s => s.id === 'toxina_botulinica')?.cases || []
    },
    {
        id: 'skinbooster_toxina',
        cat: 'facial',
        title: "Skinbooster + Toxina",
        short: "Combinación preventiva e hidratación profunda.",
        desc: "Sinergia de hidratación profunda con skinboosters y relajación muscular suave para un resultado 'natural glow' preventivo.",
        features: ["Hidratación Bio", "Relajación Suave", "Brillo Natural", "Prevención"],
        price: "Consulte Promo",
        benefits: "Piel con aspecto descansado y profundamente hidratada desde las capas internas.",
        duration: "40 Minutos",
        recovery: "24 Horas",
        sessions: "1 - 3 Sesiones",
        pain: "Bajo",
        contra: "Alergia a componentes.",
        aftercare: ["No sol directo", "Beber agua", "Hidratación simple"],
        icon: <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8" /></svg>,
        cases: placeholderData.procedures.services.find(s => s.id === 'skinbooster_toxina')?.cases || []
    },
    {
        id: 'rinomodelacion',
        cat: 'facial',
        title: "Rinomodelación",
        short: "Remodelación nasal no invasiva con hialurónico.",
        desc: "Cambios estéticos nasales sin cirugía utilizando rellenos biocompatibles para rectificar perfiles, elevar puntas y mejorar la simetría.",
        features: ["Sin Cirugía", "Inmediato", "Reversible", "Sin Postoperatorio"],
        price: "Consulta Valoración",
        benefits: "Mejora el perfil facial y la confianza sin los riesgos de una rinoplastia quirúrgica.",
        duration: "30 - 45 Minutos",
        recovery: "24 - 48 Horas",
        sessions: "1 Sesión",
        pain: "Bajo",
        contra: "Cirugías nasales previas recientes, alergias.",
        aftercare: ["Evitar gafas pesadas", "No masajear", "Sol suave"],
        icon: <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>,
        cases: placeholderData.procedures.services.find(s => s.id === 'rinomodelacion')?.cases || []
    },
    {
        id: 'labios',
        cat: 'facial',
        title: "Diseño de Labios",
        short: "Aumento y simetría con hialurónico.",
        desc: "Escultura de labios para mejorar volumen, definición y simetría, respetando siempre la estructura natural y proporciones del rostro.",
        features: ["Volumen Natural", "Perfilado", "Hidratación", "Simetría"],
        price: "Desde $900.000",
        benefits: "Labios más carnosos, definidos y rejuvenecidos.",
        duration: "30 Minutos",
        recovery: "48 Horas",
        sessions: "1 Sesión",
        pain: "Bajo (Lidocaína)",
        contra: "Herpes labial activo.",
        aftercare: ["Frío local", "No morderse", "Hidratar labial"],
        icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>,
        cases: placeholderData.procedures.services.find(s => s.id === 'labios')?.cases || []
    },
    {
        id: 'glowon_hit',
        cat: 'facial',
        title: "Glowon (Protocolo HIT)",
        short: "Protocolo de alto impacto para firmeza y luminosidad.",
        desc: "Tratamiento avanzado diseñado para lograr una piel más firme, profundamente hidratada y con una luminosidad excepcional (Glow).",
        features: ["Alto Impacto", "Firmeza", "Hidratación", "Luminosidad"],
        price: "Consulte Precio",
        benefits: "Efecto revitalizante inmediato y mejora progresiva de la calidad cutánea.",
        duration: "45 - 60 Minutos",
        recovery: "24 Horas",
        sessions: "Según Protocolo",
        pain: "Bajo",
        contra: "Dermatitis activa.",
        aftercare: ["Sérums hidratantes", "Protector solar", "Cuidado NOVEXPERT"],
        icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" /></svg>,
        cases: placeholderData.procedures.services.find(s => s.id === 'glowon_hit')?.cases || []
    },

    // --- CORPORALES ---
    {
        id: 'endolaser',
        cat: 'corporal',
        title: "Endolaser (1470nm)",
        short: "Tecnología fotónica avanzada para remodelación corporal.",
        desc: "Uso de láser de diodo intralesional de 1470nm para tensado cutáneo y reducción de grasa localizada con mínima invasión.",
        features: ["Láser 1470nm", "Mínima Invasión", "Tensado Cutáneo", "Efecto Fotónico"],
        price: "Valoración Médica",
        benefits: "Reducción de flacidez y grasa con una recuperación mucho más rápida que la cirugía tradicional.",
        duration: "1 - 2 Horas",
        recovery: "3 - 5 Días",
        sessions: "1 Sesión",
        pain: "Anestesia Local",
        contra: "Embarazo, marcapasos, infecciones.",
        aftercare: ["Banda elástica", "Evitar esfuerzo", "Hidratación"],
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" /></svg>,
        cases: placeholderData.procedures.services.find(s => s.id === 'endolaser')?.cases || []
    },
    {
        id: 'gluteos_up',
        cat: 'corporal',
        title: "Glúteos UP",
        short: "Levantamiento y reafirmación no invasiva.",
        desc: "Técnica avanzada no invasiva que combina varias tecnologías para levantar, reafirmar, mejorar la forma y reducir la flacidez y celulitis en glúteos.",
        features: ["Sin Cirugía", "Levantamiento", "Anti-Celulitis", "Forma Natural"],
        price: "Desde $450.000",
        benefits: "Glúteos más firmes, con mejor contorno y textura de piel mejorada sin tiempo de baja.",
        duration: "60 Minutos",
        recovery: "Inmediata",
        sessions: "4 - 8 Sesiones",
        pain: "Moderado",
        contra: "Implantes metálicos en zona, embarazo.",
        aftercare: ["Masajes", "Ejercicio", "Beber agua"],
        icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-4 0-8 3-8 7 0 4 3 7 7 7s7-3 7-7c0-4-4-7-8-7z" /></svg>,
        cases: placeholderData.procedures.services.find(s => s.id === 'gluteos_up')?.cases || []
    },
    {
        id: 'lipoescultura',
        cat: 'corporal',
        title: "Lipoescultura",
        short: "Remodelación corporal avanzada.",
        desc: "Procedimiento de remodelación para esculpir la silueta, tratando áreas de grasa localizada y definiendo los contornos naturales del cuerpo.",
        features: ["Definición", "Escultura", "Grasa Localizada", "Armonía"],
        price: "Valoración Médica",
        benefits: "Contorno corporal más definido y armónico.",
        duration: "2 - 3 Horas",
        recovery: "7 - 10 Días",
        sessions: "1 Sesión",
        pain: "Medio",
        contra: "Sobrepeso severo, patología cardíaca.",
        aftercare: ["Faja compresiva", "Caminatas suaves", "Drenajes"],
        icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" /></svg>,
        cases: placeholderData.procedures.services.find(s => s.id === 'lipoescultura')?.cases || []
    },
    {
        id: 'lipopapada',
        cat: 'corporal',
        title: "Lipopapada",
        short: "Reducción de papada no invasiva.",
        desc: "Tratamiento enfocado en la eliminación de la grasa submentoniana para definir el ángulo mandibular y estilizar el cuello.",
        features: ["Definición Cuello", "Sin Quirófano", "Rápido", "Efectivo"],
        price: "Desde $300.000",
        benefits: "Perfil más estilizado y rostro visualmente más delgado y joven.",
        duration: "30 - 45 Minutos",
        recovery: "2 - 3 Días",
        sessions: "1 - 3 Sesiones",
        pain: "Medio",
        contra: "Problemas tiroideos no controlados.",
        aftercare: ["Mentonera", "Frío local", "Evitar sol"],
        icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21l-7-7 1.4-1.4L12 18.2l5.6-5.6 1.4 1.4-7 7z" /></svg>,
        cases: placeholderData.procedures.services.find(s => s.id === 'lipopapada')?.cases || []
    }
];

const categories = {
    capilar: services.filter(s => s.cat === 'capilar'),
    facial: services.filter(s => s.cat === 'facial'),
    corporal: services.filter(s => s.cat === 'corporal'),
}

export function Procedures() {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentCaseIndex, setCurrentCaseIndex] = useState(0);

    const lensContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!modalOpen) return;

        const container = lensContainerRef.current;
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
    }, [modalOpen, currentIndex, currentCaseIndex]);

    const openModal = (index: number) => {
        const serviceId = (categories.capilar.concat(categories.facial, categories.corporal)[index]).id;
        const globalIndex = services.findIndex(s => s.id === serviceId);
        setCurrentIndex(globalIndex);
        setCurrentCaseIndex(0);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = '';
    };

    const navigate = (dir: number) => {
        let newIndex = currentIndex + dir;
        if (newIndex < 0) newIndex = services.length - 1;
        if (newIndex >= services.length) newIndex = 0;
        setCurrentIndex(newIndex);
        setCurrentCaseIndex(0);
    };

    const currentService = services[currentIndex];
    const currentCase = currentService?.cases?.[currentCaseIndex];

    const ServiceCard = ({ service, index, globalIndex }: { service: typeof services[0], index: number, globalIndex: number }) => (
        <div className="card bg-[hsla(var(--card),0.95)] border border-[hsla(var(--accent-soft),0.8)] rounded-[32px] p-10 text-left backdrop-blur-xl shadow-lg transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col cursor-pointer relative overflow-hidden hover:-translate-y-2.5 hover:shadow-2xl hover:border-[var(--accent-procedures)]" onClick={() => openModal(globalIndex)}>
            <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-[var(--accent-soft)] rounded-[20px] flex items-center justify-center transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] text-[var(--accent-procedures)] group-hover:bg-[var(--accent-procedures)] group-hover:text-white group-hover:rotate-6">
                    <div className="w-6 h-6">{service.icon}</div>
                </div>
                {service.price && <div className="bg-gray-100 py-1.5 px-3.5 rounded-full text-xs font-bold text-gray-800">{service.price}</div>}
            </div>
            <h3 className="font-serif text-[1.7rem] mb-3 font-bold text-slate-900">{service.title}</h3>
            <p className="text-sm leading-6 text-slate-500 mb-5">{service.short}</p>
            {service.features && (
                <ul className="m-0 mb-6 p-0 list-none grid grid-cols-1 gap-2.5">
                    {service.features.map(f => <li key={f} className="text-sm text-slate-600 flex items-center gap-2.5 before:content-['✓'] before:text-[var(--accent-procedures)] before:font-extrabold">{f}</li>)}
                </ul>
            )}
            <div className="mt-auto pt-5 border-t border-gray-100 flex gap-2.5">
                <span className="text-[0.65rem] uppercase tracking-wider font-bold py-1 px-2.5 bg-gray-50 rounded-md text-slate-500">{service.duration}</span>
                <span className="text-[0.65rem] uppercase tracking-wider font-bold py-1 px-2.5 bg-gray-50 rounded-md text-slate-500">{service.recovery}</span>
            </div>
            <div className="mt-6 text-center w-full py-3.5 rounded-2xl border border-[var(--accent-soft)] text-[var(--accent-procedures)] font-bold text-xs uppercase tracking-wider transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:bg-[var(--accent-procedures)] group-hover:text-white group-hover:border-[var(--accent-procedures)]">
                Ver Detalles y Resultados
            </div>
        </div>
    );

    return (
        <section className="procedures-section" id="servicios">
            <div className="blob-bg">
                <div className="blob" style={{ width: '600px', height: '600px', top: '-10%', left: '-15%', background: '#eff6ff' }}></div>
                <div className="blob" style={{ width: '500px', height: '500px', bottom: '-5%', right: '-5%', background: '#e0f2fe', animationDelay: '-3s' }}></div>
                <div className="blob" style={{ width: '300px', height: '300px', top: '40%', right: '10%', background: '#fdf2f8', animationDelay: '-5s' }}></div>
            </div>
            <div className="container mx-auto relative z-10 px-6">
                <header className="text-center mb-20">
                    <p className="font-semibold text-[var(--accent-procedures)] tracking-[5px] uppercase text-sm mb-4">Clínica de Estética Avanzada</p>
                    <h1 className="font-serif text-6xl font-normal tracking-tight text-slate-900">Nuestros Servicios</h1>
                </header>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="rounded-3xl overflow-hidden shadow-lg border border-white/50 aspect-[9/16] max-h-[600px] mx-auto relative group">
                        <iframe className="w-full h-full" src="https://www.instagram.com/p/C6O1z2_x4M_/embed" title="Clínica Sara Sanchez - Presentación" frameBorder="0" allowTransparency={true} allow="encrypted-media"></iframe>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-lg border border-white/50 aspect-[9/16] max-h-[600px] mx-auto relative group">
                        <iframe className="w-full h-full" src="https://www.instagram.com/p/C5vX1x_x4M_/embed" title="Resultados Implante Capilar" frameBorder="0" allowTransparency={true} allow="encrypted-media"></iframe>
                    </div>
                </div>

                <h2 className="section-title">Soluciones Capilares</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                    {categories.capilar.map((s, i) => <ServiceCard key={s.id} service={s} index={i} globalIndex={services.findIndex(serv => serv.id === s.id)} />)}
                </div>

                <h2 className="section-title">Cuidado Facial</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                    {categories.facial.map((s, i) => <ServiceCard key={s.id} service={s} index={i} globalIndex={services.findIndex(serv => serv.id === s.id)} />)}
                </div>

                <h2 className="section-title">Remodelación Corporal</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                    {categories.corporal.map((s, i) => <ServiceCard key={s.id} service={s} index={i} globalIndex={services.findIndex(serv => serv.id === s.id)} />)}
                </div>
            </div>

            {modalOpen && currentService && (
                <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-xl flex items-center justify-center z-[1000] transition-opacity duration-300" onClick={closeModal}>
                    <div className="bg-white w-[95%] max-w-7xl rounded-[40px] relative max-h-[95vh] overflow-hidden flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" onClick={(e) => e.stopPropagation()}>
                        <div className="absolute top-6 right-6 flex gap-2.5 z-50">
                            <button onClick={() => navigate(-1)} className="bg-white border-none w-11 h-11 rounded-full cursor-pointer flex items-center justify-center shadow-md transition-all hover:bg-[var(--accent-procedures)] hover:text-white hover:scale-110">
                                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            </button>
                            <button onClick={() => navigate(1)} className="bg-white border-none w-11 h-11 rounded-full cursor-pointer flex items-center justify-center shadow-md transition-all hover:bg-[var(--accent-procedures)] hover:text-white hover:scale-110">
                                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </button>
                            <button onClick={closeModal} className="bg-white border-none w-11 h-11 rounded-full cursor-pointer flex items-center justify-center shadow-md transition-all hover:bg-[var(--accent-procedures)] hover:text-white hover:scale-110">
                                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>

                        <div className="p-12 overflow-y-auto flex-grow">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                <div className="modal-visual-panel">
                                    {currentCase && (
                                        <div className="relative w-full">
                                            <div ref={lensContainerRef} className="analysis-container relative w-full aspect-[4/5] rounded-3xl bg-secondary shadow-xl overflow-hidden group">
                                                <div className="absolute inset-0 bg-cover bg-center grayscale-[20%]" style={{ backgroundImage: `url(${currentCase.b})` }}></div>
                                                <div className="after-overlay" style={{ backgroundImage: `url(${currentCase.a})` }}></div>
                                                <div className="lens-ring">
                                                    <span className="lens-ui">Resultado Final</span>
                                                </div>
                                                <div className="absolute top-6 left-6 flex gap-4 pointer-events-none z-10">
                                                    <span className="bg-black/20 backdrop-blur-md px-4 py-1 text-[9px] uppercase tracking-widest text-white border border-white/10 font-bold rounded-full">Lupa de Análisis</span>
                                                </div>
                                                <div className="absolute bottom-6 right-6 group-hover:opacity-0 transition-opacity duration-300 z-10">
                                                    <div className="flex items-center gap-3 animate-pulse text-white">
                                                        <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Explorar resultado</span>
                                                        <span className="material-symbols-outlined text-lg">biotech</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4 text-xs font-semibold text-slate-500 uppercase tracking-widest italic">{currentService.cases && currentService.cases.length > 1 ? `Desliza la lupa para comparar (Caso ${currentCaseIndex + 1})` : 'Desliza la lupa para comparar'}</div>
                                            {currentService.cases && currentService.cases.length > 1 && (
                                                <div className="flex justify-center gap-3 mt-4">
                                                    {currentService.cases.map((_, idx) => (
                                                        <div key={idx} onClick={() => setCurrentCaseIndex(idx)} className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${idx === currentCaseIndex ? 'bg-[var(--accent-procedures)] w-6' : 'bg-gray-300'}`}></div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    <div className="mt-6 bg-blue-50 border-l-4 border-[var(--accent-procedures)] p-5 rounded-r-2xl">
                                        <h5 className="mb-2 text-sm text-[var(--accent-procedures)] font-bold">Cuidado Post-Tratamiento</h5>
                                        <ul className="m-0 pl-4 list-disc text-sm text-slate-600 leading-6">
                                            {currentService.aftercare?.map(item => <li key={item}>{item}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <div className="modal-info-panel">
                                    <div className="w-10 text-[var(--accent-procedures)] mb-4">{currentService.icon}</div>
                                    <h2 className="font-serif text-5xl text-slate-900 mb-2">{currentService.title}</h2>
                                    <span className="text-xl text-[var(--accent-procedures)] font-bold mb-8 block">{currentService.price}</span>

                                    <div className="mt-8">
                                        <h4 className="uppercase text-xs tracking-widest text-[var(--accent-procedures)] mb-3 font-bold">Procedimiento</h4>
                                        <p className="text-base leading-7 text-slate-600 mb-0">{currentService.desc}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mt-6">
                                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                            <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1.5 font-bold">Duración</span>
                                            <strong className="text-base text-slate-800 block">{currentService.duration}</strong>
                                        </div>
                                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                            <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1.5 font-bold">Recuperación</span>
                                            <strong className="text-base text-slate-800 block">{currentService.recovery}</strong>
                                        </div>
                                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                            <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1.5 font-bold">Sesiones</span>
                                            <strong className="text-base text-slate-800 block">{currentService.sessions}</strong>
                                        </div>
                                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                            <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1.5 font-bold">Molestia</span>
                                            <strong className="text-base text-slate-800 block">{currentService.pain}</strong>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <h4 className="uppercase text-xs tracking-widest text-[var(--accent-procedures)] mb-3 font-bold">Resultados y Beneficios</h4>
                                        <p className="text-base leading-7 text-slate-600">{currentService.benefits}</p>
                                    </div>

                                    <div className="mt-8">
                                        <h4 className="uppercase text-xs tracking-widest text-[var(--accent-procedures)] mb-3 font-bold">Contraindicaciones</h4>
                                        <p className="text-sm leading-6 text-slate-500">{currentService.contra}</p>
                                    </div>

                                    <div className="mt-10">
                                        <a href="https://wa.me/573023674189" target="_blank" rel="noopener noreferrer" className="block w-full">
                                            <Button className="w-full bg-[var(--accent-procedures)] text-white h-14 rounded-2xl font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                                                Solicitar Consulta Gratuita
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

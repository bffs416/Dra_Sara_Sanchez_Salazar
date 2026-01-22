"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import placeholderData from '@/app/lib/placeholder-images.json';

const services = [
    {
        id: 'implante',
        cat: 'capilar',
        title: "Implante Capilar FUE",
        short: "Micro-injertos de alta precisión para calvicie severa o incipiente.",
        desc: "Técnica de vanguardia basada en la extracción individual de folículos de la zona posterior (occipital) para ser reimplantados en áreas con baja densidad. Se realiza bajo microscopía de alta resolución para asegurar la viabilidad del 99% de los injertos.",
        features: ["Extracción robotizada", "Sin cicatriz lineal", "Anestesia local sin dolor", "Densidad máxima"],
        price: "Desde 2.500€",
        benefits: "Recuperación definitiva de la línea capilar. El cabello injertado no vuelve a caerse ya que no posee el receptor hormonal de la alopecia. Resultados visibles a partir del 4º mes.",
        duration: "6 - 8 Horas",
        recovery: "3 a 5 Días",
        sessions: "1 Sesión única",
        pain: "Mínimo (Anestesia Local)",
        contra: "Enfermedades autoinmunes activas en el cuero cabelludo, cicatrización queloide severa o zona donante insuficiente.",
        aftercare: ["No frotar la zona injertada los primeros 10 días", "Evitar ejercicio físico intenso durante 2 semanas", "Uso de champú neutro especial", "Evitar exposición solar directa prolongada"],
        icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6a6 6 0 0 0-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74A4 4 0 0 1 8 12a4 4 0 0 1 4-4z"/></svg>,
        cases: placeholderData.procedures.services.find(s => s.id === 'implante')?.cases || []
    },
    {
        id: 'meso_capilar',
        cat: 'capilar',
        title: "Mesoterapia Médica",
        short: "Bioestimulación profunda para frenar la caída y revitalizar el folículo.",
        desc: "Infiltración subdérmica de una fórmula magistral compuesta por péptidos biomiméticos, aminoácidos y vasodilatadores. Actúa directamente sobre la raíz, bloqueando la enzima responsable de la miniaturización del cabello.",
        features: ["Frenado inmediato", "Mayor grosor", "Estimulación circulatoria", "Cero tiempo de baja"],
        price: "90€ / Sesión",
        benefits: "Revitaliza cabellos debilitados, acelera el crecimiento tras cirugías y detiene la caída estacional o por estrés de forma efectiva desde la segunda sesión.",
        duration: "25 - 30 Minutos",
        recovery: "Inmediata",
        sessions: "4 a 6 (Quincenales)",
        pain: "Leve (Micro-pinchazos)",
        contra: "Infecciones activas en cuero cabelludo, embarazo o lactancia.",
        aftercare: ["No lavar el cabello en las siguientes 12 horas", "Evitar saunas o piscinas el día del tratamiento", "Masajear suavemente la zona para distribuir el producto"],
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 2.67-2 3.5 0 1.21.79 2 2 2 .83 0 2.24-.5 3.5-2"/><path d="m10 10 5.66 5.66"/><path d="M14 6l5.66 5.66"/><path d="m18 2 4 4"/><path d="m5 17 14.5-14.5"/><path d="m15.83 17.17 1.67 1.67"/><path d="m13.17 19.83 1.67 1.67"/></svg>,
        cases: placeholderData.procedures.services.find(s => s.id === 'meso_capilar')?.cases || []
    },
    {
        id: 'hialuronico',
        cat: 'facial',
        title: "Ácido Hialurónico",
        short: "Armonización facial con rellenos de alta gama y pureza certificada.",
        desc: "Inyecciones de gel de hialurónico reticulado para restaurar estructuras perdidas. Utilizamos marcas premium con tecnología Vycross para asegurar una integración perfecta con los tejidos sin inflamación excesiva.",
        features: ["Resultados instantáneos", "Altamente seguro", "Totalmente reversible", "Acabado hidratado"],
        price: "Desde 280€",
        benefits: "Permite proyectar pómulos, mentón, redefinir labios o eliminar ojeras de forma natural. El producto atrae agua, mejorando la calidad de la piel circundante a largo plazo.",
        duration: "30 - 45 Minutos",
        recovery: "24 a 48 Horas",
        sessions: "1 (Revisión a los 15 días)",
        pain: "Bajo (Incluye lidocaína)",
        contra: "Enfermedades autoinmunes sistémicas, alergia a componentes o rellenos permanentes previos en la misma zona.",
        aftercare: ["No realizar ejercicio físico el día de la infiltración", "Evitar masajes fuertes en la zona", "No aplicar calor extremo (sauna)", "Dormir boca arriba las primeras 2 noches"],
        icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,
        cases: placeholderData.procedures.services.find(s => s.id === 'hialuronico')?.cases || []
    },
    {
        id: 'botox',
        cat: 'facial',
        title: "Toxina Botulínica",
        short: "Elimina arrugas de expresión y rejuvenece la mirada de forma sutil.",
        desc: "Infiltración estratégica para relajar la musculatura facial responsable de las arrugas dinámicas. Nuestro enfoque es el 'Natural Look': eliminar el aspecto de cansancio sin congelar la expresividad del paciente.",
        features: ["Mirada descansada", "Efecto preventivo", "Rápida aplicación", "Sin marcas"],
        price: "Desde 190€",
        benefits: "Elimina patas de gallo, arrugas en la frente y entrecejo. Produce un efecto de 'ceja levantada' que abre la mirada de forma inmediata a partir del tercer día.",
        duration: "15 - 20 Minutos",
        recovery: "4 Horas",
        sessions: "1 (Cada 4-6 meses)",
        pain: "Prácticamente nulo",
        contra: "Miastenia gravis, embarazo, infecciones en el punto de inyección.",
        aftercare: ["No tumbarse ni agachar la cabeza durante 4 horas", "No hacer deporte intenso en 24h", "No masajear la zona tratada", "Evitar cascos de moto o gorras apretadas"],
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 12.33a2.66 2.66 0 0 0 0 3.76l2.12 2.12a2.66 2.66 0 0 0 3.76 0l8.47-8.47"/><path d="m15 11 4 4"/><path d="m19 15 3.5 3.5"/><path d="m11 7 4 4"/><path d="m20 2 2 2"/></svg>,
        cases: placeholderData.procedures.services.find(s => s.id === 'botox')?.cases || []
    },
    {
        id: 'criolipolisis',
        cat: 'corporal',
        title: "Criolipólisis Médica",
        short: "Eliminación de grasa localizada mediante frío controlado sin cirugía.",
        desc: "Tratamiento no invasivo que utiliza aplicadores de vacío para enfriar el tejido adiposo a -10ºC. Los adipocitos cristalizan y mueren, siendo eliminados por el sistema linfático en las semanas posteriores.",
        features: ["Sin quirófano", "Sin agujas", "Reducción permanente", "Zonas específicas"],
        price: "Desde 150€ / Zona",
        benefits: "Pérdida de entre un 20% y un 30% de la grasa tratada en una sola sesión. Ideal para abdomen, flancos y cartucheras que no responden a dieta o ejercicio.",
        duration: "60 - 70 Minutos",
        recovery: "Inmediata",
        sessions: "1 a 3 según diagnóstico",
        pain: "Moderado (Frío y succión)",
        contra: "Crioglobulinemia, enfermedad de Raynaud, hernias en la zona de tratamiento, embarazo.",
        aftercare: ["Beber 2 litros de agua diarios", "Realizar drenaje linfático o masajes", "Llevar una dieta equilibrada para potenciar el efecto", "Uso de faja compresora opcional"],
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/></svg>,
        cases: placeholderData.procedures.services.find(s => s.id === 'criolipolisis')?.cases || []
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
    const [sliderValue, setSliderValue] = useState(50);
    
    const afterImgRef = useRef<HTMLDivElement>(null);
    const sliderHandleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(afterImgRef.current) afterImgRef.current.style.width = `${sliderValue}%`;
        if(sliderHandleRef.current) sliderHandleRef.current.style.left = `${sliderValue}%`;
    }, [sliderValue]);
    
    const openModal = (index: number) => {
        const serviceId = (categories.capilar.concat(categories.facial, categories.corporal)[index]).id;
        const globalIndex = services.findIndex(s => s.id === serviceId);
        setCurrentIndex(globalIndex);
        setCurrentCaseIndex(0);
        setSliderValue(50);
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
        setSliderValue(50);
    };

    const currentService = services[currentIndex];
    const currentCase = currentService?.cases?.[currentCaseIndex];

    const ServiceCard = ({ service, index, globalIndex } : { service: typeof services[0], index: number, globalIndex: number}) => (
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
                    <div className="rounded-3xl overflow-hidden shadow-lg border border-white/50 aspect-video relative group">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder" title="Clínica Sara Sanchez - Presentación" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-lg border border-white/50 aspect-video relative group">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder2" title="Resultados Implante Capilar" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
                                            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gray-200 shadow-xl">
                                                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${currentCase.b})` }}></div>
                                                <div ref={afterImgRef} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${currentCase.a})`, width: '50%'}}></div>
                                                <div ref={sliderHandleRef} className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full -translate-x-1/2 z-20 pointer-events-none shadow-2xl flex items-center justify-center text-[var(--accent-procedures)]">
                                                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 8 4 4-4 4M6 8l-4 4 4 4" /></svg>
                                                </div>
                                                <input type="range" min="0" max="100" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} className="absolute inset-0 opacity-0 cursor-ew-resize z-10" />
                                                <span className="absolute bottom-6 right-6 py-2 px-4 bg-black/50 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest text-white z-20 pointer-events-none">Antes</span>
                                                <span className="absolute bottom-6 left-6 py-2 px-4 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest text-gray-800 z-20 pointer-events-none">Después</span>
                                            </div>
                                            <div className="text-center mt-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">{currentCase.label} {currentService.cases && currentService.cases.length > 1 ? `(Caso ${currentCaseIndex + 1})` : ''}</div>
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
                                        <Button className="w-full bg-[var(--accent-procedures)] text-white h-14 rounded-2xl font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                                            Solicitar Consulta Gratuita
                                        </Button>
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

import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function ArticuloRestauracionCapilar() {
    return (
        <>
            <Header />
            <main className="flex-1">
                {/* Hero del artículo */}
                <section className="relative overflow-hidden pt-32 pb-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#1a1f2e] to-slate-900"></div>
                    <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16">
                        <div className="mb-6 flex items-center gap-3">
                            <Link href="/blog" className="text-slate-400 hover:text-accent-gold transition-colors text-xs uppercase tracking-widest font-bold flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-sm">arrow_back</span>
                                Blog
                            </Link>
                            <span className="text-slate-600">/</span>
                            <span className="text-accent-gold text-xs uppercase tracking-widest font-bold">Capilar</span>
                        </div>
                        <h1 className="serif-title text-4xl md:text-5xl text-white leading-tight mb-6">
                            Restauración Capilar: Opciones médicas para frenar la caída del cabello
                        </h1>
                        <div className="flex items-center gap-6 mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-accent-gold/10 flex items-center justify-center">
                                    <span className="text-[9px] font-bold text-accent-gold">SS</span>
                                </div>
                                <span className="text-slate-300 text-sm font-semibold">Dra. Sara Sánchez Salazar</span>
                            </div>
                            <time className="text-slate-400 text-sm">11 de marzo de 2026</time>
                            <span className="text-slate-500 text-sm">· 7 min lectura</span>
                        </div>
                    </div>
                </section>

                <div className="relative w-full aspect-video md:aspect-[21/9] max-h-[600px] overflow-hidden">
                    <Image
                        src="/blog-banner-capilar.png"
                        alt="Restauración Capilar - Medicina Estética"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>

                {/* Contenido del artículo */}
                <article className="py-20 bg-background">
                    <div className="max-w-3xl mx-auto px-6">

                        <div className="prose prose-lg max-w-none">

                            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-light border-l-4 border-accent-gold pl-6 italic">
                                La alopecia afecta a millones de personas en todo el mundo. Hoy existen tratamientos médicos no invasivos que pueden frenar la caída, estimular el crecimiento folicular y recuperar la densidad capilar de forma progresiva.
                            </p>

                            <h2 className="serif-heading text-3xl text-foreground mt-12 mb-6">¿Por qué se cae el cabello?</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                La caída del cabello, o alopecia, tiene causas muy diversas. No se trata de un solo problema, sino de una familia de condiciones con orígenes distintos. Las más frecuentes que vemos en consulta son:
                            </p>
                            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    { tipo: 'Alopecia Androgénica', desc: 'La forma más común. De origen genético y hormonal. Afecta tanto a hombres como mujeres y produce un patrón característico de pérdida.' },
                                    { tipo: 'Efluvio Telógeno', desc: 'Caída masiva y temporal, generalmente desencadenada por estrés, cirugías, dietas extremas, anemia o cambios hormonales.' },
                                    { tipo: 'Alopecia Areata', desc: 'De origen autoinmune. Aparece en parches redondeados. Puede afectar solo el cuero cabelludo o el cuerpo completo.' },
                                    { tipo: 'Déficits nutricionales', desc: 'Falta de hierro, zinc, biotina o vitamina D. Causa caída difusa que responde bien al tratamiento suplementario.' },
                                ].map(item => (
                                    <div key={item.tipo} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">{item.tipo}</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="serif-heading text-3xl text-foreground mt-12 mb-6">¿Cuál es el primer paso? La valoración médica</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Antes de iniciar cualquier tratamiento, es imprescindible un diagnóstico correcto. En consulta realizamos una evaluación completa del cuero cabelludo con tricoscopia digital, que nos permite ver el estado de los folículos, el grosor del cabello y la tasa de caída. Complementamos con exámenes de laboratorio para descartar causas sistémicas como anemia, hipotiroidismo o déficits nutricionales.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                No existe un único tratamiento universal. Lo que funciona para un tipo de alopecia puede ser inútil o contraproducente para otro. Por eso, el plan siempre es personalizado.
                            </p>

                            <h2 className="serif-heading text-3xl text-foreground mt-12 mb-6">Tratamientos disponibles en nuestra clínica</h2>

                            <div className="not-prose space-y-6 mb-10">
                                {[
                                    {
                                        num: '01',
                                        nombre: 'Mesoterapia Capilar',
                                        desc: 'Microinyecciones directas en el cuero cabelludo con un cóctel de vitaminas, minerales, aminoácidos y factores de crecimiento. Nutre los folículos pilosos desde adentro y activa la circulación local. Resultados visibles desde la 4.ª sesión.',
                                        icono: 'vaccines',
                                    },
                                    {
                                        num: '02',
                                        nombre: 'Plasma Rico en Plaquetas (PRP)',
                                        desc: 'Se extrae una pequeña muestra de sangre del paciente, se centrifuga para concentrar los factores de crecimiento plaquetarios y se reinyecta en el cuero cabelludo. Estimula la regeneración celular y prolonga el ciclo de vida del folículo.',
                                        icono: 'bloodtype',
                                    },
                                    {
                                        num: '03',
                                        nombre: 'Fibrina Capilar (PRF)',
                                        desc: 'Evolución del PRP. La fibrina rica en plaquetas se libera de forma más lenta y sostenida, ofreciendo una estimulación folicular más prolongada. Ideal para alopecias moderadas a avanzadas.',
                                        icono: 'science',
                                    },
                                    {
                                        num: '04',
                                        nombre: 'Microagujas con Factores de Crecimiento',
                                        desc: 'Combinación de microdermoabrasión del cuero cabelludo con aplicación tópica de factores de crecimiento. Mejora la absorción de los activos y estimula la producción de colágeno perifolicular.',
                                        icono: 'settings_input_composite',
                                    },
                                    {
                                        num: '05',
                                        nombre: 'Sueroterapia IV para Cabello',
                                        desc: 'Tratamiento intravenoso con biotina, hierro, zinc, aminoácidos y vitaminas del complejo B. Ideal cuando la caída tiene una causa nutricional o metabólica subyacente.',
                                        icono: 'medication_liquid',
                                    },
                                ].map(t => (
                                    <div key={t.nombre} className="flex gap-5 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="shrink-0">
                                            <div className="w-12 h-12 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-accent-gold text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{t.icono}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className="text-[10px] font-black text-accent-gold/50 tracking-widest">{t.num}</span>
                                                <h4 className="font-bold text-slate-900">{t.nombre}</h4>
                                            </div>
                                            <p className="text-sm text-slate-500 leading-relaxed">{t.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 className="serif-heading text-3xl text-foreground mt-12 mb-6">¿Cuándo esperar resultados?</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                La restauración capilar es un proceso gradual. A diferencia de los tratamientos faciales donde los cambios pueden ser inmediatos, el cabello sigue ciclos biológicos de crecimiento que duran entre 3 y 6 meses. Los primeros resultados suelen ser una disminución notable en la caída, seguida de la aparición de cabello nuevo (lanugo) y un aumento progresivo en el diámetro de los cabellos existentes.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-10">
                                En la mayoría de los planes de tratamiento recomendamos entre 4 y 8 sesiones de mantenimiento, espaciadas cada 3 a 4 semanas, seguidas de sesiones de mantenimiento periódicas. La constancia es clave para consolidar los resultados a largo plazo.
                            </p>

                            {/* CTA */}
                            <div className="not-prose mt-12 p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-[#1a1f2e] text-center">
                                <span className="text-accent-gold font-bold tracking-[0.25em] uppercase text-[10px] block mb-3">Da el primer paso</span>
                                <h3 className="serif-title text-2xl text-white mb-4">Diagnóstico capilar personalizado</h3>
                                <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">Agenda tu valoración. Revisamos el estado de tu cuero cabelludo y te explicamos qué tratamiento es el más indicado para tu caso.</p>
                                <a
                                    href={`https://wa.me/573023674189?text=${encodeURIComponent('Hola, quiero agendar una valoración para tratamiento de restauración capilar')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#20BD5A] transition-all"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                    Agendar por WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Volver */}
                        <div className="mt-16 pt-8 border-t border-border">
                            <Link href="/blog" className="inline-flex items-center gap-2 text-accent-gold font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                                <span className="material-symbols-outlined text-lg">arrow_back</span>
                                Ver todos los artículos
                            </Link>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}

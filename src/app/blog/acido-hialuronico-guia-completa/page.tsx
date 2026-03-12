import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function ArticuloAcidoHialuronico() {
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
                            <span className="text-accent-gold text-xs uppercase tracking-widest font-bold">Procedimientos</span>
                        </div>
                        <h1 className="serif-title text-4xl md:text-5xl text-white leading-tight mb-6">
                            Ácido Hialurónico: Todo lo que necesitas saber antes de tu primera cita
                        </h1>
                        <div className="flex items-center gap-6 mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-accent-gold/10 flex items-center justify-center">
                                    <span className="text-[9px] font-bold text-accent-gold">SS</span>
                                </div>
                                <span className="text-slate-300 text-sm font-semibold">Dra. Sara Sánchez Salazar</span>
                            </div>
                            <time className="text-slate-400 text-sm">15 de enero de 2026</time>
                            <span className="text-slate-500 text-sm">· 6 min lectura</span>
                        </div>
                    </div>
                </section>

                <div className="relative w-full aspect-video md:aspect-[21/9] max-h-[600px] overflow-hidden">
                    <Image
                        src="/blog-banner-acido-hialuronico.png"
                        alt="Ácido Hialurónico - Medicina Estética"
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
                                El ácido hialurónico es hoy uno de los componentes más usados en medicina estética. Pero, ¿sabes realmente cómo funciona, qué esperar de un tratamiento y por qué la experiencia del médico es fundamental?
                            </p>

                            <h2 className="serif-heading text-3xl text-foreground mt-12 mb-6">¿Qué es el ácido hialurónico?</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                El ácido hialurónico (AH) es una molécula que el propio organismo produce de forma natural. Se encuentra en la piel, los cartílagos y el líquido sinovial de las articulaciones. Su función principal es retener agua: una sola molécula puede atrapar hasta 1.000 veces su peso en agua, lo que la convierte en una de las sustancias más hidratantes que existen en la naturaleza.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Con el paso de los años, la producción natural de ácido hialurónico disminuye, lo que se traduce en pérdida de volumen facial, aparición de líneas de expresión y menor elasticidad en la piel. A partir de los 25 años, el cuerpo comienza a producir menos cantidad, y a los 50 años puede haberse reducido hasta en un 50%.
                            </p>

                            <h2 className="serif-heading text-3xl text-foreground mt-12 mb-6">¿Qué áreas se pueden tratar?</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                En nuestra clínica trabajamos con ácido hialurónico en múltiples zonas del rostro y el cuerpo, siempre con un enfoque de armonización global:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 not-prose">
                                {[
                                    { area: 'Labios', detail: 'Diseño, volumen, hidratación y perfilado del arco de cupido.' },
                                    { area: 'Pómulos', detail: 'Restauración de volumen y proyección del tercio medio.' },
                                    { area: 'Mentón', detail: 'Definición y proyección para un perfil más armonioso.' },
                                    { area: 'Arco mandibular', detail: 'Contorno facial femenino y masculino definido.' },
                                    { area: 'Ojeras / Surco nasogeniano', detail: 'Relleno de depresiones que generan cansancio visual.' },
                                    { area: 'Skin Booster / Skin Vive', detail: 'Alta hidratación intradérmica de mejillas y rostro.' },
                                ].map(item => (
                                    <div key={item.area} className="flex items-start gap-3 bg-slate-50 rounded-2xl p-4 border border-slate-100">
                                        <span className="material-symbols-outlined text-accent-gold text-lg mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                        <div>
                                            <span className="block font-bold text-slate-900 text-sm">{item.area}</span>
                                            <span className="text-xs text-slate-500">{item.detail}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 className="serif-heading text-3xl text-foreground mt-12 mb-6">¿Cuánto dura el tratamiento y sus resultados?</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                La sesión de aplicación suele durar entre 30 y 60 minutos, dependiendo de las áreas a tratar. El proceso comienza con una valoración médica donde analizamos la estructura facial, el tipo de piel y los objetivos del paciente. Luego se aplica anestesia tópica antes de la inyección para minimizar las molestias.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Los resultados son inmediatos y visibles desde el primer día, aunque el resultado definitivo se aprecia entre los 7 y 14 días, cuando el producto termina de integrarse con los tejidos. La duración varía según la zona y el tipo de ácido hialurónico utilizado:
                            </p>
                            <div className="not-prose mb-8 overflow-hidden rounded-2xl border border-slate-100">
                                <table className="w-full text-sm">
                                    <thead className="bg-slate-900 text-white">
                                        <tr>
                                            <th className="text-left px-5 py-3 text-[10px] uppercase tracking-widest">Zona</th>
                                            <th className="text-left px-5 py-3 text-[10px] uppercase tracking-widest">Duración promedio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { zona: 'Labios', dur: '6 - 12 meses' },
                                            { zona: 'Pómulos y mentón', dur: '12 - 18 meses' },
                                            { zona: 'Arco mandibular', dur: '12 - 24 meses' },
                                            { zona: 'Skin Booster (hidratación)', dur: '3 - 6 meses' },
                                        ].map((row, i) => (
                                            <tr key={row.zona} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                                <td className="px-5 py-3 text-slate-700 font-semibold">{row.zona}</td>
                                                <td className="px-5 py-3 text-slate-500">{row.dur}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="serif-heading text-3xl text-foreground mt-12 mb-6">¿Por qué debe aplicarlo un médico especialista?</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                El ácido hialurónico inyectable es un producto de uso exclusivamente médico. Su aplicación requiere un conocimiento profundo de la anatomía facial: los vasos sanguíneos, los nervios y los planos de tejido varían de paciente a paciente. Una inyección mal colocada puede causar complicaciones como oclusión vascular, necrosis tisular o compromiso visual.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-10">
                                En nuestra práctica médica utilizamos siempre productos certificados con registro INVIMA, dosificaciones personalizadas y técnicas de inyección seguras. Además, contamos con hialuronidasa disponible en consulta para disolver el producto en caso de cualquier complicación o resultado no deseado.
                            </p>

                            {/* CTA */}
                            <div className="not-prose mt-12 p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-[#1a1f2e] text-center">
                                <span className="text-accent-gold font-bold tracking-[0.25em] uppercase text-[10px] block mb-3">¿Tienes preguntas?</span>
                                <h3 className="serif-title text-2xl text-white mb-4">Agenda tu valoración gratuita</h3>
                                <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">Cuéntanos cuáles son tus objetivos y te explicamos qué tratamiento es el más adecuado para ti.</p>
                                <a
                                    href={`https://wa.me/573023674189?text=${encodeURIComponent('Hola, quiero agendar una valoración para tratamiento con ácido hialurónico')}`}
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

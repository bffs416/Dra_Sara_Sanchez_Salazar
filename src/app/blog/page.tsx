import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const posts = [
    {
        slug: 'acido-hialuronico-guia-completa',
        title: 'Ácido Hialurónico: Todo lo que necesitas saber antes de tu primera cita',
        excerpt: 'El ácido hialurónico es una de las sustancias más utilizadas en medicina estética. Conoce cómo funciona, cuánto dura, qué áreas se pueden tratar y por qué su aplicación debe estar siempre en manos de un médico especialista.',
        date: '15 de enero de 2026',
        isoDate: '2026-01-15',
        category: 'Procedimientos',
        readTime: '6 min',
        image: '/blog-acido-hialuronico.png',
        author: 'Dra. Sara Sánchez Salazar',
    },
    {
        slug: 'restauracion-capilar-opciones',
        title: 'Restauración Capilar: Opciones médicas para frenar la caída del cabello',
        excerpt: 'La pérdida de cabello afecta tanto a hombres como mujeres. En este artículo, la Dra. Sara Sánchez explica las causas más comunes de la alopecia y los tratamientos médicos disponibles para estimular el crecimiento folicular de forma segura.',
        date: '11 de marzo de 2026',
        isoDate: '2026-03-11',
        category: 'Capilar',
        readTime: '7 min',
        image: '/blog-capilar-restauracion.png',
        author: 'Dra. Sara Sánchez Salazar',
    },
];

const categoryColors: Record<string, string> = {
    'Procedimientos': 'bg-accent-gold/10 text-accent-gold border-accent-gold/20',
    'Capilar': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
};

export default function BlogPage() {
    return (
        <>
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="relative overflow-hidden pt-32 pb-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#1a1f2e] to-slate-900"></div>
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, #C9A96E 0px, #C9A96E 1px, transparent 1px, transparent 60px)`
                    }}></div>
                    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-accent-gold/10 rounded-full border border-accent-gold/20 mb-6">
                            <span className="material-symbols-outlined text-accent-gold text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
                            <span className="text-accent-gold font-bold tracking-[0.25em] uppercase text-[10px]">Medical Journal</span>
                        </div>
                        <h1 className="serif-title text-5xl md:text-6xl text-white leading-tight mb-6">
                            Blog de <span className="text-accent-gold italic">Actualidad Médica</span>
                        </h1>
                        <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
                            Artículos de medicina estética, revitalización capilar y bienestar escritos por la Dra. Sara Sánchez Salazar.
                        </p>
                    </div>
                </section>

                {/* Posts Grid */}
                <section className="py-24 bg-background">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {posts.map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 block">
                                    {/* Image */}
                                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className="grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                        <div className="absolute top-4 left-4">
                                            <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${categoryColors[post.category] || 'bg-accent-gold/10 text-accent-gold border-accent-gold/20'}`}>
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <div className="flex items-center gap-4 mb-4">
                                            <time dateTime={post.isoDate} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                                {post.date}
                                            </time>
                                            <span className="text-muted-foreground/30">·</span>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{post.readTime} lectura</span>
                                        </div>

                                        <h2 className="serif-heading text-2xl text-foreground mb-3 group-hover:text-accent-gold transition-colors leading-snug">
                                            {post.title}
                                        </h2>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-border">
                                            <div className="flex items-center gap-2">
                                                <div className="w-7 h-7 rounded-full bg-accent-gold/10 flex items-center justify-center">
                                                    <span className="text-[9px] font-bold text-accent-gold">SS</span>
                                                </div>
                                                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{post.author}</span>
                                            </div>
                                            <span className="inline-flex items-center gap-1.5 text-accent-gold text-xs font-bold uppercase tracking-wider group-hover:gap-2.5 transition-all">
                                                Leer artículo
                                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Coming soon note */}
                        <div className="mt-16 text-center">
                            <div className="inline-flex items-center gap-3 bg-card border border-border rounded-2xl px-8 py-5">
                                <span className="material-symbols-outlined text-accent-gold">edit_note</span>
                                <p className="text-sm text-muted-foreground">
                                    Próximamente más artículos sobre medicina estética y bienestar. 
                                    <a href="https://wa.me/573023674189?text=Hola%2C+quiero+suscribirme+al+blog" target="_blank" rel="noopener noreferrer" className="text-accent-gold font-bold hover:underline ml-1">Escribenos para recibir novedades.</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

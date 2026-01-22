import Image from 'next/image';
import Link from 'next/link';

const journalEntries = [
  {
    date: "Oct 12, 2023",
    title: "Diseño Labial Arquitectónico",
    excerpt: "Enfoque en la definición del filtro y restauración de bordes sin sobre-proyección.",
    imageUrl: "https://images.unsplash.com/photo-1597586124394-fbd1ef2b4269?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Tendencia"
  },
  {
    date: "Sep 28, 2023",
    title: "Armonía de Perfil",
    excerpt: "Restauración de la definición mandibular y soporte estructural mediante inyección de plano profundo.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Técnica"
  },
  {
    date: "Sep 15, 2023",
    title: "Glow Bio-Regenerativo",
    excerpt: "Terapia con PDRN y Polinucleótidos para mejorar la textura, tamaño de poro y elasticidad.",
    imageUrl: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Ciencia"
  }
];

export function MedicalJournal() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Medical Journal</span>
          <h2 className="serif-heading text-4xl text-foreground">Actualidad y <span className="italic">Ciencia</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journalEntries.map((entry, index) => (
            <Link href="#" key={index} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden mb-6 rounded-2xl bg-secondary">
                <Image 
                  src={entry.imageUrl} 
                  alt={entry.title}
                  fill
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-card/90 backdrop-blur px-3 py-1 text-[9px] font-bold uppercase tracking-widest shadow-sm rounded-full text-accent">{entry.category}</span>
                </div>
              </div>
              <div className="space-y-3">
                <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">{entry.date}</span>
                <h4 className="serif-heading text-xl group-hover:text-accent transition-colors">{entry.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{entry.excerpt}</p>
                <span className="text-xs font-bold uppercase tracking-wide text-foreground flex items-center gap-1 group-hover:gap-2 transition-all">
                  Leer Artículo 
                  <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

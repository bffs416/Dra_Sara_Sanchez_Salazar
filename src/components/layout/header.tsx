import Link from 'next/link';
import Image from 'next/image';
import placeholderData from '@/app/lib/placeholder-images.json';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="size-10 flex items-center justify-center rounded-lg transition-transform group-hover:scale-105">
            <Image
              src={placeholderData.header.logo.src}
              alt="Dra. Sara Sanchez Logo"
              width={40}
              height={40}
              data-ai-hint={placeholderData.header.logo.hint}
            />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight leading-none uppercase">Dra. Sara Sanchez</h1>
            <p className="text-[10px] tracking-[0.2em] font-medium text-accent-gold uppercase">Medicina Estética Avanzada</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link className="text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wider" href="#servicios">Tratamientos</Link>
          <Link className="text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wider" href="#philosophy">Metodología</Link>
          <Link className="text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wider" href="#results">Resultados</Link>
          <Link className="text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wider" href="#blog">Blog</Link>
          <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-sm">
            CONTACTO
          </button>
        </nav>
        <button className="md:hidden text-foreground">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}

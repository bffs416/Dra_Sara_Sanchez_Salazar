'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import placeholderData from '@/app/lib/placeholder-images.json';

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // If not home, let the href="/#id" navigate normally
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b border-border overflow-hidden">
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
        <nav className="hidden md:flex items-center gap-8">
          <a
            className="text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wider cursor-pointer"
            href={isHome ? '#servicios' : '/#servicios'}
            onClick={(e) => scrollTo(e, 'servicios')}
          >Servicios</a>
          <a
            className="text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wider cursor-pointer"
            href={isHome ? '#consultas' : '/#consultas'}
            onClick={(e) => scrollTo(e, 'consultas')}
          >Consultas</a>
          <Link className="text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wider" href="/talleres">Talleres</Link>
          <Link className="text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wider" href="/blog">Blog</Link>
          <a
            className="text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wider cursor-pointer"
            href={isHome ? '#perfil' : '/#perfil'}
            onClick={(e) => scrollTo(e, 'perfil')}
          >Dra. Sara</a>
          <a href="https://wa.me/573023674189" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-sm">
            CONTACTO
          </a>
        </nav>
        <button className="md:hidden text-foreground">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}

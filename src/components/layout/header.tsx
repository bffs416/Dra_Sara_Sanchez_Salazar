'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import placeholderData from '@/app/lib/placeholder-images.json';

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // If not home, let the href="/#id" navigate normally
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group z-50 relative" onClick={() => setIsMobileMenuOpen(false)}>
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
              <h1 className="text-lg md:text-xl font-extrabold tracking-tight leading-none uppercase">Dra. Sara Sanchez</h1>
              <p className="text-[9px] md:text-[10px] tracking-[0.2em] font-medium text-accent-gold uppercase">Medicina Estética Avanzada</p>
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
            <Link className="text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wider" href="/dra-sara">Dra. Sara</Link>
            <a href="https://wa.me/573023674189" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-sm">
              CONTACTO
            </a>
          </nav>
          <button 
            className="md:hidden text-foreground p-2 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-24 pb-8 overflow-y-auto`}
      >
        <nav className="flex flex-col items-center justify-center gap-6 p-6 min-h-full">
          <a
            className="text-xl font-bold hover:text-accent transition-colors uppercase tracking-widest w-full text-center py-4 border-b border-border/50"
            href={isHome ? '#servicios' : '/#servicios'}
            onClick={(e) => scrollTo(e, 'servicios')}
          >Servicios</a>
          <a
            className="text-xl font-bold hover:text-accent transition-colors uppercase tracking-widest w-full text-center py-4 border-b border-border/50"
            href={isHome ? '#consultas' : '/#consultas'}
            onClick={(e) => scrollTo(e, 'consultas')}
          >Consultas</a>
          <Link className="text-xl font-bold hover:text-accent transition-colors uppercase tracking-widest w-full text-center py-4 border-b border-border/50" href="/talleres" onClick={() => setIsMobileMenuOpen(false)}>Talleres</Link>
          <Link className="text-xl font-bold hover:text-accent transition-colors uppercase tracking-widest w-full text-center py-4 border-b border-border/50" href="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          <Link className="text-xl font-bold hover:text-accent transition-colors uppercase tracking-widest w-full text-center py-4 border-b border-border/50" href="/dra-sara" onClick={() => setIsMobileMenuOpen(false)}>Dra. Sara</Link>
          <div className="mt-auto w-full pt-8">
            <a href="https://wa.me/573023674189" target="_blank" rel="noopener noreferrer" className="block w-full bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-extrabold text-center hover:bg-primary/90 transition-all shadow-lg active:scale-95 uppercase tracking-wider">
              Agenda tu cita
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

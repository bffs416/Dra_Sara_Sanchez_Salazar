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
  const [isScrolled, setIsScrolled] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-lg shadow-slate-200/20 h-16 md:h-20' 
            : 'bg-background/70 md:bg-background backdrop-blur-sm md:backdrop-blur-none h-20 md:h-24'
        } border-b border-border/40`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-4 group z-50 relative transition-transform hover:scale-[1.02]" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative size-10 md:size-12 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-100 overflow-hidden shadow-sm shadow-slate-200/50">
              <Image
                src={placeholderData.header.logo.src}
                alt="Dra. Sara Sanchez Logo"
                width={48}
                height={48}
                priority
                className="p-1.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-black tracking-tight leading-tight uppercase text-slate-900">Dra. Sara Sanchez</span>
              <span className="text-[8px] md:text-[9px] tracking-[0.3em] font-bold text-accent-gold uppercase">Medicina Estética & Capilar</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              <a
                className="hover:text-accent-gold transition-colors cursor-pointer"
                href={isHome ? '#servicios' : '/#servicios'}
                onClick={(e) => scrollTo(e, 'servicios')}
              >Servicios</a>
              <a
                className="hover:text-accent-gold transition-colors cursor-pointer"
                href={isHome ? '#consultas' : '/#consultas'}
                onClick={(e) => scrollTo(e, 'consultas')}
              >Consultas</a>
              <Link className="hover:text-accent-gold transition-colors" href="/talleres">Talleres</Link>
              <Link className="hover:text-accent-gold transition-colors" href="/blog">Blog</Link>
              <Link className="hover:text-accent-gold transition-colors" href="/dra-sara">Sobre Mí</Link>
            </div>
            
            <a 
              href="https://wa.me/573023674189" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-slate-900 text-white px-7 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent-gold hover:text-white transition-all transform hover:scale-105 shadow-lg shadow-slate-900/10 active:scale-95"
            >
              Agenda Cita
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button 
            className="lg:hidden p-2 z-50 relative rounded-xl bg-slate-50 border border-slate-100 text-slate-900 transition-colors hover:bg-slate-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            <span className="material-symbols-outlined text-2xl font-light">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-xl transform transition-transform duration-500 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden flex flex-col pt-32 pb-12 px-8 overflow-y-auto`}
      >
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-1 items-center">
            <span className="w-12 h-1 bg-accent-gold/20 rounded-full mb-8"></span>
          </div>
          
          <nav className="flex flex-col gap-4">
            <MobileNavLink 
              href={isHome ? '#servicios' : '/#servicios'} 
              onClick={(e) => scrollTo(e, 'servicios')}
              label="Servicios" 
              icon="spa"
            />
            <MobileNavLink 
              href={isHome ? '#consultas' : '/#consultas'} 
              onClick={(e) => scrollTo(e, 'consultas')}
              label="Consultas" 
              icon="stethoscope"
            />
            <MobileNavLink href="/talleres" label="Talleres Académicos" icon="school" />
            <MobileNavLink href="/blog" label="Diario Médico" icon="menu_book" />
            <MobileNavLink href="/dra-sara" label="Conoce a la Dra. Sara" icon="person" />
          </nav>

          <div className="mt-auto space-y-6">
            <a 
              href="https://wa.me/573023674189" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-3 w-full bg-slate-900 text-white rounded-2xl py-5 text-sm font-black uppercase tracking-[0.3em] shadow-2xl active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp Directo
            </a>
            <div className="text-center">
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Medellín, Colombia · El Poblado</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileNavLink({ href, label, icon, onClick }: { href: string; label: string; icon: string; onClick?: (e: any) => void }) {
  const isExternal = href.startsWith('http') || href.startsWith('#') || href.includes('#');
  const Component = isExternal ? 'a' : Link;
  
  return (
    <Component 
      href={href} 
      onClick={onClick}
      className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 transition-all hover:bg-slate-100 group"
    >
      <div className="size-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-accent-gold group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-xl">{icon}</span>
      </div>
      <span className="text-sm font-black uppercase tracking-[0.2em]">{label}</span>
      <span className="material-symbols-outlined ml-auto text-slate-300 text-sm">arrow_forward_ios</span>
    </Component>
  );
}

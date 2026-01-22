import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-primary text-primary-foreground flex items-center justify-center rounded-lg">
            <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>medical_services</span>
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight leading-none uppercase">Dra. Sara Sanchez</h1>
            <p className="text-[10px] tracking-[0.2em] font-medium text-accent-gold uppercase">Medicina Estética Avanzada</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <Link className="text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wider" href="#servicios">Tratamientos</Link>
          <Link className="text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wider" href="#philosophy">Metodología</Link>
          <Link className="text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wider" href="#results">Resultados</Link>
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

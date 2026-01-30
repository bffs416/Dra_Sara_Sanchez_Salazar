import Link from 'next/link';
import Image from 'next/image';
import placeholderData from '@/app/lib/placeholder-images.json';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-8">
              <Image
                src={placeholderData.header.logo.src}
                alt="Dra. Sara Sanchez Logo"
                width={28}
                height={28}
                data-ai-hint={placeholderData.header.logo.hint}
              />
              <h2 className="text-lg font-bold tracking-tight text-foreground uppercase">Dra. Sara Sanchez</h2>
            </div>
            <p className="text-sm text-foreground/50 leading-relaxed">
              Autoridad médica en estética regenerativa y armonización facial no quirúrgica. Clínica de prevención líder en España.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
            <div>
              <h4 className="font-bold text-[10px] uppercase tracking-widest mb-8 text-accent-gold">Clínica</h4>
              <ul className="space-y-4 text-xs font-semibold uppercase tracking-widest text-foreground/60">
                <li><Link href="#servicios" className="hover:text-foreground transition-colors">Tratamientos</Link></li>
                <li><Link href="#philosophy" className="hover:text-foreground transition-colors">Filosofía</Link></li>
                <li><Link href="#results" className="hover:text-foreground transition-colors">Galería</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[10px] uppercase tracking-widest mb-8 text-accent-gold">Legal</h4>
              <ul className="space-y-4 text-xs font-semibold uppercase tracking-widest text-foreground/60">
                <li><Link href="#" className="hover:text-foreground transition-colors">Privacidad</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Aviso Legal</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Condiciones</Link></li>
              </ul>
            </div>
            <div className="hidden sm:block">
              <h4 className="font-bold text-[10px] uppercase tracking-widest mb-8 text-accent-gold">Contacto</h4>
              <ul className="space-y-4 text-xs font-semibold uppercase tracking-widest text-foreground/60">
                <li><Link href="#" className="hover:text-foreground transition-colors">Instagram</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">WhatsApp</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/30">© {new Date().getFullYear()} Dra. Sara Sanchez Medical Clinic. All Rights Reserved.</p>
          <div className="flex items-center gap-8 grayscale opacity-30">
            <span className="text-[9px] font-bold uppercase tracking-tighter border border-foreground px-2 py-1">Secure Medical System</span>
            <span className="text-[9px] font-bold uppercase tracking-tighter border border-foreground px-2 py-1">EU Certified Physician</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

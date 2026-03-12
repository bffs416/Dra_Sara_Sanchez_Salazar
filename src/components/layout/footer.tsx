import Link from 'next/link';
import Image from 'next/image';
import placeholderData from '@/app/lib/placeholder-images.json';

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Full-width dark background matching contact section */}
      <div className="absolute inset-0 bg-slate-900 border-t border-white/5"></div>

      <div className="relative z-10 py-20">
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
                <h2 className="text-lg font-bold tracking-tight text-white uppercase">Dra. Sara Sanchez</h2>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Especialista en medicina estética avanzada, revitalización capilar y armonización facial. Consultorio ubicado en El Poblado, Medellín, Colombia.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest mb-8 text-accent-gold">Clínica</h4>
                <ul className="space-y-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  <li><Link href="/#servicios" className="hover:text-white transition-colors">Tratamientos</Link></li>
                  <li><Link href="/#philosophy" className="hover:text-white transition-colors">Filosofía</Link></li>
                  <li><Link href="/gallery" className="hover:text-white transition-colors">Galería</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest mb-8 text-accent-gold">Páginas</h4>
                <ul className="space-y-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  <li><Link href="/talleres" className="hover:text-white transition-colors">Talleres</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/#consultas" className="hover:text-white transition-colors">Consultas</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest mb-8 text-accent-gold">Legal</h4>
                <ul className="space-y-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  <li><Link href="#" className="hover:text-white transition-colors">Privacidad</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Aviso Legal</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Condiciones</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest mb-8 text-accent-gold">Contacto</h4>
                <ul className="space-y-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="https://wa.me/573023674189" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">© {new Date().getFullYear()} Dra. Sara Sánchez Salazar — Medicina Estética. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6 opacity-40">
              <span className="text-[9px] font-bold uppercase tracking-tighter border border-white px-2 py-1 text-white">Sistema Médico Seguro</span>
              <span className="text-[9px] font-bold uppercase tracking-tighter border border-white px-2 py-1 text-white">Médica Certificada Colombia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

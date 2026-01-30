import Image from 'next/image';
import placeholderData from '@/app/lib/placeholder-images.json';

export function ActionPanel() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="bg-primary text-primary-foreground rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="flex-1 space-y-6 z-10">
          <h3 className="serif-title text-4xl font-bold leading-tight">¿Tienes dudas sobre un tratamiento?</h3>
          <p className="text-primary-foreground/80 text-lg font-light leading-relaxed">
            Sabemos que cada rostro es único. Escríbenos directamente para recibir asesoría médica personalizada sobre el mejor procedimiento para resaltar tu belleza.
          </p>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {placeholderData.actionPanel.patients.map((patient, index) => (
                <Image
                  key={index}
                  alt={`Patient ${index + 1}`}
                  className="w-12 h-12 rounded-full border-4 border-primary"
                  width={48}
                  height={48}
                  src={patient.src}
                  data-ai-hint={patient.hint}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-primary-foreground/90">+500 pacientes satisfechos</span>
          </div>
        </div>
        <div className="w-full md:w-auto z-10">
          <a href="https://wa.me/573023674189" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-white text-primary px-10 py-5 rounded-2xl font-extrabold text-lg shadow-2xl hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-3">
            <span className="material-symbols-outlined">chat</span>
            CONSULTAR POR WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}

export function VideoBanner() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 text-center">
        <span className="text-accent-gold font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block">
          Experiencia & Tecnología
        </span>
        <h2 className="serif-title text-4xl md:text-5xl text-foreground">
          Innovación Médica
        </h2>
      </div>
      <section className="relative w-full h-[40vh] min-h-[400px] overflow-hidden group">
        <div className="absolute inset-0 bg-primary/20 z-10 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60"></div>
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
          autoPlay
          muted
          loop
          playsInline
          poster="https://placehold.co/1920x1080/e9edf1/183862?text=Clinic+Ambient"
        >
          <source src="https://videos.pexels.com/video-files/3195556/3195556-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </section>
    </>
  );
}

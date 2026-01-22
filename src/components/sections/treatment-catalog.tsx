const treatments = [
    {
        icon: "psychology",
        title: "Implante Capilar",
        description: "Técnica de trasplante capilar de alta precisión para recuperar entradas y coronilla, con diseño natural de la línea frontal y densidad homogénea.",
        action: "Agendar Implante Capilar"
    },
    {
        icon: "biotech",
        title: "Diagnóstico Capilar Avanzado",
        description: "Estudio del cuero cabelludo, densitometría y planificación personalizada del número de unidades foliculares para tu caso.",
        action: "Agendar Diagnóstico"
    },
    {
        icon: "water_drop",
        title: "Ácido Hialurónico",
        description: "Reposición de volúmenes, perfilado de labios y armonización facial personalizada con productos premium.",
        action: "Agendar"
    },
    {
        icon: "bolt",
        title: "Radiofrecuencia",
        description: "Estimulación profunda de colágeno para un efecto lifting y firmeza cutánea inmediata y duradera.",
        action: "Agendar"
    },
    {
        icon: "spa",
        title: "Skinboosters",
        description: "Hidratación profunda que restaura la calidad de la piel, aportando luminosidad y suavidad extrema.",
        action: "Agendar"
    }
];


export function TreatmentCatalog() {
  return (
    <section className="bg-secondary/30 py-24" id="servicios">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h3 className="serif-title text-3xl md:text-4xl font-bold mb-4">Implante Capilar y Tratamientos Premium</h3>
            <p className="text-muted-foreground">
              Protocolos médicos especializados en implante capilar y, de forma complementaria, tratamientos faciales de alta gama para completar tu resultado estético.
            </p>
          </div>
          <div className="flex gap-2 text-foreground">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>stars</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <div key={index} className="group bg-card p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border flex flex-col h-full">
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>{treatment.icon}</span>
              </div>
              <h4 className="text-xl font-bold mb-3">{treatment.title}</h4>
              <p className="text-sm text-muted-foreground mb-8 flex-grow">{treatment.description}</p>
              <button className="w-full py-3 rounded-lg border border-primary/20 text-primary font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest">
                {treatment.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

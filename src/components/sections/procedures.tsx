"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

// ============================================================
// DATA: All services by category
// ============================================================
type Service = {
    id: string;
    title: string;
    short: string;
    desc: string;
    features: string[];
    duration: string;
    recovery: string;
    sessions: string;
    pain: string;
    subservices?: string[];
};

type CatKey = 'acido_hialuronico' | 'facial' | 'capilar' | 'corporal' | 'sueroterapia';

const categoryConfig: Record<CatKey, { label: string; icon: string; subtitle: string; color: string }> = {
    acido_hialuronico: {
        label: "Ácido Hialurónico",
        icon: "water_drop",
        subtitle: "Rellenos, hidratación y armonización facial.",
        color: "from-blue-50 to-indigo-50",
    },
    facial: {
        label: "Cuidado Facial",
        icon: "face",
        subtitle: "Rejuvenecimiento y tratamientos avanzados.",
        color: "from-rose-50 to-pink-50",
    },
    capilar: {
        label: "Soluciones Capilares",
        icon: "healing",
        subtitle: "Restauración y revitalización folicular.",
        color: "from-amber-50 to-yellow-50",
    },
    corporal: {
        label: "Remodelación Corporal",
        icon: "accessibility_new",
        subtitle: "Protocolos para esculpir tu mejor silueta.",
        color: "from-emerald-50 to-teal-50",
    },
    sueroterapia: {
        label: "Sueroterapia",
        icon: "vaccines",
        subtitle: "Terapias intravenosas para salud y bienestar.",
        color: "from-violet-50 to-purple-50",
    },
};

const categoryOrder: CatKey[] = ['acido_hialuronico', 'facial', 'capilar', 'corporal', 'sueroterapia'];

const servicesByCat: Record<CatKey, Service[]> = {
    acido_hialuronico: [
        {
            id: 'ah_labios_diseno', title: "Diseño de Labios", short: "Perfilado y volumen con ácido hialurónico.",
            desc: "Escultura de labios para mejorar volumen, definición y simetría, respetando la estructura natural y proporciones del rostro con ácido hialurónico de alta calidad.",
            features: ["Volumen Natural", "Perfilado", "Simetría", "Resultado Inmediato"],
            duration: "30 Min", recovery: "48 Horas", sessions: "1 Sesión", pain: "Bajo (Lidocaína)",
        },
        {
            id: 'ah_labios_hidratacion', title: "Hidratación de Labios", short: "Labios suaves e hidratados desde el interior.",
            desc: "Tratamiento con ácido hialurónico de baja densidad para hidratar profundamente los labios, mejorar su textura y devolverles suavidad sin alterar el volumen.",
            features: ["Hidratación Profunda", "Sin Volumen Extra", "Suavidad", "Textura Mejorada"],
            duration: "20 Min", recovery: "24 Horas", sessions: "1-2 Sesiones", pain: "Bajo",
        },
        {
            id: 'ah_labios_vitaminas', title: "Nutrición de Labios con Vitaminas", short: "Nutrición profunda sin generar volumen.",
            desc: "Cóctel de vitaminas y nutrientes aplicado en los labios para revitalizar, nutrir y mejorar la calidad de la mucosa labial. No genera volumen.",
            features: ["Sin Volumen", "Nutrición", "Revitalización", "Labios Saludables"],
            duration: "20 Min", recovery: "Inmediata", sessions: "Varía", pain: "Mínimo",
        },
        {
            id: 'ah_labios_microagujas', title: "Micro Agujas en Labios", short: "Factores de crecimiento para labios rejuvenecidos.",
            desc: "Aplicación de micro agujas con factores de crecimiento en labios para estimular la regeneración celular, mejorar la textura y promover un aspecto más joven.",
            features: ["Factores de Crecimiento", "Regeneración", "Textura Mejorada", "Rejuvenecimiento"],
            duration: "30 Min", recovery: "24-48 Horas", sessions: "3-4 Sesiones", pain: "Moderado",
        },
        {
            id: 'ah_menton', title: "Mentón", short: "Proyección y definición del mentón.",
            desc: "Perfiloplastia del mentón mediante ácido hialurónico para mejorar la proyección, armonizar el perfil facial y lograr un balance entre nariz, labios y barbilla.",
            features: ["Proyección", "Perfil Definido", "Armonía Facial", "Sin Cirugía"],
            duration: "30 Min", recovery: "24-48 Horas", sessions: "1 Sesión", pain: "Bajo",
        },
        {
            id: 'ah_pomulos', title: "Pómulos", short: "Volumen y definición para un rostro rejuvenecido.",
            desc: "Aplicación estratégica de ácido hialurónico en pómulos para restaurar volumen perdido, elevar el tercio medio facial y lograr un efecto lifting sin cirugía.",
            features: ["Volumen Restaurado", "Efecto Lifting", "Rejuvenecimiento", "Sin Cirugía"],
            duration: "30-45 Min", recovery: "24-48 Horas", sessions: "1 Sesión", pain: "Bajo",
        },
        {
            id: 'ah_arco_mandibular', title: "Arco Mandibular", short: "Contorno facial femenino y masculino.",
            desc: "Definición del contorno facial mediante ácido hialurónico en el arco mandibular. Técnica adaptada para contorno fino y delicado (femenino) o angulado y marcado (masculino).",
            features: ["Contorno Femenino", "Contorno Masculino", "Definición", "Armonización"],
            duration: "30-45 Min", recovery: "24-48 Horas", sessions: "1 Sesión", pain: "Bajo",
        },
        {
            id: 'ah_skinbooster', title: "Skin Booster / Skin Vive", short: "Alta hidratación facial profunda.",
            desc: "Inyección de ácido hialurónico libre de reticulación para una hidratación profunda y duradera de la piel del rostro. Mejora luminosidad, textura y elasticidad.",
            features: ["Hidratación Profunda", "Luminosidad", "Elasticidad", "Piel Radiante"],
            duration: "30 Min", recovery: "24 Horas", sessions: "1-3 Sesiones", pain: "Bajo",
        },
    ],
    facial: [
        {
            id: 'limpieza_facial', title: "Limpieza Facial", short: "Protocolo integral para piel sana.",
            desc: "Protocolo de varios pasos diseñado para el cuidado facial integral, eliminando impurezas, células muertas y preparando la piel para otros tratamientos.",
            features: ["Varios Pasos", "Extracción Impurezas", "Hidratación", "Renovación Celular"],
            duration: "60-90 Min", recovery: "Inmediata", sessions: "Mensual", pain: "Mínimo",
        },
        {
            id: 'porcelanizacion', title: "Porcelanización", short: "Microdermoabrasión + vitamina C.",
            desc: "Combinación de microdermoabrasión para renovar la capa superficial de la piel con aplicación de vitamina C de alta concentración para iluminar y unificar tono.",
            features: ["Microdermoabrasión", "Vitamina C", "Luminosidad", "Unificación de Tono"],
            duration: "45-60 Min", recovery: "Inmediata", sessions: "Según protocolo", pain: "Mínimo",
        },
        {
            id: 'skin_glow', title: "Skin Glow", short: "Toxina + ácido hialurónico de hidratación.",
            desc: "Protocolo que combina microdosis de toxina botulínica con ácido hialurónico de hidratación para lograr una piel con brillo natural, poros refinados y textura mejorada.",
            features: ["Toxina + Hialurónico", "Brillo Natural", "Poros Refinados", "Textura Mejorada"],
            duration: "40 Min", recovery: "24 Horas", sessions: "Según protocolo", pain: "Bajo",
        },
        {
            id: 'peeling', title: "Peeling Facial", short: "Antiacné, antimanchas, antiedad y eventos.",
            desc: "Peeling químico personalizado según la necesidad: antiacné, antimanchas, antiedad, antioxidante o protocolo de evento. Renueva la piel y mejora su textura.",
            features: ["Antiacné", "Antimanchas", "Antiedad", "Eventos Especiales"],
            duration: "30-45 Min", recovery: "2-5 Días", sessions: "Según protocolo", pain: "Leve ardor",
        },
        {
            id: 'mesoterapia_vitaminas', title: "Mesoterapia de Vitaminas", short: "Cóctel vitamínico inyectado para revitalización.",
            desc: "Inyección intradérmica de cócteles vitamínicos personalizados que nutren la piel desde adentro, mejorando hidratación, firmeza y luminosidad.",
            features: ["Vitaminas", "Nutrición Profunda", "Firmeza", "Luminosidad"],
            duration: "30 Min", recovery: "Inmediata", sessions: "4-6 Sesiones", pain: "Bajo",
        },
        {
            id: 'terapia_heel', title: "Terapia Regenerativa con Heel", short: "Medicina biorreguladora para regeneración.",
            desc: "Terapia con productos Heel que estimula los mecanismos naturales de regeneración celular para rejuvenecimiento y reparación de tejidos.",
            features: ["Biorregulación", "Regeneración Natural", "Rejuvenecimiento", "Reparación Tisular"],
            duration: "30-45 Min", recovery: "Inmediata", sessions: "Según protocolo", pain: "Bajo",
        },
        {
            id: 'rejuv_orbicular', title: "Rejuvenecimiento Orbicular", short: "Contorno de ojos: ojeras, bolsas, arrugas.",
            desc: "Protocolo de rejuvenecimiento del área periorbicular para tratar ojeras, bolsas, arrugas finas y flacidez de párpados con técnicas no invasivas.",
            features: ["Contorno de Ojos", "Anti-Ojeras", "Anti-Bolsas", "Arrugas Finas"],
            duration: "30 Min", recovery: "24-48 Horas", sessions: "3-5 Sesiones", pain: "Bajo",
        },
        {
            id: 'rejuv_perioral', title: "Rejuvenecimiento Perioral", short: "Código de barras (arrugas verticales en labios).",
            desc: "Tratamiento especializado para las arrugas verticales alrededor de la boca, conocidas como 'código de barras'. Combina técnicas para suavizar y prevenir su formación.",
            features: ["Código de Barras", "Arrugas Verticales", "Suavizado", "Prevención"],
            duration: "30 Min", recovery: "24-48 Horas", sessions: "2-3 Sesiones", pain: "Bajo",
        },
        {
            id: 'estimuladores_colageno', title: "Estimuladores de Colágeno", short: "Hidroxiapatita de calcio y ácido poliláctico.",
            desc: "Bioestimuladores inyectables (Radiesse® / Sculptra®) que activan la producción natural de colágeno. Mejoran firmeza, elasticidad y volumen de forma progresiva y duradera.",
            features: ["Hidroxiapatita de Calcio", "Ácido Poliláctico", "Firmeza Progresiva", "Colágeno Natural"],
            duration: "45 Min", recovery: "24-48 Horas", sessions: "2-3 Sesiones", pain: "Bajo",
        },
        {
            id: 'hilos_lisos', title: "Hilos Lisos", short: "Bioestimulación para mejorar calidad de piel.",
            desc: "Hilos de PDO lisos que se colocan bajo la piel para estimular la producción de colágeno y elastina, mejorando firmeza y textura sin efecto tensor.",
            features: ["Bioestimulación", "Colágeno", "Elastina", "Sin Efecto Tensor"],
            duration: "30-45 Min", recovery: "24-48 Horas", sessions: "1-2 Sesiones", pain: "Bajo",
        },
        {
            id: 'hilos_tensores', title: "Hilos Tensores", short: "Efecto lifting inmediato con hilos de sustentación.",
            desc: "Hilos de PDO con espículas o conos que proporcionan un efecto de sustentación y lifting inmediato, reposicionando tejidos caídos de forma natural.",
            features: ["Efecto Lifting", "Sustentación", "Reposición Tisular", "Resultado Inmediato"],
            duration: "45-60 Min", recovery: "3-5 Días", sessions: "1 Sesión", pain: "Moderado",
        },
        {
            id: 'toxina_botulinica', title: "Toxina Botulínica Full Face", short: "Tercio superior e inferior + aplicaciones terapéuticas.",
            desc: "Aplicación estratégica de toxina botulínica en tercio superior e inferior del rostro (Full Face) para prevenir y suavizar líneas de expresión con un enfoque natural.",
            features: ["Full Face", "Preventivo", "Natural", "Rápida Aplicación"],
            duration: "20-30 Min", recovery: "4 Horas", sessions: "Cada 4-6 meses", pain: "Bajo",
            subservices: [
                "Toxina para migraña",
                "Toxina para hiperhidrosis plantar y palmar",
                "Toxina para contracción muscular",
                "Toxina para skin quality (grasa facial, enrojecimiento y poros)",
                "Toxina para cuello (técnica Nefertiti)",
                "Toxina para bruxismo"
            ]
        },
        {
            id: 'lobuloplastia', title: "Lobuloplastia", short: "Reconstrucción del lóbulo de la oreja.",
            desc: "Procedimiento quirúrgico menor para reconstruir el lóbulo de la oreja dañado o desgarrado por aretes pesados, expansores o traumatismos.",
            features: ["Reconstrucción", "Procedimiento Menor", "Anestesia Local", "Resultado Definitivo"],
            duration: "30-45 Min", recovery: "7-10 Días", sessions: "1 Sesión", pain: "Bajo (Anestesia)",
        },
        {
            id: 'rinomodelacion', title: "Rinomodelación", short: "Remodelación nasal no invasiva.",
            desc: "Cambios estéticos nasales sin cirugía utilizando rellenos biocompatibles para rectificar perfiles, elevar puntas y mejorar la simetría nasal.",
            features: ["Sin Cirugía", "Inmediato", "Reversible", "Sin Postoperatorio"],
            duration: "30-45 Min", recovery: "24-48 Horas", sessions: "1 Sesión", pain: "Bajo",
        },
        {
            id: 'reduccion_grasa_enzimas', title: "Reducción de Grasa Facial con Enzimas", short: "Enzimas de 1ª y 2ª generación.",
            desc: "Tratamiento con enzimas lipolíticas de primera y segunda generación para reducir paquetes grasos faciales localizados.",
            features: ["Enzimas 1ª Gen", "Enzimas 2ª Gen", "Sin Cirugía", "Reducción Localizada"],
            duration: "30 Min", recovery: "2-3 Días", sessions: "2-4 Sesiones", pain: "Moderado",
        },
        {
            id: 'reseccion_lesiones', title: "Resección de Lesiones Benignas", short: "Fibromas, lunares — electrocauterio o láser ablativo.",
            desc: "Resección de lesiones benignas de piel (fibromas, lunares, verrugas) mediante electrocauterio o láser ablativo CO2 de forma segura y controlada.",
            features: ["Electrocauterio", "Láser Ablativo", "Fibromas", "Lunares"],
            duration: "15-30 Min", recovery: "5-7 Días", sessions: "1 Sesión", pain: "Bajo (Anestesia)",
        },
        {
            id: 'protocolo_hialuronidasa', title: "Protocolo de Hialuronidasa", short: "Disolución de ácido hialurónico + ecografía facial 3D.",
            desc: "Protocolo correctivo para disolver ácido hialurónico en exceso o por emergencia. Incluye ecografía facial 3D antes y después del procedimiento.",
            features: ["Ecografía 3D Pre/Post", "Emergencia", "Correctivo", "Seguridad Máxima"],
            duration: "30-60 Min", recovery: "24-48 Horas", sessions: "1-2 Sesiones", pain: "Moderado",
        },
    ],
    capilar: [
        {
            id: 'prp_capilar', title: "Plasma Rico en Plaquetas (PRP)", short: "Factores de crecimiento propios para bioestimulación.",
            desc: "Extracción y concentración de plaquetas del propio paciente para inyección en cuero cabelludo. Los factores de crecimiento estimulan la regeneración del folículo piloso.",
            features: ["Autólogo", "Factores de Crecimiento", "Regeneración Folicular", "Sin Rechazo"],
            duration: "45 Min", recovery: "Inmediata", sessions: "4-6 Sesiones", pain: "Bajo",
        },
        {
            id: 'mesoterapia_capilar', title: "Mesoterapia Capilar", short: "Medicamentos aprobados para uso capilar.",
            desc: "Inyección intradérmica de medicamentos aprobados para uso capilar que actúa directamente en el folículo para frenar la caída y estimular crecimiento.",
            features: ["Medicamentos Aprobados", "Inyección Directa", "Freno de Caída", "Crecimiento"],
            duration: "30 Min", recovery: "Inmediata", sessions: "6-10 Sesiones", pain: "Bajo",
        },
        {
            id: 'restauracion_capilar', title: "Restauración Capilar", short: "Terapia láser + vitaminas + alta frecuencia.",
            desc: "Protocolo integral que combina terapia láser capilar de baja frecuencia, vitaminas específicas y alta frecuencia para fortalecer y revitalizar el cabello.",
            features: ["Terapia Láser", "Vitaminas", "Alta Frecuencia", "Protocolo Integral"],
            duration: "45-60 Min", recovery: "Inmediata", sessions: "8-12 Sesiones", pain: "Sin dolor",
        },
        {
            id: 'implante_capilar', title: "Implante Capilar", short: "Cuero cabelludo, cejas y barba.",
            desc: "Procedimiento de trasplante de unidades foliculares para cuero cabelludo, cejas y barba. Técnicas FUE/DHI para resultados naturales, densos y definitivos.",
            features: ["Cuero Cabelludo", "Cejas", "Barba", "Técnica FUE/DHI"],
            duration: "4-8 Horas", recovery: "5-7 Días", sessions: "1 Sesión", pain: "Anestesia Local",
        },
    ],
    corporal: [
        {
            id: 'programa_obesidad', title: "Programa de Obesidad", short: "Manejo integral multidisciplinario.",
            desc: "Programa multidisciplinario que incluye medicina interna, medicina estética, cirugía plástica, nutrición y acompañamiento con deportólogo.",
            features: ["Medicina Interna", "Cirugía Plástica", "Nutrición", "Deportólogo"],
            duration: "Consulta Inicial", recovery: "Según programa", sessions: "Programa Continuo", pain: "N/A",
        },
        {
            id: 'carboxiterapia', title: "Carboxiterapia", short: "CO2 para circulación, celulitis y grasa localizada.",
            desc: "Inyección subcutánea de CO2 medicinal para mejorar la circulación local, estimular lipólisis e incrementar la oxigenación tisular.",
            features: ["Mejora Circulación", "Lipólisis", "Anti-Celulitis", "Oxigenación"],
            duration: "30 Min", recovery: "Inmediata", sessions: "8-12 Sesiones", pain: "Leve",
        },
        {
            id: 'pb_serum', title: "Terapia PB Serum", short: "Enzimas para grasa localizada en cara y cuerpo.",
            desc: "Terapia enzimática avanzada PB Serum para la eliminación de grasa localizada tanto en rostro como en cuerpo.",
            features: ["Enzimas Recombinantes", "Cara y Cuerpo", "Grasa Localizada", "No Quirúrgico"],
            duration: "30-45 Min", recovery: "2-3 Días", sessions: "3-6 Sesiones", pain: "Moderado",
        },
        {
            id: 'hidrolipoclasia', title: "Hidrolipoclasia", short: "Solución salina + ultrasonido para destrucción de grasa.",
            desc: "Técnica que combina la inyección de solución salina en el tejido graso con ultrasonido para destruir células adiposas de forma localizada.",
            features: ["Solución Salina", "Ultrasonido", "Destrucción Adiposa", "Localizada"],
            duration: "45-60 Min", recovery: "2-3 Días", sessions: "3-5 Sesiones", pain: "Moderado",
        },
        {
            id: 'hilos_tensores_corporal', title: "Hilos Tensores Corporales", short: "Lifting en glúteos y abdomen sin cirugía.",
            desc: "Hilos tensores de PDO con espículas en glúteos y abdomen para lograr un efecto de sustentación y lifting sin cirugía.",
            features: ["Glúteos", "Abdomen", "Lifting Sin Cirugía", "Estimulación Colágeno"],
            duration: "45-60 Min", recovery: "3-5 Días", sessions: "1 Sesión", pain: "Moderado",
        },
        {
            id: 'protocolo_celulitis', title: "Protocolo de Celulitis", short: "Carboxiterapia + tonificación muscular.",
            desc: "Protocolo combinado de carboxiterapia para mejorar circulación con sesiones de tonificación muscular para combatir la celulitis de forma integral.",
            features: ["Carboxiterapia", "Tonificación", "Anti-Celulitis", "Protocolo Integral"],
            duration: "60 Min", recovery: "Inmediata", sessions: "8-12 Sesiones", pain: "Leve",
        },
    ],
    sueroterapia: [
        { id: 'suero_deportiva', title: "Recuperación Deportiva", short: "Recuperación muscular y rendimiento.", desc: "Terapia intravenosa con electrolitos, aminoácidos y vitaminas para acelerar la recuperación muscular post-entrenamiento.", features: ["Electrolitos", "Aminoácidos", "Recuperación", "Rendimiento"], duration: "45-60 Min", recovery: "Inmediata", sessions: "Según necesidad", pain: "Mínimo" },
        { id: 'suero_estres', title: "Estrés", short: "Suero antiestrés para equilibrio.", desc: "Cóctel intravenoso con vitaminas del complejo B, magnesio y antioxidantes para combatir el estrés crónico.", features: ["Complejo B", "Magnesio", "Antioxidantes", "Equilibrio"], duration: "45 Min", recovery: "Inmediata", sessions: "Según necesidad", pain: "Mínimo" },
        { id: 'suero_migrana', title: "Migraña", short: "Alivio rápido por vía intravenosa.", desc: "Sueroterapia especializada para el alivio agudo de migrañas con medicamentos y nutrientes por vía intravenosa.", features: ["Alivio Rápido", "Vía IV", "Medicamentos", "Nutrientes"], duration: "45-60 Min", recovery: "Inmediata", sessions: "Según episodios", pain: "Mínimo" },
        { id: 'suero_postqx', title: "Post Quirúrgico", short: "Recuperación acelerada tras cirugía.", desc: "Suero intravenoso diseñado para acelerar la recuperación post-quirúrgica con antiinflamatorios y vitaminas.", features: ["Antiinflamatorios", "Cicatrización", "Vitaminas", "Recuperación"], duration: "60 Min", recovery: "Inmediata", sessions: "2-4 Sesiones", pain: "Mínimo" },
        { id: 'suero_metabolico', title: "Control Metabólico", short: "Regulación metabólica con nutrientes.", desc: "Terapia intravenosa con nutrientes que ayudan a regular el metabolismo y optimizar la función tiroidea.", features: ["Regulación", "Metabolismo", "Nutrientes", "Optimización"], duration: "45 Min", recovery: "Inmediata", sessions: "Según necesidad", pain: "Mínimo" },
        { id: 'suero_inmune', title: "Refuerzo Inmune", short: "Fortalecimiento del sistema inmunológico.", desc: "Cóctel intravenoso con vitamina C, zinc, selenio y otros nutrientes para fortalecer las defensas.", features: ["Vitamina C", "Zinc", "Selenio", "Defensas Naturales"], duration: "45-60 Min", recovery: "Inmediata", sessions: "Según necesidad", pain: "Mínimo" },
        { id: 'suero_detox', title: "Detox", short: "Desintoxicación y depuración.", desc: "Sueroterapia con antioxidantes y hepatoprotectores para la desintoxicación y depuración del organismo.", features: ["Antioxidantes", "Hepatoprotectores", "Depuración", "Eliminación Toxinas"], duration: "45-60 Min", recovery: "Inmediata", sessions: "Según necesidad", pain: "Mínimo" },
        { id: 'suero_vitc', title: "Megadosis de Vitamina C", short: "Altas dosis de vitamina C intravenosa.", desc: "Administración de vitamina C en megadosis por vía IV para efecto antioxidante potente y estimulación inmunitaria.", features: ["Megadosis", "Antioxidante Potente", "Estimulación Inmune", "Piel Mejorada"], duration: "60-90 Min", recovery: "Inmediata", sessions: "Según protocolo", pain: "Mínimo" },
        { id: 'suero_energia', title: "Energía / Fatiga", short: "Recarga energética contra fatiga crónica.", desc: "Suero intravenoso con complejo B, L-carnitina, coenzima Q10 y minerales para combatir la fatiga crónica.", features: ["Complejo B", "L-Carnitina", "CoQ10", "Recarga Energética"], duration: "45 Min", recovery: "Inmediata", sessions: "Según necesidad", pain: "Mínimo" },
        { id: 'suero_masculino', title: "Revitalizante Masculino", short: "Suero formulado para el hombre.", desc: "Terapia intravenosa formulada para las necesidades masculinas: energía, rendimiento, recuperación y vitalidad.", features: ["Energía", "Rendimiento", "Recuperación", "Vitalidad"], duration: "45-60 Min", recovery: "Inmediata", sessions: "Según necesidad", pain: "Mínimo" },
        { id: 'suero_femenino', title: "Revitalizante Femenino", short: "Suero formulado para la mujer.", desc: "Terapia intravenosa para las necesidades femeninas: hierro, ácido fólico, biotina, colágeno y bienestar hormonal.", features: ["Hierro", "Ácido Fólico", "Biotina", "Bienestar Hormonal"], duration: "45-60 Min", recovery: "Inmediata", sessions: "Según necesidad", pain: "Mínimo" },
        { id: 'suero_menopausia', title: "Menopausia", short: "Alivio de síntomas menopáusicos.", desc: "Sueroterapia con calcio, vitamina D, magnesio y fitoestrógenos para aliviar sofocos, fatiga, insomnio y pérdida ósea.", features: ["Calcio", "Vitamina D", "Magnesio", "Alivio Síntomas"], duration: "45-60 Min", recovery: "Inmediata", sessions: "Según necesidad", pain: "Mínimo" },
        { id: 'suero_guayabo', title: "Guayabo", short: "Recuperación rápida post-fiesta.", desc: "Suero de hidratación rápida con electrolitos, vitaminas del complejo B y antieméticos para la recuperación de la resaca.", features: ["Hidratación Rápida", "Electrolitos", "Complejo B", "Recuperación Express"], duration: "30-45 Min", recovery: "Inmediata", sessions: "Según necesidad", pain: "Mínimo" },
        { id: 'suero_antienvej', title: "Antienvejecimiento", short: "Antioxidantes potentes anti-aging.", desc: "Terapia intravenosa con glutatión, vitamina C y ácido alfa-lipoico para combatir el envejecimiento celular.", features: ["Glutatión", "Vitamina C", "Ácido Alfa-Lipoico", "Anti-Aging"], duration: "60 Min", recovery: "Inmediata", sessions: "Según protocolo", pain: "Mínimo" },
        { id: 'suero_gripal', title: "Síndrome Gripal", short: "Tratamiento IV para gripa e infecciones.", desc: "Sueroterapia con vitamina C en alta dosis, zinc, antihistamínicos y antiinflamatorios para combatir el síndrome gripal.", features: ["Vitamina C", "Zinc", "Antihistamínicos", "Antiinflamatorios"], duration: "45-60 Min", recovery: "Inmediata", sessions: "1-2 Sesiones", pain: "Mínimo" },
    ],
};

// ============================================================
// Component
// ============================================================
export function Procedures() {
    const [activeCat, setActiveCat] = useState<CatKey | null>(null);
    const [modalService, setModalService] = useState<Service | null>(null);

    const openModal = (service: Service) => {
        setModalService(service);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalService(null);
        document.body.style.overflow = '';
    };

    const toggleCategory = (catKey: CatKey) => {
        setActiveCat(prev => prev === catKey ? null : catKey);
    };

    return (
        <section className="procedures-section" id="servicios">
            <div className="blob-bg">
                <div className="blob" style={{ width: '600px', height: '600px', top: '-10%', left: '-15%', background: '#eff6ff' }}></div>
                <div className="blob" style={{ width: '500px', height: '500px', bottom: '-5%', right: '-5%', background: '#e0f2fe', animationDelay: '-3s' }}></div>
                <div className="blob" style={{ width: '300px', height: '300px', top: '40%', right: '10%', background: '#fdf2f8', animationDelay: '-5s' }}></div>
            </div>
            <div className="container mx-auto relative z-10 px-6">
                <header className="text-center mb-16">
                    <p className="font-semibold text-[var(--accent-procedures)] tracking-[5px] uppercase text-sm mb-4">Procedimientos Estéticos Médicos</p>
                    <h1 className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-slate-900">Nuestros Servicios</h1>
                </header>

                {/* ── Category Cards: each expands inline below itself ── */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {categoryOrder.map((catKey, idx) => {
                            const config = categoryConfig[catKey];
                            const count = servicesByCat[catKey].length;
                            const isActive = activeCat === catKey;

                            return (
                                <div key={catKey} className={`contents`}>
                                    {/* The card itself */}
                                    <button
                                        onClick={() => toggleCategory(catKey)}
                                        className={`group relative text-left p-8 rounded-[30px] border-2 transition-all duration-500 ease-out cursor-pointer overflow-hidden ${
                                            isActive
                                                ? 'bg-slate-900 border-slate-800 text-white shadow-2xl'
                                                : 'bg-white border-slate-100 text-slate-900 shadow-sm hover:shadow-xl hover:border-accent-gold/50 hover:-translate-y-1'
                                        }`}
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-${isActive ? '0' : '30'} transition-opacity`}></div>
                                        
                                        <div className="relative z-10">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 ${
                                                isActive
                                                    ? 'bg-accent-gold text-slate-900'
                                                    : 'bg-accent-gold/10 text-accent-gold group-hover:bg-accent-gold group-hover:text-white'
                                            }`}>
                                                <span className="material-symbols-outlined text-2xl">{config.icon}</span>
                                            </div>
                                            <h3 className="font-serif text-2xl font-bold mb-2">{config.label}</h3>
                                            <p className={`text-sm leading-relaxed mb-4 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>{config.subtitle}</p>
                                            <div className="flex items-center justify-between">
                                                <span className={`text-xs font-bold uppercase tracking-widest ${isActive ? 'text-accent-gold' : 'text-slate-400'}`}>
                                                    {count} procedimientos
                                                </span>
                                                <span className={`material-symbols-outlined text-lg transition-transform duration-300 ${isActive ? 'rotate-180 text-accent-gold' : 'text-slate-400'}`}>
                                                    expand_more
                                                </span>
                                            </div>
                                        </div>
                                    </button>

                                    {/* Inline expanded panel — spans all 3 columns right after this card */}
                                    {isActive && (
                                        <div className="col-span-1 sm:col-span-2 lg:col-span-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                            <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl overflow-hidden">
                                                {/* Header */}
                                                <div className="px-8 md:px-10 pt-8 pb-5 border-b border-slate-100 flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-accent-gold/10 rounded-xl flex items-center justify-center text-accent-gold">
                                                        <span className="material-symbols-outlined text-xl">{categoryConfig[activeCat].icon}</span>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-serif text-xl font-bold text-slate-900">{categoryConfig[activeCat].label}</h3>
                                                        <p className="text-xs text-slate-500">{servicesByCat[activeCat].length} procedimientos disponibles</p>
                                                    </div>
                                                    <button onClick={() => setActiveCat(null)} className="ml-auto w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
                                                        <span className="material-symbols-outlined text-slate-500 text-sm">close</span>
                                                    </button>
                                                </div>
                                                {/* Service list — 2 col grid for compactness */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-slate-50">
                                                    {servicesByCat[activeCat].map((service, i) => (
                                                        <div
                                                            key={service.id}
                                                            className={`group px-8 md:px-10 py-5 hover:bg-slate-50/70 transition-colors cursor-pointer flex items-center gap-4 ${
                                                                i % 2 === 0 ? 'md:border-r md:border-slate-50' : ''
                                                            } border-b border-slate-50`}
                                                            onClick={() => openModal(service)}
                                                        >
                                                            <div className="flex-1 min-w-0">
                                                                <div className="flex items-center gap-2 mb-0.5">
                                                                    <h4 className="font-bold text-base text-slate-900 group-hover:text-accent-gold transition-colors truncate">{service.title}</h4>
                                                                    {service.subservices && (
                                                                        <span className="shrink-0 text-[8px] font-black uppercase tracking-wider bg-accent-gold/10 text-accent-gold px-2 py-0.5 rounded-full">+{service.subservices.length}</span>
                                                                    )}
                                                                </div>
                                                                <p className="text-xs text-slate-400 truncate">{service.short}</p>
                                                            </div>
                                                            <span className="material-symbols-outlined text-slate-300 group-hover:text-accent-gold group-hover:translate-x-1 transition-all shrink-0 text-lg">
                                                                arrow_forward_ios
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                                {/* CTA footer */}
                                                <div className="px-8 md:px-10 py-5 bg-slate-50/50 border-t border-slate-100">
                                                    <a href={`https://wa.me/573023674189?text=${encodeURIComponent(`Hola, me interesa información sobre los procedimientos de ${categoryConfig[activeCat].label}`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent-gold font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                                                        Agendar consulta de {categoryConfig[activeCat].label}
                                                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>


            </div>

            {/* ══════ Detail Modal ══════ */}
            {modalService && (
                <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-xl flex items-center justify-center z-[1000] transition-opacity duration-300" onClick={closeModal}>
                    <div className="bg-white w-[95%] max-w-3xl rounded-[40px] relative max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
                        {/* Close button */}
                        <button onClick={closeModal} className="absolute top-6 right-6 z-50 bg-white border-none w-11 h-11 rounded-full cursor-pointer flex items-center justify-center shadow-md transition-all hover:bg-[var(--accent-procedures)] hover:text-white hover:scale-110">
                            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>

                        <div className="p-8 md:p-12 overflow-y-auto flex-grow">
                            {/* Category badge */}
                            {activeCat && (
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-gold bg-accent-gold/10 px-3 py-1 rounded-full mb-6 inline-block">
                                    {categoryConfig[activeCat].label}
                                </span>
                            )}

                            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-2">{modalService.title}</h2>

                            <div className="mt-6">
                                <h4 className="uppercase text-xs tracking-widest text-[var(--accent-procedures)] mb-3 font-bold">Procedimiento</h4>
                                <p className="text-base leading-7 text-slate-600">{modalService.desc}</p>
                            </div>

                            {/* Sub-services (for toxina) */}
                            {modalService.subservices && (
                                <div className="mt-6 bg-blue-50 border-l-4 border-[var(--accent-procedures)] p-5 rounded-r-2xl">
                                    <h5 className="mb-3 text-sm text-[var(--accent-procedures)] font-bold">Aplicaciones Especializadas</h5>
                                    <ul className="m-0 pl-4 list-disc text-sm text-slate-600 leading-7">
                                        {modalService.subservices.map((item) => <li key={item}>{item}</li>)}
                                    </ul>
                                </div>
                            )}

                            {/* Stats grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                    <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-1 font-bold">Duración</span>
                                    <strong className="text-sm text-slate-800">{modalService.duration}</strong>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                    <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-1 font-bold">Recuperación</span>
                                    <strong className="text-sm text-slate-800">{modalService.recovery}</strong>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                    <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-1 font-bold">Sesiones</span>
                                    <strong className="text-sm text-slate-800">{modalService.sessions}</strong>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                    <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-1 font-bold">Molestia</span>
                                    <strong className="text-sm text-slate-800">{modalService.pain}</strong>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="mt-8">
                                <h4 className="uppercase text-xs tracking-widest text-[var(--accent-procedures)] mb-3 font-bold">Características</h4>
                                <div className="flex flex-wrap gap-2">
                                    {modalService.features.map(f => (
                                        <span key={f} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-600">{f}</span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-10">
                                <a href={`https://wa.me/573023674189?text=${encodeURIComponent(`Hola, quiero agendar una cita para: ${modalService.title}`)}`} target="_blank" rel="noopener noreferrer" className="block w-full">
                                    <Button className="w-full bg-[var(--accent-procedures)] text-white h-14 rounded-2xl font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                                        Solicitar Consulta — {modalService.title}
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

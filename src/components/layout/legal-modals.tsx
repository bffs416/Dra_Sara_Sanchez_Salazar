'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type LegalType = 'privacy' | 'legal' | 'terms' | null;

interface LegalModalsProps {
  openType: LegalType;
  onClose: () => void;
}

export function LegalModals({ openType, onClose }: LegalModalsProps) {
  return (
    <>
      {/* Política de Privacidad */}
      <Dialog open={openType === 'privacy'} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="serif-title text-2xl text-slate-900 border-b pb-4 mb-4">Política de Privacidad</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p className="font-bold text-slate-900">1. Tratamiento de Datos Personales</p>
            <p>
              En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013, la Dra. Sara Sánchez Salazar informa que los datos personales recolectados a través de este sitio web y sus canales de atención (WhatsApp) serán tratados para: agendamiento de citas, seguimiento médico, envío de información sobre tratamientos y promociones, y cumplimiento de obligaciones legales como prestador de servicios de salud.
            </p>
            
            <p className="font-bold text-slate-900">2. Derechos del Titular</p>
            <p>
              Usted tiene derecho a conocer, actualizar, rectificar y suprimir sus datos personales, así como a revocar la autorización otorgada para el tratamiento de los mismos, salvo cuando exista una obligación legal o contractual que lo impida.
            </p>

            <p className="font-bold text-slate-900">3. Seguridad de la Información</p>
            <p>
              Contamos con medidas técnicas y administrativas para garantizar la confidencialidad de su historia clínica y datos sensibles, cumpliendo con los estándares de seguridad exigidos por el Ministerio de Salud de Colombia.
            </p>

            <p className="font-bold text-slate-900">4. Contacto para Protección de Datos</p>
            <p>Para ejercer sus derechos, puede escribir a: citas@drasarasanchez.com</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Aviso Legal */}
      <Dialog open={openType === 'legal'} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="serif-title text-2xl text-slate-900 border-b pb-4 mb-4">Aviso Legal</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p className="font-bold text-slate-900">Información del Prestador</p>
            <p>
              Dra. Sara Sánchez Salazar. Médica con especialización en Medicina Estética.
              Registro Médico vigente ante el RETHUS (Registro Único Nacional de Talento Humano en Salud).
            </p>
            
            <p className="font-bold text-slate-900">Propiedad Intelectual</p>
            <p>
              Todos los contenidos de este sitio web (textos, imágenes, videos y logos) son propiedad exclusiva de la Dra. Sara Sánchez Salazar o cuentan con la debida autorización para su uso. Queda prohibida su reproducción sin consentimiento previo.
            </p>

            <p className="font-bold text-slate-900">Exención de Responsabilidad</p>
            <p>
              La información contenida en este sitio web es de carácter informativo y educativo. No sustituye en ningún caso una valoración médica presencial. Los resultados de los procedimientos pueden variar según el tipo de paciente y el cumplimiento de las indicaciones post-tratamiento.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Términos y Condiciones */}
      <Dialog open={openType === 'terms'} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="serif-title text-2xl text-slate-900 border-b pb-4 mb-4">Términos y Condiciones</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p className="font-bold text-slate-900">1. Agendamiento de Citas</p>
            <p>
              El agendamiento se realiza formalmente a través de nuestra línea de WhatsApp. Se requiere puntualidad. Las cancelaciones deben realizarse con al menos 24 horas de antelación.
            </p>
            
            <p className="font-bold text-slate-900">2. Valoración Médica</p>
            <p>
              Todo tratamiento está sujeto a una valoración previa por parte de la Dra. Sara Sánchez para determinar la idoneidad del procedimiento según el estado de salud y expectativas del paciente.
            </p>

            <p className="font-bold text-slate-900">3. Pagos y Reembolsos</p>
            <p>
              Los precios de los tratamientos se suministran durante la consulta o por canales oficiales. Una vez iniciado el procedimiento o aplicado el producto, no se realizan reembolsos por la naturaleza del servicio médico prestado.
            </p>

            <p className="font-bold text-slate-900">4. Menores de Edad</p>
            <p>
              Los menores de edad deberán asistir acompañados por un padre o tutor legal para cualquier procedimiento o valoración.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

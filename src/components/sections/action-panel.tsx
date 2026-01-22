import Image from 'next/image';

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
              <Image alt="Patient 1" className="w-12 h-12 rounded-full border-4 border-primary" width={48} height={48} src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3RS_9yUFdlnMW5--VqUsWrPFL1gKXLxtm0jIyzMACMeqeFE1_vTU7LUwkPBD3zh6N46ZLJvAmIvcUmCAfvJxiKFUlM39bw9-NjY59eL-Kad8BW5iVNRIZpzLzkECwCxzWPX6_CDQDFOtd0syjciwGdEVlc_ytFidwBpSrOJP2Xe6OZcxrsq9ZYQLl-njwTxqgBSneScEEBp7sLPCxl-LGIeLwSAfoQZyI_yGJK_N6Im8_uQcU9XgQsiADqgvci8fY1d1WDjgN398" />
              <Image alt="Patient 2" className="w-12 h-12 rounded-full border-4 border-primary" width={48} height={48} src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHhAwyDDTrgzn9f6_AaWpAqwZNEIIpxzk6kyyNPLXB-U3vwajWQHU51YDNhtAOJ3SBJCaxthZRLnxhkpaIwbUXQ7W4AI_frIlCptAwVYHvIyJWmezLAXdKGAcWjM_Q1_dT_OqZH_0bYVWE6NpZnNnm-3_7pWAl7eIplh955mlIOEgKqGW51vMrtsldplFj-bOdQ1UY940EgSeczGjk6_bxGSdORMrZPA6NToOmEiOO7lOrzwWgfZKmwpkOB-sPf71fRe5uoDRvy6Q" />
              <Image alt="Patient 3" className="w-12 h-12 rounded-full border-4 border-primary" width={48} height={48} src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsPsLvV9g2rN_IGFIk4qrjCjg-LQUCN159NpUzMn0E5egYnglw2UEsBFQtLExnOf-LxhP8U8XMTbBC6K_bDShWoMD7U3OjERSYUqTFpimGA-0VMMotJl-lOy49ZuYR-C_G3uo3f53QOIKu-ULfBjPSJBiAyAf3SmdqVaFLJnAS8b-Q_GMUQUfLQ8k73jUr2lMWcMISl-ZDcXswNYT8Px1hsGwz80dkwXFsCNJxtKTmlev1zMeeRtmppY8xfYUmhodTJvWMVFk0Cdk" />
            </div>
            <span className="text-sm font-medium text-primary-foreground/90">+500 pacientes satisfechos</span>
          </div>
        </div>
        <div className="w-full md:w-auto z-10">
          <button className="w-full md:w-auto bg-white text-primary px-10 py-5 rounded-2xl font-extrabold text-lg shadow-2xl hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-3">
            <span className="material-symbols-outlined">chat</span>
            CONSULTAR POR WHATSAPP
          </button>
        </div>
      </div>
    </section>
  );
}

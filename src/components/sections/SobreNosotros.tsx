"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function LatamMap() {
  return (
    <svg viewBox="0 0 320 520" className="w-full max-w-xs mx-auto">
      {/* Mexico */}
      <path d="M 30,18 L 105,15 L 118,28 L 112,40 L 95,48 L 72,54 L 48,52 L 32,42 L 22,30 Z"
        fill="rgba(0,168,120,0.12)" stroke="#00A878" strokeWidth="1.5" strokeLinejoin="round"/>

      {/* Guatemala + Belize */}
      <path d="M 95,48 L 112,40 L 122,52 L 118,62 L 108,65 L 98,60 Z"
        fill="rgba(0,168,120,0.12)" stroke="#00A878" strokeWidth="1.2" strokeLinejoin="round"/>

      {/* Honduras */}
      <path d="M 108,65 L 118,62 L 128,70 L 125,80 L 112,82 L 104,75 Z"
        fill="rgba(0,168,120,0.12)" stroke="#00A878" strokeWidth="1.2" strokeLinejoin="round"/>

      {/* El Salvador + Nicaragua */}
      <path d="M 104,75 L 112,82 L 118,90 L 113,100 L 103,98 L 98,88 Z"
        fill="rgba(0,168,120,0.12)" stroke="#00A878" strokeWidth="1.2" strokeLinejoin="round"/>

      {/* Costa Rica — highlighted */}
      <path d="M 103,98 L 113,100 L 118,110 L 114,120 L 105,122 L 98,115 L 98,105 Z"
        fill="rgba(0,200,150,0.3)" stroke="#00C896" strokeWidth="2.5" strokeLinejoin="round"/>

      {/* Panama */}
      <path d="M 105,122 L 114,120 L 128,125 L 135,130 L 128,136 L 115,134 L 106,130 Z"
        fill="rgba(0,168,120,0.12)" stroke="#00A878" strokeWidth="1.2" strokeLinejoin="round"/>

      {/* Colombia + Venezuela */}
      <path d="M 115,134 L 135,130 L 170,128 L 200,135 L 215,150 L 210,165 L 190,170 L 165,168 L 140,160 L 118,152 L 112,140 Z"
        fill="rgba(0,168,120,0.08)" stroke="#00A878" strokeWidth="1.5" strokeLinejoin="round"/>

      {/* Ecuador */}
      <path d="M 112,152 L 135,160 L 138,178 L 125,188 L 108,182 L 105,168 Z"
        fill="rgba(0,168,120,0.08)" stroke="#00A878" strokeWidth="1.3" strokeLinejoin="round"/>

      {/* Peru */}
      <path d="M 108,182 L 138,178 L 148,195 L 152,225 L 145,248 L 128,255 L 108,245 L 100,222 L 102,200 Z"
        fill="rgba(0,168,120,0.08)" stroke="#00A878" strokeWidth="1.3" strokeLinejoin="round"/>

      {/* Brazil */}
      <path d="M 148,195 L 165,168 L 200,160 L 238,168 L 262,192 L 270,222 L 268,258 L 255,285 L 240,308 L 218,328 L 195,342 L 175,350 L 158,345 L 148,330 L 145,310 L 148,285 L 152,258 L 152,225 Z"
        fill="rgba(0,168,120,0.08)" stroke="#00A878" strokeWidth="1.5" strokeLinejoin="round"/>

      {/* Bolivia — highlighted */}
      <path d="M 145,248 L 152,258 L 158,275 L 155,292 L 140,298 L 125,290 L 120,272 L 125,255 L 138,248 Z"
        fill="rgba(0,200,150,0.3)" stroke="#00C896" strokeWidth="2.5" strokeLinejoin="round"/>

      {/* Paraguay */}
      <path d="M 155,292 L 175,290 L 185,308 L 178,322 L 162,325 L 148,315 L 148,300 Z"
        fill="rgba(0,168,120,0.08)" stroke="#00A878" strokeWidth="1.2" strokeLinejoin="round"/>

      {/* Chile */}
      <path d="M 120,272 L 138,275 L 145,305 L 148,335 L 145,368 L 138,400 L 128,428 L 118,455 L 108,470 L 100,460 L 102,430 L 105,398 L 108,365 L 110,332 L 112,298 Z"
        fill="rgba(0,168,120,0.08)" stroke="#00A878" strokeWidth="1.3" strokeLinejoin="round"/>

      {/* Argentina + Uruguay */}
      <path d="M 140,298 L 158,295 L 178,322 L 192,345 L 198,375 L 195,408 L 182,438 L 162,460 L 145,468 L 130,460 L 120,445 L 118,415 L 120,380 L 125,348 L 130,318 Z"
        fill="rgba(0,168,120,0.08)" stroke="#00A878" strokeWidth="1.5" strokeLinejoin="round"/>

      {/* Costa Rica dot + label */}
      <circle cx="108" cy="110" r="7" fill="#00A878" opacity="0.9"/>
      <circle cx="108" cy="110" r="3.5" fill="white" opacity="0.9"/>
      <rect x="118" y="103" width="88" height="16" rx="3" fill="rgba(13,27,42,0.82)"/>
      <text x="122" y="114" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Costa Rica 🇨🇷</text>

      {/* Bolivia dot + label */}
      <circle cx="138" cy="272" r="7" fill="#00A878" opacity="0.9"/>
      <circle cx="138" cy="272" r="3.5" fill="white" opacity="0.9"/>
      <rect x="148" y="265" width="74" height="16" rx="3" fill="rgba(13,27,42,0.82)"/>
      <text x="152" y="276" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Bolivia 🇧🇴</text>

      {/* Other country dots */}
      <circle cx="185" cy="150" r="3.5" fill="#00A878" opacity="0.4"/>
      <circle cx="118" cy="165" r="3.5" fill="#00A878" opacity="0.4"/>
      <circle cx="235" cy="215" r="3.5" fill="#00A878" opacity="0.4"/>
      <circle cx="165" cy="315" r="3.5" fill="#00A878" opacity="0.4"/>
      <circle cx="150" cy="385" r="3.5" fill="#00A878" opacity="0.4"/>
    </svg>
  );
}

export default function SobreNosotros() {
  return (
    <section
      id="sobre-nosotros"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#006B52] mb-3 block">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#16294F] mb-6">
              Expertos en Salud y Seguridad Ocupacional
            </h2>
            <p className="text-[#4A5568] leading-relaxed text-lg">
              Saetas Prevención es una empresa de consultoría especializada en Salud y Seguridad
              Ocupacional con presencia en Bolivia y Costa Rica.
              Nuestro equipo de profesionales certificados ayuda a las organizaciones a proteger
              a sus colaboradores, cumplir con la normativa legal vigente y construir una cultura
              de prevención sólida y sostenible.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-lg p-8 text-center"
            style={{ backgroundColor: "#16294F" }}
          >
            <Image
              src="/logo.webp"
              alt="Saetas Prevención"
              width={72}
              height={72}
              className="bg-white rounded-full p-1 mx-auto mb-4"
            />
            <h3 className="text-white text-xl font-bold mb-2">Saetas Prevención</h3>
            <p className="text-white/60 text-sm mb-6">
              Prevenimos riesgos. Protegemos vidas.
            </p>
            <p className="text-[#00C896] text-sm font-semibold mb-4">Bolivia · Costa Rica</p>
            <LatamMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

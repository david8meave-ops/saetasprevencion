"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-[100px]">
      <div className="relative h-[440px] lg:h-[540px] w-full overflow-hidden">
        <Image
          src="/industria/industria-2.webp"
          alt="Supervisión de seguridad en planta industrial"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(13,25,48,0.88) 0%, rgba(13,25,48,0.55) 55%, rgba(13,25,48,0.25) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00C896] mb-4 block">
                Consultoría SYSO — Bolivia · Costa Rica
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-[1.08]">
                Prevenimos riesgos.{" "}
                <span className="text-[#00C896]">Protegemos vidas.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/85 mb-8">
                Consultoría profesional en Salud y Seguridad Ocupacional
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/contacto"
                  className="px-6 py-3 rounded-md font-semibold text-base text-white text-center transition-colors hover:bg-[#00553F]"
                  style={{ backgroundColor: "#006B52" }}
                >
                  Solicitar asesoría
                </a>
                <a
                  href="#servicios"
                  className="px-6 py-3 rounded-md font-semibold text-base text-center text-white border-2 border-white/70 transition-colors hover:bg-white hover:text-[#16294F]"
                >
                  Conocer servicios
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

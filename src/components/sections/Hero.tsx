"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#006B52] mb-4 block">
              Consultoría SYSO — Bolivia · Costa Rica
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#16294F] mb-6 leading-[1.1]">
              Prevenimos riesgos.{" "}
              <span className="text-[#006B52]">Protegemos vidas.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#4A5568] mb-8 max-w-xl">
              Consultoría profesional en Salud y Seguridad Ocupacional
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#servicios"
                className="px-6 py-3 rounded-md font-semibold text-base text-white text-center transition-colors hover:bg-[#00553F]"
                style={{ backgroundColor: "#006B52" }}
              >
                Conocer servicios
              </a>
              <a
                href="#contacto"
                className="px-6 py-3 rounded-md font-semibold text-base text-center text-[#16294F] border-2 border-[#16294F] transition-colors hover:bg-[#16294F] hover:text-white"
              >
                Contáctanos
              </a>
            </div>
          </motion.div>

          {/* Right: industrial photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/industria/industria-1.webp"
                alt="Trabajador industrial con casco de seguridad"
                width={900}
                height={600}
                priority
                className="w-full h-[320px] lg:h-[440px] object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 -left-4 hidden lg:block w-32 h-32 rounded-lg -z-10"
              style={{ backgroundColor: "#006B52" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

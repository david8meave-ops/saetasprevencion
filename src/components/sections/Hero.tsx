"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const latamFlags = [
  { flag: "🇧🇴", country: "Bolivia" },
  { flag: "🇨🇷", country: "Costa Rica" },
  { flag: "🇨🇴", country: "Colombia" },
  { flag: "🇵🇪", country: "Perú" },
  { flag: "🇪🇨", country: "Ecuador" },
  { flag: "🇬🇹", country: "Guatemala" },
  { flag: "🇭🇳", country: "Honduras" },
  { flag: "🇵🇦", country: "Panamá" },
  { flag: "🇲🇽", country: "México" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{ backgroundColor: "#0D1B2A" }}
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              border: "2px solid #00A878",
              left: `${(i * 17) % 90}%`,
              top: `${(i * 23) % 80}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Floating logo */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 inline-block"
        >
          <div
            className="w-32 h-32 mx-auto relative"
            style={{ filter: "drop-shadow(0 0 30px rgba(0, 168, 120, 0.4))" }}
          >
            <Image
              src="/logo.svg"
              alt="Saetas Prevención"
              width={128}
              height={128}
              className="bg-white rounded-full p-1"
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Prevenimos riesgos.{" "}
          <span style={{ color: "#00A878" }}>Protegemos vidas.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto"
          style={{ color: "#00C896" }}
        >
          Consultoría profesional en Salud y Seguridad Ocupacional para toda
          Latinoamérica
        </motion.p>

        {/* LATAM flags strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {latamFlags.map((item, i) => (
            <motion.div
              key={item.country}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.08 }}
              title={item.country}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-2xl sm:text-3xl">{item.flag}</span>
              <span className="text-xs text-[#A0AEC0] hidden sm:block">{item.country}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#servicios"
            className="px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: "#00A878",
              color: "#FFFFFF",
              boxShadow: "0 4px 20px rgba(0, 168, 120, 0.35)",
            }}
          >
            Conocer Servicios
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 rounded-full font-bold text-base text-white transition-all hover:scale-105 hover:bg-[#00A878] hover:border-[#00A878]"
            style={{
              border: "2px solid #00A878",
            }}
          >
            Contáctanos
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#sobre-nosotros"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 text-[#00A878]"
        aria-label="Desplazar hacia abajo"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}

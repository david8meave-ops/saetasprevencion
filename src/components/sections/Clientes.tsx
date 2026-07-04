"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Lista de clientes mostrados en la marquesina.
// PENDIENTE: reemplazar por la lista real de clientes de Saetas — nombre + logo
// autorizado en /public/clientes/ (ej: { name: "Empresa X", logo: "/clientes/empresa-x.png" }).
// Mientras tanto se muestran los sectores atendidos; nunca inventar clientes.
const roster: { name: string; logo?: string }[] = [
  { name: "Industria" },
  { name: "Minería" },
  { name: "Construcción" },
  { name: "Retail" },
  { name: "Banca" },
  { name: "Logística" },
  { name: "Energía" },
  { name: "Manufactura" },
  { name: "Agroindustria" },
  { name: "Salud" },
];

// Duplicado para que el loop de la marquesina sea continuo.
const track = [...roster, ...roster];

export default function Clientes() {
  return (
    <section
      id="clientes"
      className="relative overflow-hidden py-20"
      style={{ backgroundColor: "#0D1B2A" }}
    >
      {/* Glow radial de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 10%, rgba(0,168,120,0.16), transparent 60%), radial-gradient(50% 40% at 90% 90%, rgba(0,168,120,0.10), transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#1A3550]/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#00C896] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00A878] shadow-[0_0_12px_#00A878]" />
            Clientes Felices
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-white">
            Empresas que <span className="text-[#00C896]">protegen</span> a su gente con Saetas
          </h2>
          <p className="mt-4 text-lg text-[#A0AEC0]">
            Más de 50 organizaciones en Latinoamérica confían en nuestra consultoría SYSO.
          </p>
        </motion.div>

        {/* Marquesina */}
        <div
          className="relative mt-14 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee py-2 hover:[animation-play-state:paused]">
            {track.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                title={c.name}
                className="group mr-6 flex h-24 w-52 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#1A3550]/60 px-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00A878]/40 hover:bg-[#1A3550]"
              >
                {c.logo ? (
                  <Image
                    src={c.logo}
                    alt={`Logo de ${c.name}`}
                    width={160}
                    height={48}
                    className="max-h-12 w-auto max-w-full object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                ) : (
                  <span className="text-sm font-semibold text-[#A0AEC0] transition-colors duration-300 group-hover:text-white">
                    {c.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#A0AEC0]">
          Presencia en toda Latinoamérica — Bolivia · Costa Rica · LATAM
        </p>
      </div>
    </section>
  );
}

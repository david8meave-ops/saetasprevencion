"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Clientes reales de Saetas (fuente: beacons.ai/saeta_, confirmados por el propietario).
// Logos en /public/clientes/ (~120px de alto, WebP).
const roster: { name: string; logo?: string }[] = [
  { name: "BBVA Previsión AFP", logo: "/clientes/bbva-prevision.webp" },
  { name: "Hipermaxi", logo: "/clientes/hipermaxi.webp" },
  { name: "Irupana", logo: "/clientes/irupana.webp" },
  { name: "Konrad Adenauer Stiftung", logo: "/clientes/konrad-adenauer.webp" },
  { name: "Trans. Copacabana S.A.", logo: "/clientes/trans-copacabana.webp" },
  { name: "Selecta", logo: "/clientes/selecta.webp" },
  { name: "Naturex", logo: "/clientes/naturex.webp" },
  { name: "Todo Fácil Supermercados", logo: "/clientes/todo-facil.webp" },
  { name: "Phoenix Mining", logo: "/clientes/phoenix-mining.webp" },
  { name: "Xerobol", logo: "/clientes/xerobol.webp" },
  { name: "Levcorp", logo: "/clientes/levcorp.webp" },
  { name: "Grupo Larcos Industrial Ltda.", logo: "/clientes/grupo-larcos.webp" },
  { name: "EP&E", logo: "/clientes/epe.webp" },
  { name: "Eoclibol S.R.L.", logo: "/clientes/eoclibol.webp" },
  { name: "Perno Centro", logo: "/clientes/perno-centro.webp" },
  { name: "Teximper-Bol", logo: "/clientes/teximper-bol.webp" },
  { name: "RIBB", logo: "/clientes/ribb.webp" },
  { name: "ASCINALSS", logo: "/clientes/ascinalss.webp" },
  { name: "Escuela Europea de Negocios", logo: "/clientes/escuela-europea.webp" },
  { name: "Pueblo Diferente", logo: "/clientes/pueblo-diferente.webp" },
  { name: "Casa Argentina", logo: "/clientes/casa-argentina.webp" },
  { name: "Import Chinrepuestos", logo: "/clientes/chinrepuestos.webp" },
  { name: "Toyossan Auto Ltda.", logo: "/clientes/toyossan.webp" },
  { name: "Cuba Rent a Car S.R.L.", logo: "/clientes/cuba-rent-a-car.webp" },
  { name: "Ciclik", logo: "/clientes/ciclik.webp" },
  { name: "Café Ciudad", logo: "/clientes/cafe-ciudad.webp" },
  { name: "Pha Yawi Restaurante", logo: "/clientes/pha-yawi.webp" },
  { name: "Sabor Gaucho", logo: "/clientes/sabor-gaucho.webp" },
  { name: "Cevichería Mi Perú", logo: "/clientes/mi-peru.webp" },
  { name: "Hotel Segovia II", logo: "/clientes/hotel-segovia.webp" },
  { name: "Twiggy Perfumería", logo: "/clientes/twiggy.webp" },
  { name: "Kiltros Clínica Veterinaria", logo: "/clientes/kiltros.webp" },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Empresas que <span className="text-[#00C896]">protegen</span> a su gente con Saetas
          </h2>
          <p className="mt-4 text-lg text-[#A0AEC0]">
            Más de 50 organizaciones confían en Saetas para transformar el cumplimiento en ventaja competitiva.
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
                className="group mr-6 flex h-24 w-52 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white px-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A878]/60"
              >
                {c.logo ? (
                  <Image
                    src={c.logo}
                    alt={`Logo de ${c.name}`}
                    width={160}
                    height={48}
                    className="max-h-14 w-auto max-w-full object-contain opacity-85 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
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
          + industria, minería, banca, retail, gastronomía, educación y logística
        </p>
      </div>
    </section>
  );
}

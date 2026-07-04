"use client";
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
  { name: "Hoteles Segovia", logo: "/clientes/hotel-segovia.webp" },
  { name: "Twiggy Perfumería", logo: "/clientes/twiggy.webp" },
  { name: "Kiltros Clínica Veterinaria", logo: "/clientes/kiltros.webp" },
  { name: "Automóvil Club Boliviano", logo: "/clientes/automovil-club.webp" },
  { name: "Club Alemán", logo: "/clientes/club-aleman.webp" },
  { name: "Elite Brands", logo: "/clientes/elite-brands.webp" },
  { name: "Bionova", logo: "/clientes/bionova.webp" },
  { name: "Top Service", logo: "/clientes/top-service.webp" },
  { name: "Vida Sana", logo: "/clientes/vida-sana.webp" },
  { name: "Mi Chola Restaurante", logo: "/clientes/mi-chola.webp" },
  { name: "Macabeo Pastelería", logo: "/clientes/macabeo.webp" },
  { name: "El Asador", logo: "/clientes/el-asador.webp" },
  { name: "Sillpich's", logo: "/clientes/sillpichs.webp" },
  { name: "Laboratorio Torres", logo: "/clientes/laboratorio-torres.webp" },
  { name: "Manti Ingeniería Ltda.", logo: "/clientes/manti-ingenieria.webp" },
  // Pendientes de logo (fuera del reel hasta tener el archivo):
  // Eirene, Minera D'Cobre S.A., Constructora Patrias,
  // Constructora Torre Nueva, Asociación Accidental Triunfo.
];

// Duplicado para que el loop de la marquesina sea continuo.
const track = [...roster, ...roster];

export default function Clientes() {
  return (
    <section id="clientes" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#006B52] mb-3 block">
            Nuestros Clientes
          </span>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            Más de <span className="font-bold text-[#16294F]">50 organizaciones</span> confían
            en Saetas para transformar el cumplimiento en ventaja competitiva
          </p>
        </div>

        {/* Marquesina */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee py-1 hover:[animation-play-state:paused]">
            {track.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                title={c.name}
                className="group mr-5 flex h-[104px] w-48 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white px-5 transition-all duration-300 hover:border-[#006B52]/50 hover:shadow-sm"
              >
                {c.logo ? (
                  <Image
                    src={c.logo}
                    alt={`Logo de ${c.name}`}
                    width={160}
                    height={58}
                    className="max-h-[58px] w-auto max-w-full object-contain opacity-85 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                ) : (
                  <span className="text-sm font-semibold text-[#4A5568]">{c.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

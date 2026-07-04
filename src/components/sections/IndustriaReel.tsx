"use client";
import Image from "next/image";

// Fotografías industriales de muestra (Unsplash, licencia libre).
// Para usar fotos propias: reemplazar los archivos en /public/industria/
// manteniendo los nombres, o actualizar esta lista.
const photos = [
  { src: "/industria/industria-1.webp", alt: "Trabajador con casco de seguridad" },
  { src: "/industria/industria-2.webp", alt: "Supervisión en planta industrial" },
  { src: "/industria/industria-3.webp", alt: "Equipo de protección personal" },
  { src: "/industria/industria-4.webp", alt: "Inspección de seguridad industrial" },
  { src: "/industria/industria-5.webp", alt: "Cascos de seguridad" },
  { src: "/industria/industria-6.webp", alt: "Trabajo en instalaciones industriales" },
  { src: "/industria/industria-7.webp", alt: "Personal técnico en terreno" },
  { src: "/industria/industria-8.webp", alt: "Operaciones con equipo de seguridad" },
];

const track = [...photos, ...photos];

export default function IndustriaReel() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#006B52] mb-3 block">
            Seguridad en el terreno
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#16294F]">
            Trabajamos donde están los riesgos
          </h2>
        </div>
      </div>

      {/* Marquesina de fotos — ancho completo */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee py-2 hover:[animation-play-state:paused]">
          {track.map((p, i) => (
            <div
              key={`${p.src}-${i}`}
              className="mr-5 h-56 w-80 sm:h-64 sm:w-96 shrink-0 overflow-hidden rounded-lg"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={900}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

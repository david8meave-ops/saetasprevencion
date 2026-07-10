import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import GaleriaReel from "@/components/sections/GaleriaReel";
import { casosPublicados, getCaso } from "@/lib/casos";

export function generateStaticParams() {
  return casosPublicados.map((c) => ({ slug: c.slug }));
}

// Los casos con publicado:false no generan ruta (404 hasta que se publiquen).
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caso = getCaso(slug);
  if (!caso) return {};
  return {
    title: `${caso.tituloCorto} | Saetas Prevención`,
    description: caso.excerpt,
    openGraph: {
      title: caso.titulo,
      description: caso.excerpt,
      images: caso.fotos > 0 ? [{ url: `/casos/${caso.slug}/1.webp` }] : undefined,
    },
  };
}

export default async function CasoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caso = getCaso(slug);
  if (!caso || !caso.publicado) notFound();

  const galeria = Array.from({ length: caso.fotos }, (_, i) => i + 1);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Banner con foto de portada */}
      <section className="pt-[100px]">
        <div className="relative h-[320px] lg:h-[420px] w-full overflow-hidden">
          {caso.fotos > 0 && (
            <Image
              src={`/casos/${caso.slug}/1.webp`}
              alt={caso.tituloCorto}
              fill
              priority
              className="object-cover"
            />
          )}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, rgba(13,25,48,0.85) 0%, rgba(13,25,48,0.45) 45%, rgba(13,25,48,0.25) 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-end pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full bg-[#00C896] text-[#16294F] mb-3">
                {caso.tag}
              </span>
              <h1 className="max-w-3xl text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                {caso.titulo}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Cuerpo del artículo */}
      <article className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#trabajos"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#006B52] hover:gap-2.5 transition-all mb-8"
          >
            <ArrowLeft size={15} /> Trabajos recientes
          </Link>

          {caso.cuerpo.map((b, i) => {
            if (b.t === "h")
              return (
                <h2 key={i} className="text-xl font-bold text-[#16294F] mt-10 mb-4">
                  {b.v}
                </h2>
              );
            if (b.t === "ul")
              return (
                <ul key={i} className="space-y-2.5 my-5">
                  {b.v.map((item, j) => (
                    <li key={j} className="flex gap-3 text-[#4A5568] leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#006B52]" />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            return (
              <p key={i} className="text-[#4A5568] leading-relaxed text-lg mb-5">
                {b.v}
              </p>
            );
          })}
        </div>

        {/* Galería — reel infinito */}
        {caso.fotos > 1 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
            <h2 className="text-xl font-bold text-[#16294F] mb-6">Galería</h2>
            <GaleriaReel slug={caso.slug} fotos={galeria.slice(1)} />
          </div>
        )}
      </article>

      {/* CTA */}
      <section className="py-14" style={{ backgroundColor: "#F4F6F8" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#16294F] mb-3">
            ¿Tu organización enfrenta retos similares?
          </h2>
          <p className="text-[#4A5568] mb-6">
            Cuéntanos tu situación y te proponemos un plan de acción conforme a la normativa
            de tu país.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white transition-colors hover:bg-[#00553F]"
            style={{ backgroundColor: "#006B52" }}
          >
            Solicitar asesoría <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}

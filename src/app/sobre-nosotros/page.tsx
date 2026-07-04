import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import AcercaDe from "@/components/sections/AcercaDe";
import ContactoInfo from "@/components/sections/ContactoInfo";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Saetas Prevención",
  description:
    "Conoce a Saetas Prevención: consultoría en Salud y Seguridad Ocupacional con presencia en Bolivia y Costa Rica.",
};

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Banner */}
      <section className="pt-[100px]">
        <div className="relative h-[360px] lg:h-[440px] w-full overflow-hidden">
          <Image
            src="/industria/industria-7.webp"
            alt="Personal técnico en terreno industrial"
            fill
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(13,25,48,0.85) 0%, rgba(13,25,48,0.5) 60%, rgba(13,25,48,0.2) 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00C896] mb-4 block">
                  Sobre Nosotros
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1]">
                  Negocios seguros son negocios que{" "}
                  <span className="text-[#00C896]">perduran</span>.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AcercaDe />
      <ContactoInfo />

      <Footer />
      <FloatingActions />
    </main>
  );
}

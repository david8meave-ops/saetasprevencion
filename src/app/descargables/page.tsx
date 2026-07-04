import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import Descargables from "@/components/sections/Descargables";
import ComingSoonBanner from "@/components/ui/ComingSoonBanner";

export const metadata: Metadata = {
  title: "Descargables SYSO | Saetas Prevención",
  description:
    "Recursos y plantillas descargables de Salud y Seguridad Ocupacional — próximamente disponibles.",
};

export default function DescargablesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ComingSoonBanner message="Estamos preparando los recursos descargables. Muy pronto estarán disponibles." />
      <Descargables />
      <Footer />
      <FloatingActions />
    </main>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import IAparaSYSO from "@/components/sections/IAparaSYSO";
import ComingSoonBanner from "@/components/ui/ComingSoonBanner";

export const metadata: Metadata = {
  title: "IA para SYSO | Saetas Prevención",
  description:
    "Asistente de inteligencia artificial especializado en Salud y Seguridad Ocupacional — próximamente disponible.",
};

export default function IaSysoPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ComingSoonBanner message="Nuestro asistente de IA especializado en SYSO está en fase de pruebas. Muy pronto estará disponible." />
      <IAparaSYSO />
      <Footer />
      <FloatingActions />
    </main>
  );
}

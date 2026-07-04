import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import Contactanos from "@/components/sections/Contactanos";

export const metadata: Metadata = {
  title: "Contáctanos | Saetas Prevención",
  description:
    "Solicita asesoría en Salud y Seguridad Ocupacional — Bolivia y Costa Rica. Respondemos en menos de 24 horas.",
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-[100px]">
        <Contactanos />
      </div>
      <Footer />
      <FloatingActions />
    </main>
  );
}

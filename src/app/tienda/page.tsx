import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import TiendaEnLinea from "@/components/sections/TiendaEnLinea";
import CartSidebar from "@/components/ui/CartSidebar";
import ComingSoonBanner from "@/components/ui/ComingSoonBanner";

export const metadata: Metadata = {
  title: "Tienda de Seguridad Industrial | Saetas Prevención",
  description:
    "Tienda en línea de productos de seguridad industrial — próximamente disponible.",
};

export default function TiendaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ComingSoonBanner message="Nuestra tienda en línea está en construcción. Muy pronto podrás comprar aquí." />
      <TiendaEnLinea />
      <Footer />
      <FloatingActions />
      <CartSidebar />
    </main>
  );
}

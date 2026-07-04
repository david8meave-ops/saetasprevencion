"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import Hero from "@/components/sections/Hero";
import SobreNosotros from "@/components/sections/SobreNosotros";
import Clientes from "@/components/sections/Clientes";
import Servicios from "@/components/sections/Servicios";
import Descargables from "@/components/sections/Descargables";
import TiendaEnLinea from "@/components/sections/TiendaEnLinea";
import IAparaSYSO from "@/components/sections/IAparaSYSO";
import Contactanos from "@/components/sections/Contactanos";
import CookieBanner from "@/components/ui/CookieBanner";
import CartSidebar from "@/components/ui/CartSidebar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SobreNosotros />
      <Clientes />
      <Servicios />
      <Descargables />
      <TiendaEnLinea />
      <IAparaSYSO />
      <Contactanos />
      <Footer />
      <FloatingActions />
      <CartSidebar />
      <CookieBanner />
    </main>
  );
}

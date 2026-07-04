"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import Hero from "@/components/sections/Hero";
import SobreNosotros from "@/components/sections/SobreNosotros";
import Clientes from "@/components/sections/Clientes";
import Servicios from "@/components/sections/Servicios";
import Contactanos from "@/components/sections/Contactanos";
import CookieBanner from "@/components/ui/CookieBanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SobreNosotros />
      <Clientes />
      <Servicios />
      <Contactanos />
      <Footer />
      <FloatingActions />
      <CookieBanner />
    </main>
  );
}

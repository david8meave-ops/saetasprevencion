"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import Hero from "@/components/sections/Hero";
import ServiciosRecientes from "@/components/sections/ServiciosRecientes";
import Servicios from "@/components/sections/Servicios";
import Clientes from "@/components/sections/Clientes";
import CtaBand from "@/components/sections/CtaBand";
import CookieBanner from "@/components/ui/CookieBanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServiciosRecientes />
      <Servicios />
      <Clientes />
      <CtaBand />
      <Footer />
      <FloatingActions />
      <CookieBanner />
    </main>
  );
}

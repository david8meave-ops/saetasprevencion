"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import Hero from "@/components/sections/Hero";
import Clientes from "@/components/sections/Clientes";
import Servicios from "@/components/sections/Servicios";
import IndustriaReel from "@/components/sections/IndustriaReel";
import CtaBand from "@/components/sections/CtaBand";
import Contactanos from "@/components/sections/Contactanos";
import CookieBanner from "@/components/ui/CookieBanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Clientes />
      <Servicios />
      <IndustriaReel />
      <CtaBand />
      <Contactanos />
      <Footer />
      <FloatingActions />
      <CookieBanner />
    </main>
  );
}

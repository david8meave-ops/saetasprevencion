"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Descargables", href: "/descargables", soon: true },
  { label: "Tienda en Línea", href: "/tienda", soon: true },
  { label: "IA para SYSO", href: "/ia-syso", soon: true },
];

const phones = [
  { country: "Bolivia", number: "59160547193", display: "+591 60547193" },
  { country: "Bolivia", number: "59175758622", display: "+591 75758622" },
  { country: "Costa Rica", number: "50670844241", display: "+506 70844241" },
  { country: "Costa Rica", number: "50670387373", display: "+506 70387373" },
];

// Rota los 4 números de WhatsApp en el mismo espacio de la utility bar.
// Se pausa al pasar el cursor y queda estático si el usuario prefiere menos movimiento.
function PhoneRotator() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % phones.length), 4000);
    return () => clearInterval(t);
  }, [paused, reducedMotion]);

  const p = phones[idx];

  return (
    <div
      className="relative h-9 w-[220px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.a
          key={idx}
          initial={reducedMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          href={`https://wa.me/${p.number}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center gap-1.5 hover:text-[#00C896] transition-colors whitespace-nowrap"
        >
          <Phone size={12} /> {p.country} {p.display}
        </motion.a>
      </AnimatePresence>
    </div>
  );
}

function SoonBadge() {
  return (
    <span className="ml-1.5 align-middle text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-[#F5C518] text-[#16294F]">
      Pronto
    </span>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility bar */}
      <div style={{ backgroundColor: "#16294F" }} className="text-white/90 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
          <PhoneRotator />
          <a
            href="mailto:info@saetasprevencion.com"
            className="hidden md:flex items-center gap-1.5 hover:text-[#00C896] transition-colors whitespace-nowrap"
          >
            <Mail size={12} /> info@saetasprevencion.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <Image src="/logo.webp" alt="Saetas Prevención" width={44} height={44} />
              <span className="text-[#16294F] font-bold text-lg hidden sm:block group-hover:text-[#006B52] transition-colors">
                Saetas Prevención
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#4A5568] hover:text-[#006B52] transition-colors text-sm font-medium"
                >
                  {link.label}
                  {link.soon && <SoonBadge />}
                </a>
              ))}
            </div>

            {/* Right CTA */}
            <div className="flex items-center gap-3">
              <a
                href="/contacto"
                className="hidden sm:inline-block px-4 py-2 rounded-md text-sm font-semibold text-white transition-colors hover:bg-[#00553F]"
                style={{ backgroundColor: "#006B52" }}
              >
                Solicitar asesoría
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-[#16294F] hover:text-[#006B52] transition-colors"
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 overflow-hidden bg-white"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-[#4A5568] hover:text-[#006B52] transition-colors text-sm font-medium"
                  >
                    {link.label}
                    {link.soon && <SoonBadge />}
                  </a>
                ))}
                <a
                  href="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 inline-block px-4 py-2 rounded-md text-sm font-semibold text-white"
                  style={{ backgroundColor: "#006B52" }}
                >
                  Solicitar asesoría
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

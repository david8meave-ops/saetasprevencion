"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Sobre Nosotros", href: "/#sobre-nosotros" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Descargables", href: "/descargables", soon: true },
  { label: "Tienda en Línea", href: "/tienda", soon: true },
  { label: "IA para SYSO", href: "/ia-syso", soon: true },
  { label: "Contáctanos", href: "/#contacto" },
];

function SoonBadge() {
  return (
    <span className="ml-1.5 align-middle text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-[#F5C518] text-[#0D1B2A]">
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
      style={{
        backgroundColor: "#0D1B2A",
        borderBottom: "1px solid rgba(0, 168, 120, 0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.svg"
              alt="Saetas Prevención"
              width={44}
              height={44}
            />
            <span className="text-white font-bold text-lg hidden sm:block group-hover:text-[#00A878] transition-colors">
              Saetas Prevención
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#A0AEC0] hover:text-[#00A878] transition-colors text-sm font-medium"
              >
                {link.label}
                {link.soon && <SoonBadge />}
              </a>
            ))}
          </div>

          {/* Right CTAs */}
          <div className="flex items-center gap-2">
            {/* WhatsApp Bolivia */}
            <a
              href="https://wa.me/59160547193"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Bolivia"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#00A878]/30 hover:border-[#00A878] hover:bg-[#00A878]/10 transition-all text-sm text-white"
            >
              <span>🇧🇴</span>
              <span className="hidden md:inline text-xs">Bolivia</span>
            </a>

            {/* WhatsApp Costa Rica */}
            <a
              href="https://wa.me/50670844241"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Costa Rica"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#00A878]/30 hover:border-[#00A878] hover:bg-[#00A878]/10 transition-all text-sm text-white"
            >
              <span>🇨🇷</span>
              <span className="hidden md:inline text-xs">Costa Rica</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-[#00A878] transition-colors"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-[#00A878]/20 overflow-hidden"
            style={{ backgroundColor: "#0D1B2A" }}
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[#A0AEC0] hover:text-[#00A878] transition-colors text-sm font-medium"
                >
                  {link.label}
                  {link.soon && <SoonBadge />}
                </a>
              ))}
              <div className="pt-4 border-t border-[#00A878]/20 flex gap-3">
                <a
                  href="https://wa.me/59160547193"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white text-sm hover:text-[#00A878] transition-colors"
                >
                  🇧🇴 Bolivia: +591 60547193
                </a>
              </div>
              <a
                href="https://wa.me/50670844241"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white text-sm hover:text-[#00A878] transition-colors"
              >
                🇨🇷 Costa Rica: +506 70844241
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

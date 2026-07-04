"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, MessageCircle, X } from "lucide-react";

const whatsapps = [
  { label: "WhatsApp Bolivia", number: "59160547193", display: "+591 60547193" },
  { label: "WhatsApp Costa Rica", number: "50670844241", display: "+506 70844241" },
];

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp country options */}
      <AnimatePresence>
        {open &&
          whatsapps.map((w, i) => (
            <motion.a
              key={w.number}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: i * 0.05 }}
              href={`https://wa.me/${w.number}?text=Hola%20Saetas%20Prevenci%C3%B3n%2C%20necesito%20informaci%C3%B3n`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 pl-4 pr-5 py-2.5 rounded-md bg-white border border-gray-200 shadow-lg text-sm font-medium text-[#16294F] hover:border-[#006B52] hover:text-[#006B52] transition-colors"
            >
              <MessageCircle size={16} className="text-[#006B52]" />
              {w.label}
            </motion.a>
          ))}
      </AnimatePresence>

      {/* WhatsApp toggle */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Contactar por WhatsApp"
        className="w-13 h-13 p-3.5 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 text-white"
        style={{ backgroundColor: "#006B52" }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            aria-label="Volver al inicio"
            className="w-11 h-11 rounded-full flex items-center justify-center shadow-md border border-gray-200 bg-white text-[#16294F] hover:text-[#006B52] transition-colors"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

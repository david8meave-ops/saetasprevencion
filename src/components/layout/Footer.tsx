import { Mail, Phone } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Descargables", href: "#descargables" },
  { label: "Tienda en Línea", href: "#tienda" },
  { label: "IA para SYSO", href: "#ia-syso" },
  { label: "Contáctanos", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0D1B2A" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo centered */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Saetas Prevención"
              width={52}
              height={52}
              className="bg-white rounded-full p-1"
            />
            <span className="text-2xl font-bold">Saetas Prevención</span>
          </div>
        </div>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Col 1 */}
          <div>
            <h3 className="text-[#00A878] font-semibold mb-4">Nuestra Misión</h3>
            <p className="text-[#A0AEC0] text-sm leading-relaxed">
              Empresa consultora en SYSO con presencia en Bolivia, Costa Rica y toda
              Latinoamérica. Prevenimos riesgos y protegemos vidas.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-[#00A878] font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#A0AEC0] hover:text-[#00A878] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-[#00A878] font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/59160547193"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#A0AEC0] hover:text-[#00A878] transition-colors text-sm"
              >
                <Phone size={14} /> 🇧🇴 +591 60547193
              </a>
              <a
                href="https://wa.me/50670844241"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#A0AEC0] hover:text-[#00A878] transition-colors text-sm"
              >
                <Phone size={14} /> 🇨🇷 +506 70844241
              </a>
              <a
                href="mailto:saetasprevencion@gmail.com"
                className="flex items-center gap-2 text-[#A0AEC0] hover:text-[#00A878] transition-colors text-sm"
              >
                <Mail size={14} /> saetasprevencion@gmail.com
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://www.facebook.com/Saetaprevecion"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-[#1A3550] flex items-center justify-center hover:bg-[#00A878] transition-all text-xs font-bold text-white"
                >
                  f
                </a>
                <a
                  href="https://beacons.ai/saeta_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Beacons"
                  className="w-8 h-8 rounded-full bg-[#1A3550] flex items-center justify-center hover:bg-[#00A878] transition-all text-xs font-bold text-white"
                >
                  B
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Teal divider */}
        <div className="h-px bg-[#00A878]/20 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0AEC0]">
          <p>© 2025 Saetas Prevención — Bolivia · Costa Rica · LATAM. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#00A878] transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-[#00A878] transition-colors">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

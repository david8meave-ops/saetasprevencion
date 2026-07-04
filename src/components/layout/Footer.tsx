import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { label: "Sobre Nosotros", href: "/#sobre-nosotros" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Descargables", href: "/descargables", soon: true },
  { label: "Tienda en Línea", href: "/tienda", soon: true },
  { label: "IA para SYSO", href: "/ia-syso", soon: true },
  { label: "Contáctanos", href: "/#contacto" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#16294F" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo centered */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3">
            <Image
              src="/logo.webp"
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
            <h3 className="text-[#00C896] font-semibold mb-4">Nuestra Misión</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Empresa consultora en SYSO con presencia en Bolivia y Costa Rica.
              Prevenimos riesgos y protegemos vidas.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-[#00C896] font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#00C896] transition-colors text-sm"
                  >
                    {link.label}
                    {link.soon && (
                      <span className="ml-1.5 text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-[#F5C518] text-[#16294F]">
                        Pronto
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-[#00C896] font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/59160547193"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-[#00C896] transition-colors text-sm"
              >
                <Phone size={14} /> Bolivia +591 60547193
              </a>
              <a
                href="https://wa.me/50670844241"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-[#00C896] transition-colors text-sm"
              >
                <Phone size={14} /> Costa Rica +506 70844241
              </a>
              <a
                href="mailto:info@saetasprevencion.com"
                className="flex items-center gap-2 text-white/60 hover:text-[#00C896] transition-colors text-sm"
              >
                <Mail size={14} /> info@saetasprevencion.com
              </a>
              <p className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                Irpavi, Calle 14, Av. Costanera, Edificio Marianela N.º 7, Piso 4 — La Paz, Bolivia
              </p>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://www.facebook.com/Saetaprevecion"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#006B52] transition-all text-xs font-bold text-white"
                >
                  f
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 Saetas Prevención — Bolivia · Costa Rica. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#00C896] transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-[#00C896] transition-colors">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

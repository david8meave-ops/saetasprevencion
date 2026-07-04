import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";

// lucide ya no incluye iconos de marcas — SVGs propios.
const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
  </svg>
);
const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);
const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.554V9h3.565v11.452z" />
  </svg>
);

const columnas = [
  {
    title: "Empresa",
    links: [
      { label: "Sobre Nosotros", href: "/#sobre-nosotros" },
      { label: "Servicios", href: "/#servicios" },
      { label: "Trabajos recientes", href: "/#trabajos" },
      { label: "Contáctanos", href: "/contacto" },
    ],
  },
  {
    title: "Secciones",
    links: [
      { label: "Descargables", href: "/descargables", soon: true },
      { label: "Tienda en Línea", href: "/tienda", soon: true },
      { label: "IA para SYSO", href: "/ia-syso", soon: true },
    ],
  },
];

// TODO: reemplazar los href "#" cuando existan los perfiles de Instagram y LinkedIn.
const social = [
  { label: "Facebook", href: "https://www.facebook.com/Saetaprevecion", Icon: FacebookIcon },
  { label: "WhatsApp", href: "https://wa.me/59160547193", Icon: MessageCircle },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedinIcon },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#16294F" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Top: logo + brand */}
        <div className="flex items-center gap-3 mb-10">
          <Image
            src="/logo.webp"
            alt="Saetas Prevención"
            width={44}
            height={44}
            className="bg-white rounded-full p-0.5"
          />
          <span className="text-xl font-bold">Saetas Prevención</span>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {columnas.map((col) => (
            <div key={col.title}>
              <h3 className="text-[#00C896] font-semibold mb-4 text-sm uppercase tracking-wide">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-[#00C896] transition-colors text-sm"
                    >
                      {link.label}
                      {"soon" in link && link.soon && (
                        <span className="ml-1.5 text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-[#F5C518] text-[#16294F]">
                          Pronto
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contacto */}
          <div>
            <h3 className="text-[#00C896] font-semibold mb-4 text-sm uppercase tracking-wide">
              Contacto
            </h3>
            <div className="space-y-2.5 text-sm">
              <a href="https://wa.me/59160547193" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-[#00C896] transition-colors">
                <Phone size={14} /> Bolivia +591 60547193
              </a>
              <a href="https://wa.me/50670844241" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-[#00C896] transition-colors">
                <Phone size={14} /> Costa Rica +506 70844241
              </a>
              <a href="mailto:info@saetasprevencion.com"
                className="flex items-center gap-2 text-white/60 hover:text-[#00C896] transition-colors">
                <Mail size={14} /> info@saetasprevencion.com
              </a>
              <p className="flex items-start gap-2 text-white/60">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                Irpavi, Calle 14, Av. Costanera, Edificio Marianela N.º 7, Piso 4 — La Paz, Bolivia
              </p>
            </div>
          </div>

          {/* Síguenos */}
          <div>
            <h3 className="text-[#00C896] font-semibold mb-4 text-sm uppercase tracking-wide">
              Síguenos
            </h3>
            <div className="flex flex-wrap gap-3">
              {social.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  title={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#006B52] transition-all text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
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

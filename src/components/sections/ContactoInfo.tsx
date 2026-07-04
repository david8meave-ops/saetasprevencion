import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactoInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#16294F] mb-10">Contáctanos</h2>

        <div className="rounded-lg border border-gray-200 p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Correo */}
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-gray-200 mb-4">
                <Mail size={20} className="text-[#16294F]" />
                <h3 className="font-semibold text-[#16294F]">Envíanos un correo</h3>
              </div>
              <p className="text-sm text-[#4A5568] leading-relaxed mb-3">
                ¿Tienes una pregunta o comentario sobre un servicio de Saetas Prevención?
              </p>
              <a
                href="mailto:info@saetasprevencion.com"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#006B52] hover:underline"
              >
                info@saetasprevencion.com
              </a>
            </div>

            {/* Teléfono */}
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-gray-200 mb-4">
                <Phone size={20} className="text-[#16294F]" />
                <h3 className="font-semibold text-[#16294F]">Teléfono</h3>
              </div>
              <div className="text-sm text-[#4A5568] leading-relaxed space-y-2">
                <p className="font-medium text-[#16294F]">Atención vía WhatsApp</p>
                <p>
                  Bolivia:{" "}
                  <a href="https://wa.me/59160547193" target="_blank" rel="noopener noreferrer" className="hover:text-[#006B52]">+591 60547193</a>
                  {" · "}
                  <a href="https://wa.me/59175758622" target="_blank" rel="noopener noreferrer" className="hover:text-[#006B52]">+591 75758622</a>
                </p>
                <p>
                  Costa Rica:{" "}
                  <a href="https://wa.me/50670844241" target="_blank" rel="noopener noreferrer" className="hover:text-[#006B52]">+506 70844241</a>
                  {" · "}
                  <a href="https://wa.me/50670387373" target="_blank" rel="noopener noreferrer" className="hover:text-[#006B52]">+506 70387373</a>
                </p>
              </div>
            </div>

            {/* Dirección */}
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-gray-200 mb-4">
                <div className="flex items-center gap-2.5">
                  <MapPin size={20} className="text-[#16294F]" />
                  <h3 className="font-semibold text-[#16294F]">Dirección</h3>
                </div>
                <a
                  href="https://www.google.com/maps/place/16%C2%B031'00.8%22S+68%C2%B005'19.1%22W/@-16.5168765,-68.0908216,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#006B52] hover:underline whitespace-nowrap"
                >
                  Enlace de Google Maps
                </a>
              </div>
              <div className="rounded-md overflow-hidden border border-gray-200 mb-3">
                <iframe
                  title="Ubicación de Saetas Prevención en La Paz"
                  src="https://maps.google.com/maps?q=-16.5168765,-68.0886329&z=16&output=embed"
                  className="w-full h-40"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                Irpavi, Calle 14, Av. Costanera, Edificio Marianela N.º 7, Piso 4 — La Paz, Bolivia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

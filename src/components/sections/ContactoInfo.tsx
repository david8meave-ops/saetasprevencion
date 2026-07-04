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

            {/* Direcciones */}
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-gray-200 mb-4">
                <MapPin size={20} className="text-[#16294F]" />
                <h3 className="font-semibold text-[#16294F]">Direcciones</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#006B52]">
                      Bolivia
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Calle+20+de+Octubre+Edificio+La+Paz+202,+La+Paz,+Bolivia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#006B52] hover:underline whitespace-nowrap"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    La Paz, Calle 20 de Octubre, Edificio La Paz 202
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#006B52]">
                      Costa Rica
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Calle+Nuestro+Amo,+Natura+Viva+9,+La+Guacima,+Alajuela,+Costa+Rica"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#006B52] hover:underline whitespace-nowrap"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Alajuela, La Guacima, Calle Nuestro Amo, Natura Viva 9
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

# Saetas Prevención — Sitio web

Sitio corporativo de **Saetas Prevención**, consultora en Salud y Seguridad Ocupacional (SYSO)
con presencia en Bolivia y Costa Rica.

- **Producción:** https://www.saetasprevencion.com
- **Repositorio:** https://github.com/david8meave-ops/saetasprevencion
- **Plan de trabajo (documento de referencia):** [docs/SDD.md](docs/SDD.md)

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack), React 19, TypeScript |
| Estilos | Tailwind CSS 4 · tipografía **Archivo** (títulos) + **Inter** (cuerpo) |
| Animación | framer-motion (solo fade-in; sin loops infinitos) |
| Formularios | react-hook-form + zod |
| Email | Resend (dominio `saetasprevencion.com` verificado) |
| IA (chatbot) | Anthropic API (pendiente de API key real) |
| Hosting/CI | Vercel — push a `main` = deploy a producción; ramas = previews |

## Diseño

Tema "industrial B2B" (referencias: 3M, Honeywell, Emerson, IBNORCA, INTECO):

- Lienzo claro: blanco y gris `#F4F6F8` alternados; **una** banda oscura (footer)
- Paleta derivada del logo oficial: navy `#16294F`, verde primario `#006B52`,
  verde claro `#00C896` (micro-acentos), amarillo `#F5C518` solo para chips "Pronto"
- Botones rectangulares (radio 6–8px); iconografía de línea (lucide); sin emojis en UI

## Páginas

| Ruta | Contenido | Estado |
|---|---|---|
| `/` | Hero con foto horizontal, reel "Trabajos recientes" (mockups), Servicios (10 reales), reel de clientes (32 logos reales), banda CTA | Activa |
| `/sobre-nosotros` | Banner "Negocios seguros son negocios que perduran", Acerca de Saetas, tarjeta Contáctanos (correo/teléfonos/dirección + mapa) | Activa |
| `/contacto` | Formulario de contacto (envía email vía Resend) | Activa |
| `/descargables` | Recursos PDF descargables | "Próximamente" |
| `/tienda` | Tienda en línea (carrito listo; sin pago online) | "Próximamente" |
| `/ia-syso` | Chatbot experto en normativa SYSO | "Próximamente" (falta API key) |

## Desarrollo

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # build de producción
```

Variables de entorno en `.env.local` (nunca commitear — ver [docs/SDD.md](docs/SDD.md) §2.3):
`RESEND_API_KEY`, `CONTACT_EMAIL`, `ANTHROPIC_API_KEY`, `NEXT_PUBLIC_PAYPAL_CLIENT_ID`.

## Flujo de trabajo

**Nunca pushear directo a `main`** (deploy automático a producción). Cada cambio va en una
rama `feature/*`; Vercel genera un preview por rama; se mergea a `main` tras aprobación.

## Actualización de contenido

El contenido vive en el código (sin CMS):

- **Logos de clientes:** `public/clientes/*.webp` (~120px de alto) + lista en
  `src/components/sections/Clientes.tsx`
- **Fotos industriales:** `public/industria/industria-{1..8}.webp` (placeholders de Unsplash —
  reemplazar por fotos propias manteniendo los nombres)
- **Servicios:** `src/components/sections/Servicios.tsx` (y el select de
  `src/components/sections/Contactanos.tsx`)
- **Artículos "Trabajos recientes":** mockups en `src/components/sections/ServiciosRecientes.tsx`

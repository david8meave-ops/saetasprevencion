import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saetasprevencion.com"),
  title: "Saetas Prevención | Consultoría en Salud y Seguridad Ocupacional",
  description:
    "Empresa consultora en Salud y Seguridad Ocupacional con presencia en Bolivia y Costa Rica. Programas SST, monitoreos ocupacionales, capacitaciones y más.",
  keywords:
    "salud ocupacional Bolivia, seguridad industrial Bolivia, SYSO Costa Rica, consultoría SSO, NTS-009, Saetas Prevención",
  openGraph: {
    title: "Saetas Prevención — Salud y Seguridad Ocupacional",
    description:
      "Consultoría profesional en Salud y Seguridad Ocupacional — Bolivia y Costa Rica",
    url: "https://www.saetasprevencion.com",
    siteName: "Saetas Prevención",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "es_LA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#16294F" />
      </head>
      <body className={`${inter.className} ${archivo.variable}`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

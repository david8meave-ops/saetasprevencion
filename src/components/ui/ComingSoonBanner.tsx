import Link from "next/link";

export default function ComingSoonBanner({ message }: { message?: string }) {
  return (
    <div className="pt-24 pb-4" style={{ backgroundColor: "#0D1B2A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ backgroundColor: "#1A3550", border: "1px solid #F5C518" }}
        >
          <p className="text-sm text-white text-center sm:text-left">
            <span className="mr-2 font-bold uppercase tracking-wide text-[10px] px-2 py-1 rounded-full bg-[#F5C518] text-[#0D1B2A]">
              Próximamente
            </span>
            {message ??
              "Estamos preparando esta sección. Muy pronto estará disponible."}
          </p>
          <Link
            href="/"
            className="text-xs font-semibold text-[#00C896] hover:text-white transition-colors whitespace-nowrap"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

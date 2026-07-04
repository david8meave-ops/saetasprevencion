import Link from "next/link";

export default function ComingSoonBanner({ message }: { message?: string }) {
  return (
    <div className="pt-32 pb-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-lg px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border"
          style={{ backgroundColor: "#FFFBEB", borderColor: "#F5C518" }}
        >
          <p className="text-sm text-[#16294F] text-center sm:text-left">
            <span className="mr-2 font-bold uppercase tracking-wide text-[10px] px-2 py-1 rounded-full bg-[#F5C518] text-[#16294F]">
              Próximamente
            </span>
            {message ??
              "Estamos preparando esta sección. Muy pronto estará disponible."}
          </p>
          <Link
            href="/"
            className="text-xs font-semibold text-[#006B52] hover:text-[#16294F] transition-colors whitespace-nowrap"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

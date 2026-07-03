"use client";
import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { useCart, Product } from "@/context/CartContext";
import { formatCurrency } from "@/lib/utils";

const products: Product[] = [
  { id: 1, name: "Casco de Seguridad Industrial", priceUSD: 12, priceBOB: 83, image: "🪖", rating: 4.5 },
  { id: 2, name: "Chaleco Reflectivo", priceUSD: 9, priceBOB: 62, image: "🦺", rating: 4.5 },
  { id: 3, name: "Guantes de Seguridad", priceUSD: 6, priceBOB: 41, image: "🧤", rating: 4.5 },
  { id: 4, name: "Gafas de Protección", priceUSD: 8, priceBOB: 55, image: "🥽", rating: 4.5 },
  { id: 5, name: "Kit de Primeros Auxilios", priceUSD: 31, priceBOB: 214, image: "🩺", rating: 4.5 },
  { id: 6, name: "Extintor 5 lbs ABC", priceUSD: 44, priceBOB: 304, image: "🧯", rating: 4.5 },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={12}
          className={i <= Math.floor(rating) ? "text-[#00A878] fill-[#00A878]" : "text-gray-300"}
        />
      ))}
      <span className="text-xs text-gray-400 ml-1">{rating}</span>
    </div>
  );
}

export default function TiendaEnLinea() {
  const { addItem, currency, toggleCurrency } = useCart();

  return (
    <section id="tienda" className="py-20" style={{ backgroundColor: "#F7F9FC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#00A878] mb-3 block">
              Productos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A]">
              Tienda de Seguridad Industrial
            </h2>
            <p className="text-gray-500 mt-2">Envíos a toda la región · Pagos seguros con PayPal</p>
          </div>
          <button
            onClick={toggleCurrency}
            className="px-4 py-2 rounded-full font-bold text-sm transition-all hover:scale-105"
            style={{
              backgroundColor: currency === "USD" ? "#0D1B2A" : "#00A878",
              color: currency === "USD" ? "#00C896" : "#FFFFFF",
              border: "2px solid #00A878",
            }}
          >
            {currency === "USD" ? "USD → BOB" : "BOB → USD"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              style={{ backgroundColor: "#1A3550" }}
            >
              {/* Image placeholder */}
              <div
                className="h-40 flex items-center justify-center text-7xl"
                style={{
                  background: "linear-gradient(135deg, #0D1B2A 0%, #1A3550 100%)",
                }}
              >
                {product.image}
              </div>

              <div className="p-5">
                <h3 className="text-white font-semibold text-sm mb-2">{product.name}</h3>
                <StarRating rating={product.rating} />
                <div className="mt-3 mb-4">
                  <span className="text-2xl font-bold" style={{ color: "#00A878" }}>
                    {formatCurrency(
                      currency === "USD" ? product.priceUSD : product.priceBOB,
                      currency
                    )}
                  </span>
                  <span className="text-[#A0AEC0] text-xs ml-2">
                    ({formatCurrency(
                      currency === "USD" ? product.priceBOB : product.priceUSD,
                      currency === "USD" ? "BOB" : "USD"
                    )})
                  </span>
                </div>
                <button
                  onClick={() => addItem(product)}
                  className="w-full py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                  style={{ backgroundColor: "#00A878", color: "#0D1B2A" }}
                >
                  <ShoppingCart size={16} />
                  Agregar al carrito
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

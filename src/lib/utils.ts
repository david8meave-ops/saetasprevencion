import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: "USD" | "BOB"): string {
  if (currency === "USD") {
    return `$${amount.toFixed(2)} USD`;
  }
  return `Bs. ${amount.toFixed(0)}`;
}

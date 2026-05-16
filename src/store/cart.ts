"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/lib/products";

export type CartLine = {
  product: Product;
  qty: number;
};

type CartState = {
  lines: CartLine[];
  add: (product: Product, qty?: number) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      add: (product, qty = 1) => {
        const lines = [...get().lines];
        const idx = lines.findIndex((l) => l.product.id === product.id);
        if (idx >= 0) {
          lines[idx] = { ...lines[idx], qty: lines[idx].qty + qty };
        } else {
          lines.push({ product, qty });
        }
        set({ lines });
      },
      remove: (productId) => {
        set({ lines: get().lines.filter((l) => l.product.id !== productId) });
      },
      setQty: (productId, qty) => {
        const next = Math.max(1, Math.min(99, Math.floor(qty)));
        set({
          lines: get().lines
            .map((l) => (l.product.id === productId ? { ...l, qty: next } : l))
            .filter((l) => l.qty > 0),
        });
      },
      clear: () => set({ lines: [] }),
    }),
    { name: "gzdr-cart-v1" },
  ),
);

export function cartSubtotal(lines: CartLine[]) {
  return lines.reduce((acc, l) => acc + l.product.priceEur * l.qty, 0);
}

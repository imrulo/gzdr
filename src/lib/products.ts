export type ProductCategory = "gorras" | "camisetas" | "hoodies" | "accesorios";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  priceEur: number;
  description: string;
  imageSrc: string;
  blurDataURL: string;
  badge?: string;
};

const blur =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

export const products: Product[] = [
  {
    id: "p1",
    slug: "gorra-snapback-dzdr",
    name: "Gorra snapback DZDR",
    category: "gorras",
    priceEur: 35,
    description: "Snapback estructurada, visera plana. Bordado DZDR neón en panel frontal.",
    imageSrc: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1200&q=80",
    blurDataURL: blur,
    badge: "Top ventas",
  },
  {
    id: "p2",
    slug: "camiseta-oversize-dzdr",
    name: "Camiseta oversize DZDR",
    category: "camisetas",
    priceEur: 45,
    description: "Algodón pesado, corte oversize. Logo DZDR grande al centro — puro perreo.",
    imageSrc: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    blurDataURL: blur,
  },
  {
    id: "p3",
    slug: "hoodie-heavy-dzdr",
    name: "Hoodie heavy DZDR",
    category: "hoodies",
    priceEur: 75,
    description: "Felpa gruesa, capucha doble. DZDR en pecho y espalda. Noche fría en Belgrade.",
    imageSrc: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=80",
    blurDataURL: blur,
    badge: "Nuevo",
  },
  {
    id: "p4",
    slug: "tank-dzdr-latin",
    name: "Tank DZDR Latin",
    category: "camisetas",
    priceEur: 38,
    description: "Tank ligero para pista. DZDR minimal en pecho — sudor y libertad.",
    imageSrc: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1200&q=80",
    blurDataURL: blur,
  },
  {
    id: "p5",
    slug: "gorra-trucker-dzdr",
    name: "Gorra trucker DZDR",
    category: "gorras",
    priceEur: 32,
    description: "Malla trasera, panel frontal con DZDR bordado neón.",
    imageSrc: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1200&q=80",
    blurDataURL: blur,
  },
  {
    id: "p6",
    slug: "hoodie-zip-belgrade-dzdr",
    name: "Hoodie zip Belgrade DZDR",
    category: "hoodies",
    priceEur: 82,
    description: "Cierre completo, edición ciudad. DZDR en mangas y pecho.",
    imageSrc: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1200&q=80",
    blurDataURL: blur,
  },
  {
    id: "p7",
    slug: "tote-dzdr",
    name: "Tote DZDR",
    category: "accesorios",
    priceEur: 22,
    description: "Tote resistente, serigrafía DZDR. Para after y mercado.",
    imageSrc: "https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&w=1200&q=80",
    blurDataURL: blur,
  },
  {
    id: "p8",
    slug: "pack-calcetines-neon-dzdr",
    name: "Pack calcetines neón DZDR",
    category: "accesorios",
    priceEur: 18,
    description: "Pack x3 con detalle DZDR. Combina con cualquier outfit de pista.",
    imageSrc: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=1200&q=80",
    blurDataURL: blur,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

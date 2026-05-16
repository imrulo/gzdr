export type GalleryItem = {
  id: string;
  src: string;
  blur: string;
  alt: string;
  aspect: "square" | "portrait" | "landscape";
};

const blur =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

/** Placeholders estilo nightlife neón / @la_gozadera_events */
export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1571266028243-e68f8570f43f?auto=format&fit=crop&w=900&q=80",
    blur,
    alt: "Pista llena, luces neón rosas y verdes",
    aspect: "landscape",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80",
    blur,
    alt: "Multitud con manos arriba — energía Gozadera",
    aspect: "square",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    blur,
    alt: "DJ booth, humo y láser — Belgrade nightlife",
    aspect: "landscape",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=900&q=80",
    blur,
    alt: "Neón fucsia en club oscuro",
    aspect: "portrait",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
    blur,
    alt: "Fiesta con confeti y luces",
    aspect: "square",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
    blur,
    alt: "Perreo en la pista — sudor y risas",
    aspect: "landscape",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80",
    blur,
    alt: "Bailarines bajo luces de club",
    aspect: "portrait",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80",
    blur,
    alt: "Escenario con crowd — Gozadera vibe",
    aspect: "landscape",
  },
];

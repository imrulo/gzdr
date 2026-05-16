# gzdr-live — GZDR / Gozadera

Web oficial de **GZDR** para **gzdr.live**: eventos de reggaetón y perreo latino + tienda **Gozadera Style** (Belgrade, Serbia).

## Branding

| Contexto | Logo |
|----------|------|
| Sitio web, header, hero, OG | **GZDR** + *style* (pequeño) |
| Merch / ropa / mockups tienda | **DZDR** (exacto, en todas las prendas) |

## Stack

- **Next.js 16** (App Router, Server Actions, Cache Components / PPR)
- **React 19** · **TypeScript** strict
- **Tailwind CSS v4** · componentes estilo **shadcn/ui**
- **Framer Motion 12** · **Lucide**
- **Clerk** (auth opcional) · **Zustand** (carrito + wishlist)
- **Vercel Analytics** + **Speed Insights**
- SEO: **Metadata API** + `sitemap.xml` + `robots.txt` + OG images
- **next/image** con blur placeholders

## Requisitos

- Node.js **22+**
- npm, pnpm o yarn

## Desarrollo local

```bash
cd gzdr-live
npm install
npm run dev
```

Abre **http://localhost:3000**.

### Variables de entorno

Copia `.env.example` → `.env.local`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Sin Clerk la web funciona en modo público.

## Build

```bash
npm run build
npm start
```

## Deploy en Vercel

1. Importa el repo **gzdr-live** (o `imrulo/gzdr`) en [vercel.com](https://vercel.com).
2. Framework: **Next.js** (auto).
3. Añade variables de entorno de producción.
4. Deploy → asigna dominio `gzdr.live`.

## Dominio gzdr.live con Cloudflare

1. **Cloudflare** → zona `gzdr.live` → **DNS**:
   - Registro **CNAME** `@` → `cname.vercel-dns.com` (o el target que indique Vercel en *Domains*).
   - Opcional: `www` → mismo target o redirect.
2. **Vercel** → proyecto → **Settings** → **Domains** → añade `gzdr.live` y `www.gzdr.live`.
3. **SSL/TLS** en Cloudflare: **Full (strict)** cuando Vercel emita el certificado.
4. Desactiva **Rocket Loader** si ves problemas de hidratación.
5. Propagación DNS: hasta 24 h (normalmente minutos).

## Reemplazar placeholders por contenido real

### Eventos (`src/lib/events.ts`)

- Sube flyers a `public/eventos/`.
- Cambia `flyerSrc` a `/eventos/mi-fiesta.jpg`.
- Fechas en ISO con zona `+02:00` (Belgrade).

### Galería (`src/lib/gallery.ts`)

- Fotos reales de @la_gozadera_events → `public/galeria/`.
- Mantén `blurDataURL` (genera con [plaiceholder](https://github.com/joe-bell/plaiceholder) o similar).

### Tienda (`src/lib/products.ts`)

- Fotos de producto con **logo DZDR** visible → `public/productos/`.
- Precios en `priceEur`; RSD se calcula con `EUR_TO_RSD` en `src/lib/currency.ts` (ajusta el tipo de cambio).

### Hero video

- Descarga clip propio a `public/video/hero.mp4` y edita `src/components/home/hero-section.tsx`.

### Audio

- Coloca `public/audio/vibe.mp3` (instrumental bajito).

### Stripe (checkout real)

Descomenta el bloque en `src/app/api/checkout/route.ts` y configura `STRIPE_SECRET_KEY` + Prices en Stripe Dashboard (modo test).

## Estructura de rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Home + countdown + hero |
| `/eventos` | Eventos Belgrade |
| `/style` | Tienda DZDR |
| `/yari` | El Creador |
| `/galeria` | Fotos fiesta |
| `/contacto` | Boletín / contacto |

## Licencia

Privado — marca GZDR / Gozadera.

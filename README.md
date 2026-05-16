# GZDR — `gzdr-live`

Web oficial de **GZDR (Gozadera)** para el dominio **`gzdr.live`**: eventos de reggaetón/perreo latino + tienda **Gozadera Style** (Belgrade, Serbia).

Stack: **Next.js 16 (App Router)**, **React 19**, **TypeScript strict**, **Tailwind CSS v4**, **shadcn/ui-style components**, **Framer Motion 12**, **Clerk** (opcional sin keys), **Zustand** (carrito + wishlist), **Vercel Analytics + Speed Insights**, **next-seo + Metadata API**, **next/image** con blur placeholders.

## Requisitos

- **Node.js 22+** (recomendado para Next 16)
- **pnpm** (recomendado) o npm/yarn

## Desarrollo local

```bash
cd gzdr-live
pnpm install
pnpm dev
```

Abre `http://localhost:3000`.

### Variables de entorno (opcional)

Copia `.env.example` a `.env.local` y rellena:

- **Clerk** (auth moderna): `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`  
  Si no las pones, la web funciona en modo público (sin auth) y el `proxy.ts` hace bypass.
- **Stripe (test)**: `STRIPE_SECRET_KEY` (ver `src/app/api/checkout/route.ts`, comentado).
- **Dominio canónico** (opcional): `NEXT_PUBLIC_SITE_URL=https://gzdr.live`

## Build producción

```bash
pnpm build
pnpm start
```

## Deploy en Vercel

1. Crea un proyecto en Vercel e importa el repo `gzdr-live`.
2. Framework: **Next.js**.
3. Añade variables de entorno (Clerk/Stripe si aplica).
4. Deploy.

`vercel.json` añade cabeceras de seguridad básicas. Ajusta si necesitas políticas distintas.

## Dominio `gzdr.live` con Cloudflare (DNS)

1. En **Cloudflare** → tu zona `gzdr.live` → **DNS**:
   - Crea un registro **CNAME**:
     - **Name**: `@` (o `www` si quieres subdominio)
     - **Target**: `cname.vercel-dns.com` (Vercel te mostrará el target exacto en *Domains*)
2. En **Vercel** → *Project* → **Domains** → añade `gzdr.live` (y `www.gzdr.live` si quieres).
3. En Cloudflare, **SSL/TLS**:
   - Modo recomendado: **Full (strict)** cuando el certificado de Vercel esté activo.
4. Opcional: desactiva **Rocket Loader** y proxies que rompan hydration si ves comportamientos raros (poco frecuente).

## SEO

- Metadata en `src/app/layout.tsx` + `generateMetadata` por ruta.
- `next-seo` (`DefaultSeo`) en `src/components/providers/app-providers.tsx`.
- `src/app/sitemap.ts`, `src/app/robots.ts`, `opengraph-image.tsx`, `twitter-image.tsx`, `icon.tsx`.

## Rendimiento / Lighthouse

- Imágenes remotas permitidas en `next.config.ts` (`images.remotePatterns`).
- `next/image` + `placeholder="blur"` en catálogo.
- Vídeo hero: si quieres 100% self-hosted, descarga el clip a `public/` y cambia el `<source>` en `src/components/home/hero-section.tsx`.

## Añadir productos y fotos reales

1. **Productos**: edita `src/lib/products.ts`
   - Sustituye `imageSrc` por rutas `"/productos/....jpg"` en `public/productos/`.
   - Genera `blurDataURL` pequeño (p. ej. con `plaiceholder` o un base64 tiny) para mantener el blur.
2. **Eventos**: edita `src/lib/events.ts` (fechas ISO, flyers).
3. **Galería**: edita `src/lib/gallery.ts`.
4. **Checkout real**: descomenta Stripe en `src/app/api/checkout/route.ts` y conecta precios reales (Stripe Prices).

## Audio opcional

Coloca `public/audio/vibe.mp3` (ver `public/audio/README.txt`).

## Licencia

Privado por defecto (proyecto de marca). Ajusta según tu repo.

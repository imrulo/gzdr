import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/app-providers";
import { NeonCursor } from "@/components/layout/neon-cursor";
import { AmbientVibe } from "@/components/layout/ambient-vibe";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig, siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.titleDefault,
    template: "%s | GZDR",
  },
  description: siteConfig.description,
  keywords: [
    "GZDR",
    "Gozadera",
    "reggaetón",
    "perreo",
    "Belgrade",
    "fiestas latinas",
    "streetwear",
    "Gozadera Style",
  ],
  authors: [{ name: "GZDR", url: siteUrl }],
  creator: "GZDR",
  publisher: "GZDR",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.titleDefault,
    description: siteConfig.description,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.titleDefault,
    description: siteConfig.description,
    creator: siteConfig.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "entertainment",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GZDR — Gozadera",
    url: siteUrl,
    logo: `${siteUrl}/icon`,
    sameAs: ["https://instagram.com"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Belgrade",
      addressCountry: "RS",
    },
  };

  return (
    <html lang="es" className={`${inter.variable} ${space.variable}`}>
      <body className="min-h-dvh bg-gzdr-bg">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <AppProviders>
          <NeonCursor />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <AmbientVibe />
        </AppProviders>
      </body>
    </html>
  );
}

import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/eventos", "/style", "/yari", "/galeria", "/contacto"];
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${siteUrl}${path === "" ? "/" : path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "weekly",
    priority: path === "" ? 1 : 0.75,
  }));
}

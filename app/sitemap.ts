import type { MetadataRoute } from "next";
import { products } from "./home-data";
import { galleryImages } from "./gallery-data";
import { archivedBrands } from "./main-data";
import { SITE_URL } from "../lib/site-url";

// Only live, public pages. Keep this list aligned with app/**/page.tsx.
const routes = [
  "/",
  "/adatvedelmi-iranyelvek",
  "/alapcsavarok-dubelek",
  "/allvanyberles-2",
  "/belso-kulcsnyilasu-metrikus-csavarok",
  "/csavarok",
  "/dewalt-termekek",
  "/forgalmazott-markaink",
  "/gepkolcsonzes-2",
  "/hatlapfeju-metrikus-csavarok",
  "/helly-hansen-munkaruha",
  "/kis-metrikus-csavarok",
  "/kiszallitas-2",
  "/lemezcsavarok",
  "/rolunk",
  "/sika-termekek",
  "/szaktanacsadas-2",
  "/szolgaltatasaink",
  "/termekeink",
  "/termekeink/epiteszeti-es-faipari-csavarok"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const productImages = products.map(({ image }) => `/images/${image}`);
  const imagesByRoute: Record<string, string[]> = {
    "/": ["/images/borbandi_barkacs_bolt.jpg", ...productImages],
    "/termekeink": productImages,
    "/rolunk": galleryImages.map((image) => `/images/${image}`),
    "/forgalmazott-markaink": archivedBrands.flatMap(({ image }) => image ? [`/images/${image}`] : []),
  };

  return routes.map((path) => ({
    url: new URL(path, SITE_URL).href,
    ...(imagesByRoute[path]?.length ? {
      images: [...new Set(imagesByRoute[path])].map((image) => new URL(image, SITE_URL).href),
    } : {}),
  }));
}

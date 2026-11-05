import type { Metadata } from "next";
import "./globals.css";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import ConsentManager from "./cookie-consent";
export const metadata: Metadata = {
 icons: {
  icon: [
   { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
   { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
   { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
  ],
  apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
 },
 title: "Borbándi Barkács – Szerszám és kötőelem szaküzlet Szolnok",
 description: "Szerszámgépek, kéziszerszámok, rögzítéstechnika és munkavédelem. Borbándi Barkács szaküzlet, 5000 Szolnok, Abonyi út 1/B.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="hu"><body>{children}<ConsentManager /></body></html>;
}

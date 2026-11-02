import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "Borbándi Barkács – Szerszám és kötőelem szaküzlet Szolnok",
 description: "Szerszámgépek, kéziszerszámok, rögzítéstechnika és munkavédelem. Borbándi Barkács szaküzlet, 5000 Szolnok, Abonyi út 1/B.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="hu"><body>{children}</body></html>;
}

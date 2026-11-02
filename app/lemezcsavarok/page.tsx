import type {Metadata} from "next";
import CatalogueContent from "../catalogue-content";
export const metadata:Metadata={"title": "Lemezcsavarok – Borbándi Barkács", "description": "Lemezcsavarok – termékbemutató és részletes kínálat a Borbándi Barkács korábbi honlapja alapján. Aktuális ajánlatért keresse szolnoki üzletünket."};
export default function Page(){return <CatalogueContent slug="lemezcsavarok"/>;}

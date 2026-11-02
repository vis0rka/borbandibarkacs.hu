import type {Metadata} from "next";
import CatalogueContent from "../catalogue-content";
export const metadata:Metadata={"title": "Csavarok – Borbándi Barkács", "description": "Csavarok – termékbemutató és részletes kínálat a Borbándi Barkács korábbi honlapja alapján. Aktuális ajánlatért keresse szolnoki üzletünket."};
export default function Page(){return <CatalogueContent slug="csavarok"/>;}

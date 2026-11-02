import type { Metadata } from "next";
import ContentPage,{articleStyles} from "../content-page";
import {container} from "../service-content";
import {privacyHtml} from "../main-data";
export const metadata:Metadata={title:"Adatvédelmi irányelvek – Borbándi Barkács",description:"A Borbándi Barkács eredeti adatkezelési tájékoztatójának archivált változata.",robots:{index:false,follow:true}};
export default function Privacy(){return <ContentPage title="Adatvédelmi irányelvek" eyebrow="Adatkezelési tájékoztató"><div className={`${container} py-12 md:py-16`}><div role="note" className="mb-10 max-w-4xl border-l-4 border-brand-orange bg-cream p-6 text-sm leading-7"><strong>Archivált tájékoztató.</strong> Az alábbi szöveg a korábbi honlap 2018. június 14-től hatályos, Waybackből visszaállított tájékoztatója. A korábbi tárhelyre, hírlevélre és sütikre vonatkozó leírásokat is tartalmazza. Az új oldal működéséhez igazított, aktuális tájékoztató közzététele még hátravan.</div><article className={`${articleStyles} max-w-4xl break-words`} dangerouslySetInnerHTML={{__html:privacyHtml}}/></div></ContentPage>;}

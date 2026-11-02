import ProductMenu from "./product-menu";
import { ArrowUpRight } from "./icons";
import { availableImages } from "./home-data";
import MobileMenu from "./mobile-menu";
export default function SiteHeader(){ return <>
  <a className="fixed -top-20 left-4 z-50 bg-white p-4 focus:top-3" href="#tartalom">Ugrás a tartalomra</a>
  <div className="bg-brand-dark text-[12px] tracking-[.4px] text-slate-200 [&>div]:flex [&>div]:min-h-[35px] [&>div]:items-center [&>div]:justify-between max-[450px]:[&_span]:max-w-[195px] max-[450px]:[&_span]:py-2 max-[800px]:[&_span]:text-[10px] max-[800px]:[&_a]:text-[11px]"><div className="mx-auto w-[calc(100%-36px)] min-[801px]:w-[calc(100%-48px)] min-[1101px]:w-[min(1180px,calc(100%-64px))]"><span>Szerszám és kötőelem szaküzlet · Szolnok</span><a href="tel:+3656342227">+36 56 342 227</a></div></div>
  <header className="sticky top-0 z-20 border-b border-line bg-white"><div className="mx-auto w-[calc(100%-36px)] min-[801px]:w-[calc(100%-48px)] min-[1101px]:w-[min(1180px,calc(100%-64px))] flex min-h-20 items-center justify-between gap-7 min-[801px]:min-h-[100px]">
   <a className="flex shrink-0 flex-col [&>img]:h-[68px] [&>img]:w-[245px] [&>img]:object-contain max-[450px]:[&>img]:h-[55px] max-[450px]:[&>img]:w-[225px]" href="/" aria-label="Borbándi Barkács – főoldal">{availableImages.includes("borbandibarkacslogo2.svg") ? <img src="/images/borbandibarkacslogo2.svg" alt="Borbándi Barkács" width="225" height="68"/> : <><span className="text-[22px] leading-none font-black tracking-[1px] text-brand [&>span]:ml-1.5 [&>span]:text-ink max-[1100px]:text-[19px] max-[450px]:text-[17px]">BORBÁNDI<span>BARKÁCS</span></span><span className="mt-2 text-[8px] tracking-[2.2px]">SZERSZÁM · CSAVAR · SZAKÉRTELEM</span></>}</a>
   <nav className="hidden items-center gap-2.5 text-[10px] font-bold min-[801px]:flex min-[1101px]:gap-4 min-[1101px]:text-[11px] [&>a]:py-3.5 [&>a:hover]:text-brand" aria-label="Főmenü"><a href="/akciok/">Akciók</a><a href="/forgalmazott-markaink/">Forgalmazott márkáink</a><ProductMenu/><a href="/szolgaltatasaink/">Szolgáltatásaink</a><a href="/rolunk/">Rólunk</a><a className="inline-flex items-center gap-2 border border-line px-4" href="/#kapcsolat">Kapcsolat <ArrowUpRight className="inline size-4 shrink-0" aria-hidden="true"/></a></nav>
   <MobileMenu/>
  </div></header>
</>; }

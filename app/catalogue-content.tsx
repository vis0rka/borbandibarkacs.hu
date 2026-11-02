import ContentPage, {articleStyles} from "./content-page";
import {container, ServiceContact} from "./service-content";
import {cataloguePages} from "./catalogue-data";
import {ArrowUpRight, Bolt, Drill, HardHat, Layers} from "./icons";
export default function CatalogueContent({slug}:{slug:string}){
 const page=cataloguePages.find(p=>p.slug===slug)!;
 const peers=cataloguePages.filter(p=>p.group===page.group);
 const Icon=slug==="helly-hansen-munkaruha" ? HardHat : slug==="sika-termekek" ? Layers : page.group==="brand" ? Drill : Bolt;
 const sections=page.blocks.filter(b=>b.title && b.kind==="section");
 return <ContentPage title={page.title} eyebrow={page.group==="brand" ? "Márkák és termékcsaládok" : "Csavarok és rögzítéstechnika"}>
  <div className={`${container} py-10 md:py-14`}>
   <nav className="mb-9 flex flex-wrap gap-2" aria-label={page.group==="brand" ? "Márkaoldalak" : "Rögzítéstechnikai oldalak"}>{peers.map(p=><a key={p.slug} href={`/${p.slug}/`} aria-current={p.slug===slug ? "page" : undefined} className={`border px-3 py-2 text-xs transition-colors hover:border-brand ${p.slug===slug ? "border-brand bg-brand text-white" : "border-line text-brand"}`}>{p.title}</a>)}</nav>
   <p className="mb-9 border-l-3 border-brand-orange bg-cream px-5 py-4 text-sm leading-7 text-muted">A korábbi honlap termékbemutatója. Az aktuális árakról és elérhetőségről érdeklődjön <a className="font-semibold text-brand underline" href="#kapcsolat">üzletünkben</a>.</p>
   <div className="grid items-start gap-10 lg:grid-cols-[1fr_260px]">
    <article className="min-w-0">
     <div className="mb-8 text-brand"><Icon className="size-11" strokeWidth={1.5} aria-hidden="true"/></div>
     <div className="space-y-7">{page.blocks.map(block=><section key={block.id} id={block.id} className={`scroll-mt-32 ${block.kind==="item" ? "border border-line bg-cream/50 p-5 md:p-6" : "border-b border-line pb-7"}`}>
      {block.title && <h2 className={`mb-5 leading-snug ${block.kind==="item" ? "text-lg" : "text-xl md:text-2xl"}`}>{block.title}</h2>}
      <div className={`${articleStyles} [&>p:last-child]:mb-0`} dangerouslySetInnerHTML={{__html:block.html}}/>
     </section>)}</div>
     {page.downloads.length>0 && <section className="mt-10 border border-line p-6"><h2 className="mb-4 text-xl">Korábbi termékkatalógusok</h2><p className="text-sm text-muted">Archív anyagok; a bennük szereplő kínálat és árak az eredeti kiadás idejére vonatkoznak.</p><div className="flex flex-col items-start gap-4">{page.downloads.map(d=><a key={d.href} className="inline-flex max-w-full items-center gap-3 break-all text-sm font-semibold text-brand underline" href={d.href} download={d.local || undefined} target={d.local ? undefined : "_blank"} rel={d.local ? undefined : "noreferrer"}>{d.local ? "Archív katalógus letöltése (PDF)" : "Archív katalógus megtekintése a Waybacken"}<ArrowUpRight className="size-4 shrink-0" aria-hidden="true"/></a>)}</div></section>}
    </article>
    <aside className="min-w-0 border border-line bg-cream p-6"><h2 className="mb-5 text-lg">{sections.length>1 ? "Az oldal tartalma" : "Kapcsolódó oldalak"}</h2>{sections.length>1 && <nav aria-label="Az oldal tartalma" className="mb-7 flex max-h-[60vh] flex-col gap-3 overflow-y-auto pr-2 text-xs leading-5">{sections.map(b=><a key={b.id} className="text-muted hover:text-brand" href={`#${b.id}`}>{b.title}</a>)}</nav>}<a className="mb-4 flex items-center justify-between gap-3 border-t border-line pt-4 text-sm font-semibold text-brand" href={page.group==="brand" ? "/forgalmazott-markaink/" : "/csavarok/"}>{page.group==="brand" ? "Forgalmazott márkáink" : "Csavarok áttekintése"}<ArrowUpRight className="size-4 shrink-0" aria-hidden="true"/></a><a className="flex items-center justify-between gap-3 text-sm font-semibold text-brand" href="/termekeink/">Összes termék<ArrowUpRight className="size-4 shrink-0" aria-hidden="true"/></a></aside>
   </div>
  </div><ServiceContact/>
 </ContentPage>;
}

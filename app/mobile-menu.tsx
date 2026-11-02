"use client";
import {brandLinks,fastenerLinks} from "./product-links";
import { Menu } from "lucide-react";
import {useRef} from "react";
const links=[["/akciok/","Akciók"],["/forgalmazott-markaink/","Márkáink"],["/termekeink/","Termékeink"],["/szolgaltatasaink/","Szolgáltatásaink"],["/rolunk/","Rólunk"],["kapcsolat","Kapcsolat"]];
export default function MobileMenu(){
 const ref=useRef<HTMLDetailsElement>(null);
 return <details className="block min-[801px]:hidden [&_summary]:flex [&_summary]:cursor-pointer [&_summary]:list-none [&_summary]:items-center [&_summary]:gap-2.5 [&_summary]:py-3 [&_summary]:pl-3 [&_summary]:text-[13px] [&_summary::-webkit-details-marker]:hidden [&_nav]:max-h-[calc(100dvh-100px)] [&_nav]:overflow-y-auto [&_nav]:absolute [&_nav]:inset-x-0 [&_nav]:top-full [&_nav]:border-b [&_nav]:border-line [&_nav]:bg-white [&_nav]:px-6 [&_nav]:py-3 [&_nav]:shadow-lg [&_a]:block [&_a]:py-[13px] [&_a]:text-[14px]" ref={ref}><summary>Menü <Menu className="size-4" aria-hidden="true"/></summary><nav aria-label="Mobil főmenü">{links.map(([id,label])=><a href={id.startsWith("/") ? id : `/#${id}`} key={id} onClick={()=>{if(ref.current)ref.current.open=false;}}>{label}</a>)}<details className="border-t border-line"><summary>Márkák és rögzítéstechnika</summary><div className="pl-3">{[...brandLinks,...fastenerLinks].map(link=><a href={link.href} key={link.href} onClick={()=>{if(ref.current)ref.current.open=false;}}>{link.label}</a>)}</div></details></nav></details>;
}

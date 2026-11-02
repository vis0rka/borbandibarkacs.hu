import { ArrowUp } from "./icons";
export default function SiteFooter(){return (
  <footer className="bg-brand-dark py-6 text-[11px] text-slate-300"><div className="mx-auto w-[calc(100%-36px)] min-[801px]:w-[calc(100%-48px)] min-[1101px]:w-[min(1180px,calc(100%-64px))] flex flex-col justify-between gap-3 min-[451px]:flex-row min-[451px]:gap-5 [&>p]:m-0 [&>a]:inline-flex [&>a]:items-center [&>a]:gap-2"><p>© {new Date().getFullYear()} Borbándi Barkács · Magyar Ipari Beszállító Kft.</p><a className="hover:text-white" href="/adatvedelmi-iranyelvek/">Adatvédelmi irányelvek</a><a href="#tartalom">Vissza az oldal tetejére <ArrowUp className="size-4 shrink-0" aria-hidden="true"/></a></div></footer>
);}

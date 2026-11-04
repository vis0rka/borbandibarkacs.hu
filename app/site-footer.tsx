import { CookieSettingsButton } from "./cookie-consent";
import { ArrowUp } from "./icons";
export default function SiteFooter(){return (
  <>
  <section aria-label="Borbándi Barkács üzletünk térképen" className="w-full border-t border-line">
    <iframe title="Borbándi Barkács – üzletünk térképen" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.0452092759465!2d20.1590289758597!3d47.17655141757623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741419e3f8164cd%3A0xb32258b2cf8a554e!2zQm9yYsOhbmRpIEJhcmvDoWNz!5e0!3m2!1shu!2shu!4v1793779002423!5m2!1shu!2shu" width="600" height="450" className="block h-[350px] w-full border-0 sm:h-[450px]" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
  </section>
  <footer className="bg-brand-dark py-6 text-[11px] text-slate-300"><div className="mx-auto w-[calc(100%-36px)] min-[801px]:w-[calc(100%-48px)] min-[1101px]:w-[min(1180px,calc(100%-64px))] flex flex-col justify-between gap-3 min-[451px]:flex-row min-[451px]:gap-5 [&>p]:m-0 [&>a]:inline-flex [&>a]:items-center [&>a]:gap-2"><p>© {new Date().getFullYear()} Borbándi Barkács · Magyar Ipari Beszállító Kft.</p><a className="hover:text-white" href="/adatvedelmi-iranyelvek/">Adatvédelmi irányelvek</a><CookieSettingsButton /><a href="#tartalom">Vissza az oldal tetejére <ArrowUp className="size-4 shrink-0" aria-hidden="true"/></a></div></footer>
  </>
);}

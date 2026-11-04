"use client";

import { useEffect, useState } from "react";
import * as CookieConsent from "vanilla-cookieconsent";

let initialization: Promise<void> | undefined;
export function initializeConsent() {
  return initialization ??= CookieConsent.run({
    mode: "opt-in",
    revision: 1,
    cookie: { name: "cc_cookie", expiresAfterDays: 180, sameSite: "Lax" },
    guiOptions: {
      consentModal: { layout: "box wide", position: "bottom left", equalWeightButtons: true },
      preferencesModal: { layout: "box", equalWeightButtons: true },
    },
    categories: {
      necessary: { enabled: true, readOnly: true },
      externalMedia: { enabled: false },
    },
    language: { default: "hu", translations: { hu: {
      consentModal: {
        title: "Ön dönt a sütikről",
        description: "A szükséges süti megjegyzi a választását. A Google Térképet csak az engedélyével töltjük be. Google Ads- és Meta Pixel-követés jelenleg nem működik az oldalon.",
        acceptAllBtn: "Összes elfogadása",
        acceptNecessaryBtn: "Csak szükséges",
        showPreferencesBtn: "Beállítások",
        footer: '<a href="/adatvedelmi-iranyelvek/">Adatvédelmi tájékoztató</a>',
      },
      preferencesModal: {
        title: "Sütibeállítások",
        acceptAllBtn: "Összes elfogadása",
        acceptNecessaryBtn: "Csak szükséges",
        savePreferencesBtn: "Beállítások mentése",
        closeIconLabel: "Bezárás",
        serviceCounterLabel: "szolgáltatás|szolgáltatás",
        sections: [
          { title: "Az Ön választása", description: "Az opcionális tartalmak alapból ki vannak kapcsolva. A beállításokat a láblécben bármikor módosíthatja. A visszavonás a korábbi adatkezelés jogszerűségét nem érinti." },
          { title: "Szükséges süti (mindig aktív)", linkedCategory: "necessary", description: "A cc_cookie a hozzájárulási beállításokat, időpontot és véletlenszerű hozzájárulási azonosítót tárolja ebben a böngészőben. Nem reklámcélú követésre szolgál.", cookieTable: { headers: { name: "Név", provider: "Szolgáltató", duration: "Élettartam" }, body: [{ name: "cc_cookie", provider: "Borbándi Barkács", duration: "180 nap" }] } },
          { title: "Külső tartalmak – Google Térkép", linkedCategory: "externalMedia", description: 'Engedélyezéskor a Google térképe betöltődik, így a Google megkapja többek között az IP-címet és a böngésző technikai adatait, és saját szabályai szerint sütiket használhat. <a href="https://policies.google.com/privacy?hl=hu" target="_blank" rel="noopener noreferrer">A Google adatvédelmi tájékoztatója</a>.' },
          { title: "Marketing – jelenleg kikapcsolva", description: "A Google Ads és a Meta Pixel jelenleg nincs használatban, ezért nem kérünk marketing-hozzájárulást. Aktiválásuk előtt külön választható hozzájárulás és frissített tájékoztató szükséges." },
          { title: "További információ", description: '<a href="/adatvedelmi-iranyelvek/">Adatvédelmi tájékoztató</a> · Kapcsolat: <a href="mailto:mibkft@gmail.com">mibkft@gmail.com</a>' },
        ],
      },
    } } },
  }).catch((error) => { initialization = undefined; console.error("A sütikezelő nem indult el.", error); });
}

export default function ConsentManager() {
  useEffect(() => { void initializeConsent(); }, []);
  return null;
}

export function CookieSettingsButton() {
  return <button type="button" className="cursor-pointer underline underline-offset-4 hover:text-brand-orange" onClick={async () => { await initializeConsent(); CookieConsent.showPreferences(); }}>Sütibeállítások</button>;
}

export function ConsentMap() {
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const sync = () => setAllowed(CookieConsent.acceptedCategory("externalMedia"));
    window.addEventListener("cc:onConsent", sync);
    window.addEventListener("cc:onChange", sync);
    void initializeConsent().then(sync);
    return () => {
      window.removeEventListener("cc:onConsent", sync);
      window.removeEventListener("cc:onChange", sync);
    };
  }, []);
  return <section aria-label="Borbándi Barkács üzletünk térképen" className="w-full border-t border-line">
    {allowed ? <iframe title="Borbándi Barkács – üzletünk térképen" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.0452092759465!2d20.1590289758597!3d47.17655141757623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741419e3f8164cd%3A0xb32258b2cf8a554e!2zQm9yYsOhbmRpIEJhcmvDoWNz!5e0!3m2!1shu!2shu!4v1793779002423!5m2!1shu!2shu" width="600" height="450" className="block h-[350px] w-full border-0 sm:h-[450px]" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /> :
      <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 bg-cream px-6 py-12 text-center">
        <h2 className="text-xl font-semibold">Találjon meg minket Szolnokon!</h2>
        <p className="max-w-xl text-sm leading-6 text-muted">A Google Térkép megjelenítéséhez engedélyezze a külső tartalmakat. A térkép betöltése adatokat továbbít a Google részére.</p>
        <CookieSettingsButton />
        <a className="text-sm underline" href="https://www.google.com/maps/search/?api=1&query=Borb%C3%A1ndi+Bark%C3%A1cs+Szolnok" target="_blank" rel="noopener noreferrer">Útvonaltervezés a Google Térképen (külső oldal)</a>
      </div>}
  </section>;
}

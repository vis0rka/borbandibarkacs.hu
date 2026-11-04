"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";

let initialization: Promise<void> | undefined;
export function initializeConsent() {
  return initialization ??= CookieConsent.run({
    mode: "opt-in",
    revision: 2,
    cookie: { name: "cc_cookie", expiresAfterDays: 180, sameSite: "Lax" },
    guiOptions: {
      consentModal: { layout: "box wide", position: "bottom left", equalWeightButtons: true },
      preferencesModal: { layout: "box", equalWeightButtons: true },
    },
    categories: {
      necessary: { enabled: true, readOnly: true },
    },
    language: { default: "hu", translations: { hu: {
      consentModal: {
        title: "Tájékoztató a sütikről",
        description: "A szükséges süti megjegyzi a választását. A Google Térkép automatikusan betöltődik, a sütibeállításoktól függetlenül. Google Ads- és Meta Pixel-követés jelenleg nem működik az oldalon.",

        acceptNecessaryBtn: "Tudomásul vettem",
        showPreferencesBtn: "Beállítások",
        footer: '<a href="/adatvedelmi-iranyelvek/">Adatvédelmi tájékoztató</a>',
      },
      preferencesModal: {
        title: "Sütibeállítások",

        acceptNecessaryBtn: "Tudomásul vettem",
        savePreferencesBtn: "Beállítások mentése",
        closeIconLabel: "Bezárás",
        serviceCounterLabel: "szolgáltatás|szolgáltatás",
        sections: [
          { title: "Az Ön választása", description: "Jelenleg nincs választható sütikategória. A Google Térkép automatikusan betöltődik, és ezzel adatokat továbbít a Google részére. A térképet ez a felület nem kapcsolja ki." },
          { title: "Szükséges süti (mindig aktív)", linkedCategory: "necessary", description: "A cc_cookie a hozzájárulási beállításokat, időpontot és véletlenszerű hozzájárulási azonosítót tárolja ebben a böngészőben. Nem reklámcélú követésre szolgál.", cookieTable: { headers: { name: "Név", provider: "Szolgáltató", duration: "Élettartam" }, body: [{ name: "cc_cookie", provider: "Borbándi Barkács", duration: "180 nap" }] } },
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

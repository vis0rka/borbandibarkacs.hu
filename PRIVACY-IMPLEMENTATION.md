# Adatvédelem és sütikezelés

Frissítve: 2026-11-04. A cég címét a tulajdonos megerősítése alapján 5000 Szolnok, Abonyi út 1-re módosítottuk. Az üzlet korábbi 1/B címe ettől külön adat; nem írtuk át automatikusan az üzletcímeket.

- vanilla-cookieconsent helyben csomagolva, magyar UI, opt-in mód, 180 napos cc_cookie, 1. hozzájárulási verzió.
- A Google Maps iframe csak externalMedia engedéllyel létezik a DOM-ban; visszavonáskor eltávolítjuk. A Google saját domainjén tárolt sütik innen nem törölhetők.
- Google Ads, Meta Pixel és Analytics nincs bekötve. Nincs azonosító, távoli követőkód vagy marketingesemény. A marketingre most nem gyűjtünk előzetes engedélyt.
- Aktiváláskor külön, alapból kikapcsolt marketingkategória és szolgáltatásonkénti választás szükséges; emelni kell a revision számot. A térkép engedélye nem használható marketingre. A követőkódokat csak engedély után szabad betölteni, visszavonáskor le kell állítani őket. Google Ads esetén Consent Mode v2 beállítás és tényleges konverziók tesztelése is szükséges.
- A hozzájárulási adatok csak a böngésző sütijében vannak; központi, ellenőrizhető hozzájárulási napló nincs. Aktív marketing előtt a hozzájárulás bizonyíthatóságát is rendezni kell.
- A Cloudflare-fiók hozzáférése nélkül az infrastruktúra naplózási/megtartási és régióbeállításai nem ellenőrizhetők. A közzétett tájékoztató nem állít kitalált megőrzési időt vagy EU-only feldolgozást. Ezeket és a levelezés tényleges megőrzési rendjét az üzemeltetőnek pontosítania kell; utána a szöveget ehhez kell frissíteni.

Források:
- https://cookieconsent.orestbida.com/reference/configuration-reference.html
- https://cookieconsent.orestbida.com/reference/api-reference.html
- https://www.cloudflare.com/privacypolicy/
- https://www.cloudflare.com/cloudflare-customer-dpa/
- https://www.google.com/about/company/user-consent-policy/
- https://developers.google.com/tag-platform/security/guides/consent
- https://policies.google.com/privacy?hl=hu
- https://policies.google.com/technologies/ads?hl=hu
- https://www.facebook.com/privacy/policy/ (az ellenőrzéskor bejelentkezési/hozzáférési korlát miatt nem olvasható)
- https://www.naih.hu/ugyfelszolgalat-kapcsolat

Ellenőrzés: TypeScript és éles build sikeres (21 előrenderelt útvonal). Böngészőben ellenőrizve: magyar első látogatási sáv, elfogadás utáni térkép, visszavonás utáni eltávolítás, elutasítás megőrzése újratöltés után, láblécből újranyitható magyar beállítóablak.

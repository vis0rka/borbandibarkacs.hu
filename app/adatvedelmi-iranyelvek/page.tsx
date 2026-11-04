import type { Metadata } from "next";
import ContentPage, { articleStyles } from "../content-page";
import { container } from "../service-content";
import { CookieSettingsButton } from "../cookie-consent";

export const metadata: Metadata = {
  title: "Adatvédelmi irányelvek – Borbándi Barkács",
  description: "Tájékoztató a kapcsolatfelvételről, a Cloudflare-tárhelyről, a sütikről és a Google Térképről.",
};

export default function Privacy() {
  return <ContentPage title="Adatvédelmi irányelvek" eyebrow="Adatkezelési tájékoztató">
    <div className={`${container} py-12 md:py-16`}>
      <article className={`${articleStyles} max-w-4xl break-words`}>
        <p>Utolsó frissítés: 2026. november 4.</p>
        <p>Ez a tájékoztató a Borbándi Barkács honlapjának használatához és az innen indított kapcsolatfelvételhez kapcsolódó személyesadat-kezelést ismerteti.</p>
        <h2>1. Az adatkezelő és elérhetőségei</h2>
        <ul><li><strong>Adatkezelő:</strong> Magyar Ipari Beszállító Kft.</li><li><strong>Cím:</strong> 5000 Szolnok, Abonyi út 1.</li><li><strong>Adószám:</strong> 23131116-2-42</li><li><strong>Cégjegyzékszám:</strong> 01-09-954422</li><li><strong>E-mail:</strong> <a href="mailto:mibkft@gmail.com">mibkft@gmail.com</a></li><li><strong>Telefon:</strong> <a href="tel:+3656342227">+36 56 342 227</a></li></ul>
        <h2>2. A honlap kiszolgálása – Cloudflare</h2>
        <p>A honlap frontendjét a Cloudflare Workers szolgáltatás szolgálja ki. A tárhely- és hálózati szolgáltató Cloudflare, Inc. (101 Townsend Street, San Francisco, CA 94107, USA). Az oldal megnyitásakor a kiszolgáláshoz és a biztonság fenntartásához technikai adatok kezelése szükséges: IP-cím, a kérés ideje, kért webcím, böngésző- és eszközadatok, valamint a kéréshez tartozó HTTP-fejlécek.</p>
        <p>Ennek célja a tartalom eljuttatása, a hibák és támadások kezelése. Jogalapja a biztonságos, működő honlap biztosításához fűződő jogos érdekünk (GDPR 6. cikk (1) f)). Ez ellen az Ön saját helyzetével kapcsolatos okból tiltakozhat. Az alkalmazásban nem vezettünk be külön látogatói adatbázist vagy egyedi hozzáférési naplót. A Cloudflare infrastruktúrájában keletkező technikai adatok megőrzése az igénybe vett szolgáltatás és annak beállításai szerint történik; erről a fenti elérhetőségen kérhet részletes tájékoztatást.</p>
        <p>A Cloudflare a szolgáltatás keretében adatfeldolgozóként járhat el, bizonyos saját biztonsági és üzemeltetési célokra pedig önálló adatkezelő. Részletek: <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare adatvédelmi szabályzat</a>, <a href="https://www.cloudflare.com/cloudflare-customer-dpa/">adatfeldolgozási megállapodás</a>.</p>
        <h2>3. Kapcsolatfelvétel</h2>
        <p>A kapcsolatfelvételi mezők az Ön saját levelezőprogramjában készítenek elő egy levelet. Az űrlap adatait a honlap nem küldi el automatikusan, és szerveroldali űrlap-adatbázisban nem tárolja. Az üzenetet Ön küldi el a levelezőprogramjából.</p>
        <p>Elküldés után a megadott nevet, e-mail-címet, az üzenet tartalmát és a levelezés adatait a megkeresés megválaszolására kezeljük. Szerződéskötést megelőző, Ön által kezdeményezett érdeklődésnél a jogalap a GDPR 6. cikk (1) b), egyéb üzleti megkeresésnél a válaszadáshoz fűződő jogos érdek (6. cikk (1) f)). Kizárólag a megkeresés intézéséhez szükséges adatokat kérjük; különleges adatokat ne küldjön.</p>
        <p>A kapcsolattartás e-mailben történik, a Gmail szolgáltatás igénybevételével (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Írország). A megőrzés a megkeresés rendezéséhez szükséges ideig tart; szerződés, panasz vagy jogi igény esetén az adott ügyre irányadó jogszabályi kötelezettség és igényérvényesítési idő határozza meg. Az adott levelezésre vonatkozó megőrzésről kérésére tájékoztatást adunk. <a href="https://policies.google.com/privacy?hl=hu">A Google adatvédelmi tájékoztatója</a>.</p>
        <h2>4. Sütik és a hozzájárulás kezelése</h2>
        <p>A vanilla-cookieconsent sütikezelő helyben, a honlap részeként működik; a választását nem továbbítja a csomag fejlesztőjének. A saját cc_cookie süti 180 napig tárolja az elfogadott kategóriákat, a választás időpontját, a tájékoztató verzióját és egy véletlenszerű hozzájárulási azonosítót. Célja a választás megjegyzése és érvényesítése; jogalapja az ehhez fűződő jogos érdekünk. E szükséges süti nem reklámcélú, és a honlap nem vezet központi hozzájárulási nyilvántartást.</p>
        <p>Jelenleg nincs választható sütikategória. A Google Térkép a sütibeállításoktól függetlenül, automatikusan betöltődik. A sütikezelőben adott visszajelzés a tájékoztató tudomásulvételére szolgál, nem a térkép adatkezeléséhez adott hozzájárulás. A tájékoztató a láblécből bármikor újranyitható.</p>
        <CookieSettingsButton />
        <h2>5. Google Térkép</h2>
        <p>A beágyazott Google Térkép az oldal megnyitásakor, illetve a térképhez görgetéskor automatikusan betöltődik. A Google Ireland Limited megkapja az IP-címet, a böngésző technikai adatait és a térképpel végzett interakciókat; saját beállításai és szabályai szerint sütiket is használhat. Célja az üzlet helyének megjelenítése. Ez a külső szolgáltatás a sütikezelőben nem kapcsolható ki.</p>
        <p>A térkép automatikus betöltése nem jelenti azt, hogy a Google adatkezelése vagy sütijei feltétlenül szükségesek a honlap működéséhez. A hozzájárulás nélküli használat megfelelő jogalapjának és feltételeinek vizsgálata még szükséges.</p>
        <p>A Google adatkezeléséről és megőrzési időiről az <a href="https://policies.google.com/privacy?hl=hu">adatvédelmi szabályzat</a> és a <a href="https://policies.google.com/technologies/cookies?hl=hu">sütitájékoztató</a> ad tájékoztatást. A Google saját domainjén tárolt sütiket a böngészőjében és Google-fiókjában kezelheti.</p>
        <h2>6. Google Ads és Meta (Facebook) Pixel</h2>
        <p><strong>Jelenleg egyik szolgáltatás sincs aktiválva.</strong> Nincs beállítva Google Ads- vagy Meta Pixel-azonosító, a honlap nem tölt be ilyen követőkódot, nem továbbít ezeknek marketingeseményt, és nem helyez el hozzájuk tartozó marketing-sütit. Google Analytics sem működik az oldalon.</p>
        <p>Később hirdetések eredményességének mérésére és személyre szabott hirdetésekhez közönségek kialakítására használhatjuk a Google Ads és a Meta Pixel szolgáltatásokat. Bevezetésük előtt frissítjük ezt a tájékoztatót a tényleges eseményekkel, sütikkel, megőrzési időkkel és adatkezelői szerepekkel, és külön választható, alapból kikapcsolt hozzájárulást kérünk. A térkép betöltése és a sütitájékoztató tudomásulvétele nem ad engedélyt későbbi marketingkövetésre.</p>
        <p>Lehetséges szolgáltatók: Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Írország) és Meta Platforms Ireland Limited (Merrion Road, Dublin 4, D04 X2K5, Írország). Előzetes tájékozódáshoz: <a href="https://policies.google.com/technologies/ads?hl=hu">Google hirdetési adatkezelés</a>, <a href="https://www.facebook.com/privacy/policy/">Meta adatvédelmi szabályzat</a>.</p>
        <h2>7. Nemzetközi adattovábbítás és adatbiztonság</h2>
        <p>A Cloudflare és a Google globális szolgáltatásaival az Európai Gazdasági Térségen kívüli, így egyesült államokbeli adatkezelés is együtt járhat. A továbbításoknál az adott szolgáltató által alkalmazott, GDPR V. fejezete szerinti garanciák – az alkalmazhatóság feltételeivel megfelelőségi határozat, illetve általános adatvédelmi kikötések és szükséges kiegészítő intézkedések – irányadók. Nem állítjuk, hogy minden adat kizárólag az EU-ban marad. A garanciákról a szolgáltatók hivatkozott tájékoztatóiban és nálunk érdeklődhet.</p>
        <p>A honlap titkosított HTTPS-kapcsolatot használ. Személyes adataihoz csak az ügyintézéshez és üzemeltetéshez szükséges hozzáférést biztosítjuk. A jelenlegi honlapon nincs felhasználói fiók, hírlevél-feliratkozás, online fizetés vagy automatikus profilalkotáson alapuló döntéshozatal.</p>
        <h2>8. Az Ön jogai és jogorvoslat</h2>
        <p>A GDPR feltételei szerint kérhet hozzáférést, helyesbítést, törlést, az adatkezelés korlátozását, és hozzájáruláson vagy szerződésen alapuló automatizált adatkezelésnél adathordozhatóságot. Jogos érdeken alapuló adatkezelés ellen tiltakozhat, hozzájárulását bármikor visszavonhatja. Kérelmét a <a href="mailto:mibkft@gmail.com">mibkft@gmail.com</a> címre vagy postacímünkre küldheti. Szükség esetén arányos módon ellenőrizzük a kérelmező személyazonosságát.</p>
        <p>Indokolatlan késedelem nélkül, általában egy hónapon belül válaszolunk. Összetett vagy több kérelem esetén ez legfeljebb további két hónappal hosszabbítható, amelynek okáról az első hónapon belül tájékoztatjuk. A kérelmek kezelése főszabály szerint díjmentes.</p>
        <p>Panaszt tehet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH): 1055 Budapest, Falk Miksa utca 9–11.; postacím: 1363 Budapest, Pf. 9. Az aktuális elérhetőségek és az eljárásindítás módjai a <a href="https://www.naih.hu/ugyfelszolgalat-kapcsolat">NAIH honlapján</a> találhatók. Bírósági jogorvoslatot is igénybe vehet.</p>
      </article>
    </div>
  </ContentPage>;
}

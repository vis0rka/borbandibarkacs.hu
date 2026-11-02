# vinext app

This project was created with create-vinext-app.

## Scripts

- `pnpm run dev` starts the vinext dev server.
- `pnpm run build` builds the Cloudflare Worker output.
- `pnpm run start` previews the built Worker locally.
- `pnpm run deploy` deploys the Cloudflare Worker.


## Főoldal

A főoldal a Wayback Machine 2026. április 11-i mentésének tartalmából épült újra.
Az eredeti logó 2019-es mentésből, az üzletfotók és a betűkészletek a 2026-os mentésből származnak; minden használt fájl helyben található a `public/` mappában. A hiányzó kategóriaképeket Pexels-illusztrációk pótolják; forrásaik a PHOTOS.md fájlban találhatók.

- Fejlesztés: `npm run dev:vinext` (http://localhost:3001)
- Típusellenőrzés: `npx tsc --noEmit`
- Cloudflare build: `npm run build:vinext`
- Telepítés a meglévő konfigurációval: `npm run deploy:vinext`

A menü egyelőre a főoldal szakaszaira mutat. A kapcsolatfelvételi űrlap a látogató levelezőprogramját nyitja meg, nem küld szerveroldalon levelet. A nyitvatartás és az elérhetőségek az archívumból származnak; publikálás előtt ellenőrizendők.

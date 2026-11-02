export const services = [
  {
    "slug": "allvanyberles-2",
    "title": "Állványbérlés",
    "eyebrow": "Biztos alap a magasban végzett munkához",
    "icon": "Fence",
    "paragraphs": [
      "Cégünk foglalkozik alumínium gurulóállvány bérbeadásával, 2 métertől 12 méterig."
    ],
    "summary": "Alumínium gurulóállvány bérbeadása, 2 métertől 12 méterig.",
    "date": "20240722203518",
    "scheme": "https"
  },
  {
    "slug": "gepkolcsonzes-2",
    "title": "Gépkölcsönzés",
    "eyebrow": "A megfelelő gép a feladathoz",
    "icon": "Drill",
    "paragraphs": [
      "Cégünk foglalkozik elektromos gépek bérbeadásával.",
      "Folyamatosan bővülő gépparkunk SDS+ ütvefúrókkal, vésőgépekkel és útfeltörő gépekkel rendelkezik."
    ],
    "summary": "Elektromos gépek, SDS+ ütvefúrók, vésőgépek és útfeltörő gépek bérbeadása.",
    "date": "20240722202739",
    "scheme": "http"
  },
  {
    "slug": "szaktanacsadas-2",
    "title": "Szaktanácsadás",
    "eyebrow": "Kérdezze szakképzett kollégáinkat",
    "icon": "MessagesSquare",
    "paragraphs": [
      "Az általunk forgalmazott termékek kapcsán felmerülő technikai kérdés esetén állunk rendelkezésükre szakképzett kollégáinkkal, az alábbi elérhetőségeken."
    ],
    "summary": "Technikai kérdésekben szakképzett kollégáink állnak rendelkezésére.",
    "date": "20240912015311",
    "scheme": "https"
  },
  {
    "slug": "kiszallitas-2",
    "title": "Kiszállítás",
    "eyebrow": "Országos kiszállítás",
    "icon": "Truck",
    "paragraphs": [
      "A tőlünk vásárolt és megrendelt termékeket az ország egész területére kiszállítjuk – saját autónkkal vagy futárszolgálattal – a kért címre."
    ],
    "summary": "A megvásárolt és megrendelt termékek kiszállítása az ország egész területére.",
    "date": "20240912023334",
    "scheme": "https"
  }
] as const;
export type ServiceSlug = (typeof services)[number]["slug"];

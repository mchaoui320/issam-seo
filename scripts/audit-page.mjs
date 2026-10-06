#!/usr/bin/env node
/**
 * Audit mesuré d'une ou plusieurs pages.
 *
 * Sert de base commune aux revues croisées entre Claude Code et ChatGPT Codex :
 * tant que la critique porte sur des nombres, elle ne dégénère pas en débat
 * d'opinion. Ce qui n'est pas mesurable ici reste à juger à la lecture — la
 * grille est dans docs/REVUE.md.
 *
 * Usage :
 *   npm run dev                       # dans un autre terminal
 *   node scripts/audit-page.mjs /geo /netlinking
 *   node scripts/audit-page.mjs --all
 *   node scripts/audit-page.mjs --all --json > audit.json
 */

const BASE = process.env.AUDIT_BASE ?? "http://localhost:3000";

const SEUILS = {
  mots: 1200,
  densiteMax: 2.5,
  densiteMin: 0.8,
  cta: 3,
  faq: 4,
  liensInternes: 10,
  h2: 5,
};

/** Pages de vente soumises aux seuils. Les pages légales en sont exclues. */
const PAGES_DE_VENTE = [
  "/seo",
  "/audit-seo",
  "/seo-technique",
  "/seo-local",
  "/strategie-contenu-seo",
  "/netlinking",
  "/refonte-seo",
  "/geo",
  "/geo-referencement-ia",
  "/audit-visibilite-ia",
  "/analyse-concurrentielle-seo-geo",
  "/data-web",
  "/plan-marquage-ga4",
  "/dashboard-seo",
  "/consultant-seo-freelance",
  "/tarifs",
  "/methode-seo",
  "/livrables-seo",
  "/a-propos",
  "/contact",
  "/etudes-de-cas",
  "/consultant-seo-marseille",
  "/consultant-seo-paris",
  "/consultant-seo/lyon",
  "/consultant-seo/toulouse",
  "/consultant-seo/nice",
  "/consultant-seo/nantes",
  "/consultant-seo/montpellier",
  "/consultant-seo/strasbourg",
  "/consultant-seo/bordeaux",
  "/consultant-seo/lille",
];

/** Retire scripts, styles et balises pour ne garder que le texte lu. */
function texteVisible(html) {
  const corps = html.replace(/<body[^>]*>([\s\S]*)<\/body>/i, "$1") || html;
  return corps
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function balise(html, nom) {
  const re = new RegExp(`<${nom}[^>]*>([\\s\\S]*?)</${nom}>`, "gi");
  return [...html.matchAll(re)].map((m) =>
    m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(),
  );
}

const VIDES = new Set(
  ("le la les un une des de du d et à a au aux en pour dans sur par avec sans " +
   "nos vos votre notre leur qui que quoi ce cette ces son sa ses est sont " +
   "être avoir plus moins très tout tous toute toutes pas ne il elle on nous " +
   "vous ils elles se sa si mais ou où donc or ni car vers chez entre sous " +
   "comme quand dont lui leurs cela celui autre autres bien peu déjà encore " +
   "aussi même fait faire plutôt alors ainsi")
    .split(" "),
);

const norme = (s) =>
  (s ?? "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

/**
 * Terme le plus répété de la page, parmi les mots porteurs.
 *
 * On ne cherche pas à deviner le mot-clé visé : on cherche la sur-répétition,
 * d'où qu'elle vienne. Un terme qui dépasse le seuil est un signal de
 * sur-optimisation, qu'il ait été ciblé volontairement ou non.
 */
function termeDominant(texte) {
  const mots = norme(texte)
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((m) => m.length > 3 && !VIDES.has(m));
  const freq = new Map();
  for (const m of mots) freq.set(m, (freq.get(m) ?? 0) + 1);
  let terme = "";
  let n = 0;
  for (const [m, c] of freq) if (c > n) [terme, n] = [m, c];
  return { terme, occurrences: n, totalMots: mots.length };
}

/** Densité d'un terme explicite, quand on veut vérifier une cible précise. */
function densiteDe(texte, terme) {
  if (!terme) return null;
  const t = norme(texte);
  const cible = norme(terme);
  let n = 0;
  let i = t.indexOf(cible);
  while (i !== -1) {
    n++;
    i = t.indexOf(cible, i + cible.length);
  }
  return n;
}

async function auditer(chemin) {
  const url = `${BASE}${chemin}`;
  let html;
  try {
    const r = await fetch(url);
    if (!r.ok) return { chemin, erreur: `HTTP ${r.status}` };
    html = await r.text();
  } catch (e) {
    return { chemin, erreur: `injoignable (${e.cause?.code ?? e.message})` };
  }

  const texte = texteVisible(html);
  const mots = texte.split(" ").filter(Boolean).length;
  const h1 = balise(html, "h1")[0] ?? "";
  const h2 = balise(html, "h2");
  const dominant = termeDominant(texte);
  const densite = mots ? (dominant.occurrences / mots) * 100 : 0;
  // Terme cible optionnel : --cle="agence seo marseille"
  const cibleArg = process.argv
    .find((a) => a.startsWith("--cle="))
    ?.slice(6);
  const occCible = cibleArg ? densiteDe(texte, cibleArg) : null;

  const jsonld = [...html.matchAll(/application\/ld\+json[^>]*>([\s\S]*?)</g)]
    .map((m) => m[1])
    .join(" ");

  const liens = [
    ...new Set(
      [...html.matchAll(/href="(\/[^"#?][^"]*)"/g)].map((m) => m[1]),
    ),
  ].filter((h) => !h.startsWith("/_next"));

  const titre = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "")
    .replace(/\s+/g, " ")
    .trim();
  const description =
    html.match(/<meta name="description" content="([^"]*)"/i)?.[1] ?? "";

  return {
    chemin,
    titre,
    longueurTitre: titre.length,
    description,
    longueurDescription: description.length,
    h1,
    termeDominant: dominant.terme,
    mots,
    occurrences: dominant.occurrences,
    densite: +densite.toFixed(2),
    ...(cibleArg
      ? {
          cible: cibleArg,
          densiteCible: +((occCible / mots) * 100).toFixed(2),
        }
      : {}),
    h2: h2.length,
    h3: balise(html, "h3").length,
    cta: (html.match(/href="\/contact"/g) ?? []).length,
    faq: (html.match(/"@type":"Question"/g) ?? []).length,
    faqBalisee: jsonld.includes("FAQPage"),
    liensInternes: liens.length,
    images: (html.match(/<img /g) ?? []).length,
    schemas: [
      ...new Set(
        [...jsonld.matchAll(/"@type":"([A-Za-z]+)"/g)].map((m) => m[1]),
      ),
    ],
  };
}

function verdict(a) {
  if (a.erreur) return ["ERREUR"];
  const ko = [];
  if (a.mots < SEUILS.mots) ko.push(`mots ${a.mots} < ${SEUILS.mots}`);
  if (a.densite > SEUILS.densiteMax)
    ko.push(`densité ${a.densite}% > ${SEUILS.densiteMax}%`);
  if (a.cta < SEUILS.cta) ko.push(`CTA ${a.cta} < ${SEUILS.cta}`);
  if (a.faq < SEUILS.faq) ko.push(`FAQ ${a.faq} < ${SEUILS.faq}`);
  if (!a.faqBalisee) ko.push("FAQPage absent");
  if (a.liensInternes < SEUILS.liensInternes)
    ko.push(`liens ${a.liensInternes} < ${SEUILS.liensInternes}`);
  if (a.h2 < SEUILS.h2) ko.push(`H2 ${a.h2} < ${SEUILS.h2}`);
  if (a.longueurTitre > 60) ko.push(`title ${a.longueurTitre} car. > 60`);
  if (a.images === 0) ko.push("aucune image");
  return ko;
}

const args = process.argv.slice(2);
const json = args.includes("--json");
const cibles = args.includes("--all")
  ? PAGES_DE_VENTE
  : args.filter((a) => a.startsWith("/"));

if (!cibles.length) {
  console.error(
    "Usage : node scripts/audit-page.mjs /geo /netlinking   |   --all [--json]",
  );
  process.exit(1);
}

const resultats = [];
for (const c of cibles) resultats.push(await auditer(c));

if (json) {
  console.log(JSON.stringify(resultats, null, 2));
  process.exit(0);
}

console.log(`\nBase : ${BASE}\n`);
const l = (s, n) => String(s).padEnd(n).slice(0, n);
console.log(
  l("page", 34) + l("mots", 7) + l("dens.", 7) + l("CTA", 5) +
    l("FAQ", 5) + l("liens", 7) + l("img", 5) + "verdict",
);
console.log("-".repeat(124));

let conformes = 0;
for (const a of resultats) {
  if (a.erreur) {
    console.log(l(a.chemin, 34) + a.erreur);
    continue;
  }
  const ko = verdict(a);
  if (!ko.length) conformes++;
  console.log(
    l(a.chemin, 34) +
      l(a.mots, 7) +
      l(a.termeDominant, 20) +
      l(a.densite + "%", 7) +
      l(a.cta, 5) +
      l(a.faq, 5) +
      l(a.liensInternes, 7) +
      l(a.images, 5) +
      (ko.length ? "✗ " + ko.join(" · ") : "✓"),
  );
}
console.log(
  `\n${conformes}/${resultats.filter((r) => !r.erreur).length} page(s) conforme(s).\n`,
);

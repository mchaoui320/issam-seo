# Journal de travail — MIC SIGNAL

> Une ligne par session de travail, la plus récente en haut.
> **Claude Code** et **ChatGPT Codex** écrivent tous les deux ici.
>
> Format : date · agent · ce qui a été fait · **mesure** · fichiers touchés.
> Une entrée sans mesure chiffrée n'a pas d'intérêt : « j'ai amélioré la page »
> ne permet à personne de vérifier quoi que ce soit.

---

## 2026-10-06 · 🤖 Claude Code

**Mise en place du pilotage partagé.**

- Création de `docs/BRIEF-PROJET.md`, `docs/TODO.md`, `docs/PROMPT-CODEX.md`
  et de ce journal.
- Lecture du CV d'Issam et extraction des éléments EEAT exploitables
  (5 ans d'expérience, Solution Nuisible, WEBNOTORIÉTÉ, PSA, Master 2 Data
  Analytics Toulon, outils Python adossés aux API LLM).

**État des lieux mesuré avant travaux :**

| Constat | Valeur |
|---|---|
| Images sur tout le site | **0** |
| `/a-propos` | **129 mots** |
| `/geo` (pilier) | **215 mots** |
| `/contact` | 32 lignes, un `mailto` |
| `issam@issam-chaoui.fr` en dur | **4 fichiers** |

Fichiers concernés par l'e-mail interdit : `src/app/contact/page.tsx`,
`src/app/mentions-legales/page.tsx`, `src/app/politique-confidentialite/page.tsx`,
`src/components/site/Contact.tsx`.

**Phase 0.1 terminée.** `src/lib/contact.ts` créé : `CONTACT_EMAIL`,
`CALENDLY_URL`, `LINKEDIN_URL`, `RESPONSE_TIME`, tous alimentés par
l'environnement. Les 4 occurrences de l'adresse en dur sont supprimées.
Les pages légales renvoient vers `/contact`. Le formulaire propose une copie
presse-papiers tant qu'aucune adresse n'est configurée, et basculera
automatiquement sur `mailto:` le jour où `NEXT_PUBLIC_CONTACT_EMAIL` sera
renseignée.

Une violation de voix a aussi été trouvée et corrigée dans `enrichment.ts`
(« un marché que je connais… ma localisation »). À noter : `cities-sales.ts:155`
contient « Mon activité couvre… » mais c'est le visiteur qui parle dans une
question de FAQ — légitime, à ne pas corriger.

**Contrôles après travaux :** voix 0 · e-mail interdit 0 · `<img>` 0 ·
fichiers CSS 1 · build vert.

**Prochaine action :** phase 0.2 (composant `Figure`) puis phase 1 — les pages
de vente service, en commençant par `/netlinking` et `/geo` qui sont les plus
minces.

---

## Sessions antérieures (résumé)

**Pages locales transformées en pages de vente.** Suppression d'un bloc qui
affichait la liste des requêtes visées — 87 mots pour 9 occurrences du nom de
ville, soit 10,3 % de densité : du bourrage caractérisé. Remplacé par un bloc
prestations avec livrables nommés et liens internes.
Marseille : 453 → 1 559 mots · densité 5,08 % → 2,31 % · 3 → 13 liens internes ·
`FAQPage` ajouté.

**10 villes couvertes.** Ajout de Nantes et Strasbourg pour compléter le top 10
français. Recouvrement lexical maximal mesuré entre deux villes : **8 %** — du
texte dupliqué dépasserait 70 %.

**Bloc de conclusion passé en clair.** C'était le seul aplat sombre hors pied de
page. Contrastes vérifiés : 18,2:1 sur le titre, 6,1:1 sur le paragraphe.

**Voix d'agence appliquée.** 16 formulations basculées en « on / nous ».

**CSS consolidé.** `globals.css` + `final.css` + `polish.css` fusionnés en un
seul fichier. 157 groupes de sélecteurs dupliqués, 837 déclarations mortes
retirées. Vérifié par empreinte des styles calculés de 675 éléments, avec
calibrage du bruit de mesure (deux captures sur un CSS identique produisent
27 écarts, l'écart observé après refactor était de 10 : aucune régression).
7 708 → 6 856 lignes · CSS expédié 141 → 110 Ko brut.

**Polices réparées.** Les polices Google chargées étaient annulées par un
`font-family: Helvetica` déclaré dans la dernière couche CSS. C'était la cause
réelle de l'aspect daté du site, pas un choix de design.

**Analyseur de citabilité IA** ajouté au Lab : 8 critères pondérés, calcul
entièrement dans le navigateur.

**Glossaire** de 44 définitions avec `DefinedTermSet` et ancres stables.

**Infrastructure GEO** : `lib/schema.ts` (13 types JSON-LD), `lib/enrichment.ts`
(réponse autonome, points saillants, FAQ, dates sur 25 pages), `llms.txt` et
`llms-full.txt` générés depuis le contenu, 19 robots IA déclarés, `lastmod` réel
dans le sitemap.

**Audit concurrence** sur `paulvengeons.fr`, `raphaeltuil.fr`,
`alexandredelandre.com`. Synthèse en section 2 de `docs/BRIEF-PROJET.md`.

# TODO — MIC SIGNAL

> Fichier de pilotage partagé **Claude Code** ↔ **ChatGPT Codex**.
> Lire `docs/BRIEF-PROJET.md` avant d'ouvrir ce fichier.

## Légende

| Symbole | Sens |
|---|---|
| `[ ]` | à faire |
| `[~]` | **en cours** — ne pas toucher aux fichiers listés |
| `[x]` | fait et vérifié |
| `[!]` | bloqué — raison indiquée |
| 🤖 **C** | Claude Code |
| 🤖 **X** | ChatGPT Codex |

**Avant de commencer une tâche :** passer son statut à `[~]`, mettre son nom,
committer ce fichier seul. **Après :** passer à `[x]`, noter le résultat mesuré,
écrire une ligne dans `docs/JOURNAL.md`.

---

# ⚠️ D0 — DÉCISION URGENTE : le worktree Codex est périmé

Le worktree `/Users/issam/projects/issam-seo-refonte` contient **93 fichiers
modifiés non commités**, sur la base `a0997f9` — **12 commits de retard**.

Ce travail a été fait avant : la réparation des polices, la fusion des trois
feuilles CSS, le passage en voix d'agence, la refonte des pages villes et
l'éradication de l'e-mail en dur.

**Si Codex commite ça tel quel, le conflit sera massif et une partie du travail
récent sera écrasée.**

Trois options, à trancher par Issam :

| Option | Conséquence |
|---|---|
| **A — Abandonner** | On perd ce travail, mais il est bâti sur un socle qui n'existe plus. `git -C ../issam-seo-refonte checkout .` |
| **B — Sauvegarder puis trier** | Commiter sur `codex/refonte-seo-geo-data`, ouvrir une PR, et récupérer au cas par cas ce qui vaut le coup |
| **C — Rebaser** | Tenter un rebase sur `feat/inside-the-stack`. Avec 93 fichiers et 12 commits d'écart, probablement très coûteux |

**Recommandation : B.** On ne perd rien, et on juge sur pièces plutôt que de
décider à l'aveugle.

En attendant, **Codex ne doit pas travailler dans ce worktree.** Il repart
d'une branche fraîche depuis `feat/inside-the-stack`, comme décrit dans
`docs/REPARTITION.md`.

---

# PHASE 0 — Nettoyage bloquant

> Rien d'autre ne part en production tant que ce n'est pas fait.

## 0.1 `[x]` 🤖 C — Éradiquer l'e-mail en dur

**Interdiction absolue de `issam@issam-chaoui.fr`.** Le domaine n'est pas choisi.

Fichiers concernés :
- `src/app/contact/page.tsx` (lignes 24-25)
- `src/app/mentions-legales/page.tsx` (ligne 25)
- `src/app/politique-confidentialite/page.tsx` (ligne 36)
- `src/components/site/Contact.tsx` (ligne 76)

À faire :
1. Créer `src/lib/contact.ts` exportant `CONTACT_EMAIL`, `CONTACT_PHONE`,
   `CALENDLY_URL`, `LINKEDIN_URL`, lus depuis l'environnement.
2. Tant que le domaine n'est pas arbitré : **le site n'affiche aucune adresse en
   clair**. Les pages légales renvoient vers `/contact`.
3. Vérification : `grep -rn "issam@issam-chaoui" src/` doit ne rien retourner.

**Fait le 2026-10-06.** 0 occurrence restante. `src/lib/contact.ts` créé. Les
pages légales renvoient vers `/contact`. Le formulaire bascule sur une copie
presse-papiers tant qu'aucune adresse n'est configurée.

**Décision en attente d'Issam :** quel domaine, et quelle adresse publique.
Son adresse personnelle ne doit pas être exposée au moissonnage sans son accord
explicite.

## 0.2 `[x]` 🤖 C — Outil d'audit mesuré

`scripts/audit-page.mjs` : volume, terme dominant et densité, CTA, FAQ balisées,
liens internes, images, longueur du `title`, types de schema.

```bash
npm run audit /geo /netlinking
npm run audit:all
```

Sert de base commune aux revues croisées — tant que la critique porte sur des
nombres, elle ne dégénère pas en débat d'opinion.

**Première passe, 2026-10-06 : 0/31 pages conformes.** Détail dans
`docs/REPARTITION.md` section 2.

## 0.3 `[ ]` 🤖 C — Corriger les `title` trop longs (TRANSVERSE)

Les 31 pages dépassent 60 caractères, parce que le gabarit `%s | MIC SIGNAL`
en consomme 13. **Une seule personne fait cette correction**, sinon conflit
garanti sur toutes les métadonnées. Attribuée à Claude, cycle 1.

## 0.4 `[ ]` 🤖 C — Composant image réutilisable

Créer `src/components/site/Figure.tsx` : `next/image` + légende + `alt`
obligatoire en prop typée non optionnelle, pour qu'une image sans `alt` ne
compile pas.

---

# PHASE 1 — Pages de vente SERVICE

> **Toutes** les pages ci-dessous. Même traitement, aucune exception.
> Gabarit imposé : section 7 du brief. Minimum 1 200 mots, 3 CTA, 4 FAQ,
> 10 liens internes, densité ≤ 2,5 %.

Chaque page a besoin de son propre contenu dans un fichier de données. Ne pas
écrire le contenu dans le composant.

## SEO

### 1.1 `[ ]` — `/seo` — pilier SEO
- Requête : « agence SEO », « référencement naturel »
- Actuellement : ~230 mots. **Objectif 1 800** (c'est le pilier).
- Doit renvoyer vers les 6 pages SEO filles
- Outils à citer : Screaming Frog, Oncrawl, Semrush, Search Console
- FAQ : délai, garantie de position, coût, SEO vs SEA, SEO vs GEO

### 1.2 `[ ]` — `/audit-seo`
- Requête : « audit SEO », « audit référencement »
- Détailler **ce que contient livrablement** l'audit : inventaire URL, statuts
  HTTP, robots, canonicals, profondeur de clic, duplications, logs
- Outils : Screaming Frog, Oncrawl, Botify, analyse de logs
- Ajouter : grille de prix par taille de site, durée, accès nécessaires
- FAQ : prix, durée, accès, que se passe-t-il après

### 1.3 `[ ]` — `/seo-technique`
- Requête : « SEO technique », « Core Web Vitals », « indexation »
- Détailler : crawl, rendu JS, budget de crawl, logs serveur, migrations
- Outils : Botify, Oncrawl, Lighthouse, PageSpeed, analyse de logs
- Seuils CWV à citer : LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 au 75e percentile

### 1.4 `[ ]` — `/seo-local`
- Requête : « SEO local », « référencement local »
- Détailler : fiche d'établissement, NAP, pack local, avis, pages locales
- Renvoyer vers les 10 pages villes
- FAQ : page par ville ?, adresse obligatoire ?, avis, multi-établissements

### 1.5 `[ ]` — `/strategie-contenu-seo`
- Requête : « stratégie de contenu SEO », « cocon sémantique »
- Détailler : cartographie d'intentions, cocons, anti-cannibalisation, briefs
- Outils : YourTextGuru, 1.fr, Search Console, Google Trends
- **Différenciant à exploiter** : scoring sémantique développé en Python

### 1.6 `[ ]` — `/netlinking` ⚠️ **explicitement demandé**
- Requête : « netlinking », « acquisition de liens », « backlinks »
- Actuellement très mince. Doit devenir une vraie page de vente.
- Détailler : audit du profil existant, domaines référents, répartition des
  ancres, sélection des supports, diversification, suivi d'autorité
- Outils : Ahrefs, Semrush, Majestic, SEObserver, Monitorank
- **Traiter franchement** : liens sponsorisés et obligation de signalement,
  risques de l'achat, pourquoi le désaveu ne s'utilise qu'en cas de problème
  avéré, pourquoi un score d'autorité d'outil n'est pas une note Google
- Synergie SEO / SEA sur les requêtes concurrentielles (présent au CV)
- FAQ : faut-il acheter des liens, combien de liens, délai, risque de pénalité

### 1.7 `[ ]` — `/refonte-seo`
- Requête : « refonte SEO », « migration site », « redirections 301 »
- Détailler : export préalable, mapping, plan de redirections, recette,
  surveillance post-lancement
- **Checklist de migration** en contenu : c'est ce que les gens cherchent

## GEO / IA

### 1.8 `[ ]` — `/geo` — pilier GEO
- Requête : « GEO », « Generative Engine Optimization », « référencement IA »
- Actuellement **215 mots**. Objectif **2 000** — c'est le territoire à occuper.
- Détailler : comment les moteurs de réponse choisissent leurs sources, RAG,
  formats extractibles, données structurées, entité, part de voix
- **Différenciant majeur** : 2 ans d'expérience réelle sur le sujet, suivi de
  part de voix, outils Python maison adossés aux API LLM
- Dire franchement qu'aucune optimisation ne garantit une citation
- FAQ : qu'est-ce que le GEO, remplace-t-il le SEO, llms.txt obligatoire ?,
  comment mesurer, combien de temps

### 1.9 `[ ]` — `/geo-referencement-ia`
- Requête : « apparaître dans ChatGPT », « référencement IA », « citation IA »
- Détailler moteur par moteur : ChatGPT/OAI-SearchBot, Perplexity (pondère la
  fraîcheur), Gemini/AI Overviews, Claude, Mistral
- Protocole de suivi : panel de questions, langue, date, moteur, relevé
- Distinguer : mention de marque / lien cité / visite référente

### 1.10 `[ ]` — `/audit-visibilite-ia`
- Requête : « audit visibilité IA », « part de voix LLM »
- C'est une **offre vendable** : panel de requêtes, relevé, analyse des sources
  citées, plan d'action
- Détailler le livrable et le prix

### 1.11 `[ ]` — `/analyse-concurrentielle-seo-geo`
- Requête : « analyse concurrentielle SEO », « benchmark visibilité »
- Détailler : gap analysis de mots-clés et de contenus, comparaison des sources
  citées par les LLM, écart de couverture

## DATA

### 1.12 `[ ]` — `/data-web`
- Requête : « data web », « web analytics », « plan de mesure »
- Outils : GA4, GTM, BigQuery, Looker Studio, Power BI, AT Internet, Matomo
- **Différenciant** : Master 2 Data Analytics, SQL et BigQuery réels

### 1.13 `[ ]` — `/plan-marquage-ga4`
- Requête : « plan de marquage GA4 », « dataLayer », « tracking GA4 »
- Détailler : nommage des événements, paramètres, consentement, recette
- Insister : une conversion = confirmation serveur, pas un clic sur « Envoyer »

### 1.14 `[ ]` — `/dashboard-seo`
- Requête : « dashboard SEO », « reporting SEO », « Looker Studio »
- Détailler : indicateurs, segmentation marque / hors marque, annotations

## OFFRE & CONVERSION

### 1.15 `[ ]` — `/consultant-seo-freelance`
- Requête : « consultant SEO freelance », « tarif consultant SEO »

### 1.16 `[ ]` — `/tarifs`
- **Faille concurrentielle n°1** : le seul concurrent crédible est celui qui
  publie ses prix. On publie une grille complète et sourcée.
- Repères marché : TJM moyen France 570 € (Malt 2025), accompagnement annuel
  10 000 – 50 000 €
- Grille par prestation **et** par taille de structure
- Dire ce qui n'est **pas** inclus

### 1.17 `[ ]` — `/methode-seo` · 1.18 `[ ]` — `/livrables-seo`
- Montrer les livrables réels : extraits de rapport, structure de feuille de
  route, exemple de brief

---

# PHASE 2 — Pages de vente LOCALES

> Structure déjà en place (`CityPage` + `cities-sales.ts`). À approfondir.

### 2.1 `[ ]` — Approfondir les 10 villes
Marseille · Paris · Lyon · Toulouse · Nice · Nantes · Montpellier ·
Strasbourg · Bordeaux · Lille

Pour chacune, ajouter :
- 2 FAQ supplémentaires (6 au total)
- Un paragraphe sur le tissu économique local réel
- Les secteurs où la demande locale est la plus forte
- Un cas supplémentaire
- Objectif **1 500 mots** par ville

### 2.2 `[ ]` — Contrôle chiffré des 10 villes
Mesurer et consigner dans `docs/JOURNAL.md` : mots, densité du mot-clé,
liens internes, présence `FAQPage`, nombre de CTA.
Référence Marseille : 1 559 mots, 2,31 %, 13 liens, FAQPage ✅.

### 2.3 `[ ]` — `/strategie-seo-local-multi-villes`
Page de vente pour les réseaux et franchises. Gouvernance des fiches, règles
d'unicité, suivi par établissement.

---

# PHASE 3 — Pages nouvelles ou à refaire

### 3.1 `[ ]` — `/mises-a-jour` ⚠️ **page à créer**

Journal **chronologique inversé** des évolutions :
- Mises à jour Google (core updates, spam updates, helpful content…)
- Évolutions des moteurs de réponse (AI Overviews, ChatGPT Search, Perplexity)
- Changements de robots IA, de données structurées, de Search Console

Chaque entrée : **date**, source officielle liée, ce qui change concrètement,
ce qu'il faut vérifier sur son site.

Technique :
- Données dans `src/lib/updates.ts`
- Schema : `Article` ou `LiveBlogPosting` par entrée, `BreadcrumbList`
- Flux RSS à `/mises-a-jour/rss.xml`
- **Fort levier GEO** : la fraîcheur datée est exactement ce que Perplexity
  pondère le plus
- Ajouter au `sitemap.ts` et à `llms.txt`

### 3.2 `[ ]` — `/contact` — **refonte complète**

Actuel : 32 lignes, un `mailto`. Insuffisant.

À construire :
- Formulaire **qualifiant** : nom, société, URL du site, besoin, budget
  indicatif, délai, message
- Le champ budget qualifie et filtre — c'est ce que font les bons sites
- **Prise de RDV** : `react-calendly` est déjà installé et
  `NEXT_PUBLIC_CALENDLY_URL` déjà configuré, mais jamais utilisés
- Ce qu'il se passe après l'envoi, délai de réponse annoncé
- Ce qu'on demande pour préparer l'échange
- « On ne travaille pas avec » : filtre honnête qui fait gagner du temps
- FAQ contact : délai, confidentialité, NDA, zone, langues
- Schema `ContactPage` + `ContactPoint`
- **Aucune adresse e-mail en clair** tant que le domaine n'est pas choisi

### 3.3 `[ ]` — `/a-propos` — **refonte complète**

Actuel : **129 mots**. C'est la page EEAT la plus importante du site.

À construire depuis le CV (section 3 du brief) :
- Parcours réel avec dates et employeurs
- Les 5 ans détaillés, le basculement SEO → GEO
- Les outils Python maison : scoring sémantique, génération de briefs,
  catégorisation NLP
- Formation : Master 2 Data Analytics, Université de Toulon
- Langues
- Ce qu'on fait / ce qu'on ne fait pas
- Schema `AboutPage` + `Person` enrichi (`alumniOf`, `worksFor`, `knowsAbout`,
  `knowsLanguage`, `sameAs` LinkedIn)
- Objectif **1 200 mots**
- **Photo** (voir phase 4)

### 3.4 `[ ]` — `/etudes-de-cas`
Étoffer. Cas pédagogiques signalés comme tels, avec méthode de diagnostic
détaillée. Pas de résultat client inventé.

---

# PHASE 4 — Images 🤖 **X**

> Le site a **zéro image**. Brief complet dans `docs/PROMPT-CODEX.md`.

### 4.1 `[ ]` — Visuels de pilier (6)
`/seo` · `/geo` · `/data-web` · `/netlinking` · `/seo-local` · `/audit-seo`

### 4.2 `[ ]` — Schémas explicatifs (8)
Fonctionnement d'un crawl · RAG et citation LLM · pipeline GA4 → BigQuery →
Looker · cocon sémantique · plan de redirections · profil de liens ·
pack local · Core Web Vitals

### 4.3 `[ ]` — Visuels des 10 villes
Abstraits et distincts, pas de carte postale.

### 4.4 `[ ]` — Portrait `/a-propos`
### 4.5 `[ ]` — Open Graph par page type
### 4.6 `[ ]` — Intégration `next/image` + `alt` rédigés 🤖 **C**

---

# PHASE 5 — Vérification

### 5.1 `[ ]` — Audit chiffré de chaque page
Tableau dans `docs/JOURNAL.md` : mots, densité, CTA, liens internes, FAQPage,
images, schema.

### 5.2 `[ ]` — Contrôle anti-régression
```bash
grep -rnE "\b(J[’']|Je |je |Mon |Ma |Mes )" src/     # voix
grep -rn "issam@issam-chaoui" src/                    # e-mail interdit
grep -rn "<img " src/                                 # next/image seulement
ls src/app/*.css                                      # un seul fichier
npm run build
```

### 5.3 `[ ]` — Contrôle GEO
`llms.txt` et `llms-full.txt` à jour · toutes les FAQ balisées · dates réelles ·
`/mises-a-jour` dans le sitemap

### 5.4 `[ ]` — Mobile
Aucun débordement horizontal à 375 px · CTA atteignable au pouce ·
contrastes AA

---

# Décisions en attente d'Issam

| # | Sujet | Pourquoi ça bloque |
|---|---|---|
| D1 | **Nom de domaine** | Conditionne l'e-mail public, les canonicals, l'Open Graph |
| D2 | **Adresse e-mail publique** | Son adresse personnelle ne doit pas être moissonnée sans accord |
| D3 | **Lien Calendly réel** | La variable existe, la valeur est un exemple |
| D4 | **Grille tarifaire** | Il faut ses vrais prix, pas des fourchettes inventées |
| D5 | **Photo** | Portrait réel ou illustration |
| D6 | **Références clients** | Peut-on nommer Solution Nuisible et WEBNOTORIÉTÉ ? |

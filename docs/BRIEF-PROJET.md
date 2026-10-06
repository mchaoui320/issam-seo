# MIC SIGNAL — brief projet

> Document de référence partagé entre **Claude Code** et **ChatGPT Codex**.
> À lire en entier avant toute modification. Si une décision contredit ce
> document, c'est ce document qui gagne — ou il faut le mettre à jour d'abord.

---

## 1. Ce qu'on cherche à obtenir avec ce site

Par ordre de priorité. Toute décision éditoriale ou technique doit servir au
moins un de ces objectifs, sinon elle ne se fait pas.

| # | Objectif | Mesure |
|---|---|---|
| 1 | **Générer des demandes de mission qualifiées** | Formulaire envoyé + RDV pris |
| 2 | **Occuper le terrain GEO / LLMO**, encore vide en France | Citations dans ChatGPT, Perplexity, AI Overviews |
| 3 | **Ranker sur « agence SEO + ville »** sur 10 villes | Positions Search Console |
| 4 | **Ranker sur les requêtes de service** (audit, netlinking, GA4…) | Positions + clics |
| 5 | **Crédibilité EEAT** adossée à un parcours réel | Temps de lecture, taux de contact |

**Le positionnement :** agence SEO + référencement naturel + GEO/LLMO + data web
+ data viz. Voix « on / nous », jamais « je ».

---

## 2. Ce que fait la concurrence (audit réalisé)

Trois concurrents analysés : `paulvengeons.fr`, `raphaeltuil.fr`,
`alexandredelandre.com`.

| | Vengeons | Tuil | Delandre |
|---|---|---|---|
| Témoignages | ❌ | ❌ | ❌ |
| Cas chiffrés | ❌ | ❌ | ❌ |
| Prix affiché | ❌ | vague | ✅ grille sourcée |
| GEO traité | ❌ | ❌ | ❌ |

**Faits marquants :**

- Raphaël Tuil est **premier sur « consultant SEO Paris »** avec des compteurs
  vides : « CLIENTS ACCOMPAGNÉS », « NOTE MOYENNE % » sans aucun chiffre. Son
  site est cassé et il domine. Le niveau du marché est bas.
- Le seul crédible, Delandre, l'est parce qu'il **publie une grille de prix
  sourcée** (baromètre Malt 2025, TJM moyen 570 €).
- **Tous les CTA sont identiques** : « demandez un devis gratuit ». Aucun
  n'apporte de valeur avant le contact.

**Les 4 failles à exploiter :**

1. Personne n'a de preuve → on publie des chiffres vérifiables et sourcés.
2. Les CTA ne donnent rien → on donne un résultat **avant** le formulaire.
3. Le GEO est inoccupé → c'est notre territoire.
4. Aucun contenu technique profond → on va dans le détail que personne n'écrit.

---

## 3. Le profil réel (source : CV, octobre 2026)

À utiliser pour l'EEAT. **Ce sont des faits, ne pas les gonfler.**

- **5 ans d'expérience SEO** : 1 an en agence (plusieurs comptes en parallèle),
  puis 4 ans en interne sur un portefeuille multi-sites à fort trafic.
- **2 ans sur le basculement SEO → GEO** : contenus citables par AI Overviews,
  ChatGPT, Gemini, Perplexity, Claude ; suivi de la part de voix des marques.
- **Développement Python** d'outils SEO internes adossés aux API de LLM :
  scoring sémantique, génération assistée de briefs, catégorisation NLP des URL
  et des requêtes. Automatisation Make et n8n.
- **Postes** : Chef de Projet SEO Technique, GEO & IA chez Solution Nuisible
  (février 2022 → présent, Marseille) · Consultant indépendant (juin 2021 →
  présent) · Consultant SEO chez WEBNOTORIÉTÉ (2020–2021, La Crau) · stage
  pilotage de projet chez Groupe PSA / Stellantis (2019, Sochaux).
- **Formation** : Master 2 Data Analytics & Stratégie de l'Information,
  Université de Toulon – UFR INGÉMEDIA (2019–2021) · Licence 3 Logistique,
  Activités Opérationnelles & Systèmes d'Information, Côte Basque (2018–2019).
- **Langues** : arabe (maternelle), français (bilingue), anglais (professionnel).

**Outils maîtrisés, à citer nommément** — c'est ce qui distingue d'un
généraliste :

| Domaine | Outils |
|---|---|
| Crawl & audit | Screaming Frog, Oncrawl, Botify, Lighthouse, analyse de logs |
| Visibilité | Semrush, Ahrefs, Monitorank, SEObserver, Search Console, Bing WMT |
| Sémantique | YourTextGuru, 1.fr, Google Trends, Schema.org |
| Analytics | GA4, GTM, AT Internet (Piano), Matomo |
| Data | BigQuery, SQL, Looker Studio, Power BI, Tableau |
| IA & NLP | OpenAI API, Claude API, Gemini, Mistral, Hugging Face, spaCy, BERT |
| Automatisation | Make, n8n, Zapier, Apps Script |
| Dev | Python (pandas, requests, BeautifulSoup), SQL, JS, HTML, CSS, REST, Git |
| CMS | WordPress (Divi, Elementor, Yoast, Rank Math), Drupal, Joomla, Shopify |

---

## 4. Règles non négociables

### 4.1 Voix

- **« on » / « nous »**, jamais « je / mon / ma / mes ».
- Vérifier avant chaque commit :
  ```bash
  grep -rnE "\b(J[’']|Je |je |Mon |Ma |Mes )" src/
  ```
  Un « je » en minuscule au milieu d'une phrase est déjà passé entre les mailles
  une fois.

### 4.2 Adresse e-mail — INTERDICTION ABSOLUE

**Ne jamais écrire `issam@issam-chaoui.fr` nulle part.** Le nom de domaine n'est
pas choisi. Cette adresse est actuellement présente dans 4 fichiers et doit
disparaître.

Utiliser la constante centralisée `CONTACT_EMAIL` de `src/lib/contact.ts`, dont
la valeur vient d'une variable d'environnement. Tant que le domaine n'est pas
arbitré, le site n'affiche pas d'adresse en clair : il affiche le formulaire.

### 4.3 Marque

- **MIC SIGNAL**, jamais « Prénom Nom » en façade.
- Gabarit de title : `%s | MIC SIGNAL` → 13 caractères consommés, garder les
  titles sous 47 caractères.

### 4.4 Visuel

- **CLAIR et futuriste.** Jamais sombre, jamais brutaliste papier.
- Polices : Bricolage Grotesque (titres) / Instrument Sans (texte) / Geist Mono
  (données). **Jamais Inter ni Space Grotesk** — signature des sites générés.
- Pas de couleur vive saturée sur grande surface. Au-delà de ~200 px de hauteur,
  utiliser `--grad-deep`. L'accent `--accent` (#4536e0) reste aux boutons,
  pastilles et petits éléments.

### 4.5 CSS

- **UN SEUL fichier** : `src/app/globals.css`.
- **Ne jamais créer de fichier de surcharge.** `final.css` et `polish.css` ont
  existé, se recouvraient à 100 %, et leur empilement avait annulé les polices
  Google par un `font-family: Helvetica` dans la dernière couche. Ils ont été
  fusionnés puis supprimés. Corriger la règle existante, ne pas en ajouter une
  en fin de fichier.

### 4.6 Honnêteté éditoriale

Le site revendique de distinguer constats, hypothèses et résultats observés.
Donc :

- **Aucune position garantie** promise, jamais.
- **Aucun résultat client chiffré inventé.** Les cas sont pédagogiques et
  signalés comme tels.
- Les chiffres de marché sont **sourcés** (ex. baromètre Malt 2025).
- Les données structurées ne décrivent **que ce qui est visible** sur la page.

---

## 5. Règles SEO on-page (apprises à nos dépens)

Une erreur a déjà été commise : un bloc affichant la liste des requêtes visées
avait été ajouté sur les pages locales. 87 mots pour 9 occurrences du nom de
ville, soit **10,3 % de densité**. C'était du bourrage caractérisé. Supprimé.

**Ce qu'on fait à la place :**

| Élément | Règle |
|---|---|
| Mot-clé exact | `title`, `H1`, premier paragraphe, puis **1 à 2,5 %** du texte |
| H2 | Portent les **variantes** (« Audit SEO à Lyon », « Combien coûte… ») |
| Champ sémantique | Distribué naturellement dans le contenu de service |
| Volume | **1 200 mots minimum** sur une page de vente, 1 500+ visé |
| Liens internes | **10 minimum** par page, contextuels |
| FAQ | 4 questions minimum, visibles **et** balisées `FAQPage` |
| Dates | `datePublished` + `dateModified` réels |

**Le champ sémantique d'une page d'agence SEO** doit contenir : audit, crawl,
indexation, Core Web Vitals, Search Console, maillage interne, netlinking,
ancres, données structurées, GA4, GTM, conversion, intention de recherche,
cannibalisation, fiche d'établissement, pack local.

Un moteur sait qu'une vraie agence parle de ces choses. Leur absence est plus
pénalisante que l'absence du mot-clé.

---

## 6. Périmètre des pages de vente

**Toutes** les pages ci-dessous sont des pages de vente et reçoivent le même
traitement de fond. Aucune exception.

### Services SEO
`/seo` · `/audit-seo` · `/seo-technique` · `/seo-local` ·
`/strategie-contenu-seo` · **`/netlinking`** · `/refonte-seo`

### Services GEO / IA
`/geo` · `/geo-referencement-ia` · `/audit-visibilite-ia` ·
`/analyse-concurrentielle-seo-geo`

### Services data
`/data-web` · `/plan-marquage-ga4` · `/dashboard-seo`

### Offre & conversion
`/consultant-seo-freelance` · `/tarifs` · `/methode-seo` · `/livrables-seo` ·
`/contact` · `/a-propos`

### Local
`/consultant-seo-marseille` · `/consultant-seo-paris` ·
`/consultant-seo/{lyon, toulouse, nice, nantes, montpellier, strasbourg,
bordeaux, lille}` · `/strategie-seo-local-multi-villes`

### Nouvelles pages à créer
`/mises-a-jour` — journal chronologique des mises à jour Google et des
évolutions des moteurs de réponse IA.

---

## 7. Anatomie d'une page de vente

Structure obligatoire. L'ordre peut varier, les blocs non.

1. **H1** avec le mot-clé exact
2. **Accroche** : 2 phrases, réponse autonome (reprise par les LLM)
3. **CTA primaire** haut de page
4. **Bloc « en bref »** : réponse extractible + 3 à 4 points saillants
5. **Le problème** : ce qui ne va pas, concrètement
6. **Les prestations** : ce qu'on vend, avec livrable nommé et lien interne
7. **La méthode** : étapes, avec ce qui est produit à chacune
8. **Les outils** : nommés (Screaming Frog, Oncrawl, BigQuery…) — différenciant
9. **Preuves / cas** : signalés comme pédagogiques
10. **Tarif** : fourchette ou principe de chiffrage
11. **CTA intermédiaire**
12. **FAQ** : 4 à 6 questions, visibles + `FAQPage`
13. **Maillage** : 6 à 10 liens contextuels
14. **CTA final**

**Minimum 3 CTA par page.** Actuellement la plupart des pages en ont 1.

---

## 8. Images — le site n'en a aucune

Zéro `<Image>` et zéro `<img>` dans tout le code. C'est un manque majeur :
temps passé sur la page, partage social, compréhension.

Règles pour toute image ajoutée :

- `next/image` obligatoire, jamais `<img>`
- `width` et `height` explicites (sinon CLS)
- `alt` descriptif en français, jamais « image » ni le mot-clé répété
- Format AVIF/WebP (déjà configuré dans `next.config.ts`)
- `priority` uniquement sur l'image LCP de la page
- Style conforme : clair, futuriste, pas de stock photo, pas de 3D générique

Le détail de la commande d'images est dans `docs/PROMPT-CODEX.md`.

---

## 9. Répartition du travail

| Qui | Périmètre |
|---|---|
| **Claude Code** | Architecture, composants, schema JSON-LD, CSS, structure de contenu, vérifications mesurées |
| **ChatGPT Codex** | Génération d'images, rédaction de contenu long, remplissage des fichiers de données |

Les deux écrivent dans `docs/JOURNAL.md` après chaque session. Les tâches et
leur état sont dans `docs/TODO.md`.

**Règle de non-collision :** avant de modifier un fichier, vérifier dans
`docs/TODO.md` qu'il n'est pas marqué « en cours » par l'autre.

# Prompt pour ChatGPT Codex

> Copier-coller le bloc ci-dessous dans ChatGPT Codex. Il est écrit pour être
> autonome : il ne suppose aucun contexte de conversation.

---

## Bloc à copier

```
Tu travailles sur le dépôt github.com/mchaoui320/issam-seo, branche
feat/inside-the-stack. C'est le site de MIC SIGNAL, une agence française de
SEO, référencement naturel, GEO/LLMO et data web. Stack : Next.js 16,
React 19, TypeScript, CSS vanilla.

AVANT TOUTE CHOSE, lis dans cet ordre :
1. docs/BRIEF-PROJET.md — règles non négociables, positionnement, profil réel
2. docs/REPARTITION.md — ton lot, le protocole de branches et de PR
3. docs/REVUE.md — comment tu relis le travail de Claude, et comment il relit le tien
4. docs/TODO.md — tâches, qui fait quoi, statuts
5. docs/JOURNAL.md — ce qui a déjà été fait

ON TRAVAILLE EN REVUE CROISÉE. Tu produis un lot, Claude Code relit ta pull
request et écrit son verdict. En parallèle tu relis la sienne. Personne ne
valide son propre travail. Au cycle suivant, les rôles s'inversent.

Tu ne pousses JAMAIS directement sur feat/inside-the-stack. Tu crées une
branche codex/lot-X, tu ouvres une PR vers feat/inside-the-stack, et tu colles
la sortie de l'audit dans le corps de la PR.

TON LOT ACTUEL — cycle 1, branche codex/lot-b :
  /netlinking        619 mots -> 1 500
  /audit-seo         762 mots -> 1 600
  /seo-technique     796 mots -> 1 600
  /refonte-seo       643 mots -> 1 400
  + les 6 visuels de pilier (section A de la liste d'images plus bas)

Ne touche pas aux pages du lot de Claude : /geo, /geo-referencement-ia,
/audit-visibilite-ia, /analyse-concurrentielle-seo-geo, /contact. Il corrige
aussi les title trop longs sur TOUTES les pages, donc ne touche pas aux
métadonnées.

MESURE TON TRAVAIL AVANT D'OUVRIR LA PR :

  npm run dev                                  # autre terminal
  node scripts/audit-page.mjs /netlinking /audit-seo /seo-technique /refonte-seo

Seuils : 1 200 mots minimum, densité du terme dominant entre 0,8 et 2,5 %,
3 CTA, 4 questions de FAQ balisées en FAQPage, 10 liens internes, 5 H2,
title sous 60 caractères, au moins une image. Tant qu'une ligne affiche ✗,
la PR n'est pas prête.

ATTENTION sur le comptage des liens : le script compte aussi la navigation et
le pied de page, soit environ 25 liens sur chaque page. Un total de 28 ne
représente donc que 3 liens dans le contenu. Il en faut au moins 6 dans le
corps du texte.

Un autre agent (Claude Code) travaille sur le même dépôt. Avant de modifier un
fichier, vérifie dans docs/TODO.md qu'il n'est pas marqué [~] "en cours".
Marque tes propres tâches [~] avant de commencer, [x] après, et ajoute une
ligne dans docs/JOURNAL.md.

RÈGLES ABSOLUES — une seule violation suffit à faire rejeter le travail :

1. VOIX : écrire en « on » / « nous ». JAMAIS « je / mon / ma / mes ».
   C'est une agence, pas un indépendant.
   Vérifier : grep -rnE "\b(J['’]|Je |je |Mon |Ma |Mes )" src/

2. E-MAIL : ne JAMAIS écrire issam@issam-chaoui.fr ni aucune adresse e-mail
   en clair. Le nom de domaine n'est pas choisi. Utiliser le formulaire de
   contact comme seul point d'entrée.

3. CSS : un seul fichier, src/app/globals.css. Ne JAMAIS créer de fichier de
   surcharge. Corriger la règle existante plutôt qu'en ajouter une à la fin.

4. POLICES : Bricolage Grotesque / Instrument Sans / Geist Mono.
   JAMAIS Inter ni Space Grotesk.

5. VISUEL : clair et futuriste. Jamais sombre. Pas de couleur vive saturée sur
   une surface de plus de ~200 px de hauteur.

6. HONNÊTETÉ : aucune position Google garantie, aucun résultat client chiffré
   inventé, aucun témoignage fictif. Les cas sont pédagogiques et signalés
   comme tels. Les chiffres de marché sont sourcés.

7. DONNÉES STRUCTURÉES : ne baliser que ce qui est visible sur la page.

TA MISSION PRIORITAIRE : LES IMAGES.

Le site n'a actuellement AUCUNE image — zéro <img>, zéro next/image. C'est le
manque le plus visible. Génère les visuels décrits ci-dessous, place-les dans
public/images/ et intègre-les avec next/image.

DIRECTION ARTISTIQUE À RESPECTER POUR TOUTES LES IMAGES :

- Fond clair, froid, lumineux (#f6f7fd à #ffffff)
- Accent indigo #4536e0, violet #8b3dff, cyan #2aa6c4 — en dégradé iridescent
- Esthétique : schéma technique précis, diagramme d'ingénieur, data
  visualization éditoriale
- Traits fins, beaucoup de blanc, géométrie nette
- INTERDIT : photo de stock, personnes en costume serrant des mains, ampoules,
  cerveaux lumineux, engrenages, 3D « premium » générique, glassmorphism,
  dégradés bleu-rose SaaS, icônes flottantes, réseaux de nœuds orbitaux.
  Ces visuels signalent immédiatement un contenu généré et décrédibilisent.
- Format : paysage 16:9 pour les visuels de pilier, 4:3 pour les schémas
- Livrer en AVIF ou WebP, largeur max 1600 px

LISTE DES IMAGES À PRODUIRE :

A. VISUELS DE PILIER (6, format 16:9)
  1. /seo — architecture d'un site vue comme un plan : pages, liens internes,
     hiérarchie, profondeur de clic
  2. /geo — comment un moteur de réponse choisit ses sources : question →
     récupération de documents → réponse citée
  3. /data-web — pipeline de données : site → GA4 → BigQuery → Looker Studio
  4. /netlinking — profil de liens : domaines référents, répartition des
     ancres, qualité contre quantité
  5. /seo-local — triangle fiche d'établissement / site / avis, avec zone de
     chalandise
  6. /audit-seo — entonnoir d'un crawl : URL découvertes → explorées →
     indexées → positionnées

B. SCHÉMAS EXPLICATIFS (8, format 4:3)
  7. Fonctionnement d'un crawl et budget de crawl
  8. RAG : récupération augmentée et mécanisme de citation
  9. Core Web Vitals : LCP, INP, CLS avec les seuils 2,5 s / 200 ms / 0,1
  10. Cocon sémantique et intentions de recherche
  11. Plan de redirections lors d'une migration
  12. Chaîne de mesure : impression → clic → session → conversion
  13. Pack local et signaux de proximité
  14. Entité et graphe de connaissances

C. VISUELS DE VILLE (10, format 16:9)
  Marseille, Paris, Lyon, Toulouse, Nice, Nantes, Montpellier, Strasbourg,
  Bordeaux, Lille.
  Abstraits et distincts les uns des autres. PAS de carte postale, PAS de
  monument. Évoquer le tissu économique : trame, réseau, flux, densité.
  Chaque ville doit avoir sa propre composition — si on peut échanger deux
  visuels sans que ça se voie, ils sont ratés.

D. OPEN GRAPH (4 gabarits, 1200 × 630)
  Service · Ville · Guide · Page générique

E. PORTRAIT /a-propos
  Si aucune photo réelle n'est fournie, produire une illustration abstraite
  cohérente avec la direction artistique. Ne jamais générer un visage
  photoréaliste présenté comme la personne réelle.

INTÉGRATION TECHNIQUE DES IMAGES :

- next/image uniquement, jamais <img>
- width et height explicites, sinon décalage de mise en page
- alt descriptif en français, qui décrit ce que montre l'image.
  JAMAIS « image », jamais le mot-clé répété. Exemple correct :
  alt="Entonnoir montrant la réduction entre URL découvertes et URL indexées"
- priority={true} uniquement sur l'image LCP d'une page, jamais ailleurs
- sizes renseigné pour les images responsives
- Nommage : public/images/{section}/{slug}.avif

TA MISSION SECONDAIRE : CONTENU LONG.

Si tu as fini les images, prends les tâches marquées [ ] dans docs/TODO.md,
phases 1 à 3. Le gabarit d'une page de vente est en section 7 du brief.
Contraintes : 1 200 mots minimum, 3 CTA minimum, 4 questions de FAQ minimum
(visibles ET balisées FAQPage), 10 liens internes minimum, densité du mot-clé
principal entre 1 et 2,5 %.

Ne jamais afficher une liste de mots-clés visés sur une page : c'est du
bourrage. L'erreur a déjà été commise et corrigée.

VÉRIFICATION AVANT DE RENDRE :

  grep -rnE "\b(J['’]|Je |je |Mon |Ma |Mes )" src/   # doit être vide
  grep -rn "issam@issam-chaoui" src/                  # doit être vide
  grep -rn "<img " src/                               # doit être vide
  ls src/app/*.css                                    # un seul fichier
  npx tsc --noEmit
  npm run build

Puis mets à jour docs/TODO.md et docs/JOURNAL.md.
```

---

## Notes pour Issam (hors prompt)

- Le prompt est volontairement long : Codex perd le contexte entre les
  sessions, donc tout ce qui compte y est rappelé explicitement.
- La partie **interdits visuels** est la plus importante. Sans elle, un modèle
  produit par défaut exactement les visuels qui font « site généré » — poignées
  de main, ampoules, nœuds orbitaux.
- Si Codex propose de générer un visage photoréaliste pour `/a-propos`,
  refuser : présenter un visage synthétique comme une personne réelle pose un
  problème, et ça se repère.
- Le test des visuels de ville est simple : si on peut intervertir deux images
  sans que ça se remarque, elles sont à refaire.

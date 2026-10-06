# Protocole de revue croisée

> Le relecteur **signale**, il ne réécrit pas. Si le relecteur corrige
> lui-même, on perd le second regard et il ne reste qu'un seul point de vue.

---

## 1. Avant tout, la mesure

```bash
npm run dev                                  # dans un autre terminal
node scripts/audit-page.mjs /page-a /page-b  # les pages de la PR
```

Coller la sortie dans la revue. Tant qu'une ligne est `✗`, inutile de
discuter du style : le travail n'est pas fini.

Le script mesure : volume, terme dominant et sa densité, CTA, questions de
FAQ balisées, liens internes, images, longueur du `title`, types de schema.

**Ce qu'il ne mesure pas** et que le relecteur doit juger à la lecture :
la partie 3 ci-dessous.

---

## 2. Contrôles automatiques à relancer

```bash
grep -rnE "\b(J[’']|Je |je |Mon |Ma |Mes )" src/   # voix — doit être vide *
grep -rn "issam@issam-chaoui" src/                  # doit être vide
grep -rn "<img " src/                               # next/image uniquement
ls src/app/*.css                                    # un seul fichier
npx tsc --noEmit
npm run build
```

\* Exception connue et légitime : `cities-sales.ts` contient « Mon activité
couvre… » dans une question de FAQ. C'est le **visiteur** qui parle, pas
l'agence. Ne pas corriger.

---

## 3. Grille de lecture

Ce que la machine ne voit pas. Chaque point se répond par oui/non, avec la
citation du passage en cause.

### 3.1 Honnêteté

- [ ] Aucune promesse de position Google, même implicite
      (« vous serez visible sur… »)
- [ ] Aucun résultat client chiffré qui ne soit pas sourcé
- [ ] Les cas sont explicitement signalés comme pédagogiques
- [ ] Les chiffres de marché portent leur source (ex. baromètre Malt 2025)
- [ ] Les limites sont dites, pas seulement les bénéfices
- [ ] Aucun témoignage inventé, aucun logo client fictif

### 3.2 Valeur réelle du contenu

- [ ] **Le test du remplacement** : si on change trois mots, le paragraphe
      fonctionne-t-il pour une autre page ? Si oui, il ne vaut rien.
- [ ] Le contenu apprend-il quelque chose à quelqu'un qui connaît déjà le SEO ?
- [ ] Les outils sont-ils nommés (Screaming Frog, Oncrawl, BigQuery…) plutôt
      qu'évoqués en « nos outils » ?
- [ ] Les livrables sont-ils décrits concrètement, ou restent-ils des
      promesses vagues ?
- [ ] Les questions de FAQ sont-elles celles qu'un prospect pose vraiment,
      ou des questions de confort écrites pour remplir ?

### 3.3 Intention et conversion

- [ ] Le H1 contient le mot-clé, et se lit quand même comme une phrase humaine
- [ ] Les deux premières phrases répondent, sans pronom qui renvoie au titre
      (c'est le passage que les moteurs de réponse reprennent)
- [ ] Les H2 portent des variantes réellement tapées
- [ ] Les CTA sont répartis, pas tous en bas de page
- [ ] Les liens internes sont **contextuels**, dans le corps du texte — pas
      seulement ceux de la navigation et du pied de page

> ⚠️ Le script compte tous les liens internes du document, navigation et pied
> de page compris, soit ~25 sur chaque page. Un total de 28 peut donc ne
> représenter que 3 liens dans le contenu. **Le relecteur doit les compter à
> la main dans le corps du texte.** Minimum attendu : 6.

### 3.4 Conformité visuelle

- [ ] Rien de sombre hors pied de page
- [ ] Aucune couleur vive saturée sur plus de ~200 px de hauteur
- [ ] Aucune règle CSS ajoutée en fin de fichier pour contourner une règle
      existante
- [ ] Les images ont un `alt` descriptif, pas « image » ni le mot-clé répété
- [ ] `priority` uniquement sur l'image LCP

### 3.5 Pour les images

- [ ] Aucun visuel interdit : poignée de main, ampoule, cerveau lumineux,
      engrenage, nœuds orbitaux, 3D « premium » générique, glassmorphism
- [ ] **Test des villes** : peut-on intervertir deux visuels sans que ça se
      voie ? Si oui, ils sont à refaire.
- [ ] Format AVIF ou WebP, largeur ≤ 1600 px
- [ ] `width` et `height` déclarés

---

## 4. Format du verdict

À écrire en commentaire de la PR.

```markdown
## Revue — <lot> par <agent>

### Mesures
<sortie de scripts/audit-page.mjs>

### Bloquant
- `/page` : <ce qui ne va pas, avec la citation>

### À corriger avant fusion
- `/page` : <...>

### Remarque, non bloquant
- <...>

### Verdict
APPROUVÉ | À CORRIGER | REFUSÉ
```

**Bloquant** = un seuil chiffré non atteint, ou une règle du brief violée.
**À corriger** = un problème réel mais qui ne met pas la page en échec.
**Remarque** = une préférence. Le producteur en fait ce qu'il veut.

Un verdict sans citation du passage en cause n'est pas exploitable.

---

## 5. Ce qu'on ne fait pas en revue

- Réécrire le texte de l'autre
- Changer la direction éditoriale d'une page sans en parler
- Bloquer sur une préférence de style
- Approuver sans avoir lancé le script
- Approuver son propre lot

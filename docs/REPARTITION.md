# Répartition du travail — Claude Code ↔ ChatGPT Codex

> Chacun produit, puis **relit le travail de l'autre**. Personne ne valide son
> propre travail : c'est le seul moyen d'attraper ce qu'on ne voit plus.

---

## 1. Le protocole GitHub

Tout passe par des branches et des pull requests. Rien n'est poussé
directement sur `feat/inside-the-stack`.

```
feat/inside-the-stack          ← branche d'intégration, protégée par la revue
    ├── claude/lot-a           ← Claude produit
    └── codex/lot-b            ← Codex produit
```

**Cycle de travail, pour chacun :**

1. `git fetch origin && git checkout -b <agent>/lot-X origin/feat/inside-the-stack`
2. Marquer ses tâches `[~]` dans `docs/TODO.md`, committer ce fichier seul,
   pousser tout de suite. L'autre voit ainsi ce qui est pris.
3. Produire. Commits petits et lisibles.
4. `node scripts/audit-page.mjs <ses pages>` — **ne pas ouvrir de PR tant que
   les seuils ne passent pas.**
5. `gh pr create --base feat/inside-the-stack --title "..." --body "..."`
   Le corps de la PR contient la sortie de l'audit, collée telle quelle.
6. Prévenir l'autre : passer la tâche à `[x]`, écrire dans `docs/JOURNAL.md`.

**Puis on inverse :** chacun relit la PR de l'autre selon `docs/REVUE.md`.
La PR ne se fusionne que lorsque le relecteur a écrit son verdict.

**Règle anti-collision :** si deux lots doivent toucher au même fichier
partagé (`globals.css`, `schema.ts`, `content.ts`), celui qui commence le
signale dans `docs/TODO.md` et l'autre attend. Les fichiers de contenu par
page sont séparés exprès pour que ce cas reste rare.

---

## 2. État de départ, mesuré le 2026-10-06

`node scripts/audit-page.mjs --all` → **0/31 pages conformes**.

| Problème | Portée |
|---|---|
| Pages service entre 500 et 800 mots (seuil 1 200) | 21 pages |
| Aucune image | 31 pages |
| `title` > 60 caractères | 31 pages |
| FAQ < 4 questions | 11 pages |
| Pages villes ≥ 1 337 mots | ✅ les 10 passent |
| Densité entre 0,75 % et 2,15 % | ✅ aucun bourrage |

Le dépassement systématique des `title` vient du gabarit `%s | MIC SIGNAL`,
qui consomme 13 caractères. **Correction transverse, à faire en premier et par
une seule personne** — sinon conflit garanti.

---

## 3. Cycle 1

### 🤖 Claude produit — `claude/lot-a`

| Page | Mots actuels | Cible |
|---|---|---|
| `/geo` | 779 | **2 000** (pilier, territoire à occuper) |
| `/geo-referencement-ia` | 761 | 1 500 |
| `/audit-visibilite-ia` | 765 | 1 400 |
| `/analyse-concurrentielle-seo-geo` | 715 | 1 400 |
| `/contact` | **186** | 1 200 + formulaire qualifiant + RDV |

Plus la correction transverse des `title` (toutes pages), parce qu'elle touche
`lib/seo.ts` et les métadonnées de chaque page.

### 🤖 Codex produit — `codex/lot-b`

| Page | Mots actuels | Cible |
|---|---|---|
| `/netlinking` | 619 | 1 500 |
| `/audit-seo` | 762 | 1 600 |
| `/seo-technique` | 796 | 1 600 |
| `/refonte-seo` | 643 | 1 400 |

Plus **le lot d'images A** : les 6 visuels de pilier décrits dans
`docs/PROMPT-CODEX.md`.

### Puis inversion

- **Claude relit `codex/lot-b`** et écrit son verdict dans la PR.
- **Codex relit `claude/lot-a`** et écrit son verdict dans la PR.

---

## 4. Cycle 2 — les rôles s'inversent

### 🤖 Codex produit — `codex/lot-c`

`/seo` (pilier, 801 → 1 800) · `/seo-local` (630 → 1 500) ·
`/strategie-contenu-seo` (660 → 1 500) · `/methode-seo` (582 → 1 200) ·
`/livrables-seo` (503 → 1 200)
Plus le **lot d'images B** : les 8 schémas explicatifs.

### 🤖 Claude produit — `claude/lot-d`

`/a-propos` (501 → 1 200, depuis le CV) · **`/mises-a-jour`** (page à créer,
avec flux RSS) · `/tarifs` (651 → 1 400, grille publiée) ·
`/data-web` (795 → 1 500) · `/plan-marquage-ga4` (652 → 1 300) ·
`/dashboard-seo` (606 → 1 300)

### Puis inversion

- **Codex relit `claude/lot-d`**
- **Claude relit `codex/lot-c`**

---

## 5. Cycle 3

### 🤖 Claude — `claude/lot-e`
Approfondissement des 10 pages villes : 2 FAQ de plus chacune, tissu
économique local, un cas supplémentaire. Cible 1 500 mots par ville.

### 🤖 Codex — `codex/lot-f`
`/etudes-de-cas` · `/consultant-seo-freelance` ·
`/strategie-seo-local-multi-villes` · **lot d'images C** : les 10 visuels de
ville et les 4 gabarits Open Graph.

### Puis inversion croisée, comme aux cycles précédents.

---

## 6. Qui tranche en cas de désaccord

1. **Un seuil chiffré n'est pas négociable.** Si l'audit dit 900 mots pour un
   seuil à 1 200, le point est clos.
2. **Une règle du brief l'emporte sur une préférence.** Voix, e-mail, CSS,
   polices, honnêteté éditoriale : pas de discussion.
3. **Sur le reste** — tournure, angle, ordre des sections — le producteur
   garde la main. Le relecteur signale, il ne réécrit pas.
4. **Si le désaccord porte sur une règle elle-même**, il remonte à Issam et
   la règle est modifiée dans le brief avant d'être appliquée.

Un relecteur qui réécrit le travail de l'autre fait perdre le bénéfice du
dispositif : on se retrouve avec un seul point de vue.

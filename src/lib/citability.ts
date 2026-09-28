/**
 * Analyse de citabilité par les moteurs de réponse.
 *
 * Ce que fait cet outil : mesurer si un texte présente les formes que les
 * moteurs génératifs reprennent facilement — réponse autonome en tête,
 * titres formulés comme des questions, données chiffrées, sources, phrases
 * courtes, définitions explicites.
 *
 * Ce qu'il ne fait pas : prédire une citation. Aucun signal public ne le
 * permet. Il mesure des formes, pas une autorité ni une pertinence. Un texte
 * parfaitement noté sur un sujet déjà mieux traité ailleurs ne sera pas cité.
 *
 * Toutes les heuristiques sont calibrées pour le français.
 */

export type CriterionId =
  | "answer"
  | "questions"
  | "freshness"
  | "figures"
  | "sources"
  | "structure"
  | "sentences"
  | "definitions";

export type Criterion = {
  id: CriterionId;
  label: string;
  /** 0 à 100. */
  score: number;
  /** Ce qui a été mesuré, en clair. */
  finding: string;
  /** Action concrète si le score est bas. */
  advice: string;
  weight: number;
};

export type Analysis = {
  score: number;
  criteria: Criterion[];
  stats: {
    words: number;
    sentences: number;
    headings: number;
    avgSentenceWords: number;
  };
};

const clamp = (n: number) => Math.max(0, Math.min(100, Math.round(n)));

/** Découpe en phrases : point, point d'interrogation ou d'exclamation suivis d'une majuscule ou d'une fin. */
function splitSentences(text: string): string[] {
  return text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?…])\s+(?=[A-ZÀ-ÜÉÈÊ0-9«"])|(?<=[.!?…])$/)
    .map((s) => s.trim())
    .filter((s) => s.length > 3);
}

/**
 * Détection des intertitres.
 *
 * Un titre est : une ligne préfixée en Markdown, ou une ligne courte qui
 * n'est pas un élément de liste et qui se termine soit par un point
 * d'interrogation, soit sans ponctuation finale.
 *
 * Le point d'interrogation doit être accepté explicitement : les titres
 * interrogatifs sont précisément ceux que l'on cherche à repérer ensuite.
 */
function extractHeadings(raw: string): string[] {
  return raw
    .split(/\n+/)
    .map((l) => l.trim())
    .filter((l) => {
      if (!l || l.length > 120) return false;
      if (/^#{1,6}\s/.test(l)) return true;
      if (/^\s*([-*•]|\d+[.)])\s+/.test(l)) return false; // élément de liste
      if (l.split(/\s+/).length > 14) return false;
      return /\?$/.test(l) || !/[.!;:,]$/.test(l);
    })
    .map((l) => l.replace(/^#{1,6}\s*/, ""));
}

const words = (s: string) => s.split(/\s+/).filter(Boolean);

export function analyse(raw: string): Analysis {
  const text = raw.trim();
  const allWords = words(text);
  const sentences = splitSentences(text);
  const headings = extractHeadings(raw);
  const body = text.replace(/^#{1,6}\s.*$/gm, " ");

  const avgSentenceWords = sentences.length
    ? Math.round(allWords.length / sentences.length)
    : 0;

  const criteria: Criterion[] = [];

  /* --- 1. Réponse autonome en tête -------------------------------------
     Le passage le plus repris est le premier. Il doit se comprendre hors
     contexte : pas de pronom de reprise en ouverture, une longueur
     suffisante pour porter une réponse, pas une simple accroche. */
  const opening = sentences.slice(0, 2).join(" ");
  const openWords = words(opening).length;
  const startsWithPronoun =
    /^(il|elle|ils|elles|ce|c'|cela|ceci|celui|celle|on|y|en)\b/i.test(
      opening.trim(),
    );
  const openingHasSubject = /\b(est|désigne|consiste|regroupe|permet|sert|correspond)\b/i.test(
    opening,
  );
  let answerScore = 0;
  if (openWords >= 15) answerScore += 35;
  else if (openWords >= 8) answerScore += 18;
  if (!startsWithPronoun) answerScore += 30;
  if (openingHasSubject) answerScore += 35;
  criteria.push({
    id: "answer",
    label: "Réponse autonome en tête",
    score: clamp(answerScore),
    weight: 3,
    finding: !text
      ? "Aucun texte analysé."
      : startsWithPronoun
        ? "Le texte s’ouvre sur un pronom de reprise : sorti de son contexte, le passage ne veut plus rien dire."
        : openingHasSubject
          ? `Ouverture explicite de ${openWords} mots, avec un verbe de définition.`
          : `Ouverture de ${openWords} mots, mais sans formulation qui répond directement.`,
    advice:
      "Ouvrez par une ou deux phrases qui répondent à la question de la page, en nommant le sujet plutôt qu’en y renvoyant. C’est le passage que les moteurs reprennent tel quel.",
  });

  /* --- 2. Titres formulés comme des questions --------------------------
     Les moteurs de réponse alignent la question de l'utilisateur sur les
     intertitres. Un titre nominal s'apparie moins bien. */
  const questionHeadings = headings.filter(
    (h) =>
      /\?$/.test(h) ||
      /^(comment|pourquoi|quel|quelle|quels|quelles|qu'est|que |combien|quand|où|faut-il|peut-on|est-ce)/i.test(
        h,
      ),
  ).length;
  const qRatio = headings.length ? questionHeadings / headings.length : 0;
  criteria.push({
    id: "questions",
    label: "Titres alignés sur les questions",
    score: clamp(headings.length === 0 ? 0 : qRatio * 160),
    weight: 2,
    finding: headings.length
      ? `${questionHeadings} titre${questionHeadings > 1 ? "s" : ""} interrogatif${questionHeadings > 1 ? "s" : ""} sur ${headings.length}.`
      : "Aucun intertitre détecté.",
    advice:
      "Formulez une partie des intertitres comme vos lecteurs posent la question. Un moteur apparie « Combien coûte un audit SEO ? » bien mieux que « Tarification ».",
  });

  /* --- 3. Fraîcheur ----------------------------------------------------
     Perplexity pondère la fraîcheur nettement plus fortement que la
     recherche classique. Une date visible dans le texte est un signal. */
  const years = text.match(/\b20\d{2}\b/g) ?? [];
  const currentYear = new Date().getFullYear();
  const recent = years.filter((y) => Number(y) >= currentYear - 1).length;
  const hasFullDate =
    /\b\d{1,2}\s+(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)\s+20\d{2}\b/i.test(
      text,
    );
  criteria.push({
    id: "freshness",
    label: "Signaux de fraîcheur",
    score: clamp((recent ? 55 : years.length ? 20 : 0) + (hasFullDate ? 45 : 0)),
    weight: 2,
    finding: hasFullDate
      ? "Date complète présente dans le texte."
      : recent
        ? `Année récente citée (${currentYear - 1} ou ${currentYear}), mais pas de date complète.`
        : years.length
          ? "Seules des années anciennes apparaissent."
          : "Aucune date dans le texte.",
    advice:
      "Datez explicitement le contenu et ce qu’il décrit. Les moteurs de réponse privilégient fortement les pages récentes, Perplexity plus que les autres.",
  });

  /* --- 4. Données chiffrées --------------------------------------------
     Les passages contenant un chiffre vérifiable sont repris plus souvent
     que les affirmations qualitatives. */
  const figures = (text.match(/\b\d[\d\s.,]*\s*(%|€|\$|ms|s\b|k€|km|h\b)/gi) ?? []).length;
  const bareNumbers = (text.match(/\b\d{2,}\b/g) ?? []).length;
  const per100 = allWords.length ? ((figures * 2 + bareNumbers) / allWords.length) * 100 : 0;
  criteria.push({
    id: "figures",
    label: "Données chiffrées",
    score: clamp(per100 * 45),
    weight: 2,
    finding: figures
      ? `${figures} valeur${figures > 1 ? "s" : ""} avec unité, ${bareNumbers} nombre${bareNumbers > 1 ? "s" : ""} au total.`
      : "Aucune valeur chiffrée avec unité.",
    advice:
      "Remplacez les affirmations qualitatives par des valeurs vérifiables et unités explicites. Une phrase chiffrée est nettement plus reprise qu’une phrase d’appréciation.",
  });

  /* --- 5. Sources ------------------------------------------------------ */
  const links = (text.match(/https?:\/\/\S+/g) ?? []).length;
  const attributions = (
    text.match(
      /\b(selon|d'après|source\s*:|étude|rapport|documentation|baromètre|indique que|précise que)\b/gi,
    ) ?? []
  ).length;
  criteria.push({
    id: "sources",
    label: "Sources et attributions",
    score: clamp(links * 22 + attributions * 16),
    weight: 2,
    finding:
      links || attributions
        ? `${links} lien${links > 1 ? "s" : ""}, ${attributions} formulation${attributions > 1 ? "s" : ""} d’attribution.`
        : "Aucune source ni attribution détectée.",
    advice:
      "Citez vos sources nommément et liez-les. Un modèle reprend plus volontiers une affirmation qu’il peut rattacher à une origine identifiable.",
  });

  /* --- 6. Structure extractible ---------------------------------------- */
  const listItems = (raw.match(/^\s*([-*•]|\d+[.)])\s+/gm) ?? []).length;
  const paragraphs = body.split(/\n\s*\n/).filter((p) => p.trim().length > 40);
  const longParagraphs = paragraphs.filter((p) => words(p).length > 120).length;
  criteria.push({
    id: "structure",
    label: "Structure extractible",
    score: clamp(
      Math.min(listItems, 8) * 9 +
        (headings.length >= 3 ? 30 : headings.length * 10) -
        longParagraphs * 12,
    ),
    weight: 2,
    finding: `${listItems} élément${listItems > 1 ? "s" : ""} de liste, ${headings.length} intertitre${headings.length > 1 ? "s" : ""}${longParagraphs ? `, ${longParagraphs} paragraphe${longParagraphs > 1 ? "s" : ""} très long${longParagraphs > 1 ? "s" : ""}` : ""}.`,
    advice:
      "Découpez en listes et en paragraphes courts. Un bloc compact oblige le modèle à résumer plutôt qu’à citer, et la citation se perd.",
  });

  /* --- 7. Longueur de phrase -------------------------------------------
     Une phrase longue est reformulée plutôt que reprise. L'optimum se
     situe autour de 15 à 22 mots en français. */
  criteria.push({
    id: "sentences",
    label: "Longueur des phrases",
    score: clamp(
      avgSentenceWords === 0
        ? 0
        : avgSentenceWords <= 22
          ? 100 - Math.max(0, 14 - avgSentenceWords) * 4
          : 100 - (avgSentenceWords - 22) * 7,
    ),
    weight: 1,
    finding: avgSentenceWords
      ? `${avgSentenceWords} mots par phrase en moyenne.`
      : "Aucune phrase analysable.",
    advice:
      "Visez 15 à 22 mots par phrase. Au-delà, un modèle reformule au lieu de citer, et la mention de votre source disparaît.",
  });

  /* --- 8. Définitions autonomes ---------------------------------------- */
  /* Le sujet d'une définition fait souvent plusieurs mots (« Un audit SEO
     inventorie… »), et le verbe n'est pas toujours « être ». On accepte donc
     un groupe nominal de un à quatre mots suivi d'un verbe définitionnel. */
  const definitions = (
    text.match(
      /(?:^|[.!?]\s+|\n)(?:[LlUuDdCc]['’]|[Ll]es?\s|[Ll]a\s|[Uu]ne?\s)?[A-ZÀ-Üa-zà-ÿ][\wÀ-ÿ'’-]*(?:\s+[\wÀ-ÿ'’-]+){0,3}\s+(?:est|sont|désigne|désignent|consiste|consistent|correspond|correspondent|regroupe|regroupent|inventorie|permet|sert\s+à|se\s+définit)\b/g,
    ) ?? []
  ).length;
  criteria.push({
    id: "definitions",
    label: "Définitions explicites",
    score: clamp(definitions * 26),
    weight: 1,
    finding: definitions
      ? `${definitions} formulation${definitions > 1 ? "s" : ""} de définition.`
      : "Aucune définition explicite détectée.",
    advice:
      "Définissez vos termes en une phrase qui tient seule : « X désigne… ». Les requêtes définitionnelles sont les plus reprises par les moteurs de réponse.",
  });

  const totalWeight = criteria.reduce((a, c) => a + c.weight, 0);
  const score = clamp(
    criteria.reduce((a, c) => a + c.score * c.weight, 0) / totalWeight,
  );

  return {
    score,
    criteria,
    stats: {
      words: allWords.length,
      sentences: sentences.length,
      headings: headings.length,
      avgSentenceWords,
    },
  };
}

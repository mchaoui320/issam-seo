import { getEntry } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import {
  BridgeBlock,
  ComparisonBlock,
  ExpertiseGrid,
  MethodSteps,
} from "@/components/site/SalesBlocks";
import { DataTable, StatRow } from "@/components/site/DataBlocks";
import { entryMetadata } from "@/lib/seo";

const entry = getEntry("geo");
export const metadata = entryMetadata(entry, "/geo");

export default function Page() {
  return (
    <>
      <ContentPage entry={entry} />

      <ComparisonBlock
        titre="Ce qu’on vend sous le nom de GEO, et ce qu’on fait"
        intro="Le terrain est neuf, donc peuplé d’offres creuses. Autant dire franchement ce qui sépare les deux."
        colonneA={{
          titre: "Les offres GEO qu’on croise",
          points: [
            "Un fichier llms.txt déposé à la racine, présenté comme la solution",
            "Une promesse d’apparaître dans ChatGPT, parfois avec un délai",
            "Un « score de visibilité IA » dont la méthode de calcul n’est pas donnée",
            "Des relevés faits à la main, non reproductibles d’une fois sur l’autre",
            "Un seul moteur observé, généralement ChatGPT",
            "Aucune distinction entre être mentionné et être cité avec un lien",
          ],
        }}
        colonneB={{
          titre: "Notre façon de travailler",
          points: [
            "llms.txt posé parce qu’il coûte peu, jamais présenté comme suffisant",
            "Aucune promesse de citation : une réponse générée n’est pas reproductible",
            "Un panel écrit, figé, exécutable par quelqu’un d’autre que son auteur",
            "Relevés automatisés via les API, pour que deux vagues soient comparables",
            "Cinq moteurs observés, avec leurs comportements propres",
            "Trois mesures séparées : mention, citation avec lien, trafic référent",
          ],
        }}
      />

      <StatRow
        titre="Ce qu’il faut savoir avant d’investir sur le GEO"
        stats={[
          {
            valeur: "0",
            libelle:
              "Garantie possible d’être cité par un moteur de réponse, quel que soit le budget",
            source: "Une réponse générée varie selon le modèle, la date et la session",
          },
          {
            valeur: "5",
            libelle:
              "Moteurs à observer séparément : ChatGPT, Gemini, Perplexity, Claude, Mistral",
            source: "Leurs mécanismes de récupération diffèrent",
          },
          {
            valeur: "2 ans",
            libelle:
              "Que nous consacrons au basculement du SEO vers les moteurs de réponse",
            source: "Suivi de part de voix et outils Python adossés aux API",
          },
          {
            valeur: "3",
            libelle:
              "Mesures distinctes à ne jamais confondre : mention, citation, visite",
            source: "Seule la troisième se rattache à une conversion",
          },
        ]}
      />

      <DataTable
        titre="Comment chaque moteur choisit ses sources"
        intro="Optimiser « pour l’IA » en bloc ne veut rien dire : ce qui fonctionne sur l’un ne vaut pas forcément sur l’autre. Voici ce qui les sépare réellement."
        colonnes={[
          { cle: "moteur", titre: "Moteur" },
          { cle: "recup", titre: "Récupération" },
          { cle: "poids", titre: "Ce qu’il privilégie" },
          { cle: "cite", titre: "Cite avec lien" },
          { cle: "robot", titre: "Robot à autoriser" },
        ]}
        lignes={[
          {
            moteur: "ChatGPT Search",
            recup: "Index tiers + récupération en direct",
            poids: "Contenus structurés, formats listés",
            cite: true,
            robot: "OAI-SearchBot",
          },
          {
            moteur: "Perplexity",
            recup: "Index propriétaire",
            poids: "Fraîcheur, nettement plus que les autres",
            cite: true,
            robot: "PerplexityBot",
          },
          {
            moteur: "AI Overviews",
            recup: "Index Google",
            poids: "Les signaux du référencement classique",
            cite: true,
            robot: "Googlebot (déjà en place)",
          },
          {
            moteur: "Claude",
            recup: "Récupération à la demande",
            poids: "Sources identifiables et datées",
            cite: true,
            robot: "Claude-SearchBot",
          },
          {
            moteur: "Mistral",
            recup: "Récupération à la demande",
            poids: "Contenus en français bien structurés",
            cite: true,
            robot: "MistralAI-User",
          },
        ]}
        note="Les comportements évoluent vite et ce tableau décrit un état observé, pas une règle stable. Il est revu à chaque vague de relevés."
      />

      <MethodSteps
        titre="Comment on travaille le GEO"
        intro="Cinq temps. Les trois premiers précèdent toute modification du site : restructurer avant d’avoir mesuré revient à corriger au hasard."
        etapes={[
          {
            titre: "Écrire le panel",
            phrase:
              "On part des questions que vos prospects posent réellement avant d’acheter, pas de mots-clés.",
            points: [
              "30 à 80 questions par intention d’achat",
              "Langue, marché et moteur consignés pour chacune",
              "Formulations validées avec vos équipes commerciales",
              "Panel figé : il ne changera plus",
            ],
            objectif:
              "obtenir une base de comparaison. Un panel qui évolue d’une vague à l’autre ne mesure rien du tout.",
          },
          {
            titre: "Relever l’état initial",
            phrase:
              "Chaque question est posée à chaque moteur, plusieurs fois, dans des conditions notées.",
            points: [
              "Réponse intégrale conservée, avec date et heure",
              "Sources citées relevées une à une",
              "Concurrents mentionnés recensés",
              "Erreurs factuelles sur votre marque notées à part",
            ],
            objectif:
              "savoir où vous en êtes réellement, y compris quand la réponse est « nulle part » — c’est le cas le plus fréquent et c’est un point de départ, pas un échec.",
          },
          {
            titre: "Analyser ce qui est cité",
            phrase:
              "On compare vos pages à celles que les moteurs reprennent déjà sur votre marché.",
            points: [
              "Présence d’une réponse autonome en tête de page",
              "Densité de données chiffrées et de sources",
              "Fraîcheur affichée et auteur identifiable",
              "Structure extractible : titres interrogatifs, listes",
            ],
            objectif:
              "rendre l’écart chiffrable plutôt qu’impressionniste, et savoir quoi corriger en premier.",
          },
          {
            titre: "Restructurer les gabarits",
            phrase:
              "Le travail porte sur les modèles de page, pas sur les pages une à une.",
            points: [
              "Réponse autonome placée avant tout développement",
              "Intertitres reformulés comme des questions",
              "Données structurées enrichies et datation visible",
              "Robots de récupération autorisés explicitement",
            ],
            objectif:
              "corriger des centaines de pages en modifiant quelques gabarits, plutôt que de reprendre le site article par article.",
          },
          {
            titre: "Rejouer et comparer",
            phrase:
              "Le panel est réexécuté à conditions identiques, à intervalle régulier.",
            points: [
              "Même questions, même moteurs, même protocole",
              "Évolution des mentions, citations et trafic référent",
              "Ajustement des pages restées sans effet",
              "Rapport commenté, pas un tableau de bord muet",
            ],
            objectif:
              "distinguer une progression réelle d’une variation de session — ce qu’un relevé unique ne permet jamais.",
          },
        ]}
      />

      <ExpertiseGrid
        titre="Nos expertises GEO"
        intro="Le GEO n’est pas une prestation unique. Voici ce qui se traite séparément, selon l’état de départ."
        expertises={[
          {
            nom: "Audit de visibilité IA",
            tag: "DIAGNOSTIC",
            benefice:
              "Sachez ce que les moteurs de réponse disent de vous, et quelles sources ils citent à votre place.",
            href: "/audit-visibilite-ia",
          },
          {
            nom: "Référencement IA",
            tag: "MÉTHODE",
            benefice:
              "Structurez vos contenus pour qu’ils soient repris par ChatGPT, Gemini et Perplexity.",
            href: "/geo-referencement-ia",
          },
          {
            nom: "Analyse concurrentielle",
            tag: "MARCHÉ",
            benefice:
              "Identifiez qui occupe les réponses sur votre marché, et avec quel type de contenu.",
            href: "/analyse-concurrentielle-seo-geo",
          },
          {
            nom: "Analyseur de citabilité",
            tag: "OUTIL",
            benefice:
              "Testez gratuitement si un texte réunit les formes que les moteurs de réponse reprennent.",
            href: "/outils-seo#citabilite",
          },
          {
            nom: "SEO technique",
            tag: "SOCLE",
            benefice:
              "Rendez vos pages atteignables : un moteur ne cite pas ce qu’il ne peut pas lire.",
            href: "/seo-technique",
          },
          {
            nom: "Stratégie de contenu",
            tag: "CONTENU",
            benefice:
              "Produisez l’information originale que les modèles n’ont nulle part ailleurs.",
            href: "/strategie-contenu-seo",
          },
        ]}
      />

      <BridgeBlock
        titre="Sans SEO, il n’y a rien à citer"
        texte="Les moteurs de réponse récupèrent des pages indexées et accessibles. Une page que Google n’atteint pas ne sera citée par personne, quelle que soit la qualité de sa rédaction. C’est pour cette raison que le GEO ne se vend pas comme une prestation isolée : il se construit sur une base de référencement saine, et les deux se traitent dans le même système."
        lien="/seo"
        libelleLien="Voir le socle SEO"
      />
    </>
  );
}

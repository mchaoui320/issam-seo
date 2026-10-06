import { getEntry } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import {
  BridgeBlock,
  ComparisonBlock,
  ExpertiseGrid,
  MethodSteps,
} from "@/components/site/SalesBlocks";
import { StatRow } from "@/components/site/DataBlocks";
import { entryMetadata } from "@/lib/seo";

const entry = getEntry("seo");
export const metadata = entryMetadata(entry, "/seo");

export default function Page() {
  return (
    <>
      <ContentPage entry={entry} />

      <ComparisonBlock
        titre="Ce qui nous sépare d’une prestation SEO classique"
        intro="Formulé sans ménagement, parce que c’est la question que vous vous posez en comparant plusieurs prestataires."
        colonneA={{
          titre: "Ce qu’on voit le plus souvent",
          points: [
            "Un rapport de positions mensuel, sans lien avec les demandes reçues",
            "Des recommandations génériques, transposables à n’importe quel site",
            "Une promesse de première position, parfois assortie d’un délai",
            "Les moteurs de réponse IA traités comme un sujet à part, ou ignorés",
            "Des outils cités vaguement, jamais les livrables",
            "Un prix annoncé après trois échanges commerciaux",
          ],
        }}
        colonneB={{
          titre: "Comment on travaille",
          points: [
            "Un suivi qui sépare impressions, clics et demandes qualifiées",
            "Des recommandations qui nomment vos URL et leur contrôle de recette",
            "Aucune promesse de position : le classement ne se contrôle pas",
            "SEO et moteurs de réponse traités dans le même système",
            "Outils nommés, livrables décrits, exports bruts remis",
            "Des fourchettes de prix publiées sur le site, avant tout contact",
          ],
        }}
      />

      <StatRow
        titre="Trois ordres de grandeur à connaître avant de commencer"
        stats={[
          {
            valeur: "570 €",
            libelle: "Tarif journalier moyen d’un consultant SEO en France",
            source: "Baromètre Malt 2025",
          },
          {
            valeur: "6 à 12 mois",
            libelle:
              "Délai habituel avant un effet net sur une requête commerciale disputée",
            source: "Les corrections techniques agissent plus vite",
          },
          {
            valeur: "2,5 s",
            libelle:
              "Seuil de LCP à tenir au 75e percentile des visites réelles",
            source: "Recommandation Core Web Vitals",
          },
          {
            valeur: "0",
            libelle:
              "Position garantie par un prestataire sérieux, quel que soit le budget",
            source: "Une garantie de position doit faire fuir",
          },
        ]}
      />

      <MethodSteps
        titre="Notre méthode, étape par étape"
        intro="Chaque étape produit un document utilisable sans nous. Si une étape ne produit rien de vérifiable, elle n’a pas lieu d’être facturée."
        etapes={[
          {
            titre: "Comprendre avant de recommander",
            phrase:
              "On part de vos objectifs commerciaux et de vos données, pas d’une liste de bonnes pratiques.",
            points: [
              "Objectifs commerciaux et contraintes internes",
              "État initial documenté : positions, trafic, conversions",
              "Accès Search Console, analytics et données de conversion",
              "Identification des pages qui génèrent déjà des contacts",
            ],
            objectif:
              "disposer d’un point de départ chiffré, sans lequel aucune variation ultérieure ne sera interprétable.",
          },
          {
            titre: "Diagnostiquer les freins réels",
            phrase:
              "Un crawl complet confronté aux données Search Console distingue un problème technique d’un problème d’intention.",
            points: [
              "Crawl, statuts HTTP, directives robots et canonicals",
              "Rendu JavaScript et contenu réellement reçu par les moteurs",
              "Core Web Vitals sur données de terrain",
              "Cartographie des intentions et détection des cannibalisations",
            ],
            objectif:
              "séparer ce qui bloque l’indexation de ce qui bloque la pertinence — les deux ne se corrigent pas de la même façon.",
          },
          {
            titre: "Prioriser par impact et par effort",
            phrase:
              "Une feuille de route de cinquante actions dont trois seront réalisées ne sert à personne.",
            points: [
              "Croisement impact attendu, effort et dépendances techniques",
              "Un responsable nommé par action",
              "Un critère de recette vérifiable par action",
              "Arbitrage explicite de ce qui ne sera pas fait",
            ],
            objectif:
              "obtenir une liste que vos équipes peuvent réellement exécuter avec les moyens dont elles disposent.",
          },
          {
            titre: "Déployer avec vos équipes",
            phrase:
              "Les corrections sont faites par vos développeurs et vos rédacteurs, ou avec eux. Rien n’est fait dans une boîte noire.",
            points: [
              "Tickets rédigés dans votre outil de suivi",
              "Briefs éditoriaux précisant intention, structure et preuves",
              "Contrôle en préproduction avant mise en ligne",
              "Vérification que les canonicals et redirections survivent au déploiement",
            ],
            objectif:
              "que les corrections tiennent après la fin de la mission, parce que vos équipes les ont faites et les comprennent.",
          },
          {
            titre: "Mesurer et décider",
            phrase:
              "Le reporting distingue les actions menées, les résultats observés et ce qui reste une hypothèse.",
            points: [
              "Séparation marque et hors marque",
              "Suivi des demandes qualifiées, pas seulement du trafic",
              "Annotation des mises en production et des campagnes",
              "Décision explicite pour le mois suivant",
            ],
            objectif:
              "savoir ce qui a changé, ce qui reste incertain, et quoi faire ensuite — pas contempler une courbe.",
          },
        ]}
      />

      <ExpertiseGrid
        titre="Nos expertises SEO"
        intro="Chaque levier se traite séparément. Ils se combinent quand le diagnostic le justifie, pas par principe commercial."
        expertises={[
          {
            nom: "Audit SEO",
            tag: "DIAGNOSTIC",
            benefice:
              "Identifiez ce qui freine réellement votre visibilité, et dans quel ordre le corriger.",
            href: "/audit-seo",
          },
          {
            nom: "SEO technique",
            tag: "ON-SITE",
            benefice:
              "Éliminez ce qui empêche les moteurs d’explorer, de rendre et d’indexer vos pages.",
            href: "/seo-technique",
          },
          {
            nom: "Stratégie de contenu",
            tag: "CONTENU",
            benefice:
              "Répondez mieux que les pages déjà classées, sur les intentions qui amènent des clients.",
            href: "/strategie-contenu-seo",
          },
          {
            nom: "Netlinking",
            tag: "OFF-SITE",
            benefice:
              "Construisez une autorité crédible, sans exposer votre site à une dévaluation.",
            href: "/netlinking",
          },
          {
            nom: "SEO local",
            tag: "LOCAL",
            benefice:
              "Soyez trouvé dans la zone que vous desservez réellement, pas dans un annuaire de pages.",
            href: "/seo-local",
          },
          {
            nom: "Refonte SEO",
            tag: "MIGRATION",
            benefice:
              "Changez de site sans perdre le trafic que l’ancien avait mis des années à construire.",
            href: "/refonte-seo",
          },
          {
            nom: "GEO et moteurs IA",
            tag: "IA",
            benefice:
              "Devenez une source reprise par ChatGPT, Perplexity et les résumés de Google.",
            href: "/geo",
          },
          {
            nom: "Data web et mesure",
            tag: "DATA",
            benefice:
              "Reliez votre visibilité à des demandes réelles, pas à un volume de sessions.",
            href: "/data-web",
          },
        ]}
      />

      <BridgeBlock
        titre="Le SEO est devenu le socle du GEO"
        texte="Les moteurs de réponse ne citent que des pages qu’ils peuvent atteindre, lire et comprendre. Un site mal indexé n’a rien à faire citer. Travailler le GEO sans base SEO saine revient à décorer une pièce dont la porte est fermée — c’est pour cette raison que les deux se traitent dans le même système, et pas comme deux prestations séparées."
        lien="/geo"
        libelleLien="Voir comment on traite le GEO"
      />
    </>
  );
}

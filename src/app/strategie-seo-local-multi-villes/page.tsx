import { InsightServicePage } from "@/components/site/InsightServicePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Stratégie SEO local multi-villes : pages, Google Maps et data",
  "Construisez une couverture locale multi-villes utile : zones réellement servies, pages distinctes, Google Business Profile, avis et mesure des leads.",
  "/strategie-seo-local-multi-villes",
);

const faq = [
  ["Faut-il une page pour chaque ville ?", "Seulement lorsque la ville correspond à un marché réellement servi et que la page peut apporter une information propre : offre, contrainte, zone, preuve, exemple ou question locale. Une série de textes où seul le nom de ville change affaiblit le dispositif."],
  ["Peut-on créer une fiche Google Business Profile sans adresse locale ?", "Il faut respecter les règles d’éligibilité et représenter une activité réelle. Une zone desservie n’autorise pas à inventer un établissement, une adresse ou un bureau virtuel."],
  ["Comment mesurer le SEO local ?", "Le suivi combine visibilité sur un panel de requêtes et de points géographiques, performances de la fiche, trafic des pages locales, appels, formulaires, itinéraires et qualité des demandes."],
  ["Comment éviter la cannibalisation entre villes ?", "Chaque page reçoit un rôle, une zone, des preuves et des liens explicites. Les marchés trop proches ou sans matière propre peuvent être regroupés dans une page de territoire plutôt que dupliqués."],
] as const;

export default function Page() {
  return <InsightServicePage
    code="L-03"
    eyebrow="SEO LOCAL / MULTI-VILLES / MAPS"
    title="Déployer un territoire local sans fabriquer cinquante pages vides."
    intro="Une stratégie multi-villes relie la réalité opérationnelle, Google Business Profile, les pages de territoire, les avis et le suivi des contacts. Chaque zone doit avoir une fonction commerciale et une preuve distincte."
    outcome="Un système local cohérent, mesurable et extensible ville par ville."
    tensions={[
      { title: "Zone réelle", text: "Distinguer siège, établissement, zone desservie et marché visé pour ne jamais promettre une présence qui n’existe pas." },
      { title: "Différence locale", text: "Documenter les besoins, secteurs, contraintes, voisinages et preuves qui rendent chaque page utile en dehors du nom de ville." },
      { title: "Passage au contact", text: "Relier visibilité Maps et pages locales aux appels, formulaires, itinéraires et demandes qualifiées." },
    ]}
    diagnostics={[
      { title: "Carte de potentiel", text: "Villes, bassins, services, concurrence, demande connue, capacité opérationnelle et priorités commerciales." },
      { title: "État des profils locaux", text: "Éligibilité, catégories, services, informations, photos, avis, cohérence du nom et pages de destination." },
      { title: "Architecture de territoire", text: "Rôle des pages ville, zone, agence, service et secteur ; règles de maillage et prévention des doublons." },
      { title: "Réservoir de preuves", text: "Interventions, équipes, partenaires, témoignages, données, délais, contraintes et connaissance de terrain à attribuer." },
      { title: "Plan de mesure", text: "UTM, appels, formulaires, consentement, événements GA4 et lecture séparée par zone et service." },
    ]}
    steps={[
      { title: "Cartographier", text: "Classer les villes selon potentiel, capacité de service, preuve disponible et concurrence." },
      { title: "Modéliser", text: "Définir les types de pages, les données requises et les règles qui empêchent la duplication." },
      { title: "Produire", text: "Créer d’abord un petit groupe de pages riches, avec profils locaux, liens, preuves et conversion cohérents." },
      { title: "Étendre", text: "Mesurer les résultats, consolider les pages faibles et ouvrir une nouvelle zone uniquement quand la matière existe." },
    ]}
    deliverables={[
      "Carte de priorité des villes et bassins réellement servis",
      "Architecture des pages locales et règles de non-duplication",
      "Brief éditorial spécifique pour chaque première ville",
      "Plan Google Business Profile, avis et citations locales",
      "Convention UTM et plan de mesure des contacts",
      "Tableau de pilotage pour étendre, fusionner ou arrêter une zone",
    ]}
    faq={faq}
    path="/strategie-seo-local-multi-villes"
  />;
}

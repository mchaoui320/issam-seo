import { InsightServicePage } from "@/components/site/InsightServicePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Audit visibilité IA : ChatGPT, Claude, Gemini et Perplexity",
  "Analysez les prompts de décision, les citations, les sources et les concurrents qui structurent la visibilité de votre marque dans les moteurs de réponse IA.",
  "/audit-visibilite-ia",
);

const faq = [
  ["Peut-on connaître une position exacte dans ChatGPT ?", "Une réponse générée varie selon le modèle, la date, le contexte et parfois l’utilisateur. L’audit utilise donc un panel documenté, répété et horodaté. Il mesure des tendances de présence, de citation et de concurrence, sans présenter un rang comme une vérité permanente."],
  ["Quels moteurs sont observés ?", "Le périmètre peut couvrir ChatGPT, Claude, Gemini et Perplexity. Le choix dépend des usages de vos prospects. Chaque relevé conserve la requête, le moteur, la date, la réponse et les sources visibles."],
  ["Le GEO remplace-t-il le SEO ?", "Non. L’indexabilité, la qualité éditoriale, l’architecture, les liens et la réputation restent le socle. L’audit ajoute une lecture des réponses générées, des sources citées et de la cohérence de l’entité."],
  ["Faut-il créer un fichier llms.txt ?", "Ce fichier peut servir à certains outils, mais Google indique qu’il n’est pas nécessaire pour ses fonctions de recherche générative. Il ne remplace ni des pages accessibles ni des contenus originaux et vérifiables."],
] as const;

export default function Page() {
  return <InsightServicePage
    code="A-01"
    eyebrow="AUDIT VISIBILITÉ IA / GEO / LLMO"
    title="Voir ce que les moteurs de réponse comprennent, citent et recommandent."
    intro="Un audit de visibilité IA cartographie les questions qui précèdent une décision, les marques proposées, les pages citées et les sources qui font autorité. Le résultat n’est pas un score décoratif : c’est une feuille de route reliée au SEO, à la marque et à la donnée."
    outcome="Un protocole de mesure reproductible et une stratégie de sources."
    tensions={[
      { title: "Présence", text: "La marque apparaît-elle quand un prospect cherche une solution, compare des prestataires ou demande une recommandation locale ?" },
      { title: "Citation", text: "Quelles URL et quelles sources tierces soutiennent la réponse ? Une mention sans lien et une source citée racontent deux réalités différentes." },
      { title: "Perception", text: "Quels attributs, offres, limites et concurrents sont associés à la marque ? Les erreurs factuelles sont relevées séparément des absences." },
    ]}
    diagnostics={[
      { title: "Panel de prompts par intention", text: "Découverte, comparaison, problème, preuve et décision. Les formulations sont conservées pour rendre les vagues comparables." },
      { title: "Empreinte des sources", text: "Pages propriétaires, presse, annuaires, partenaires, avis, données et documents que les moteurs utilisent ou pourraient vérifier." },
      { title: "Architecture de l’entité", text: "Cohérence du nom, de l’offre, des auteurs, des zones servies, des profils et des faits publiés sur plusieurs surfaces." },
      { title: "Passages citables", text: "Identification des réponses originales, données de première main, définitions et preuves qui peuvent soutenir une réponse autonome." },
      { title: "Mesure dans GA4 et les journaux", text: "Segmentation du trafic référent, notamment utm_source=chatgpt.com, suivi des conversions et observation des robots quand les logs sont accessibles." },
    ]}
    steps={[
      { title: "Cadrer", text: "Définir les décisions commerciales, marchés, publics et concurrents qui comptent réellement." },
      { title: "Observer", text: "Exécuter le panel, capturer les réponses et classer présence, citation, sentiment, erreur et concurrence." },
      { title: "Expliquer", text: "Relier chaque écart aux pages, aux sources, à l’autorité de l’entité et aux limites techniques observables." },
      { title: "Activer", text: "Prioriser les contenus, preuves, relations éditoriales et corrections qui peuvent changer la prochaine vague." },
    ]}
    deliverables={[
      "Panel de prompts segmenté par intention et marché",
      "Relevé multi-moteurs horodaté avec sources visibles",
      "Carte des entités, concurrents et domaines cités",
      "Backlog de contenus propriétaires et de preuves à produire",
      "Plan de mesure du trafic et des conversions issues des moteurs IA",
      "Point de contrôle à 30, 60 et 90 jours",
    ]}
    faq={faq}
    path="/audit-visibilite-ia"
  />;
}

import { InsightServicePage } from "@/components/site/InsightServicePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Audit de visibilité IA et part de voix",
  "Analysez les prompts de décision, les citations, les sources et les concurrents qui structurent la visibilité de votre marque dans les moteurs de réponse IA.",
  "/audit-visibilite-ia",
);

const faq = [
  ["Peut-on connaître une position exacte dans ChatGPT ?", "Une réponse générée varie selon le modèle, la date, le contexte et parfois l’utilisateur. L’audit utilise donc un panel documenté, répété et horodaté. Il mesure des tendances de présence, de citation et de concurrence, sans présenter un rang comme une vérité permanente."],
  ["Quels moteurs sont observés ?", "Le périmètre peut couvrir ChatGPT, Claude, Gemini et Perplexity. Le choix dépend des usages de vos prospects. Chaque relevé conserve la requête, le moteur, la date, la réponse et les sources visibles."],
  ["Le GEO remplace-t-il le SEO ?", "Non. L’indexabilité, la qualité éditoriale, l’architecture, les liens et la réputation restent le socle. L’audit ajoute une lecture des réponses générées, des sources citées et de la cohérence de l’entité."],
  ["Faut-il créer un fichier llms.txt ?", "Ce fichier peut servir à certains outils, mais Google indique qu’il n’est pas nécessaire pour ses fonctions de recherche générative. Il ne remplace ni des pages accessibles ni des contenus originaux et vérifiables. Le présenter comme la solution revient à vendre un fichier texte à la place d’un travail éditorial."],
  ["Combien de temps dure un audit de visibilité IA ?", "Deux à quatre semaines entre le lancement et la restitution, selon la taille du panel et le nombre de moteurs retenus. Les relevés eux-mêmes demandent plusieurs passages espacés : une réponse générée variant d’une session à l’autre, un relevé unique ne distingue pas une tendance d’un aléa."],
  ["Que se passe-t-il si la marque n’apparaît nulle part ?", "C’est le cas de départ le plus fréquent, et ce n’est pas un échec de l’audit : c’est son point zéro. Le travail porte alors sur l’identification des sources que les moteurs reprennent déjà sur votre marché, puis sur la production des contenus et des preuves capables d’y figurer. Le premier relevé sert de référence pour mesurer ce que les suivants auront changé."],
  ["Les relevés sont-ils automatisés ?", "En partie. L’interrogation en série passe par les API des modèles, via des scripts qui normalisent les réponses et extraient les sources citées, ce qui rend le relevé reproductible. La lecture des réponses, elle, reste manuelle : distinguer une mention neutre d’une recommandation, ou repérer une erreur factuelle, demande un jugement."],
] as const;

export default function Page() {
  return <InsightServicePage
    code="A-01"
    eyebrow="AUDIT VISIBILITÉ IA / GEO / LLMO"
    title="Voir ce que les moteurs de réponse comprennent, citent et recommandent."
    intro="Un audit de visibilité IA cartographie les questions qui précèdent une décision, les marques proposées, les pages citées et les sources qui font autorité. Le résultat n’est pas un score décoratif : c’est une feuille de route reliée au SEO, à la marque et à la donnée."
    outcome="Un protocole de mesure reproductible et une stratégie de sources."
    tensions={[
      { title: "Présence", text: "La marque apparaît-elle quand un prospect cherche une solution, compare des prestataires ou demande une recommandation locale ? L’absence est rarement totale : elle est souvent partielle, concentrée sur certaines intentions et certains moteurs, ce qui change complètement la nature du travail à mener." },
      { title: "Citation", text: "Quelles URL et quelles sources tierces soutiennent la réponse ? Une mention sans lien et une source citée racontent deux réalités différentes : la première relève de la notoriété, la seconde amène du trafic et se mesure. Beaucoup de rapports confondent les deux et surestiment la visibilité réelle." },
      { title: "Perception", text: "Quels attributs, offres, limites et concurrents sont associés à la marque ? Les erreurs factuelles sont relevées séparément des absences, parce qu’elles ne se corrigent pas de la même façon : une absence se comble par de la production, une erreur se corrige en publiant une information explicite que le modèle puisse recouper." },
    ]}
    diagnostics={[
      { title: "Panel de prompts par intention", text: "Découverte, comparaison, problème, preuve et décision. Les formulations sont conservées pour rendre les vagues comparables." },
      { title: "Empreinte des sources", text: "Pages propriétaires, presse, annuaires, partenaires, avis, données et documents que les moteurs utilisent ou pourraient vérifier." },
      { title: "Architecture de l’entité", text: "Cohérence du nom, de l’offre, des auteurs, des zones servies, des profils et des faits publiés sur plusieurs surfaces." },
      { title: "Passages citables", text: "Identification des réponses originales, données de première main, définitions et preuves qui peuvent soutenir une réponse autonome." },
      { title: "Mesure dans GA4 et les journaux", text: "Segmentation du trafic référent, notamment utm_source=chatgpt.com, suivi des conversions et observation des robots quand les logs sont accessibles." },
    ]}
    steps={[
      { title: "Cadrer", text: "Définir les décisions commerciales, marchés, publics et concurrents qui comptent réellement. Cette étape évite le piège le plus courant : mesurer une visibilité sur des questions que personne ne pose. Le panel est validé avec vous avant tout relevé, et figé ensuite." },
      { title: "Observer", text: "Exécuter le panel, capturer les réponses et classer présence, citation, sentiment, erreur et concurrence. Chaque relevé conserve la requête exacte, le moteur, la date, l’heure et la réponse intégrale. Plusieurs passages espacés sont nécessaires pour distinguer une tendance d’une variation de session." },
      { title: "Expliquer", text: "Relier chaque écart aux pages, aux sources, à l’autorité de l’entité et aux limites techniques observables. On compare vos pages à celles que les moteurs citent déjà sur votre marché : structure, réponse autonome en tête, données chiffrées, fraîcheur, auteur identifiable. L’écart devient chiffrable plutôt qu’impressionniste." },
      { title: "Activer", text: "Prioriser les contenus, preuves, relations éditoriales et corrections qui peuvent changer la prochaine vague. Chaque action porte son URL, la modification attendue et le contrôle qui permettra de vérifier qu’elle a bien été faite. Le relevé suivant sert de mesure." },
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
    pricing={{
      fourchette: "Audit initial 3 000 à 7 000 € · relevés de suivi 500 à 1 500 € par vague",
      variables: [
        "Taille du panel de questions, de 30 à plus de 100",
        "Nombre de moteurs observés et nombre de passages par question",
        "Nombre de marchés et de langues",
        "Profondeur de l’analyse concurrentielle des sources citées",
        "Mise en place ou non du suivi dans GA4 et les journaux serveur",
      ],
    }}
    path="/audit-visibilite-ia"
  />;
}

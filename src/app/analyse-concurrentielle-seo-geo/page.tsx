import { InsightServicePage } from "@/components/site/InsightServicePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Analyse concurrentielle SEO & GEO : trouver les vrais écarts",
  "Comparez territoires de requêtes, contenus, preuves, citations IA, SEO local et mesure pour construire une stratégie concurrentielle exécutable.",
  "/analyse-concurrentielle-seo-geo",
);

const faq = [
  ["Combien de concurrents faut-il analyser ?", "Trois à cinq acteurs suffisent souvent pour une première décision : concurrents commerciaux, sites qui gagnent les résultats Google et marques fréquemment proposées par les moteurs IA. Ce ne sont pas toujours les mêmes."],
  ["L’analyse repose-t-elle seulement sur des mots-clés ?", "Non. Elle relie intentions, types de pages, maillage, preuves, empreinte locale, sources tierces, mentions dans les réponses IA et mécanismes de conversion."],
  ["Peut-on copier la stratégie d’un concurrent ?", "Le but est d’identifier les attentes du marché et les espaces mal servis. Copier une structure ou reformuler les mêmes contenus crée peu de valeur. La recommandation cherche un angle propriétaire et défendable."],
  ["Comment prioriser les écarts ?", "Chaque opportunité est évaluée selon sa proximité avec une décision commerciale, l’effort, la dépendance technique, la preuve disponible et la capacité à mesurer l’effet."],
] as const;

export default function Page() {
  return <InsightServicePage
    code="C-02"
    eyebrow="ANALYSE CONCURRENTIELLE / SEO + GEO"
    title="Comprendre pourquoi ils gagnent. Choisir où ne pas les suivre."
    intro="L’analyse concurrentielle utile dépasse les courbes de trafic estimé. Elle montre quels territoires les autres occupent, quelles preuves ils exposent, qui les cite et où une marque peut construire une réponse plus forte, plus locale ou plus vérifiable."
    outcome="Une carte des écarts qui sépare imitation facile et avantage durable."
    tensions={[
      { title: "Concurrents réels", text: "Les entreprises citées par les prospects, les domaines visibles sur Google et les marques proposées par les LLM ne se recouvrent pas toujours." },
      { title: "Territoires gagnés", text: "Un concurrent peut dominer une intention commerciale, un secteur, une ville ou une définition sans être le plus gros site du marché." },
      { title: "Avantage défendable", text: "Les volumes faciles à copier sont séparés des actifs plus rares : données, expertise, distribution, réputation et preuve locale." },
    ]}
    diagnostics={[
      { title: "Paysage de requêtes", text: "Regroupement des recherches par problème, solution, comparaison, secteur, ville et niveau de décision." },
      { title: "Inventaire des formats", text: "Pages services, cas, études, outils, glossaires, vidéos, données, profils locaux et contenus de référence." },
      { title: "Matrice de profondeur", text: "Pour chaque acteur : preuve, spécificité, fraîcheur, expérience, sources, auteur, liens internes et prochain geste proposé." },
      { title: "Part de réponse IA", text: "Observation d’un panel de prompts pour savoir quelles marques et quels domaines structurent déjà les recommandations." },
      { title: "Friction de conversion", text: "Lecture du parcours depuis la requête jusqu’au contact : promesse, réassurance, offre, formulaire, suivi et qualification." },
    ]}
    steps={[
      { title: "Délimiter", text: "Séparer concurrents commerciaux, organiques, locaux et conversationnels." },
      { title: "Collecter", text: "Rassembler pages, SERP, réponses IA et signaux de preuve avec date et source." },
      { title: "Comparer", text: "Noter la couverture et la profondeur avec une grille transparente, puis isoler les causes probables." },
      { title: "Choisir", text: "Transformer les écarts en paris éditoriaux, techniques, locaux et de distribution ordonnés." },
    ]}
    deliverables={[
      "Carte des concurrents commerciaux, SEO, locaux et IA",
      "Matrice des territoires de requêtes et formats gagnants",
      "Analyse des preuves, auteurs, sources et citations",
      "Opportunités à défendre par données ou expérience propriétaire",
      "Plan de pages à créer, consolider, fusionner ou retirer",
      "Roadmap impact / effort / preuve sur 90 jours",
    ]}
    faq={faq}
    path="/analyse-concurrentielle-seo-geo"
  />;
}

import { InsightServicePage } from "@/components/site/InsightServicePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Analyse concurrentielle SEO et GEO",
  "Comparez territoires de requêtes, contenus, preuves, citations IA, SEO local et mesure pour construire une stratégie concurrentielle exécutable.",
  "/analyse-concurrentielle-seo-geo",
);

const faq = [
  ["Combien de concurrents faut-il analyser ?", "Trois à cinq acteurs suffisent souvent pour une première décision : concurrents commerciaux, sites qui gagnent les résultats Google et marques fréquemment proposées par les moteurs IA. Ce ne sont pas toujours les mêmes."],
  ["L’analyse repose-t-elle seulement sur des mots-clés ?", "Non. Elle relie intentions, types de pages, maillage, preuves, empreinte locale, sources tierces, mentions dans les réponses IA et mécanismes de conversion."],
  ["Peut-on copier la stratégie d’un concurrent ?", "Le but est d’identifier les attentes du marché et les espaces mal servis. Copier une structure ou reformuler les mêmes contenus crée peu de valeur. La recommandation cherche un angle propriétaire et défendable."],
  ["Comment prioriser les écarts ?", "Chaque opportunité est évaluée selon sa proximité avec une décision commerciale, l’effort, la dépendance technique, la preuve disponible et la capacité à mesurer l’effet."],
  ["En quoi est-ce différent d’un audit SEO classique ?", "Un audit SEO regarde votre site. Une analyse concurrentielle regarde le marché : qui occupe les requêtes qui comptent, avec quel type de contenu, quelle profondeur et quelles preuves. Elle répond à une question que l’audit ne pose pas — à quel niveau faut-il jouer pour exister sur ce terrain, et à quel coût."],
  ["Combien de concurrents analysez-vous ?", "Trois à six en général. Au-delà, l’analyse se dilue et les écarts deviennent illisibles. Le choix compte plus que le nombre : on retient ceux qui occupent réellement vos requêtes de décision, pas ceux que vous citez en réunion. Les deux listes se recoupent rarement entièrement."],
  ["Les données viennent d’où ?", "Des pages de résultats elles-mêmes, de Semrush et Ahrefs pour les volumes et les profils de liens, et de relevés directs sur les moteurs de réponse pour la partie GEO. Les indicateurs d’autorité des outils sont des estimations propriétaires, pas des notes attribuées par Google : ils servent à comparer, pas à conclure."],
  ["À quelle fréquence faut-il refaire l’analyse ?", "Une fois par an suffit dans la plupart des cas, et à chaque fois qu’un concurrent change visiblement de stratégie ou qu’un nouvel entrant apparaît sur vos requêtes. La refaire tous les trimestres produit surtout du bruit : les positions bougent en permanence sans que le rapport de force se modifie réellement."],
  ["Que se passe-t-il si nos concurrents sont beaucoup plus gros ?", "C’est le cas le plus fréquent, et ça ne rend pas l’analyse inutile — ça en change la conclusion. Sur un marché où l’écart de moyens est important, la recommandation n’est jamais d’affronter frontalement les requêtes dominées, mais d’identifier les intentions que ces acteurs négligent parce que le volume y est trop faible pour eux et suffisant pour vous."],
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
      { title: "Avantage défendable", text: "Les volumes faciles à copier sont séparés des actifs plus rares : données, expertise, distribution, réputation et preuve locale. C'est la partie la plus utile de l'analyse : elle indique où un effort produira un écart durable, et où il ne fera que rattraper temporairement un concurrent mieux doté." },
    ]}
    diagnostics={[
      { title: "Paysage de requêtes", text: "Regroupement des recherches par problème, solution, comparaison, secteur, ville et niveau de décision." },
      { title: "Inventaire des formats", text: "Pages services, cas, études, outils, glossaires, vidéos, données, profils locaux et contenus de référence." },
      { title: "Matrice de profondeur", text: "Pour chaque acteur : preuve, spécificité, fraîcheur, expérience, sources, auteur, liens internes et prochain geste proposé." },
      { title: "Part de réponse IA", text: "Observation d’un panel de prompts pour savoir quelles marques et quels domaines structurent déjà les recommandations." },
      { title: "Friction de conversion", text: "Lecture du parcours depuis la requête jusqu’au contact : promesse, réassurance, offre, formulaire, suivi et qualification. Un concurrent moins bien positionné mais dont le parcours de contact est plus clair convertit souvent davantage, ce qu'aucun outil de suivi de positions ne montre." },
    ]}
    steps={[
      { title: "Délimiter", text: "Séparer concurrents commerciaux, organiques, locaux et conversationnels. Les quatre listes se recoupent moins qu'on ne le croit : l'entreprise qu'un dirigeant cite spontanément comme son concurrent n'est souvent pas celle qui occupe ses requêtes de décision." },
      { title: "Collecter", text: "Rassembler pages, SERP, réponses IA et signaux de preuve avec date et source. Chaque élément est daté et sourcé, parce qu'une page de résultats change et qu'une analyse non horodatée devient ininterprétable au bout de quelques mois." },
      { title: "Comparer", text: "Noter la couverture et la profondeur avec une grille transparente, puis isoler les causes probables. La grille est communiquée avec le rapport : une notation dont on ne connaît pas les critères ne permet ni de contester le résultat ni de le reproduire plus tard." },
      { title: "Choisir", text: "Transformer les écarts en paris éditoriaux, techniques, locaux et de distribution ordonnés. Chaque pari porte un coût estimé et un délai probable, de sorte que l'arbitrage reste le vôtre plutôt qu'une liste de recommandations à prendre ou à laisser." },
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
    pricing={{
      fourchette: "2 500 à 6 000 € selon le nombre de concurrents et de marchés",
      variables: [
        "Nombre de concurrents retenus, de trois à six",
        "Périmètre : SEO seul, ou SEO et moteurs de réponse",
        "Nombre de marchés et de langues",
        "Profondeur de l’analyse des profils de liens",
        "Production ou non du plan d’action détaillé qui suit l’analyse",
      ],
    }}
    path="/analyse-concurrentielle-seo-geo"
  />;
}

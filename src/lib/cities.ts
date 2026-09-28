export type LocalMarket = {
  slug: string;
  city: string;
  region: string;
  x: number;
  y: number;
  angle: string;
  sectors: string[];
  nearby: string[];
  challenges: string[];
  marketNote: string;
  approach: string;
  searchExamples: string[];
};

/**
 * Requête principale d'une page locale.
 *
 * « agence SEO {ville} » plutôt que « consultant SEO {ville} » : le
 * positionnement est celui d'une agence, et la formulation « agence » capte
 * aussi les recherches comparatives, plus commerciales.
 */
export function primaryKeyword(market: LocalMarket) {
  return `agence SEO ${market.city}`;
}

/**
 * Variantes réellement tapées autour de la requête principale. Servent aux
 * intertitres et au bloc de couverture affiché sur la page — jamais à répéter
 * mécaniquement le mot-clé dans le corps du texte.
 */
export function keywordVariants(market: LocalMarket) {
  return [
    `agence SEO ${market.city}`,
    `consultant SEO ${market.city}`,
    `référencement naturel ${market.city}`,
    `agence référencement ${market.city}`,
    `audit SEO ${market.city}`,
    `SEO local ${market.city}`,
    ...market.searchExamples,
  ].filter((v, i, a) => a.indexOf(v) === i);
}

/** Title tag. Compact : le gabarit ajoute « | MIC SIGNAL ». */
export function marketTitle(market: LocalMarket) {
  return `Agence SEO ${market.city} — Référencement naturel & IA`;
}

export function marketDescription(market: LocalMarket) {
  return `Agence SEO et référencement naturel à ${market.city} : audit technique, SEO local, visibilité dans ChatGPT et Perplexity, data web et data viz. Marché ${market.region}.`;
}

export const localMarkets: LocalMarket[] = [
  {
    slug: "marseille",
    city: "Marseille",
    region: "Provence-Alpes-Côte d’Azur",
    x: 63,
    y: 80,
    angle: "Métropole, tourisme, services et économie portuaire",
    sectors: ["Services locaux", "Tourisme", "BTP", "Santé", "E-commerce"],
    nearby: ["Aix-en-Provence", "Aubagne", "Cassis", "La Ciotat"],
    challenges: [
      "Distinguer Marseille, la métropole et les communes réellement desservies",
      "Transformer une présence Google Maps en demandes qualifiées",
      "Construire des pages locales utiles sans dupliquer le même texte",
    ],
    marketNote:
      "À Marseille, la visibilité locale se joue à plusieurs échelles : quartier, ville, métropole et bassin d’Aix. Une stratégie efficace choisit l’échelle qui correspond réellement au déplacement du client et à la zone d’intervention de l’entreprise.",
    approach:
      "On relie la fiche Google Business Profile, les pages de services, les signaux de confiance locaux et le suivi des appels ou formulaires pour savoir quelles zones produisent de vrais contacts.",
    searchExamples: [
      "consultant SEO Marseille",
      "audit SEO Marseille",
      "agence GEO Marseille",
      "référencement local Marseille",
    ],
  },
  {
    slug: "paris",
    city: "Paris",
    region: "Île-de-France",
    x: 49,
    y: 25,
    angle: "B2B, SaaS, cabinets, finance et commerce spécialisé",
    sectors: ["B2B", "SaaS", "Conseil", "Finance", "Retail"],
    nearby: ["Boulogne-Billancourt", "Levallois", "Montreuil", "La Défense"],
    challenges: [
      "Choisir un positionnement assez précis pour émerger sur un marché dense",
      "Séparer les requêtes nationales des recherches réellement locales",
      "Créer des preuves éditoriales capables d’être reprises par les moteurs IA",
    ],
    marketNote:
      "À Paris, viser un mot-clé large ne suffit pas. La différence vient de la spécialisation : secteur, taille d’entreprise, problème traité et niveau d’accompagnement. Cette précision sert autant Google que les recommandations de ChatGPT ou Claude.",
    approach:
      "On cartographie les requêtes de décision, les concurrents visibles et les sources citées par les moteurs de réponse, puis j’organise une architecture qui évite la concurrence entre vos propres pages.",
    searchExamples: [
      "consultant SEO Paris",
      "expert GEO Paris",
      "audit visibilité ChatGPT",
      "consultant SEO B2B Paris",
    ],
  },
  {
    slug: "lyon",
    city: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    x: 61,
    y: 56,
    angle: "Industrie, B2B, santé, logiciels et services métropolitains",
    sectors: ["Industrie", "B2B", "Santé", "Logiciels", "Formation"],
    nearby: ["Villeurbanne", "Vénissieux", "Bron", "Saint-Priest"],
    challenges: [
      "Rendre une expertise technique lisible pour des décideurs non spécialistes",
      "Couvrir la métropole sans créer une série de pages interchangeables",
      "Connecter les contenus longs aux offres à cycle de vente complexe",
    ],
    marketNote:
      "Le tissu lyonnais combine industrie, services B2B et pôles d’innovation. Les recherches sont souvent techniques et comparatives : elles demandent des contenus qui expliquent, prouvent et orientent vers une prochaine étape claire.",
    approach:
      "On transforme l’expertise métier en groupes de réponses : problèmes, solutions, comparaisons, contraintes et preuves. Ce modèle capte les requêtes Google et les questions formulées dans les assistants IA.",
    searchExamples: [
      "consultant SEO Lyon",
      "SEO industriel Lyon",
      "audit GEO Lyon",
      "référencement B2B Lyon",
    ],
  },
  {
    slug: "bordeaux",
    city: "Bordeaux",
    region: "Nouvelle-Aquitaine",
    x: 31,
    y: 58,
    angle: "Tourisme, vin, e-commerce, immobilier et numérique",
    sectors: ["Tourisme", "Vin", "E-commerce", "Immobilier", "Numérique"],
    nearby: ["Mérignac", "Pessac", "Talence", "Arcachon"],
    challenges: [
      "Gérer la saisonnalité et les recherches internationales",
      "Distinguer marque, produit, destination et intention d’achat",
      "Faire émerger des contenus originaux dans des secteurs très éditorialisés",
    ],
    marketNote:
      "À Bordeaux, les parcours mêlent découverte, comparaison et achat, souvent avec une forte saisonnalité. La stratégie doit distinguer les contenus qui inspirent de ceux qui font choisir une offre.",
    approach:
      "On segmente la demande par saison, origine géographique et maturité, puis on mesure séparément découverte, réservation, demande de devis et vente.",
    searchExamples: [
      "consultant SEO Bordeaux",
      "SEO e-commerce Bordeaux",
      "référencement tourisme Bordeaux",
      "consultant GEO Bordeaux",
    ],
  },
  {
    slug: "lille",
    city: "Lille",
    region: "Hauts-de-France",
    x: 49,
    y: 10,
    angle: "Retail, logistique, industrie et marchés transfrontaliers",
    sectors: ["Retail", "Logistique", "Industrie", "RH", "E-commerce"],
    nearby: ["Roubaix", "Tourcoing", "Villeneuve-d’Ascq", "Arras"],
    challenges: [
      "Organiser une visibilité multi-zone entre métropole et marché national",
      "Travailler les catalogues et réseaux de points de vente à grande échelle",
      "Préserver la cohérence des données locales sur plusieurs établissements",
    ],
    marketNote:
      "Le marché lillois relie commerce, logistique et industrie. Les entreprises multi-sites ont besoin d’une gouvernance SEO locale, pas seulement d’une page par ville : données, modèles, avis, contenus et mesure doivent rester cohérents.",
    approach:
      "On construit un système réplicable avec des règles d’unicité, un modèle de page locale, un suivi par établissement et des contrôles contre la duplication.",
    searchExamples: [
      "consultant SEO Lille",
      "SEO multi-sites Lille",
      "référencement retail Lille",
      "expert GEO Lille",
    ],
  },
  {
    slug: "toulouse",
    city: "Toulouse",
    region: "Occitanie",
    x: 42,
    y: 77,
    angle: "Aéronautique, ingénierie, logiciels et services spécialisés",
    sectors: ["Aéronautique", "Ingénierie", "SaaS", "Formation", "Services"],
    nearby: ["Blagnac", "Colomiers", "Balma", "Montauban"],
    challenges: [
      "Transformer des offres complexes en pages comprises par les moteurs",
      "Capter une demande B2B souvent faible en volume mais forte en valeur",
      "Faire reconnaître l’expertise technique au-delà de la marque",
    ],
    marketNote:
      "À Toulouse, beaucoup de requêtes B2B ont peu de volume mais une valeur élevée. La stratégie privilégie la couverture des cas d’usage, des contraintes et des comparaisons plutôt qu’une course aux gros volumes génériques.",
    approach:
      "On cartographie les problèmes traités par vos équipes, leurs formulations métier et les questions posées en comité d’achat afin de créer un corpus utile aux humains comme aux LLM.",
    searchExamples: [
      "consultant SEO Toulouse",
      "SEO B2B Toulouse",
      "référencement SaaS Toulouse",
      "consultant GEO Toulouse",
    ],
  },
  {
    slug: "nice",
    city: "Nice",
    region: "Provence-Alpes-Côte d’Azur",
    x: 79,
    y: 75,
    angle: "Tourisme, luxe, santé, immobilier et clientèle internationale",
    sectors: ["Tourisme", "Luxe", "Santé", "Immobilier", "International"],
    nearby: ["Cannes", "Antibes", "Monaco", "Cagnes-sur-Mer"],
    challenges: [
      "Arbitrer entre pages multilingues et ciblage local francophone",
      "Distinguer l’intention de séjour, de service et d’investissement",
      "Piloter une forte saisonnalité sans perdre la continuité annuelle",
    ],
    marketNote:
      "La Côte d’Azur combine demande locale, internationale et saisonnière. Une architecture claire doit indiquer la langue, la zone, le service et l’intention sans mélanger des publics qui ne cherchent pas la même chose.",
    approach:
      "On structure les versions linguistiques, les signaux locaux et les contenus de décision, puis on isole la performance par marché pour éviter les moyennes trompeuses.",
    searchExamples: [
      "consultant SEO Nice",
      "SEO international Nice",
      "référencement tourisme Côte d’Azur",
      "expert GEO Nice",
    ],
  },
  {
    slug: "montpellier",
    city: "Montpellier",
    region: "Occitanie",
    x: 56,
    y: 79,
    angle: "Santé, numérique, startups, formation et services locaux",
    sectors: ["Santé", "Numérique", "Startups", "Formation", "Services"],
    nearby: ["Lattes", "Castelnau-le-Lez", "Sète", "Nîmes"],
    challenges: [
      "Construire une autorité de marque sur des marchés jeunes et mouvants",
      "Relier acquisition locale et contenus nationaux",
      "Créer des sources et preuves que les moteurs IA peuvent citer",
    ],
    marketNote:
      "Montpellier concentre des entreprises du numérique, de la santé et de la formation. Leur visibilité dépend d’un équilibre entre présence locale, expertise nationale et identité de marque cohérente sur les sources externes.",
    approach:
      "On bâtit le socle local, puis des pages d’expertise et des ressources originales capables d’être trouvées sur Google et utilisées comme sources dans les réponses IA.",
    searchExamples: [
      "consultant SEO Montpellier",
      "SEO startup Montpellier",
      "référencement santé Montpellier",
      "consultant GEO Montpellier",
    ],
  },
];

export function marketPath(market: LocalMarket) {
  if (market.slug === "marseille" || market.slug === "paris") {
    return `/consultant-seo-${market.slug}`;
  }
  return `/consultant-seo/${market.slug}`;
}

export function getLocalMarket(slug: string) {
  return localMarkets.find((market) => market.slug === slug);
}

/**
 * Contenu commercial des pages locales.
 *
 * Séparé de `cities.ts` qui porte la donnée structurelle (coordonnées,
 * secteurs, voisines). Ici : ce qui fait d'une page locale une page de vente —
 * questions réellement posées sur le marché, zone couverte, lecture de la
 * concurrence, situations rencontrées.
 *
 * Règle tenue : aucun paragraphe n'est transposable d'une ville à l'autre en
 * changeant le nom. Si une phrase fonctionne pour Lille et pour Nice, elle n'a
 * rien à faire ici.
 */


/* ------------------------------------------------------------------
   Catalogue de prestations.

   Volontairement commun à toutes les villes : l'audit SEO livré à Lille
   est le même qu'à Nice, et prétendre le contraire en réécrivant six
   paragraphes par ville produirait exactement la duplication que ces
   pages cherchent à éviter.

   Ce qui change d'un marché à l'autre, c'est l'ORDRE DE PRIORITÉ — traité
   par `priorities` dans chaque ville.

   Les intitulés portent les entités du champ sémantique attendu sur une
   requête d'agence : audit, technique, local, netlinking, contenu, mesure.
   Leur présence est ce qui fait reconnaître la page comme une page
   d'agence, bien plus que la répétition du mot-clé principal.
   ------------------------------------------------------------------ */
export type Service = {
  id: string;
  /** Intitulé porteur, utilisé en H3. */
  name: string;
  /** Page de service correspondante : maillage interne réel. */
  href: string;
  /** Livrable concret, pas une promesse. */
  deliverable: string;
  text: string;
};

export const SERVICES: Service[] = [
  {
    id: "audit",
    name: "Audit SEO",
    href: "/audit-seo",
    deliverable: "Feuille de route priorisée avec URL, correction et recette",
    text: "Inventaire des URL, statuts HTTP, directives robots, canonicals, profondeur de clic et duplications, croisés avec les données Search Console et les conversions. Les blocages d’indexation passent avant les ajustements de présentation.",
  },
  {
    id: "technique",
    name: "SEO technique et Core Web Vitals",
    href: "/seo-technique",
    deliverable: "Tickets de correction et critères de validation",
    text: "Exploration, rendu JavaScript, sitemaps, redirections et performances mesurées sur données de terrain. Une page que le moteur ne peut pas charger ou comprendre ne sera pas classée, quelle que soit la qualité du texte.",
  },
  {
    id: "local",
    name: "Référencement local et Google Business Profile",
    href: "/seo-local",
    deliverable: "Fiche d’établissement conforme et pages locales utiles",
    text: "Catégories, horaires, services réellement proposés, cohérence des coordonnées entre le site, la fiche et les annuaires. C’est ce qui détermine la présence dans les résultats cartographiques, soumis à des signaux distincts des résultats classiques.",
  },
  {
    id: "contenu",
    name: "Stratégie de contenu et intentions de recherche",
    href: "/strategie-contenu-seo",
    deliverable: "Cartographie des intentions et briefs rédactionnels",
    text: "Regroupement des requêtes qui appellent la même réponse, attribution d’une page de référence à chacune, puis briefs précisant le lecteur, la question principale et les preuves attendues. C’est le travail qui évite que vos propres pages se concurrencent.",
  },
  {
    id: "netlinking",
    name: "Netlinking et autorité",
    href: "/netlinking",
    deliverable: "Analyse du profil de liens et plan d’acquisition",
    text: "Domaines référents, répartition des ancres et pages ciblées. Dix liens issus de pages réellement consultées pèsent davantage que des centaines de liens d’annuaires, et les liens sponsorisés doivent être signalés.",
  },
  {
    id: "geo",
    name: "Visibilité IA et moteurs de réponse",
    href: "/geo",
    deliverable: "Panel de requêtes suivi à protocole constant",
    text: "Structuration des contenus pour qu’ils soient extractibles par ChatGPT, Perplexity et les AI Overviews : réponse autonome en tête, sources, auteur identifiable, données structurées. Aucune optimisation ne garantit une citation.",
  },
  {
    id: "data",
    name: "Data web, GA4 et tableaux de bord",
    href: "/data-web",
    deliverable: "Plan de marquage et reporting commenté",
    text: "Définition des événements qui comptent, recette des parcours de succès et d’échec, puis tableau de bord reliant impressions, clics et demandes qualifiées. Une conversion doit correspondre à un succès réel, pas à un clic sur « Envoyer ».",
  },
];

export type CitySales = {
  /** Questions posées par les prospects de ce marché. Affichées et balisées. */
  faq: readonly (readonly [string, string])[];
  /** Communes et secteurs réellement couverts. */
  zones: string[];
  /** Ce que révèle la page de résultats locale. */
  serpNote: string;
  /** Situations concrètes rencontrées sur ce marché. */
  cases: { title: string; text: string }[];
  /** Prestations à traiter en premier sur ce marché, et pourquoi. */
  priorities: { id: string; why: string }[];
};

export const citySales: Record<string, CitySales> = {
  marseille: {
    zones: [
      "Marseille 1er au 16e",
      "Aix-en-Provence",
      "Aubagne",
      "Vitrolles",
      "Marignane",
      "La Ciotat",
      "Cassis",
      "Istres",
    ],
    serpNote:
      "Sur les requêtes marseillaises, la page de résultats mélange des agences nationales qui ciblent toutes les grandes villes et des prestataires réellement implantés. Le pack local occupe une place importante, ce qui donne un poids inhabituel à la fiche d’établissement : sur certaines requêtes, trois résultats cartographiques passent avant le premier lien organique.",
    cases: [
      {
        title: "Une activité saisonnière qui vit six mois par an",
        text: "Hôtellerie, restauration, loisirs nautiques : la demande marseillaise se concentre sur avril-septembre. Produire du contenu en juin pour un pic en juillet arrive trop tard, l’indexation et la montée en position demandant plusieurs semaines. Le calendrier éditorial se construit à rebours de la saison, pas pendant.",
      },
      {
        title: "Une zone d’intervention plus large que la ville",
        text: "Beaucoup d’entreprises marseillaises interviennent jusqu’à Aix, Aubagne ou l’étang de Berre, mais ne le disent nulle part. Les prospects de ces communes ne les trouvent pas et partent chez un concurrent plus proche. Décrire la zone réellement desservie, commune par commune, règle souvent le problème sans créer une seule page supplémentaire.",
      },
    ],
    priorities: [
      {
        id: "local",
        why: "Le pack local occupe une place inhabituelle sur les requêtes marseillaises : la fiche d’établissement se traite avant toute production de contenu.",
      },
      {
        id: "contenu",
        why: "La saisonnalité impose de publier plusieurs mois avant le pic, donc de cadrer le calendrier éditorial dès le départ.",
      },
      {
        id: "audit",
        why: "La zone desservie réelle — métropole, Aix, étang de Berre — est presque toujours sous-déclarée et se repère au diagnostic.",
      },
    ],
    faq: [
      [
        "Combien coûte une prestation SEO à Marseille ?",
        "Le prix dépend du périmètre, pas de la ville. À titre de repère marché, le tarif journalier moyen d’un consultant SEO en France tourne autour de 570 € en 2025. Un audit complet se situe généralement entre 1 500 € et 4 000 € selon le nombre de gabarits, et un accompagnement mensuel entre 900 € et 2 500 € pour une PME. Un devis sérieux demande votre URL et vos objectifs avant d’annoncer un chiffre.",
      ],
      [
        "Faut-il une adresse à Marseille pour apparaître dans le pack local ?",
        "Pour les résultats cartographiques, oui : ils reposent sur un établissement vérifiable. Une zone de service peut être déclarée sans adresse affichée, mais déclarer une adresse fictive expose à la suspension de la fiche. Pour les résultats organiques classiques, aucune adresse locale n’est nécessaire.",
      ],
      [
        "Mon activité couvre toute la métropole Aix-Marseille, comment le traiter ?",
        "En décrivant le périmètre réel sur une page unique, plutôt qu’en créant une page par commune. Une page par ville ne se justifie que si elle apporte des informations distinctes : délais d’intervention, contraintes, références locales. Sans cela, elles se concurrencent entre elles et diluent l’autorité.",
      ],
      [
        "En combien de temps voit-on des résultats sur le marché marseillais ?",
        "Les corrections techniques peuvent produire un effet en quelques semaines. Sur des requêtes commerciales disputées comme « plombier Marseille » ou « avocat Marseille », il faut compter six à douze mois. La saisonnalité locale compte aussi : lancer un chantier SEO en mars pour une activité estivale laisse peu de marge.",
      ],
    ],
  },

  paris: {
    zones: [
      "Paris 1er au 20e",
      "La Défense",
      "Boulogne-Billancourt",
      "Levallois-Perret",
      "Issy-les-Moulineaux",
      "Montreuil",
      "Saint-Denis",
    ],
    serpNote:
      "La page de résultats parisienne est la plus disputée de France sur les requêtes de prestation. Les premières positions sont occupées par des structures qui investissent lourdement en contenu et en liens depuis des années. En revanche, dès qu’on descend vers une requête spécialisée — secteur, type de client, problème précis — la concurrence s’effondre et le coût d’acquisition d’une position devient raisonnable.",
    cases: [
      {
        title: "Un éditeur SaaS qui vend partout mais se référence nulle part",
        text: "Le site présente le produit, pas les problèmes qu’il résout. Les acheteurs cherchent « comment faire X », pas « logiciel de X ». Entre les deux, il manque toute la couche de contenu qui capte la recherche amont — celle qui précède de plusieurs semaines la demande de démonstration.",
      },
      {
        title: "Un cabinet qui vise une requête trop large",
        text: "Se positionner sur « avocat Paris » demande un budget que la plupart des cabinets n’ont pas. Le même effort porté sur un croisement précis — spécialité, type de dossier, profil de client — produit généralement plus de contacts qualifiés, parce que l’intention y est beaucoup plus claire.",
      },
    ],
    priorities: [
      {
        id: "contenu",
        why: "Sur un marché saturé, la différence vient d’un positionnement étroit : secteur, segment, problème précis, plutôt qu’une requête générique inatteignable.",
      },
      {
        id: "netlinking",
        why: "Les positions parisiennes se tiennent par l’autorité ; sans profil de liens crédible, le meilleur contenu plafonne.",
      },
      {
        id: "data",
        why: "Les cycles B2B longs rendent la mesure au dernier clic trompeuse et conduisent à couper les contenus qui amorcent la demande.",
      },
    ],
    faq: [
      [
        "Le SEO coûte-t-il plus cher à Paris ?",
        "La prestation, non : un audit ou un accompagnement se chiffre sur le périmètre, pas sur le code postal. Ce qui change, c’est l’effort nécessaire pour émerger. Se positionner sur une requête générique parisienne demande plusieurs fois le volume de contenu et de liens qu’exigerait la même requête dans une ville moyenne — l’écart se mesure plutôt en durée d’accompagnement qu’en tarif journalier.",
      ],
      [
        "Faut-il créer une page par arrondissement ?",
        "Rarement. Vingt pages qui ne diffèrent que par un numéro d’arrondissement n’apportent aucune information nouvelle et se concurrencent entre elles. L’exception existe pour les activités où le déplacement compte réellement — dépannage, services à domicile — à condition que chaque page décrive des conditions d’intervention distinctes.",
      ],
      [
        "Nous ciblons des clients B2B dans toute la France, une page Paris sert-elle ?",
        "Elle sert à la crédibilité et au recrutement, rarement au chiffre. Sur un marché B2B national, l’essentiel des contacts vient de requêtes sectorielles sans mention de ville. La page locale reste utile comme preuve d’implantation, mais elle ne doit pas absorber le budget éditorial.",
      ],
      [
        "Travaillez-vous en présentiel à Paris ?",
        "Les diagnostics, restitutions et suivis se font à distance, ce qui convient à la quasi-totalité des missions. Un atelier de cadrage sur place reste envisageable en début de mission quand plusieurs équipes doivent être alignées.",
      ],
    ],
  },

  lyon: {
    zones: [
      "Lyon 1er au 9e",
      "Villeurbanne",
      "Part-Dieu",
      "Vaise",
      "Oullins",
      "Bron",
      "Saint-Priest",
      "Vénissieux",
    ],
    serpNote:
      "Lyon présente un profil inhabituel : beaucoup de requêtes y sont moins disputées que leur équivalent parisien, alors que le tissu économique est comparable sur plusieurs secteurs. Les entreprises industrielles et de services B2B y sont souvent sous-représentées dans les résultats, parce qu’elles communiquent peu en ligne.",
    cases: [
      {
        title: "Un industriel dont les clients cherchent une pièce, pas une entreprise",
        text: "La recherche ne porte pas sur le nom du fabricant mais sur une référence, une norme ou une contrainte technique. Le site présente l’usine et les certifications, pas le catalogue dans un format exploitable par un moteur. Rendre les références accessibles et descriptibles ouvre une demande qui existait déjà.",
      },
      {
        title: "Un prestataire de santé contraint par la réglementation",
        text: "Les activités de santé relèvent de critères d’évaluation renforcés : auteur identifiable, sources, informations à jour. C’est exigeant, mais cela écarte aussi une partie de la concurrence incapable de tenir ce niveau de preuve.",
      },
    ],
    priorities: [
      {
        id: "contenu",
        why: "Le B2B industriel lyonnais est sous-représenté dans les résultats faute de contenu : c’est là que le gain est le plus rapide.",
      },
      {
        id: "technique",
        why: "Les catalogues et références produits sont souvent inaccessibles aux moteurs, ce qui bloque une demande déjà existante.",
      },
      {
        id: "audit",
        why: "Le diagnostic permet d’arbitrer entre requêtes locales et requêtes sectorielles nationales avant d’engager la production.",
      },
    ],
    faq: [
      [
        "Le marché lyonnais est-il moins concurrentiel que Paris ?",
        "Sur beaucoup de requêtes de prestation, oui : l’écart d’effort nécessaire est souvent d’un facteur trois à cinq. Cela reste très variable selon les secteurs — l’e-commerce et la santé y sont autant disputés qu’ailleurs, alors que le B2B industriel reste largement sous-exploité.",
      ],
      [
        "Nous sommes à Villeurbanne, faut-il viser « Lyon » ou notre commune ?",
        "Les deux, mais pas de la même manière. La requête « Lyon » apporte le volume, la commune apporte la proximité et convertit mieux dans le pack local. La fiche d’établissement porte l’adresse réelle ; le site décrit la zone desservie, agglomération comprise.",
      ],
      [
        "Combien coûte un audit SEO à Lyon ?",
        "Entre 1 500 € et 4 000 € pour la plupart des sites de PME, selon le nombre de gabarits, le volume d’URL et les données disponibles. Un site e-commerce à fort catalogue ou un site multilingue sort de cette fourchette. Le devis précise le périmètre analysé avant d’annoncer un montant.",
      ],
      [
        "Accompagnez-vous les entreprises industrielles ?",
        "Oui, et c’est un terrain où le SEO est souvent mal exploité. La difficulté n’est pas technique mais éditoriale : traduire une expertise métier en contenus que les acheteurs cherchent réellement, sans tomber dans la plaquette commerciale.",
      ],
    ],
  },

  bordeaux: {
    zones: [
      "Bordeaux centre",
      "Mérignac",
      "Pessac",
      "Talence",
      "Bègles",
      "Le Bouscat",
      "Libourne",
      "Arcachon",
    ],
    serpNote:
      "Les requêtes bordelaises sont fortement marquées par le tourisme et le vin, deux secteurs où la concurrence éditoriale est forte et internationale. Hors de ces verticales, le niveau de concurrence redescend nettement et laisse de la place à des sites correctement structurés.",
    cases: [
      {
        title: "Un domaine viticole qui vend en direct",
        text: "La recherche vient de plusieurs pays et dans plusieurs langues, souvent sur des termes d’appellation plutôt que de marque. Sans versions linguistiques correctement déclarées et sans contenu propre à chaque marché, le site capte le trafic de notoriété mais passe à côté de la recherche de découverte.",
      },
      {
        title: "Une activité touristique dépendante des plateformes",
        text: "Le trafic arrive par des intermédiaires qui prélèvent une commission et possèdent la relation client. Construire une visibilité organique propre demande du temps, mais change la structure de marge — à condition d’accepter que le résultat se mesure sur plusieurs saisons.",
      },
    ],
    priorities: [
      {
        id: "contenu",
        why: "Les secteurs vin et tourisme exigent des contenus par marché linguistique, rédigés et non traduits.",
      },
      {
        id: "technique",
        why: "Les versions linguistiques mal déclarées créent de la duplication entre marchés et annulent l’effort éditorial.",
      },
      {
        id: "data",
        why: "La saisonnalité rend toute comparaison mois à mois trompeuse : la mesure doit être annuelle et annotée.",
      },
    ],
    faq: [
      [
        "Travaillez-vous avec les domaines viticoles et le secteur du vin ?",
        "Oui. La particularité du secteur est la recherche multilingue et la prédominance des termes d’appellation sur les noms de marque. Cela impose un travail de versions linguistiques rédigées plutôt que traduites, et une mesure séparée par marché.",
      ],
      [
        "Quel budget prévoir pour un accompagnement à Bordeaux ?",
        "Entre 900 € et 2 500 € par mois pour une PME, selon le volume de production éditoriale et le niveau d’exécution attendu. Un projet ponctuel — audit, refonte, plan de mesure — se chiffre séparément, généralement entre 2 000 € et 8 000 €.",
      ],
      [
        "Notre activité est très saisonnière, est-ce un problème ?",
        "Non, mais cela impose un calendrier. Les contenus doivent être publiés et indexés plusieurs mois avant le pic de demande. Le suivi compare les saisons entre elles plutôt que les mois consécutifs, sans quoi toute baisse hors saison est interprétée à tort comme une contre-performance.",
      ],
      [
        "Couvrez-vous le bassin d’Arcachon et le Libournais ?",
        "Oui, l’accompagnement se fait à distance et la zone traitée dépend de votre clientèle réelle, pas de notre implantation. Pour une activité dont les clients se déplacent peu, la zone pertinente est souvent plus restreinte que celle que l’entreprise imagine.",
      ],
    ],
  },

  lille: {
    zones: [
      "Lille",
      "Roubaix",
      "Tourcoing",
      "Villeneuve-d’Ascq",
      "Marcq-en-Barœul",
      "Lambersart",
      "Armentières",
      "Douai",
    ],
    serpNote:
      "Le marché lillois se distingue par la densité d’enseignes multi-sites et par la proximité belge. Une partie de la demande vient de Belgique francophone, où les résultats affichés diffèrent de ceux servis en France pour une même requête.",
    cases: [
      {
        title: "Un réseau de points de vente aux fiches incohérentes",
        text: "Horaires divergents entre le site, la fiche d’établissement et les annuaires, établissements fermés encore référencés, catégories mal choisies. Chaque incohérence affaiblit le signal local de tout le réseau, pas seulement du point concerné. Le nettoyage précède toute production de contenu.",
      },
      {
        title: "Une demande belge invisible dans les rapports",
        text: "Les visiteurs belges sont comptés avec le reste du trafic, alors que leurs requêtes, leurs attentes de livraison et leurs conditions tarifaires diffèrent. Isoler ce segment révèle souvent un potentiel traité jusque-là par défaut.",
      },
    ],
    priorities: [
      {
        id: "local",
        why: "Un réseau multi-sites se joue sur la cohérence des fiches : chaque incohérence affaiblit le signal de tout le réseau.",
      },
      {
        id: "technique",
        why: "Les gabarits de pages locales génèrent de la duplication à grande échelle s’ils ne sont pas encadrés par des règles d’unicité.",
      },
      {
        id: "data",
        why: "La demande belge est comptée avec le reste du trafic et reste invisible tant qu’elle n’est pas isolée.",
      },
    ],
    faq: [
      [
        "Comment gérer le référencement de plusieurs points de vente ?",
        "Avec des règles explicites : un gabarit de page locale, des informations réellement distinctes par établissement, une gouvernance des fiches et des contrôles contre la duplication. Le piège classique est de générer des centaines de pages identiques, qui se concurrencent et finissent désindexées.",
      ],
      [
        "Nous vendons aussi en Belgique, faut-il un site séparé ?",
        "Rarement. Une section dédiée avec des déclarations hreflang correctes suffit dans la plupart des cas, à condition que le contenu diffère réellement — livraison, tarifs, mentions légales. Un simple duplicata du site français n’apporte rien et crée de la concurrence interne.",
      ],
      [
        "Combien coûte un accompagnement multi-sites ?",
        "Au-delà d’une dizaine d’établissements, le travail porte plus sur le système que sur les pages : modèles, règles, outils de contrôle. Le budget se situe généralement entre 1 500 € et 4 000 € par mois, avec une phase initiale de mise en ordre souvent plus lourde que le suivi.",
      ],
      [
        "Combien de temps pour corriger un réseau de fiches incohérentes ?",
        "L’inventaire et les corrections prennent quelques semaines. La prise en compte par les moteurs est plus lente et irrégulière selon les établissements. C’est peu spectaculaire, mais c’est généralement ce qui produit le premier gain mesurable sur un réseau.",
      ],
    ],
  },

  toulouse: {
    zones: [
      "Toulouse",
      "Blagnac",
      "Colomiers",
      "Balma",
      "Tournefeuille",
      "Labège",
      "Muret",
      "Ramonville",
    ],
    serpNote:
      "Toulouse concentre un tissu aéronautique et spatial dont les acheteurs sont des ingénieurs. Leurs recherches portent sur des normes, des procédés et des contraintes techniques, pas sur des arguments commerciaux. Les sites qui s’adressent à eux en langage marketing sont absents de ces requêtes.",
    cases: [
      {
        title: "Un sous-traitant dont l’expertise n’est écrite nulle part",
        text: "Le savoir-faire existe chez les ingénieurs, pas sur le site, qui se limite à une présentation d’entreprise et à une liste de certifications. Les donneurs d’ordre qui cherchent un procédé précis ne trouvent rien. Documenter les procédés, leurs limites et leurs cas d’usage ouvre une demande qualifiée sans démarchage.",
      },
      {
        title: "Un cycle d’achat long et à plusieurs intervenants",
        text: "Entre la première recherche et la commande, plusieurs mois et plusieurs personnes interviennent — technique, achats, qualité. Mesurer la seule dernière source de visite attribue tout le mérite au dernier clic et conduit à couper les contenus qui ont réellement amorcé le cycle.",
      },
    ],
    priorities: [
      {
        id: "contenu",
        why: "Les acheteurs sont des ingénieurs : le contenu qui fonctionne ressemble à de la documentation technique, pas à une plaquette.",
      },
      {
        id: "data",
        why: "Les cycles d’achat de plusieurs mois et à plusieurs intervenants rendent l’attribution au dernier clic inexploitable.",
      },
      {
        id: "geo",
        why: "Les questions techniques précises sont massivement posées aux assistants IA, qui citent les sources les mieux documentées.",
      },
    ],
    faq: [
      [
        "Le SEO fonctionne-t-il pour un marché industriel très spécialisé ?",
        "Oui, et souvent mieux qu’en B2C, parce que la concurrence éditoriale y est faible. Les volumes de recherche sont petits mais l’intention est extrêmement précise : quelques dizaines de visites mensuelles sur une requête de procédé peuvent valoir davantage que des milliers de visites génériques.",
      ],
      [
        "Nos acheteurs sont des ingénieurs, le contenu marketing est-il adapté ?",
        "Non, et c’est l’erreur la plus fréquente sur ce marché. Un ingénieur cherche des caractéristiques, des tolérances, des normes et des limites d’application. Le contenu qui fonctionne ressemble à de la documentation technique, pas à une plaquette.",
      ],
      [
        "Combien coûte un accompagnement SEO à Toulouse ?",
        "Pour un industriel ou un éditeur B2B, entre 1 200 € et 3 000 € par mois selon le volume de production. La part de rédaction technique est le poste principal, car elle exige des échanges réguliers avec vos équipes métier.",
      ],
      [
        "Comment mesurer le retour sur un cycle d’achat de plusieurs mois ?",
        "En suivant les demandes qualifiées plutôt que les ventes immédiates, et en conservant les chemins complets plutôt que la dernière source. L’attribution reste imparfaite : on privilégie des comparaisons cohérentes dans le temps à une prétention de causalité.",
      ],
    ],
  },

  nice: {
    zones: [
      "Nice",
      "Cannes",
      "Antibes",
      "Saint-Laurent-du-Var",
      "Cagnes-sur-Mer",
      "Menton",
      "Monaco",
      "Sophia Antipolis",
    ],
    serpNote:
      "La Côte d’Azur se caractérise par une demande internationale et une forte saisonnalité. Une part notable des recherches se fait en anglais, en italien ou en russe, souvent sur des intentions à forte valeur : immobilier, services haut de gamme, événementiel.",
    cases: [
      {
        title: "Une clientèle étrangère qui ne trouve pas le site",
        text: "Le site existe en français uniquement, alors qu’une part de la demande se formule dans une autre langue. Traduire mot à mot ne suffit pas : les termes immobiliers, les attentes de preuve et les références culturelles diffèrent selon le marché visé.",
      },
      {
        title: "Six mois de pic, six mois de creux",
        text: "La comparaison de novembre à août fait conclure à un effondrement là où il n’y a qu’une saison. Les rapports doivent comparer des périodes équivalentes d’une année sur l’autre, faute de quoi chaque bilan de fin d’automne déclenche de mauvaises décisions.",
      },
    ],
    priorities: [
      {
        id: "technique",
        why: "Le multilingue est la contrainte structurante : hreflang, URL distinctes et contenus propres à chaque marché.",
      },
      {
        id: "local",
        why: "Sur les services haut de gamme, la présence cartographique et les avis pèsent lourd dans la décision.",
      },
      {
        id: "data",
        why: "Sans comparaison d’une année sur l’autre, chaque bilan d’automne conclut à tort à un effondrement.",
      },
    ],
    faq: [
      [
        "Faut-il un site multilingue sur la Côte d’Azur ?",
        "Cela dépend de la part réelle de clientèle étrangère, mesurable dans vos données actuelles. Quand elle dépasse quelques dizaines de pourcents, oui — avec des contenus rédigés par marché et des déclarations hreflang correctes, pas une traduction automatique du site français.",
      ],
      [
        "Quel budget pour un accompagnement à Nice ?",
        "Entre 900 € et 2 500 € par mois pour une activité locale, davantage si plusieurs langues sont à traiter : chaque version linguistique supplémentaire représente un marché distinct à documenter et à mesurer, pas une simple duplication.",
      ],
      [
        "Comment gérer la saisonnalité dans le suivi ?",
        "En comparant les mêmes périodes d’une année sur l’autre et en annotant les événements marquants. Les contenus saisonniers se publient plusieurs mois avant le pic : le délai d’indexation et de montée en position rend toute publication tardive inutile pour la saison en cours.",
      ],
      [
        "Intervenez-vous à Cannes, Antibes et Monaco ?",
        "Oui, l’accompagnement se fait à distance. Pour Monaco, les particularités à traiter sont le domaine et le ciblage géographique, qui doivent correspondre au marché réellement adressé plutôt qu’à la localisation du siège.",
      ],
    ],
  },

  montpellier: {
    zones: [
      "Montpellier",
      "Castelnau-le-Lez",
      "Lattes",
      "Pérols",
      "Juvignac",
      "Saint-Jean-de-Védas",
      "Sète",
      "Nîmes",
    ],
    serpNote:
      "Montpellier combine un écosystème de startups, un pôle santé important et une population étudiante nombreuse. Les requêtes y sont moins disputées que dans les métropoles de rang supérieur, ce qui rend une position atteignable plus rapidement, mais la clientèle locale est aussi plus limitée en volume.",
    cases: [
      {
        title: "Une jeune entreprise sans antériorité de domaine",
        text: "Un domaine récent met du temps à être évalué, quel que soit le contenu publié. Vouloir attaquer directement les requêtes principales épuise le budget sans résultat. Commencer par des sujets précis et peu disputés construit une base que les requêtes concurrentielles exploiteront ensuite.",
      },
      {
        title: "Un acteur santé soumis à des critères renforcés",
        text: "Les sujets touchant à la santé relèvent de critères d’évaluation plus exigeants : auteur identifiable et qualifié, sources vérifiables, informations datées. C’est contraignant mais discriminant — la plupart des concurrents ne tiennent pas ce niveau.",
      },
    ],
    priorities: [
      {
        id: "contenu",
        why: "Un domaine récent ne peut pas attaquer les requêtes principales : il faut construire sur des sujets précis et peu disputés.",
      },
      {
        id: "audit",
        why: "Le diagnostic évite de dépenser un budget limité sur des requêtes hors d’atteinte à ce stade.",
      },
      {
        id: "geo",
        why: "Les sujets santé exigent auteur qualifié, sources et dates — exactement ce que les moteurs de réponse privilégient pour citer.",
      },
    ],
    faq: [
      [
        "Notre site est récent, en combien de temps peut-on se positionner ?",
        "Sur des sujets précis et peu disputés, quelques mois. Sur les requêtes principales d’un secteur, il faut compter un an ou plus, le temps que le domaine acquière une antériorité et des citations. Tout prestataire qui promet mieux sur un domaine neuf doit être écarté.",
      ],
      [
        "Quel budget pour une startup montpelliéraine ?",
        "En dessous de 400 à 500 € par mois, un accompagnement récurrent ne permet pas de produire assez pour peser. Une alternative souvent plus rationnelle à ce stade est un audit ponctuel entre 1 500 € et 3 000 €, suivi d’une exécution interne sur la base de la feuille de route remise.",
      ],
      [
        "Travaillez-vous sur les sujets de santé ?",
        "Oui, avec les contraintes que cela impose : auteur qualifié et identifiable, sources citées, informations datées et mises à jour. Sans ces éléments, un contenu santé ne se positionne pas durablement, quelle que soit sa qualité rédactionnelle.",
      ],
      [
        "La clientèle étudiante est-elle un marché SEO pertinent ?",
        "Elle génère du volume mais convertit peu sur la plupart des activités. Elle a surtout un intérêt indirect : ce public partage et cite, ce qui construit de la notoriété et des liens. À traiter comme un levier d’autorité plutôt que comme une source de chiffre direct.",
      ],
    ],
  },

  nantes: {
    zones: [
      "Nantes",
      "Saint-Herblain",
      "Rezé",
      "Carquefou",
      "Orvault",
      "Vertou",
      "Saint-Nazaire",
      "La Baule",
    ],
    serpNote:
      "Les requêtes locales nantaises sont modérément disputées, mais elles ne représentent qu’une fraction du marché réel des entreprises implantées ici. L’essentiel de leur demande se joue sur des requêtes sectorielles nationales, où la concurrence est tout autre.",
    cases: [
      {
        title: "Une entreprise nantaise qui vend dans toute la France",
        text: "Le site est optimisé pour « Nantes » alors que les clients viennent de partout. Le volume local atteignable est faible et les contacts qu’il génère ne correspondent pas à l’offre. L’arbitrage consiste à garder une page locale sobre pour la crédibilité, et à porter l’effort sur les requêtes sectorielles.",
      },
      {
        title: "Un acheteur tech qui compare longuement avant de contacter",
        text: "Entre la première recherche et la prise de contact, l’acheteur a lu des comparatifs, des retours d’expérience et de la documentation. Un site qui ne parle que de son produit n’existe pas pendant cette phase, qui est pourtant celle où le choix se forme.",
      },
    ],
    priorities: [
      {
        id: "contenu",
        why: "L’essentiel du chiffre vient de requêtes sectorielles nationales, pas du volume local : c’est là que la production doit porter.",
      },
      {
        id: "geo",
        why: "Les acheteurs tech comparent via les assistants IA avant tout contact ; être cité à ce stade précède la visite.",
      },
      {
        id: "data",
        why: "Séparer les contacts d’origine locale des contacts nationaux évite d’arbitrer à l’aveugle entre les deux.",
      },
    ],
    faq: [
      [
        "Faut-il viser « Nantes » ou des requêtes nationales ?",
        "Les deux, mais sans confondre leurs rôles. La page locale sert la crédibilité et le recrutement ; les requêtes sectorielles nationales portent le chiffre. Beaucoup d’entreprises nantaises investissent sur le local par réflexe et passent à côté de leur marché réel.",
      ],
      [
        "Quel budget pour un éditeur SaaS nantais ?",
        "Entre 1 500 € et 4 000 € par mois quand la stratégie repose sur la production de contenu, le poste principal étant la rédaction. Un audit initial entre 2 000 € et 5 000 € permet de cadrer les priorités avant de s’engager sur une production régulière.",
      ],
      [
        "Comment se démarquer face à des concurrents parisiens mieux dotés ?",
        "En ne les affrontant pas sur les requêtes qu’ils dominent. Un positionnement plus étroit — un segment, un cas d’usage, un problème précis — permet d’occuper des positions qu’ils négligent parce que le volume y est trop faible pour eux, mais suffisant pour vous.",
      ],
      [
        "Couvrez-vous Saint-Nazaire et le littoral ?",
        "Oui, l’accompagnement se fait à distance. Pour les activités littorales, la saisonnalité s’ajoute : les contenus doivent être en place plusieurs mois avant la période de demande.",
      ],
    ],
  },

  strasbourg: {
    zones: [
      "Strasbourg",
      "Schiltigheim",
      "Illkirch-Graffenstaden",
      "Haguenau",
      "Obernai",
      "Sélestat",
      "Kehl (Allemagne)",
      "Offenbourg (Allemagne)",
    ],
    serpNote:
      "Strasbourg est le seul de ces marchés où une part réelle de la demande s’exprime en allemand. Les résultats servis côté allemand diffèrent de ceux servis côté français pour un besoin équivalent, et les termes métier ne se recouvrent pas : une page traduite mot à mot capte rarement la recherche allemande.",
    cases: [
      {
        title: "Un site français traduit mot à mot",
        text: "La traduction est correcte mais ne correspond à aucune requête réellement tapée côté allemand, où le vocabulaire métier et les attentes de preuve diffèrent. La page existe, elle est indexée, et elle ne reçoit presque rien. Reprendre la recherche de mots-clés dans la langue cible est la seule issue.",
      },
      {
        title: "Des conversions impossibles à attribuer par marché",
        text: "Les demandes françaises et allemandes sont comptées ensemble, ce qui empêche de savoir laquelle finance l’activité. Séparer la mesure par langue révèle souvent que l’un des deux marchés porte l’essentiel du résultat alors que l’effort était réparti à parts égales.",
      },
    ],
    priorities: [
      {
        id: "technique",
        why: "Les déclarations hreflang réciproques conditionnent toute stratégie bilingue : mal posées, elles créent de la duplication.",
      },
      {
        id: "contenu",
        why: "La version allemande se construit sur sa propre recherche de mots-clés ; une traduction littérale ne capte rien.",
      },
      {
        id: "data",
        why: "Mesurer les conversions par langue est la seule façon de savoir lequel des deux marchés finance réellement l’activité.",
      },
    ],
    faq: [
      [
        "Faut-il une version allemande du site ?",
        "Si une part de votre clientèle vient d’outre-Rhin, oui — mais rédigée, pas traduite. Les termes métier et les attentes de preuve diffèrent, et une traduction littérale ne capte pas les requêtes réellement tapées. La version allemande se construit à partir de sa propre recherche de mots-clés.",
      ],
      [
        "Comment éviter que les versions française et allemande se concurrencent ?",
        "Avec des déclarations hreflang correctes et réciproques, des URL distinctes et des contenus réellement différents. La duplication apparaît quand on traduit sans adapter : les deux pages visent alors la même intention et le moteur doit arbitrer.",
      ],
      [
        "Quel budget pour un accompagnement bilingue ?",
        "Comptez environ une fois et demie à deux fois le budget d’un site monolingue, soit 1 500 € à 3 500 € par mois selon le volume. Chaque langue est un marché distinct : recherche de mots-clés, rédaction et mesure doivent être menées séparément.",
      ],
      [
        "Travaillez-vous avec les institutions européennes et leurs prestataires ?",
        "Oui. La particularité de ces organisations est le multilinguisme et des contraintes d’accessibilité élevées — deux sujets qui recoupent directement le SEO technique, puisqu’un contenu accessible est aussi un contenu que les moteurs lisent correctement.",
      ],
    ],
  },
};

export function getCitySales(slug: string): CitySales | undefined {
  return citySales[slug];
}

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO — Référencement naturel : technique, contenu, liens, local | Consultant SEO",
  description:
    "Guide complet du référencement naturel : SEO on-page, off-page, technique, local, maillage interne, backlinks, GEO. Med Issam Chaoui, consultant SEO Marseille et Paris.",
};

const TOC = [
  { id: "definition", label: "Qu'est-ce que le SEO ?" },
  { id: "onpage", label: "SEO on-page" },
  { id: "technique", label: "SEO technique" },
  { id: "contenu", label: "Stratégie de contenu" },
  { id: "maillage", label: "Maillage interne" },
  { id: "offpage", label: "SEO off-page & backlinks" },
  { id: "local", label: "SEO local" },
  { id: "geo", label: "GEO · Moteurs IA" },
  { id: "mesure", label: "Mesure & pilotage" },
  { id: "methode", label: "Méthode d'accompagnement" },
];

export default function SeoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero page */}
        <section className="section" style={{ paddingBottom: "clamp(48px,6vw,80px)" }}>
          <div className="container">
            <span className="eyebrow kicker" style={{ marginBottom: 20, display: "inline-block" }}>
              Référencement naturel
            </span>
            <h1 className="t-h1" style={{ maxWidth: "20ch", marginBottom: 24 }}>
              Le SEO comme{" "}
              <span className="t-italic">système</span>{" "}
              d&rsquo;acquisition.
            </h1>
            <p className="t-lead" style={{ maxWidth: "56ch", marginBottom: 40 }}>
              Le référencement naturel ne se limite pas à quelques mots-clés dans une page.
              C&rsquo;est une discipline qui articule technique, sémantique, autorité, architecture
              et conversion pour construire une visibilité durable et mesurable.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#contact" className="btn btn--primary">
                Demander un diagnostic SEO
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href="#onpage" className="btn btn--ghost">Lire le guide complet</a>
            </div>
          </div>
        </section>

        {/* Layout : TOC + contenu */}
        <section className="section section--sand" style={{ paddingTop: "clamp(48px,6vw,80px)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "clamp(32px,5vw,80px)", alignItems: "start" }}>

              {/* TOC sticky */}
              <aside style={{ position: "sticky", top: 90 }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 12 }}>
                  Sommaire
                </p>
                <nav className="seo-toc">
                  {TOC.map((t) => (
                    <a key={t.id} href={`#${t.id}`}>{t.label}</a>
                  ))}
                </nav>
              </aside>

              {/* Contenu principal */}
              <article className="prose">

                {/* 1. Définition */}
                <h2 id="definition">Qu&rsquo;est-ce que le SEO ?</h2>
                <p>
                  Le SEO (<em>Search Engine Optimization</em>) désigne l&rsquo;ensemble des pratiques
                  visant à améliorer la visibilité d&rsquo;un site web dans les résultats organiques
                  des moteurs de recherche — principalement Google. Contrairement aux liens sponsorisés
                  (SEA), le trafic organique ne fait l&rsquo;objet d&rsquo;aucun coût par clic : il
                  est le fruit d&rsquo;un travail structuré sur la durée.
                </p>
                <p>
                  Un bon référencement naturel n&rsquo;est pas un raccourci. C&rsquo;est la conséquence
                  d&rsquo;un site techniquement solide, de contenus qui répondent précisément aux
                  intentions de recherche, d&rsquo;une autorité construite par des liens entrants
                  qualifiés, et d&rsquo;une architecture qui facilite la compréhension du site par
                  Google.
                </p>
                <p>
                  En 2026, le SEO couvre trois dimensions complémentaires&nbsp;:
                </p>
                <ul>
                  <li><strong>SEO on-page</strong> — optimisation du contenu et des balises HTML de chaque page.</li>
                  <li><strong>SEO technique</strong> — performance, indexation, structure, données structurées.</li>
                  <li><strong>SEO off-page</strong> — autorité et signaux externes, notamment les backlinks.</li>
                </ul>
                <p>
                  À ces trois piliers s&rsquo;ajoutent des dimensions spécifiques&nbsp;: le{" "}
                  <strong>SEO local</strong> (cibler une zone géographique), la{" "}
                  <strong>stratégie de contenu</strong> (clusters sémantiques, EEAT), le{" "}
                  <strong>maillage interne</strong> (diffusion de l&rsquo;autorité entre pages) et
                  désormais le <strong>GEO</strong> (visibilité dans les moteurs génératifs comme
                  ChatGPT ou Perplexity).
                </p>

                {/* 2. On-page */}
                <h2 id="onpage">SEO on-page</h2>
                <p>
                  Le SEO on-page regroupe toutes les optimisations effectuées directement dans les
                  pages d&rsquo;un site. L&rsquo;objectif est de signaler clairement à Google — et aux
                  utilisateurs — le sujet, la pertinence et la valeur de chaque page.
                </p>

                <h3>Balise title et méta description</h3>
                <p>
                  La balise <code>&lt;title&gt;</code> reste l&rsquo;un des signaux on-page les plus
                  puissants. Elle doit intégrer le mot-clé cible de manière naturelle, rester sous 60
                  caractères et se différencier des autres pages du site. La méta description
                  n&rsquo;est pas un facteur de classement direct, mais elle influence le taux de
                  clic (CTR) dans les SERP.
                </p>

                <h3>Balises Hn et structure de titre</h3>
                <p>
                  Un H1 unique par page, des H2 qui segmentent le contenu en blocs thématiques, des H3
                  pour les sous-détails. La hiérarchie des titres facilite la lecture et signale à
                  Google la structure sémantique du document.
                </p>

                <h3>Intention de recherche</h3>
                <p>
                  Chaque page doit correspondre à une intention précise&nbsp;: informationnelle
                  (comprendre un sujet), navigationnelle (trouver un site), transactionnelle (acheter,
                  prendre contact), ou commerciale (comparer des options). Une page qui ne répond pas
                  à l&rsquo;intention dominante ne se classera pas, même techniquement parfaite.
                </p>

                <h3>Optimisation sémantique</h3>
                <p>
                  Au-delà du mot-clé principal, Google analyse les entités nommées, les
                  cooccurrences lexicales et la richesse sémantique d&rsquo;un contenu. Les outils
                  comme YourTextGuru, Surfer ou 1.fr permettent d&rsquo;identifier les termes
                  attendus pour couvrir un sujet de manière complète.
                </p>

                <h3>Contenu dupliqué et canonicalisation</h3>
                <p>
                  Les pages similaires (variantes d&rsquo;URL, pagination, filtres) peuvent créer
                  de la duplication. La balise <code>canonical</code> indique à Google quelle version
                  d&rsquo;une page est la référence. Une mauvaise gestion de la canonicalisation
                  dilue l&rsquo;autorité et peut faire sortir des pages de l&rsquo;index.
                </p>

                <h3>Images, attributs alt et poids des médias</h3>
                <p>
                  Les images doivent être compressées, en format moderne (WebP, AVIF), dimensionnées
                  précisément et accompagnées d&rsquo;un attribut <code>alt</code> descriptif. Un
                  fichier image trop lourd dégrade le score LCP (Largest Contentful Paint), qui est
                  un facteur de ranking direct via les Core Web Vitals.
                </p>

                {/* 3. Technique */}
                <h2 id="technique">SEO technique</h2>
                <p>
                  Le SEO technique concerne tout ce qui conditionne la capacité de Google à explorer,
                  comprendre et indexer un site correctement. Un site techniquement défaillant ne
                  peut pas être bien référencé, quelle que soit la qualité de son contenu.
                </p>

                <h3>Crawl et indexation</h3>
                <p>
                  Le Googlebot explore les sites en suivant des liens. La priorité est de s&rsquo;assurer
                  que les pages importantes sont accessibles, que le budget de crawl n&rsquo;est pas
                  gaspillé sur des pages sans valeur (pages filtrées, paramètres d&rsquo;URL,
                  duplicatas) et que le fichier <code>robots.txt</code> ne bloque pas des ressources
                  critiques.
                </p>
                <p>
                  La Google Search Console est l&rsquo;outil de référence pour identifier les erreurs
                  d&rsquo;indexation, les pages exclues et les problèmes de couverture.
                </p>

                <h3>Core Web Vitals</h3>
                <p>
                  Depuis 2021, Google intègre les Core Web Vitals comme facteur de classement. Les
                  trois métriques clés sont&nbsp;:
                </p>
                <ul>
                  <li><strong>LCP</strong> (Largest Contentful Paint) — temps d&rsquo;affichage du plus grand élément visible. Objectif&nbsp;: sous 2,5 secondes.</li>
                  <li><strong>INP</strong> (Interaction to Next Paint) — réactivité aux interactions. Objectif&nbsp;: sous 200 ms.</li>
                  <li><strong>CLS</strong> (Cumulative Layout Shift) — stabilité visuelle de la page. Objectif&nbsp;: sous 0,1.</li>
                </ul>

                <h3>Données structurées (Schema.org)</h3>
                <p>
                  Les données structurées en JSON-LD permettent à Google de mieux interpréter le
                  contenu d&rsquo;une page&nbsp;: type d&rsquo;entité, FAQ, avis, prix, événements,
                  organisation. Elles peuvent générer des rich snippets dans les SERP et renforcer
                  les signaux d&rsquo;entité pour le GEO.
                </p>

                <h3>Architecture d&rsquo;URL et structure du site</h3>
                <p>
                  Des URL courtes, descriptives et cohérentes facilitent la compréhension par Google
                  et les utilisateurs. Une structure en silos thématiques (pages piliers + pages de
                  support) permet de concentrer l&rsquo;autorité sur les pages stratégiques.
                </p>

                <h3>HTTPS, redirections et erreurs</h3>
                <p>
                  Toutes les pages doivent être servies en HTTPS. Les redirections 301 doivent être
                  propres (pas de chaîne de redirections). Les erreurs 404 sur des pages qui
                  recevaient des backlinks doivent être redirigées vers une alternative pertinente.
                </p>

                <h3>Mobile-first et vitesse</h3>
                <p>
                  Google indexe en priorité la version mobile des sites. Un design responsive, des
                  polices lisibles sur petits écrans et une vitesse de chargement optimisée sur
                  réseau mobile sont indispensables.
                </p>

                {/* 4. Contenu */}
                <h2 id="contenu">Stratégie de contenu SEO</h2>
                <p>
                  Le contenu est le carburant du SEO. Mais publier du contenu ne suffit pas&nbsp;:
                  encore faut-il que chaque page cible une intention précise, appartienne à un cluster
                  cohérent et soit capable de convertir le trafic généré.
                </p>

                <h3>Clusters sémantiques et pages piliers</h3>
                <p>
                  Un cluster sémantique regroupe une page pilier (large, exhaustive, qui cible un
                  thème parent) et des pages de support (plus ciblées, qui traitent des sous-aspects).
                  Le lien entre elles est assuré par le maillage interne. Cette structure indique à
                  Google la profondeur d&rsquo;expertise d&rsquo;un site sur un sujet donné.
                </p>

                <h3>Recherche d&rsquo;intentions (intent mapping)</h3>
                <p>
                  Avant de produire du contenu, il faut cartographier les intentions associées à
                  chaque requête&nbsp;: informationnelle, commerciale, transactionnelle, locale,
                  comparative. Un même mot-clé peut recouvrir plusieurs intentions selon le contexte.
                  La SERP est la meilleure source de vérité pour comprendre ce que Google attend.
                </p>

                <h3>EEAT (Experience, Expertise, Authoritativeness, Trustworthiness)</h3>
                <p>
                  Depuis les Quality Rater Guidelines de Google, l&rsquo;EEAT est un cadre
                  d&rsquo;évaluation de la qualité des contenus. Un contenu EEAT-fort montre une
                  expérience terrain réelle, une expertise reconnaissable, une autorité mesurable
                  (liens, citations) et une fiabilité prouvée (sources, transparence, données).
                </p>

                <h3>Longue traîne et requêtes de niche</h3>
                <p>
                  Les requêtes de longue traîne (3 mots et plus) représentent la majorité des
                  recherches. Elles sont moins concurrentielles, mieux qualifiées et souvent plus
                  proches de la conversion. Une stratégie de contenu efficace cible à la fois les
                  requêtes à fort volume et les requêtes de niche.
                </p>

                <h3>Refresh et consolidation</h3>
                <p>
                  Les contenus existants se dégradent avec le temps. Identifier les pages qui
                  stagnent ou perdent des positions et les mettre à jour (nouvelles données,
                  structure améliorée, liens internes renforcés) est souvent plus efficace que de
                  créer de nouvelles pages.
                </p>

                <h3>Briefs de contenu actionnables</h3>
                <p>
                  Un brief de contenu efficace spécifie&nbsp;: l&rsquo;intention cible, le mot-clé
                  principal et les secondaires, la structure H2/H3 recommandée, les entités à couvrir,
                  les preuves à intégrer, le CTA attendu et les liens internes à inclure.
                </p>

                {/* 5. Maillage */}
                <h2 id="maillage">Maillage interne</h2>
                <p>
                  Le maillage interne est l&rsquo;ensemble des liens qui relient les pages d&rsquo;un
                  même site entre elles. Il joue un rôle fondamental dans la diffusion de
                  l&rsquo;autorité (PageRank interne), la compréhension de l&rsquo;architecture par
                  Google et la fluidité du parcours utilisateur.
                </p>

                <h3>Architecture en silos</h3>
                <p>
                  Un silo SEO regroupe des pages thématiquement proches sous une page mère (hub).
                  Les liens internes circulent principalement au sein du silo (hub → pages filles,
                  pages filles → hub) et de manière contrôlée entre silos. Cette organisation
                  concentre l&rsquo;autorité sur les pages stratégiques.
                </p>

                <h3>Ancres et textes de liens</h3>
                <p>
                  L&rsquo;ancre d&rsquo;un lien interne (le texte cliquable) est un signal sémantique
                  pour Google. Des ancres descriptives et variées renforcent la compréhension du
                  sujet de la page cible. Les ancres génériques ("cliquez ici", "en savoir plus")
                  ne transmettent aucune information sémantique.
                </p>

                <h3>Profondeur de clic</h3>
                <p>
                  Une page qui demande plus de 3 clics depuis la page d&rsquo;accueil est considérée
                  comme secondaire par Google. Les pages business importantes doivent être accessibles
                  rapidement depuis la page principale et le menu de navigation.
                </p>

                <h3>Orphelines et isolées</h3>
                <p>
                  Une page sans aucun lien entrant depuis le reste du site est dite "orpheline".
                  Google ne lui accordera que peu d&rsquo;autorité. Un audit de maillage permet
                  d&rsquo;identifier ces pages et de les intégrer dans le tissu interne du site.
                </p>

                <h3>Liens contextuels</h3>
                <p>
                  Un lien placé dans le corps d&rsquo;un texte, dans un paragraphe pertinent,
                  a plus de poids qu&rsquo;un lien dans un footer ou une liste de navigation. Les
                  liens contextuels transmettent à la fois du PageRank et de la pertinence sémantique.
                </p>

                {/* 6. Off-page / Backlinks */}
                <h2 id="offpage">SEO off-page &amp; backlinks</h2>
                <p>
                  Le SEO off-page désigne les signaux extérieurs au site qui influencent son autorité
                  et sa crédibilité aux yeux de Google. Le principal signal off-page reste le backlink&nbsp;:
                  un lien provenant d&rsquo;un autre site vers le vôtre.
                </p>

                <h3>Qu&rsquo;est-ce qu&rsquo;un backlink de qualité ?</h3>
                <p>
                  Tous les backlinks n&rsquo;ont pas la même valeur. Un bon backlink provient
                  d&rsquo;un site ayant lui-même de l&rsquo;autorité, d&rsquo;une thématique proche,
                  d&rsquo;une page indexée et visitée, avec une ancre descriptive et un lien
                  en <code>dofollow</code>. Un lien depuis un site spammy peut au contraire nuire au
                  positionnement.
                </p>

                <h3>Domain Rating (DR) et Trust Flow</h3>
                <p>
                  Des outils comme Ahrefs (Domain Rating) ou Majestic (Trust Flow / Citation Flow)
                  permettent d&rsquo;évaluer la puissance d&rsquo;un domaine référent. Ces métriques
                  sont des indicateurs utiles mais ne remplacent pas une analyse qualitative du profil
                  de liens.
                </p>

                <h3>Stratégies d&rsquo;acquisition de liens</h3>
                <ul>
                  <li><strong>Contenu remarquable</strong> — des ressources, études, outils ou formats originaux qui génèrent des liens naturellement.</li>
                  <li><strong>Relations presse digitales</strong> — publications dans des médias sectoriels, contributions d&rsquo;experts, interviews.</li>
                  <li><strong>Partenariats</strong> — échanges de liens thématiquement cohérents avec d&rsquo;autres acteurs du secteur.</li>
                  <li><strong>Citations locales</strong> — annuaires professionnels, chambres de commerce, associations locales (particulièrement utile pour le SEO local).</li>
                  <li><strong>Guest blogging</strong> — rédaction d&rsquo;articles sur des sites tiers avec un lien vers une page cible.</li>
                  <li><strong>Récupération de liens brisés</strong> — identifier les pages liées qui ont disparu et proposer une alternative.</li>
                </ul>

                <h3>Profil de liens et signaux négatifs</h3>
                <p>
                  Un profil de liens sain est diversifié en termes de domaines référents, d&rsquo;ancres
                  et de types de pages sources. Un profil artificiel (ancres sur-optimisées, liens
                  depuis des fermes de liens, acquisition massive en peu de temps) est détecté par
                  les algorithmes de Google (Penguin) et peut entraîner une pénalité manuelle ou
                  algorithmique.
                </p>

                <h3>Désaveu de liens</h3>
                <p>
                  L&rsquo;outil de désaveu (<em>disavow</em>) de Google Search Console permet de
                  signaler des liens toxiques et d&rsquo;en neutraliser l&rsquo;effet. Il doit être
                  utilisé avec précaution et seulement en cas de profil de liens véritablement
                  dégradé.
                </p>

                <h3>Mentions sans liens</h3>
                <p>
                  Google est capable de détecter les mentions d&rsquo;une marque ou d&rsquo;un site
                  même sans lien HTML explicite. Ces co-citations sont un signal d&rsquo;autorité
                  complémentaire, particulièrement utile pour renforcer la notoriété d&rsquo;une
                  entité dans le cadre du GEO.
                </p>

                {/* 7. Local */}
                <h2 id="local">SEO local</h2>
                <p>
                  Le SEO local vise à améliorer la visibilité d&rsquo;un site ou d&rsquo;un
                  établissement pour des requêtes géolocalisées&nbsp;: "consultant SEO Marseille",
                  "avocat Paris 8e", "restaurant vieux-port". Il repose sur des signaux spécifiques
                  que le SEO classique ne couvre pas entièrement.
                </p>

                <h3>Google Business Profile (anciennement Google My Business)</h3>
                <p>
                  La fiche Google Business Profile est le signal local le plus direct. Elle doit
                  être complète, vérifiée, régulièrement mise à jour avec des posts et des photos,
                  et correctement catégorisée. Les avis clients (en nombre et en qualité) influencent
                  directement le positionnement dans le "pack local" (les 3 résultats Maps en tête
                  de SERP).
                </p>

                <h3>Cohérence NAP</h3>
                <p>
                  NAP signifie Name, Address, Phone. La cohérence de ces informations sur
                  l&rsquo;ensemble du web (site, fiche Google, annuaires, réseaux sociaux) est un
                  facteur de confiance essentiel pour Google Local. Toute incohérence (adresse
                  différente, numéro de téléphone variable) affaiblit la visibilité locale.
                </p>

                <h3>Pages locales optimisées</h3>
                <p>
                  Une page dédiée à chaque ville ou zone géographique cible est indispensable pour
                  le SEO local. Elle doit intégrer le nom de la ville dans le title, le H1 et le
                  contenu, référencer des signaux locaux (quartiers, zones d&rsquo;activité,
                  landmarks pertinents) et être différenciée d&rsquo;une simple copie de la page
                  nationale avec le nom de la ville remplacé.
                </p>

                <h3>Signaux de proximité et requêtes "near me"</h3>
                <p>
                  Pour les requêtes "near me" ou sans localisation explicite, Google utilise
                  la géolocalisation de l&rsquo;utilisateur. La proximité géographique, la
                  pertinence (adéquation entre la requête et l&rsquo;activité) et la proéminence
                  (autorité, avis, backlinks locaux) sont les trois piliers de l&rsquo;algorithme
                  local de Google.
                </p>

                <h3>Structured data LocalBusiness</h3>
                <p>
                  Le schema <code>LocalBusiness</code> (ou ses sous-types comme{" "}
                  <code>ProfessionalService</code>) permet de fournir à Google des informations
                  structurées sur l&rsquo;établissement&nbsp;: adresse, horaires, zone desservie,
                  services proposés. Il renforce les signaux d&rsquo;entité locale.
                </p>

                <h3>Avis et réputation</h3>
                <p>
                  Les avis Google sont un facteur de classement local direct. Les solliciter
                  activement (sans incitation financière, qui est contraire aux CGU Google),
                  y répondre systématiquement et gérer les avis négatifs avec professionnalisme
                  sont des pratiques qui améliorent à la fois le positionnement et le taux de clic.
                </p>

                {/* 8. GEO */}
                <h2 id="geo">GEO · Moteurs génératifs et IA</h2>
                <p>
                  Le GEO (<em>Generative Engine Optimization</em>) désigne l&rsquo;ensemble des
                  pratiques visant à rendre un contenu visible et citable dans les réponses générées
                  par les moteurs IA&nbsp;: Google AI Overviews, ChatGPT Search, Perplexity,
                  Gemini, Bing Copilot.
                </p>
                <p>
                  Le GEO ne remplace pas le SEO. Il l&rsquo;étend. Un site mal référencé sur Google
                  ne sera pas davantage cité par un moteur IA. En revanche, un site solide en SEO
                  peut renforcer sa présence dans les réponses IA en travaillant spécifiquement
                  la clarté, la structure et la crédibilité de ses contenus.
                </p>

                <h3>Entités nommées et reconnaissance</h3>
                <p>
                  Les moteurs IA fonctionnent par entités&nbsp;: personnes, organisations, lieux,
                  services, concepts. Un site qui mentionne explicitement ses entités (nom, activité,
                  zone géographique, spécialité) et les relie à d&rsquo;autres entités reconnues a
                  plus de chances d&rsquo;être compris et cité.
                </p>

                <h3>Réponses extractibles</h3>
                <p>
                  Les LLM extraient des passages précis pour composer leurs réponses. Un contenu
                  structuré en réponses courtes et autonomes (définitions, listes, FAQs, étapes)
                  est plus facilement extractible qu&rsquo;un texte dense et non structuré.
                </p>

                <h3>Données structurées pour le GEO</h3>
                <p>
                  Les schemas <code>FAQPage</code>, <code>HowTo</code>, <code>Article</code>,
                  <code>Person</code>, <code>Organization</code>, <code>Service</code> et{" "}
                  <code>LocalBusiness</code> aident les moteurs IA à comprendre le type de contenu
                  et les entités impliquées. Ils doivent refléter fidèlement le contenu visible.
                </p>

                <h3>Preuves et crédibilité</h3>
                <p>
                  Un contenu cité par un moteur IA doit être crédible. Cela implique d&rsquo;inclure
                  des données vérifiables, des sources, des exemples concrets, des livrables
                  documentés et des signaux d&rsquo;expertise. Les contenus vagues, sans preuves
                  ni auteur identifiable, sont rarement cités.
                </p>

                <h3>Autorité de marque et notoriété externe</h3>
                <p>
                  Les moteurs IA s&rsquo;appuient en partie sur ce qui est dit d&rsquo;une entité
                  en dehors de son propre site&nbsp;: articles de presse, profils LinkedIn, mentions
                  dans des publications sectorielles, interviews, citations dans d&rsquo;autres contenus.
                  Construire une notoriété externe cohérente renforce la probabilité d&rsquo;être
                  cité dans les réponses IA.
                </p>

                {/* 9. Mesure */}
                <h2 id="mesure">Mesure &amp; pilotage SEO</h2>
                <p>
                  Un travail SEO sans mesure ne permet pas d&rsquo;identifier ce qui fonctionne, ce
                  qui stagne et ce qui mérite d&rsquo;être priorisé. Les indicateurs doivent être
                  choisis en fonction des objectifs business, pas uniquement de métriques de vanité.
                </p>

                <h3>Google Search Console</h3>
                <p>
                  L&rsquo;outil de référence pour le suivi organique. Les rapports de performance
                  (impressions, clics, CTR, positions par requête et par page), la couverture
                  d&rsquo;index, les Core Web Vitals et les données structurées sont disponibles
                  directement. C&rsquo;est la source la plus fiable pour comprendre ce que Google
                  voit du site.
                </p>

                <h3>Google Analytics 4</h3>
                <p>
                  GA4 permet de mesurer le comportement des utilisateurs en provenance du trafic
                  organique&nbsp;: pages de destination, taux d&rsquo;engagement, conversions, sessions
                  par canal. La connexion avec Search Console (via l&rsquo;intégration native)
                  permet de croiser positions et comportement utilisateur.
                </p>

                <h3>Suivi de positions</h3>
                <p>
                  Des outils comme Semrush ou Ahrefs permettent de suivre les positions sur un
                  ensemble de mots-clés cibles, de comparer avec les concurrents et de détecter les
                  variations (gains, pertes, entrées dans le top 10).
                </p>

                <h3>Indicateurs business</h3>
                <p>
                  Au-delà du trafic et des positions, les indicateurs qui comptent pour la prise de
                  décision sont&nbsp;: le nombre de leads générés depuis le canal organique, le coût
                  d&rsquo;acquisition par lead SEO comparé aux autres canaux, le taux de conversion
                  des pages de destination stratégiques et la progression des pages locales.
                </p>

                <h3>Rapport et fréquence</h3>
                <p>
                  Un suivi mensuel est généralement suffisant pour la plupart des missions. Le rapport
                  doit mettre en évidence les évolutions significatives, les causes probables et les
                  prochaines actions prioritaires. Un bon rapport SEO est court, lisible et orienté
                  décision.
                </p>

                {/* 10. Méthode */}
                <h2 id="methode">Méthode d&rsquo;accompagnement SEO</h2>
                <p>
                  L&rsquo;accompagnement SEO de Med Issam Chaoui repose sur une séquence structurée
                  qui va du diagnostic initial à la croissance organique mesurable.
                </p>

                <div className="seo-grid-2" style={{ marginTop: 24, marginBottom: 32 }}>
                  {[
                    { n: "01", t: "Diagnostic", d: "Analyse complète du site : technique, sémantique, local, autorité, contenu, conversion." },
                    { n: "02", t: "Priorisation", d: "Classement des actions par impact, effort et proximité business." },
                    { n: "03", t: "Architecture", d: "Organisation en silos, définition des pages piliers et des clusters." },
                    { n: "04", t: "Maillage", d: "Plan de liens internes, ancres, profondeur de clic, pages orphelines." },
                    { n: "05", t: "Exécution", d: "Optimisations techniques, briefs, contenus, données structurées, tracking." },
                    { n: "06", t: "Suivi", d: "Tableau de bord, reporting mensuel, ajustements et nouvelles opportunités." },
                  ].map((step) => (
                    <div key={step.n} className="seo-card">
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--clay)", marginBottom: 8 }}>{step.n}</p>
                      <h3>{step.t}</h3>
                      <p>{step.d}</p>
                    </div>
                  ))}
                </div>

                <p>
                  Chaque mission commence par un diagnostic et se termine par des livrables
                  actionnables&nbsp;: audit priorisé, roadmap 30/60/90 jours, plan de maillage,
                  briefs de contenu, recommandations techniques et tableau de bord de suivi.
                </p>

              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section section--olive">
          <div className="container center" style={{ maxWidth: 720 }}>
            <span className="eyebrow kicker" style={{ color: "var(--ochre)", justifyContent: "center", display: "inline-flex" }}>
              Prochaine étape
            </span>
            <h2 className="t-h1" style={{ color: "var(--ink-inverse)", margin: "18px 0 18px" }}>
              Identifier les priorités SEO de votre site.
            </h2>
            <p className="t-lead" style={{ color: "rgba(255,255,255,0.78)", marginBottom: 32 }}>
              Un diagnostic stratégique pour comprendre la situation, classer les actions et
              définir les premières étapes concrètes.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/#contact" className="btn btn--onolive btn--lg">
                Demander un diagnostic SEO
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
              </a>
              <a href="/methode-seo" className="btn btn--linkonolive btn--lg">
                Voir la méthode complète
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

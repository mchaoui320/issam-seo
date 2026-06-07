import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, SITE_URL, SOCIAL_LINKS } from "@/lib/constants";
import styles from "./profile.module.css";

const profileUrl = new URL("/profil/", SITE_URL).toString();

export const metadata: Metadata = {
  title: "Profil consultant SEO & GEO | Compétences, méthode, livrables",
  description:
    "Profil de consultant SEO et GEO : compétences, méthode de travail, outils, livrables, audit SEO, référencement IA et mesure du SEO.",
  alternates: {
    canonical: profileUrl,
  },
  openGraph: {
    title: "Profil consultant SEO & GEO | Compétences, méthode, livrables",
    description:
      "Profil professionnel : méthode SEO, compétences GEO, outils, livrables et cadre de travail pour des missions SEO mesurables.",
    url: profileUrl,
    siteName: "Consultant SEO & GEO",
    locale: "fr_FR",
    type: "profile",
  },
};

const identityRows = [
  ["Nom", "Med Issam Chaoui"],
  ["Rôle", "Consultant SEO & GEO"],
  ["Domaines", "Audit SEO, technique, contenu, maillage, référencement IA, mesure SEO"],
  ["Spécialités", "Priorisation, architecture de pages, données structurées, tracking, livrables exécutables"],
  ["Outils", "Search Console, GA4, GTM, Looker Studio, Screaming Frog, Sitebulb, Ahrefs, Semrush"],
  ["Livrables", "Audit priorisé, roadmap, mapping d’intentions, plan de maillage, briefs, dashboard"],
  ["Méthode", "Comprendre, diagnostiquer, prioriser, corriger, structurer, mesurer, ajuster"],
];

const skillRows = [
  {
    domain: "Audit SEO",
    analysed: "Indexation, contenu, technique, cannibalisation, liens internes, pages à potentiel",
    delivered: "Priorités, risques, roadmap, quick wins et actions à séquencer",
  },
  {
    domain: "SEO technique",
    analysed: "Crawl, performance, templates, balisage, canonicals, données structurées, profondeur",
    delivered: "Corrections développeur, règles d’indexation, contrôles avant mise en production",
  },
  {
    domain: "Contenu SEO",
    analysed: "Intentions, requêtes, pages manquantes, contenus faibles, briefs, preuves à ajouter",
    delivered: "Mapping, structures Hn, briefs éditoriaux, recommandations de consolidation",
  },
  {
    domain: "Maillage interne",
    analysed: "Pages sources, pages cibles, ancres, hubs, pages orphelines, profondeur de clic",
    delivered: "Plan de liens internes, ancres recommandées, priorités de liaison",
  },
  {
    domain: "GEO",
    analysed: "Entités, réponses extractibles, E-E-A-T, sources, FAQ visibles, schema",
    delivered: "Structure de contenu, blocs de réponse, données structurées et preuves à intégrer",
  },
  {
    domain: "Web Data SEO",
    analysed: "GSC, GA4, GTM, événements, formulaires, clics téléphone, pages qui génèrent des demandes",
    delivered: "Dashboard SEO, plan de tracking, indicateurs de suivi, nomenclature d’événements",
  },
];

const methodSteps = [
  {
    title: "Comprendre le site",
    output:
      "Périmètre, objectifs, contraintes, CMS, historique SEO, pages business, contenus existants et données disponibles.",
  },
  {
    title: "Identifier les blocages",
    output:
      "Freins d’indexation, contenus qui se concurrencent, structure confuse, liens manquants, tracking absent ou incomplet.",
  },
  {
    title: "Classer les priorités",
    output:
      "Chaque action est évaluée selon l’impact attendu, l’effort, le risque, les dépendances et les ressources disponibles.",
  },
  {
    title: "Corriger",
    output:
      "Les corrections techniques, éditoriales et de maillage sont transformées en tickets, briefs ou consignes exploitables.",
  },
  {
    title: "Structurer",
    output:
      "Les pages, clusters, liens internes, entités, réponses et données structurées sont organisés autour des intentions utiles.",
  },
  {
    title: "Mesurer",
    output:
      "Les impressions, clics, requêtes, conversions, formulaires, appels et pages contributrices sont suivis dans un reporting clair.",
  },
  {
    title: "Ajuster",
    output:
      "Les actions sont réordonnées selon les résultats observés, les contenus à renforcer et les nouvelles opportunités.",
  },
];

const deliverables = [
  {
    title: "Audit priorisé",
    description:
      "Un document court ou détaillé selon le contexte, avec les freins identifiés, leur effet attendu et l’ordre de traitement.",
  },
  {
    title: "Roadmap SEO",
    description:
      "Une feuille de route 30 / 60 / 90 jours qui précise les actions, les responsables possibles, les dépendances et les contrôles.",
  },
  {
    title: "Mapping mots-clés / intentions",
    description:
      "Un tableau qui relie requêtes, intentions, pages existantes, pages à créer, cannibalisations et priorités éditoriales.",
  },
  {
    title: "Plan de maillage interne",
    description:
      "Une liste de liens à ajouter ou corriger, avec pages sources, pages cibles, ancres recommandées et objectif du lien.",
  },
  {
    title: "Briefs SEO",
    description:
      "Des briefs qui donnent l’intention, la structure, les entités, les preuves à intégrer, les liens internes et les critères de mesure.",
  },
  {
    title: "Recommandations techniques",
    description:
      "Des consignes lisibles par une équipe technique : indexation, canonical, performance, schema, templates et erreurs de crawl.",
  },
  {
    title: "Dashboard SEO",
    description:
      "Un suivi centré sur Search Console, GA4 et les conversions utiles, sans métriques décoratives qui ne guident aucune décision.",
  },
  {
    title: "Plan de tracking",
    description:
      "Une nomenclature d’événements pour mesurer formulaires, clics téléphone, clics email, rendez-vous et actions organiques.",
  },
];

const toolRows = [
  ["Crawl", "Screaming Frog, Sitebulb", "Explorer URLs, statuts, profondeur, balises, canonicals et erreurs techniques."],
  ["Search", "Google Search Console", "Lire les requêtes, pages, clics, impressions, CTR, positions et pertes de visibilité."],
  ["Analytics", "GA4, GTM, Looker Studio", "Relier le trafic organique aux événements, formulaires, appels et rendez-vous."],
  ["Contenu", "Semrush, Ahrefs, YourTextGuru, 1.fr", "Comparer les intentions, les pages concurrentes, les termes attendus et les opportunités."],
  ["Technique", "PageSpeed Insights, Schema Validator", "Contrôler performance, données structurées, rendu mobile et signaux bloquants."],
  ["GEO", "Entités, FAQ, schema, sources", "Rendre les contenus plus explicites, vérifiables et exploitables par les moteurs de réponse."],
];

const avoided = [
  "Rapport de 80 pages sans priorisation.",
  "Contenu publié sans page cible, intention claire ou mesure prévue.",
  "Empilement de mots-clés dans les titres et paragraphes.",
  "Promesse de position garantie.",
  "Stratégie SEO sans tracking des actions utiles.",
  "Langage marketing vide qui ne décrit aucune action.",
  "Dashboard décoratif qui ne permet pas de décider quoi faire ensuite.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${profileUrl}#profilepage`,
      url: profileUrl,
      name: "Profil consultant SEO & GEO",
      description:
        "Profil professionnel de Med Issam Chaoui, consultant SEO et GEO : compétences, méthode, outils et livrables associés aux missions SEO.",
      inLanguage: "fr-FR",
      mainEntity: {
        "@id": `${profileUrl}#person`,
      },
    },
    {
      "@type": "Person",
      "@id": `${profileUrl}#person`,
      name: "Med Issam Chaoui",
      jobTitle: "Consultant SEO & GEO",
      url: profileUrl,
      email: CONTACT.email,
      sameAs: [SOCIAL_LINKS.linkedin],
      knowsAbout: [
        "Audit SEO",
        "SEO technique",
        "Stratégie de contenu SEO",
        "Maillage interne",
        "Netlinking",
        "SEO local",
        "Refonte SEO",
        "Conversion SEO",
        "Référencement IA",
        "Generative Engine Optimization",
        "Web Data SEO",
        "Google Search Console",
        "GA4",
        "GTM",
        "Looker Studio",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${profileUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Profil",
          item: profileUrl,
        },
      ],
    },
  ],
};

function JsonLdScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function ProfileRouteStyle() {
  return <style>{`html, body { background: #f7f8fa !important; }`}</style>;
}

function ProfileHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.wordmark} href="/">
          Consultant SEO
        </Link>
        <nav className={styles.nav} aria-label="Navigation profil">
          <Link href="/methode-seo">Méthode</Link>
          <Link href="/outils-seo">Outils</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

function ProfileIntro() {
  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <p className={styles.breadcrumb}>
          <Link href="/">Accueil</Link>
          <span>/</span>
          Profil
        </p>
        <div className={styles.introGrid}>
          <div>
            <h1>Profil SEO &amp; GEO</h1>
            <p className={styles.lead}>
              Parcours, compétences, méthode de travail et livrables associés
              aux missions SEO. Cette page sert à comprendre comment un site est
              analysé, corrigé, structuré puis mesuré.
            </p>
          </div>
          <aside className={styles.summary} aria-label="Résumé du profil">
            <p>Med Issam Chaoui</p>
            <dl>
              <div>
                <dt>Rôle</dt>
                <dd>Consultant SEO &amp; GEO</dd>
              </div>
              <div>
                <dt>Cadre</dt>
                <dd>Audit, stratégie, livrables, mesure</dd>
              </div>
              <div>
                <dt>Contact</dt>
                <dd>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ProfileIdentityTable() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Carte d’identité professionnelle</h2>
          <p>
            Les informations utiles pour comprendre le périmètre du profil sans
            transformer la page en présentation commerciale.
          </p>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.identityTable}>
            <tbody>
              {identityRows.map(([label, value]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ProfileSkillsMatrix() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Compétences</h2>
          <p>
            Chaque domaine est relié à une analyse et à un livrable. L’objectif
            est de rendre les recommandations exploitables, pas de multiplier
            les intitulés.
          </p>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.matrixTable}>
            <thead>
              <tr>
                <th>Domaine</th>
                <th>Ce qui est analysé</th>
                <th>Ce qui est livré</th>
              </tr>
            </thead>
            <tbody>
              {skillRows.map((row) => (
                <tr key={row.domain}>
                  <th scope="row">{row.domain}</th>
                  <td>{row.analysed}</td>
                  <td>{row.delivered}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ProfileMethod() {
  return (
    <section className={`${styles.section} ${styles.subtleSection}`}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Méthode de travail</h2>
          <p>
            La méthode garde une logique simple : comprendre le site, identifier
            les blocages, corriger ce qui compte, puis mesurer les effets.
          </p>
        </div>
        <ol className={styles.methodList}>
          {methodSteps.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.output}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProfileDeliverables() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Livrables</h2>
          <p>
            Les livrables ressemblent à des documents de travail : ils indiquent
            quoi faire, pourquoi, dans quel ordre et comment vérifier.
          </p>
        </div>
        <div className={styles.deliverableGrid}>
          {deliverables.map((item) => (
            <article className={styles.documentCard} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfileToolsTable() {
  return (
    <section className={`${styles.section} ${styles.subtleSection}`}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Outils</h2>
          <p>
            Les outils sont classés par usage. Ils servent à observer, vérifier
            et suivre, pas à remplacer la décision.
          </p>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.toolsTable}>
            <thead>
              <tr>
                <th>Usage</th>
                <th>Outils</th>
                <th>Rôle dans la mission</th>
              </tr>
            </thead>
            <tbody>
              {toolRows.map(([usage, tools, role]) => (
                <tr key={usage}>
                  <th scope="row">{usage}</th>
                  <td>{tools}</td>
                  <td>{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ProfileAvoidList() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.avoidLayout}>
          <div className={styles.sectionTitle}>
            <h2>Ce qui est évité</h2>
            <p>
              Certaines pratiques donnent une impression de volume, mais elles
              brouillent la lecture du site ou empêchent de décider.
            </p>
          </div>
          <ul className={styles.avoidList}>
            {avoided.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProfileCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaBox}>
          <div>
            <h2>Transmettre l’URL du site</h2>
            <p>
              Le premier échange sert à comprendre le contexte : site,
              objectifs, contraintes, pages importantes et données déjà
              disponibles.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/contact">Demander un diagnostic SEO</Link>
            <Link href="/methode-seo">Voir la méthode SEO</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>Profil consultant SEO &amp; GEO</p>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}

export default function ProfilPage() {
  return (
    <>
      <JsonLdScript />
      <ProfileRouteStyle />
      <ProfileHeader />
      <main className={styles.page}>
        <ProfileIntro />
        <ProfileIdentityTable />
        <ProfileSkillsMatrix />
        <ProfileMethod />
        <ProfileDeliverables />
        <ProfileToolsTable />
        <ProfileAvoidList />
        <ProfileCTA />
      </main>
      <ProfileFooter />
    </>
  );
}

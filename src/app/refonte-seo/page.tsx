import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refonte SEO & Migration de Site — Migrer Sans Perdre de Trafic",
  description: "Refonte de site web sans perte SEO : plan de redirection 301, préservation des positions, migration HTTPS sécurisée. Consultant SEO freelance spécialisé en migration à Marseille et Paris.",
};

const risques = [
  { title: "Perte de trafic organique massive", desc: "Sans plan de redirection exhaustif, les pages repositionnées perdent leurs URLs, leurs backlinks et leurs positions — parfois de façon irréversible. Des baisses de 50 à 80 % du trafic organique sont fréquentes lors de refontes mal préparées." },
  { title: "Désindexation de pages stratégiques", desc: "Un changement d'architecture mal maîtrisé peut provoquer la suppression de pages indexées, la création de contenus orphelins ou des erreurs de crawl qui empêchent Google de retrouver vos pages les plus performantes." },
  { title: "Perte de l'historique de backlinks", desc: "Les liens entrants acquis au fil des années pointent vers des URLs spécifiques. Sans redirections 301 correctement mappées, cette autorité accumulée est simplement perdue — et avec elle, votre positionnement." },
  { title: "Cannibalisation et contenu dupliqué", desc: "La coexistence temporaire de l'ancien et du nouveau site, ou des structures d'URL mal pensées, peuvent générer du contenu dupliqué massif qui dilue vos signaux de pertinence." },
  { title: "Dégradation des Core Web Vitals", desc: "Un nouveau design avec des assets plus lourds, un CMS différent ou un hébergement non optimisé peut dégrader vos métriques de performance — un facteur de classement direct depuis 2021." },
  { title: "Perte des données structurées", desc: "Le balisage Schema.org (FAQ, BreadcrumbList, Article) n'est pas toujours migré lors d'une refonte. Sa disparition impacte la richesse de vos résultats dans les SERPs." },
];

const phaseAvant = [
  "Audit SEO complet du site actuel : pages indexées, positions, trafic par page, backlinks",
  "Crawl exhaustif pour cartographier toutes les URLs existantes (Screaming Frog, Sitebulb)",
  "Identification des pages à fort trafic, fort potentiel et pages à supprimer",
  "Création du plan de redirection 301 complet (ancien → nouveau URL)",
  "Sauvegarde des données Google Search Console et Analytics",
  "Audit du maillage interne actuel et des clusters sémantiques",
  "Vérification de la structure Hn, des balises title et meta descriptions",
  "Documentation des données structurées existantes à préserver",
  "Test de la nouvelle architecture en environnement de staging",
];

const phasePendant = [
  "Mise en place des redirections 301 avant ou simultanément au déploiement",
  "Vérification que le robots.txt n'empêche pas le crawl du nouveau site",
  "Soumission du nouveau sitemap XML dans Google Search Console",
  "Test de toutes les redirections (status codes, chaînes de redirections)",
  "Vérification des canonical tags sur toutes les pages",
  "Contrôle des Core Web Vitals sur le nouveau site",
  "Vérification du balisage Schema.org migré correctement",
  "Test du maillage interne et des liens internes cassés",
];

const phaseApres = [
  "Monitoring quotidien des positions et du trafic pendant 4 à 8 semaines",
  "Suivi des erreurs de crawl dans Google Search Console (404, 500, soft 404)",
  "Vérification de l'indexation progressive des nouvelles URLs",
  "Analyse des logs serveur pour détecter les problèmes de crawl",
  "Ajustement des redirections manquantes identifiées post-migration",
  "Surveillance des backlinks et notification aux sites référents si nécessaire",
  "Re-soumission des URLs clés via l'outil d'inspection d'URL",
  "Rapport de migration avec comparatif avant/après sur les KPIs SEO",
];

const checklist = [
  { title: "Plan de redirection 301", desc: "Mapping complet de chaque ancienne URL vers sa nouvelle URL correspondante. Aucune page à trafic ne doit renvoyer un 404. Les chaînes de redirections (A → B → C) doivent être évitées.", color: "var(--green)" },
  { title: "Conservation des balises SEO", desc: "Titles, meta descriptions, balises Hn, attributs alt des images — tous les éléments on-page optimisés doivent être migrés ou recréés à l'identique sur le nouveau site.", color: "var(--green)" },
  { title: "Maillage interne préservé", desc: "La structure de liens internes doit être reconstruite sur la nouvelle architecture. Les pages piliers, les clusters sémantiques et les liens contextuels doivent être maintenus.", color: "var(--cyan)" },
  { title: "Sitemap XML & robots.txt", desc: "Génération d'un nouveau sitemap XML référençant toutes les nouvelles URLs, et vérification que le robots.txt autorise le crawl complet du nouveau site.", color: "var(--cyan)" },
  { title: "Données structurées", desc: "Migration du balisage Schema.org (FAQ, BreadcrumbList, LocalBusiness, Article) pour conserver les rich snippets et la visibilité enrichie dans les SERPs.", color: "var(--green)" },
  { title: "Performance & Core Web Vitals", desc: "Validation que le nouveau site maintient ou améliore les métriques LCP, FID/INP et CLS. Un site plus lent après refonte est un risque SEO direct.", color: "var(--cyan)" },
  { title: "HTTPS & sécurité", desc: "Si la migration inclut un passage à HTTPS, vérification que toutes les ressources sont servies en HTTPS, que les certificats sont valides et que les redirections HTTP → HTTPS sont en place.", color: "var(--green)" },
  { title: "Canonical tags", desc: "Implémentation correcte des canonical tags pour éviter tout contenu dupliqué entre anciennes et nouvelles URLs, ou entre versions avec/sans trailing slash.", color: "var(--cyan)" },
];

export default function RefonteSeoPage() {
  return (
    <main style={{ paddingTop: 100 }}>
      {/* Hero */}
      <section style={{ background: "var(--bg)", paddingBottom: 0 }}>
        <div className="grid-decor" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 60, paddingBottom: 60 }}>
          <div className="section-eyebrow">Migration & Refonte</div>
          <h1 className="display-xl" style={{ maxWidth: 820, marginBottom: 24 }}>
            Refonte SEO : migrer votre site sans perdre de trafic
          </h1>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 680, lineHeight: 1.75 }}>
            Une refonte de site est un projet excitant — mais c'est aussi l'un des moments les plus risqués pour votre référencement naturel. Changement d'URLs, nouvelle architecture, migration de CMS : chaque décision peut coûter des mois de travail SEO si elle n'est pas anticipée. En tant que <Link href="/consultant-seo-marseille" style={{ color: "var(--green)", textDecoration: "underline" }}>consultant SEO à Marseille</Link> et <Link href="/consultant-seo-paris" style={{ color: "var(--green)", textDecoration: "underline" }}>Paris</Link>, j'accompagne vos refontes pour préserver — et même améliorer — vos positions organiques.
          </p>
        </div>
      </section>

      {/* Pourquoi c'est risqué */}
      <section style={{ background: "var(--surface)", padding: "80px 0" }}>
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>Les risques</div>
          <h2 className="display-md" style={{ maxWidth: 700, marginBottom: 24 }}>
            Pourquoi une refonte est-elle si risquée pour le SEO ?
          </h2>
          <p style={{ fontSize: 16, color: "var(--ink-soft)", maxWidth: 700, lineHeight: 1.75, marginBottom: 24 }}>
            Les statistiques sont sans appel : la majorité des refontes de sites web entraînent une perte de trafic organique. Non pas parce que la refonte est une mauvaise idée, mais parce que le volet SEO est souvent traité comme une réflexion secondaire — quand il n'est pas tout simplement oublié.
          </p>
          <p style={{ fontSize: 16, color: "var(--ink-soft)", maxWidth: 700, lineHeight: 1.75, marginBottom: 48 }}>
            Que vous changiez de CMS, de nom de domaine, d'architecture ou simplement de design, chaque modification impacte la façon dont Google perçoit, crawle et indexe votre site. Voici les risques concrets que j'identifie systématiquement lors d'un <Link href="/audit-seo" style={{ color: "var(--green)", textDecoration: "underline" }}>audit pré-migration</Link>.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 14 }}>
            {risques.map((r, i) => (
              <div key={i} className="card" style={{ padding: 28 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(255,80,80,0.1)", border: "1px solid rgba(255,80,80,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, color: "#ff5050" }}>⚠</span>
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 650, marginBottom: 8, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                  {r.title}
                </div>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.65 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les 3 phases */}
      <section style={{ background: "var(--bg)", padding: "80px 0" }}>
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>Méthodologie</div>
          <h2 className="display-md" style={{ maxWidth: 700, marginBottom: 24 }}>
            Les 3 phases d'une migration SEO réussie
          </h2>
          <p style={{ fontSize: 16, color: "var(--ink-soft)", maxWidth: 700, lineHeight: 1.75, marginBottom: 48 }}>
            Une refonte SEO ne s'improvise pas. Elle s'organise en trois phases distinctes, chacune avec ses livrables, ses points de contrôle et ses actions critiques. Voici le cadre méthodologique que j'applique pour chaque migration.
          </p>

          {/* Phase Avant */}
          <div className="card" style={{ padding: 36, marginBottom: 20, borderColor: "rgba(0,232,122,0.2)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(0,232,122,0.1)", border: "1px solid rgba(0,232,122,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, color: "var(--green)", letterSpacing: "0.06em" }}>01</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 650, letterSpacing: "-0.025em", color: "var(--ink)" }}>Avant la migration</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--green)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Préparation & audit</div>
              </div>
            </div>
            <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.7, marginBottom: 20 }}>
              La phase de préparation est la plus critique. C'est ici que se joue 80 % du succès de votre migration SEO. Chaque élément du site actuel est audité, documenté et planifié pour garantir une transition sans perte.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {phaseAvant.map((item) => (
                <li key={item} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.55 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", marginTop: 7, flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Phase Pendant */}
          <div className="card" style={{ padding: 36, marginBottom: 20, borderColor: "rgba(0,212,255,0.2)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, color: "var(--cyan)", letterSpacing: "0.06em" }}>02</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 650, letterSpacing: "-0.025em", color: "var(--ink)" }}>Pendant la migration</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--cyan)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Déploiement & contrôle</div>
              </div>
            </div>
            <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.7, marginBottom: 20 }}>
              Le jour J est un moment de vérité. Chaque action doit être exécutée dans l'ordre, avec des vérifications immédiates pour s'assurer que rien n'a été oublié.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {phasePendant.map((item) => (
                <li key={item} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.55 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--cyan)", marginTop: 7, flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Phase Après */}
          <div className="card" style={{ padding: 36, borderColor: "rgba(168,85,247,0.2)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, color: "#a855f7", letterSpacing: "0.06em" }}>03</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 650, letterSpacing: "-0.025em", color: "var(--ink)" }}>Après la migration</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#a855f7", letterSpacing: "0.1em", textTransform: "uppercase" }}>Monitoring & ajustement</div>
              </div>
            </div>
            <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.7, marginBottom: 20 }}>
              La migration ne s'arrête pas au déploiement. Les semaines qui suivent sont cruciales pour détecter et corriger les problèmes résiduels, et pour s'assurer que Google réindexe correctement votre nouveau site.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {phaseApres.map((item) => (
                <li key={item} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.55 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#a855f7", marginTop: 7, flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section style={{ background: "var(--bg-soft)", padding: "80px 0" }}>
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>Checklist</div>
          <h2 className="display-md" style={{ maxWidth: 700, marginBottom: 24 }}>
            Les éléments SEO critiques à vérifier lors d'une refonte
          </h2>
          <p style={{ fontSize: 16, color: "var(--ink-soft)", maxWidth: 700, lineHeight: 1.75, marginBottom: 48 }}>
            Cette checklist couvre les points de contrôle essentiels que je vérifie systématiquement lors de chaque mission de refonte SEO. Chaque élément est un garde-fou contre la perte de trafic et de positionnement. Elle s'inscrit dans une approche globale qui inclut l'optimisation du <Link href="/netlinking" style={{ color: "var(--green)", textDecoration: "underline" }}>maillage interne et des backlinks</Link>.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}>
            {checklist.map((item, i) => (
              <div key={i} className="card" style={{ padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: item.color === "var(--green)" ? "rgba(0,232,122,0.15)" : "rgba(0,212,255,0.15)", border: `1px solid ${item.color === "var(--green)" ? "rgba(0,232,122,0.25)" : "rgba(0,212,255,0.25)"}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 12, color: item.color }}>✓</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 650, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                    {item.title}
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risques et mitigation */}
      <section style={{ background: "var(--surface)", padding: "80px 0" }}>
        <div className="container">
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>Mitigation des risques</div>
          <h2 className="display-md" style={{ maxWidth: 700, marginBottom: 24 }}>
            Comment je protège votre SEO pendant une refonte
          </h2>
          <div style={{ maxWidth: 700 }}>
            <p style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.75, marginBottom: 20 }}>
              Mon rôle en tant que <Link href="/consultant-seo-ou-agence" style={{ color: "var(--green)", textDecoration: "underline" }}>consultant SEO</Link> lors d'une refonte est d'être le gardien de votre capital SEO. Je m'intègre dès les premières phases du projet, aux côtés de votre équipe de développement et de votre agence web, pour m'assurer que chaque décision technique est compatible avec la préservation de vos acquis SEO.
            </p>
            <p style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.75, marginBottom: 20 }}>
              <strong style={{ color: "var(--ink)" }}>Intervention dès le cahier des charges</strong> — Je participe à la définition de l'architecture du nouveau site pour anticiper les impacts SEO avant qu'ils ne deviennent des problèmes. L'arborescence, la structure d'URL, les templates de pages — tout est validé en amont.
            </p>
            <p style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.75, marginBottom: 20 }}>
              <strong style={{ color: "var(--ink)" }}>Environnement de staging</strong> — Le nouveau site est testé en environnement de pré-production avec un crawl complet pour identifier les erreurs avant le déploiement : liens cassés, redirections manquantes, pages orphelines, problèmes de performance.
            </p>
            <p style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.75, marginBottom: 20 }}>
              <strong style={{ color: "var(--ink)" }}>Plan de rollback</strong> — En cas de problème critique post-migration, un plan de retour en arrière est préparé pour limiter les dégâts. La sauvegarde complète du site actuel et de sa configuration serveur est un prérequis non négociable.
            </p>
            <p style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.75 }}>
              <strong style={{ color: "var(--ink)" }}>Coordination avec les équipes techniques</strong> — Je travaille main dans la main avec vos développeurs pour implémenter les redirections, configurer le robots.txt, déployer les données structurées et valider les Core Web Vitals. Cette collaboration garantit que le SEO n'est pas un afterthought mais un pilier du projet. Cette approche s'intègre dans une <Link href="/strategie-contenu-seo" style={{ color: "var(--green)", textDecoration: "underline" }}>stratégie de contenu SEO</Link> globale pour maximiser les résultats post-refonte.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bg-soft)", padding: "80px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>Votre refonte approche ?</div>
          <h2 className="display-md" style={{ maxWidth: 600, margin: "0 auto 24px" }}>
            Sécurisez votre trafic organique pendant votre refonte
          </h2>
          <p style={{ fontSize: 16, color: "var(--ink-soft)", maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.75 }}>
            Ne laissez pas des mois de travail SEO disparaître lors de votre migration. Je vous accompagne à chaque étape — de l'audit pré-migration au monitoring post-déploiement — pour une refonte sans perte de trafic.
          </p>
          <Link href="/contact" className="btn btn-green">
            Préparer ma refonte SEO
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}

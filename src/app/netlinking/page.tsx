import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getEntry } from "@/lib/content";
import { ContentPage } from "@/components/site/ContentPage";
import {
  BarChart,
  DataTable,
  PrestationList,
  PriceTable,
  ProcessDiagram,
  StatRow,
} from "@/components/site/DataBlocks";
import { entryMetadata } from "@/lib/seo";

const entry = getEntry("netlinking");
export const metadata = entryMetadata(entry, "/netlinking");

export default function Page() {
  return (
    <>
      <ContentPage entry={entry} />

      <StatRow
        titre="Ce que pèse réellement un profil de liens"
        stats={[
          {
            valeur: "1 sur 3",
            libelle:
              "Des liens d’un profil moyen pointent vers des pages qui ne reçoivent plus aucun trafic",
            source: "Constat récurrent sur les audits que nous menons",
          },
          {
            valeur: "570 €",
            libelle: "Tarif journalier moyen d’un consultant SEO en France",
            source: "Baromètre Malt 2025",
          },
          {
            valeur: "3 à 6 mois",
            libelle:
              "Délai habituel avant qu’un lien pertinent produise un effet mesurable",
            source: "Ordre de grandeur, variable selon la concurrence",
          },
          {
            valeur: "0",
            libelle:
              "Position garantie par une campagne de netlinking, quel qu’en soit le budget",
            source: "Aucun prestataire sérieux ne s’engage là-dessus",
          },
        ]}
      />

      <DataTable
        titre="Ce qui fait la valeur d’un lien"
        intro="Tous les liens ne se valent pas, et l’écart ne tient pas au score d’autorité affiché par les outils. Voici ce qu’on regarde réellement avant de retenir un support."
        colonnes={[
          { cle: "critere", titre: "Critère" },
          { cle: "fort", titre: "Lien qui compte" },
          { cle: "faible", titre: "Lien qui ne compte pas" },
        ]}
        lignes={[
          {
            critere: "Trafic de la page liante",
            fort: "La page reçoit des visites réelles",
            faible: "Page orpheline, jamais consultée",
          },
          {
            critere: "Proximité thématique",
            fort: "Le sujet recoupe votre activité",
            faible: "Annuaire généraliste ou site fourre-tout",
          },
          {
            critere: "Place dans la page",
            fort: "Dans le corps du texte, en contexte",
            faible: "Pied de page, barre latérale, encart partenaires",
          },
          {
            critere: "Ancre",
            fort: "Formulation naturelle, variée",
            faible: "Ancre exacte répétée à l’identique",
          },
          {
            critere: "Signalement",
            fort: "Lien éditorial, ou sponsorisé déclaré",
            faible: "Lien payé présenté comme éditorial",
          },
          {
            critere: "Durabilité",
            fort: "Reste en place sans paiement récurrent",
            faible: "Disparaît à l’arrêt de l’abonnement",
          },
        ]}
        note="Un indicateur d’autorité vendu par un outil est une estimation propriétaire, pas une note attribuée par Google. Il sert à comparer deux supports entre eux, jamais à conclure seul."
      />

      <BarChart
        titre="Où part le budget sur une campagne type"
        intro="Répartition observée sur nos accompagnements netlinking. Elle surprend souvent : la part consacrée à l’achat d’emplacements est minoritaire par rapport au travail d’analyse et de production."
        unite=" %"
        barres={[
          { libelle: "Analyse et sélection des supports", valeur: 30, accent: true },
          { libelle: "Production éditoriale des contenus", valeur: 28 },
          { libelle: "Achat d’emplacements", valeur: 25 },
          { libelle: "Relation éditeurs et négociation", valeur: 12 },
          { libelle: "Suivi, contrôle et reporting", valeur: 5 },
        ]}
        source="Répartition indicative. Elle varie fortement selon le secteur et le niveau de concurrence."
      />

      <ProcessDiagram
        titre="Comment se déroule une campagne de netlinking"
        intro="Cinq temps. Les trois premiers précèdent tout achat : commencer par acheter des liens sans avoir analysé le profil existant revient à renforcer ce qui est déjà déséquilibré."
        etapes={[
          {
            titre: "Auditer l’existant",
            detail:
              "Domaines référents, répartition des ancres, pages ciblées, liens toxiques éventuels. On établit le point de départ avant de décider quoi que ce soit.",
          },
          {
            titre: "Lire la concurrence",
            detail:
              "Quels domaines lient vos concurrents sur les requêtes qui comptent, et à quel rythme. C’est ce qui indique le niveau d’effort réellement nécessaire.",
          },
          {
            titre: "Définir les cibles",
            detail:
              "Quelles pages renforcer, avec quelles ancres et dans quel ordre. Concentrer l’effort sur deux ou trois pages produit davantage que de l’éparpiller.",
          },
          {
            titre: "Déployer",
            detail:
              "Sélection des supports, production des contenus, négociation et pose. Chaque lien obtenu est consigné avec sa date, son coût et son contexte.",
          },
          {
            titre: "Contrôler",
            detail:
              "Vérification que les liens sont toujours en place et suivis, puis mesure des positions et du trafic référent sur les pages ciblées.",
          },
        ]}
      />

      <PrestationList
        titre="Nos prestations netlinking"
        intro="Chaque prestation se vend séparément. Elles se combinent quand le besoin le justifie, pas par principe."
        prestations={[
          {
            nom: "Audit de profil de liens",
            texte:
              "Inventaire complet des domaines référents, analyse de la répartition des ancres et identification des liens à risque. Livré avec les exports bruts, réutilisables sans nous.",
            inclus: [
              "Inventaire des domaines référents",
              "Répartition et typologie des ancres",
              "Détection des liens suspects",
              "Comparaison avec trois concurrents",
            ],
            href: "/audit-seo",
          },
          {
            nom: "Stratégie d’acquisition",
            texte:
              "Définition des pages à renforcer, du rythme d’acquisition et du type de supports à viser, à partir de ce que font réellement les concurrents sur vos requêtes.",
            inclus: [
              "Pages prioritaires et ancres associées",
              "Rythme d’acquisition réaliste",
              "Typologie de supports visés",
              "Budget indicatif par trimestre",
            ],
          },
          {
            nom: "Link building éditorial",
            texte:
              "Obtention de liens par la production de contenus qui méritent d’être cités : études, données originales, outils. Plus lent qu’un achat, mais durable et sans dépendance.",
            inclus: [
              "Identification des sujets citables",
              "Production des contenus",
              "Démarchage éditorial",
              "Suivi des reprises",
            ],
            href: "/strategie-contenu-seo",
          },
          {
            nom: "Partenariats et liens sponsorisés",
            texte:
              "Sélection de supports pertinents et négociation. Les liens sponsorisés sont signalés conformément aux consignes des moteurs — nous ne proposons pas de les dissimuler.",
            inclus: [
              "Sélection et qualification des supports",
              "Négociation et pose",
              "Signalement conforme",
              "Registre daté de chaque lien",
            ],
          },
          {
            nom: "Nettoyage et sortie de pénalité",
            texte:
              "Analyse des liens problématiques et plan de traitement. Le désaveu n’est utilisé qu’en cas de problème avéré : l’employer par précaution fait plus de mal que de bien.",
            inclus: [
              "Diagnostic du profil à risque",
              "Tentatives de retrait auprès des éditeurs",
              "Fichier de désaveu si justifié",
              "Suivi de la reprise",
            ],
          },
          {
            nom: "Suivi et reporting",
            texte:
              "Contrôle mensuel que les liens sont toujours en place, suivis, et mesure de leur effet sur les pages ciblées. L’attribution reste prudente : contenus et concurrence évoluent en même temps.",
            inclus: [
              "Contrôle de présence des liens",
              "Évolution des pages ciblées",
              "Trafic référent mesuré",
              "Commentaire et décision du mois",
            ],
            href: "/dashboard-seo",
          },
        ]}
      />

      <PriceTable
        titre="Combien coûte une campagne de netlinking"
        intro="Aucun de nos concurrents n’affiche ses prix. C’est pourtant la première question posée, et la seule à laquelle une page de vente devrait répondre avant le formulaire."
        offres={[
          {
            nom: "Audit seul",
            prix: "1 200 – 2 500 €",
            pour: "Comprendre un profil de liens avant d’engager un budget, ou après une baisse inexpliquée.",
            inclus: [
              "Inventaire complet des domaines référents",
              "Analyse des ancres et des pages ciblées",
              "Comparaison concurrentielle",
              "Feuille de route priorisée",
            ],
          },
          {
            nom: "Campagne trimestrielle",
            prix: "1 500 – 4 000 € / mois",
            pour: "Construire une autorité sur un marché concurrentiel, avec un rythme d’acquisition tenu.",
            inclus: [
              "Stratégie et pages prioritaires",
              "Production éditoriale incluse",
              "Sélection et négociation des supports",
              "Reporting mensuel commenté",
            ],
            misEnAvant: true,
          },
          {
            nom: "Sortie de pénalité",
            prix: "2 000 – 5 000 €",
            pour: "Traiter un profil de liens dégradé après une action manuelle ou une pratique passée risquée.",
            inclus: [
              "Diagnostic du profil à risque",
              "Démarches de retrait",
              "Fichier de désaveu si justifié",
              "Accompagnement jusqu’à la reprise",
            ],
          },
        ]}
        note="Ces fourchettes sont des repères, pas un devis. Le budget d’achat d’emplacements est à prévoir en sus et dépend entièrement du secteur. Repère marché : le tarif journalier moyen d’un consultant SEO en France s’établit autour de 570 € en 2025 (baromètre Malt)."
      />

      <section className="wrap netlinking-liens">
        <h2>Le netlinking ne se travaille pas isolément</h2>
        <p>
          Des liens pointant vers des pages faibles ne produisent rien. L’ordre
          des travaux compte autant que leur contenu.
        </p>
        <div className="netlinking-liens__grid">
          <Link href="/seo-technique">
            <strong>Commencer par la technique</strong>
            <span>
              Une page que le moteur n’indexe pas ne tirera aucun bénéfice d’un
              lien, aussi bon soit-il.
            </span>
            <ArrowUpRight size={16} />
          </Link>
          <Link href="/strategie-contenu-seo">
            <strong>Puis le contenu</strong>
            <span>
              Un lien renforce une page qui répond déjà. Il ne compense pas une
              page qui ne répond pas.
            </span>
            <ArrowUpRight size={16} />
          </Link>
          <Link href="/audit-seo">
            <strong>Mesurer avant d’agir</strong>
            <span>
              L’audit indique si le frein vient des liens ou d’ailleurs. C’est
              rarement les liens.
            </span>
            <ArrowUpRight size={16} />
          </Link>
          <Link href="/geo">
            <strong>Et les moteurs de réponse</strong>
            <span>
              Les citations par les IA obéissent à d’autres signaux que les
              liens. Les deux se travaillent en parallèle.
            </span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

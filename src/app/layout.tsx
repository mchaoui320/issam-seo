import type { Metadata } from "next";
import { fraunces, atkinson, ibmPlexMono } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Consultant SEO & GEO à Marseille et Paris — Audit · Local · IA Search",
  description:
    "Consultant SEO freelance à Marseille et Paris. Audit SEO, SEO local, stratégie de contenu, netlinking et GEO pour être visible sur Google et les moteurs IA.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Consultant SEO & GEO à Marseille et Paris",
    description:
      "Audit SEO, SEO local, stratégie de contenu, netlinking et GEO pour PME, indépendants et e-commerce.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${atkinson.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <body style={{ position: "relative" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

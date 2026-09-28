import type { Metadata } from "next";
import { display, body, mono } from "@/lib/fonts";
import { Navigation } from "@/components/site/Navigation";
import { SiteFooter } from "@/components/site/Footer";
import { MotionDirector } from "@/components/site/MotionDirector";
import { siteUrl } from "@/lib/seo";
import "./globals.css";
import "./final.css";
import "./polish.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MIC SIGNAL — SEO, GEO, LLMO & Data web",
    template: "%s | MIC SIGNAL",
  },
  description:
    "Consultant SEO, GEO et data web. Audit, référencement naturel, visibilité IA et analytics à Marseille, Paris et à distance.",
  robots: { index: true, follow: true },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable}`}
      >
        <a className="skip-link" href="#main">
          Aller au contenu
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <SiteFooter />
        <MotionDirector />
      </body>
    </html>
  );
}

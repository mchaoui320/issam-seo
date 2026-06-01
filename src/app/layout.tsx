import type { Metadata } from "next";
import { spaceGrotesk, plusJakarta, ibmPlexMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Consultant SEO & GEO à Marseille et Paris | Audit, stratégie, livrables",
  description: "Med Issam Chaoui accompagne les entreprises à Marseille et Paris sur leurs enjeux de visibilité organique : SEO technique, SEO local, stratégie de contenu, maillage interne et GEO pour les moteurs de réponse IA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${ibmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

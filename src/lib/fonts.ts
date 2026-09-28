import {
  Bricolage_Grotesque,
  Instrument_Sans,
  Geist_Mono,
} from "next/font/google";

/**
 * Polices variables : un seul fichier par famille couvre toutes les graisses,
 * donc pas de `weight` à déclarer.
 *
 * Choix assumé contre Inter et Space Grotesk, qui sont devenues la signature
 * visuelle par défaut de tous les sites générés — au point d'être reconnaissables
 * au premier coup d'œil. Bricolage Grotesque a un dessin nettement identifiable
 * (contrastes irréguliers, optical sizing), Instrument Sans reste neutre sans
 * être anonyme.
 */
export const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

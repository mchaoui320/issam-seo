import {
  Instrument_Serif,
  Instrument_Sans,
  Geist_Mono,
} from "next/font/google";

/**
 * Appariement serif / sans.
 *
 * Constat fait en mesurant les agences qui tiennent la route : leurs titres
 * sont en serif, grands et de graisse légère, sur un fond essentiellement noir
 * et blanc. C'est ce qui donne le registre éditorial.
 *
 * Un sans gras accompagné d'un dégradé produit l'inverse — l'allure reconnue
 * au premier coup d'œil des pages générées. D'où l'abandon de Bricolage
 * Grotesque en titre, et surtout d'Inter et Space Grotesk, devenues la
 * signature par défaut de ces pages.
 *
 * Instrument Serif et Instrument Sans viennent de la même fonderie et sont
 * dessinées pour aller ensemble.
 */
export const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
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

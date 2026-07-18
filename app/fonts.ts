import { Bricolage_Grotesque, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";

/** Body + display face (variable — full weight range available). */
export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

/** Navigation / UI chrome face. */
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

/** Mono accents — the "terminal" voice of the brand. */
export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

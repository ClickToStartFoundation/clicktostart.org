import type { Metadata, Viewport } from "next";
import "./globals.css";
import { bricolage, ibmPlexMono, spaceGrotesk } from "./fonts";
import { site } from "@/lib/site";
import { themeScript } from "@/components/theme/theme-script";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Topbar } from "@/components/layout/Topbar";
import { Newsletter } from "@/components/layout/Newsletter";
import { Footer } from "@/components/layout/Footer";
import { RippleEffect } from "@/components/layout/RippleEffect";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "./" },
  keywords: [
    "ClickToStart Foundation",
    "digital literacy",
    "Trinidad and Tobago",
    "nonprofit",
    "free tech training",
    "donated computers",
    "coding for teens",
    "robotics camp",
  ],
  authors: [{ name: site.partner.name, url: site.partner.url }],
  creator: site.partner.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    locale: "en_TT",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
};

// Matches the default (light) theme; the theme script and toggle keep it in
// sync with data-theme, which the media-query variant can't track.
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        {/* Applies the saved theme before paint — must run ahead of hydration. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-accent-ink"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Topbar />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Newsletter />
            <Footer />
          </div>
          <RippleEffect />
        </ThemeProvider>
      </body>
    </html>
  );
}

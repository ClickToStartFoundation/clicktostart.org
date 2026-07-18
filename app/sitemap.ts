import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { programSlugs } from "@/lib/content/programs";
import { storySlugs } from "@/lib/content/stories";

const staticRoutes = [
  "",
  "/programs",
  "/impact",
  "/team",
  "/stories",
  "/about",
  "/contact",
  "/donate",
  "/camps",
  "/volunteer",
  "/sponsors",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...programSlugs.map((slug) => ({
      url: `${base}/programs/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...storySlugs.map((slug) => ({
      url: `${base}/stories/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}

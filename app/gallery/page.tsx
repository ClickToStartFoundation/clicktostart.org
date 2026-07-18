import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Moments from our classes, camps, drives, and events across Trinidad & Tobago.",
};

export default function GalleryPage() {
  const files = fs
    .readdirSync(path.join(process.cwd(), "public/gallery"))
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort();

  return (
    <Container className="w-full pb-20">
      <div className="pt-16">
        <PageHero
          command="> ls gallery/"
          title="Moments that clicked."
          intro="Classes, camps, hamper drives, and demo days across Trinidad & Tobago — straight from our volunteers' cameras."
        />
      </div>

      {/* ponytail: plain lazy <img> masonry; swap for next/image if bandwidth matters */}
      <div className="mt-10 animate-rise columns-2 gap-5 delay-1 md:columns-3">
        {files.map((f) => (
          <img
            key={f}
            src={`/gallery/${f}`}
            alt="ClickToStart Foundation event photo"
            loading="lazy"
            className="mb-5 w-full rounded-2xl border border-line"
          />
        ))}
      </div>
    </Container>
  );
}

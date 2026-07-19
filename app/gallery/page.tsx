import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryImage } from "@/components/gallery/GalleryImage";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Moments from our classes, camps, drives, and events across Trinidad & Tobago.",
};

export default async function GalleryPage() {
  const dir = path.join(process.cwd(), "public/gallery");
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort();

  // Dimensions read at build time so every image reserves its box up front —
  // the masonry never reflows while photos stream in.
  const images = await Promise.all(
    files.map(async (f) => {
      const meta = await sharp(path.join(dir, f)).metadata();
      return { src: `/gallery/${f}`, width: meta.width ?? 4, height: meta.height ?? 3 };
    }),
  );

  return (
    <Container className="w-full pb-20">
      <div className="pt-16">
        <PageHero
          command="> ls gallery/"
          title="Moments that clicked."
          intro="Classes, camps, hamper drives, and demo days across Trinidad & Tobago — straight from our volunteers' cameras."
        />
      </div>

      <div className="mt-10 animate-rise columns-2 gap-5 delay-1 md:columns-3">
        {images.map((img) => (
          <GalleryImage
            key={img.src}
            {...img}
            alt="ClickToStart Foundation event photo"
          />
        ))}
      </div>
    </Container>
  );
}

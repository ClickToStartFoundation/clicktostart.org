import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { getStory, storySlugs } from "@/lib/content/stories";

export function generateStaticParams() {
  return storySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  return { title: story.title, description: story.excerpt };
}

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  return (
    <Container className="w-full">
      <article className="max-w-[860px] animate-rise pt-12 pb-20">
        <nav aria-label="Breadcrumb" className="font-mono text-[13.5px] text-sub">
          <Link href="/stories" className="text-accent hover:underline">
            stories
          </Link>{" "}
          / {story.slug}
        </nav>

        <div className="mt-9 flex gap-3.5 font-mono text-[12.5px] text-accent">
          <span>{story.tag}</span>
          <span className="text-muted">{story.date}</span>
        </div>
        <h1 className="mt-3 text-balance text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[44px]">
          {story.title}
        </h1>

        <Photo label={`photo: ${story.slug}`} className="mt-8 aspect-[16/8] rounded-panel" />

        <div className="mt-9 flex flex-col gap-[22px]">
          {story.paras.map((para, i) => (
            <p key={i} className="text-pretty text-[17px] leading-[1.75] text-ink">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-11 flex flex-col items-start justify-between gap-6 rounded-panel bg-tile p-8 sm:flex-row sm:items-center sm:p-[36px_40px]">
          <div className="text-balance text-[22px] font-extrabold text-white">
            Stories like this one run on donations.
          </div>
          <Button href="/donate" variant="accentOnTile" className="px-[26px] text-[15px] whitespace-nowrap">
            Fund the next one →
          </Button>
        </div>
      </article>
    </Container>
  );
}

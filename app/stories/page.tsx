import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { stories } from "@/lib/content/stories";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Notes from the field — what actually happens when the classes run, the hampers go out, and the robots switch on.",
};

export default function StoriesPage() {
  return (
    <Container className="w-full pb-20">
      <div className="pt-16">
        <PageHero
          command="> tail -f ./stories"
          title="Notes from the field."
          intro="What actually happens when the classes run, the hampers go out, and the robots switch on."
        />
      </div>

      <div className="mt-10 grid animate-rise gap-5 delay-1 md:grid-cols-2">
        {stories.map((story) => (
          <Link
            key={story.slug}
            href={`/stories/${story.slug}`}
            className="block overflow-hidden rounded-2xl border border-line bg-surface transition duration-150 ease-spring hover:-translate-y-1 hover:shadow-card"
          >
            <Photo label={`photo: ${story.slug}`} className="aspect-[16/7]" />
            <div className="p-7">
              <div className="flex gap-3.5 font-mono text-[12.5px] text-accent">
                <span>{story.tag}</span>
                <span className="text-muted">{story.date}</span>
              </div>
              <div className="mt-2.5 text-balance text-[21px] font-bold">{story.title}</div>
              <p className="mt-2 text-[14.5px] leading-[1.55] text-sub">{story.excerpt}</p>
              <div className="mt-4 font-mono text-[13px] text-accent">read the story →</div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}

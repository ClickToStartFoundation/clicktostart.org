import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CoverImage } from "@/components/ui/CoverImage";
import { getProgram, programSlugs } from "@/lib/content/programs";

export function generateStaticParams() {
  return programSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return { title: program.name, description: program.desc };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const facts = [
    { label: "who", value: program.who },
    { label: "format", value: program.format },
    { label: "cost", value: "Free, always" },
  ];

  return (
    <Container className="w-full">
      {/* Header */}
      <div className="animate-rise pt-12">
        <nav aria-label="Breadcrumb" className="font-mono text-[13.5px] text-sub">
          <Link href="/" className="text-accent hover:underline">
            home
          </Link>{" "}
          /{" "}
          <Link href="/programs" className="text-accent hover:underline">
            programs
          </Link>{" "}
          / {program.slug}
        </nav>
        <div className="mt-9 font-mono text-[13px] text-accent">{program.tag}</div>
        <h1 className="mt-2.5 max-w-[20ch] text-balance text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[52px]">
          {program.name}
        </h1>
        <p className="mt-[18px] max-w-[60ch] text-pretty text-[18px] leading-[1.6] text-sub">
          {program.desc}
        </p>
      </div>

      {/* Facts */}
      <div className="mt-9 grid animate-rise gap-5 delay-1 sm:grid-cols-3">
        {facts.map((fact) => (
          <Card key={fact.label} className="p-[22px]">
            <div className="font-mono text-[12.5px] text-accent">{fact.label}</div>
            <div className="mt-1.5 text-[17px] font-bold">{fact.value}</div>
          </Card>
        ))}
      </div>

      {/* What participants get + aside */}
      <div className="mt-11 grid animate-rise items-start gap-10 delay-2 pb-2 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="mb-4 text-[26px] font-extrabold">What participants get</h2>
          <ul className="flex flex-col gap-3">
            {program.points.map((point) => (
              <li
                key={point.n}
                className="flex items-baseline gap-3.5 rounded-xl border border-line bg-surface px-5 py-4"
              >
                <span className="font-mono text-[12.5px] text-accent">{point.n}</span>
                <span className="text-[15.5px] leading-[1.5] text-ink">{point.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <Button href="/donate" className="text-[15.5px]">
              Fund this program
            </Button>
            <Button href="/volunteer" variant="outline" className="px-6 text-[14px]">
              volunteer to teach
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <CoverImage
            src={program.image}
            alt={program.name}
            className="aspect-[4/3] w-full rounded-panel"
          />
          <figure className="rounded-panel bg-tile p-[30px] text-white">
            <blockquote className="text-pretty text-[19px] font-semibold leading-[1.55]">
              &ldquo;{program.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 font-mono text-[12.5px] text-on-tile-mono">
              {program.quoteBy}
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Why it matters */}
      <div className="mt-14 grid items-start gap-10 border-t border-line pt-14 md:grid-cols-2">
        <div>
          <div className="font-mono text-[12.5px] text-accent">why it matters</div>
          <h2 className="mt-2.5 text-balance text-[32px] font-extrabold tracking-[-0.01em]">
            {program.whyTitle}
          </h2>
        </div>
        <p className="text-pretty text-[16.5px] leading-[1.7] text-sub">{program.why}</p>
      </div>

      {/* What your gift does */}
      <div className="pt-14 pb-20">
        <h2 className="text-[28px] font-extrabold">What your gift does here</h2>
        <p className="mt-1.5 mb-6 text-[15.5px] text-sub">
          Every dollar goes straight to this program. Here is what it buys.
        </p>
        <div className="grid gap-5 sm:grid-cols-3">
          {program.tiers.map((tier) => (
            <Card key={tier.amt} hover="lift" className="p-7">
              <div className="font-mono text-[13px] text-accent">TT{tier.amt}</div>
              <div className="mt-2.5 text-[19px] font-bold">{tier.what}</div>
              <p className="mt-2 text-[14px] leading-[1.55] text-sub">{tier.note}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-panel bg-subtle p-8 sm:flex-row sm:items-center sm:p-[40px_44px]">
          <div>
            <div className="text-balance text-[26px] font-extrabold">{program.ctaLine}</div>
            <div className="mt-1.5 text-[15px] text-sub">
              We&apos;re all volunteers, so your whole gift reaches the program.
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/donate" className="whitespace-nowrap text-[15.5px]">
              Fund this program →
            </Button>
            <Button href="/volunteer" variant="outline" className="px-6 text-[14px] whitespace-nowrap">
              volunteer instead
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

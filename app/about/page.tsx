import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CtaBand } from "@/components/ui/CtaBand";
import { TerminalLine } from "@/components/ui/TerminalLine";
import { site } from "@/lib/site";
import { contributions } from "@/lib/content/impact";

export const metadata: Metadata = {
  title: "About",
  description:
    "ClickToStart Foundation is a not-for-profit, community-based group of volunteers formed to meet the technology needs of citizens of Trinidad & Tobago.",
};

export default function AboutPage() {
  return (
    <Container className="w-full pb-20">
      <div className="animate-rise pt-16">
        <TerminalLine className="mb-[22px] text-[13.5px]">&gt; cat about.md</TerminalLine>
        <h1 className="max-w-[22ch] text-balance text-[38px] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[50px]">
          A better T&amp;T, built through technology.
        </h1>
      </div>

      {/* Vision + mission */}
      <div className="mt-10 grid animate-rise gap-5 delay-1 md:grid-cols-2">
        <div className="rounded-2xl bg-tile p-9 text-white">
          <div className="font-mono text-[12.5px] text-on-tile-mono">our vision</div>
          <p className="mt-3 text-pretty text-[26px] font-extrabold leading-[1.25]">
            A digitally literate Trinidad and Tobago.
          </p>
        </div>
        <div className="rounded-2xl bg-subtle p-9">
          <div className="font-mono text-[12.5px] text-accent">our mission</div>
          <p className="mt-3 text-pretty text-[20px] font-bold leading-[1.4]">
            To teach those with little exposure to the digital world how to become masters of it,
            bridging the digital divide for marginalised groups.
          </p>
        </div>
      </div>

      {/* Narrative */}
      <p className="mt-12 max-w-[900px] animate-rise text-pretty text-[17px] leading-[1.7] text-sub delay-2">
        ClickToStart Foundation is a not-for-profit, community-based group of volunteers. We were
        formed to meet the technology needs of citizens of Trinidad and Tobago with little or no
        technological experience, giving our students the knowledge, skills, and sometimes the
        hardware needed to become productive members of the digital community.
      </p>

      {/* Partner */}
      <div className="mt-12 flex flex-col items-start gap-7 rounded-panel border border-line bg-surface p-9 sm:flex-row sm:items-center">
        <div className="flex h-[88px] w-[88px] flex-none items-center justify-center rounded-panel bg-subtle font-mono text-[12px] text-muted">
          [ logo ]
        </div>
        <div>
          <div className="font-mono text-[12.5px] text-accent">technical partner</div>
          <div className="mt-1.5 text-[22px] font-extrabold">{site.partner.name}</div>
          <p className="mt-1.5 max-w-[64ch] text-pretty text-[15px] leading-[1.55] text-sub">
            Santius is our technical partner, powering our robotics and AI camps with kits, tooling,
            and volunteer engineers who mentor our students.
          </p>
          <a
            href={site.partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 inline-block font-mono text-[13px] text-accent hover:underline"
          >
            {site.partner.label} →
          </a>
        </div>
      </div>

      {/* Contributions */}
      <div className="mt-12">
        <h2 className="mb-[22px] text-[28px] font-extrabold">How we contribute</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contributions.map((item) => (
            <Card key={item.n} hover="lift" className="p-6">
              <div className="font-mono text-[12.5px] text-accent">{item.n}</div>
              <div className="mt-[26px] text-[17px] font-bold">{item.title}</div>
              <p className="mt-1.5 text-[13.5px] leading-[1.5] text-sub">{item.note}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <CtaBand
          title="Ready to do your part?"
          text="Meet the team, join a program, or fund the next one."
          actions={
            <>
              <Button href="/donate" className="whitespace-nowrap text-[15.5px]">
                Donate →
              </Button>
              <Button href="/team" variant="outline" className="px-6 text-[14px] whitespace-nowrap">
                meet the team
              </Button>
            </>
          }
        />
      </div>
    </Container>
  );
}

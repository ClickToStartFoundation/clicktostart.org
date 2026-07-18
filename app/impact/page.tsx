import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { StatsGrid } from "@/components/shared/StatsGrid";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { site } from "@/lib/site";
import { alumni, milestones, spend, stats } from "@/lib/content/impact";
import { impactTestimonials } from "@/lib/content/testimonials";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "100+ graduates, 60+ donated computers, 110+ community hampers — and every dollar accounted for. The measurable impact of ClickToStart Foundation.",
};

const barTone: Record<string, string> = {
  accent: "bg-accent",
  tile: "bg-tile",
  muted: "bg-muted",
};

export default function ImpactPage() {
  return (
    <Container className="w-full pb-20">
      <div className="pt-16">
        <PageHero command="> impact --all" title="Moving our goals ever higher." />
      </div>

      <div className="mt-10 animate-rise delay-1">
        <StatsGrid stats={stats} variant="impact" />
      </div>

      {/* Milestones */}
      <section className="mt-14 animate-rise delay-2">
        <h2 className="mb-[22px] text-[28px] font-extrabold">Milestones</h2>
        <ul className="flex flex-col">
          {milestones.map((milestone) => (
            <li
              key={milestone.year}
              className="flex flex-wrap items-baseline gap-x-7 gap-y-1 border-b border-line px-1 py-5 transition-[padding] duration-300 ease-out-soft hover:pl-[18px]"
            >
              <span className="min-w-14 font-mono text-[14px] text-accent">{milestone.year}</span>
              <span className="text-[17px] font-bold sm:min-w-[280px]">{milestone.title}</span>
              <span className="text-[15px] text-sub">{milestone.note}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* In their words */}
      <section className="mt-14">
        <h2 className="mb-[22px] text-[28px] font-extrabold">In their words</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {impactTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.by} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* Transparency */}
      <section className="mt-14 grid items-start gap-12 border-t border-line pt-14 md:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="font-mono text-[12.5px] text-accent">where the money goes</div>
          <h2 className="mt-2.5 text-balance text-[30px] font-extrabold tracking-[-0.01em]">
            Every dollar, accounted for.
          </h2>
          <p className="mt-3.5 text-pretty text-[15.5px] leading-[1.65] text-sub">
            We&apos;re a registered not-for-profit in Trinidad &amp; Tobago, run entirely by
            volunteers. Nobody draws a salary. Our books are open, and our annual summary is
            available to anyone who asks.
          </p>
        </div>
        <div className="flex flex-col gap-[18px] pt-2">
          {spend.map((line) => (
            <div key={line.label}>
              <div className="flex justify-between text-[14.5px] font-bold">
                <span>{line.label}</span>
                <span className="font-mono text-accent">{line.pct}%</span>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-subtle">
                <div
                  className={`h-full rounded-full ${barTone[line.tone]}`}
                  style={{ width: `${line.pct}%` }}
                />
              </div>
            </div>
          ))}
          <p className="mt-1 font-mono text-[12px] text-muted">
            annual summary available on request · {site.email}
          </p>
        </div>
      </section>

      {/* Alumni corner */}
      <section className="mt-14 border-t border-line pt-14">
        <div className="font-mono text-[12.5px] text-accent">alumni corner</div>
        <h2 className="mt-2.5 text-[30px] font-extrabold tracking-[-0.01em]">
          Where our graduates are now
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {alumni.map((alum, i) => (
            <Card key={`${alum.cohort}-${i}`} hover="lift" className="p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-subtle font-mono text-[10.5px] text-muted">
                [ photo ]
              </div>
              <div className="mt-4 text-[17px] font-bold">{alum.name}</div>
              <div className="mt-1 font-mono text-[12px] text-accent">{alum.cohort}</div>
              <p className="mt-3 text-pretty text-[14.5px] leading-[1.55] text-sub">{alum.now}</p>
            </Card>
          ))}
        </div>
      </section>

      <div className="mt-14">
        <CtaBand
          title="Be part of the next number."
          text="Fund a class, a computer, or a hamper, or teach one yourself."
          actions={
            <>
              <Button href="/donate" className="whitespace-nowrap text-[15.5px]">
                Donate now →
              </Button>
              <Button href="/sponsors" variant="outline" className="px-6 text-[14px] whitespace-nowrap">
                sponsor a program
              </Button>
            </>
          }
        />
      </div>
    </Container>
  );
}

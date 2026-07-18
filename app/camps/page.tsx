import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Photo } from "@/components/ui/Photo";
import { Pill } from "@/components/ui/Pill";
import { camps, campActivities, campFacts } from "@/lib/content/camps";

export const metadata: Metadata = {
  title: "Summer Robotics & AI Camps",
  description:
    "Two free summer camps where young people across Trinidad & Tobago build real robots and train their first AI models, powered by our tech partner Santius.",
};

export default function CampsPage() {
  return (
    <Container className="w-full pb-20">
      {/* Hero */}
      <div className="animate-rise pt-16">
        <div className="mb-[26px] inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-btn px-4 py-2 font-mono text-[12.5px] text-accent">
          <span aria-hidden className="inline-block h-2 w-2 animate-live rounded-full bg-live" />
          happening_now · in partnership with Santius
        </div>
        <h1 className="max-w-[18ch] text-balance text-[42px] font-extrabold leading-[1.02] tracking-[-0.02em] sm:text-[58px]">
          Build a robot. Train an AI. Own your summer.
        </h1>
        <p className="mt-5 max-w-[56ch] text-pretty text-[18px] leading-[1.6] text-sub">
          Two free summer camps where young people across Trinidad &amp; Tobago build real robots,
          train their first AI models, and demo what they made. The kits, mentors, and engineering
          know-how come from our tech partner Santius.
        </p>
      </div>

      {/* Sessions */}
      <div className="mt-10 grid animate-rise gap-5 delay-1 md:grid-cols-2">
        {camps.map((camp) => (
          <Card key={camp.tag} hover="lift" className="p-8">
            <div className="font-mono text-[12.5px] text-accent">{camp.tag}</div>
            <div className="mt-2.5 text-[30px] font-extrabold">{camp.dates}</div>
            <p className="mt-1.5 text-[15px] text-sub">{camp.detail}</p>
            <div className="mt-[22px] flex flex-wrap gap-2.5">
              {campFacts.map((fact) => (
                <Pill key={fact}>{fact}</Pill>
              ))}
            </div>
            <Button href="/contact" className="mt-6 w-full py-[15px] text-[15.5px]">
              Request a spot →
            </Button>
          </Card>
        ))}
      </div>

      {/* What campers do */}
      <div className="mt-14 grid animate-rise items-start gap-10 delay-2 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="mb-[18px] text-[28px] font-extrabold">Ten days, three launches</h2>
          <ul className="flex flex-col gap-3">
            {campActivities.map((activity) => (
              <li
                key={activity.n}
                className="flex items-baseline gap-3.5 rounded-xl border border-line bg-surface px-5 py-[18px]"
              >
                <span className="font-mono text-[12.5px] text-accent">{activity.n}</span>
                <span className="text-[15.5px] leading-[1.5]">
                  <b>{activity.title}</b> {activity.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <Photo label="photo: robotics workshop" className="aspect-[4/3.2] rounded-panel" />
      </div>

      {/* Partner strip */}
      <div className="mt-14 flex flex-col items-start gap-7 rounded-panel border border-line bg-surface p-9 sm:flex-row sm:items-center">
        <div className="flex h-[88px] w-[88px] flex-none items-center justify-center rounded-panel bg-subtle font-mono text-[12px] text-muted">
          [ logo ]
        </div>
        <div>
          <div className="font-mono text-[12.5px] text-accent">tech partner</div>
          <div className="mt-1.5 text-[22px] font-extrabold">Powered by Santius</div>
          <p className="mt-1.5 max-w-[64ch] text-pretty text-[15px] leading-[1.55] text-sub">
            Santius brings the robotics kits, AI tooling, and volunteer engineers who mentor every
            camper, so a first robot and a first model are within reach of every kid in T&amp;T.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-panel bg-tile p-8 sm:flex-row sm:items-center sm:p-11">
        <div>
          <div className="text-[28px] font-extrabold text-white">Know a kid who&apos;d love this?</div>
          <div className="mt-1.5 text-[15.5px] text-on-tile-sub">
            Spots are limited. Request one now, or fund a camper&apos;s seat.
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" variant="accentOnTile" className="whitespace-nowrap text-[15.5px]">
            Request a spot
          </Button>
          <Button href="/donate" variant="outlineOnTile" className="px-6 text-[14px] whitespace-nowrap">
            fund a camper
          </Button>
        </div>
      </div>
    </Container>
  );
}

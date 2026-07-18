import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { team } from "@/lib/content/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "ClickToStart is a community-based group of volunteers working toward a single vision: a digitally literate Trinidad and Tobago.",
};

export default function TeamPage() {
  return (
    <Container className="w-full pb-20">
      <div className="pt-16">
        <PageHero
          command="> whoami"
          title="Volunteers, all the way down."
          intro="ClickToStart is a community-based group of volunteers working toward a single vision: a digitally literate Trinidad and Tobago."
        />
      </div>

      <div className="mt-10 grid animate-rise gap-5 delay-1 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => (
          <Card key={`${member.role}-${i}`} hover="lift" className="overflow-hidden">
            <Photo label="photo" className="aspect-[4/3]" />
            <div className="px-[22px] pt-5 pb-6">
              <div className="text-[18px] font-bold">{member.name}</div>
              <div className="mt-[5px] font-mono text-[12.5px] text-accent">{member.role}</div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-panel border-[1.5px] border-dashed border-line p-10 text-center">
        <div className="text-[24px] font-extrabold">This grid has room for you.</div>
        <p className="mt-1.5 text-[15px] text-sub">
          Engineers, teachers, drivers, organisers. Every skill counts.
        </p>
        <Link
          href="/volunteer"
          className="mt-5 inline-block rounded-full bg-tile px-7 py-3 text-[15px] font-bold text-tile-ink transition duration-150 ease-spring hover:scale-105"
        >
          Become a volunteer
        </Link>
      </div>
    </Container>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { teamSections } from "@/lib/content/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "ClickToStart is a community-based group of volunteers working toward a single vision: a digitally literate Trinidad and Tobago.",
};

function initialsOf(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.charAt(0) ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1]?.charAt(0) ?? "") : "";
  return (first + last).toUpperCase();
}

// ponytail: initials avatars until real headshots exist; swap for <Image> then.
function Avatar({ name }: { name: string }) {
  return (
    <div className="flex aspect-[4/3] items-center justify-center bg-tile">
      <span className="text-[40px] font-extrabold tracking-wide text-on-tile">
        {initialsOf(name)}
      </span>
    </div>
  );
}

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

      {teamSections.map((section) => (
        <section key={section.title} className="mt-12 animate-rise delay-1">
          <h2 className="mb-[22px] text-[28px] font-extrabold">{section.title}</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {section.members.map((member) => (
              <Card key={member.name} hover="lift" className="overflow-hidden">
                <Avatar name={member.name} />
                <div className="px-[22px] pt-5 pb-6">
                  <div className="text-[18px] font-bold">{member.name}</div>
                  {member.role && (
                    <div className="mt-[5px] font-mono text-[12.5px] text-accent">
                      {member.role}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>
      ))}

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

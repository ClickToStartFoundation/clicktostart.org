import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { FeaturedCamp } from "@/components/home/FeaturedCamp";
import { ProgramCard } from "@/components/shared/ProgramCard";
import { programs } from "@/lib/content/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Free training, donated hardware, and community drives across Trinidad & Tobago — all run by volunteers, all at no cost to participants.",
};

export default function ProgramsPage() {
  return (
    <Container className="pt-16 pb-20">
      <PageHero
        command="> ls ./programs"
        title="Every program starts with a click."
        intro="Free training, donated hardware, and community drives, all run by volunteers, all at no cost to participants."
      />

      <div className="mt-10 animate-rise delay-1">
        <FeaturedCamp variant="compact" />
      </div>

      <div className="mt-6 grid animate-rise gap-5 delay-2 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <ProgramCard key={program.slug} program={program} />
        ))}
      </div>
    </Container>
  );
}

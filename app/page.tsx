import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
import { FeaturedCamp } from "@/components/home/FeaturedCamp";
import { MissionBand } from "@/components/home/MissionBand";
import { StatsGrid } from "@/components/shared/StatsGrid";
import { ProgramCard } from "@/components/shared/ProgramCard";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { programs } from "@/lib/content/programs";
import { stats } from "@/lib/content/impact";
import { homeTestimonials } from "@/lib/content/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />

      <Container className="animate-rise pb-16 delay-3">
        <FeaturedCamp />
      </Container>

      <Container className="animate-rise pb-16 delay-4">
        <StatsGrid stats={stats} variant="home" />
      </Container>

      <Container className="pb-16">
        <h2 className="mb-6 text-[34px] font-extrabold tracking-[-0.01em]">
          Pick a way in<span className="text-accent">()</span>
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </Container>

      <MissionBand />

      <Container className="pb-[72px]">
        <h2 className="mb-6 text-[34px] font-extrabold tracking-[-0.01em]">Word from the community</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {homeTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.by} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </>
  );
}

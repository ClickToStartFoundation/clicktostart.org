import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SponsorSection } from "@/components/forms/SponsorSection";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Put your name on the next hundred futures. Sponsorship keeps ClickToStart's classes free, computers moving, and camps running across Trinidad & Tobago.",
};

export default function SponsorsPage() {
  return (
    <Container className="w-full">
      <SponsorSection />
    </Container>
  );
}

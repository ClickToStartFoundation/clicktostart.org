import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { VolunteerSection } from "@/components/forms/VolunteerSection";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Give an hour, start a future. Teach a class, fix a computer, drive a hamper, or lend the skill only you have. Everything ClickToStart does runs on volunteers.",
};

export default function VolunteerPage() {
  return (
    <Container className="w-full">
      <VolunteerSection />
    </Container>
  );
}

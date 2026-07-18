import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { DonateSection } from "@/components/forms/DonateSection";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Fund the next first click. Every dollar goes to free classes, refurbished computers, and community hampers across Trinidad & Tobago.",
};

export default function DonatePage() {
  return (
    <Container className="w-full">
      <DonateSection />
    </Container>
  );
}

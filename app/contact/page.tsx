import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactSection } from "@/components/forms/ContactSection";
import { FaqList } from "@/components/forms/FaqList";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions about a program, a donation, a partnership, or press? Pick a topic and we'll route it to the right volunteer at ClickToStart Foundation.",
};

export default function ContactPage() {
  return (
    <Container className="w-full">
      <ContactSection />
      <section className="max-w-[860px] pb-[88px]">
        <div className="font-mono text-[12.5px] text-accent">before you write</div>
        <h2 className="mt-2.5 mb-6 text-[30px] font-extrabold tracking-[-0.01em]">Quick answers</h2>
        <FaqList />
      </section>
    </Container>
  );
}

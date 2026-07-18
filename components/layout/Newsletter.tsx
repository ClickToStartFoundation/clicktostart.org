import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Newsletter() {
  return (
    <section className="border-t border-line bg-subtle" aria-label="Newsletter signup">
      <Container className="flex flex-col justify-between gap-8 py-11 md:flex-row md:items-center">
        <div>
          <h2 className="text-[22px] font-extrabold">Stay in the loop</h2>
          <p className="mt-1 text-[14.5px] text-sub">
            One short email when something worth telling happens. No spam, ever.
          </p>
        </div>
        <NewsletterForm />
      </Container>
    </section>
  );
}

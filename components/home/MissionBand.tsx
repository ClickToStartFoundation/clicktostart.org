import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function MissionBand() {
  return (
    <section className="relative mb-[72px] overflow-hidden bg-tile">
      <div
        aria-hidden
        className="pointer-events-none absolute right-12 -bottom-9 hidden animate-sway opacity-[0.12] md:block"
      >
        <Logo width={300} bodyStroke="#ffffff" bodyStrokeWidth={1.6} dotFill="#ffffff" cap="#ffffff" capWidth={1.2} />
      </div>
      <Container className="relative py-[72px]">
        <div className="font-mono text-[13px] text-on-tile-mono">&gt; our mission</div>
        <h2 className="mt-4 max-w-[26ch] text-balance text-[36px] font-extrabold leading-[1.15] tracking-[-0.015em] text-white sm:text-[42px]">
          Teach those with little exposure to the digital world how to become{" "}
          <span className="ink-highlight-strong">masters of it</span>.
        </h2>
        <Button href="/about" variant="accentOnTile" className="mt-7 text-[15.5px]">
          More about us →
        </Button>
      </Container>
    </section>
  );
}

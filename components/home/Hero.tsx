import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Photo } from "@/components/ui/Photo";
import { TerminalLine } from "@/components/ui/TerminalLine";

export function Hero() {
  return (
    <section aria-label="Introduction">
      <Container className="grid items-center gap-12 bg-[radial-gradient(var(--dot)_1.2px,transparent_1.2px)] bg-[length:26px_26px] pt-16 pb-16 lg:grid-cols-[1.15fr_1fr] lg:pt-[72px]">
        <div className="animate-rise">
          <TerminalLine className="mb-[26px] text-[13.5px]">&gt; empowering through technology</TerminalLine>
          <h1 className="text-balance text-[44px] font-extrabold leading-[1.02] tracking-[-0.02em] sm:text-[60px]">
            One <span className="font-mono text-[0.9em] text-accent">click</span> can start a{" "}
            <span className="ink-highlight">whole future</span>.
          </h1>
          <p className="mt-[22px] max-w-[48ch] text-pretty text-[18px] leading-[1.6] text-sub">
            We teach people with little exposure to the digital world how to master it. Free
            training, donated computers, and a community that shows up.
          </p>
          <div className="mt-[34px] flex flex-wrap items-center gap-3.5">
            <Button href="/donate" className="px-[30px] py-[15px] text-[16px] font-bold">
              Start a future →
            </Button>
            <Button href="/programs" variant="outline" className="px-[26px] py-[15px] text-[14.5px]">
              view programs
            </Button>
          </div>
        </div>

        <div className="relative animate-rise delay-1">
          <div className="absolute right-[18px] top-[18px] z-10 hidden animate-float drop-shadow-[0_10px_18px_rgba(20,53,107,0.2)] sm:block">
            <Logo width={76} bodyFill="var(--acc)" dotFill="#ffffff" cap="var(--ink)" />
          </div>
          <Photo label="photo: workshop" className="aspect-[4/3] rounded-panel" />
          <div className="absolute bottom-[-18px] left-[-18px] hidden items-center gap-3 rounded-soft border border-line bg-surface px-5 py-3.5 shadow-badge sm:flex">
            <Logo width={16} bodyFill="#4e96d9" dotFill="#ffffff" cap={null} />
            <div className="text-[14.5px] font-bold">100+ graduates and counting</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

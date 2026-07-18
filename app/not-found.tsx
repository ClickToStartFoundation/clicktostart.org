import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-[110px] text-center">
      <div className="font-mono text-[13.5px] text-accent">&gt; 404: signal lost</div>
      <h1 className="mt-4 text-[40px] font-extrabold tracking-[-0.02em] sm:text-[50px]">
        This page took a wrong turn.
      </h1>
      <p className="mx-auto mt-3 max-w-[46ch] text-[17px] text-sub">
        The link may be broken, or the page may have moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" className="text-[15.5px]">
          Back to home
        </Button>
        <Button href="/programs" variant="outline" className="px-6 text-[14px]">
          Browse programs
        </Button>
      </div>
    </Container>
  );
}

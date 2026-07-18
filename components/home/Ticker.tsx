import { tickerItems } from "@/lib/content/misc";

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <span
      aria-hidden={hidden}
      className="pr-3 font-mono text-[13px] tracking-[0.06em] text-sub"
    >
      {tickerItems.map((item) => (
        <span key={item}>
          {item} <span className="text-accent">·</span>{" "}
        </span>
      ))}
    </span>
  );
}

export function Ticker() {
  return (
    <section
      aria-label="What we do"
      className="mb-16 animate-rise overflow-hidden border-y border-line py-[13px] delay-2"
    >
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}

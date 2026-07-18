import { cn } from "@/lib/cn";

/** Mono "command" eyebrow with a blinking block cursor, e.g. `> ls ./programs`. */
export function TerminalLine({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("font-mono text-accent", className)}>
      {children}
      <span
        aria-hidden
        className="ml-1.5 inline-block h-[17px] w-2 bg-accent align-[-3px] animate-blink"
      />
    </div>
  );
}

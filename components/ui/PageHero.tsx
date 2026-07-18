import { cn } from "@/lib/cn";
import { TerminalLine } from "./TerminalLine";

/** The shared top-of-page hero: a mono command line, a big headline, an intro. */
export function PageHero({
  command,
  title,
  intro,
  titleClassName,
  className,
}: {
  command: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  titleClassName?: string;
  className?: string;
}) {
  return (
    <div className={cn("animate-rise", className)}>
      <TerminalLine className="mb-[22px] text-[13.5px]">{command}</TerminalLine>
      <h1
        className={cn(
          "text-balance text-[38px] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[50px]",
          titleClassName,
        )}
      >
        {title}
      </h1>
      {intro ? (
        <p className="mt-4 max-w-[56ch] text-pretty text-[17.5px] leading-[1.6] text-sub">{intro}</p>
      ) : null}
    </div>
  );
}

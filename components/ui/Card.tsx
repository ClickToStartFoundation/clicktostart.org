import { cn } from "@/lib/cn";

type CardHover = "none" | "lift" | "scale";

const hovers: Record<CardHover, string> = {
  none: "",
  lift: "transition duration-150 ease-spring hover:-translate-y-1 hover:shadow-card",
  scale: "transition duration-150 ease-spring hover:scale-[1.02]",
};

/** Bordered surface card — the workhorse container for stats, tiers, people, etc. */
export function Card({
  children,
  className,
  hover = "none",
}: {
  children: React.ReactNode;
  className?: string;
  hover?: CardHover;
}) {
  return (
    <div className={cn("rounded-2xl border border-line bg-surface", hovers[hover], className)}>
      {children}
    </div>
  );
}

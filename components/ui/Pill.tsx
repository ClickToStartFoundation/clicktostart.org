import { cn } from "@/lib/cn";

/** Small mono, border-outlined tag (camp facts, metadata chips). */
export function Pill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-line px-[13px] py-1.5 font-mono text-[12px] text-sub",
        className,
      )}
    >
      {children}
    </span>
  );
}

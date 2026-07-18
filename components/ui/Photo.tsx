import { cn } from "@/lib/cn";

/**
 * Placeholder for imagery the foundation drops in at launch. Mirrors the
 * design's `[ photo: … ]` frames; swap for <Image> once assets exist.
 */
export function Photo({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-subtle font-mono text-[14px] text-muted",
        className,
      )}
    >
      [ {label} ]
    </div>
  );
}

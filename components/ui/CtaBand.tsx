import { cn } from "@/lib/cn";

/** The recurring "do your part" banner that closes most pages. */
export function CtaBand({
  tone = "subtle",
  title,
  text,
  actions,
  className,
  titleClassName,
}: {
  tone?: "subtle" | "tile";
  title: React.ReactNode;
  text?: React.ReactNode;
  actions: React.ReactNode;
  className?: string;
  titleClassName?: string;
}) {
  const onTile = tone === "tile";
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-between gap-6 rounded-panel p-8 sm:flex-row sm:items-center sm:p-11",
        onTile ? "bg-tile" : "bg-subtle",
        className,
      )}
    >
      <div>
        <div
          className={cn(
            "text-[28px] font-extrabold text-balance",
            onTile ? "text-white" : "text-ink",
            titleClassName,
          )}
        >
          {title}
        </div>
        {text ? (
          <div className={cn("mt-1.5 text-[15.5px]", onTile ? "text-on-tile-sub" : "text-sub")}>
            {text}
          </div>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-3">{actions}</div>
    </div>
  );
}

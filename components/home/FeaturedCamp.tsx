import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * The "happening now" summer-camps banner. `home` is the large hero-style
 * card; `compact` is the slimmer version that tops the programs index.
 */
export function FeaturedCamp({ variant = "home" }: { variant?: "home" | "compact" }) {
  const compact = variant === "compact";
  return (
    <Link
      href="/camps"
      className={cn(
        "group relative flex flex-col items-start justify-between gap-6 overflow-hidden bg-tile transition duration-150 ease-spring hover:scale-[1.01] sm:flex-row sm:items-center",
        compact ? "rounded-2xl p-8 sm:px-9" : "rounded-panel p-8 sm:p-[40px_44px]",
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-14 -top-14 h-[280px] w-[280px] animate-drift rounded-full bg-accent/15"
      />
      {!compact && (
        <span
          aria-hidden
          className="pointer-events-none absolute right-[120px] -bottom-[90px] h-[200px] w-[200px] animate-drift-slow rounded-full bg-accent/10"
        />
      )}

      <div className="relative">
        <div className="mb-3 inline-flex items-center gap-2.5 font-mono text-[12.5px] text-on-tile-mono">
          <span aria-hidden className="inline-block h-2 w-2 animate-live rounded-full bg-live" />
          happening_now · summer 2026{compact ? " · with Santius" : ""}
        </div>
        <div
          className={cn(
            "font-extrabold tracking-[-0.01em] text-white",
            compact ? "text-[26px]" : "text-[32px]",
          )}
        >
          Summer Robotics &amp; AI Camps
        </div>
        <div className={cn("mt-1.5 text-on-tile-sub", compact ? "text-[14.5px]" : "text-[15.5px]")}>
          {compact
            ? "Build a robot, train an AI. Free camps, July 20–29 & August 3–14."
            : "Two free camps with our tech partner Santius. July 20–29 & August 3–14."}
        </div>
      </div>

      <span className="relative rounded-xl bg-accent px-6 py-3.5 text-[15px] font-bold whitespace-nowrap text-white transition duration-150 ease-spring group-hover:scale-105 sm:px-7">
        Explore the camps →
      </span>
    </Link>
  );
}

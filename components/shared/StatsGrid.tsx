"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Card } from "@/components/ui/Card";
import type { Stat } from "@/lib/content/types";

/**
 * Stat cards that count up with an ease-out cubic when scrolled into view —
 * the same 1.1s curve the prototype ran on mount.
 */
export function StatsGrid({
  stats,
  variant = "home",
  className,
}: {
  stats: Stat[];
  variant?: "home" | "impact";
  className?: string;
}) {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 1100);
          setProgress(1 - Math.pow(1 - t, 3));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const big = variant === "impact";

  return (
    <div ref={ref} className={cn("grid gap-5 sm:grid-cols-3", className)}>
      {stats.map((stat) => (
        <Card key={stat.key} hover={big ? "none" : "lift"} className={big ? "p-8" : "p-7"}>
          <div className="font-mono text-[12.5px] text-accent">{stat.key}</div>
          <div className={cn("mt-1 font-extrabold tabular-nums", big ? "text-[56px]" : "text-[42px]")}>
            {Math.round(stat.value * progress)}+
          </div>
          <div className={cn("mt-1 text-sub", big ? "text-[15px]" : "text-[14.5px]")}>{stat.label}</div>
        </Card>
      ))}
    </div>
  );
}

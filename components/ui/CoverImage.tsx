"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/** Image with a spinner while loading, then a smooth fade-in. */
export function CoverImage({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  /** Set for above-the-fold images (hero): loads eagerly at high priority. */
  priority?: boolean;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Cached images can finish before hydration; onLoad alone would never fire.
  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <div className={cn("relative overflow-hidden bg-subtle", className)}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" />
        </div>
      )}
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export function GalleryImage({
  src,
  width,
  height,
  alt,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Cached images can finish before hydration; onLoad alone would never fire.
  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <img
      ref={ref}
      src={src}
      width={width}
      height={height}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={cn(
        "mb-5 h-auto w-full rounded-2xl border border-line transition-[opacity,transform] duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
        loaded ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
      )}
    />
  );
}

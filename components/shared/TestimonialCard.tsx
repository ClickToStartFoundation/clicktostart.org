import { cn } from "@/lib/cn";
import type { Testimonial } from "@/lib/content/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const onTile = testimonial.tone === "tile";
  return (
    <figure
      className={cn(
        "rounded-2xl p-8",
        onTile ? "bg-tile text-white" : "border border-line bg-surface",
      )}
    >
      <blockquote className="text-pretty text-[19px] font-semibold leading-[1.55]">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className={cn("mt-5 font-mono text-[12.5px]", onTile ? "text-on-tile-mono" : "text-accent")}>
        {testimonial.by}
      </figcaption>
    </figure>
  );
}

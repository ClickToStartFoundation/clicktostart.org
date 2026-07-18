import { cn } from "@/lib/cn";

/** IBM Plex Mono accent text — the "terminal" labels used throughout the design. */
export function Mono({
  as: Tag = "span",
  className,
  children,
}: {
  as?: "span" | "div" | "p";
  className?: string;
  children: React.ReactNode;
}) {
  return <Tag className={cn("font-mono", className)}>{children}</Tag>;
}

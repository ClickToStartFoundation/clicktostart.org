import { cn } from "@/lib/cn";

/** Centered 1280px column with the design's 48px side gutters (24px on phones). */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full max-w-[1280px] px-6 sm:px-12", className)}>{children}</div>;
}

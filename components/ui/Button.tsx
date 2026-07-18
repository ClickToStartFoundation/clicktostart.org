import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant =
  | "accent"
  | "accentOnTile"
  | "tile"
  | "outline"
  | "outlineOnTile";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl cursor-pointer select-none text-center transition duration-150";

const variants: Record<ButtonVariant, string> = {
  accent: "bg-accent text-accent-ink font-display font-bold ease-spring hover:scale-105",
  accentOnTile: "bg-accent text-on-tile font-display font-bold ease-spring hover:scale-105",
  tile: "bg-tile text-tile-ink font-display font-bold ease-spring hover:scale-105",
  outline: "border-[1.5px] border-btn text-ink font-mono hover:border-accent",
  outlineOnTile: "border-[1.5px] border-white/40 text-on-tile font-mono hover:border-white",
};

/** Default comfortable padding; override via `className` for the design's many sizes. */
const defaultSize = "px-7 py-[15px] text-[15.5px]";

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type AsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined };

type AsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
  prefetch?: boolean;
  scroll?: boolean;
  "aria-label"?: string;
};

export function Button(props: AsButton | AsLink) {
  const { variant = "accent", className, children } = props;
  const classes = cn(base, variants[variant], defaultSize, className);

  if ("href" in props && props.href !== undefined) {
    const { href, target, rel, prefetch, scroll, ...rest } = props;
    return (
      <Link
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        prefetch={prefetch}
        scroll={scroll}
        className={classes}
        aria-label={rest["aria-label"]}
      >
        {children}
      </Link>
    );
  }

  // Strip the non-DOM props before spreading the rest onto <button>.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { href: _href, variant: _v, className: _c, children: _ch, ...buttonProps } = props;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

/**
 * The ClickToStart "bookmark" mark. Every on-brand instance in the design is
 * this one glyph recoloured, so the variants are expressed as color props
 * rather than separate SVGs.
 */
type LogoProps = {
  width?: number;
  className?: string;
  bodyFill?: string;
  bodyStroke?: string;
  bodyStrokeWidth?: number;
  dotFill?: string;
  cap?: string | null;
  capWidth?: number;
  title?: string;
};

export function Logo({
  width = 26,
  className,
  bodyFill = "var(--logo-fill)",
  bodyStroke,
  bodyStrokeWidth = 1.6,
  dotFill = "var(--logo-dot)",
  cap = "#4e96d9",
  capWidth = 2.5,
  title,
}: LogoProps) {
  const height = (width * 34) / 26;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 34"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <rect
        x="3"
        y="6"
        width="20"
        height="27"
        rx="10"
        fill={bodyStroke ? "none" : bodyFill}
        stroke={bodyStroke}
        strokeWidth={bodyStroke ? bodyStrokeWidth : undefined}
      />
      <rect x="11.5" y="11" width="3" height="8" rx="1.5" fill={dotFill} />
      {cap !== null ? (
        <path d="M13 6 V1 H23" stroke={cap} strokeWidth={capWidth} fill="none" strokeLinecap="round" />
      ) : null}
    </svg>
  );
}

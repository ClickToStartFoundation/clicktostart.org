import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

/** The shared confirmation screen every form swaps to on success. */
export function FormSuccess({
  title,
  children,
  backHref = "/",
  backLabel = "← back to home",
}: {
  title: string;
  children: React.ReactNode;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <div className="animate-rise px-6 py-[110px] text-center sm:px-12">
      <Logo
        width={54}
        className="mx-auto mb-6"
        bodyFill="var(--acc)"
        dotFill="var(--bg)"
        cap="var(--acc)"
        title="ClickToStart"
      />
      <h1 className="text-[36px] font-extrabold tracking-[-0.02em] sm:text-[44px]">{title}</h1>
      <p className="mx-auto mt-3.5 max-w-[52ch] text-[17px] text-sub">{children}</p>
      <Link href={backHref} className="mt-8 inline-block font-mono text-[14px] text-accent hover:underline">
        {backLabel}
      </Link>
    </div>
  );
}

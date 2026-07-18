import Link from "next/link";
import type { Program } from "@/lib/content/types";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Link
      href={`/programs/${program.slug}`}
      className="block rounded-2xl border border-transparent bg-subtle p-7 transition duration-150 ease-spring hover:scale-[1.02]"
    >
      <div className="mb-10 font-mono text-[12.5px] text-accent">{program.tag}</div>
      <div className="text-[21px] font-bold">{program.name}</div>
      <p className="mt-2 text-[14.5px] leading-[1.5] text-sub">{program.blurb}</p>
      <div className="mt-[18px] font-mono text-[13px] text-accent">learn more →</div>
    </Link>
  );
}

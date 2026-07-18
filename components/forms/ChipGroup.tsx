"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const chipBase =
  "cursor-pointer rounded-full border-[1.5px] px-4 py-[9px] font-mono text-[13px] transition duration-150 ease-spring";

const selectedClasses = {
  accent: "border-accent bg-accent text-accent-ink",
  tile: "border-tile bg-tile text-tile-ink",
} as const;

const unselected = "border-btn bg-transparent text-ink hover:border-accent";

/**
 * Selectable mono chips that submit through hidden inputs, so the enclosing
 * server-action form receives the selection with no client wiring.
 */
export function ChipGroup({
  name,
  options,
  multiple = false,
  initial = [],
  onSelect,
  variant = "accent",
  ariaLabel,
}: {
  name: string;
  options: string[];
  multiple?: boolean;
  initial?: string[];
  onSelect?: (values: string[]) => void;
  variant?: "accent" | "tile";
  ariaLabel?: string;
}) {
  const [selected, setSelected] = useState<string[]>(initial);

  function choose(option: string) {
    setSelected((prev) => {
      const next = multiple
        ? prev.includes(option)
          ? prev.filter((o) => o !== option)
          : [...prev, option]
        : [option];
      onSelect?.(next);
      return next;
    });
  }

  return (
    <div role="group" aria-label={ariaLabel} className="flex flex-wrap gap-2">
      {options.map((option) => {
        const on = selected.includes(option);
        return (
          <button
            key={option}
            type="button"
            aria-pressed={on}
            onClick={() => choose(option)}
            className={cn(chipBase, on ? selectedClasses[variant] : unselected)}
          >
            {option}
          </button>
        );
      })}
      {selected.map((value) => (
        <input key={value} type="hidden" name={name} value={value} />
      ))}
    </div>
  );
}

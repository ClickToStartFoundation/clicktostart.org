"use client";

import { useState } from "react";
import { faqs } from "@/lib/content/faqs";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q} className="overflow-hidden rounded-soft border border-line bg-surface">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-[16.5px] font-bold">{faq.q}</span>
              <span aria-hidden className="flex-none font-mono text-[18px] text-accent">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div className="px-6 pb-[22px] text-pretty text-[15px] leading-[1.65] text-sub">
                {faq.a}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

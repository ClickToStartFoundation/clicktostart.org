"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { submitDonation, type DonateState } from "@/app/actions";
import { idleState } from "@/lib/validation";
import { cn } from "@/lib/cn";
import {
  defaultAmountIndex,
  donationAmounts,
  donationFrequencies,
  donationImpact,
} from "@/lib/content/misc";
import { TerminalLine } from "@/components/ui/TerminalLine";
import { FieldError, TextInput } from "./Field";
import { SubmitButton } from "./SubmitButton";
import { FormSuccess } from "./FormSuccess";
import { useFieldErrors } from "./useFieldErrors";

export function DonateSection() {
  const [state, action] = useActionState<DonateState, FormData>(submitDonation, idleState);
  const { errors, clear } = useFieldErrors(state);
  const [freqIdx, setFreqIdx] = useState(0);
  const [amtIdx, setAmtIdx] = useState(defaultAmountIndex);

  if (state.status === "success") {
    return (
      <FormSuccess title="You just started something.">{state.thanksLine}</FormSuccess>
    );
  }

  const amount = donationAmounts[amtIdx] ?? donationAmounts[0];
  const frequency = donationFrequencies[freqIdx] ?? donationFrequencies[0];
  const monthly = frequency === "Monthly";
  const cta = monthly ? `Give TT${amount.label} monthly →` : `Donate TT${amount.label} →`;

  return (
    <div className="grid items-start gap-14 pt-16 pb-20 lg:grid-cols-2">
      {/* Pitch */}
      <div className="animate-rise">
        <TerminalLine className="mb-[22px] text-[13.5px]">&gt; run: donate</TerminalLine>
        <h1 className="text-balance text-[38px] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[50px]">
          Fund the next first click.
        </h1>
        <p className="mt-[18px] max-w-[44ch] text-pretty text-[17.5px] leading-[1.6] text-sub">
          Every dollar goes to free classes, refurbished computers, and community hampers across
          Trinidad &amp; Tobago.
        </p>
        <div className="mt-8 flex flex-col gap-3">
          {donationImpact.map((row) => (
            <div key={row.amt} className="flex items-baseline gap-3.5">
              <span className="min-w-[84px] font-mono text-[13px] text-accent">{row.amt}</span>
              <span className="text-[15px] text-sub">{row.text}</span>
            </div>
          ))}
        </div>
        <p className="mt-7 text-[14.5px] text-sub">
          Giving as an organisation?{" "}
          <Link href="/sponsors" className="font-bold text-accent hover:underline">
            Become a sponsor →
          </Link>
        </p>
      </div>

      {/* Form card */}
      <form
        action={action}
        noValidate
        className="animate-rise rounded-panel border border-line bg-surface p-8 shadow-panel delay-1 sm:p-11"
      >
        <div className="flex w-fit gap-2 rounded-full bg-subtle p-[5px]">
          {donationFrequencies.map((label, i) => (
            <button
              key={label}
              type="button"
              aria-pressed={freqIdx === i}
              onClick={() => setFreqIdx(i)}
              className={cn(
                "rounded-full px-5 py-[9px] text-[14px] font-bold transition-colors",
                freqIdx === i ? "bg-tile text-tile-ink" : "text-sub",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-[26px] mb-2.5 font-mono text-[12.5px] text-accent">amount (TTD)</div>
        <div className="grid grid-cols-4 gap-2.5">
          {donationAmounts.map((option, i) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={amtIdx === i}
              onClick={() => setAmtIdx(i)}
              className={cn(
                "cursor-pointer rounded-xl border-[1.5px] py-[13px] text-center font-mono text-[14px] transition-colors",
                amtIdx === i
                  ? "border-accent bg-accent text-accent-ink"
                  : "border-btn text-ink hover:border-accent",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="mt-6 mb-2.5 font-mono text-[12.5px] text-accent">your details</div>
        <div className="flex flex-col gap-2.5">
          <div>
            <TextInput
              name="name"
              autoComplete="name"
              placeholder="Full name"
              aria-label="Full name"
              error={Boolean(errors.name)}
              onInput={() => clear("name")}
            />
            <FieldError>{errors.name}</FieldError>
          </div>
          <div>
            <TextInput
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email address"
              aria-label="Email address"
              error={Boolean(errors.email)}
              onInput={() => clear("email")}
            />
            <FieldError>{errors.email}</FieldError>
          </div>
        </div>

        <input type="hidden" name="amount" value={amount.value} />
        <input type="hidden" name="frequency" value={frequency} />

        <SubmitButton pendingLabel="Processing…" className="mt-[22px] w-full py-4 text-[16px]">
          {cta}
        </SubmitButton>
        <p className="mt-3.5 text-center font-mono text-[11.5px] text-muted">
          secure · registered nonprofit · T&amp;T
        </p>
      </form>
    </div>
  );
}

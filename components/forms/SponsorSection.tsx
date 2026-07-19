"use client";

import { useActionState, useState } from "react";
import { submitSponsor, type SponsorState } from "@/app/actions";
import { idleState } from "@/lib/validation";
import { cn } from "@/lib/cn";
import {
  sponsorBenefits,
  sponsorSteps,
  sponsorTierChoices,
  sponsorTiers,
} from "@/lib/content/sponsors";
import { TerminalLine } from "@/components/ui/TerminalLine";
import { FieldError, TextArea, TextInput } from "./Field";
import { SubmitButton } from "./SubmitButton";
import { FormSuccess } from "./FormSuccess";
import { useFieldErrors } from "./useFieldErrors";

export function SponsorSection() {
  const [state, action] = useActionState<SponsorState, FormData>(submitSponsor, idleState);
  const { errors, clear } = useFieldErrors(state);
  const [tier, setTier] = useState("");

  if (state.status === "success") {
    return (
      <FormSuccess title="Let's build something.">
        Thanks {state.firstName} — expect a reply from us at {state.email} within the week.
      </FormSuccess>
    );
  }

  return (
    <>
      {/* Hero */}
      <div className="animate-rise pt-20">
        <TerminalLine className="mb-[22px] text-[13.5px]">&gt; partner --with clicktostart</TerminalLine>
        <h1 className="max-w-[22ch] text-balance text-[38px] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[50px]">
          Put your name on the next hundred futures.
        </h1>
        <p className="mt-[18px] max-w-[56ch] text-pretty text-[17.5px] leading-[1.6] text-sub">
          Sponsors keep our classes free, our computers moving, and our camps running. In return,
          your brand stands beside real, visible impact in Trinidad &amp; Tobago.
        </p>
      </div>

      {/* What sponsors get */}
      <div className="mt-10 grid animate-rise gap-5 delay-1 sm:grid-cols-2 lg:grid-cols-3">
        {sponsorBenefits.map((benefit) => (
          <div key={benefit.n} className="rounded-2xl border border-line bg-surface p-7">
            <div className="font-mono text-[12.5px] text-accent">{benefit.n}</div>
            <div className="mt-5 text-[18px] font-bold">{benefit.title}</div>
            <p className="mt-2 text-[14px] leading-[1.55] text-sub">{benefit.note}</p>
          </div>
        ))}
      </div>

      {/* Tiers */}
      <div className="mt-14 animate-rise delay-2">
        <h2 className="mb-[22px] text-[28px] font-extrabold">Sponsorship tiers</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {sponsorTiers.map((t) => {
            const selected = tier === t.name;
            const dark = Boolean(t.featured);
            return (
              <button
                key={t.name}
                type="button"
                aria-pressed={selected}
                onClick={() => setTier(t.name)}
                className={cn(
                  "cursor-pointer rounded-2xl p-[30px] text-left transition duration-150 ease-spring",
                  dark ? "bg-tile text-white" : "border border-line bg-surface text-ink",
                  !dark && selected && "border-accent",
                  selected && "ring-[2.5px] ring-accent",
                )}
              >
                <div className={cn("font-mono text-[12.5px]", dark ? "text-on-tile-mono" : "text-accent")}>
                  {t.tag}
                </div>
                <div className="mt-2.5 text-[24px] font-extrabold">{t.name}</div>
                <div className={cn("mt-1 font-mono text-[13px]", dark ? "text-on-tile-mono" : "text-accent")}>
                  {t.amt}
                </div>
                <p className={cn("mt-3.5 text-[14px] leading-[1.55]", dark ? "text-on-tile-sub" : "text-sub")}>
                  {t.note}
                </p>
                <div
                  className={cn(
                    "mt-5 rounded-xl py-3.5 text-center text-[14.5px] font-bold",
                    selected
                      ? "bg-accent text-accent-ink"
                      : dark
                        ? "bg-white/12 text-white"
                        : "bg-subtle text-ink",
                  )}
                >
                  {selected ? "✓ Selected" : `Choose ${t.name}`}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Partner + inquiry form */}
      <div className="grid items-start gap-12 pt-16 pb-24 lg:grid-cols-[1fr_1.1fr] lg:gap-[72px]">
        <div>
          <div className="text-[24px] font-extrabold">In good company</div>
          <p className="mt-2 text-pretty text-[15px] leading-[1.6] text-sub">
            Santius powers our robotics and AI camps with kits, tooling, and engineers. Your
            organisation could be next to them here.
          </p>
          <div className="mt-[22px] flex gap-3.5">
            <div className="flex h-16 w-[110px] items-center justify-center rounded-xl bg-subtle font-mono text-[11px] text-muted">
              Santius
            </div>
            <div className="flex h-16 w-[110px] items-center justify-center rounded-xl border-[1.5px] border-dashed border-btn font-mono text-[11px] text-muted">
              you?
            </div>
          </div>
          <div className="mt-9 flex flex-col gap-3">
            {sponsorSteps.map((step) => (
              <div key={step.n} className="flex items-baseline gap-3.5">
                <span className="min-w-[24px] font-mono text-[13px] text-accent">{step.n}</span>
                <span className="text-[15px] text-sub">{step.text}</span>
              </div>
            ))}
          </div>
        </div>

        <form
          action={action}
          noValidate
          className="rounded-panel border border-line bg-surface p-8 shadow-panel sm:p-11"
        >
          <div className="mb-3 font-mono text-[12.5px] text-accent">interested tier</div>
          <div className="flex flex-wrap gap-2">
            {sponsorTierChoices.map((label) => {
              const selected = tier === label;
              return (
                <button
                  key={label}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setTier(label)}
                  className={cn(
                    "cursor-pointer rounded-full border-[1.5px] px-4 py-[9px] font-mono text-[13px] transition duration-150 ease-spring",
                    selected
                      ? "border-tile bg-tile text-tile-ink"
                      : "border-btn bg-transparent text-ink hover:border-accent",
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <input type="hidden" name="tier" value={tier} />

          <div className="mt-7 flex flex-col gap-5">
            <div>
              <TextInput
                name="company"
                autoComplete="organization"
                placeholder="Organisation *"
                aria-label="Organisation"
                error={Boolean(errors.company)}
                onInput={() => clear("company")}
              />
              <FieldError>{errors.company}</FieldError>
            </div>
            <div>
              <TextInput
                name="name"
                autoComplete="name"
                placeholder="Contact person *"
                aria-label="Contact person"
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
                placeholder="Work email *"
                aria-label="Work email"
                error={Boolean(errors.email)}
                onInput={() => clear("email")}
              />
              <FieldError>{errors.email}</FieldError>
            </div>
            <TextArea
              name="message"
              placeholder="What would you like to support? (optional)"
              aria-label="What would you like to support?"
              rows={3}
            />
          </div>

          <SubmitButton pendingLabel="Sending…" className="mt-7 w-full py-4 text-[16px]">
            Start the conversation →
          </SubmitButton>
          <p className="mt-3.5 text-center font-mono text-[11.5px] text-muted">
            no minimums · registered nonprofit · T&amp;T
          </p>
        </form>
      </div>
    </>
  );
}

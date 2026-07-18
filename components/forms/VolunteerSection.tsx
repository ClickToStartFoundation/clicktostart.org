"use client";

import { useActionState } from "react";
import { submitVolunteer, type VolunteerState } from "@/app/actions";
import { idleState } from "@/lib/validation";
import { volunteerSkills } from "@/lib/content/misc";
import { TerminalLine } from "@/components/ui/TerminalLine";
import { FieldError, TextArea, TextInput } from "./Field";
import { ChipGroup } from "./ChipGroup";
import { SubmitButton } from "./SubmitButton";
import { FormSuccess } from "./FormSuccess";
import { useFieldErrors } from "./useFieldErrors";

const steps = [
  { n: "01", text: "Tell us who you are and what you're good at" },
  { n: "02", text: "We match you with a program that needs it" },
  { n: "03", text: "You show up. Somebody's future changes." },
];

export function VolunteerSection() {
  const [state, action] = useActionState<VolunteerState, FormData>(submitVolunteer, idleState);
  const { errors, clear } = useFieldErrors(state);

  if (state.status === "success") {
    return (
      <FormSuccess title="Welcome to the team.">
        Thanks {state.firstName} — check {state.email} in the next few days. We&apos;ll find the
        right spot for you.
      </FormSuccess>
    );
  }

  return (
    <div className="grid items-start gap-14 pt-20 pb-24 lg:grid-cols-[1fr_1.1fr]">
      <div className="animate-rise">
        <TerminalLine className="mb-[22px] text-[13.5px]">&gt; join --as volunteer</TerminalLine>
        <h1 className="text-balance text-[38px] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[50px]">
          Give an hour. Start a future.
        </h1>
        <p className="mt-[18px] max-w-[44ch] text-pretty text-[17.5px] leading-[1.6] text-sub">
          Everything we do runs on volunteers. Teach a class, fix a computer, drive a hamper across
          town, or lend the skill only you have.
        </p>
        <div className="mt-[30px] flex flex-col gap-3">
          {steps.map((step) => (
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
        className="animate-rise rounded-panel border border-line bg-surface p-8 shadow-panel delay-1 sm:p-11"
      >
        <div className="flex flex-col gap-5">
          <div>
            <TextInput
              name="name"
              autoComplete="name"
              placeholder="Full name *"
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
              placeholder="Email address *"
              aria-label="Email address"
              error={Boolean(errors.email)}
              onInput={() => clear("email")}
            />
            <FieldError>{errors.email}</FieldError>
          </div>
          <TextInput name="phone" type="tel" autoComplete="tel" placeholder="Phone (optional)" aria-label="Phone" />
          <div className="pt-1.5">
            <div className="mb-3 font-mono text-[12.5px] text-accent">i can help with *</div>
            <ChipGroup
              name="skills"
              options={volunteerSkills}
              multiple
              ariaLabel="Skills you can help with"
              onSelect={() => clear("skills")}
            />
            <FieldError>{errors.skills}</FieldError>
          </div>
          <TextArea
            name="message"
            placeholder="Anything else we should know? (optional)"
            aria-label="Anything else we should know?"
            rows={3}
          />
        </div>

        <SubmitButton pendingLabel="Signing you up…" className="mt-7 w-full py-4 text-[16px]">
          Sign me up →
        </SubmitButton>
        <p className="mt-3.5 text-center font-mono text-[11.5px] text-muted">
          we reply within a few days · no commitment yet
        </p>
      </form>
    </div>
  );
}

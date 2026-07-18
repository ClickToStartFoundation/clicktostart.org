"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions";
import { idleState } from "@/lib/validation";
import { site } from "@/lib/site";
import { contactTopics } from "@/lib/content/misc";
import { TerminalLine } from "@/components/ui/TerminalLine";
import { FieldError, TextArea, TextInput } from "./Field";
import { ChipGroup } from "./ChipGroup";
import { SubmitButton } from "./SubmitButton";
import { FormSuccess } from "./FormSuccess";
import { useFieldErrors } from "./useFieldErrors";

const details = [
  { label: "email", value: site.email },
  { label: "social", value: "@clicktostartfoundation on Facebook & Instagram" },
  { label: "based", value: site.location },
];

export function ContactSection() {
  const [state, action] = useActionState<ContactState, FormData>(submitContact, idleState);
  const { errors, clear } = useFieldErrors(state);

  if (state.status === "success") {
    return (
      <FormSuccess title="Message sent.">
        Thanks {state.firstName}, we&apos;ll get back to you at {state.email} soon.
      </FormSuccess>
    );
  }

  return (
    <div className="grid items-start gap-14 pt-20 pb-24 lg:grid-cols-[1fr_1.1fr]">
      <div className="animate-rise">
        <TerminalLine className="mb-[22px] text-[13.5px]">&gt; ping clicktostart</TerminalLine>
        <h1 className="text-balance text-[38px] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[50px]">
          Say hello.
        </h1>
        <p className="mt-[18px] max-w-[44ch] text-pretty text-[17.5px] leading-[1.6] text-sub">
          Questions about a program, a donation, a partnership, or press? Pick a topic and we&apos;ll
          route it to the right volunteer.
        </p>
        <div className="mt-[30px] flex flex-col gap-3.5">
          {details.map((detail) => (
            <div key={detail.label} className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-mono text-[13px] text-accent">{detail.label}</span>
              <span className="text-[15px] text-sub">{detail.value}</span>
            </div>
          ))}
        </div>
      </div>

      <form
        action={action}
        noValidate
        className="animate-rise rounded-panel border border-line bg-surface p-8 shadow-panel delay-1 sm:p-11"
      >
        <div className="mb-3 font-mono text-[12.5px] text-accent">this is about *</div>
        <ChipGroup
          name="topic"
          options={contactTopics}
          variant="tile"
          ariaLabel="What your message is about"
          onSelect={() => clear("topic")}
        />
        <FieldError>{errors.topic}</FieldError>

        <div className="mt-7 flex flex-col gap-5">
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
          <div>
            <TextArea
              name="message"
              placeholder="Your message *"
              aria-label="Your message"
              rows={4}
              error={Boolean(errors.message)}
              onInput={() => clear("message")}
              className="min-h-[90px]"
            />
            <FieldError>{errors.message}</FieldError>
          </div>
        </div>

        <SubmitButton pendingLabel="Sending…" className="mt-7 w-full py-4 text-[16px]">
          Send message →
        </SubmitButton>
      </form>
    </div>
  );
}

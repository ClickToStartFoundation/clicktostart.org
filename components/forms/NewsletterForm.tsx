"use client";

import { useActionState } from "react";
import { submitNewsletter, type NewsletterState } from "@/app/actions";
import { idleState } from "@/lib/validation";
import { FieldError, TextInput } from "./Field";
import { SubmitButton } from "./SubmitButton";
import { useFieldErrors } from "./useFieldErrors";

export function NewsletterForm() {
  const [state, action] = useActionState<NewsletterState, FormData>(submitNewsletter, idleState);
  const { errors, clear } = useFieldErrors(state);

  if (state.status === "success") {
    return (
      <div className="flex items-center gap-2.5 text-[15.5px] font-bold text-accent">
        <span aria-hidden className="text-[18px]">
          ✓
        </span>
        You&apos;re on the list. Talk soon.
      </div>
    );
  }

  return (
    <form action={action} noValidate className="w-full sm:w-auto">
      <div className="flex gap-2.5">
        <TextInput
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          aria-label="Your email address"
          error={Boolean(errors.email)}
          onInput={() => clear("email")}
          className="sm:w-[280px]"
        />
        <SubmitButton
          variant="tile"
          pendingLabel="…"
          className="px-[26px] py-[14px] text-[15px] font-bold whitespace-nowrap"
        >
          Subscribe
        </SubmitButton>
      </div>
      <FieldError>{errors.email}</FieldError>
    </form>
  );
}

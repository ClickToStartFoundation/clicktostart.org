import { z } from "zod";
import { donationAmounts, donationFrequencies } from "@/lib/content/misc";

/** Matches the handoff's email rule exactly, so behaviour is identical. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** One field, one message — empty and malformed never both fire. */
function emailField(requiredMsg: string, invalidMsg: string) {
  return z
    .string()
    .trim()
    .superRefine((value, ctx) => {
      if (!value) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: requiredMsg });
        return;
      }
      if (!EMAIL_RE.test(value)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: invalidMsg });
      }
    });
}

const allowedAmounts = donationAmounts.map((a) => a.value) as [number, ...number[]];

export const donateSchema = z.object({
  name: z.string().trim().min(1, "Please tell us your name."),
  email: emailField("We need an email to reach you.", "That email doesn't look right."),
  amount: z.coerce
    .number()
    .refine((n) => allowedAmounts.includes(n), "Pick a donation amount."),
  frequency: z.enum(donationFrequencies),
});

export const volunteerSchema = z.object({
  name: z.string().trim().min(1, "Please tell us your name."),
  email: emailField("We need an email to reach you.", "That email doesn't look right."),
  phone: z.string().trim().optional().default(""),
  skills: z.array(z.string()).min(1, "Pick at least one. There's no wrong answer."),
  message: z.string().trim().optional().default(""),
});

export const contactSchema = z.object({
  topic: z.string().trim().min(1, "Pick a topic so the right person sees this."),
  name: z.string().trim().min(1, "Please tell us your name."),
  email: emailField("We need an email to reply.", "That email doesn't look right."),
  message: z.string().trim().min(1, "The message is the important part."),
});

export const sponsorSchema = z.object({
  company: z.string().trim().min(1, "Which organisation is this for?"),
  name: z.string().trim().min(1, "Who should we ask for?"),
  email: emailField("We need an email to reply.", "That email doesn't look right."),
  tier: z.string().trim().optional().default(""),
  message: z.string().trim().optional().default(""),
});

export const newsletterSchema = z.object({
  email: emailField("Enter your email first.", "That email doesn't look right."),
});

/** First name for the friendly success line, mirroring the prototype. */
export function firstNameOf(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] || "friend";
}

export type FieldErrors = Record<string, string>;

/** Shared initial state for every `useActionState` form. */
export const idleState = { status: "idle" } as const;

/** Discriminated form state used by every `useActionState` form. */
export type FormResult<TSuccess> =
  | { status: "idle" }
  | { status: "error"; errors: FieldErrors; values: Record<string, string> }
  | ({ status: "success" } & TSuccess);

/** Flattens Zod's `fieldErrors` down to one message per field. */
export function firstErrors(error: z.ZodError): FieldErrors {
  const flat = error.flatten().fieldErrors;
  const out: FieldErrors = {};
  for (const [key, messages] of Object.entries(flat)) {
    if (messages && messages.length > 0) out[key] = messages[0]!;
  }
  return out;
}

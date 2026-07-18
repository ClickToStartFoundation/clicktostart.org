"use server";

import { deliver } from "@/lib/notify";
import { donationAmounts } from "@/lib/content/misc";
import {
  contactSchema,
  donateSchema,
  firstErrors,
  firstNameOf,
  newsletterSchema,
  sponsorSchema,
  volunteerSchema,
  type FormResult,
} from "@/lib/validation";

export type DonateState = FormResult<{ thanksLine: string }>;
export type VolunteerState = FormResult<{ firstName: string; email: string }>;
export type ContactState = FormResult<{ firstName: string; email: string }>;
export type SponsorState = FormResult<{ firstName: string; email: string }>;
export type NewsletterState = FormResult<{ email: string }>;

function str(data: FormData, key: string): string {
  const value = data.get(key);
  return typeof value === "string" ? value : "";
}

export async function submitDonation(
  _prev: DonateState,
  formData: FormData,
): Promise<DonateState> {
  const parsed = donateSchema.safeParse({
    name: str(formData, "name"),
    email: str(formData, "email"),
    amount: str(formData, "amount"),
    frequency: str(formData, "frequency"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      errors: firstErrors(parsed.error),
      values: { name: str(formData, "name"), email: str(formData, "email") },
    };
  }

  const { amount, frequency } = parsed.data;
  const label = donationAmounts.find((a) => a.value === amount)?.label ?? `$${amount}`;
  const monthly = frequency === "Monthly";

  await deliver({ kind: "donation", payload: parsed.data });

  return {
    status: "success",
    thanksLine: monthly
      ? `Your TT${label}/month keeps classes free, all year round. A receipt is on its way to your inbox.`
      : `Your TT${label} gift is on its way to work. A receipt is on its way to your inbox.`,
  };
}

export async function submitVolunteer(
  _prev: VolunteerState,
  formData: FormData,
): Promise<VolunteerState> {
  const parsed = volunteerSchema.safeParse({
    name: str(formData, "name"),
    email: str(formData, "email"),
    phone: str(formData, "phone"),
    skills: formData.getAll("skills").filter((s): s is string => typeof s === "string"),
    message: str(formData, "message"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      errors: firstErrors(parsed.error),
      values: {
        name: str(formData, "name"),
        email: str(formData, "email"),
        phone: str(formData, "phone"),
        message: str(formData, "message"),
      },
    };
  }

  await deliver({ kind: "volunteer", payload: parsed.data });
  return { status: "success", firstName: firstNameOf(parsed.data.name), email: parsed.data.email };
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = contactSchema.safeParse({
    topic: str(formData, "topic"),
    name: str(formData, "name"),
    email: str(formData, "email"),
    message: str(formData, "message"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      errors: firstErrors(parsed.error),
      values: {
        name: str(formData, "name"),
        email: str(formData, "email"),
        message: str(formData, "message"),
      },
    };
  }

  await deliver({ kind: "contact", payload: parsed.data });
  return { status: "success", firstName: firstNameOf(parsed.data.name), email: parsed.data.email };
}

export async function submitSponsor(
  _prev: SponsorState,
  formData: FormData,
): Promise<SponsorState> {
  const parsed = sponsorSchema.safeParse({
    company: str(formData, "company"),
    name: str(formData, "name"),
    email: str(formData, "email"),
    tier: str(formData, "tier"),
    message: str(formData, "message"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      errors: firstErrors(parsed.error),
      values: {
        company: str(formData, "company"),
        name: str(formData, "name"),
        email: str(formData, "email"),
        message: str(formData, "message"),
      },
    };
  }

  await deliver({ kind: "sponsor", payload: parsed.data });
  return { status: "success", firstName: firstNameOf(parsed.data.name), email: parsed.data.email };
}

export async function submitNewsletter(
  _prev: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const parsed = newsletterSchema.safeParse({ email: str(formData, "email") });

  if (!parsed.success) {
    return {
      status: "error",
      errors: firstErrors(parsed.error),
      values: { email: str(formData, "email") },
    };
  }

  await deliver({ kind: "newsletter", payload: parsed.data });
  return { status: "success", email: parsed.data.email };
}

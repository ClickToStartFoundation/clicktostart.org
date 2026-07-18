import "server-only";

/**
 * Single delivery seam for every form submission.
 *
 * Today it logs on the server so submissions are visible in dev. Swap the body
 * for an email provider (Resend, Postmark…), a database insert, or a CRM call
 * and every form is wired up at once — no component changes required.
 */
export type Submission = {
  kind: "donation" | "volunteer" | "contact" | "sponsor" | "newsletter";
  payload: Record<string, unknown>;
};

export async function deliver(submission: Submission): Promise<void> {
  console.info(`[ctsf] ${submission.kind} submission`, submission.payload);
  // e.g. await resend.emails.send({ to: site.email, subject: ..., text: ... });
}

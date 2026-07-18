import type { SponsorTier } from "./types";

export const sponsorTiers: SponsorTier[] = [
  {
    name: "Classroom",
    tag: "tier 01",
    amt: "TT$5,000 / yr",
    note: "Fund a full course run. Logo on the program page and a seat at graduation.",
  },
  {
    name: "Program",
    tag: "tier 02",
    amt: "TT$15,000 / yr",
    note: "Adopt a whole program for a year, with a named cohort and a yearly impact report.",
    featured: true,
  },
  {
    name: "Foundation",
    tag: "tier 03",
    amt: "TT$40,000+ / yr",
    note: "Everything we run, with your name beside it. Co-planned initiatives and events.",
  },
];

/** Tier options offered in the inquiry form's chip selector. */
export const sponsorTierChoices = [...sponsorTiers.map((t) => t.name), "Not sure yet"];

export const sponsorBenefits = [
  {
    n: "01 / visibility",
    title: "Your logo where it counts",
    note: "On our site, at graduations, camps, and community events.",
  },
  {
    n: "02 / proof",
    title: "An impact report, not a thank-you note",
    note: "Numbers, photos, and stories showing exactly what your money did.",
  },
  {
    n: "03 / people",
    title: "Ways for your team to show up",
    note: "Volunteer days, guest teaching, and demo-day invitations.",
  },
];

export const sponsorSteps = [
  { n: "01", text: "Send the form. We reply within a week." },
  { n: "02", text: "A short call to match you with a program." },
  { n: "03", text: "You fund it, we run it, you see the results." },
];

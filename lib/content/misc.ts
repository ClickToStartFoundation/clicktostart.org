/** Small content lists that don't warrant a module of their own. */

export const tickerItems = [
  "free tech training",
  "donated computers",
  "programming for teens",
  "adult literacy classes",
  "girls in ict",
  "community hampers",
  "summer robotics & ai camps",
  "click to start",
];

export const donationAmounts = [
  { label: "$100", value: 100 },
  { label: "$250", value: 250 },
  { label: "$500", value: 500 },
  { label: "$2000", value: 2000 },
] as const;

export const defaultAmountIndex = 1;

export const donationFrequencies = ["One-time", "Monthly"] as const;
export type DonationFrequency = (typeof donationFrequencies)[number];

export const donationImpact = [
  { amt: "TT$100", text: "course materials for one student" },
  { amt: "TT$500", text: "a goodwill hamper for a family" },
  { amt: "TT$2000", text: "a refurbished computer, delivered" },
];

export const volunteerSkills = [
  "teaching",
  "programming",
  "hardware repair",
  "logistics & driving",
  "events",
  "design & media",
];

export const contactTopics = [
  "donating",
  "joining a program",
  "volunteering",
  "partnership",
  "press",
  "something else",
];

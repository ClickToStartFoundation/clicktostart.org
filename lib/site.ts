/** Global site configuration — the single source for brand, contact and links. */

export const site = {
  name: "ClickToStart Foundation",
  wordmark: { lead: "CLICK", rest: "TOSTART" },
  tagline: "empowering through technology",
  description:
    "ClickToStart Foundation is a volunteer-run nonprofit teaching Trinidad & Tobago to master the digital world — free training, donated computers, and a community that shows up.",
  url: "https://clicktostartfoundation.org",
  email: "clicktostartfoundation@gmail.com",
  location: "Trinidad & Tobago",
  foundedYear: 2016,
  currentYear: 2026,
  social: {
    facebook: "https://www.facebook.com/ClickToStartFoundation/",
    instagram: "http://instagram.com/clicktostartfoundation/",
  },
  partner: {
    name: "Santius",
    url: "https://santiuslabs.com",
    label: "santiuslabs.com",
  },
} as const;

export type Site = typeof site;

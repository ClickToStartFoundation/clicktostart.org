import type { Alum, Contribution, Milestone, SpendLine, Stat } from "./types";

export const stats: Stat[] = [
  { key: "graduates.count", value: 100, label: "literacy & programming graduates" },
  { key: "computers.donated", value: 60, label: "machines for online learning" },
  { key: "hampers.delivered", value: 110, label: "goodwill hampers to communities" },
];

export const milestones: Milestone[] = [
  { year: "2020", title: "Foundation formed", note: "Volunteers organise around one vision: a digitally literate T&T." },
  { year: "2022", title: "Computers for Kids", note: "60+ machines refurbished and delivered for online learning." },
  { year: "2023", title: "Giving a Gift of Tech", note: "Christmas drive puts technology under community trees." },
  { year: "2024", title: "Girls in ICT Day", note: "First annual campaign for girls and young women in tech." },
];

export const spend: SpendLine[] = [
  { label: "Programs & training", pct: 80, tone: "accent" },
  { label: "Computers & equipment", pct: 15, tone: "tile" },
  { label: "Operations", pct: 5, tone: "muted" },
];

export const alumni: Alum[] = [
  {
    name: "[ Name ]",
    cohort: "programming for teens '23",
    now: "Studying computer science at UWI St. Augustine. Came in never having written a line of code.",
  },
  {
    name: "[ Name ]",
    cohort: "adult tech literacy '24",
    now: "Runs her shop's accounts and orders online herself. Started with us learning to use a mouse.",
  },
  {
    name: "[ Name ]",
    cohort: "programming for teens '22",
    now: "Landed a junior developer role this year. Still comes back to mentor the new cohort.",
  },
];

export const contributions: Contribution[] = [
  { n: "01", title: "Community Outreach", note: "Meeting people where they are, across T&T." },
  { n: "02", title: "Community Development", note: "Hampers, drives, and neighbourhood support." },
  { n: "03", title: "Free Tech Training", note: "Classes at no cost, from first click to code." },
  { n: "04", title: "Educational Technology", note: "Donated hardware that keeps learning online." },
];

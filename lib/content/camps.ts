import type { Camp } from "./types";

export const camps: Camp[] = [
  { tag: "camp one · july", dates: "July 20 – 29", detail: "Eight days of building, coding, and a Friday demo showcase." },
  { tag: "camp two · august", dates: "August 3 – 14", detail: "The extended session: two full weeks, deeper AI projects." },
];

export const campFacts = ["ages 11–17", "weekdays · 9am–3pm", "free · kits provided"];

export const campActivities = [
  {
    n: "01",
    title: "Build & code a robot.",
    text: "Assemble a real kit, then program it to sense, move, and react.",
  },
  {
    n: "02",
    title: "Train your first AI.",
    text: "Teach a model to recognise images and voices, and learn how it thinks.",
  },
  {
    n: "03",
    title: "Demo day.",
    text: "Team up for a final challenge and show your build to family and friends.",
  },
];

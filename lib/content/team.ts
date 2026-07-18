import type { TeamMember } from "./types";

export type TeamSection = { title: string; members: TeamMember[] };

export const teamSections: TeamSection[] = [
  {
    title: "Directors",
    members: [
      { name: "Abigail Wren", role: "president" },
      { name: "Sergio Mathurin", role: "vice president" },
      { name: "Roger Lezama", role: "treasurer" },
      { name: "Jo-Ann Georges", role: "director" },
    ],
  },
  {
    title: "Volunteers",
    members: [
      { name: "Alana Warden" },
      { name: "Matthew Forbes" },
      { name: "Summer Cooper" },
      { name: "Michaela Noel" },
      { name: "Keston Fraser" },
      { name: "Rayn Cooper" },
      { name: "Uche Chiemeke" },
      { name: "Stephen Demsey" },
      { name: "Adrienne Dolly" },
      { name: "Dahshah Semper" },
      { name: "Michael Bristol" },
      { name: "David Bailey" },
      { name: "Kiara Chelsea Lewis" },
      { name: "Ann Smith" },
      { name: "Samantha Young" },
      { name: "Dylan Deyal" },
      { name: "Sarah Sellier" },
    ],
  },
  {
    title: "Specialist Volunteers",
    members: [
      { name: "Joshu Morris" },
      { name: "Rebecca Robinson" },
      { name: "Naresh Seegobin" },
    ],
  },
  {
    title: "Alumni",
    members: [
      { name: "Julien David" },
      { name: "Gabriel Ghany" },
      { name: "Mary C. Codrington" },
      { name: "Marcus Sanatan" },
    ],
  },
];

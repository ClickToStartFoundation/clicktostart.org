import type { Story } from "./types";

export const stories: Story[] = [
  {
    slug: "graduation-2025",
    tag: "programs",
    date: "dec 2025",
    title: "Twenty-four new programmers walked the stage",
    excerpt: "Our biggest teens cohort yet finished with working projects and very proud families.",
    paras: [
      "The community centre was standing room only. Twenty-four teenagers, most of whom had never touched a code editor eight months ago, presented what they built: a bus-route finder, a homework tracker, a game about mangrove conservation that made the back row laugh out loud.",
      "The projects mattered less than what came with them. Parents who had watched their kids disappear into our Saturday sessions finally saw what the fuss was about. Three graduates asked, before the chairs were stacked, how they could come back as mentors.",
      "Every seat in that room was funded by a donation. The average cost of getting one student from first click to demo day is about TT$350. Somebody covered each one of them, and this is what it bought.",
    ],
  },
  {
    slug: "hamper-drive-2025",
    tag: "community",
    date: "dec 2025",
    title: "Sixty hampers out before Christmas",
    excerpt: "Volunteers packed and delivered food and essentials across three communities in two weekends.",
    paras: [
      "It started, as it always does, with a garage full of boxes and a spreadsheet. Two weekends later, sixty households had hampers on their tables: rice, flour, oil, tinned goods, school supplies where we knew there were children.",
      "The drives are how many families first meet us. A hamper conversation at the door becomes a question about the computer classes, which becomes a registration, which sometimes becomes a graduation. Meeting a basic need first is the point.",
      "Volunteer drivers used their own cars and their own Saturdays. Donations covered the contents. Nothing else was needed, because nothing else ever is.",
    ],
  },
  {
    slug: "camp-demo-day-2026",
    tag: "camps",
    date: "jul 2026",
    title: "The robots took over the community centre",
    excerpt: "Demo day at our first Santius robotics camp. Line-following robots, trained AI models, and one very loud cheering section.",
    paras: [
      "Ten days earlier, most of these campers had never assembled anything more electronic than a phone charger. On demo day, their robots followed lines, dodged obstacles, and in one memorable case refused to do either until its builder gave it a pep talk.",
      "The AI projects surprised everyone. One team trained a model to recognise local fruit. Another built a voice command that only worked in Trini slang, which they insisted was a feature.",
      "The kits and mentors came from our partner Santius. The campers came from everywhere. The second camp starts in August, and there is a waiting list.",
    ],
  },
  {
    slug: "girls-in-ict-2026",
    tag: "girls in ict",
    date: "apr 2026",
    title: "A full room for Girls in ICT Day",
    excerpt: "Talks, hands-on labs, and role models who looked like the audience.",
    paras: [
      "The question we heard most this year was not about coding. It was \"you do this for a job?\" asked of the women engineers, designers, and analysts who gave up their Thursday to be there.",
      "Girls rotated through hands-on labs: a first webpage, a small robot, a design exercise. The energy in the room shifted somewhere around the second lab, from polite to possessive. They stopped asking permission to touch things.",
      "Several signed up for Programming for Teens on the spot. That pipeline, from one inspiring day to a full course to whatever comes after, is exactly why this event exists.",
    ],
  },
  {
    slug: "gift-of-tech-2023",
    tag: "outreach",
    date: "dec 2023",
    title: "Giving A Gift Of Tech!",
    excerpt:
      "A Youth Tech Talk and Christmas gift-giving day at UWI St Augustine — robots, Raspberry Pi, and a tech Santa for 25+ children.",
    paras: [
      "On December 9, 2023, The UWI St Augustine campus hosted more than twenty-five children from underserved communities for a day that was half tech talk, half Christmas party. Director Abigail Wren opened with the point of it all: technology is how opportunities get created for our youth.",
      "ICT experts Ria Jack and Richard Ince shared what working in technology actually looks like, and the demos stole the show — robotics and Raspberry Pi builds from scholarship winner Sarah Sellier and computer scientist Nicholas Mendez. For most of the room it was their first time seeing a robot up close, let alone one they were allowed to touch.",
      "Then came a “tech” Santa with gifts sponsored by Republic Bank Ltd, and a Christmas lunch set to pannist music. Since 2013 the foundation has worked to bridge the technology skills gap for marginalised groups in Trinidad — some days that looks like a classroom, and some days it looks like Christmas.",
    ],
  },
];

export const storySlugs = stories.map((s) => s.slug);

export function getStory(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

/** Venture cards â€” every claim here traces back to Amin's own material
 *  (LinkedIn profile, his posts, the brief). No invented statistics. */

export interface Venture {
  id: string;
  no: string;
  tag: string;
  title: string;
  subtitle?: string;
  status: string;
  hook: string;
  description: string;
  chips: string[];
  action?: { label: string; href: string; external?: boolean };
  story?: { title: string; paragraphs: string[] };
  /** meta footer row; metaHref turns the right-hand label into a link */
  meta: [string, string];
  metaHref?: string;
}

export const VENTURES: Venture[] = [
  {
    id: "illustra",
    no: "01",
    tag: "THE BIG ONE",
    title: "Illustra",
    status: "Out in the world",
    hook: "Structured reasoning, not passive recall.",
    description:
      "An AI-native learning system I co-founded. Notes, uploaded materials and flashcards in one place, with AI that adapts to your exam board, expands explanations, fact-checks your work and connects related ideas â€” running on-device, so it works offline too.",
    chips: ["EdTech", "On-device AI", "Co-founder Â· CTO"],
    action: {
      label: "Meet Illustra â†—ï¸Ž",
      href: "https://www.illustraedu.com",
      external: true,
    },
    story: {
      title: "Behind the build",
      paragraphs: [
        "Illustra began as an idea two years ago: one place to write, organise and actually learn from your notes, instead of five apps duct-taped together. The early version placed 3rd at the Cambridge Startup Competition â€” and instead of stopping there, we pivoted and rebuilt.",
        "Since then the team has grown into a full study system: handwriting that turns into text, AI that enhances notes against your own exam board, flashcards, materials you can interrogate, and a graph of linked pages. It is now live with its first public cohort.",
        "My role sits across product research, development and the technical architecture â€” from concept through closed alpha to a public launch.",
      ],
    },
    meta: ["Kotlin / Compose / On-device AI", "Live at illustraedu.com â†—ï¸Ž"],
    metaHref: "https://www.illustraedu.com",
  },
  {
    id: "glasses",
    no: "02",
    tag: "SELF-SAFETY",
    title: "Smart glasses",
    status: "Exploring",
    hook: "Face recognition that pings you if you're in danger.",
    description:
      "Wearable computing for self-safety: glasses that see what you see and use face recognition to ping you if you're in danger, before you have to reach for a phone. An ambient, hands-free layer that stays with you. (The glasses are not awake yet. But they will be.)",
    chips: ["Wearable computing", "Face recognition", "Self-safety"],
    action: { label: "Ask me about it â†—ï¸Ž", href: "#contact" },
    meta: ["AI-native wearables", "Danger ping Â· face recognition"],
  },
  {
    id: "robotics",
    no: "03",
    tag: "MACHINES THAT SENSE",
    title: "Robotics & sensor fusion",
    status: "Early research",
    hook: "Machines that understand the world together.",
    description:
      "Distributed sensing and sensor fusion as an extension of human perception â€” fleets of cheap sensors fused into one working picture of physical space. Reading, prototyping and asking the questions before the answers exist. It watches so you don't have to. It watches anyway.",
    chips: ["Distributed sensing", "Humanoid robotics", "Sensor fusion"],
    action: { label: "Ask me about it â†—ï¸Ž", href: "#contact" },
    meta: ["Many sensors â†’ one model", "Extension of human sensing"],
  },
];

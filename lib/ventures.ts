/** Venture cards — factual descriptions and project notes. */

export interface Venture {
  id: string;
  no: string;
  tag: string;
  title: string;
  status: string;
  hook: string;
  description: string;
  chips: string[];
  action?: { label: string; href: string; external?: boolean };
  story?: { title: string; paragraphs: string[] };
  meta: [string, string];
  metaHref?: string;
}

export const VENTURES: Venture[] = [
  {
    id: "illustra",
    no: "01",
    tag: "EDTECH",
    title: "Illustra",
    status: "Out in the world",
    hook: "Structured reasoning, not passive recall.",
    description: "An AI-native learning system I co-founded. Notes, uploaded materials and flashcards work together, with on-device AI that adapts to exam boards, expands explanations, fact-checks work, and connects related ideas offline.",
    chips: ["EdTech", "On-device AI", "Co-founder · CTO"],
    action: { label: "Visit Illustra ↗", href: "https://www.illustraedu.com", external: true },
    story: {
      title: "Behind the build",
      paragraphs: [
        "Illustra began as an idea: one place to write, organise, and learn from notes. An early version placed third at the Cambridge Startup Competition. We then pivoted and rebuilt.",
        "The product now includes handwriting-to-text, AI-enhanced notes, flashcards, materials you can query, and linked pages. It is live with its first public cohort.",
        "My role covers product research, development, and technical architecture, from the first concept through launch.",
      ],
    },
    meta: ["Kotlin / Compose / on-device AI", "Live at illustraedu.com"],
    metaHref: "https://www.illustraedu.com",
  },
  {
    id: "april",
    no: "02",
    tag: "CARBON FINANCE RESEARCH",
    title: "APRIL",
    status: "Research",
    hook: "Carbon data, verification, and finance.",
    description: "APRIL is my carbon finance research project. Its field-verified pilot covered four carbon plots and documented a timeline moving from six months to 18 days.",
    chips: ["Carbon finance", "Research", "Field pilot"],
    story: {
      title: "About the project",
      paragraphs: [
        "APRIL examines how carbon-project data and verification connect to finance. The pilot used four carbon plots. Project notes record a six-month-to-18-day timeline and describe the work as field verified.",
        "The research received a $5,000 grant for carbon finance research.",
      ],
    },
    meta: ["Four carbon plots", "Field-verified pilot"],
  },
  {
    id: "glasses",
    no: "03",
    tag: "SELF-SAFETY",
    title: "Smart glasses",
    status: "Exploring",
    hook: "A hands-free safety alert when it matters.",
    description: "A wearable-computing concept using face recognition to alert the wearer to a potential danger, without first reaching for a phone.",
    chips: ["Wearable computing", "Face recognition", "Self-safety"],
    action: { label: "Ask me about it ↗", href: "#contact" },
    meta: ["AI-native wearables", "Safety alert concept"],
  },
  {
    id: "robotics",
    no: "04",
    tag: "MACHINES THAT SENSE",
    title: "Robotics & sensor fusion",
    status: "Early research",
    hook: "Many sensors, one working picture.",
    description: "Research into distributed sensing and sensor fusion: combining data from low-cost sensors to build a shared model of physical space and extend human perception.",
    chips: ["Distributed sensing", "Humanoid robotics", "Sensor fusion"],
    action: { label: "Ask me about it ↗", href: "#contact" },
    meta: ["Many sensors → one model", "Research and prototyping"],
  },
];

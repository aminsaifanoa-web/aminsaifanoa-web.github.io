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
    chips: ["EdTech", "On-device AI", "Product Research and Development Lead, Co-Founder"],
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
    description: "APRIL is my carbon finance research project. Its field-verified work covered 3 pilot sequestration sites.",
    chips: ["Carbon finance", "Research", "Field pilot"],
    story: {
      title: "About the project",
      paragraphs: [
        "APRIL examines how carbon-project data and verification connect to finance across 3 pilot sequestration sites.",
        "The research received a $5,000 grant for carbon finance research.",
      ],
    },
    meta: ["3 pilot sequestration sites", "Field-verified pilot"],
  },
  {
    id: "glasses",
    no: "03",
    tag: "WEARABLE COMPUTING",
    title: "Outsourced Thinking",
    status: "Exploring",
    hook: "A new layer for perception and personal security.",
    description: "A smart-glasses infrastructure combining facial analysis and augmented reality to support personal security—for example, surfacing potential threats and relevant context in the wearer’s field of view.",
    chips: ["Smart glasses", "Facial analysis", "Augmented reality"],
    meta: ["Wearable infrastructure", "Personal security concept"],
  },
  {
    id: "humanized-computing",
    no: "04",
    tag: "HUMANIZED COMPUTING",
    title: "Humanized Computing",
    status: "Exploring",
    hook: "Human perception as part of the compute stack.",
    description: "A drone-swarm control game designed in a 3D virtual simulator on Unity. Human operators control groups of drones, benchmarking execution performance and cost against AI- and vision-model-driven autonomous drones across search-and-rescue tasks and obstacle-course navigation.",
    chips: ["Human-in-the-loop computing", "Distributed cognition", "Drone swarms"],
    meta: ["Human-guided systems", "Compute-aware infrastructure"],
  },
];

export interface Dossier {
  id: string;
  label: string;
  title: string;
  body?: string;
  items?: string[];
  note?: string;
  link?: { label: string; href: string; external?: boolean; dummy?: boolean };
}

export const DOSSIERS: Dossier[] = [
  {
    id: "interests",
    label: "01 / INTERESTS",
    title: "Interests",
    items: ["Skydiving", "Paragliding", "Parasailing", "Stand-up comedy", "Flight simulations"],
  },
  {
    id: "podcast",
    label: "02 / PODCAST",
    title: "Pursuit of 100",
    body: "A podcast exploring the roadblocks that hold humanity back from evolving—and the ideas and technologies that could help us move forward.",
    note: "Ideas pushed to their limits.",
    link: { label: "Listen ↗", href: "#", dummy: true },
  },
  {
    id: "slym",
    label: "03 / RESEARCH",
    title: "Saifan–Laffineur Yield Model (SLYM)",
    body: "A working paper modelling yield, market demand, and time as coordinates of one continuous return surface, R(x, y, t). Published on SSRN in 2025.",
    note: "My model of yield across demand and time.",
    link: { label: "Read the paper ↗", href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5510499", external: true },
  },
  {
    id: "utility-economics",
    label: "04 / RESEARCH",
    title: "Introduction to Utility Economics",
    body: "My own work on quantifying utility: developing a way to represent utility so it can be examined with economic and mathematical tools.",
    note: "A quantitative approach to utility.",
    link: { label: "Ask me about it ↗", href: "mailto:realaminsaifan@gmail.com?subject=Introduction%20to%20Utility%20Economics" },
  },
];

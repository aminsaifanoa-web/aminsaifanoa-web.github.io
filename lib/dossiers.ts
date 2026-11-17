import { PROFILE } from "@/lib/profile";

export interface Dossier {
  id: string;
  label: string;
  title: string;
  body: string;
  note: string;
  link?: { label: string; href: string; external?: boolean; dummy?: boolean };
}

export const DOSSIERS: Dossier[] = [
  {
    id: "skydiving",
    label: "01 / PERSONAL",
    title: "Skydiving",
    body: "A perspective that rewards preparation, calm, and attention to the conditions around you.",
    note: "Preparation matters before the jump.",
  },
  {
    id: "podcast",
    label: "02 / PODCAST",
    title: PROFILE.podcast.name,
    body: "A podcast about extending human capability and the technologies that could take us there.",
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
  },
];

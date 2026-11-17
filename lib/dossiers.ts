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
    id: "lifecycle",
    label: "01 / MY LIFE CURVE",
    title: "My life curve",
    body: "A dossier on the arc — subjects collected, interests compounded, the points where economics, maths and technology meet. Work in progress.",
    note: "My Saifan life curve",
  },
  {
    id: "skydiving",
    label: "02 / ALTITUDE",
    title: "Skydiving",
    body: "The view from 4,000 metres is an excellent place to think. The fall is temporary; the calm beforehand is the actual skill.",
    note: "Altitude is a great study spot",
  },
  {
    id: "podcast",
    label: "03 / ON AIR",
    title: "In Pursuit of the Matrix",
    body: "A podcast about technology and its implications.",
    note: "Asking is the other half of learning",
    link: { label: "Listen ↗", href: "#", dummy: true },
  },
  {
    id: "utility",
    label: "04 / UTILITY ECONOMICS",
    title: "Utility economics",
    body: "The Saifan–Laffineur Yield Model (SLYM): yield, market demand and time as orthogonal coordinates of one continuous return surface, R(x, y, t). Published as a working paper on SSRN in 2025.",
    note: "Returns have a shape.",
    link: { label: "Read the paper ↗", href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5510499", external: true },
  },
];

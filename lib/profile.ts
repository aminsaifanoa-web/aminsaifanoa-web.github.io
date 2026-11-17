/**
 * Single source of truth for everything personal on this site.
 * Edit this one file — every section reads from it.
 */

export const PROFILE = {
  name: "Amin Saifan",
  /** Hero title, split across two lines like a poster. */
  nameLines: ["Amin", "Saifan"],
  /** Eyebrow line above the hero name. */
  headline: "Arts & Sciences — Quantitative & Applied Economics @ UCL",
  /** The line under the name. */
  tagline: "Co-founder of Illustra, working across economics, law, and data science.",
  location: "London, UK",

  /** Real links. */
  linkedin: "https://www.linkedin.com/in/amin-s-7b10222a9/",
  github: "https://github.com/aminsaifanoa-web",
  website: "https://www.illustraedu.com",

  /**
   * The podcast. Paste the real feed/show URL into `url` (Spotify, Apple,
   * YouTube, RSS — anything) and a "Listen ↗︎" link appears automatically
   * in Projects and Experience and in Contact. Leave "" and no link ships.
   */
  podcast: {
    name: "Pursuit of 100",
    url: "",
  },

  /** Contact email used by the contact section and project inquiry links. */
  email: "realaminsaifan@gmail.com",
} as const;

export const INQUIRY_EMAILS = ["realaminsaifan@gmail.com", "aminsaifan@gmail.com"] as const;

export function inquiryMailto(subject: string) {
  return `mailto:${INQUIRY_EMAILS.join(",")}?subject=${encodeURIComponent(subject)}`;
}
import type { Metadata, Viewport } from "next";
import { PROFILE } from "@/lib/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${PROFILE.name} — Founder and researcher`,
  description: "Amin Ali Saifan: Arts & Sciences student at UCL, co-founder of Illustra, and researcher of markets, utility, and technology.",
  keywords: [
    "Amin Ali Saifan",
    "Illustra",
    "APRIL carbon finance research",
    "Saifan–Laffineur Yield Model",
    "SLYM",
    "Pursuit of 100",
    "UCL",
    "quantitative research",
  ],
  openGraph: {
    title: `${PROFILE.name} — Projects and research`,
    description: "Founder at Illustra. Arts & Sciences at UCL. Research across economics, mathematics, data science, and technology.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#040909" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

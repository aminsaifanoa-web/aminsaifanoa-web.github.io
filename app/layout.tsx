import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { PROFILE } from "@/lib/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amin Ali Saifan — Skydiver & podcaster with a love for technology",
  description:
    "Amin Ali Saifan: Arts & Sciences student at UCL, co-founder of Illustra, and researcher of markets, mathematics and technology.",
  keywords: [
    "Amin Ali Saifan",
    "Illustra",
    "Saifan–Laffineur Yield Model",
    "SLYM",
    "In Pursuit of the Matrix",
    "UCL",
    "economics",
    "quantitative research",
  ],
  openGraph: {
    title: "Amin Ali Saifan — Skydiver & podcaster with a love for technology",
    description:
      "Amin Ali Saifan: Arts & Sciences student at UCL, co-founder of Illustra, and researcher of markets, mathematics and technology.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#020705",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}

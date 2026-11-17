import { PROFILE } from "@/lib/profile";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects and Experience" },
];

export default function SiteHeader() {
  return (
    <header className="header">
      <a className="wordmark" href="#top" aria-label={`${PROFILE.name} — back to top`}>
        {PROFILE.name}
      </a>
      <nav aria-label="Main navigation">
        {NAV.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        <a href="#contact" className="hello">Say hello <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}

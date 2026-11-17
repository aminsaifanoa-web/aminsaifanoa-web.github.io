import { PROFILE } from "@/lib/profile";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects and Experience" },
];

export default function SiteHeader() {
  return (
    <header className="header">
      <a className="wordmark" href="#top">
        {PROFILE.wordmark}<span aria-hidden="false">✳︎</span><span className="sr-only"> — back to top</span>
      </a>
      <nav aria-label="Main navigation">
        {NAV.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        <a href="#contact" className="hello">Say hello <span aria-hidden="true">↗︎</span></a>
      </nav>
    </header>
  );
}

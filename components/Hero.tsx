import { PROFILE } from "@/lib/profile";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-canvas" aria-hidden="true" />
      <div className="hero-center">
        <div className="hello-tag">{PROFILE.headline}</div>
        <h1 id="hero-title" className="hero-name">
          <span>{PROFILE.nameLines[0]}</span>
          <span>{PROFILE.nameLines[1]}</span>
        </h1>
        <p>{PROFILE.tagline} I&rsquo;m interested in how people make decisions and how new tools change what they can do.</p>
        <a className="round-button" href="#projects">See projects and experience <span aria-hidden="true">↓</span></a>
      </div>
      <div className="hero-foot">
        <span>{PROFILE.location.toUpperCase()} · ARTS &amp; SCIENCES @ UCL</span>
        <span className="scroll-note" aria-hidden="true">SCROLL TO FIND OUT MORE ↓</span>
      </div>
    </section>
  );
}

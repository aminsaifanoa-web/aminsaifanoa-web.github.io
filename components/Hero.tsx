import { inquiryMailto, PROFILE } from "@/lib/profile";

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
        <p>{PROFILE.tagline} I&rsquo;m interested in how technology can expand human capability, and hope to help build the next generation of ideas that reshape how we live and work. If you share that ambition, <a href={inquiryMailto("Shared goals")}>feel free to email me</a>.</p>
        <a className="round-button" href="#projects">See projects and experience <span aria-hidden="true">↓</span></a>
      </div>
      <div className="hero-foot">
        <span>{PROFILE.location.toUpperCase()} · UCL</span>
        <span className="scroll-note" aria-hidden="true">SCROLL TO FIND OUT MORE ↓</span>
      </div>
    </section>
  );
}

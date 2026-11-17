import { PROFILE } from "@/lib/profile";
import MatrixRain from "@/components/MatrixRain";
import DecryptText from "@/components/DecryptText";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-canvas" aria-hidden="true"><MatrixRain /></div>
      <div className="hero-center">
        <div className="hello-tag"><DecryptText text={PROFILE.headline} stagger={14} /></div>
        <h1 id="hero-title" className="hero-name">
          <span><DecryptText text={PROFILE.nameLines[0]} stagger={38} delay={250} /></span>
          <span><DecryptText text={PROFILE.nameLines[1]} stagger={38} delay={500} /></span>
        </h1>
        <p><em>{PROFILE.tagline}</em><br />Founder at Illustra, working across economics, mathematics, data science, and technology. Say hello if you&rsquo;d like to build something.</p>
        <a className="round-button" href="#projects">See projects and experience <span aria-hidden="true">↓</span></a>
      </div>
      <div className="hero-foot">
        <span>{PROFILE.location.toUpperCase()} · ARTS &amp; SCIENCES @ UCL</span>
        <span className="scroll-note" aria-hidden="true">SCROLL TO FIND OUT MORE ↓</span>
      </div>
    </section>
  );
}

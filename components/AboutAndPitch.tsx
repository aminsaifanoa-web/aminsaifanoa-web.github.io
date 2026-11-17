import { PROFILE } from "@/lib/profile";

export default function AboutAndPitch() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="dossier-head" data-reveal>
        <div className="about-profile">
          <div className="about-card" aria-hidden="true">
            <span className="about-card-face">AS</span>
            <span className="about-card-sub">UCL · Arts &amp; Sciences · Quantitative &amp; Applied Economics</span>
          </div>
          <a className="ucl-badge" href="https://www.ucl.ac.uk/" target="_blank" rel="noopener noreferrer">UCL — University College London</a>
        </div>
        <span className="dossier-label">PERSONAL FILE — CONFIDENTIAL</span>
        <h2 id="about-title">This is <em>Amin.</em></h2>
        <p className="dossier-line">{PROFILE.headline} · {PROFILE.location}</p>
      </div>

      <div className="about-body">
        <div className="about-copy">
          <p>I&rsquo;m a first-year <strong>Arts &amp; Sciences</strong> student at UCL, reading <strong>Quantitative &amp; Applied Economics</strong>. My studies connect economics, mathematics, data science, and technology.</p>
          <p>I co-founded <strong>Illustra</strong>, an AI-native learning system. My research interests include markets, human behaviour, and emerging technology, especially how people make decisions and how technology changes those decisions.</p>
          <p>Before UCL, I was a <strong>CP Tanner Academic Scholar</strong> at Dulwich College, president of the Law Society, and founded a comedy club and an operations research society.</p>
          <a className="text-link" href={PROFILE.github} target="_blank" rel="noopener noreferrer">See what&rsquo;s on my GitHub ↗</a>
        </div>
        <div className="thesis-box" data-reveal>
          <span className="thesis-tag">THE BIGGEST PROBLEM I SEE</span>
          <h3>We only spend about <em>45%</em> of our time on screen.<br />Taking it to <strong>100</strong> will change the world.</h3>
          <p className="thesis-copy">I want computing to move beyond the phone and into the world around us. The challenge is making that transition work for people.</p>
        </div>
      </div>
    </section>
  );
}

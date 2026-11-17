export default function AboutAndPitch() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about-body">
        <article className="about-copy" data-reveal>
          <span className="about-kicker">ABOUT ME</span>
          <h2 id="about-title">Amin Saifan</h2>
          <p>I&rsquo;m a first-year UCL BASc student concentrating in Quantitative &amp; Applied Economics. I co-founded Illustra, an AI-native learning system, and work across economics, mathematics, data science, and technology. I&rsquo;m interested in how people make decisions and how new tools change what they can do.</p>
        </article>

        <article className="thesis-box" data-reveal aria-labelledby="thesis-title">
          <span className="thesis-tag">THE BIGGEST PROBLEM I SEE</span>
          <h3 id="thesis-title">From 45% to 100%.</h3>
          <p className="thesis-copy">Today, we spend roughly 45% of our time on screens; the only moments we are truly out of reach are when we sleep or shower. Wearable technology can close that gap by putting the display directly in front of our eyes. With information and interfaces always available, we can outsource low-value tasks and interact with the digital world more seamlessly. The result: faster economic growth and a new stage in how humans extend their own capabilities.</p>
        </article>
      </div>
    </section>
  );
}

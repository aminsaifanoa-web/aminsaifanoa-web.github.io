export default function AboutAndPitch() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about-body">
        <article className="about-copy" data-reveal>
          <span className="about-kicker">ABOUT ME</span>
          <h2 id="about-title">Amin Ali Saifan</h2>
          <p>I&rsquo;m a first-year Arts &amp; Sciences student at UCL studying Quantitative &amp; Applied Economics. I co-founded Illustra, an AI-native learning system, and work across economics, mathematics, data science, and technology. I&rsquo;m interested in how people make decisions and how new tools change what they can do.</p>
        </article>

        <article className="thesis-box" data-reveal aria-labelledby="thesis-title">
          <span className="thesis-tag">THE BIGGEST PROBLEM I SEE</span>
          <h3 id="thesis-title">From a screen in our pocket to a computer in our field of vision.</h3>
          <p className="thesis-copy">The biggest jump in innovation will come when computing leaves the screen in our pocket and becomes a layer in our field of vision: ready when we look, while the world stays in view. That shift could change how we learn, work, and communicate.</p>
        </article>
      </div>
    </section>
  );
}

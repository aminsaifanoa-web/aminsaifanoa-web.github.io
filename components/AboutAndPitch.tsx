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
          <h3 id="thesis-title">Bring computing into our field of vision, so technology expands what we can do in the world.</h3>
          <p className="thesis-copy">The next great leap will move computing from a screen in our pocket into our field of vision. With information available in context while we look at the real world, technology can extend attention, memory, and action instead of pulling us away from them. The goal is a more capable human, with computing present where it helps.</p>
        </article>
      </div>
    </section>
  );
}

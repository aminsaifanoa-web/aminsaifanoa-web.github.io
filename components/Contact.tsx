import { PROFILE } from "@/lib/profile";
import CopyEmailButton from "@/components/CopyEmailButton";

export default function Contact() {
  const mailto = PROFILE.email ? `mailto:${PROFILE.email}` : null;
  const year = new Date().getFullYear();

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-top"><span>Got an idea? A question? A conviction?</span><span>{PROFILE.location} ↗</span></div>
      <h2 id="contact-title">Let&rsquo;s build<br />the next <em>thing.</em><a className="contact-circle" href={mailto ?? PROFILE.linkedin} aria-label={mailto ? `Email ${PROFILE.name}` : `Message ${PROFILE.name} on LinkedIn`}><span aria-hidden="true">↗</span><span className="sr-only">{mailto ? ` — email ${PROFILE.name}` : ` — message ${PROFILE.name} on LinkedIn`}</span></a></h2>
      <div className="contact-bottom">
        <nav aria-label="Social links">
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          {PROFILE.email && <a href={mailto as string}>Email ↗</a>}
          {PROFILE.podcast.url && <a href={PROFILE.podcast.url} target="_blank" rel="noopener noreferrer">{PROFILE.podcast.name} ↗</a>}
          {PROFILE.email && <CopyEmailButton email="aminsaifan@gmail.com" />}
        </nav>
      </div>
      <div className="footer"><span>© {year} {PROFILE.name.toUpperCase()}</span><a href="#top">Back to top ↑</a></div>
    </section>
  );
}

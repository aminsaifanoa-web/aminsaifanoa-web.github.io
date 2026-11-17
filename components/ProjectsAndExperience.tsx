import type { CSSProperties } from "react";
import { VENTURES, type Venture } from "@/lib/ventures";
import { DOSSIERS } from "@/lib/dossiers";
import { inquiryMailto } from "@/lib/profile";

function Story({ story }: { story: NonNullable<Venture["story"]> }) {
  return (
    <details className="project-story">
      <summary>{story.title}<span aria-hidden="true">+</span></summary>
      <div className="project-story-body">
        {story.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>
    </details>
  );
}

function VentureFile({ venture, index }: { venture: Venture; index: number }) {
  return (
    <article className={`project-file venture-file card-${venture.id}`} style={{ "--i": index } as CSSProperties} data-reveal>
      <div className="project-file-top">
        <span>{venture.no} / {venture.tag}</span>
        <span className="project-status"><i aria-hidden="true" />{venture.status}</span>
      </div>
      <h3>{venture.title}</h3>
      <p className="project-hook">{venture.hook}</p>
      <p className="project-description">{venture.description}</p>
      <div className="project-chips">
        {venture.chips.map((chip) => <span key={chip}>{chip}</span>)}
      </div>
      <div className="project-file-actions">
        {venture.action && (
          <a className="project-action" href={venture.action.href} {...(venture.action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{venture.action.label}</a>
        )}
        {venture.id !== "illustra" && <a className="project-action" href={inquiryMailto(venture.title)}>Ask me about it ↗</a>}
        {venture.story && <Story story={venture.story} />}
      </div>
      <div className="project-file-meta"><span>{venture.meta[0]}</span><span>{venture.meta[1]}</span></div>
    </article>
  );
}

export default function ProjectsAndExperience() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <header className="section-head" data-reveal>
        <span className="eyebrow">SELECTED PROJECTS / RESEARCH / EXPERIENCE</span>
        <h2 id="projects-title">Projects and<br /><em>experience.</em></h2>
        <p>Projects I have built, research I have developed, and work still in progress.</p>
      </header>

      <div className="experience-grid">
        {VENTURES.map((venture, index) => <VentureFile key={venture.id} venture={venture} index={index} />)}
        {DOSSIERS.map((dossier, index) => (
          <article className="project-file dossier-file" key={dossier.id} data-reveal>
            <div className="project-file-top"><span>{dossier.label}</span><span className="project-status">PERSONAL FILE</span></div>
            <h3>{dossier.title}</h3>
            {dossier.body && <p className="project-description">{dossier.body}</p>}
            {dossier.items && <ul className="interest-list">{dossier.items.map((item) => <li key={item}>{item}</li>)}</ul>}
            <div className="project-file-actions">
              {dossier.link && <a className={`project-action ${dossier.link.dummy ? "is-dummy" : ""}`} href={dossier.link.href} {...(dossier.link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{dossier.link.label}</a>}
              <a className="project-action" href={inquiryMailto(dossier.title)}>Ask me about it ↗</a>
            </div>
            {dossier.note && <p className="project-note">{dossier.note}</p>}
          </article>
        ))}

        <section className="accolades-file" aria-labelledby="accolades-title" data-reveal>
          <div className="project-file-top"><span>RECOGNITION / RECORD</span><span className="project-status">VERIFIED FACTS</span></div>
          <h3 id="accolades-title">Accolades</h3>
          <ul className="accolades-list">
            <li><span>CP Tanner Academic Scholar</span></li>
            <li><span>$5,000 grant</span><b>Carbon finance research</b></li>
            <li><span>Cambridge Startup Competition</span><b>3rd place</b></li>
            <li><span>BPHO Computational Physics</span><b>Gold</b></li>
            <li><span>SAT</span><b>1530</b></li>
            <li><span>Published author</span><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5510499" target="_blank" rel="noopener noreferrer">SSRN ↗</a></li>
          </ul>
        </section>
      </div>
    </section>
  );
}

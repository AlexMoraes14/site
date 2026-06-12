import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

export function TechStack({ content }) {
  const { technologies, techIntro } = content;

  return (
    <section className="section-shell tech-section">
      <Reveal>
        <SectionIntro
          eyebrow={techIntro.eyebrow}
          title={techIntro.title}
          text={techIntro.text}
        />
      </Reveal>

      <Reveal className="tech-list" delay={100}>
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </Reveal>
    </section>
  );
}

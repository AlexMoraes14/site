import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

export function About({ content }) {
  const { about } = content;

  return (
    <section className="section-shell about-section" id="sobre">
      <Reveal>
        <SectionIntro
          eyebrow={about.eyebrow}
          title={about.title}
          text={about.text}
        />
      </Reveal>

      <Reveal className="about-note" delay={120}>
        <span>{about.noteTitle}</span>
        <p>{about.note}</p>
      </Reveal>
    </section>
  );
}

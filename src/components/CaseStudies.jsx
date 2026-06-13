import { CaseGallery } from "./CaseGallery";
import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

export function CaseStudies({ content }) {
  const { cases, casesIntro } = content;

  return (
    <section className="section-shell cases-section" id="cases">
      <Reveal>
        <SectionIntro
          eyebrow={casesIntro.eyebrow}
          title={casesIntro.title}
          text={casesIntro.text}
        />
      </Reveal>

      <Reveal delay={80}>
        <p className="case-disclaimer">{casesIntro.disclaimer}</p>
      </Reveal>

      <div className="case-list">
        {cases.map((caseItem, index) => (
          <Reveal
            as="article"
            className="case-study"
            delay={index * 90}
            key={caseItem.id}
          >
            <div className="case-copy">
              <span className="case-number">{caseItem.number}</span>
              <h3>{caseItem.title}</h3>
              <p className="case-subtitle">{caseItem.subtitle}</p>
              <p className="case-summary">{caseItem.summary}</p>

              <div className="case-columns">
                <div>
                  <small>{casesIntro.problem}</small>
                  <p>{caseItem.problem}</p>
                </div>
                <div>
                  <small>{casesIntro.solution}</small>
                  <p>{caseItem.solution}</p>
                </div>
                <div>
                  <small>{casesIntro.result}</small>
                  <p>{caseItem.result}</p>
                </div>
              </div>

              <div
                className="tag-list"
                aria-label={`${casesIntro.tagsLabel} ${caseItem.title}`}
              >
                {caseItem.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <CaseGallery caseItem={caseItem} label={casesIntro.visual} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

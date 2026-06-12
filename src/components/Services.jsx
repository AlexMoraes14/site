import { Reveal } from "./Reveal";
import { SectionIntro } from "./SectionIntro";

export function Services({ content }) {
  const { services, servicesIntro } = content;

  return (
    <section className="section-shell services-section" id="servicos">
      <Reveal>
        <SectionIntro
          eyebrow={servicesIntro.eyebrow}
          title={servicesIntro.title}
        />
      </Reveal>

      <div className="service-grid">
        {services.map((service, index) => (
          <Reveal className="service-item" delay={index * 70} key={service.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

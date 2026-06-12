import { Reveal } from "./Reveal";

export function Metrics({ content }) {
  return (
    <section className="section-shell metrics-section" aria-label={content.metricsLabel}>
      {content.metrics.map((metric, index) => (
        <Reveal className="metric-item" delay={index * 70} key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
          <p>{metric.detail}</p>
        </Reveal>
      ))}
    </section>
  );
}

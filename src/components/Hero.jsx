import logo from "../assets/logo-am.png";
import { Reveal } from "./Reveal";

export function Hero({ content }) {
  const { hero, profile } = content;

  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="blueprint-grid" />
        <div className="process-line line-one" />
        <div className="process-line line-two" />
        <div className="process-node node-one">XML</div>
        <div className="process-node node-two">PDF</div>
        <div className="process-node node-three">SQL</div>
        <div className="process-node node-four">XLSX</div>
      </div>

      <div className="section-shell hero-inner">
        <Reveal className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title">{profile.brand}</h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-lead">{profile.focus}</p>

          <div className="hero-actions" aria-label={hero.actionsLabel}>
            <a className="button primary" href="#cases">
              {hero.primaryCta}
            </a>
            <a className="button secondary" href="#contato">
              {hero.secondaryCta}
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-signature" delay={120}>
          <img src={logo} alt={`Logo ${profile.brand}`} />
          <div>
            <strong>{profile.name}</strong>
            <span>{profile.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

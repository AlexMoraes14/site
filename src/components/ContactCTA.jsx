import { Reveal } from "./Reveal";

export function ContactCTA({ content }) {
  const { contact, profile } = content;
  const contactLinks = [
    {
      href: profile.instagramUrl,
      label: contact.instagram,
      value: profile.instagram,
      isProfile: true,
    },
    {
      href: profile.linkedinUrl,
      label: contact.linkedin,
      value: profile.linkedin,
      isProfile: true,
    },
    {
      href: profile.githubUrl,
      label: contact.github,
      value: profile.github,
      isProfile: true,
    },
    {
      href: profile.mailUrl,
      label: contact.email,
      value: profile.email,
    },
  ];

  return (
    <section className="section-shell contact-section" id="contato">
      <Reveal className="contact-panel">
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2>{contact.title}</h2>
        <p>{contact.text}</p>

        <div className="contact-actions">
          <a
            className="button primary"
            href={profile.instagramUrl}
            target="_blank"
            rel="me noreferrer"
          >
            {contact.primaryCta}
          </a>
          <a className="button secondary" href="#cases">
            {contact.secondaryCta}
          </a>
        </div>

        <div className="contact-meta" aria-label={contact.metaLabel}>
          <span>{profile.name}</span>
          <span>{profile.location}</span>
        </div>

        <div className="contact-links">
          {contactLinks.map((link) => (
            <a
              href={link.href}
              key={link.label}
              target="_blank"
              rel={link.isProfile ? "me noreferrer" : "noreferrer"}
            >
              <small>{link.label}</small>
              <strong>{link.value}</strong>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

import { useState } from "react";
import { Reveal } from "./Reveal";

export function ContactCTA({ content }) {
  const { contact, profile } = content;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });
  const [copied, setCopied] = useState(false);
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = [
      `${contact.nameLabel}: ${formData.name}`,
      `${contact.emailLabel}: ${formData.email}`,
      "",
      `${contact.projectLabel}:`,
      formData.project,
    ].join("\n");
    const subject = encodeURIComponent(contact.emailSubject);

    window.location.href = `${profile.mailUrl}?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = profile.mailUrl;
    }
  };

  return (
    <section className="section-shell contact-section" id="contato">
      <Reveal className="contact-panel">
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2>{contact.title}</h2>
        <p>{contact.text}</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="contact-name">{contact.nameLabel}</label>
            <input
              id="contact-name"
              name="name"
              onChange={(event) =>
                setFormData((data) => ({ ...data, name: event.target.value }))
              }
              placeholder={contact.namePlaceholder}
              required
              type="text"
              value={formData.name}
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-email">{contact.emailLabel}</label>
            <input
              id="contact-email"
              name="email"
              onChange={(event) =>
                setFormData((data) => ({ ...data, email: event.target.value }))
              }
              placeholder={contact.emailPlaceholder}
              required
              type="email"
              value={formData.email}
            />
          </div>

          <div className="form-field form-field-wide">
            <label htmlFor="contact-project">{contact.projectLabel}</label>
            <textarea
              id="contact-project"
              name="project"
              onChange={(event) =>
                setFormData((data) => ({ ...data, project: event.target.value }))
              }
              placeholder={contact.projectPlaceholder}
              required
              rows="5"
              value={formData.project}
            />
          </div>

          <button className="button primary contact-submit" type="submit">
            {contact.submitCta}
          </button>
          <button
            className="button secondary contact-copy"
            onClick={copyEmail}
            type="button"
          >
            {copied ? contact.emailCopied : contact.copyEmail}
          </button>
        </form>

        <div className="contact-meta" aria-label={contact.metaLabel}>
          <span>{profile.name}</span>
          <span>{profile.location}</span>
        </div>

        <div className="contact-links">
          {contactLinks.map((link) => (
            <a
              href={link.href}
              key={link.label}
              target={link.isProfile ? "_blank" : undefined}
              rel={link.isProfile ? "me noreferrer" : undefined}
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

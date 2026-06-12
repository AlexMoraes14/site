export function SectionIntro({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={`section-intro ${align === "center" ? "center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

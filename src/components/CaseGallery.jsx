const screenshotGroups = {
  sara: [
    "/cases/sara/sara-01.png",
    "/cases/sara/sara-02.png",
    "/cases/sara/sara-03.png",
    "/cases/sara/sara-04.png",
    "/cases/sara/sara-05.png",
  ],
  dominio: [
    "/cases/kolek/kolek-01.png",
    "/cases/kolek/kolek-02.png",
    "/cases/kolek/kolek-03.png",
  ],
  controle: [
    "/cases/estoque/estoque-03.png",
    "/cases/estoque/estoque-04.png",
    "/cases/estoque/estoque-02.png",
    "/cases/estoque/estoque-01.png",
    "/cases/estoque/estoque-05.png",
  ],
};

export function CaseGallery({ caseItem, label }) {
  const screenshots = screenshotGroups[caseItem.id] ?? [];

  if (!screenshots.length) {
    return null;
  }

  return (
    <div className="case-gallery" aria-label={`${label} ${caseItem.title}`}>
      <div className="case-gallery-head">
        <small>{label}</small>
        <span>{screenshots.length} telas reais</span>
      </div>

      <div className="screenshot-grid">
        {screenshots.map((src, index) => (
          <a
            className={index === 0 ? "screenshot-frame is-featured" : "screenshot-frame"}
            href={src}
            key={src}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir screenshot ${index + 1} de ${caseItem.title}`}
          >
            <img
              src={src}
              alt={`${caseItem.title} - screenshot ${index + 1}`}
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

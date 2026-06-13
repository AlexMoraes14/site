import { useCallback, useState } from "react";
import { ImageLightbox } from "./ImageLightbox";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  const showPrevious = useCallback(() => {
    setCurrentIndex((index) =>
      index === 0 ? screenshots.length - 1 : index - 1,
    );
  }, [screenshots.length]);

  const showNext = useCallback(() => {
    setCurrentIndex((index) =>
      index === screenshots.length - 1 ? 0 : index + 1,
    );
  }, [screenshots.length]);

  if (!screenshots.length) {
    return null;
  }

  return (
    <>
      <div className="case-gallery" aria-label={`${label} ${caseItem.title}`}>
        <div className="case-gallery-head">
          <small>{label}</small>
          <span>{screenshots.length} telas reais</span>
        </div>

        <div className="screenshot-grid">
          {screenshots.map((src, index) => (
            <button
              className={
                index === 0 ? "screenshot-frame is-featured" : "screenshot-frame"
              }
              key={src}
              type="button"
              onClick={() => openLightbox(index)}
              aria-label={`Abrir screenshot ${index + 1} de ${caseItem.title}`}
            >
              <img
                src={src}
                alt={`${caseItem.title} - screenshot ${index + 1}`}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      <ImageLightbox
        images={screenshots}
        currentIndex={currentIndex}
        projectTitle={caseItem.title}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onNext={showNext}
        onPrevious={showPrevious}
      />
    </>
  );
}

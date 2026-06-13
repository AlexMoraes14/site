import { useEffect, useRef } from "react";

export function ImageLightbox({
  images,
  currentIndex,
  projectTitle,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}) {
  const closeButtonRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    closeButtonRef.current?.focus();
    panelRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }
    };

    const handlePointerDown = (event) => {
      if (!panelRef.current?.contains(event.target)) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen) {
    return null;
  }

  const image = images[currentIndex];
  const hasMultipleImages = images.length > 1;

  return (
    <div
      className="image-lightbox"
      role="region"
      aria-label={`Galeria de screenshots de ${projectTitle}`}
    >
      <div className="lightbox-panel" ref={panelRef}>
        <div className="lightbox-topbar">
          <div>
            <small>{projectTitle}</small>
            <strong>
              {currentIndex + 1} / {images.length}
            </strong>
          </div>

          <button
            className="lightbox-close"
            type="button"
            onClick={onClose}
            ref={closeButtonRef}
            aria-label="Fechar visualizacao"
          >
            x
          </button>
        </div>

        <div className="lightbox-stage">
          {hasMultipleImages && (
            <button
              className="lightbox-arrow lightbox-arrow-left"
              type="button"
              onClick={onPrevious}
              aria-label="Screenshot anterior"
            >
              &lt;
            </button>
          )}

          <img
            key={image}
            src={image}
            alt={`${projectTitle} - screenshot ampliado ${currentIndex + 1}`}
          />

          {hasMultipleImages && (
            <button
              className="lightbox-arrow lightbox-arrow-right"
              type="button"
              onClick={onNext}
              aria-label="Proximo screenshot"
            >
              &gt;
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

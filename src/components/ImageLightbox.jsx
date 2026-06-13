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

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

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

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
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
      role="dialog"
      aria-modal="true"
      aria-label={`Galeria de screenshots de ${projectTitle}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="lightbox-panel">
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

        <div
          className="lightbox-stage"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
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

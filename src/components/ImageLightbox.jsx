import { useEffect, useRef, useState } from "react";

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
  const imageScrollRef = useRef(null);
  const touchYRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

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
      onWheel={(event) => {
        if (
          isZoomed &&
          imageScrollRef.current?.contains(event.target)
        ) {
          return;
        }

        event.preventDefault();
        window.scrollBy({
          top: event.deltaY,
          left: event.deltaX,
        });
      }}
      onTouchStart={(event) => {
        touchYRef.current = event.touches[0]?.clientY ?? null;
      }}
      onTouchMove={(event) => {
        if (
          isZoomed &&
          imageScrollRef.current?.contains(event.target)
        ) {
          return;
        }

        if (touchYRef.current === null) {
          return;
        }

        const nextY = event.touches[0]?.clientY ?? touchYRef.current;
        window.scrollBy({
          top: touchYRef.current - nextY,
        });
        touchYRef.current = nextY;
      }}
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

          <div
            className={
              isZoomed
                ? "lightbox-image-scroll is-zoomed"
                : "lightbox-image-scroll"
            }
            ref={imageScrollRef}
          >
            <img
              key={image}
              src={image}
              alt={`${projectTitle} - screenshot ampliado ${currentIndex + 1}`}
            />
          </div>

          <button
            className="lightbox-zoom"
            type="button"
            onClick={() => setIsZoomed((zoomed) => !zoomed)}
            aria-label={isZoomed ? "Ajustar imagem a tela" : "Ampliar imagem"}
            aria-pressed={isZoomed}
          >
            <span aria-hidden="true">{isZoomed ? "-" : "+"}</span>
            {isZoomed ? "Ajustar" : "Ampliar"}
          </button>

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

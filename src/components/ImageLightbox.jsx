import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function ImageLightbox({
  images,
  currentIndex,
  projectTitle,
  labels,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}) {
  const closeButtonRef = useRef(null);
  const panelRef = useRef(null);
  const previousFocusRef = useRef(null);
  const touchStartRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      previousFocusRef.current?.focus();
      previousFocusRef.current = null;
      return undefined;
    }

    previousFocusRef.current = document.activeElement;
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowRight") {
        onNext();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = panelRef.current?.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const focusable = Array.from(focusableElements ?? []);

      if (!focusable.length) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
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
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen) {
    return null;
  }

  const image = images[currentIndex];
  const hasMultipleImages = images.length > 1;

  const handleImageTouchStart = (event) => {
    const touch = event.touches[0];
    touchStartRef.current = touch
      ? { x: touch.clientX, y: touch.clientY }
      : null;
  };

  const handleImageTouchEnd = (event) => {
    if (isZoomed || !hasMultipleImages || !touchStartRef.current) {
      touchStartRef.current = null;
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      onNext();
    } else {
      onPrevious();
    }
  };

  return createPortal(
    <div
      className="image-lightbox"
      role="dialog"
      aria-label={`${labels.dialogLabel} ${projectTitle}`}
      aria-modal="true"
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
            aria-label={labels.close}
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
              aria-label={labels.previous}
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
            onTouchEnd={handleImageTouchEnd}
            onTouchStart={handleImageTouchStart}
          >
            <img
              key={image}
              src={image}
              alt={`${projectTitle} - ${labels.enlargedImageAlt} ${currentIndex + 1}`}
            />
          </div>

          <button
            className="lightbox-zoom"
            type="button"
            onClick={() => setIsZoomed((zoomed) => !zoomed)}
            aria-label={isZoomed ? labels.fit : labels.expand}
            aria-pressed={isZoomed}
          >
            <span aria-hidden="true">{isZoomed ? "-" : "+"}</span>
          </button>

          {hasMultipleImages && (
            <button
              className="lightbox-arrow lightbox-arrow-right"
              type="button"
              onClick={onNext}
              aria-label={labels.next}
            >
              &gt;
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}

"use client";

import { useCallback, useEffect, useState } from "react";

type TextCarouselItem = {
  title: string;
  text: string;
};

type TextCarouselProps = {
  id?: string;
  items: TextCarouselItem[];
  previousLabel: string;
  nextLabel: string;
};

// Keeps page-wide arrow navigation out of form fields and editable content.
function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return (
    target.isContentEditable ||
    Boolean(target.closest('[contenteditable="true"]')) ||
    ["INPUT", "SELECT", "TEXTAREA"].includes(target.tagName)
  );
}

// Renders a small rotating text section with one primary item centered.
export function TextCarousel({
  id,
  items,
  previousLabel,
  nextLabel,
}: TextCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Moves the carousel by one step and wraps at either end.
  const moveBy = useCallback((direction: number) => {
    setActiveIndex((currentIndex) =>
      (currentIndex + direction + items.length) % items.length
    );
  }, [items.length]);

  // Advances the highlights unless the visitor is interacting with the carousel.
  useEffect(() => {
    if (
      items.length < 2 ||
      isPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const intervalId = window.setInterval(() => moveBy(1), 6000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, items.length, moveBy]);

  // Enables arrow-key navigation without requiring focus on the carousel.
  useEffect(() => {
    if (items.length < 2) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || isEditableTarget(event.target)) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveBy(-1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        moveBy(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items.length, moveBy]);

  return (
    <section
      id={id}
      className="text-carousel"
      aria-roledescription="carousel"
      aria-label="Therapy highlights"
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
    >
      <button
        className="carousel-arrow carousel-arrow-left"
        type="button"
        onClick={() => moveBy(-1)}
        aria-label={previousLabel}
      >
        <span aria-hidden="true">←</span>
      </button>

      <div className="carousel-track">
        {items.map((item, index) => {
          const offset = (index - activeIndex + items.length) % items.length;
          const position =
            offset === 0 ? "active" : offset === 1 ? "next" : "previous";

          return (
            <article
              className={`carousel-panel carousel-panel-${position}`}
              aria-hidden={position !== "active"}
              key={item.title}
            >
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>

      <button
        className="carousel-arrow carousel-arrow-right"
        type="button"
        onClick={() => moveBy(1)}
        aria-label={nextLabel}
      >
        <span aria-hidden="true">→</span>
      </button>
    </section>
  );
}

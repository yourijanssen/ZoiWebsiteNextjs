"use client";

import { useState } from "react";

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

// Renders a small rotating text section with one primary item centered.
export function TextCarousel({
  id,
  items,
  previousLabel,
  nextLabel,
}: TextCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Moves the carousel by one step and wraps at either end.
  const moveBy = (direction: number) => {
    setActiveIndex((currentIndex) =>
      (currentIndex + direction + items.length) % items.length
    );
  };

  return (
    <section
      id={id}
      className="text-carousel"
      aria-roledescription="carousel"
      aria-label="Therapy highlights"
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

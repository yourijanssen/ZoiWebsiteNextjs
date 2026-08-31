"use client";

import ReactDOM from "react-dom";

// Starts the above-the-fold hero image before the stylesheet discovers its CSS background.
export function HomeHeroPreload() {
  ReactDOM.preload("/images/ocean-hero.webp", {
    as: "image",
    type: "image/webp",
    fetchPriority: "high",
  });

  return null;
}

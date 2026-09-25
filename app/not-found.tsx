import { Suspense } from "react";
import type { Metadata } from "next";
import { NotFoundContent } from "@/components/not-found-content";

export const metadata: Metadata = {
  title: {
    absolute: "404 | Zoi Pantou",
  },
  robots: {
    index: false,
    follow: false,
  },
};

// Displays the site-branded recovery page for unmatched routes and notFound calls.
export default function NotFound() {
  return (
    <Suspense fallback={null}>
      <NotFoundContent />
    </Suspense>
  );
}

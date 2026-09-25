"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { content, resolveLanguage } from "@/lib/site-content";

// Renders a localized recovery page for visitors who request an unknown route.
export function NotFoundContent() {
  const language = resolveLanguage(useSearchParams().get("lang") ?? undefined);
  const t = content[language];

  return (
    <SiteShell language={language}>
      <main className="site-main container not-found-page">
        <section className="content-card not-found-card" aria-labelledby="not-found-title">
          <p className="not-found-code" aria-hidden="true">
            404
          </p>
          <h1 id="not-found-title">{t.notFound.title}</h1>
          <p>{t.notFound.text}</p>
          <Link className="button" href={`/?lang=${language}`}>
            {t.notFound.back}
          </Link>
        </section>
      </main>
    </SiteShell>
  );
}

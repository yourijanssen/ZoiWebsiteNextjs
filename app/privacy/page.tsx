import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { content, resolveLanguage } from "@/lib/site-content";
import { siteUrl } from "@/lib/seo";

type PrivacyPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  searchParams,
}: PrivacyPageProps): Promise<Metadata> {
  const language = resolveLanguage((await searchParams).lang);
  const t = content[language];
  const title = `${t.privacy.title} | ${t.brand}`;

  return {
    title: { absolute: title },
    description: t.privacy.paragraphs[0],
    alternates: {
      canonical: `${siteUrl}/privacy?lang=${language}`,
      languages: {
        el: `${siteUrl}/privacy?lang=el`,
        en: `${siteUrl}/privacy?lang=en`,
      },
    },
  };
}

export default async function PrivacyPage({ searchParams }: PrivacyPageProps) {
  const language = resolveLanguage((await searchParams).lang);
  const t = content[language];

  return (
    <SiteShell language={language}>
      <main className="site-main container privacy-page">
        <article className="content-card privacy-card">
          <h1>{t.privacy.title}</h1>
          {t.privacy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </main>
    </SiteShell>
  );
}

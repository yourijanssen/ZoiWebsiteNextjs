import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { TextCarousel } from "@/components/text-carousel";
import { content, resolveLanguage } from "@/lib/site-content";
import { siteUrl } from "@/lib/seo";

type SystemicApproachPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  searchParams,
}: SystemicApproachPageProps): Promise<Metadata> {
  const language = resolveLanguage((await searchParams).lang);
  const t = content[language];
  const title = `${t.nav.faq} | ${t.brand}`;

  return {
    title: { absolute: title },
    description: t.systemicApproach.body[0],
    alternates: {
      canonical: `${siteUrl}/systimiki-proseggisi?lang=${language}`,
      languages: {
        el: `${siteUrl}/systimiki-proseggisi?lang=el`,
        en: `${siteUrl}/systimiki-proseggisi?lang=en`,
      },
    },
    openGraph: {
      title,
      description: t.systemicApproach.body[0],
      url: `${siteUrl}/systimiki-proseggisi?lang=${language}`,
      siteName: t.brand,
      locale: language === "el" ? "el_GR" : "en_US",
      type: "website",
    },
  };
}

export default async function SystemicApproachPage({
  searchParams,
}: SystemicApproachPageProps) {
  const language = resolveLanguage((await searchParams).lang);
  const t = content[language];

  return (
    <SiteShell language={language}>
      <main className="site-main container systemic-page">
        <section className="systemic-approach-intro">
          {/* <p className="systemic-eyebrow">{t.hero.kicker}</p> */}
          <h1>{t.nav.faq}</h1>
          <div className="systemic-approach-body">
            {t.systemicApproach.body.map((paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
        <TextCarousel
          items={t.highlights.items}
          previousLabel={t.highlights.previous}
          nextLabel={t.highlights.next}
        />
        <section className="quote-highlight">
          <blockquote>
            <p>{t.quote.text}</p>
            <cite>{t.quote.author}</cite>
          </blockquote>
        </section>
      </main>
    </SiteShell>
  );
}

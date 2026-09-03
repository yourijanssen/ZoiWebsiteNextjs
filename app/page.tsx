import type { Metadata } from "next";
import Link from "next/link";
import { ContactSection } from "@/components/contact-section";
import { HomeHeroPreload } from "@/components/home-hero-preload";
import { SiteShell } from "@/components/site-shell";
import { TextCarousel } from "@/components/text-carousel";
import { content, getDetailServices, resolveLanguage } from "@/lib/site-content";
import { buildHomeStructuredData, languageUrls } from "@/lib/seo";

type HomePageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  searchParams,
}: HomePageProps): Promise<Metadata> {
  const language = resolveLanguage((await searchParams).lang);
  const t = content[language];

  return {
    title: {
      absolute: t.metaTitle,
    },
    description: t.metaDescription,
    alternates: {
      canonical: languageUrls[language],
      languages: {
        el: languageUrls.el,
        en: languageUrls.en,
      },
    },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: languageUrls[language],
      siteName: t.brand,
      locale: language === "el" ? "el_GR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: t.metaTitle,
      description: t.metaDescription,
    },
  };
}

export default async function Home({ searchParams }: HomePageProps) {
  const language = resolveLanguage((await searchParams).lang);
  const t = content[language];
  const localizedServices = getDetailServices(language);
  const langQuery = `?lang=${language}`;
  const structuredData = buildHomeStructuredData(language);

  return (
    <SiteShell language={language}>
      <HomeHeroPreload />
      <main className="site-main container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <section className="therapist-hero">
          <div className="hero-copy">
            <p className="hero-kicker">{t.hero.kicker}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-quote-author">{t.hero.attribution}</p>
            <p className="hero-lead">{t.hero.lead}</p>
            <div className="hero-actions">
              <Link className="button" href={`/sxetika${langQuery}`}>
                {t.hero.servicesCta}
              </Link>
              <Link
                className="button button-outline"
                href="#epikoinonia"
              >
                {t.hero.contactCta}
              </Link>
            </div>
          </div>
          <div className="hero-media" aria-hidden="true">
            <div className="image-placeholder">
              <p>{t.hero.imagePlaceholder}</p>
            </div>
          </div>
        </section>

        <TextCarousel
          id="systimiki-proseggisi"
          items={t.highlights.items}
          previousLabel={t.highlights.previous}
          nextLabel={t.highlights.next}
        />

        <section className="quote-highlight">
          <blockquote>
            <p>{t.homeQuote.text}</p>
            <cite>{t.homeQuote.author}</cite>
          </blockquote>
        </section>

        <section className="services services-directory" id="ypiresies">
          <header className="section-heading">
            <h2>{t.servicesHeading.title}</h2>
          </header>
          <div className="services-grid">
            {localizedServices.map((service) => (
              <article className="service-card" key={service.slug}>
                {service.hasDetailPage !== false ? (
                  <Link
                    className="service-card-link"
                    href={`/ypiresies/${service.slug}${langQuery}`}
                  >
                    <div
                      className={`service-media service-media-${service.key}`}
                      aria-hidden="true"
                    />
                    <div className="service-card-content">
                      <h3>{service.title}</h3>
                      <p>{service.summary}</p>
                      <span className="text-link">{t.servicesHeading.link}</span>
                    </div>
                  </Link>
                ) : (
                  <>
                    <div
                      className={`service-media service-media-${service.key}`}
                      aria-hidden="true"
                    />
                    <div className="service-card-content">
                      <h3>{service.title}</h3>
                      <p>{service.summary}</p>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* The FAQ is intentionally hidden for the first release. */}
        {/*
          <section className="faq-section content-card" id="syxnes-erotiseis">
            <h2>{t.faq.title}</h2>
            <div className="faq-list">
              {t.faq.items.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        */}

        <ContactSection labels={t.contact} id="epikoinonia" />
      </main>
    </SiteShell>
  );
}

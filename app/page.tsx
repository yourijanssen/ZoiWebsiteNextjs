import type { Metadata } from "next";
import Link from "next/link";
// import { ContactForm } from "@/components/contact-form";
import { LogoMark } from "@/components/logo-mark";
import { SiteShell } from "@/components/site-shell";
import { TextCarousel } from "@/components/text-carousel";
import { content, resolveLanguage, services } from "@/lib/site-content";
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
  const localizedServices = services[language];
  const langQuery = `?lang=${language}`;
  const structuredData = buildHomeStructuredData(language);

  return (
    <SiteShell language={language}>
      <main className="site-main container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <section className="therapist-hero">
          <div className="hero-copy">
            <LogoMark className="hero-logo-mark" priority />
            <p className="hero-kicker">{t.hero.kicker}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-quote-author">{t.hero.attribution}</p>
            <p className="hero-lead">{t.hero.lead}</p>
            <div className="hero-actions">
              <a className="button" href="#epikoinonia">
                {t.hero.servicesCta}
              </a>
              <Link
                className="button button-outline"
                href={`/sxetika${langQuery}`}
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
            <p>{t.quote.text}</p>
            <cite>{t.quote.author}</cite>
          </blockquote>
        </section>

        <section className="about-link-band content-card">
          <h2>{t.profile.name}</h2>
          <p>{t.profile.bio}</p>
          <Link className="text-link" href={`/sxetika${langQuery}`}>
            {t.nav.about}
          </Link>
        </section>

        <section className="services" id="ypiresies">
          <header className="section-heading">
            <h2>{t.servicesHeading.title}</h2>
            <p>{t.servicesHeading.text}</p>
          </header>
          <div className="services-grid">
            {localizedServices.map((service) => (
              <article className="service-card" key={service.slug}>
                <div
                  className={`service-media service-media-${service.key}`}
                  aria-hidden="true"
                />
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                {service.hasDetailPage !== false ? (
                  <Link
                    className="text-link"
                    href={`/ypiresies/${service.slug}${langQuery}`}
                  >
                    {t.servicesHeading.link}
                  </Link>
                ) : null}
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

        <section className="contact-band" id="epikoinonia">
          <header className="section-heading">
            <h2>{t.contact.title}</h2>
            {t.contact.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </header>
          <div className="contact-layout contact-layout-info-only">
            <div className="contact-details">
              <section className="contact-info-group">
                <h3>{t.contact.detailsTitle}</h3>
                <p className="contact-info-row">
                  <span className="contact-info-icon" aria-hidden="true">
                    ☎
                  </span>
                  <span>
                    <strong>{t.contact.phoneViberLabel}</strong>{" "}
                    <a href={`tel:${t.contact.mobile.replaceAll(" ", "")}`}>
                      {t.contact.mobile}
                    </a>
                  </span>
                </p>
                <p className="contact-info-row">
                  <span className="contact-info-icon" aria-hidden="true">
                    ✉
                  </span>
                  <span>
                    <strong>{t.contact.emailLabel}</strong>{" "}
                    <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
                  </span>
                </p>
              </section>

              <section className="contact-info-group">
                <h3>{t.contact.hoursTitle}</h3>
                <p className="contact-info-row">
                  <span className="contact-info-icon" aria-hidden="true">
                    ◷
                  </span>
                  <span>
                    <strong>{t.contact.weekdays}</strong>
                    <span className="contact-appointment">
                      {t.contact.appointmentOnly}
                    </span>
                  </span>
                </p>
              </section>
            </div>
            {/* <ContactForm language={language} labels={t.contact} /> */}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

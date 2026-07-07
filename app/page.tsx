import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
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
            <p className="hero-lead">{t.hero.lead}</p>
            <div className="hero-actions">
              <a className="button" href="#ypiresies">
                {t.hero.servicesCta}
              </a>
              <a className="button button-outline" href="#epikoinonia">
                {t.hero.contactCta}
              </a>
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

        <section className="contact-band" id="epikoinonia">
          <header className="section-heading">
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
          </header>
          <div className="contact-layout">
            <div className="contact-details">
              <p>
                <strong>{t.contact.phoneLabel}</strong>{" "}
                <a href="tel:+302100000000">{t.contact.phone}</a>
              </p>
              <p>
                <strong>{t.contact.mobileLabel}</strong>{" "}
                <a href="tel:+306900000000">{t.contact.mobile}</a>
              </p>
              <p>
                <strong>{t.contact.emailLabel}</strong>{" "}
                <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
              </p>
            </div>
            <ContactForm language={language} labels={t.contact} />
          </div>
        </section>

        <section className="front-page-content content-card">
          <p>{t.frontPageContent}</p>
        </section>
      </main>
    </SiteShell>
  );
}

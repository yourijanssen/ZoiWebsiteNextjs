import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { SiteShell } from "@/components/site-shell";
import { content, languages, resolveLanguage, services } from "@/lib/site-content";
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
  const year = new Date().getFullYear();
  const homeCopy =
    language === "el"
      ? {
          aboutCta: "Διαβάστε περισσότερα",
          contactKicker: "Online ραντεβού",
          introTitle: "Ένας ήρεμος χώρος για συστημική ψυχοθεραπεία",
          journalKicker: "Συνεδρίες",
          journalTitle: "Online, σταθερά και με φροντίδα",
          latestTitle: "Με τι μπορούμε να δουλέψουμε",
          newsletterLead:
            "Οι συνεδρίες πραγματοποιούνται online, διαρκούν μία ώρα και κοστίζουν 40 ευρώ.",
          newsletterTitle: "Κλείστε την πρώτη online συνεδρία",
          readMore: "Δείτε αναλυτικά",
          serviceKicker: "Online ψυχοθεραπεία",
        }
      : {
          aboutCta: "Read more",
          contactKicker: "Online appointment",
          introTitle: "A calm space for systemic psychotherapy",
          journalKicker: "Sessions",
          journalTitle: "Online, steady and thoughtful",
          latestTitle: "What we can work with",
          newsletterLead:
            "Sessions take place online, last one hour and cost 40 euros.",
          newsletterTitle: "Book the first online session",
          readMore: "View details",
          serviceKicker: "Online psychotherapy",
        };

  return (
    <SiteShell language={language}>
      <main className="site-main editorial-home">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <section className="therapist-hero">
          <div className="hero-language-switcher" aria-label={t.nav.languageLabel}>
            {languages.map((lang) => (
              <Link
                className={`hero-language-option${
                  lang === language ? " is-active" : ""
                }`}
                href={`/?lang=${lang}`}
                hrefLang={lang}
                lang={lang}
                title={lang === "el" ? t.nav.greek : t.nav.english}
                key={lang}
              >
                {lang}
              </Link>
            ))}
          </div>
          <div className="hero-copy">
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
        </section>

        <section className="home-intro-grid">
          <article className="intro-panel intro-panel-dark">
            <p className="profile-kicker">{t.profile.kicker}</p>
            <h2>{homeCopy.introTitle}</h2>
            <p>{t.profile.bio}</p>
            <div className="intro-portrait photo-surface photo-portrait" />
            <Link className="button button-light" href={`/sxetika${langQuery}`}>
              {homeCopy.aboutCta}
            </Link>
          </article>
          <article className="intro-panel intro-panel-light">
            <h2>{homeCopy.latestTitle}</h2>
            <div className="mini-list">
              {localizedServices.slice(0, 3).map((service) => (
                <Link
                  className="mini-list-item"
                  href={`/ypiresies/${service.slug}${langQuery}`}
                  key={service.slug}
                >
                  <span
                    className={`mini-list-image service-media-${service.key}`}
                    aria-hidden="true"
                  />
                  <span>{service.title}</span>
                </Link>
              ))}
            </div>
          </article>
        </section>

        <section className="home-feature-grid">
          <div className="photo-surface photo-walk" aria-hidden="true" />
          <article className="signup-panel photo-surface photo-soft">
            <div className="signup-card">
              <p className="profile-kicker">{homeCopy.contactKicker}</p>
              <h2>{homeCopy.newsletterTitle}</h2>
              <p>{homeCopy.newsletterLead}</p>
              <a className="button" href="#epikoinonia">
                {t.hero.contactCta}
              </a>
            </div>
          </article>
        </section>

        <section className="home-about-band photo-surface photo-leaves">
          <div>
            <h2>{t.profile.name}</h2>
            <p>{t.frontPageContent}</p>
            <Link className="button button-light" href={`/sxetika${langQuery}`}>
              {homeCopy.aboutCta}
            </Link>
          </div>
        </section>

        <section className="life-lately-section">
          <div className="photo-surface photo-session" aria-hidden="true" />
          <article>
            <p className="profile-kicker">{homeCopy.journalKicker}</p>
            <h2>{homeCopy.journalTitle}</h2>
            <p>{t.servicesHeading.text}</p>
            <ol className="steps-list">
              {t.steps.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <a className="button button-light" href="#epikoinonia">
              {t.hero.contactCta}
            </a>
          </article>
        </section>

        <section className="services" id="ypiresies">
          <header className="section-heading">
            <p className="profile-kicker">{homeCopy.serviceKicker}</p>
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
                <Link
                  className="text-link"
                  href={`/ypiresies/${service.slug}${langQuery}`}
                >
                  {t.servicesHeading.link}
                </Link>
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
          <div className="contact-layout contact-layout-single">
            <ContactForm language={language} labels={t.contact} />
          </div>
          <p className="funnel-credit">
            {year} {t.brand}
            <br />
            {t.footerCredit}
          </p>
        </section>
      </main>
    </SiteShell>
  );
}

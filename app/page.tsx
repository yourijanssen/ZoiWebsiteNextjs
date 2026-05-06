import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { content, resolveLanguage, services } from "@/lib/site-content";

type HomePageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const language = resolveLanguage((await searchParams).lang);
  const t = content[language];
  const localizedServices = services[language];
  const langQuery = `?lang=${language}`;

  return (
    <SiteShell language={language}>
      <main className="site-main container">
        <section className="therapist-hero">
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
          <div className="hero-media">
            <div className="image-placeholder">
              <p>{t.hero.imagePlaceholder}</p>
            </div>
          </div>
        </section>

        <section className="office-gallery">
          <article className="gallery-card">
            <div className="image-placeholder">
              <p>{t.gallery.one}</p>
            </div>
          </article>
          <article className="gallery-card">
            <div className="image-placeholder">
              <p>{t.gallery.two}</p>
            </div>
          </article>
        </section>

        <section className="approach" id="sxetika">
          <div className="approach-media">
            <div className="image-placeholder">
              <p>{t.gallery.approachImage}</p>
            </div>
          </div>
          <div className="approach-copy">
            <h2>{t.approach.title}</h2>
            {t.approach.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="approach-list">
              {t.approach.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="quote-highlight">
          <blockquote>
            <p>{t.quote.text}</p>
            <cite>{t.quote.author}</cite>
          </blockquote>
        </section>

        <section className="therapist-profile">
          <div className="profile-media">
            <div className="image-placeholder">
              <p>{t.gallery.profileImage}</p>
            </div>
          </div>
          <div className="profile-copy content-card">
            <p className="profile-kicker">{t.profile.kicker}</p>
            <h2>{t.profile.name}</h2>
            <p className="profile-role">{t.profile.role}</p>
            <p>{t.profile.bio}</p>
            <ul className="profile-credentials">
              {t.profile.credentials.map((credential) => (
                <li key={credential}>{credential}</li>
              ))}
            </ul>
          </div>
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

        <section className="session-steps content-card">
          <h2>{t.steps.title}</h2>
          <ol className="steps-list">
            {t.steps.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
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

        <section className="location-section content-card" id="pou-eimaste">
          <header className="section-heading">
            <h2>{t.location.title}</h2>
          </header>
          <div className="location-layout">
            <div className="location-copy">
              <p>
                <strong>{t.location.addressLabel}</strong> {t.location.address}
              </p>
              <p>
                <strong>{t.location.hoursLabel}</strong> {t.location.hours}
              </p>
              <p>
                <strong>{t.location.accessLabel}</strong> {t.location.access}
              </p>
              <p>
                <a className="text-link" href="#epikoinonia">
                  {t.location.appointment}
                </a>
              </p>
            </div>
            <div className="location-map">
              <iframe
                src={t.location.mapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.location.mapTitle}
              />
            </div>
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
              <p>
                <strong>{t.contact.addressLabel}</strong> {t.location.address}
              </p>
            </div>
            <form
              className="contact-form"
              action={`mailto:${t.contact.email}`}
              method="post"
              encType="text/plain"
            >
              <label>
                <span>{t.contact.nameInput}</span>
                <input type="text" name="name" required />
              </label>
              <label>
                <span>{t.contact.emailInput}</span>
                <input type="email" name="email" required />
              </label>
              <label>
                <span>{t.contact.messageInput}</span>
                <textarea name="message" rows={5} required />
              </label>
              <button className="button" type="submit">
                {t.contact.submit}
              </button>
            </form>
          </div>
        </section>

        <section className="front-page-content content-card">
          <p>{t.frontPageContent}</p>
        </section>
      </main>
    </SiteShell>
  );
}

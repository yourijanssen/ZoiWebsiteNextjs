import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { content, resolveLanguage, services } from "@/lib/site-content";
import { siteUrl } from "@/lib/seo";

type ServicesPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  searchParams,
}: ServicesPageProps): Promise<Metadata> {
  const language = resolveLanguage((await searchParams).lang);
  const t = content[language];
  const title = `${t.nav.therapies} | ${t.brand}`;

  return {
    title: { absolute: title },
    description: t.servicesHeading.text,
    alternates: {
      canonical: `${siteUrl}/ypiresies?lang=${language}`,
      languages: {
        el: `${siteUrl}/ypiresies?lang=el`,
        en: `${siteUrl}/ypiresies?lang=en`,
      },
    },
    openGraph: {
      title,
      description: t.servicesHeading.text,
      url: `${siteUrl}/ypiresies?lang=${language}`,
      siteName: t.brand,
      locale: language === "el" ? "el_GR" : "en_US",
      type: "website",
    },
  };
}

export default async function ServicesPage({ searchParams }: ServicesPageProps) {
  const language = resolveLanguage((await searchParams).lang);
  const t = content[language];
  const localizedServices = services[language];
  const langQuery = `?lang=${language}`;

  return (
    <SiteShell language={language}>
      <main className="site-main container">
        <section className="services">
          <header className="section-heading">
            <h1>{t.servicesHeading.title}</h1>
            <p>{t.servicesHeading.text}</p>
          </header>
          <div className="services-grid">
            {localizedServices.map((service) => (
              <article className="service-card" key={service.slug}>
                <div
                  className={`service-media service-media-${service.key}`}
                  aria-hidden="true"
                />
                <h2>{service.title}</h2>
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
      </main>
    </SiteShell>
  );
}

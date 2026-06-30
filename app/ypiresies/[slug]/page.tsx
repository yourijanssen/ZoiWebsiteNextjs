import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import {
  content,
  getServiceBySlug,
  resolveLanguage,
  services,
} from "@/lib/site-content";
import {
  buildServiceStructuredData,
  siteUrl,
} from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export function generateStaticParams() {
  return services.el.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: ServicePageProps): Promise<Metadata> {
  const language = resolveLanguage((await searchParams).lang);
  const service = getServiceBySlug(language, (await params).slug);

  if (!service) {
    return {};
  }

  return {
    title: {
      absolute:
        language === "el"
          ? `Online συνεδρίες ψυχοθεραπείας | ${content[language].brand}`
          : `Online psychotherapy sessions | ${content[language].brand}`,
    },
    description: service.summary,
    alternates: {
      canonical: `${siteUrl}/ypiresies/${service.slug}?lang=${language}`,
      languages: {
        el: `${siteUrl}/ypiresies/${service.slug}?lang=el`,
        en: `${siteUrl}/ypiresies/${service.slug}?lang=en`,
      },
    },
    openGraph: {
      title: service.title,
      description: service.summary,
      url: `${siteUrl}/ypiresies/${service.slug}?lang=${language}`,
      siteName: content[language].brand,
      locale: language === "el" ? "el_GR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: service.title,
      description: service.summary,
    },
  };
}

export default async function ServicePage({
  params,
  searchParams,
}: ServicePageProps) {
  const language = resolveLanguage((await searchParams).lang);
  const { slug } = await params;
  const service = getServiceBySlug(language, slug);

  if (!service) {
    notFound();
  }

  const t = content[language];
  const langQuery = `?lang=${language}`;
  const structuredData = buildServiceStructuredData(language);

  return (
    <SiteShell language={language}>
      <main className="site-main service-single">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <article className="service-single-card">
          <header className="service-single-hero photo-surface photo-soft">
            <div className="service-single-hero-copy">
              <p className="hero-kicker">{t.servicesHeading.title}</p>
              <h1>{service.title}</h1>
              <p className="hero-lead">{service.summary}</p>
            </div>
          </header>

          <div className="service-single-body">
            <h2>{t.servicesHeading.includes}</h2>
            <ul className="service-points">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="service-single-actions">
              <Link className="button" href={`/${langQuery}#epikoinonia`}>
                {t.hero.contactCta}
              </Link>
              <Link
                className="button button-outline"
                href={`/${langQuery}#ypiresies`}
              >
                {t.servicesHeading.back}
              </Link>
            </div>
          </div>
        </article>
      </main>
    </SiteShell>
  );
}

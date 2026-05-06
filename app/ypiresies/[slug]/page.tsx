import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import {
  content,
  getServiceBySlug,
  resolveLanguage,
  services,
} from "@/lib/site-content";

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
}: ServicePageProps) {
  const language = resolveLanguage((await searchParams).lang);
  const service = getServiceBySlug(language, (await params).slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | ${content[language].brand}`,
    description: service.summary,
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

  return (
    <SiteShell language={language}>
      <main className="site-main container service-single">
        <article className="content-card service-single-card">
          <p className="hero-kicker">{t.servicesHeading.title}</p>
          <h1>{service.title}</h1>
          <p className="hero-lead">{service.summary}</p>

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
            <Link className="button button-outline" href={`/${langQuery}#ypiresies`}>
              {t.servicesHeading.back}
            </Link>
          </div>
        </article>
      </main>
    </SiteShell>
  );
}

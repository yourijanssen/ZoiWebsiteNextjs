import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { content, resolveLanguage } from "@/lib/site-content";
import { siteUrl } from "@/lib/seo";

type AboutPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  searchParams,
}: AboutPageProps): Promise<Metadata> {
  const language = resolveLanguage((await searchParams).lang);
  const t = content[language];
  const title =
    language === "el"
      ? `${t.approach.title} | ${t.brand}`
      : `About ${t.profile.name} | ${t.brand}`;
  const description = t.profile.bio;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: `${siteUrl}/sxetika?lang=${language}`,
      languages: {
        el: `${siteUrl}/sxetika?lang=el`,
        en: `${siteUrl}/sxetika?lang=en`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/sxetika?lang=${language}`,
      siteName: t.brand,
      locale: language === "el" ? "el_GR" : "en_US",
      type: "profile",
    },
  };
}

export default async function AboutPage({ searchParams }: AboutPageProps) {
  const language = resolveLanguage((await searchParams).lang);
  const t = content[language];

  return (
    <SiteShell language={language}>
      <main className="site-main container about-page">
        <article className="about-article content-card">
          <figure className="about-photo">
            <Image
              src="/images/zoi-pantou-about.webp"
              alt={t.profile.name}
              width={768}
              height={1024}
              priority
              sizes="(max-width: 760px) 100vw, 500px"
            />
          </figure>

          <div className="about-heading">
            <p className="profile-kicker">{t.profile.kicker}</p>
            <h1>{t.profile.name}</h1>
            <p className="profile-role">{t.profile.role}</p>
          </div>

          <div className="about-copy">
            {t.approach.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="about-credentials">
            {t.approach.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </main>
    </SiteShell>
  );
}

import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { SiteShell } from "@/components/site-shell";
import { content, resolveLanguage } from "@/lib/site-content";
import { siteUrl } from "@/lib/seo";

type ContactPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  searchParams,
}: ContactPageProps): Promise<Metadata> {
  const language = resolveLanguage((await searchParams).lang);
  const t = content[language];
  const title = `${t.contact.title} | ${t.brand}`;
  const description = t.contact.text.join(" ");

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: `${siteUrl}/epikoinonia?lang=${language}`,
      languages: {
        el: `${siteUrl}/epikoinonia?lang=el`,
        en: `${siteUrl}/epikoinonia?lang=en`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/epikoinonia?lang=${language}`,
      siteName: t.brand,
      locale: language === "el" ? "el_GR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const language = resolveLanguage((await searchParams).lang);
  const t = content[language];

  return (
    <SiteShell language={language}>
      <main className="site-main container contact-page">
        <ContactSection labels={t.contact} />
      </main>
    </SiteShell>
  );
}

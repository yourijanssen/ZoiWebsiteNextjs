import type { Metadata } from "next";
import { content } from "@/lib/site-content";
import { languageUrls, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: content.el.metaTitle,
    template: `%s | ${content.el.brand}`,
  },
  description: content.el.metaDescription,
  alternates: {
    canonical: languageUrls.el,
    languages: {
      el: languageUrls.el,
      en: languageUrls.en,
    },
  },
  openGraph: {
    title: content.el.metaTitle,
    description: content.el.metaDescription,
    url: languageUrls.el,
    siteName: content.el.brand,
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: content.el.metaTitle,
    description: content.el.metaDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}

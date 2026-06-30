import { content, type Language } from "@/lib/site-content";

export const siteUrl = "https://zoi-website-nextjs.vercel.app";

export const languageUrls: Record<Language, string> = {
  el: `${siteUrl}/?lang=el`,
  en: `${siteUrl}/?lang=en`,
};

// Builds a stable JSON-LD graph that matches the public page content.
export function buildHomeStructuredData(language: Language) {
  const t = content[language];
  const currentUrl = languageUrls[language];
  const personId = `${siteUrl}/#zoi-pantou`;
  const serviceId = `${siteUrl}/#online-psychotherapy`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: t.brand,
        url: siteUrl,
        inLanguage: t.htmlLang,
      },
      {
        "@type": "Person",
        "@id": personId,
        name: t.profile.name,
        jobTitle: t.profile.role,
        description: t.profile.bio,
        url: currentUrl,
        knowsLanguage: ["el", "en"],
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: t.servicesHeading.title,
        description: t.servicesHeading.text,
        provider: {
          "@id": personId,
        },
        areaServed: {
          "@type": "VirtualLocation",
          url: currentUrl,
        },
        serviceType:
          language === "el"
            ? "Online συστημική ψυχοθεραπεία στα ελληνικά με ψυχολόγο και ψυχοθεραπεύτρια"
            : "Online systemic psychotherapy in Greek with a psychologist and psychotherapist",
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: t.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

// Builds JSON-LD for the individual online sessions detail page.
export function buildServiceStructuredData(language: Language) {
  const t = content[language];
  const currentUrl = `${siteUrl}/ypiresies/online-synedries?lang=${language}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/ypiresies/online-synedries#service`,
    name: t.servicesHeading.title,
    description: t.servicesHeading.text,
    provider: {
      "@type": "Person",
      name: t.profile.name,
      jobTitle: t.profile.role,
    },
    serviceType:
      language === "el"
        ? "Online συστημική ψυχοθεραπεία στα ελληνικά με ψυχολόγο και ψυχοθεραπεύτρια"
        : "Online systemic psychotherapy in Greek with a psychologist and psychotherapist",
    areaServed: {
      "@type": "VirtualLocation",
      url: currentUrl,
    },
  };
}

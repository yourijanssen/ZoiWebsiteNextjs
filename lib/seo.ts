import { content, type Language, type Service } from "@/lib/site-content";

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
        offers: {
          "@type": "Offer",
          price: "40",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: currentUrl,
        },
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

// Builds JSON-LD for an individual service detail page.
export function buildServiceStructuredData(language: Language, service: Service) {
  const t = content[language];
  const currentUrl = `${siteUrl}/ypiresies/${service.slug}?lang=${language}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/ypiresies/${service.slug}#service`,
    name: service.title,
    description: service.summary,
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
    offers: {
      "@type": "Offer",
      price: "40",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: currentUrl,
    },
  };
}

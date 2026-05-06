"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { content, languages, services, type Language } from "@/lib/site-content";

type SiteShellProps = {
  language: Language;
  children: React.ReactNode;
};

const homeAnchors = {
  home: "/",
  about: "/#sxetika",
  therapies: "/#ypiresies",
  faq: "/#syxnes-erotiseis",
  articles: "/",
  location: "/#pou-eimaste",
  contact: "/#epikoinonia",
};

// Adds the current language as a query string without losing hash navigation.
function withLanguage(href: string, language: Language) {
  const [path, hash = ""] = href.split("#");
  const separator = path.includes("?") ? "&" : "?";
  const nextPath = `${path}${separator}lang=${language}`;

  return hash ? `${nextPath}#${hash}` : nextPath;
}

export function SiteShell({ language, children }: SiteShellProps) {
  const t = content[language];
  const localizedServices = services[language];
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentLang = language;
  const year = new Date().getFullYear();

  const switchHref = (targetLanguage: Language) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", targetLanguage);

    return `${pathname}?${params.toString()}`;
  };

  return (
    <>
      <header className={`site-header${isMenuOpen ? " is-menu-open" : ""}`}>
        <div className="container header-inner">
          <Link className="site-branding" href={withLanguage("/", currentLang)}>
            <span className="brand-mark" aria-hidden="true">
              {t.brandMark}
            </span>
            {t.brand}
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="site-header-panel"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="menu-toggle-box" aria-hidden="true">
              <span className="menu-toggle-line" />
            </span>
            <span className="screen-reader-text">{t.nav.menu}</span>
          </button>
          <div className="header-panel" id="site-header-panel">
            <nav className="site-nav" aria-label={t.nav.mainLabel}>
              <ul className="menu">
                <li className="menu-item current-menu-item">
                  <Link href={withLanguage(homeAnchors.home, currentLang)}>
                    {t.nav.home}
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={withLanguage(homeAnchors.about, currentLang)}>
                    {t.nav.about}
                  </Link>
                </li>
                <li className="menu-item menu-item-has-children">
                  <Link href={withLanguage(homeAnchors.therapies, currentLang)}>
                    {t.nav.therapies}
                  </Link>
                  <ul className="sub-menu">
                    {localizedServices.map((service) => (
                      <li className="menu-item" key={service.slug}>
                        <Link
                          href={withLanguage(
                            `/ypiresies/${service.slug}`,
                            currentLang,
                          )}
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="menu-item">
                  <Link href={withLanguage(homeAnchors.faq, currentLang)}>
                    {t.nav.faq}
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={withLanguage(homeAnchors.articles, currentLang)}>
                    {t.nav.articles}
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={withLanguage(homeAnchors.location, currentLang)}>
                    {t.nav.location}
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={withLanguage(homeAnchors.contact, currentLang)}>
                    {t.nav.contact}
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="header-tools">
              <div
                className="language-switcher"
                aria-label={t.nav.languageLabel}
              >
                {languages.map((lang) => (
                  <Link
                    className={`language-option${
                      lang === currentLang ? " is-active" : ""
                    }`}
                    href={switchHref(lang)}
                    hrefLang={lang}
                    lang={lang}
                    title={lang === "el" ? t.nav.greek : t.nav.english}
                    key={lang}
                  >
                    {lang}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-meta">
            <p className="footer-copy">
              {year} {t.brand}
            </p>
            <p className="footer-credit">{t.footerCredit}</p>
          </div>
          <nav className="footer-nav" aria-label={t.nav.footerLabel}>
            <ul className="menu footer-menu">
              <li className="menu-item">
                <Link href={withLanguage(homeAnchors.home, currentLang)}>
                  {t.nav.home}
                </Link>
              </li>
              <li className="menu-item">
                <Link href={withLanguage(homeAnchors.articles, currentLang)}>
                  {t.nav.articles}
                </Link>
              </li>
              <li className="menu-item">
                <Link href={withLanguage(homeAnchors.location, currentLang)}>
                  {t.nav.location}
                </Link>
              </li>
              <li className="menu-item">
                <Link href={withLanguage(homeAnchors.contact, currentLang)}>
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

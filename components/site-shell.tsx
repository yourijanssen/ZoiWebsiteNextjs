"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  content,
  getDetailServices,
  languages,
  type Language,
  type Service,
} from "@/lib/site-content";

type SiteShellProps = {
  language: Language;
  children: React.ReactNode;
};

const homeAnchors = {
  home: "/",
  about: "/sxetika",
  therapies: "/#ypiresies",
  faq: "/#systimiki-proseggisi",
  contact: "/#epikoinonia",
};

// Adds the current language as a query string without losing hash navigation.
function withLanguage(href: string, language: Language) {
  const [path, hash = ""] = href.split("#");
  const separator = path.includes("?") ? "&" : "?";
  const nextPath = `${path}${separator}lang=${language}`;

  return hash ? `${nextPath}#${hash}` : nextPath;
}

// Keeps the navigation label concise while preserving the full page title.
function serviceNavLabel(service: Service, language: Language) {
  if (language === "el" && service.key === "parentCounseling") {
    return "Συμβουλευτική";
  }

  return service.title;
}

export function SiteShell({ language, children }: SiteShellProps) {
  const t = content[language];
  const navigationServices = getDetailServices(language);
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

  const closeMenu = () => setIsMenuOpen(false);
  const navItemClass = (isCurrent: boolean) =>
    `menu-item${isCurrent ? " current-menu-item" : ""}`;

  return (
    <>
      <header className={`site-header${isMenuOpen ? " is-menu-open" : ""}`}>
        <div className="container header-inner">
          <Link className="site-branding" href={withLanguage("/", currentLang)}>
            <Image
              className="brand-mark"
              src="/images/zoi-pantou-logo.png"
              alt=""
              width={84}
              height={82}
              aria-hidden="true"
              unoptimized
            />
            <span className="brand-copy">
              <span className="brand-name">{t.brand}</span>
              <span className="brand-title">{t.profile.role}</span>
            </span>
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
                <li className={navItemClass(pathname === "/")}>
                  <Link
                    href={withLanguage(homeAnchors.home, currentLang)}
                    onClick={closeMenu}
                  >
                    {t.nav.home}
                  </Link>
                </li>
                <li className={navItemClass(pathname === "/sxetika")}>
                  <Link
                    href={withLanguage(homeAnchors.about, currentLang)}
                    onClick={closeMenu}
                  >
                    {t.nav.about}
                  </Link>
                </li>
                <li
                  className={`${navItemClass(
                    pathname.startsWith("/ypiresies"),
                  )} menu-item-has-children`}
                >
                  <Link
                    href={withLanguage(homeAnchors.therapies, currentLang)}
                    onClick={closeMenu}
                  >
                    {t.nav.therapies}
                  </Link>
                  <ul className="sub-menu">
                    {navigationServices.map((service) => (
                      <li className="menu-item" key={service.slug}>
                        <Link
                          href={withLanguage(
                            `/ypiresies/${service.slug}`,
                            currentLang,
                          )}
                          onClick={closeMenu}
                        >
                          {serviceNavLabel(service, currentLang)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="menu-item">
                  <Link
                    href={withLanguage(homeAnchors.faq, currentLang)}
                    onClick={closeMenu}
                  >
                    {t.nav.faq}
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    href={withLanguage(homeAnchors.contact, currentLang)}
                    onClick={closeMenu}
                  >
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
                    onClick={closeMenu}
                    key={lang}
                  >
                    {lang === "el" ? "ελ" : lang}
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

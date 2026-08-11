import Image from "next/image";

type ContactLabels = {
  title: string;
  text: string[];
  detailsTitle: string;
  hoursTitle: string;
  phoneViberLabel: string;
  emailLabel: string;
  weekdays: string;
  appointmentOnly: string;
  mobile: string;
  email: string;
};

type ContactSectionProps = {
  labels: ContactLabels;
  id?: string;
};

// Renders the shared contact information block used on the homepage and contact page.
export function ContactSection({ labels, id }: ContactSectionProps) {
  return (
    <section className="contact-band" id={id}>
      <header className="section-heading">
        <h2>{labels.title}</h2>
        {labels.text.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </header>
      <div className="contact-layout contact-layout-info-only">
        <div className="contact-details">
          <section className="contact-info-group">
            <h3>{labels.detailsTitle}</h3>
            <p className="contact-info-row">
              <span className="contact-info-icon" aria-hidden="true">
                <Image
                  className="contact-info-icon-image contact-info-icon-phone"
                  src="/images/mobile-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  unoptimized
                />
              </span>
              <span>
                <strong>{labels.phoneViberLabel}</strong>{" "}
                <a href={`tel:${labels.mobile.replaceAll(" ", "")}`}>
                  {labels.mobile}
                </a>
              </span>
            </p>
            <p className="contact-info-row">
              <span className="contact-info-icon" aria-hidden="true">
                <Image
                  className="contact-info-icon-image contact-info-icon-mail"
                  src="/images/mail-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  unoptimized
                />
              </span>
              <span>
                <strong>{labels.emailLabel}</strong>{" "}
                <a href={`mailto:${labels.email}`}>{labels.email}</a>
              </span>
            </p>
          </section>

          <section className="contact-info-group">
            <h3>{labels.hoursTitle}</h3>
            <p className="contact-info-row">
              <span className="contact-info-icon" aria-hidden="true">
                <Image
                  className="contact-info-icon-image contact-info-icon-clock"
                  src="/images/clock-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  unoptimized
                />
              </span>
              <span>
                <strong>{labels.weekdays}</strong>
                <span className="contact-appointment">
                  {labels.appointmentOnly}
                </span>
              </span>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

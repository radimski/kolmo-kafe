import type { Metadata } from "next";
import { kinlesConfig, kinlesMapUrl } from "@/config/site";
import { registeredSeat } from "@/config/operator";
import { EmailLink } from "@/components/EmailLink";
import { LockAnimation, serviceIcons } from "@/components/icons";
import { InquiryForm } from "@/components/InquiryForm";
import { withCanonical } from "@/lib/page-metadata";

export const metadata: Metadata = withCanonical("/", {
  title: kinlesConfig.title,
  description: kinlesConfig.description,
});

export default function KinlesPage() {
  return (
    <main id="top">
      {/* ============ HERO ============ */}
      <section className="hero" aria-labelledby="hero-h1">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">{kinlesConfig.eyebrow}</p>
            <h1 id="hero-h1">
              Od klíče
              <br />
              po <em>trezor.</em>
            </h1>
            <p className="hero-sub">{kinlesConfig.lead}</p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href={kinlesConfig.phoneHref}>
                Zavolat {kinlesConfig.phone}
              </a>
              <a className="btn btn-ghost" href="#sluzby">
                Prohlédnout služby
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <LockAnimation />
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <div className="stats">
        <div className="wrap" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="stats-row">
            {kinlesConfig.stats.map((stat) => (
              <div className="stat" key={stat.lbl}>
                <div className="num">{stat.num}</div>
                <div className="lbl">{stat.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ PROCESS ============ */}
      <section id="postup" className="process-band">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Jak spolupracujeme</p>
            <h2>Od poptávky po montáž</h2>
            <p>
              U jednoduchých zakázek stačí telefon — u větších projektů
              projdeme detaily a připravíme nabídku na míru.
            </p>
          </div>
          <ol className="process-grid">
            {kinlesConfig.process.map((step) => (
              <li className="process-step" key={step.num}>
                <span className="process-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="sluzby">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Co děláme</p>
            <h2>Služby</h2>
            <p>
              Komplexní zabezpečení objektu i domácnosti — od výroby klíče po
              instalaci trezoru a napojení na alarm.
            </p>
          </div>
        </div>
        <div className="wrap">
          <div className="services-grid">
            {kinlesConfig.services.map((service) => (
              <div className="svc" key={service.title}>
                {serviceIcons[service.icon]}
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="tag">{service.tag}</span>
              </div>
            ))}
          </div>
          <p className="aside-note">
            <strong>{kinlesConfig.asideNote.strong}</strong>{" "}
            {kinlesConfig.asideNote.text}
          </p>
        </div>
      </section>

      <div className="wrap">
        <div className="seam" />
      </div>

      {/* ============ BRANDS ============ */}
      <section id="znacky" className="brands-band">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Komu důvěřujeme</p>
            <h2>Autorizovaný prodejce</h2>
            <p>
              Pracujeme se značkami, které v oboru zámečnictví a zabezpečení
              objektů patří k nejspolehlivějším.
            </p>
          </div>
          <div className="brands-grid">
            {kinlesConfig.brands.map((brand) => (
              <div className="brand-plate" key={brand.name}>
                <span className="bname">{brand.name}</span>
                <span className="brole">{brand.role}</span>
                <p>{brand.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="o-nas">
        <div className="wrap about-grid">
          <div>
            <p className="eyebrow">O nás</p>
            <h2>{kinlesConfig.about.heading}</h2>
            {kinlesConfig.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="about-list">
            {kinlesConfig.about.timeline.map((item) => (
              <li key={item.title}>
                <span className="yr">{item.yr}</span>
                <div>
                  <h4>{item.title}</h4>
                  <span className="desc">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="kontakt" className="contact-band">
        <div className="wrap">
          <p className="eyebrow">Spojte se s námi</p>
          <h2>Kontakt</h2>
          <div className="contact-grid">
            <div className="contact-col">
              <div className="contact-card">
                <h3>Provozovna a fakturační údaje</h3>
                <div className="kv">
                  <div className="row">
                    <span className="k">Firma</span>
                    <span className="v">{kinlesConfig.name}</span>
                  </div>
                  <div className="row">
                    <span className="k">Adresa</span>
                    <span className="v">
                      {kinlesConfig.street}
                      <br />
                      {kinlesConfig.zip} {kinlesConfig.city}
                    </span>
                  </div>
                  <div className="row">
                    <span className="k">Zapsané sídlo</span>
                    <span className="v">{registeredSeat}</span>
                  </div>
                  <div className="row">
                    <span className="k">Telefon</span>
                    <span className="v">
                      <a href={kinlesConfig.phoneHref}>{kinlesConfig.phone}</a>
                    </span>
                  </div>
                  <div className="row">
                    <span className="k">E-mail</span>
                    <span className="v">
                      <EmailLink email={kinlesConfig.email} />
                    </span>
                  </div>
                  <div className="row">
                    <span className="k">IČO</span>
                    <span className="v">{kinlesConfig.ico}</span>
                  </div>
                  <div className="row">
                    <span className="k">DIČ</span>
                    <span className="v">{kinlesConfig.dic}</span>
                  </div>
                </div>
                <a
                  className="maplink"
                  href={kinlesMapUrl}
                  target="_blank"
                  rel="noopener"
                >
                  Otevřít v mapě →
                </a>
              </div>

              <div className="contact-card">
                <h3>Otevírací doba</h3>
                <table className="hours-table">
                  <tbody>
                    {kinlesConfig.hours.map((row) => (
                      <tr key={row.days}>
                        <td>{row.days}</td>
                        <td>{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="hours-note">{kinlesConfig.hoursNote}</p>
              </div>
            </div>

            <div className="contact-card">
              <h3>Napište nám</h3>
              <InquiryForm privacyHref="/ochrana-osobnich-udaju" />
            </div>
          </div>

          <div className="cta-block">
            <EmailLink
              email={kinlesConfig.email}
              className="btn btn-primary"
            >
              Napsat poptávku e-mailem
            </EmailLink>
            <a className="btn btn-ghost" href={kinlesConfig.phoneHref}>
              Zavolat {kinlesConfig.phone}
            </a>
            <span className="note">
              Odpovíme obratem v rámci otevírací doby.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

import Nav from "@/components/Nav";

const aspects = [
  {
    label: "Documents",
    subtitle: "Before you apply",
    description:
      "A legal capacity certificate from your home country's embassy or consular office, a freshly certified birth certificate, and supporting papers from both parties must be in order before you can apply.",
    href: "#documents",
  },
  {
    label: "Marriage License",
    subtitle: "Local Civil Registrar",
    description:
      "Applied for at the LCR of the city or municipality where either party resides. A 10-day public posting period is required before issuance.",
    href: "#license",
  },
  {
    label: "The Ceremony",
    subtitle: "Civil or religious",
    description:
      "A civil ceremony before a judge or mayor, or a religious ceremony with an authorised solemnizer — both carry identical legal weight.",
    href: "#ceremony",
  },
  {
    label: "After the Wedding",
    subtitle: "Registration & residency",
    description:
      "The marriage is registered with the PSA. From there you can pursue a 13A immigrant visa for permanent legal residency alongside your spouse.",
    href: "#after",
  },
];

const documents = {
  details: [
    {
      label: "Legal capacity cert.",
      body: "Most foreign nationals must obtain a Certificate of Legal Capacity to Contract Marriage (LCCM) from their home country's embassy or any consular office with jurisdiction over their place of residence in the Philippines. Consular posts in Cebu or Davao may serve those living outside Metro Manila — confirm with your embassy which office covers your area. US citizens are an exception: they submit a notarised Affidavit in Lieu of LCCM, as the US government does not issue LCCMs.",
    },
    {
      label: "Birth certificate",
      body: "You must present a certified copy of your birth certificate — not a photocopy or an older certified copy. The certification must bear a freshly issued date and the original signature of the registrar or authorised issuing officer. Many LCR offices will reject copies that appear to have been issued months or years prior. Check whether your country's records require an apostille or embassy authentication before arriving in the Philippines.",
    },
    {
      label: "Filipino spouse",
      body: "PSA-issued birth certificate · CENOMAR (Certificate of No Marriage Record) from the PSA, confirming no existing marriage record · Valid government-issued ID · Barangay clearance or certificate of residency from their current address · Cedula (Community Tax Certificate), obtained from the barangay office where the Filipino spouse currently resides.",
    },
    {
      label: "Previously married",
      body: "If you have been previously married and that marriage ended in divorce, you must present the original divorce decree — not a certified copy, and not a photocopy. The document must come directly from the court that issued the order and must bear that court's official embossed seal. Uncertified copies are routinely rejected. Note that the Philippines does not automatically recognise foreign divorces: a separate judicial recognition proceeding may be required before you can legally remarry here. Legal counsel is strongly advised in any previously-married situation.",
    },
  ],
};

const license = {
  details: [
    {
      label: "Where to apply",
      body: "At the Local Civil Registrar (LCR) of the city or municipality where either the bride or groom has resided for at least six months. Both parties must appear in person to sign the application.",
    },
    {
      label: "10-day posting",
      body: "After your application is filed, the LCR posts a public notice for 10 days to allow any legal objections to be raised. The license cannot be issued before this period ends.",
    },
    {
      label: "Validity",
      body: "A Philippine marriage license is valid for 120 days from the date of issue. If the ceremony does not take place within that window, you must reapply.",
    },
    {
      label: "Pre-marriage orientation",
      body: "Both parties are required to attend a pre-marriage orientation and counselling (PMOC) seminar, typically organised by the LCR or a recognised family services provider. A certificate of attendance is issued upon completion and must be submitted as part of the marriage license application.",
    },
    {
      label: "Under 25 — counselling",
      body: "If the Filipino spouse is below 25 years of age, an additional family planning counselling session is required, and a separate certificate of completion must be submitted. The same age threshold triggers a parental consent requirement: the Filipino party must present a notarised written consent from their parents or legal guardian, or alternatively, the parents may appear in person at the LCR with valid government-issued identification when the paperwork is filed.",
    },
    {
      label: "Fees & timeline",
      body: "LCR fees vary by municipality — typically PHP 500–1,500 for the license itself. Allow 2–4 weeks from application to issuance, accounting for the posting period and document review.",
    },
  ],
};

const ceremony = {
  details: [
    {
      label: "Civil ceremony",
      body: "Conducted by a judge, mayor, or other authorised civil official. Can take place at a court, city hall, or another venue agreed upon with the officiant. Straightforward and generally the faster administrative path.",
    },
    {
      label: "Religious ceremony",
      body: "Conducted by a minister, priest, rabbi, or imam of a registered religious organisation. The ceremony must still be preceded by a valid marriage license (except for marriages within an articled religious group where exceptions apply).",
    },
    {
      label: "Venue & witnesses",
      body: "Philippine law requires at least two witnesses aged 18 or older to be present and sign the marriage certificate. The ceremony may be held almost anywhere — a home, a beach, a hotel — provided the solemnizer agrees.",
    },
    {
      label: "Marrying abroad",
      body: "Filipinos may marry abroad, but the marriage must be reported to the Philippine Embassy or Consulate within 30 days and eventually recorded with the PSA to be recognised in the Philippines.",
    },
  ],
};

const after = {
  details: [
    {
      label: "PSA registration",
      body: "Your marriage certificate is submitted to the local civil registry, which forwards it to the Philippine Statistics Authority (PSA). A PSA-authenticated copy — the document you will need for most official purposes — typically becomes available 2–3 months after the ceremony.",
    },
    {
      label: "Reporting requirements",
      body: "Foreign nationals should update their civil status with the Bureau of Immigration as part of their annual report (if on a long-stay visa) and report the change to their home country's embassy if required by their own nationality law.",
    },
    {
      label: "13A visa path",
      body: "Once you hold a PSA-authenticated marriage certificate, you can apply for a 13A Non-Quota Immigrant Visa — giving you the right to live and work in the Philippines permanently. See the Visas page for the full requirements and process.",
    },
    {
      label: "Name change",
      body: "Under Philippine law, a wife may use her husband's surname, retain her maiden name, or hyphenate both. A foreign national changing their name on Philippine documents will need to update their passport via their own country's processes separately.",
    },
  ],
};

export default function MarriagePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Inter', sans-serif;
          background: #F8F6F1;
          color: #0B1F3A;
        }

        /* ── NAV ── */
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 48px;
          border-bottom: 1px solid rgba(248,246,241,0.1);
        }
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #F8F6F1;
          letter-spacing: 0.02em;
          text-decoration: none;
        }
        .nav-logo span { color: #C9A84C; }
        .nav-links {
          display: flex;
          gap: 32px;
          list-style: none;
        }
        .nav-links a {
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(248,246,241,0.65);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-links a:hover,
        .nav-links a.active { color: #F8F6F1; }

        /* ── PAGE HEADER ── */
        .page-header { background: #0B1F3A; }
        .page-hero {
          padding: 72px 48px 96px;
          max-width: 820px;
        }
        .page-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 20px;
        }
        .page-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #C9A84C;
        }
        .page-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 700;
          line-height: 1.12;
          color: #F8F6F1;
          margin-bottom: 24px;
        }
        .page-sub {
          font-size: 1.05rem;
          font-weight: 300;
          line-height: 1.65;
          color: rgba(248,246,241,0.72);
          max-width: 560px;
        }

        /* ── SECTIONS ── */
        .section { padding: 96px 48px; }
        .section-light { background: #F8F6F1; }
        .section-dark  { background: #0B1F3A; }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 16px;
        }
        .section-label::before {
          content: '◈';
          font-size: 0.65rem;
        }
        .section-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700;
          color: #0B1F3A;
          line-height: 1.2;
          margin-bottom: 56px;
          max-width: 560px;
        }
        .section-heading-light { color: #F8F6F1; }

        /* ── OVERVIEW CARDS ── */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 1px solid #E8E4DC;
          border-left: 1px solid #E8E4DC;
        }
        .card {
          padding: 36px 32px;
          border-right: 1px solid #E8E4DC;
          border-bottom: 1px solid #E8E4DC;
          text-decoration: none;
          display: block;
          transition: background 0.2s;
        }
        .card:hover { background: #fff; }
        .card-label {
          font-family: 'Playfair Display', serif;
          font-size: 1.08rem;
          font-weight: 600;
          color: #0B1F3A;
          margin-bottom: 4px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 8px;
        }
        .card-label::after {
          content: '→';
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: #C9A84C;
          flex-shrink: 0;
          margin-top: 2px;
          transition: transform 0.2s;
        }
        .card:hover .card-label::after { transform: translateX(4px); }
        .card-subtitle {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: #C9A84C;
          margin-bottom: 12px;
          text-transform: uppercase;
        }
        .card-desc {
          font-size: 0.85rem;
          font-weight: 400;
          line-height: 1.6;
          color: #5C6B7A;
        }

        /* ── DETAIL SECTIONS ── */
        .detail-inner {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
        }
        .detail-intro {
          font-size: 0.95rem;
          font-weight: 300;
          line-height: 1.75;
          color: #5C6B7A;
          margin-top: 4px;
        }
        .detail-intro-light { color: rgba(248,246,241,0.65); }

        .detail-rows {
          display: flex;
          flex-direction: column;
          padding-top: 8px;
        }
        .detail-row {
          padding: 28px 0;
          border-bottom: 1px solid #E8E4DC;
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 24px;
          align-items: start;
        }
        .detail-row:first-child { border-top: 1px solid #E8E4DC; }
        .detail-row-dark { border-bottom-color: rgba(248,246,241,0.1); }
        .detail-row-dark:first-child { border-top-color: rgba(248,246,241,0.1); }
        .detail-row-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #C9A84C;
          padding-top: 2px;
        }
        .detail-row-body {
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.75;
          color: #4A5868;
        }
        .detail-row-body-light { color: rgba(248,246,241,0.72); }

        /* ── LEGAL NOTE ── */
        .legal-section {
          background: #F8F6F1;
          border-top: 3px solid #C9A84C;
        }
        .legal-inner {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
        }
        .legal-icon {
          width: 48px;
          height: 48px;
          background: #C9A84C;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 1.2rem;
          color: #0B1F3A;
          font-weight: 700;
        }
        .legal-body {
          font-size: 0.95rem;
          font-weight: 300;
          line-height: 1.8;
          color: #5C6B7A;
          max-width: 640px;
        }
        .legal-body strong {
          color: #0B1F3A;
          font-weight: 600;
        }

        /* ── FOOTER ── */
        .footer {
          background: #0B1F3A;
          border-top: 1px solid rgba(248,246,241,0.08);
          padding: 40px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #F8F6F1;
          letter-spacing: 0.02em;
          text-decoration: none;
        }
        .footer-logo span { color: #C9A84C; }
        .footer-note {
          font-size: 0.75rem;
          color: rgba(248,246,241,0.35);
        }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .nav { padding: 20px 24px; }
          .nav-links { display: none; }
          .page-hero { padding: 52px 24px 72px; }
          .section { padding: 72px 24px; }
          .card-grid { grid-template-columns: repeat(2, 1fr); }
          .detail-inner { grid-template-columns: 1fr; gap: 40px; }
          .legal-inner { grid-template-columns: 1fr; gap: 32px; }
          .detail-row { grid-template-columns: 1fr; gap: 8px; }
          .footer { flex-direction: column; gap: 12px; text-align: center; }
        }
        @media (max-width: 560px) {
          .card-grid { grid-template-columns: 1fr; }
          .page-title { font-size: 2rem; }
        }
      `}</style>

      {/* PAGE HEADER */}
      <header className="page-header">
        <Nav active="/marriage" />

        <div className="page-hero">
          <p className="page-eyebrow">Marriage</p>
          <h1 className="page-title">
            Marrying a Filipino citizen,<br />done by the book.
          </h1>
          <p className="page-sub">
            A practical walkthrough of the legal requirements, documents, and
            process for foreign nationals marrying in the Philippines — from
            your embassy appointment to your PSA marriage certificate.
          </p>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="section section-light" id="overview">
        <p className="section-label">How the process works</p>
        <h2 className="section-heading">
          Four stages, clearly explained.
        </h2>
        <div className="card-grid">
          {aspects.map((a) => (
            <a key={a.label} href={a.href} className="card">
              <div className="card-label">{a.label}</div>
              <p className="card-subtitle">{a.subtitle}</p>
              <p className="card-desc">{a.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="section section-dark" id="documents">
        <div className="detail-inner">
          <div>
            <p className="section-label">Documents</p>
            <h2 className="section-heading section-heading-light">
              What you need to gather first.
            </h2>
            <p className="detail-intro detail-intro-light">
              Before you can apply for a marriage license, both parties must
              have their documentary requirements in order. The foreign
              national&rsquo;s paperwork typically requires a visit to your
              home country&rsquo;s embassy in Manila.
            </p>
          </div>
          <div className="detail-rows">
            {documents.details.map((d) => (
              <div key={d.label} className="detail-row detail-row-dark">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body detail-row-body-light">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARRIAGE LICENSE */}
      <section className="section section-light" id="license">
        <div className="detail-inner">
          <div>
            <p className="section-label">Marriage License</p>
            <h2 className="section-heading">
              The Local Civil Registrar process.
            </h2>
            <p className="detail-intro">
              The marriage license is obtained from the Local Civil Registrar
              (LCR) of the city or municipality where either party resides. Both
              parties must appear in person — the license cannot be applied for
              by proxy.
            </p>
          </div>
          <div className="detail-rows">
            {license.details.map((d) => (
              <div key={d.label} className="detail-row">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEREMONY */}
      <section className="section section-dark" id="ceremony">
        <div className="detail-inner">
          <div>
            <p className="section-label">The Ceremony</p>
            <h2 className="section-heading section-heading-light">
              Civil, religious, or somewhere in between.
            </h2>
            <p className="detail-intro detail-intro-light">
              Philippine law recognises both civil and religious marriages
              equally, provided both are solemnised by an authorised person and
              conducted with a valid marriage license. The choice is yours.
            </p>
          </div>
          <div className="detail-rows">
            {ceremony.details.map((d) => (
              <div key={d.label} className="detail-row detail-row-dark">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body detail-row-body-light">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFTER THE WEDDING */}
      <section className="section section-light" id="after">
        <div className="detail-inner">
          <div>
            <p className="section-label">After the Wedding</p>
            <h2 className="section-heading">
              Registration, records, and what comes next.
            </h2>
            <p className="detail-intro">
              The ceremony is just the beginning administratively. Getting your
              PSA-certified marriage certificate and understanding the residency
              options it opens for you are the practical next steps.
            </p>
          </div>
          <div className="detail-rows">
            {after.details.map((d) => (
              <div key={d.label} className="detail-row">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL NOTE */}
      <section className="section legal-section">
        <div className="legal-inner">
          <div>
            <div className="legal-icon">!</div>
            <p className="section-label">Important note</p>
            <h2 className="section-heading">
              Seek qualified legal advice.
            </h2>
          </div>
          <p className="legal-body">
            <strong>This page is for general informational purposes only</strong> and
            does not constitute legal advice. Philippine family law — particularly
            around annulment, recognition of foreign divorces, and previously married
            parties — is complex and changes with court rulings and administrative
            circulars.
            <br /><br />
            Documentary requirements can differ between Local Civil Registrar offices,
            and embassies update their procedures regularly. Before beginning the
            process, verify current requirements directly with your embassy and the LCR
            of the relevant municipality.
            <br /><br />
            We strongly recommend consulting a licensed Philippine family law attorney,
            especially if either party has been previously married or if there are any
            questions about the validity of prior marriages. Expat Compass PH is not a
            law firm and does not provide legal advice.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="/" className="footer-logo">
          Expat Compass <span>PH</span>
        </a>
        <p className="footer-note">
          © {new Date().getFullYear()} Expat Compass PH · For informational purposes only
        </p>
      </footer>
    </>
  );
}

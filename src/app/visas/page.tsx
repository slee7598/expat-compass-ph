import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const visaTypes = [
  {
    label: "SRRV",
    subtitle: "Special Resident Retiree's Visa",
    description:
      "Long-stay permanent residency for retirees aged 35+, issued by the Philippine Retirement Authority.",
    href: "#srrv",
  },
  {
    label: "13A",
    subtitle: "Non-Quota Immigrant Visa",
    description:
      "For foreign nationals married to a Filipino citizen. Leads directly to permanent residency.",
    href: "#13a",
  },
  {
    label: "9(a) Tourist",
    subtitle: "Temporary Visitor's Visa",
    description:
      "The default entry for most nationalities. Extendable monthly at any Bureau of Immigration office.",
    href: "#tourist",
  },
  {
    label: "Other Routes",
    subtitle: "SIRV, Work Permits, ACR-I",
    description:
      "Investor visas, employment passes, and alien certificates of registration for specific circumstances.",
    href: null,
  },
];

const srrv = {
  details: [
    {
      label: "Who qualifies",
      body: "Foreign nationals aged 35 and above. Applicants aged 50 or older with a qualifying pension qualify for the lowest required deposit tier.",
    },
    {
      label: "Required deposit",
      body: "USD 10,000 for applicants aged 50+ with a pension · USD 20,000 for ages 35–49 or 50+ without a pension. Deposits are held with a PRA-accredited Philippine bank.",
    },
    {
      label: "Key benefits",
      body: "No annual reporting to the Bureau of Immigration. Deposit can later be converted toward a condo purchase or long-term lease. Right to work or study. Duty-free importation of household goods on first entry.",
    },
    {
      label: "Ongoing costs",
      body: "Annual PRA membership fee of approximately USD 360. Health insurance coverage is mandatory for the duration of your stay in the country.",
    },
  ],
};

const visa13a = {
  details: [
    {
      label: "Eligibility",
      body: "Foreign nationals who are legally married to a Filipino citizen. The marriage must be valid and recognised under Philippine law — common-law partnerships do not qualify.",
    },
    {
      label: "Probationary period",
      body: "Approved applicants first receive a 1-year Probationary Immigrant Visa. After 12 months of continuous residence, this converts to a permanent 13A upon application.",
    },
    {
      label: "Documents required",
      body: "Valid passport · PSA-authenticated marriage certificate · Birth certificate of Filipino spouse · Police clearances from countries of prior residence · Medical certificate · NBI clearance",
    },
    {
      label: "What it allows",
      body: "Unlimited stay in the Philippines. Right to work without a separate Alien Employment Permit. Ability to open bank accounts, sign long-term leases, and access resident-level services.",
    },
  ],
};

const tourist = {
  details: [
    {
      label: "Initial stay on arrival",
      body: "30 days for most nationalities, automatically extended to 59 days at many ports of entry. Check the Bureau of Immigration's current visa-free agreement list for your nationality.",
    },
    {
      label: "Extension increments",
      body: "Extensions are issued in 1- or 2-month increments at any BI office or accredited travel agency. Each extension costs approximately PHP 3,130–3,500 depending on duration and fees in effect.",
    },
    {
      label: "Maximum continuous stay",
      body: "A tourist visa may be extended for a cumulative total of up to 36 months from original entry. After 36 months you must depart — but there is no restriction on how quickly you may return.",
    },
    {
      label: "ECC on departure",
      body: "Any stay exceeding 6 continuous months requires an Emigration Clearance Certificate (ECC) from the BI before you depart. This is a routine administrative step, not a bar on leaving.",
    },
  ],
};

export default function VisasPage() {
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

        /* ── PAGE HEADER (navy) ── */
        .page-header {
          background: #0B1F3A;
        }
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

        /* ── SECTION SHARED ── */
        .section {
          padding: 96px 48px;
        }
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
        .section-heading-light {
          color: #F8F6F1;
        }

        /* ── OVERVIEW CARDS ── */
        .visa-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 1px solid #E8E4DC;
          border-left: 1px solid #E8E4DC;
        }
        .visa-card {
          padding: 36px 32px;
          border-right: 1px solid #E8E4DC;
          border-bottom: 1px solid #E8E4DC;
          text-decoration: none;
          display: block;
          transition: background 0.2s;
        }
        .visa-card:hover { background: #fff; }
        .visa-card-label {
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
        .visa-card-label::after {
          content: '→';
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: #C9A84C;
          flex-shrink: 0;
          margin-top: 2px;
          transition: transform 0.2s;
        }
        .visa-card:hover .visa-card-label::after {
          transform: translateX(4px);
        }
        .visa-card-subtitle {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: #C9A84C;
          margin-bottom: 12px;
          text-transform: uppercase;
        }
        .visa-card-desc {
          font-size: 0.85rem;
          font-weight: 400;
          line-height: 1.6;
          color: #5C6B7A;
        }
        .visa-card-inactive {
          cursor: default;
          opacity: 0.45;
        }
        .visa-card-inactive:hover { background: transparent; }
        .visa-card-inactive .visa-card-label::after { display: none; }

        /* ── VISA DETAIL SECTIONS ── */
        .visa-detail-inner {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
        }
        .visa-detail-lead {}
        .visa-detail-intro {
          font-size: 0.95rem;
          font-weight: 300;
          line-height: 1.75;
          color: #5C6B7A;
          margin-top: 4px;
        }
        .visa-detail-intro-light {
          color: rgba(248,246,241,0.65);
        }
        .visa-rows {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding-top: 8px;
        }
        .visa-row {
          padding: 28px 0;
          border-bottom: 1px solid #E8E4DC;
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 24px;
          align-items: start;
        }
        .visa-row:first-child { border-top: 1px solid #E8E4DC; }
        .visa-row-dark {
          border-bottom-color: rgba(248,246,241,0.1);
        }
        .visa-row-dark:first-child {
          border-top-color: rgba(248,246,241,0.1);
        }
        .visa-row-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #C9A84C;
          padding-top: 2px;
        }
        .visa-row-body {
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.75;
          color: #4A5868;
        }
        .visa-row-body-light {
          color: rgba(248,246,241,0.72);
        }

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
          flex-shrink: 0;
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

        /* ── STEVE'S NOTE ── */
        .sn-section {
          background: #0D1E30;
          border-top: 3px solid #C9A84C;
          padding: 80px 48px;
          position: relative;
          overflow: hidden;
        }
        .sn-section::before {
          content: 'S';
          font-family: 'Playfair Display', serif;
          font-size: 320px;
          font-weight: 700;
          color: rgba(201,168,76,0.05);
          position: absolute;
          right: -10px;
          top: -60px;
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }
        .sn-inner {
          max-width: 860px;
          position: relative;
          z-index: 1;
        }
        .sn-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 28px;
        }
        .sn-monogram {
          width: 52px;
          height: 52px;
          background: #C9A84C;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #0B1F3A;
          flex-shrink: 0;
        }
        .sn-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #F8F6F1;
          line-height: 1.1;
        }
        .sn-tag {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-top: 4px;
        }
        .sn-rule {
          height: 1px;
          background: rgba(201,168,76,0.2);
          margin-bottom: 32px;
        }
        .sn-body {
          font-size: 0.95rem;
          font-weight: 300;
          line-height: 1.85;
          color: rgba(248,246,241,0.82);
        }
        .sn-body p + p { margin-top: 14px; }
        .sn-verified {
          margin-top: 36px;
          padding-top: 20px;
          border-top: 1px solid rgba(201,168,76,0.2);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #C9A84C;
        }
        .sn-verified::before { content: '✓'; }
        @media (max-width: 900px) {
          .sn-section { padding: 56px 24px; }
        }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .nav { padding: 20px 24px; }
          .nav-links { display: none; }
          .page-hero { padding: 52px 24px 72px; }
          .section { padding: 72px 24px; }
          .visa-grid { grid-template-columns: repeat(2, 1fr); }
          .visa-detail-inner { grid-template-columns: 1fr; gap: 40px; }
          .legal-inner { grid-template-columns: 1fr; gap: 32px; }
          .visa-row { grid-template-columns: 1fr; gap: 8px; }
          .footer { flex-direction: column; gap: 12px; text-align: center; }
        }
        @media (max-width: 560px) {
          .visa-grid { grid-template-columns: 1fr; }
          .page-title { font-size: 2rem; }
        }
      `}</style>

      {/* PAGE HEADER */}
      <header className="page-header">
        <Nav active="/visas" />

        <div className="page-hero">
          <p className="page-eyebrow">Visas &amp; Residency</p>
          <h1 className="page-title">
            Understanding your<br />long-stay options.
          </h1>
          <p className="page-sub">
            The Philippines offers several viable paths for foreigners who want
            to stay longer than a holiday. Here is a clear breakdown of the
            main routes — what they require, what they provide, and who they
            suit.
          </p>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="section section-light" id="overview">
        <p className="section-label">Visa types at a glance</p>
        <h2 className="section-heading">
          Four routes worth knowing about.
        </h2>
        <div className="visa-grid">
          {visaTypes.map((v) =>
            v.href ? (
              <a key={v.label} href={v.href} className="visa-card">
                <div className="visa-card-label">{v.label}</div>
                <p className="visa-card-subtitle">{v.subtitle}</p>
                <p className="visa-card-desc">{v.description}</p>
              </a>
            ) : (
              <div key={v.label} className="visa-card visa-card-inactive">
                <div className="visa-card-label">{v.label}</div>
                <p className="visa-card-subtitle">{v.subtitle}</p>
                <p className="visa-card-desc">{v.description}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* SRRV */}
      <section className="section section-dark" id="srrv">
        <div className="visa-detail-inner">
          <div className="visa-detail-lead">
            <p className="section-label">SRRV</p>
            <h2 className="section-heading section-heading-light">
              Special Resident Retiree&rsquo;s Visa
            </h2>
            <p className="visa-detail-intro visa-detail-intro-light">
              Issued by the Philippine Retirement Authority (PRA), the SRRV is
              designed for foreign retirees who want indefinite, hassle-free
              residency. Holders can enter and exit the country freely without
              a re-entry permit.
            </p>
          </div>
          <div className="visa-rows">
            {srrv.details.map((d) => (
              <div key={d.label} className="visa-row visa-row-dark">
                <span className="visa-row-label">{d.label}</span>
                <p className="visa-row-body visa-row-body-light">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13A */}
      <section className="section section-light" id="13a">
        <div className="visa-detail-inner">
          <div className="visa-detail-lead">
            <p className="section-label">13A Visa</p>
            <h2 className="section-heading">
              Spouse of a Filipino Citizen
            </h2>
            <p className="visa-detail-intro">
              If you are legally married to a Filipino citizen, the 13A
              Non-Quota Immigrant Visa is typically the most straightforward
              route to permanent legal residency — with the right to live and
              work in the country indefinitely.
            </p>
          </div>
          <div className="visa-rows">
            {visa13a.details.map((d) => (
              <div key={d.label} className="visa-row">
                <span className="visa-row-label">{d.label}</span>
                <p className="visa-row-body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOURIST EXTENSIONS */}
      <section className="section section-dark" id="tourist">
        <div className="visa-detail-inner">
          <div className="visa-detail-lead">
            <p className="section-label">Tourist Visa (9a)</p>
            <h2 className="section-heading section-heading-light">
              Extending Your Tourist Stay
            </h2>
            <p className="visa-detail-intro visa-detail-intro-light">
              Most nationalities enter the Philippines visa-free under a 9(a)
              Temporary Visitor&rsquo;s Visa. With regular extensions at any Bureau
              of Immigration office, a tourist stay can legally reach 36 months
              — making it a practical long-term option for those who are not yet
              committed to full residency.
            </p>
          </div>
          <div className="visa-rows">
            {tourist.details.map((d) => (
              <div key={d.label} className="visa-row visa-row-dark">
                <span className="visa-row-label">{d.label}</span>
                <p className="visa-row-body visa-row-body-light">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEVE'S NOTE */}
      <section className="sn-section">
        <div className="sn-inner">
          <div className="sn-header">
            <div className="sn-monogram">S</div>
            <div>
              <p className="sn-name">Steve&rsquo;s Note</p>
              <p className="sn-tag">First-hand experience · Cebu, Philippines</p>
            </div>
          </div>
          <div className="sn-rule" />
          <div className="sn-body">
            <p>When I arrived in the Philippines, my passport stamp gave me 30 days. After that, I had to visit the Bureau of Immigration. The first extension is 30 days only — no option to go longer on the first visit — and it cost me approximately $80 USD.</p>
            <p>After those 30 days, you can apply for a 60-day extension. You&rsquo;d think it would cost more, but it came out to roughly the same $80. However, on the next 60-day extension visit, they will require you to obtain your ACR card (Alien Certificate of Registration). That visit cost me close to $200 USD. Budget for it — it catches a lot of people off guard.</p>
            <p>One thing I&rsquo;d strongly recommend: if you&rsquo;re not planning to return to your home country within the year, take a trip to a nearby country — Thailand and Vietnam are popular choices — and let your entry stamp reset. If you stay in the Philippines for over a year without leaving, the exit process becomes significantly more complicated and considerably more expensive. I&rsquo;ve heard this from people who&rsquo;ve been through it. Don&rsquo;t let it sneak up on you.</p>
          </div>
          <p className="sn-verified">Last Verified: June 2026 · Cebu, Philippines</p>
        </div>
      </section>

      {/* LEGAL NOTE */}
      <section className="section legal-section">
        <div className="legal-inner">
          <div>
            <div className="legal-icon">!</div>
            <p className="section-label">Important note</p>
            <h2 className="section-heading">
              Always consult a qualified professional.
            </h2>
          </div>
          <p className="legal-body">
            <strong>The information on this page is for general guidance only</strong> and
            reflects conditions as understood at the time of writing. Philippine immigration
            law, PRA requirements, and Bureau of Immigration procedures change regularly —
            sometimes without prominent public notice.
            <br /><br />
            Before making any decisions based on your visa status, we strongly recommend
            consulting a licensed Philippine immigration attorney or an accredited visa
            consultant. Fees, documentary requirements, processing times, and eligibility
            rules can all vary depending on your nationality, current legal status, and the
            specific BI office or PRA branch you deal with.
            <br /><br />
            Expat Compass PH is not a law firm and does not provide legal advice. Nothing on
            this site constitutes a legal opinion or creates an attorney-client relationship.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

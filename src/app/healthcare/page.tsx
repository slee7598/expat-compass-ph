import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Healthcare in the Philippines for Expats — Hospitals, Insurance & Costs",
  description:
    "Guide to private hospitals, PhilHealth, expat health insurance, and real medical costs in the Philippines. First-hand experience from an expat living in Cebu.",
  alternates: { canonical: "https://expatcompassph.com/healthcare" },
};

const aspects = [
  {
    label: "Private Hospitals",
    subtitle: "Where expats get care",
    description:
      "The top private hospitals in Manila and Cebu rival international standards, with internationally trained doctors and modern equipment. Quality drops significantly outside major cities.",
    href: "#hospitals",
  },
  {
    label: "PhilHealth",
    subtitle: "National health insurance",
    description:
      "The government's health insurance scheme offers partial coverage for hospitalisation and some procedures. It is a supplement — not a replacement — for comprehensive private insurance.",
    href: "#philhealth",
  },
  {
    label: "Private Insurance",
    subtitle: "The expat standard",
    description:
      "Most long-term expats carry international or local private health insurance. It is strongly recommended — and required for SRRV holders. Premiums rise significantly with age.",
    href: "#insurance",
  },
  {
    label: "Medical Costs",
    subtitle: "What to budget",
    description:
      "Routine consultations and dental care are affordable by Western standards. Hospitalisation and specialist procedures at top private hospitals can be expensive without insurance.",
    href: "#costs",
  },
];

const hospitals = {
  details: [
    {
      label: "Top Manila hospitals",
      body: "St. Luke's Medical Center (BGC and Quezon City), Makati Medical Center, Asian Hospital and Medical Center (Muntinlupa), The Medical City (Pasig), and Cardinal Santos Medical Center (San Juan) are consistently regarded as the country's leading private hospitals. They are well-equipped, English-speaking, and staffed by physicians who have trained abroad.",
    },
    {
      label: "Cebu & Visayas",
      body: "Chong Hua Hospital and Cebu Doctors' University Hospital are the principal private referral centres in Cebu City, offering a broad range of specialties. Both operate to a standard comparable to mid-tier Manila hospitals. Elsewhere in the Visayas, options become more limited and serious cases are typically referred to Cebu.",
    },
    {
      label: "Davao & Mindanao",
      body: "Davao Doctors Hospital and Brokenshire Hospital are the most reputable private facilities in Davao City, covering most routine and specialist needs. Provincial Mindanao has fewer options; emergency cases in remote areas often require transport to the nearest city.",
    },
    {
      label: "Emergency number",
      body: "911 is the national emergency hotline. However, response times vary considerably by location and are generally slower outside Metro Manila. In practice, most expats living near a major hospital find it faster to go directly to the emergency room rather than wait for an ambulance.",
    },
    {
      label: "Language & accreditation",
      body: "All top-tier private hospitals operate in English at both the clinical and administrative level. Several Manila hospitals hold Joint Commission International (JCI) accreditation, the global benchmark for hospital quality. Ask specifically about JCI status when choosing a facility for planned procedures.",
    },
  ],
};

const philhealth = {
  details: [
    {
      label: "What it is",
      body: "PhilHealth (Philippine Health Insurance Corporation) is the government-run national health insurance programme. All employed workers in the Philippines are required to contribute. For expats, voluntary membership is available to holders of long-stay visas including the SRRV and 13A.",
    },
    {
      label: "Voluntary premiums",
      body: "Voluntary members pay contributions based on their declared monthly income, with a current minimum of around PHP 500 per month. Premiums are updated periodically by the PhilHealth board — verify the current rate directly with PhilHealth or the Bureau of Immigration when enrolling.",
    },
    {
      label: "What it covers",
      body: "PhilHealth provides partial reimbursement for hospitalisation, certain surgical procedures, specific outpatient services, and some medicines under its Z-benefit packages for serious illnesses such as cancer. It does not cover the full cost of most hospital stays and leaves a significant gap in almost all cases.",
    },
    {
      label: "Honest limitations",
      body: "PhilHealth alone is not sufficient for any but the most minor hospitalisation. Coverage rates are set by government case rates that have not kept pace with private hospital billing. Most patients covered only by PhilHealth face out-of-pocket bills that represent the majority of total costs. It functions best as a useful supplement to private insurance, not a standalone safety net.",
    },
    {
      label: "How to enrol",
      body: "Voluntary enrolment can be done at any PhilHealth office with a valid visa, passport, and ACR I-Card. Some LGUs and private hospitals also assist with enrolment. Once enrolled, keep contributions current — lapsed membership requires a settling of arrears before benefits can be claimed.",
    },
  ],
};

const insurance = {
  details: [
    {
      label: "International vs. local",
      body: "International health insurance (sold by global insurers such as Cigna, AXA, Bupa, and Allianz Care) provides coverage in the Philippines and worldwide, including medical evacuation. Local Philippine health insurance (offered by Maxicare, Medicard, and similar HMO networks) covers treatment at affiliated hospitals in the Philippines only, typically at lower premiums.",
    },
    {
      label: "Approximate costs",
      body: "International cover for a healthy adult in their 30s typically runs USD 1,200–2,500 per year for a solid plan with reasonable deductibles. For ages 50–60, expect USD 3,000–6,500. Over 65, premiums rise sharply and some insurers cap enrolment age or significantly restrict benefits. Local HMO plans are cheaper but coverage and network access are more limited.",
    },
    {
      label: "What to check",
      body: "Confirm that the Philippines is included in the coverage territory · Review how pre-existing conditions are treated — many policies exclude them for 1–2 years · Understand the deductible, co-pay structure, and annual maximum · Check whether the policy includes medical evacuation or repatriation cover · Verify which specific hospitals in your area are in the insurer's network.",
    },
    {
      label: "SRRV requirement",
      body: "The Philippine Retirement Authority requires all SRRV holders to maintain valid health insurance throughout their stay as a condition of their visa status. The specific minimum coverage level is set by the PRA and is subject to revision — verify the current requirement with the PRA or your insurer when renewing.",
    },
    {
      label: "Recommended approach",
      body: "Most experienced expats carry a combination of international private insurance (for serious illness, hospitalisation, and evacuation) and voluntary PhilHealth membership (which can reduce the portion of hospital bills not covered by private insurance). Local HMO coverage can substitute for international cover for those committed to long-term residence who do not need worldwide access.",
    },
  ],
};

const costs = {
  details: [
    {
      label: "Consultations",
      body: "GP or family medicine consultation at a private clinic: PHP 500–1,200 · Specialist consultation at a top Manila private hospital: PHP 1,500–3,500 · Emergency room assessment (before treatment): PHP 3,000–8,000. Costs at provincial clinics and smaller hospitals are generally 30–50% lower.",
    },
    {
      label: "Diagnostics",
      body: "Complete blood count and basic chemistry panel: PHP 800–2,500 · Urinalysis: PHP 150–400 · Chest X-ray: PHP 400–900 · Ultrasound (abdominal): PHP 800–2,000 · ECG: PHP 300–700 · MRI (brain or spine): PHP 8,000–18,000 depending on hospital and whether contrast is used.",
    },
    {
      label: "Dental",
      body: "Prophylaxis and cleaning: PHP 700–1,800 · Tooth extraction (simple): PHP 500–1,500 · Composite filling: PHP 800–2,500 · Root canal (per tooth): PHP 5,000–12,000 · Dental crown (porcelain): PHP 8,000–20,000. Dental care is one of the genuine bargains for expats — quality at top clinics is high and prices are a fraction of Western rates.",
    },
    {
      label: "Hospitalisation",
      body: "Semi-private room per night at a top Manila private hospital: PHP 6,000–15,000 · Private room: PHP 10,000–25,000+. Surgical and specialist fees are billed separately on top of room and board. A routine appendectomy at a major Manila hospital can total PHP 100,000–250,000 all-in. Without insurance, a serious illness requiring extended hospitalisation can be financially devastating.",
    },
    {
      label: "Medications",
      body: "Generic medications are widely available at Mercury Drug, Watsons, and local pharmacies at low cost. Branded equivalents and imported drugs are significantly more expensive. Most common international medications have a Filipino generic equivalent — ask your pharmacist. Some specific medications may not be available locally and may need to be brought from abroad or ordered through specialist suppliers.",
    },
  ],
};

export default function HealthcarePage() {
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

        /* ── DISCLAIMER ── */
        .disclaimer-section {
          background: #F8F6F1;
          border-top: 3px solid #C9A84C;
        }
        .disclaimer-inner {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
        }
        .disclaimer-icon {
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
        .disclaimer-body {
          font-size: 0.95rem;
          font-weight: 300;
          line-height: 1.8;
          color: #5C6B7A;
          max-width: 640px;
        }
        .disclaimer-body strong {
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
          .card-grid { grid-template-columns: repeat(2, 1fr); }
          .detail-inner { grid-template-columns: 1fr; gap: 40px; }
          .detail-row { grid-template-columns: 1fr; gap: 8px; }
          .disclaimer-inner { grid-template-columns: 1fr; gap: 32px; }
          .footer { flex-direction: column; gap: 12px; text-align: center; }
        }
        @media (max-width: 560px) {
          .card-grid { grid-template-columns: 1fr; }
          .page-title { font-size: 2rem; }
        }
      `}</style>

      {/* PAGE HEADER */}
      <header className="page-header">
        <Nav active="/healthcare" />
        <div className="page-hero">
          <p className="page-eyebrow">Healthcare</p>
          <h1 className="page-title">
            Staying healthy<br />in the Philippines.
          </h1>
          <p className="page-sub">
            A practical guide to the private hospital system, how PhilHealth
            works for expats, what to look for in private insurance, and what
            routine and emergency care actually costs — so you can make
            informed decisions before you need them.
          </p>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="section section-light" id="overview">
        <p className="section-label">The healthcare landscape</p>
        <h2 className="section-heading">
          Four things worth understanding before you need care.
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

      {/* PRIVATE HOSPITALS */}
      <section className="section section-dark" id="hospitals">
        <div className="detail-inner">
          <div>
            <p className="section-label">Private Hospitals</p>
            <h2 className="section-heading section-heading-light">
              Where expats get care.
            </h2>
            <p className="detail-intro detail-intro-light">
              The Philippines has a tiered hospital system. At the top are
              world-class private hospitals in Manila and Cebu that compare
              well internationally. Quality drops sharply as you move into
              provincial areas, where referral to a city centre is often
              the best option for anything serious.
            </p>
          </div>
          <div className="detail-rows">
            {hospitals.details.map((d) => (
              <div key={d.label} className="detail-row detail-row-dark">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body detail-row-body-light">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILHEALTH */}
      <section className="section section-light" id="philhealth">
        <div className="detail-inner">
          <div>
            <p className="section-label">PhilHealth</p>
            <h2 className="section-heading">
              The national health insurance scheme.
            </h2>
            <p className="detail-intro">
              PhilHealth is worth enrolling in as a voluntary member — it can
              reduce your out-of-pocket costs during hospitalisation. But it
              should not be mistaken for comprehensive coverage. Most expats
              treat it as a useful layer on top of private insurance, not a
              substitute for it.
            </p>
          </div>
          <div className="detail-rows">
            {philhealth.details.map((d) => (
              <div key={d.label} className="detail-row">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVATE INSURANCE */}
      <section className="section section-dark" id="insurance">
        <div className="detail-inner">
          <div>
            <p className="section-label">Private Insurance</p>
            <h2 className="section-heading section-heading-light">
              Protecting yourself from large bills.
            </h2>
            <p className="detail-intro detail-intro-light">
              Private health insurance is not optional for most expats — it is
              the sensible baseline. A single hospitalisation for a serious
              illness at a top Manila hospital can generate a bill that would
              take years to repay out of pocket. The right policy pays for
              itself the first time you need it.
            </p>
          </div>
          <div className="detail-rows">
            {insurance.details.map((d) => (
              <div key={d.label} className="detail-row detail-row-dark">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body detail-row-body-light">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDICAL COSTS */}
      <section className="section section-light" id="costs">
        <div className="detail-inner">
          <div>
            <p className="section-label">Medical Costs</p>
            <h2 className="section-heading">
              What routine and emergency care costs.
            </h2>
            <p className="detail-intro">
              Day-to-day healthcare — consultations, diagnostics, dental
              work — is genuinely affordable compared to Western countries.
              The cost curve steepens sharply for hospitalisation and complex
              procedures, which is where insurance earns its keep.
            </p>
          </div>
          <div className="detail-rows">
            {costs.details.map((d) => (
              <div key={d.label} className="detail-row">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body">{d.body}</p>
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
              <p className="sn-tag">First-hand experience · Mandaue City, Cebu</p>
            </div>
          </div>
          <div className="sn-rule" />
          <div className="sn-body">
            <p>My most recent experience with private healthcare in Cebu was about as positive as an ER visit can be. I went to Chong Hua Hospital in Mandaue City.</p>
            <p>There was no wait time. As soon as I completed the initial paperwork, I was brought to a bed and immediately seen by nurses, followed shortly by the doctor. The staff was professional, friendly, and accommodating throughout.</p>
            <p>I was there approximately six hours. The visit included a consultation, IV treatment, blood work, and medications. Total cost: $300 USD. I left feeling completely recovered.</p>
            <p>For reference, Chong Hua Mandaue is a well-regarded private hospital with modern facilities. Bring your passport and be prepared to pay upfront or upon discharge if you don&rsquo;t have local or international insurance on file.</p>
          </div>
          <p className="sn-verified">Last Verified: June 2026 · Mandaue City, Cebu, Philippines</p>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="section disclaimer-section">
        <div className="disclaimer-inner">
          <div>
            <div className="disclaimer-icon">!</div>
            <p className="section-label">Important note</p>
            <h2 className="section-heading">
              Medical information changes. Verify before you rely on it.
            </h2>
          </div>
          <p className="disclaimer-body">
            <strong>All figures and coverage details on this page are for general
            guidance only</strong> and reflect conditions at the time of writing.
            PhilHealth premium rates, benefit packages, and enrolment rules are
            revised periodically by the Philippine government. Insurance premiums,
            policy terms, and network hospital lists change annually — always confirm
            current details directly with your insurer.
            <br /><br />
            Medical costs vary between hospitals, change over time, and depend on the
            specific treatment, doctor&rsquo;s professional fees, and materials used.
            The figures here are indicative ranges intended to help with planning —
            not quotations.
            <br /><br />
            This page does not constitute medical or financial advice. For personal
            health decisions, consult a licensed physician. For insurance decisions,
            work with a licensed insurance broker or advisor who is familiar with
            the Philippine market. In a medical emergency, call 911 or go directly
            to the nearest major private hospital&rsquo;s emergency department.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

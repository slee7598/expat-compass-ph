import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Marry a Filipino Citizen as a Foreigner — Legal Requirements Philippines",
  description:
    "Step-by-step guide to marrying a Filipino citizen as a foreign national. Documents required, where to file, costs, and what to expect at the Civil Registry.",
  alternates: { canonical: "https://expatcompassph.com/marriage" },
};

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

const filipinoReqs = [
  "Marriage Counseling Certificate — Obtain from the City Social Welfare and Development Office (CSWDO), Lapu-Lapu City.",
  "PSA Birth Certificate — 1 Original, 3 Photocopies.",
  "PSA CENOMAR (Certificate of No Marriage) — Must be issued within the last 3 months. 1 Original, 3 Photocopies.",
  "Barangay Certificate of Residency — Applicant must have resided in the barangay for at least six (6) months. 1 Original, 3 Photocopies.",
  "Parental Consent or Advice — Required for applicants under 25. Parents with valid ID must personally appear and sign the required forms.",
  "Death Certificate — Required for widow or widower applicants. Issued by the Local Civil Registrar.",
  "Annulled Applicants — Provide: Previous Marriage Certificate with annulment annotation, Certified True Copy of Annulment Decision, Certificate of Finality.",
  "Valid Government ID and Cedula.",
];

const foreignReqs = [
  "Legal Capacity to Marry / Certificate of No Impediment — Issued by your Embassy or Consulate in the Philippines. 1 Original, 3 Photocopies.",
  "Birth Certificate — English version. 1 Original, 3 Photocopies.",
  "Passport with Arrival Stamp — 1 Original, 3 Photocopies.",
  "Divorce Decree (if previously married) — English version. 1 Original, 3 Photocopies.",
  "Cedula — Obtain from the City Treasurer’s Office.",
];

const marriageReminders = [
  "Both applicants must appear in person.",
  "Dress presentably. No sleeveless shirts, tank tops, shorts, or slippers.",
  "At least one applicant must be a resident of Lapu-Lapu City with a valid ID showing a Lapu-Lapu City address.",
  "The Cedula, Residency Certificate, and Marriage Counseling Certificate should reflect matching address information.",
  "Marriage Licenses are released after the 10-day posting period. Release hours: 1:00 PM – 4:00 PM only.",
  "Marriage Licenses are valid for 120 days from the date of issuance.",
];

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
          color: rgba(248,246,241,0.78);
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
          color: #F8F6F1;
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
        .detail-intro-light { color: #F8F6F1; }

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
        .detail-row-body-light { color: #F8F6F1; }

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
          color: rgba(248,246,241,0.6);
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
        .sn-ref-head {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #F8F6F1;
          margin: 40px 0 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(201,168,76,0.15);
        }
        .sn-meta-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          margin-bottom: 28px;
        }
        .sn-meta-card {
          background: rgba(248,246,241,0.04);
          padding: 14px 18px;
          border: 1px solid rgba(201,168,76,0.08);
        }
        .sn-meta-label {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 3px;
        }
        .sn-meta-value {
          font-size: 0.88rem;
          font-weight: 400;
          color: rgba(248,246,241,0.82);
        }
        .sn-req-group { margin-bottom: 24px; }
        .sn-req-title {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #C9A84C;
          padding: 10px 0;
          border-bottom: 1px solid rgba(201,168,76,0.2);
          margin-bottom: 0;
        }
        .sn-req-item {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 8px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(248,246,241,0.05);
          align-items: start;
        }
        .sn-req-num {
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(201,168,76,0.7);
          padding-top: 1px;
        }
        .sn-req-text {
          font-size: 0.88rem;
          font-weight: 300;
          line-height: 1.65;
          color: #F8F6F1;
        }
        .sn-fee {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.25);
          padding: 10px 20px;
          margin: 20px 0;
        }
        .sn-fee-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #F8F6F1;
        }
        .sn-fee-amount {
          font-size: 1.05rem;
          font-weight: 600;
          color: #C9A84C;
        }
        .sn-reminders {
          background: rgba(201,168,76,0.05);
          border-left: 2px solid rgba(201,168,76,0.4);
          padding: 18px 22px;
          margin-top: 16px;
        }
        .sn-reminders-title {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 14px;
        }
        .sn-reminder {
          font-size: 0.85rem;
          font-weight: 300;
          line-height: 1.65;
          color: rgba(248,246,241,0.88);
          padding: 5px 0;
          padding-left: 16px;
          position: relative;
          border-bottom: 1px solid rgba(248,246,241,0.04);
        }
        .sn-reminder::before {
          content: '—';
          position: absolute;
          left: 0;
          color: rgba(201,168,76,0.6);
        }
        @media (max-width: 900px) {
          .sn-section { padding: 56px 24px; }
          .sn-meta-grid { grid-template-columns: 1fr; }
        }

        /* ── US VISA GUIDE ── */
        .uv-section { padding: 80px 48px; }
        .uv-inner { max-width: 900px; }
        .uv-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.7rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 16px;
        }
        .uv-eyebrow::before { content: '◈'; font-size: 0.65rem; }
        .uv-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.7rem, 2.8vw, 2.3rem); font-weight: 700; line-height: 1.2;
          color: #F8F6F1; margin-bottom: 24px; max-width: 800px;
        }
        .uv-title-dark { color: #0B1F3A; }
        .uv-sub {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.05rem, 1.8vw, 1.3rem); font-weight: 700; line-height: 1.25;
          color: #F8F6F1; margin: 36px 0 14px; padding-top: 32px;
          border-top: 1px solid rgba(201,168,76,0.15);
        }
        .uv-sub-first { border-top: none; padding-top: 0; margin-top: 4px; }
        .uv-sub-dark { color: #0B1F3A; border-top-color: rgba(11,31,58,0.1); }
        .uv-para {
          font-size: 0.92rem; font-weight: 300; line-height: 1.85;
          color: #F8F6F1; margin-bottom: 14px; max-width: 760px;
        }
        .uv-para-dark { color: #4A5868; }
        .uv-footnote { font-size: 0.82rem; font-weight: 300; color: #6B7B8A; margin-top: 6px; }
        .uv-list { list-style: none; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 8px; max-width: 760px; }
        .uv-li {
          font-size: 0.9rem; font-weight: 300; line-height: 1.72;
          color: #F8F6F1; padding-left: 22px; position: relative;
        }
        .uv-li::before { content: '—'; position: absolute; left: 0; color: #C9A84C; font-weight: 600; }
        .uv-li-dark { color: #4A5868; }
        .uv-nlist { list-style: none; counter-reset: uvctr; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 8px; max-width: 760px; }
        .uv-ni {
          font-size: 0.9rem; font-weight: 300; line-height: 1.72;
          color: #F8F6F1; padding-left: 28px; position: relative; counter-increment: uvctr;
        }
        .uv-ni::before { content: counter(uvctr) '.'; position: absolute; left: 0; color: #C9A84C; font-size: 0.78rem; font-weight: 700; padding-top: 2px; }
        .uv-ni-dark { color: #4A5868; }
        .uv-policy-alert {
          background: rgba(201,168,76,0.055); border: 1px solid rgba(201,168,76,0.3);
          border-left: 4px solid #C9A84C; padding: 26px 28px; margin: 28px 0; max-width: 760px;
        }
        .uv-policy-alert-lt {
          background: rgba(11,31,58,0.03); border: 1px solid rgba(11,31,58,0.1);
          border-left: 4px solid #C9A84C; padding: 26px 28px; margin: 28px 0; max-width: 760px;
        }
        .uv-policy-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 12px; }
        .uv-policy-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #F8F6F1; }
        .uv-policy-body-lt { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #4A5868; }
        .uv-fee-total {
          display: inline-flex; align-items: center; gap: 18px;
          background: rgba(201,168,76,0.07); border: 1px solid rgba(201,168,76,0.28);
          padding: 12px 22px; margin: 16px 0;
        }
        .uv-fee-label { font-size: 0.68rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(201,168,76,0.65); }
        .uv-fee-amount { font-family: 'Playfair Display', serif; font-size: 1.08rem; font-weight: 700; color: #C9A84C; }
        /* ── COMPARE TABLE ── */
        .compare-wrap { overflow-x: auto; margin: 28px 0; max-width: 780px; }
        .compare-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
        .compare-table th { background: #C9A84C; color: #0B1F3A; font-family: 'Playfair Display', serif; font-size: 0.9rem; font-weight: 700; padding: 14px 18px; text-align: left; }
        .compare-table th.th-dim { background: rgba(201,168,76,0.12); color: #F8F6F1; font-family: 'Inter', sans-serif; font-size: 0.68rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
        .compare-table td { padding: 12px 18px; border-bottom: 1px solid rgba(248,246,241,0.06); font-weight: 300; line-height: 1.5; color: #F8F6F1; vertical-align: top; }
        .compare-table td.td-dim { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: #F8F6F1; background: rgba(248,246,241,0.02); }
        .compare-table .td-good { color: #6FCF97; font-weight: 500; }
        .compare-table .td-warn { color: #F2994A; font-weight: 500; }
        .compare-table .td-bad { color: #EB5757; font-weight: 500; }

        /* ── DIVORCE SECTION EXTRAS ── */
        .dv-amber-alert {
          background: rgba(242,153,74,0.08);
          border: 1px solid rgba(242,153,74,0.35);
          border-left: 4px solid #F2994A;
          padding: 26px 28px;
          margin: 28px 0;
          max-width: 760px;
        }
        .dv-amber-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #F2994A; margin-bottom: 12px; }
        .dv-amber-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #4A5868; }
        .dv-navy-card {
          background: rgba(11,31,58,0.88);
          border: 1px solid rgba(201,168,76,0.2);
          border-left: 4px solid #C9A84C;
          padding: 26px 28px;
          margin: 28px 0;
          max-width: 760px;
        }
        .dv-navy-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 14px; }
        .dv-navy-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #F8F6F1; margin-bottom: 10px; }
        .dv-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 20px 0; max-width: 760px; }
        .dv-col-card { padding: 20px 22px; }
        .dv-col-can { background: rgba(111,207,151,0.06); border: 1px solid rgba(111,207,151,0.2); border-left: 3px solid #6FCF97; }
        .dv-col-cannot { background: rgba(235,87,87,0.06); border: 1px solid rgba(235,87,87,0.2); border-left: 3px solid #EB5757; }
        .dv-col-heading { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 12px; }
        .dv-col-can .dv-col-heading { color: #6FCF97; }
        .dv-col-cannot .dv-col-heading { color: #EB5757; }
        .dv-col-text { font-size: 0.88rem; font-weight: 300; line-height: 1.75; color: #F8F6F1; }
        .dv-stat-row { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 16px 0; max-width: 620px; }
        .dv-stat-card { padding: 18px 22px; }
        .dv-stat-dark { background: rgba(248,246,241,0.04); border: 1px solid rgba(201,168,76,0.12); }
        .dv-stat-lt { background: #fff; border: 1px solid rgba(11,31,58,0.08); }
        .dv-stat-label { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #C9A84C; margin-bottom: 6px; }
        .dv-stat-value { font-size: 0.88rem; font-weight: 300; color: #F8F6F1; line-height: 1.6; }
        .dv-warn-list { list-style: none; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 8px; max-width: 760px; }
        .dv-warn-li { font-size: 0.9rem; font-weight: 300; line-height: 1.72; padding-left: 26px; position: relative; }
        .dv-warn-li::before { content: '⚠'; position: absolute; left: 0; top: 1px; font-size: 0.72rem; color: #F2994A; }
        .dv-warn-li-dark { color: #F8F6F1; }
        .dv-warn-li-lt { color: #4A5868; }
        .dv-action-list { list-style: none; counter-reset: dvctr; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 18px; max-width: 760px; }
        .dv-action-item { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #4A5868; padding-left: 40px; position: relative; counter-increment: dvctr; }
        .dv-action-item::before { content: counter(dvctr); position: absolute; left: 0; top: 1px; width: 24px; height: 24px; background: #C9A84C; color: #0B1F3A; font-size: 0.72rem; font-weight: 700; text-align: center; line-height: 24px; }
        .dv-muted-box { background: rgba(11,31,58,0.03); border: 1px solid rgba(11,31,58,0.08); border-left: 3px solid rgba(11,31,58,0.12); padding: 22px 26px; margin-top: 28px; max-width: 760px; }
        .dv-muted-text { font-size: 0.82rem; font-weight: 300; line-height: 1.75; color: #6B7B8A; }
        @media (max-width: 700px) {
          .dv-two-col { grid-template-columns: 1fr; }
          .dv-stat-row { grid-template-columns: 1fr; }
        }

        /* ── JUMP NAV ── */
        .cs-label {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 24px;
          display: flex; align-items: center; gap: 12px;
        }
        .cs-label::before, .cs-label::after {
          content: ''; display: block; flex: 1; height: 1px; background: rgba(201,168,76,0.25);
        }
        .cs-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px;
        }
        .cs-card {
          display: block; text-decoration: none;
          background: #0B1F3A; padding: 22px 24px;
          border: 1px solid rgba(201,168,76,0.15);
          transition: border-color 0.18s, background 0.18s;
          cursor: pointer;
        }
        .cs-card:hover { border-color: #C9A84C; background: rgba(11,31,58,0.92); }
        .cs-city {
          font-family: 'Playfair Display', serif;
          font-size: 1rem; font-weight: 700; color: #F8F6F1;
          display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;
          margin-bottom: 6px;
        }
        .cs-city::after { content: '→'; font-family: 'Inter', sans-serif; font-size: 0.85rem; color: #C9A84C; flex-shrink: 0; transition: transform 0.18s; }
        .cs-card:hover .cs-city::after { transform: translateX(4px); }
        .cs-tagline {
          font-size: 0.8rem; font-weight: 300; line-height: 1.55;
          color: #F8F6F1;
        }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .nav { padding: 20px 24px; }
          .nav-links { display: none; }
          .page-hero { padding: 52px 24px 72px; }
          .section { padding: 72px 24px; }
          .card-grid { grid-template-columns: repeat(2, 1fr); }
          .cs-grid { grid-template-columns: repeat(2, 1fr); }
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

      {/* DIVORCE CALLOUT */}
      <div style={{background:'#F8F6F1', padding:'36px 48px 0'}}>
        <div style={{maxWidth:'860px', border:'1px solid rgba(201,168,76,0.4)', borderLeft:'4px solid #C9A84C', padding:'24px 28px', background:'rgba(201,168,76,0.04)', display:'flex', alignItems:'flex-start', gap:'20px'}}>
          <div style={{flexShrink:0, marginTop:'2px'}}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2L12.09 7.26L18 7.27L13.45 10.97L15.18 16.18L10 13L4.82 16.18L6.55 10.97L2 7.27L7.91 7.26L10 2Z" fill="#C9A84C"/>
            </svg>
          </div>
          <div>
            <p style={{fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:'#C9A84C', marginBottom:'8px'}}>Going Through a Divorce?</p>
            <p style={{fontSize:'0.92rem', fontWeight:300, lineHeight:1.8, color:'#4A5868', marginBottom:'10px'}}>Going through a divorce from a Filipino spouse? This is one of the most searched and least explained topics for expats. We cover everything — US divorce consent rules, service of process, Article 26 judicial recognition, what happens to your spouse&rsquo;s civil status, timeline, cost, and how to avoid the most common mistakes.</p>
            <a href="/divorce-philippines" style={{display:'inline-flex', alignItems:'center', gap:'6px', fontSize:'0.82rem', fontWeight:600, color:'#C9A84C', textDecoration:'none', letterSpacing:'0.04em'}}>
              Read the Complete Divorce Guide &rarr;
            </a>
          </div>
        </div>
      </div>

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

      {/* STEVE'S NOTE */}
      <section className="sn-section">
        <div className="sn-inner">
          <div className="sn-header">
            <div className="sn-monogram">S</div>
            <div>
              <p className="sn-name">Steve&rsquo;s Note</p>
              <p className="sn-tag">First-hand experience · Lapu-Lapu City, Cebu</p>
            </div>
          </div>
          <div className="sn-rule" />
          <div className="sn-body">
            <p>When Irish and I applied for our marriage license in Lapu-Lapu City, I was not required to provide a PSA CENOMAR as the foreign applicant. The documents I provided were my Legal Capacity to Marry from the U.S. Consulate, passport, birth certificate, divorce decree, and cedula.</p>
            <p>One thing that surprised us was how seriously the offices took appearance and dress code. Applicants should arrive well-dressed for the application, orientation, and counseling sessions. Casual but neat clothing is fine, but sleeveless shirts, shorts, and slippers may result in being turned away and asked to return another day.</p>
            <p>Requirements can change and may vary by municipality. Always verify current requirements directly with your local Civil Registrar before applying.</p>
          </div>

          <p className="sn-ref-head">Marriage License Requirements — Lapu-Lapu City, Cebu</p>

          <div className="sn-meta-grid">
            <div className="sn-meta-card">
              <p className="sn-meta-label">Application schedule</p>
              <p className="sn-meta-value">Morning only</p>
            </div>
            <div className="sn-meta-card">
              <p className="sn-meta-label">Submission hours</p>
              <p className="sn-meta-value">8:00 AM – 11:00 AM</p>
            </div>
          </div>

          <div className="sn-req-group">
            <p className="sn-req-title">Filipino Applicant</p>
            {filipinoReqs.map((r, i) => (
              <div key={i} className="sn-req-item">
                <span className="sn-req-num">{i + 1}.</span>
                <span className="sn-req-text">{r}</span>
              </div>
            ))}
          </div>

          <div className="sn-req-group">
            <p className="sn-req-title">Foreign Applicant</p>
            {foreignReqs.map((r, i) => (
              <div key={i} className="sn-req-item">
                <span className="sn-req-num">{i + 1}.</span>
                <span className="sn-req-text">{r}</span>
              </div>
            ))}
          </div>

          <div className="sn-fee">
            <span className="sn-fee-label">Application Fee</span>
            <span className="sn-fee-amount">₱150.00</span>
          </div>

          <div className="sn-reminders">
            <p className="sn-reminders-title">Important Reminders</p>
            {marriageReminders.map((r, i) => (
              <p key={i} className="sn-reminder">{r}</p>
            ))}
          </div>

          <p className="sn-verified">Last Verified: June 2026 · Lapu-Lapu City, Cebu, Philippines</p>
        </div>
      </section>

      {/* === US VISA GUIDE — OVERVIEW === */}
      <section className="uv-section section-dark">
        <div className="uv-inner">
          <p className="uv-eyebrow">Taking Your Spouse to the United States</p>
          <h2 className="uv-title">Bringing Your Filipino Spouse or Fiancée to the United States — The Complete 2026 Guide</h2>
          <p className="uv-para">If you are an American man in a serious relationship with a Filipina, bringing her to the United States is one of the most important and complex decisions you will face. There are two primary pathways — the K-1 Fiancée Visa and the CR-1 Spousal Immigrant Visa. For decades the K-1 was considered the faster, easier option. In 2026, due to major shifts in US immigration policy, that assumption is no longer accurate. Choosing the wrong path could result in your wife being separated from you for a year or more immediately after your wedding, or paying thousands of dollars more than necessary.</p>
          <p className="uv-para">This guide covers both options in full — requirements, paperwork, evidence, the interview at the US Embassy in Manila, what to wear, what they look for, red flags that get cases denied, and whether you need an attorney. Read it before you file anything.</p>
        </div>
      </section>

      {/* ── JUMP NAV ── */}
      <section className="uv-section section-light" style={{paddingTop:'40px', paddingBottom:'48px'}}>
        <div className="uv-inner">
          <p className="cs-label">Jump to a Section</p>
          <div className="cs-grid">
            <a href="#k1-visa" className="cs-card">
              <p className="cs-city">K-1 Fiancée Visa</p>
              <p className="cs-tagline">The full process and real costs</p>
            </a>
            <a href="#policy-change" className="cs-card">
              <p className="cs-city">2026 Policy Change</p>
              <p className="cs-tagline">Why K-1 changed this year</p>
            </a>
            <a href="#cr1-visa" className="cs-card">
              <p className="cs-city">CR-1 Spousal Visa</p>
              <p className="cs-tagline">The recommended path in 2026</p>
            </a>
            <a href="#comparison" className="cs-card">
              <p className="cs-city">K-1 vs CR-1</p>
              <p className="cs-tagline">Side by side comparison</p>
            </a>
            <a href="#interview" className="cs-card">
              <p className="cs-city">Embassy Interview</p>
              <p className="cs-tagline">What to expect in Manila</p>
            </a>
            <a href="#evidence" className="cs-card">
              <p className="cs-city">Evidence Package</p>
              <p className="cs-tagline">Proving your relationship is real</p>
            </a>
            <a href="#attorney" className="cs-card">
              <p className="cs-city">Do You Need an Attorney</p>
              <p className="cs-tagline">When to hire help</p>
            </a>
            <a href="#b2-tourist" className="cs-card">
              <p className="cs-city">B-2 Tourist Visa</p>
              <p className="cs-tagline">Why it is harder than it looks</p>
            </a>
            <a href="#uk-european-visas" className="cs-card">
              <p className="cs-city">UK and European Visas</p>
              <p className="cs-tagline">Bringing her to the UK</p>
            </a>
          </div>
        </div>
      </section>

      {/* === K-1 FIANCÉE VISA === */}
      <section className="uv-section section-light" id="k1-visa">
        <div className="uv-inner">
          <p className="uv-eyebrow">K-1 Fiancée Visa</p>
          <h2 className="uv-title uv-title-dark">The K-1 Fiancée Visa</h2>

          <h3 className="uv-sub uv-sub-first uv-sub-dark">What it is</h3>
          <p className="uv-para uv-para-dark">The K-1 is a nonimmigrant visa that allows a foreign fiancée to enter the United States to marry the petitioning US citizen. Once inside the US and after the marriage, she must file for Adjustment of Status (Form I-485) to obtain her green card. As of 2026, this process has changed significantly — see the Critical Policy Change section below.</p>

          <h3 className="uv-sub uv-sub-dark">Basic eligibility</h3>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">Must be a US citizen.</li>
            <li className="uv-li uv-li-dark">Both must be legally free to marry.</li>
            <li className="uv-li uv-li-dark">Must have met in person at least once within two years before filing.</li>
            <li className="uv-li uv-li-dark">Relationship must be genuine.</li>
          </ul>

          <h3 className="uv-sub uv-sub-dark">Stage 1 — USCIS paperwork</h3>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">Form I-129F — Petition for Alien Fiancée — $675 filing fee.</li>
            <li className="uv-li uv-li-dark">Copy of US passport or birth certificate.</li>
            <li className="uv-li uv-li-dark">Proof of prior marriage dissolutions.</li>
            <li className="uv-li uv-li-dark">Evidence of in-person meeting — flight records, photos, hotel receipts, stamped passports.</li>
            <li className="uv-li uv-li-dark">Evidence relationship is genuine — chat logs, call records, photos over time, statements from people who know you as a couple.</li>
            <li className="uv-li uv-li-dark">Two passport-style photos of each person.</li>
            <li className="uv-li uv-li-dark">USCIS currently takes 6 to 10 months to process.</li>
          </ul>

          <h3 className="uv-sub uv-sub-dark">Stage 2 — National Visa Center</h3>
          <p className="uv-para uv-para-dark">Once USCIS approves, the case is transferred to NVC which assigns a case number and forwards to US Embassy Manila. Takes 1 to 4 weeks.</p>

          <h3 className="uv-sub uv-sub-dark">Stage 3 — US Embassy Manila</h3>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">Form DS-160 — Online Nonimmigrant Visa Application — barcode must match exactly at interview.</li>
            <li className="uv-li uv-li-dark">Form I-134 — Declaration of Financial Support — must show income at or above 100% federal poverty level.</li>
            <li className="uv-li uv-li-dark">Medical exam at St. Luke&rsquo;s Medical Center Extension Clinic Manila — the only approved physician for US Embassy Manila. Schedule at least two weeks before interview. Takes two days. Cost approximately $350–400 USD.</li>
            <li className="uv-li uv-li-dark">Visa interview at US Embassy Manila.</li>
          </ul>

          <h3 className="uv-sub uv-sub-dark">Philippine-specific documents</h3>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">Valid passport — minimum 6 months validity.</li>
            <li className="uv-li uv-li-dark">PSA-issued birth certificate — original on security paper.</li>
            <li className="uv-li uv-li-dark">CENOMAR — Certificate of No Marriage from Philippine Statistics Authority — valid one year from date issued. Get this early as it takes time.</li>
            <li className="uv-li uv-li-dark">NBI Clearance — for all applicants aged 16 and above — request with AKA including maiden name and all aliases.</li>
            <li className="uv-li uv-li-dark">Police clearance from any country where she lived or worked 12 months or more since age 16.</li>
            <li className="uv-li uv-li-dark">If previously married — proof of termination: annulment decree, divorce certificate, or death certificate with certified English translation.</li>
            <li className="uv-li uv-li-dark">Two passport-sized photos — white background, 35mm x 45mm.</li>
          </ul>

          <h3 className="uv-sub uv-sub-dark">K-1 fees 2026</h3>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">I-129F: $675</li>
            <li className="uv-li uv-li-dark">DS-160 visa application: $265</li>
            <li className="uv-li uv-li-dark">Medical exam: $350–400</li>
            <li className="uv-li uv-li-dark">Adjustment of Status I-485: $1,440</li>
            <li className="uv-li uv-li-dark">Employment Authorization I-765: $520</li>
            <li className="uv-li uv-li-dark">Advance Parole I-131: $630</li>
          </ul>
          <div className="uv-fee-total">
            <span className="uv-fee-label">Grand Total</span>
            <span className="uv-fee-amount">Over $3,500</span>
          </div>
          <p className="uv-footnote">Not including attorney fees, document translation, travel, or courier costs.</p>
        </div>
      </section>

      {/* === 2026 POLICY CHANGE === */}
      <section className="uv-section section-dark" id="policy-change">
        <div className="uv-inner">
          <p className="uv-eyebrow">Critical 2026 Policy Change</p>
          <h2 className="uv-title">The K-1 Strategy No Longer Works the Way It Did.</h2>
          <div className="uv-policy-alert">
            <p className="uv-policy-label">⚠ Important — Read Before You File</p>
            <p className="uv-policy-body">On May 22, 2026, USCIS announced that it will now grant Adjustment of Status — the process of getting a green card from inside the United States — only in extraordinary circumstances on a case-by-case basis. All other applicants must return to their home country and complete the green card process through consular processing at a US Embassy abroad.</p>
          </div>
          <p className="uv-para">The entire K-1 strategy previously worked because your fiancée could come to the US, you married, and she filed for her green card without leaving. That option is now effectively gone for most people.</p>
          <p className="uv-para">Under the current policy, a Filipina who enters on a K-1 and marries her American husband may be required to return to the Philippines and wait for consular processing — which can take 12 to 24 months. You just got married. She goes back. You are separated for potentially two years.</p>
          <p className="uv-para">This is the current policy as of the date this page was last updated. It is being legally challenged and may change. But as of today it is the reality couples must plan around.</p>
        </div>
      </section>

      {/* === CR-1 SPOUSAL VISA === */}
      <section className="uv-section section-light" id="cr1-visa">
        <div className="uv-inner">
          <p className="uv-eyebrow">CR-1 Spousal Immigrant Visa</p>
          <h2 className="uv-title uv-title-dark">The CR-1 Spousal Immigrant Visa</h2>

          <h3 className="uv-sub uv-sub-first uv-sub-dark">What it is</h3>
          <p className="uv-para uv-para-dark">An immigrant visa for couples who are already legally married. Your wife applies from the Philippines, waits in the Philippines during processing, and arrives in the United States already as a lawful permanent resident — green card issued upon arrival, work authorization immediate, no Adjustment of Status required.</p>

          <h3 className="uv-sub uv-sub-dark">Basic eligibility</h3>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">Must be a US citizen.</li>
            <li className="uv-li uv-li-dark">Must be legally married — valid under Philippine law.</li>
            <li className="uv-li uv-li-dark">Marriage must be genuine.</li>
            <li className="uv-li uv-li-dark">Must meet income requirement — approximately $22,887 annually for household of two in 2026.</li>
          </ul>

          <h3 className="uv-sub uv-sub-dark">Stage 1 — USCIS</h3>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">Form I-130 — Petition for Alien Relative — $675 filing fee.</li>
            <li className="uv-li uv-li-dark">Copy of US passport or birth certificate.</li>
            <li className="uv-li uv-li-dark">Original marriage certificate with certified English translation.</li>
            <li className="uv-li uv-li-dark">Proof of prior marriage dissolutions.</li>
            <li className="uv-li uv-li-dark">Evidence marriage is genuine — photos over time, chat records, evidence of visits, financial ties, family introductions, social media.</li>
            <li className="uv-li uv-li-dark">USCIS currently takes 8 to 14 months.</li>
          </ul>

          <h3 className="uv-sub uv-sub-dark">Stage 2 — NVC</h3>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">Transferred from USCIS to NVC — 1 to 2 months.</li>
            <li className="uv-li uv-li-dark">Form I-864 — Affidavit of Support — most recent IRS tax transcript, W-2s, evidence of income showing at least $22,887 for household of two.</li>
            <li className="uv-li uv-li-dark">Immigrant visa application fee: $325.</li>
            <li className="uv-li uv-li-dark">Affidavit of Support fee: $120.</li>
            <li className="uv-li uv-li-dark">Wife completes Form DS-260 — Online Immigrant Visa Application.</li>
          </ul>

          <h3 className="uv-sub uv-sub-dark">Stage 3 — Embassy</h3>
          <p className="uv-para uv-para-dark">Same medical exam requirements as K-1 — St. Luke&rsquo;s Medical Center Extension Clinic, two weeks before interview, two days, approximately $350–400 USD. Same Philippine documents as K-1 plus original marriage certificate and PSA Advisory on Marriage.</p>

          <h3 className="uv-sub uv-sub-dark">CR-1 fees 2026</h3>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">I-130: $675</li>
            <li className="uv-li uv-li-dark">Immigrant visa application: $325</li>
            <li className="uv-li uv-li-dark">Affidavit of Support: $120</li>
            <li className="uv-li uv-li-dark">Medical exam: $350–400</li>
          </ul>
          <div className="uv-fee-total">
            <span className="uv-fee-label">Grand Total</span>
            <span className="uv-fee-amount">~$1,470–1,520</span>
          </div>
          <p className="uv-footnote">Roughly $2,000 less than the K-1.</p>
        </div>
      </section>

      {/* === K-1 vs CR-1 COMPARISON TABLE === */}
      <section className="uv-section section-dark" id="comparison">
        <div className="uv-inner">
          <p className="uv-eyebrow">K-1 vs CR-1 — 2026</p>
          <h2 className="uv-title">Side-by-Side Comparison</h2>
          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="th-dim">Factor</th>
                  <th>K-1 Fiancée Visa</th>
                  <th>CR-1 Spousal Visa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-dim">Marital status required</td>
                  <td>Not yet married</td>
                  <td>Already married</td>
                </tr>
                <tr>
                  <td className="td-dim">Government fees</td>
                  <td className="td-bad">$3,500+</td>
                  <td className="td-good">$1,300–1,500</td>
                </tr>
                <tr>
                  <td className="td-dim">Time to enter US</td>
                  <td>8–12 months</td>
                  <td>12–24 months</td>
                </tr>
                <tr>
                  <td className="td-dim">Status on arrival</td>
                  <td className="td-warn">Nonimmigrant — must still get green card</td>
                  <td className="td-good">Lawful permanent resident</td>
                </tr>
                <tr>
                  <td className="td-dim">Work authorization</td>
                  <td className="td-warn">Not until AOS approved</td>
                  <td className="td-good">Immediate upon arrival</td>
                </tr>
                <tr>
                  <td className="td-dim">Green card process</td>
                  <td className="td-bad">Must now return to Philippines under new policy</td>
                  <td className="td-good">Green card issued upon entry</td>
                </tr>
                <tr>
                  <td className="td-dim">Post-arrival separation risk</td>
                  <td className="td-bad">High under 2026 policy</td>
                  <td className="td-good">None</td>
                </tr>
                <tr>
                  <td className="td-dim">Total cost</td>
                  <td className="td-bad">$3,500+</td>
                  <td className="td-good">$1,300–1,500</td>
                </tr>
                <tr>
                  <td className="td-dim">Best for</td>
                  <td className="td-bad">Nobody in 2026</td>
                  <td className="td-good">Couples who can marry first</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="uv-sub">The IR-1 Visa</h3>
          <p className="uv-para">If you have been married for more than two years at the time your spouse enters the United States, she receives an IR-1 (Immediate Relative) visa instead of a CR-1. The process is identical — the only difference is that the IR-1 grants unconditional permanent residence immediately, while the CR-1 grants conditional permanent residence for two years, after which you file jointly to remove the conditions.</p>
        </div>
      </section>

      {/* === US EMBASSY MANILA INTERVIEW === */}
      <section className="uv-section section-light" id="interview">
        <div className="uv-inner">
          <p className="uv-eyebrow">US Embassy Manila</p>
          <h2 className="uv-title uv-title-dark">The US Embassy Manila Interview</h2>

          <h3 className="uv-sub uv-sub-first uv-sub-dark">Before the interview</h3>
          <ol className="uv-nlist">
            <li className="uv-ni uv-ni-dark">Register online through the Embassy portal immediately after receiving your appointment.</li>
            <li className="uv-ni uv-ni-dark">Schedule the medical exam at St. Luke&rsquo;s at least two weeks before — do not leave this to the last week.</li>
            <li className="uv-ni uv-ni-dark">Upload all required documents to the CEAC portal before the interview.</li>
            <li className="uv-ni uv-ni-dark">Bring every original document — the US Embassy Manila will turn away applicants without complete originals, and the next available slot may be months away.</li>
          </ol>

          <h3 className="uv-sub uv-sub-dark">What the officer is evaluating</h3>
          <p className="uv-para uv-para-dark">The consular officer&rsquo;s primary job is to determine whether your relationship is genuine. They are trained to spot marriages of convenience and coached relationships. They will review your evidence package and ask questions — some predictable, some unexpected.</p>

          <h3 className="uv-sub uv-sub-dark">Common interview questions</h3>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">How and where did you meet?</li>
            <li className="uv-li uv-li-dark">How long have you been together?</li>
            <li className="uv-li uv-li-dark">How often do you communicate and how?</li>
            <li className="uv-li uv-li-dark">Describe a typical day in your relationship.</li>
            <li className="uv-li uv-li-dark">What does his family think of you? What does your family think of him?</li>
            <li className="uv-li uv-li-dark">Where did he propose? Describe it.</li>
            <li className="uv-li uv-li-dark">What are his children&rsquo;s names? His siblings? His parents?</li>
            <li className="uv-li uv-li-dark">What does he do for work?</li>
            <li className="uv-li uv-li-dark">Where will you live in the United States?</li>
            <li className="uv-li uv-li-dark">Have you visited the US before?</li>
          </ul>

          <h3 className="uv-sub uv-sub-dark">Red flags that increase scrutiny</h3>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">Significant age difference.</li>
            <li className="uv-li uv-li-dark">Short relationship timeline — especially if filed quickly after meeting online.</li>
            <li className="uv-li uv-li-dark">Limited in-person visits.</li>
            <li className="uv-li uv-li-dark">Language barriers suggesting limited genuine communication.</li>
            <li className="uv-li uv-li-dark">Previous K-1 or marriage visa petitions by the US citizen for other partners.</li>
            <li className="uv-li uv-li-dark">Social media evidence that contradicts the application.</li>
            <li className="uv-li uv-li-dark">Inconsistent answers.</li>
            <li className="uv-li uv-li-dark">Financial dependency concerns.</li>
          </ul>

          <h3 className="uv-sub uv-sub-dark">What to wear</h3>
          <p className="uv-para uv-para-dark">The US Embassy Manila describes its expectation as smart casual — dress as you would for a professional job interview.</p>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">Women: blouse with dress pants or knee-length skirt, or knee-length dress. Traditional Filipino formal attire acceptable if modest.</li>
            <li className="uv-li uv-li-dark">Avoid revealing clothing, overly casual outfits, flashy jewelry, strong perfume, jeans, shorts, T-shirts, sneakers.</li>
            <li className="uv-li uv-li-dark">Men: collared shirt with dress pants and closed-toe shoes. Blazer optional.</li>
          </ul>

          <h3 className="uv-sub uv-sub-dark">CFO requirement — do not miss this</h3>
          <div className="uv-policy-alert-lt">
            <p className="uv-policy-label">CFO — Commission on Filipinos Overseas</p>
            <p className="uv-policy-body-lt">This catches many couples off guard. Even after your wife has her US visa in hand, Philippine immigration officers at the airport will not let her board the plane without a CFO sticker on her passport. The CFO requires all Filipino spouses and fiancées emigrating to the US to complete a Guidance and Counseling Program seminar — a one-day program held in Manila. Register early as slots fill up. Without the CFO sticker, your wife will be turned away at the departure gate regardless of her valid US visa.</p>
          </div>
        </div>
      </section>

      {/* === EVIDENCE PACKAGE === */}
      <section className="uv-section section-dark" id="evidence">
        <div className="uv-inner">
          <p className="uv-eyebrow">Evidence Package</p>
          <h2 className="uv-title">Building Your Relationship Evidence Package</h2>

          <h3 className="uv-sub uv-sub-first">Communications</h3>
          <ul className="uv-list">
            <li className="uv-li">Screenshots of messaging history — WhatsApp, Viber, Facebook Messenger — showing regular ongoing communication over months and years, not just recent messages.</li>
            <li className="uv-li">Call logs showing frequency and duration.</li>
            <li className="uv-li">Video call history.</li>
          </ul>

          <h3 className="uv-sub">Photos</h3>
          <ul className="uv-list">
            <li className="uv-li">Photos together spanning the entire relationship — not just recent ones.</li>
            <li className="uv-li">Photos with each other&rsquo;s families.</li>
            <li className="uv-li">Photos at different locations — dates, travel, everyday moments.</li>
            <li className="uv-li">Organize 20 to 40 meaningful, clearly dated photos chronologically. Do not flood the package with hundreds of photos.</li>
          </ul>

          <h3 className="uv-sub">Travel evidence</h3>
          <ul className="uv-list">
            <li className="uv-li">Passport stamps showing visits to the Philippines.</li>
            <li className="uv-li">Flight booking confirmations and boarding passes.</li>
            <li className="uv-li">Hotel receipts from visits.</li>
            <li className="uv-li">For K-1 — evidence of at least one in-person meeting within two years before filing is legally required.</li>
          </ul>

          <h3 className="uv-sub">Financial ties</h3>
          <ul className="uv-list">
            <li className="uv-li">Evidence of money sent — Remitly or Wise transfer records.</li>
            <li className="uv-li">Joint accounts or shared expenses if applicable.</li>
          </ul>

          <h3 className="uv-sub">Family and social proof</h3>
          <ul className="uv-list">
            <li className="uv-li">Photos with her family — parents, siblings.</li>
            <li className="uv-li">Photos with your family if she has visited.</li>
            <li className="uv-li">Letters or statements from family members who know you as a couple.</li>
            <li className="uv-li">Social media posts showing your relationship publicly.</li>
          </ul>

          <div className="uv-policy-alert">
            <p className="uv-policy-label">⚠ Social Media Warning</p>
            <p className="uv-policy-body">Consular officers may review publicly available social media. Make sure your public profiles reflect your relationship consistently. If your Facebook shows you as single or has no mention of her, and you are claiming a two-year relationship, that is a red flag. Your public social media should not contradict your application.</p>
          </div>
        </div>
      </section>

      {/* === DO YOU NEED AN ATTORNEY === */}
      <section className="uv-section section-light" id="attorney">
        <div className="uv-inner">
          <p className="uv-eyebrow">Legal Representation</p>
          <h2 className="uv-title uv-title-dark">Do You Need an Immigration Attorney?</h2>

          <h3 className="uv-sub uv-sub-first uv-sub-dark">You can probably file without an attorney if</h3>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">Neither of you has prior immigration violations, visa denials, or deportations.</li>
            <li className="uv-li uv-li-dark">Neither has a criminal record.</li>
            <li className="uv-li uv-li-dark">Straightforward first marriage for both.</li>
            <li className="uv-li uv-li-dark">Income clearly meets requirements.</li>
            <li className="uv-li uv-li-dark">Relationship has a clear, documented history.</li>
            <li className="uv-li uv-li-dark">You are comfortable following detailed government instructions.</li>
          </ul>

          <h3 className="uv-sub uv-sub-dark">You should consider an attorney if</h3>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">Either of you has a prior visa denial, deportation, removal order, or immigration violation.</li>
            <li className="uv-li uv-li-dark">Either has a criminal record — even minor offenses can complicate cases.</li>
            <li className="uv-li uv-li-dark">You previously filed a K-1 or marriage petition for a different partner.</li>
            <li className="uv-li uv-li-dark">There is significant complexity in either immigration history.</li>
            <li className="uv-li uv-li-dark">Your income is close to the minimum threshold.</li>
            <li className="uv-li uv-li-dark">The relationship has gaps or elements that could raise questions.</li>
            <li className="uv-li uv-li-dark">Dealing with Philippine annulment rather than divorce — annulments are complex and consular officers know the difference.</li>
            <li className="uv-li uv-li-dark">You want professional oversight and peace of mind.</li>
          </ul>

          <h3 className="uv-sub uv-sub-dark">What an attorney does</h3>
          <p className="uv-para uv-para-dark">A good immigration attorney reviews your entire case for red flags before you file, prepares your evidence package strategically, ensures every form is completed correctly, responds to Requests for Evidence from USCIS efficiently, and prepares your fiancée or wife for the Embassy interview. A single mistake on a form or a missing document can cost months of processing time.</p>

          <h3 className="uv-sub uv-sub-dark">Attorney cost</h3>
          <p className="uv-para uv-para-dark">A qualified US immigration attorney for a K-1 or CR-1 typically charges $1,500 to $3,500 in legal fees on top of government fees. For a process that determines whether your wife can live with you in the United States, and given the current policy environment where mistakes have more serious consequences than in previous years, many couples find this money well spent. At minimum, consider a free 30-minute initial consultation to assess whether your situation warrants full representation.</p>
        </div>
      </section>

      {/* === B-2 TOURIST VISA === */}
      <section className="uv-section section-dark" id="b2-tourist">
        <div className="uv-inner">
          <p className="uv-eyebrow">Tourist Visa</p>
          <h2 className="uv-title">The B-2 Tourist Visa — Can Your Filipina Girlfriend Just Visit the US First?</h2>

          <h3 className="uv-sub uv-sub-first">What the B-2 Tourist Visa is</h3>
          <p className="uv-para">The B-2 is the standard US tourist and visitor visa. It allows the holder to visit the United States temporarily for tourism, family visits, or medical treatment. If approved, a Filipino citizen typically receives a visa valid for 10 years with multiple entries, though the actual length of stay at each entry is determined by the CBP officer at port of entry — usually up to 6 months.</p>
          <p className="uv-para">Application fee: $185 non-refundable. New in 2026: a $250 Visa Integrity and Border Security Fee is charged upon approval, bringing the actual cost to approximately $435 if the visa is granted.</p>

          <h3 className="uv-sub">Requirements</h3>
          <ul className="uv-list">
            <li className="uv-li">Valid Philippine passport — minimum 6 months validity.</li>
            <li className="uv-li">Completed Form DS-160 online.</li>
            <li className="uv-li">One passport-style photo.</li>
            <li className="uv-li">Biometrics appointment at a Visa Application Center in Manila.</li>
            <li className="uv-li">In-person interview at US Embassy Manila.</li>
            <li className="uv-li">Supporting documents — proof of stable employment, bank statements showing PHP 500,000 or more with 6 months of consistent activity, proof of property or long-term lease, evidence of family ties in Philippines, round trip flight itinerary, proof of accommodation in US, invitation letter from US host.</li>
          </ul>

          <h3 className="uv-sub">The central problem — immigrant intent</h3>
          <p className="uv-para">US immigration law presumes that every visa applicant intends to immigrate. The burden is on the applicant to prove otherwise — that she has strong enough ties to the Philippines that she will return home when the visit ends. This is evaluated entirely at the discretion of the consular officer in a brief 3 to 10 minute interview.</p>
          <p className="uv-para">If a Filipina is dating a US citizen, engaged to one, or already has a pending immigrant petition, the consular officer may conclude that she really intends to immigrate rather than merely visit. That does not make approval impossible, but it makes the case significantly more difficult.</p>

          <h3 className="uv-sub">The approval rate reality</h3>
          <p className="uv-para">Published overall approval rates for Filipino B-2 applicants are cited at approximately 72%. That number is misleading for couples in relationships with American citizens. That 72% includes business travelers, senior professionals, property owners, and applicants with no romantic ties to Americans.</p>
          <p className="uv-para">For a young Filipina applying to visit an American boyfriend or fiancé, the real-world denial rate is significantly higher. Immigration attorneys and expat forums consistently report this profile is among the hardest to approve. Many couples spend $185 on an application only to receive a denial in under 5 minutes. A denial stays on her record and can complicate future visa applications to the US and other countries.</p>

          <h3 className="uv-sub">The immigrant intent trap</h3>
          <div className="uv-policy-alert">
            <p className="uv-policy-label">⚠ Critical Warning</p>
            <p className="uv-policy-body">If your girlfriend enters on a tourist visa and you marry in the United States, she may be required to return to the Philippines and wait for CR-1 consular processing — potentially 12 to 24 months — possibly with an overstay on her record that complicates everything. Overstaying for more than 180 days triggers a 3-year bar from the US. Overstaying more than one year triggers a 10-year bar.</p>
          </div>

          <h3 className="uv-sub">When a tourist visa can work</h3>
          <ul className="uv-list">
            <li className="uv-li">Relationship is early and you genuinely want her to visit before any formal immigration plans.</li>
            <li className="uv-li">She has strong documented ties to the Philippines — senior employment, property, dependents.</li>
            <li className="uv-li">She has previous clean international travel history — especially to the US, Japan, Australia, or Schengen countries.</li>
            <li className="uv-li">There is no pending K-1 or I-130 petition — if an immigrant petition is already filed she is almost certainly ineligible for a tourist visa.</li>
            <li className="uv-li">The visit is genuinely temporary with a clear return plan.</li>
          </ul>

          <h3 className="uv-sub">What makes a tourist visa application stronger</h3>
          <ul className="uv-list">
            <li className="uv-li">Ties to Philippines: formal employment letter, property ownership, dependents, business ownership, previous travel history.</li>
            <li className="uv-li">Financial evidence: 6 months of bank statements, PHP 500,000 or more, consistent income deposits.</li>
            <li className="uv-li">Purpose of visit: hotel reservations, round trip flight, itinerary, invitation letter from US host.</li>
            <li className="uv-li">Be honest about the relationship at the interview — concealing an American partner and being caught is far worse than disclosing it honestly.</li>
          </ul>

          <h3 className="uv-sub">The bottom line</h3>
          <p className="uv-para">For a Filipina with a serious American partner, a tourist visa is genuinely difficult and carries real risks if the plan involves marriage or long-term immigration. It is not impossible, but requires strong documented ties to the Philippines, a well-prepared application, and honest consistent answers at the interview. If your relationship is heading toward marriage, the K-1 or CR-1 is the correct pathway. The tourist visa is not a shortcut — and using it as one can create immigration complications that follow both of you for years.</p>
        </div>
      </section>

      {/* === UK AND EUROPEAN VISA OPTIONS === */}
      <section className="uv-section section-light" id="uk-european-visas">
        <div className="uv-inner">
          <p className="uv-eyebrow">UK and European Visa Options</p>
          <h2 className="uv-title uv-title-dark">UK and European Visa Options for Filipino Partners</h2>
          <p className="uv-para uv-para-dark">The Expat Compass PH audience includes significant numbers of British, Australian, Canadian, and European expats in the Philippines. While our marriage and visa pages focus primarily on US immigration pathways, this section covers the key information for British nationals bringing a Filipina partner to the UK. Australian, Canadian, and European readers should consult their respective embassy websites as the details differ significantly by country.</p>

          <h3 className="uv-sub uv-sub-first uv-sub-dark">UK Standard Visitor Visa</h3>
          <div className="uv-policy-alert-lt">
            <p className="uv-policy-label">Good News for British Nationals — 86% Approval Rate</p>
            <p className="uv-policy-body-lt">The good news for British nationals: Filipino applicants have an 86 percent approval rate for UK Standard Visitor Visas — significantly above the global average of 77 percent. The visa costs £135 for a 6-month visit. Processing takes approximately 15 working days from biometrics submission at VFS Global in Manila or Cebu. There is no physical visa or sticker — the UK now operates a fully digital eVisa system linked to your UKVI account.</p>
          </div>

          <h3 className="uv-sub uv-sub-dark">What Makes a Strong UK Visitor Visa Application</h3>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">6 months of consistent bank statements showing regular income deposits — not a lump sum that appeared before application.</li>
            <li className="uv-li uv-li-dark">Employment certificate confirming position, salary, and approved leave.</li>
            <li className="uv-li uv-li-dark">Evidence of strong ties to the Philippines — family, property, ongoing obligations.</li>
            <li className="uv-li uv-li-dark">A genuine itinerary with confirmed accommodation and return flights.</li>
            <li className="uv-li uv-li-dark">An invitation letter from the UK sponsor explaining the visit, accommodation, and financial support.</li>
          </ul>
          <p className="uv-para uv-para-dark">Having a British boyfriend is an immigrant intent risk factor — the visa officer may conclude she intends to stay permanently rather than visit temporarily. This does not make approval impossible but it requires stronger evidence of genuine return intent. The shorter and more specific the itinerary the better. A 2-week trip with a specific purpose is easier to approve than an open-ended 6-month maximum stay request.</p>

          <h3 className="uv-sub uv-sub-dark">UK Fianc&eacute;e Visa</h3>
          <div className="uv-policy-alert-lt">
            <p className="uv-policy-label">The Correct Pathway for Marriage Intentions</p>
            <p className="uv-policy-body-lt">If your intention is marriage and long-term settlement in the UK the UK Fianc&eacute;e Visa is the appropriate pathway — not the Standard Visitor Visa. Applying for a visitor visa when the real intention is to remain and marry is grounds for refusal if the officer identifies the true intent. The Fianc&eacute;e Visa allows her to travel to the UK, marry within 6 months of arrival, and then switch to a Spouse Visa to remain.</p>
          </div>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">Fee: £1,846 in 2026.</li>
            <li className="uv-li uv-li-dark">Processing time: 12 to 24 weeks from submission.</li>
            <li className="uv-li uv-li-dark">She cannot work while on the Fianc&eacute;e Visa.</li>
            <li className="uv-li uv-li-dark">English language requirement at A1 level must be met through an approved test or exemption.</li>
            <li className="uv-li uv-li-dark">You must have suitable accommodation for her in the UK.</li>
            <li className="uv-li uv-li-dark">After marriage she applies for a Spouse Visa to remain.</li>
          </ul>

          <h3 className="uv-sub uv-sub-dark">UK Spouse Visa</h3>
          <div className="uv-policy-alert-lt">
            <p className="uv-policy-label">For Couples Already Married</p>
            <p className="uv-policy-body-lt">For couples already married the UK Spouse Visa allows the Filipina spouse to live and work in the UK. The sponsoring UK partner must earn a minimum of £29,000 per year gross in 2026 — this threshold increased significantly from previous years. The initial visa grants 2 years and 9 months with a pathway to Indefinite Leave to Remain after 5 years total residence. Fee: £1,846 from outside the UK in 2026. The Immigration Health Surcharge is £1,035 per year payable in addition to the visa fee — approximately £2,587 for a standard 2.5-year initial visa.</p>
          </div>
          <p className="uv-para uv-para-dark">The Filipina spouse must demonstrate English language proficiency at A1 level for entry and B1 level for extensions. Given that the Philippines is an English-speaking country and English is a medium of instruction in Philippine schools, most Filipinas can meet this requirement — but it must be formally demonstrated through an approved test unless an exemption applies.</p>

          <p className="uv-para uv-para-dark">For Australian, Canadian, and New Zealand nationals — note that each country has its own partner visa pathway with different income requirements, processing times, and conditions. Consult your country&rsquo;s immigration authority website directly. Australian Partner Visa, Canadian Spousal Sponsorship, and New Zealand Partner Visa are the primary routes — each has different processing times ranging from several months to over a year.</p>

          <div className="uv-policy-alert-lt" style={{borderLeftColor:'#F2994A', borderColor:'rgba(242,153,74,0.3)', background:'rgba(242,153,74,0.05)'}}>
            <p className="uv-policy-label" style={{color:'#F2994A'}}>Disclaimer — Verify Current Requirements</p>
            <p className="uv-policy-body-lt">UK and international immigration law changes regularly. The information above reflects conditions as of June 2026. Always verify current fees, income thresholds, and requirements directly at gov.uk/visas-immigration before making any application decisions. Consider consulting a licensed UK immigration solicitor for complex cases.</p>
          </div>
        </div>
      </section>

      {/* === DIVORCE — INTRO + SUBSECTION 1 === */}
      <section className="uv-section section-light">
        <div className="uv-inner">
          <p className="uv-eyebrow">Divorce</p>
          <h2 className="uv-title uv-title-dark">Divorce and Ending Your Marriage — What Every Expat Needs to Know</h2>

          <h3 className="uv-sub uv-sub-first uv-sub-dark">The Fundamental Reality — Two Legal Worlds</h3>
          <p className="uv-para uv-para-dark">When an American man married to a Filipina seeks a divorce, he is navigating two completely separate legal systems that treat the marriage very differently. Understanding both is not optional — confusing them is one of the most costly mistakes in international family law.</p>
          <p className="uv-para uv-para-dark">In the United States, your marriage can be dissolved through divorce under the laws of your state of residence. You can remarry in the US. Your US divorce is fully valid and recognized throughout America.</p>
          <p className="uv-para uv-para-dark">In the Philippines, the same marriage continues to exist legally until a Philippine court formally recognizes your US divorce through a specific judicial proceeding. Your Filipina spouse remains legally married under Philippine law regardless of your US divorce decree. She cannot legally remarry in the Philippines and her civil status records still show her as married until a Philippine court acts.</p>
          <p className="uv-para uv-para-dark">These are two parallel legal realities that exist simultaneously. Understanding both protects you and protects her.</p>
        </div>
      </section>

      {/* === DIVORCE — SUBSECTION 2: US DIVORCE PROCESS === */}
      <section className="uv-section section-dark">
        <div className="uv-inner">
          <h2 className="uv-title">Getting a US Divorce When Your Spouse Is in the Philippines</h2>
          <p className="uv-para">The most common question from American men in this situation is whether their spouse needs to agree to or sign the divorce papers. In most US states the answer is no.</p>
          <p className="uv-para">US divorce law does not require both parties to consent. Here is how it works:</p>

          <h3 className="uv-sub">Default Divorce — When Your Spouse Does Not Respond</h3>
          <ol className="uv-nlist">
            <li className="uv-ni">File for divorce in your US state of residence. Most states require you to have lived there for a minimum period — typically 6 months to 1 year — before filing. File in the county where you reside.</li>
            <li className="uv-ni">Formally serve divorce papers on your spouse in the Philippines. This is the critical legal step and the one that requires the most care. You must make a genuine legal effort to notify her. Methods typically accepted by US courts include: personal service through a licensed process server in the Philippines; service through the Philippine court system via Hague Convention procedures; certified mail with proof of delivery in some states; and as a last resort, service by publication in a newspaper if she genuinely cannot be located.</li>
            <li className="uv-ni">Wait for the response deadline. This varies by state — typically 20 to 30 days from confirmed service. If she does not respond within the required timeframe, you can request a default.</li>
            <li className="uv-ni">The court grants a default divorce judgment. You receive a divorce decree without her signature or participation.</li>
          </ol>

          <h3 className="uv-sub">What She Can and Cannot Block</h3>
          <div className="dv-two-col">
            <div className="dv-col-card dv-col-cannot">
              <p className="dv-col-heading">She Cannot Block</p>
              <p className="dv-col-text">She cannot block the divorce itself in most US states. US courts have jurisdiction over the marriage if you are a US resident and the marriage was legally recognized. The court can and will grant the divorce even over her objection or non-participation.</p>
            </div>
            <div className="dv-col-card dv-col-can">
              <p className="dv-col-heading">She Can Complicate</p>
              <p className="dv-col-text">She can complicate proceedings regarding division of US-based assets, alimony or spousal support claims, and any shared US property or financial matters. If she chooses to participate and contest financial elements the process becomes more complex. If she ignores proceedings entirely, a default judgment on all matters including asset division can be entered.</p>
            </div>
          </div>

          <h3 className="uv-sub">Service of Process in the Philippines — The Procedural Hurdle</h3>
          <div className="uv-policy-alert">
            <p className="uv-policy-label">Important — Do Not Underestimate This Step</p>
            <p className="uv-policy-body">Properly serving your spouse in the Philippines is the step most people underestimate. Your state court requires proof that she was legally notified before entering a default judgment. The Philippines is a signatory to the Hague Service Convention, which provides the official legal mechanism for serving court documents internationally. The process through official channels can take several months. Many attorneys recommend hiring a process server in the Philippines who can personally serve papers and provide the affidavit of service your US court requires. Do not skip this step or take shortcuts — improperly served papers can delay your case significantly or result in the default being challenged later.</p>
          </div>

          <h3 className="uv-sub">US Divorce Cost and Timeline</h3>
          <p className="uv-para">Uncontested or default divorce with attorney: approximately $1,500 to $5,000 USD in attorney fees plus court filing fees which vary by state. Timeline from filing to decree: typically 3 to 12 months depending on state waiting periods, how quickly service is achieved, and court scheduling.</p>
        </div>
      </section>

      {/* === DIVORCE — SUBSECTION 3: PHILIPPINE LEGAL REALITY === */}
      <section className="uv-section section-light">
        <div className="uv-inner">
          <h2 className="uv-title uv-title-dark">The Critical Philippine Legal Reality — Your US Divorce Does Not Exist in the Philippines</h2>
          <div className="uv-policy-alert-lt">
            <p className="uv-policy-label">⚠ The Single Most Important Thing to Understand</p>
            <p className="uv-policy-body-lt">Your US divorce decree, no matter how valid and final it is in America, has absolutely no automatic effect on your wife&rsquo;s legal status in the Philippines. Philippine courts do not recognize foreign divorces automatically. The marriage continues to legally exist in the Philippines until a Philippine court formally recognizes the foreign divorce through a separate judicial proceeding.</p>
          </div>

          <h3 className="uv-sub uv-sub-dark">Why This Matters Practically</h3>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">Her PSA records — Philippine Statistics Authority, which maintains civil registry records — will still show her as married.</li>
            <li className="uv-li uv-li-dark">She cannot obtain a CENOMAR — Certificate of No Marriage — which is required to remarry in the Philippines or for many official transactions.</li>
            <li className="uv-li uv-li-dark">If she remarries in the Philippines without first getting the foreign divorce judicially recognized, she risks being charged with bigamy — a criminal offense under Philippine law.</li>
            <li className="uv-li uv-li-dark">Her passport, government benefits, and property transactions may be affected by her continued married status in Philippine records.</li>
          </ul>
        </div>
      </section>

      {/* === DIVORCE — SUBSECTION 4: ARTICLE 26 === */}
      <section className="uv-section section-dark">
        <div className="uv-inner">
          <p className="uv-eyebrow">Article 26 — Family Code of the Philippines</p>
          <h2 className="uv-title">Article 26 of the Family Code — The Legal Pathway for Your Filipino Spouse</h2>
          <p className="uv-para">Article 26 Paragraph 2 of the Philippine Family Code is the legal provision that allows your Filipina spouse to have her civil status updated in the Philippines after your US divorce. It states: <em>Where a marriage between a Filipino citizen and a foreigner is validly celebrated and a divorce is thereafter validly obtained abroad by the alien spouse capacitating him or her to remarry, the Filipino spouse shall have capacity to remarry under Philippine law.</em></p>
          <p className="uv-para">In plain terms: if you as the American spouse obtain a valid divorce in the United States and that divorce allows you to remarry, your Filipina spouse has the legal right to petition a Philippine court to recognize that divorce and update her civil status to single.</p>

          <h3 className="uv-sub">Critical Updates from the Philippine Supreme Court</h3>
          <div className="dv-navy-card">
            <p className="dv-navy-label">Supreme Court Rulings — What Changed</p>
            <p className="dv-navy-body"><strong style={{color: '#C9A84C'}}>Republic v. Manalo (2018):</strong> The Supreme Court expanded Article 26 to cover situations where the Filipino spouse — not just the foreign spouse — initiates the divorce abroad. Either spouse can now seek judicial recognition of the foreign divorce in the Philippines.</p>
            <p className="dv-navy-body"><strong style={{color: '#C9A84C'}}>Republic v. Cuevas (2024):</strong> The Court confirmed that the type of divorce does not matter — whether judicial, administrative, or by mutual agreement — as long as it is valid under the foreign spouse&rsquo;s national law. This is particularly relevant for US divorces which vary in type by state.</p>
            <p className="dv-navy-body"><strong style={{color: '#C9A84C'}}>As of mid-2026:</strong> No law allowing Filipino citizens to file for absolute domestic divorce has been enacted despite multiple legislative attempts. Judicial recognition of foreign divorces in mixed marriages remains the primary legal pathway.</p>
          </div>
        </div>
      </section>

      {/* === DIVORCE — SUBSECTION 5: ARTICLE 26 PROCESS === */}
      <section className="uv-section section-light">
        <div className="uv-inner">
          <h2 className="uv-title uv-title-dark">The Article 26 Judicial Recognition Process in the Philippines</h2>
          <p className="uv-para uv-para-dark">This is a separate court proceeding that must be filed in the Philippines. It is not automatic and it is not simple.</p>

          <h3 className="uv-sub uv-sub-dark">Who Can File</h3>
          <p className="uv-para uv-para-dark">Either spouse can file the petition. Most commonly it is the Filipina spouse who files because she is the one whose Philippine civil status needs updating. The petition is filed in the Regional Trial Court — Family Court — in the city or province where the marriage was recorded or where the petitioner resides.</p>

          <h3 className="uv-sub uv-sub-dark">What Must Be Proven in Court</h3>
          <ol className="uv-nlist">
            <li className="uv-ni uv-ni-dark">A valid marriage existed between a Filipino and a foreigner — citizenship is tested at the time the divorce was obtained. The foreign spouse must have been a non-Filipino national at the time.</li>
            <li className="uv-ni uv-ni-dark">A divorce was validly obtained abroad under the law of the country that issued it. Philippine courts do not take judicial notice of foreign laws — the specific law of your US state on divorce must be proven as a fact in court with authenticated documentation.</li>
            <li className="uv-ni uv-ni-dark">The divorce capacitates the foreign spouse to remarry — meaning the US divorce is final and you are legally free to remarry in the US.</li>
          </ol>

          <h3 className="uv-sub uv-sub-dark">Documents Required</h3>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">Authenticated Philippine marriage certificate — PSA copy.</li>
            <li className="uv-li uv-li-dark">Authenticated US divorce decree — must be apostilled through the Secretary of State of the state where the divorce was granted. The Philippines joined the Hague Apostille Convention in 2019, making this more straightforward.</li>
            <li className="uv-li uv-li-dark">Authenticated copy of the specific US state divorce law — a certified copy of the relevant statutes of your state confirming the divorce is valid and final under that state&rsquo;s law. This must also be apostilled. This is the document most commonly missing and most commonly causing cases to fail.</li>
            <li className="uv-li uv-li-dark">Birth certificates of children if any.</li>
            <li className="uv-li uv-li-dark">Proof of US citizenship — passport or naturalization certificate.</li>
            <li className="uv-li uv-li-dark">Proof of Philippine citizenship of the Filipino spouse — PSA birth certificate or passport.</li>
            <li className="uv-li uv-li-dark">Proof of residence.</li>
          </ul>

          <h3 className="uv-sub uv-sub-dark">The Court Process</h3>
          <ol className="uv-nlist">
            <li className="uv-ni uv-ni-dark">Attorney files petition at the appropriate Regional Trial Court.</li>
            <li className="uv-ni uv-ni-dark">Court orders publication of notice in a newspaper of general circulation once a week for three consecutive weeks — this is a mandatory procedural step.</li>
            <li className="uv-ni uv-ni-dark">Office of the Solicitor General is notified — they represent the government&rsquo;s interest and can oppose the petition.</li>
            <li className="uv-ni uv-ni-dark">Hearing held — petitioner presents all documentary evidence and proves the three required elements.</li>
            <li className="uv-ni uv-ni-dark">Court issues decision granting or denying recognition.</li>
            <li className="uv-ni uv-ni-dark">If granted — decision is registered with the Local Civil Registrar where the marriage was recorded and then with the Philippine Statistics Authority.</li>
            <li className="uv-ni uv-ni-dark">PSA annotates the marriage record showing the foreign divorce has been judicially recognized.</li>
            <li className="uv-ni uv-ni-dark">Filipina spouse can now obtain a CENOMAR showing her as single and is legally free to remarry in the Philippines.</li>
          </ol>

          <h3 className="uv-sub uv-sub-dark">Timeline and Cost</h3>
          <p className="uv-para uv-para-dark">Timeline: Most cases take 12 to 24 months from filing to final PSA annotation. Simpler cases with complete documents can move faster. Complex cases — multiple jurisdictions involved, missing foreign law documentation, Office of the Solicitor General opposition — can take longer.</p>
          <p className="uv-para uv-para-dark">Cost: Philippine attorney fees for judicial recognition of foreign divorce typically range from 80,000 to 200,000 pesos depending on the law firm and complexity. Add filing fees, publication costs, and document authentication costs for a total realistic budget of 150,000 to 300,000 pesos (approximately $2,500 to $5,000 USD).</p>

          <h3 className="uv-sub uv-sub-dark">Common Reasons for Denial</h3>
          <ul className="dv-warn-list">
            <li className="dv-warn-li dv-warn-li-lt">Insufficient proof of the foreign divorce law — the most common failure point. Many petitions fail because they present the divorce decree but not an authenticated copy of the actual divorce statute from the US state.</li>
            <li className="dv-warn-li dv-warn-li-lt">Defective authentication of documents — using incorrect apostille procedures or missing required certifications.</li>
            <li className="dv-warn-li dv-warn-li-lt">Failure to establish that the foreign spouse was a non-Filipino at the relevant time — particularly relevant if the American spouse ever held dual citizenship with the Philippines. These deficiencies can often be cured by a lawyer and the petition refiled.</li>
          </ul>
        </div>
      </section>

      {/* === DIVORCE — SUBSECTION 6: ANNULMENT === */}
      <section className="uv-section section-dark">
        <div className="uv-inner">
          <h2 className="uv-title">Philippine Annulment — The Alternative Path</h2>
          <p className="uv-para">Annulment in the Philippines is the primary legal mechanism for dissolving a marriage where the judicial recognition of foreign divorce route is unavailable — for example, where both spouses are Filipino citizens, or where no foreign divorce has been obtained.</p>
          <p className="uv-para">For expats married to Filipinas who are pursuing a US divorce, annulment in the Philippines is generally not the primary route. However it is worth understanding because it may be relevant in some situations.</p>

          <h3 className="uv-sub">What Annulment Is and Is Not</h3>
          <p className="uv-para">Philippine annulment does not end a valid marriage the way divorce does. It declares that the marriage was never valid from the beginning due to a defect that existed at the time of the wedding. This is a fundamental legal difference from divorce, which ends a valid marriage. The most commonly used ground is psychological incapacity under Article 36 of the Family Code — defined as a personality structure or condition so severe that one or both spouses were unable to fulfill the essential obligations of marriage. This is a legal concept, not a medical diagnosis. Following the landmark <em>Tan-Andal v. Andal</em> ruling in 2021, a clinical psychiatrist&rsquo;s testimony is no longer absolutely required, though most lawyers still recommend one.</p>

          <h3 className="uv-sub">Other Grounds for Annulment</h3>
          <ul className="uv-list">
            <li className="uv-li">Lack of parental consent if a party was between 18 and 21 at marriage.</li>
            <li className="uv-li">Insanity — one party was of unsound mind at time of marriage.</li>
            <li className="uv-li">Fraud — concealing pregnancy by another man, an STD, drug addiction.</li>
            <li className="uv-li">Force or intimidation — consent was obtained through coercion.</li>
            <li className="uv-li">Impotence existing at time of marriage and appearing incurable.</li>
            <li className="uv-li">Incurable sexually transmissible disease existing at time of marriage.</li>
            <li className="uv-li">Most grounds other than psychological incapacity have a 5-year statute of limitations from the date of marriage, after which they cannot be used.</li>
          </ul>

          <h3 className="uv-sub">Annulment Cost and Timeline</h3>
          <div className="dv-stat-row">
            <div className="dv-stat-card dv-stat-dark">
              <p className="dv-stat-label">Timeline</p>
              <p className="dv-stat-value">2 to 5 years uncontested. Contested cases can take significantly longer.</p>
            </div>
            <div className="dv-stat-card dv-stat-dark">
              <p className="dv-stat-label">Total Cost</p>
              <p className="dv-stat-value">₱150,000 – ₱600,000 (approx. $2,500 – $10,000 USD)</p>
            </div>
            <div className="dv-stat-card dv-stat-dark">
              <p className="dv-stat-label">Attorney Fees</p>
              <p className="dv-stat-value">₱150,000 – ₱500,000</p>
            </div>
            <div className="dv-stat-card dv-stat-dark">
              <p className="dv-stat-label">Other Fees</p>
              <p className="dv-stat-value">Psychologist ₱40,000–80,000 · Filing &amp; publication ₱20,000–50,000. Court filing fees increased 15% as of April 1, 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* === DIVORCE — SUBSECTION 7: LEGAL SEPARATION === */}
      <section className="uv-section section-light">
        <div className="uv-inner">
          <h2 className="uv-title uv-title-dark">Legal Separation — What It Does and Does Not Do</h2>
          <p className="uv-para uv-para-dark">Legal separation is frequently misunderstood by both foreigners and Filipinos. Legal separation in the Philippines allows spouses to live apart and divide their property. It does <strong>not</strong> dissolve the marriage bond. Legally separated spouses remain married. Neither party can remarry.</p>

          <h3 className="uv-sub uv-sub-dark">Grounds for Legal Separation</h3>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">Repeated physical violence or abusive conduct.</li>
            <li className="uv-li uv-li-dark">Drug addiction or habitual alcoholism.</li>
            <li className="uv-li uv-li-dark">Sexual infidelity.</li>
            <li className="uv-li uv-li-dark">Abandonment without just cause for more than one year.</li>
            <li className="uv-li uv-li-dark">Attempt against the life of the spouse or children.</li>
            <li className="uv-li uv-li-dark">Conviction of a crime with penalty of more than 6 years.</li>
          </ul>
          <p className="uv-para uv-para-dark">Legal separation is not a pathway to remarriage. For expats seeking to end their marriage and eventually remarry, legal separation serves no useful purpose in most cases. It is worth knowing this because many people in the Philippines describe themselves as legally separated when in fact they have simply been living apart with no legal proceedings at all.</p>
        </div>
      </section>

      {/* === DIVORCE — SUBSECTION 8: ASSETS === */}
      <section className="uv-section section-dark">
        <div className="uv-inner">
          <h2 className="uv-title">Philippine Assets and Property — Critical Considerations</h2>
          <p className="uv-para">A US divorce decree does not automatically affect Philippine-registered property or assets. Philippine property law is separate from US divorce law and requires separate attention.</p>
          <p className="uv-para">Under Philippine law, property acquired during marriage is generally governed by the system of Absolute Community of Property unless a prenuptial agreement specifies otherwise. This means property acquired during the marriage by either spouse is jointly owned regardless of whose name it is registered in.</p>

          <h3 className="uv-sub">Key Points for Expats</h3>
          <ul className="uv-list">
            <li className="uv-li">If you own property registered in the Philippines — including condominium units — your US divorce does not automatically transfer or divide that property. A separate proceeding or agreement is needed.</li>
            <li className="uv-li">If property is registered in your Filipino spouse&rsquo;s name and she is the legal owner, your US divorce does not give you automatic rights to that property in the Philippines.</li>
            <li className="uv-li">If your Filipino spouse has Philippine bank accounts, investment accounts, or other assets, your US divorce decree has no direct effect on those assets.</li>
            <li className="uv-li">Consult a Philippine attorney about the division of any Philippine-based assets before or during your US divorce proceedings. Agreements about Philippine property should ideally be formalized in both jurisdictions.</li>
          </ul>
        </div>
      </section>

      {/* === DIVORCE — SUBSECTION 9: CHILDREN === */}
      <section className="uv-section section-light">
        <div className="uv-inner">
          <h2 className="uv-title uv-title-dark">Children in the Philippines — International Custody Complexity</h2>
          <div className="dv-amber-alert">
            <p className="dv-amber-label">⚠ Requires Specialized Legal Advice</p>
            <p className="dv-amber-body">If children from the marriage are living in the Philippines, international family law adds significant complexity that requires specialized legal advice. This is not an area where general divorce guidance applies.</p>
          </div>

          <h3 className="uv-sub uv-sub-dark">Key Issues</h3>
          <ul className="uv-list">
            <li className="uv-li uv-li-dark">Philippine courts generally favor giving custody of young children to the mother under Philippine law. The Tender Years Doctrine presumes children under 7 years old should remain with the mother unless there is a compelling reason otherwise.</li>
            <li className="uv-li uv-li-dark">A US custody order is not automatically enforceable in the Philippines. Philippine courts will conduct their own custody determination based on Philippine law and the best interests of the child.</li>
            <li className="uv-li uv-li-dark">Removing a child from the Philippines without the other parent&rsquo;s consent can constitute child abduction under both Philippine law and international law, even if you have a US custody order.</li>
            <li className="uv-li uv-li-dark">If your child is in the Philippines and you are seeking custody, consult both a US family law attorney and a Philippine family law attorney before taking any action.</li>
            <li className="uv-li uv-li-dark">The Hague Convention on Parental Child Abduction — which the Philippines has ratified — provides a legal mechanism for the return of children who have been wrongfully removed or retained across international borders.</li>
          </ul>
        </div>
      </section>

      {/* === DIVORCE — SUBSECTION 10: REMARRIAGE === */}
      <section className="uv-section section-dark">
        <div className="uv-inner">
          <h2 className="uv-title">If You Plan to Remarry in the Philippines</h2>
          <p className="uv-para">If you obtain a US divorce and later want to remarry in the Philippines — whether to your current Filipino partner or anyone else — your Philippine civil status must be updated first.</p>
          <p className="uv-para">The steps required: Your US divorce must be judicially recognized by a Philippine court through the Article 26 process described above. Only after the Philippine court grants recognition and the PSA annotates your former wife&rsquo;s marriage record can you be considered legally free to remarry in the Philippines. If you attempt to marry in the Philippines while still legally married there, you risk a bigamy charge regardless of your US divorce status.</p>
          <div className="uv-policy-alert">
            <p className="uv-policy-label">The Most Common Question — Answered Directly</p>
            <p className="uv-policy-body">For the person asking: &ldquo;I got divorced in the US, can I marry my Filipino girlfriend in the Philippines now?&rdquo; The answer is not automatically. Your US divorce must first be judicially recognized in the Philippines. This takes 12 to 24 months and requires a Philippine attorney. Plan accordingly.</p>
          </div>
        </div>
      </section>

      {/* === DIVORCE — SUBSECTION 11: PRACTICAL STEPS + DISCLAIMER === */}
      <section className="uv-section section-light">
        <div className="uv-inner">
          <h2 className="uv-title uv-title-dark">Practical Steps and Recommendations</h2>
          <ol className="dv-action-list">
            <li className="dv-action-item">Consult a US family law attorney in your state before filing anything. Divorce law varies significantly by state — residency requirements, waiting periods, grounds, asset division rules, and service of process requirements all differ. Get advice specific to your jurisdiction.</li>
            <li className="dv-action-item">Understand your service of process requirements. How you legally notify your spouse in the Philippines must satisfy your state court&rsquo;s standards. Improperly served papers can delay or derail your case.</li>
            <li className="dv-action-item">If the split is amicable, a waiver of service or acknowledgment of proceedings from your spouse simplifies everything significantly, even though her signature is not legally required.</li>
            <li className="dv-action-item">If there are Philippine assets involved, consult a Philippine attorney before finalizing your US divorce. Asset division affecting Philippine property requires attention in both jurisdictions.</li>
            <li className="dv-action-item">If children are in the Philippines, consult attorneys in both countries before taking any action. Do not rely on your US custody order alone.</li>
            <li className="dv-action-item">For the Article 26 recognition process in the Philippines, the most critical documents to prepare are: your apostilled US divorce decree AND an apostilled certified copy of your state&rsquo;s divorce law. Missing the second document is the most common reason petitions fail.</li>
            <li className="dv-action-item">If your Filipino spouse needs her civil status updated in the Philippines, she needs a Philippine attorney who specializes in judicial recognition of foreign divorce. This is a specialized practice area — not every family law attorney handles it regularly.</li>
            <li className="dv-action-item">Do not rely on this page as legal advice. Divorce law in both the US and the Philippines is complex, state-specific, case-specific, and changing. The consultation fee with a qualified attorney in both jurisdictions is money well spent before filing anything.</li>
          </ol>

          <div className="dv-muted-box">
            <p className="dv-muted-text">This page provides general information about divorce law as it applies to international marriages between American men and Filipino citizens. It is not legal advice and should not be relied upon as such. Philippine and US family law is complex, jurisdiction-specific, and subject to change. Always consult a licensed US family law attorney in your state and a licensed Philippine family law attorney before taking any legal action regarding your marriage. The information on this page reflects conditions as of June 2026.</p>
          </div>
        </div>
      </section>

      {/* === STEVE'S NOTE — CR-1 PERSONAL === */}
      <section className="sn-section">
        <div className="sn-inner">
          <div className="sn-header">
            <div className="sn-monogram">S</div>
            <div>
              <p className="sn-name">Steve&rsquo;s Note</p>
              <p className="sn-tag">Our personal decision · Cebu, Philippines</p>
            </div>
          </div>
          <div className="sn-rule" />
          <div className="sn-body">
            <p>Irish and I are going through this process right now. We got married here in the Philippines and we are pursuing the CR-1 — not the K-1. We are living together in Cebu while the process runs its course. I am making a one-month trip to the US for the birth of my grandson, but I will be returning to the Philippines where Irish and I will continue building our life together.</p>
            <p>While we wait for her green card, we are not sitting still. We are traveling the islands, exploring Southeast Asia, creating content, and gathering first-hand information to share with this community. That is what Expat Compass PH is — real experience, lived in real time, shared honestly.</p>
            <p>Our plan is not to relocate to America permanently — it is to have the freedom to visit my family together for the holidays each year, while continuing to live the life we are building here. The CR-1 gives us that freedom without the stress and separation risk that the K-1 would have created under current US immigration policy.</p>
            <p>This is not legal advice. It is our personal experience and our personal decision. Every situation is different — yours may call for a different approach. If there is any complexity in your case whatsoever, consult a licensed US immigration attorney before filing anything. I will update this page with real numbers and real timelines as we go through the process ourselves.</p>
          </div>
          <p className="sn-verified">Last Updated: June 2026 · Cebu, Philippines</p>
        </div>
      </section>

      {/* === IMMIGRATION DISCLAIMER === */}
      <section className="section legal-section">
        <div className="legal-inner">
          <div>
            <div className="legal-icon">!</div>
            <p className="section-label">Immigration note</p>
            <h2 className="section-heading">
              Policy changes fast. Verify everything.
            </h2>
          </div>
          <p className="legal-body">
            <strong>Immigration law is complex and US policy is changing rapidly in 2026.</strong> The information on this page reflects conditions as of June 2026 and is for general informational purposes only. It is not legal advice. Before making any immigration decisions, consult a licensed US immigration attorney.
            <br /><br />
            Processing times, fees, and policy requirements change without notice. The 2026 Adjustment of Status policy described on this page is subject to ongoing legal challenges and may change. Always verify current requirements directly at <strong>uscis.gov</strong> and the US Embassy Manila website at <strong>ph.usembassy.gov</strong>.
            <br /><br />
            Expat Compass PH is not a law firm and does not provide legal advice. Nothing on this site constitutes a legal opinion or creates an attorney-client relationship.
          </p>
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
      <Footer />
    </>
  );
}

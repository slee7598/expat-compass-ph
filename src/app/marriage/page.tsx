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
          color: rgba(248,246,241,0.35);
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
          color: rgba(248,246,241,0.72);
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
          color: rgba(248,246,241,0.45);
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
          color: rgba(248,246,241,0.7);
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
          color: rgba(248,246,241,0.8); margin-bottom: 14px; max-width: 760px;
        }
        .uv-para-dark { color: #4A5868; }
        .uv-footnote { font-size: 0.82rem; font-weight: 300; color: #6B7B8A; margin-top: 6px; }
        .uv-list { list-style: none; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 8px; max-width: 760px; }
        .uv-li {
          font-size: 0.9rem; font-weight: 300; line-height: 1.72;
          color: rgba(248,246,241,0.78); padding-left: 22px; position: relative;
        }
        .uv-li::before { content: '—'; position: absolute; left: 0; color: #C9A84C; font-weight: 600; }
        .uv-li-dark { color: #4A5868; }
        .uv-nlist { list-style: none; counter-reset: uvctr; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 8px; max-width: 760px; }
        .uv-ni {
          font-size: 0.9rem; font-weight: 300; line-height: 1.72;
          color: rgba(248,246,241,0.78); padding-left: 28px; position: relative; counter-increment: uvctr;
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
        .uv-policy-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: rgba(248,246,241,0.85); }
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
        .compare-table th.th-dim { background: rgba(201,168,76,0.12); color: rgba(248,246,241,0.5); font-family: 'Inter', sans-serif; font-size: 0.68rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
        .compare-table td { padding: 12px 18px; border-bottom: 1px solid rgba(248,246,241,0.06); font-weight: 300; line-height: 1.5; color: rgba(248,246,241,0.78); vertical-align: top; }
        .compare-table td.td-dim { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(248,246,241,0.4); background: rgba(248,246,241,0.02); }
        .compare-table .td-good { color: #6FCF97; font-weight: 500; }
        .compare-table .td-warn { color: #F2994A; font-weight: 500; }
        .compare-table .td-bad { color: #EB5757; font-weight: 500; }

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

      {/* === K-1 FIANCÉE VISA === */}
      <section className="uv-section section-light">
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
      <section className="uv-section section-dark">
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
      <section className="uv-section section-light">
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
      <section className="uv-section section-dark">
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
      <section className="uv-section section-light">
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
      <section className="uv-section section-dark">
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
      <section className="uv-section section-light">
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
      <section className="uv-section section-dark">
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
            <p>Irish and I are going through this process right now. We are getting married in the Philippines and pursuing the CR-1 — not the K-1. Given the current US immigration environment, bringing Irish to the US on a K-1 and then potentially having her required to return to the Philippines after our wedding to wait for consular processing is not a risk we are willing to take. The CR-1 means she waits here in the Philippines, we stay connected, and when she arrives she is already a permanent resident with immediate work authorization.</p>
            <p>I will be updating this page as we go through the process ourselves — real numbers, real timelines, real experience. This is not legal advice. It is our personal decision based on our circumstances. Every situation is different. If there is any complexity in your case whatsoever, consult a licensed US immigration attorney before filing anything.</p>
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

import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Divorcing a Filipino Spouse — Complete Legal Guide for Americans 2026",
  description:
    "Complete guide to divorce when married to a Filipino citizen. US divorce process, service of process in the Philippines, Article 26 judicial recognition, annulment, legal separation, Philippine assets, child custody, and remarriage. Real information for expats.",
  alternates: { canonical: "https://expatcompassph.com/divorce-philippines" },
};

export default function DivorcePhilippinesPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background: #F8F6F1; color: #0B1F3A; }

        /* ── HERO ── */
        .page-header { background: #0B1F3A; }
        .page-hero { padding: 72px 48px 96px; max-width: 820px; }
        .page-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 20px;
        }
        .page-eyebrow::before { content: ''; display: block; width: 28px; height: 1px; background: #C9A84C; }
        .page-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 4.5vw, 3.4rem); font-weight: 700; line-height: 1.12;
          color: #F8F6F1; margin-bottom: 24px;
        }
        .page-sub {
          font-size: 1.05rem; font-weight: 300; line-height: 1.65;
          color: #F8F6F1; max-width: 640px;
        }

        /* ── OPENING NOTE ── */
        .opening-wrap { background: #F8F6F1; padding: 48px 48px 0; }
        .opening-card {
          max-width: 860px;
          border: 1px solid rgba(201,168,76,0.4);
          border-left: 4px solid #C9A84C;
          padding: 28px 32px;
          background: rgba(201,168,76,0.04);
        }
        .opening-eyebrow {
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 12px;
        }
        .opening-text { font-size: 0.95rem; font-weight: 300; line-height: 1.82; color: #4A5868; }

        /* ── SECTIONS ── */
        .dv-section { padding: 80px 48px; }
        .dv-light { background: #F8F6F1; }
        .dv-dark { background: #0B1F3A; }
        .dv-gold-top { border-top: 3px solid #C9A84C; }
        .dv-inner { max-width: 860px; }

        /* ── EYEBROW ── */
        .dv-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.7rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 16px;
        }
        .dv-eyebrow::before { content: '◈'; font-size: 0.65rem; }

        /* ── HEADINGS ── */
        .dv-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.7rem, 2.8vw, 2.3rem); font-weight: 700; line-height: 1.2;
          color: #F8F6F1; margin-bottom: 24px; max-width: 800px;
        }
        .dv-title-lt { color: #0B1F3A; }
        .dv-sub {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.05rem, 1.8vw, 1.3rem); font-weight: 700; line-height: 1.25;
          color: #F8F6F1; margin: 36px 0 14px; padding-top: 32px;
          border-top: 1px solid rgba(201,168,76,0.15);
        }
        .dv-sub-first { border-top: none; padding-top: 0; margin-top: 4px; }
        .dv-sub-lt { color: #0B1F3A; border-top-color: rgba(11,31,58,0.1); }

        /* ── BODY TEXT ── */
        .dv-para {
          font-size: 0.92rem; font-weight: 300; line-height: 1.85;
          color: #F8F6F1; margin-bottom: 14px; max-width: 760px;
        }
        .dv-para-lt { color: #4A5868; }

        /* ── BULLET LIST ── */
        .dv-list { list-style: none; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 8px; max-width: 760px; }
        .dv-li { font-size: 0.9rem; font-weight: 300; line-height: 1.72; padding-left: 22px; position: relative; color: #F8F6F1; }
        .dv-li::before { content: '—'; position: absolute; left: 0; color: #C9A84C; font-weight: 600; }
        .dv-li-lt { color: #4A5868; }

        /* ── NUMBERED LIST ── */
        .dv-nlist { list-style: none; counter-reset: dvctr2; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 10px; max-width: 760px; }
        .dv-ni { font-size: 0.9rem; font-weight: 300; line-height: 1.72; padding-left: 28px; position: relative; counter-increment: dvctr2; color: #F8F6F1; }
        .dv-ni::before { content: counter(dvctr2) '.'; position: absolute; left: 0; color: #C9A84C; font-size: 0.78rem; font-weight: 700; padding-top: 2px; }
        .dv-ni-lt { color: #4A5868; }

        /* ── CALLOUT BOXES ── */
        .dv-gold-alert {
          background: rgba(201,168,76,0.05); border: 1px solid rgba(201,168,76,0.35);
          border-left: 4px solid #C9A84C; padding: 26px 28px; margin: 28px 0; max-width: 760px;
        }
        .dv-gold-alert-dark {
          background: rgba(201,168,76,0.07); border: 1px solid rgba(201,168,76,0.3);
          border-left: 4px solid #C9A84C; padding: 26px 28px; margin: 28px 0; max-width: 760px;
        }
        .dv-alert-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 12px; }
        .dv-alert-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #F8F6F1; }
        .dv-alert-body-lt { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #4A5868; }
        .dv-amber-alert {
          background: rgba(242,153,74,0.08); border: 1px solid rgba(242,153,74,0.35);
          border-left: 4px solid #F2994A; padding: 26px 28px; margin: 28px 0; max-width: 760px;
        }
        .dv-amber-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #F2994A; margin-bottom: 12px; }
        .dv-amber-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #4A5868; }
        .dv-amber-body-dark { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #F8F6F1; }
        .dv-navy-card {
          background: rgba(11,31,58,0.88); border: 1px solid rgba(201,168,76,0.2);
          border-left: 4px solid #C9A84C; padding: 26px 28px; margin: 28px 0; max-width: 760px;
        }
        .dv-navy-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 14px; }
        .dv-navy-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #F8F6F1; margin-bottom: 10px; }

        /* ── CAN / CANNOT CARDS ── */
        .dv-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 20px 0; max-width: 760px; }
        .dv-col-card { padding: 22px 24px; }
        .dv-col-can { background: rgba(111,207,151,0.06); border: 1px solid rgba(111,207,151,0.2); border-left: 3px solid #6FCF97; }
        .dv-col-cannot { background: rgba(235,87,87,0.06); border: 1px solid rgba(235,87,87,0.2); border-left: 3px solid #EB5757; }
        .dv-col-heading { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 12px; }
        .dv-col-can .dv-col-heading { color: #6FCF97; }
        .dv-col-cannot .dv-col-heading { color: #EB5757; }
        .dv-col-text { font-size: 0.88rem; font-weight: 300; line-height: 1.75; color: #F8F6F1; }

        /* ── STAT CARDS ── */
        .dv-stat-row { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 20px 0; max-width: 640px; }
        .dv-stat-card { padding: 18px 22px; }
        .dv-stat-dk { background: rgba(248,246,241,0.04); border: 1px solid rgba(201,168,76,0.12); }
        .dv-stat-lk { background: #fff; border: 1px solid rgba(11,31,58,0.08); }
        .dv-stat-label { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #C9A84C; margin-bottom: 6px; }
        .dv-stat-value { font-size: 0.88rem; font-weight: 300; color: #F8F6F1; line-height: 1.6; }
        .dv-stat-value-lt { font-size: 0.88rem; font-weight: 300; color: #0B1F3A; line-height: 1.6; }

        /* ── THREE ELEMENT CARDS ── */
        .dv-elements { display: flex; flex-direction: column; gap: 12px; margin: 20px 0; max-width: 760px; }
        .dv-element-card-lt { display: flex; gap: 20px; align-items: flex-start; padding: 20px 22px; background: #fff; border: 1px solid rgba(11,31,58,0.08); }
        .dv-element-num { flex-shrink: 0; width: 32px; height: 32px; background: #C9A84C; color: #0B1F3A; font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; display: flex; align-items: center; justify-content: center; }
        .dv-element-text-lt { font-size: 0.9rem; font-weight: 300; line-height: 1.75; color: #4A5868; }

        /* ── WARN LIST ── */
        .dv-warn-list { list-style: none; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 10px; max-width: 760px; }
        .dv-warn-li { font-size: 0.9rem; font-weight: 300; line-height: 1.72; padding-left: 26px; position: relative; }
        .dv-warn-li::before { content: '⚠'; position: absolute; left: 0; top: 1px; font-size: 0.72rem; color: #F2994A; }
        .dv-warn-li-lt { color: #4A5868; }

        /* ── ACTION CHECKLIST ── */
        .dv-action-wrap { background: #fff; border: 1px solid rgba(11,31,58,0.08); border-top: 3px solid #C9A84C; padding: 32px 36px; max-width: 760px; }
        .dv-action-list { list-style: none; counter-reset: actr; display: flex; flex-direction: column; gap: 18px; }
        .dv-action-item { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #4A5868; padding-left: 42px; position: relative; counter-increment: actr; }
        .dv-action-item::before { content: counter(actr); position: absolute; left: 0; top: 1px; width: 26px; height: 26px; background: #C9A84C; color: #0B1F3A; font-size: 0.72rem; font-weight: 700; text-align: center; line-height: 26px; }

        /* ── DISCLAIMER ── */
        .dv-disclaimer { background: #0B1F3A; border-top: 3px solid #C9A84C; padding: 56px 48px; }
        .dv-disclaimer-inner { max-width: 760px; }
        .dv-disclaimer-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #C9A84C; margin-bottom: 16px; }
        .dv-disclaimer-text { font-size: 0.85rem; font-weight: 300; line-height: 1.8; color: rgba(248,246,241,0.82); }

        /* ── FOOTER ── */
        .footer { background: #0B1F3A; border-top: 1px solid rgba(248,246,241,0.08); padding: 40px 48px; display: flex; align-items: center; justify-content: space-between; }
        .footer-logo { font-family: 'Playfair Display', serif; font-size: 0.95rem; font-weight: 700; color: #F8F6F1; letter-spacing: 0.02em; text-decoration: none; }
        .footer-logo span { color: #C9A84C; }
        .footer-note { font-size: 0.75rem; color: rgba(248,246,241,0.35); }

        /* ── JUMP NAV ── */
        .cs-label { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #C9A84C; margin-bottom: 24px; display: flex; align-items: center; gap: 12px; }
        .cs-label::before, .cs-label::after { content: ''; display: block; flex: 1; height: 1px; background: rgba(201,168,76,0.25); }
        .cs-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; }
        .cs-card { display: block; text-decoration: none; background: #0B1F3A; padding: 22px 24px; border: 1px solid rgba(201,168,76,0.15); transition: border-color 0.18s, background 0.18s; cursor: pointer; }
        .cs-card:hover { border-color: #C9A84C; background: rgba(11,31,58,0.92); }
        .cs-city { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: #F8F6F1; display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 6px; }
        .cs-city::after { content: '→'; font-family: 'Inter', sans-serif; font-size: 0.85rem; color: #C9A84C; flex-shrink: 0; transition: transform 0.18s; }
        .cs-card:hover .cs-city::after { transform: translateX(4px); }
        .cs-tagline { font-size: 0.8rem; font-weight: 300; line-height: 1.55; color: rgba(248,246,241,0.5); }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .page-hero { padding: 48px 24px 64px; }
          .opening-wrap { padding: 36px 24px 0; }
          .dv-section { padding: 56px 24px; }
          .dv-two-col { grid-template-columns: 1fr; }
          .dv-stat-row { grid-template-columns: 1fr; }
          .dv-disclaimer { padding: 48px 24px; }
          .dv-action-wrap { padding: 24px 20px; }
          .footer { flex-direction: column; gap: 12px; text-align: center; }
          .cs-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      {/* HERO */}
      <header className="page-header">
        <Nav active="/divorce-philippines" />
        <div className="page-hero">
          <p className="page-eyebrow">Divorce and Separation</p>
          <h1 className="page-title">Divorcing a Filipino Spouse</h1>
          <p className="page-sub">Two legal systems. Two sets of rules. One situation that requires understanding both. The complete honest guide for Americans navigating divorce when married to a Filipino citizen.</p>
        </div>
      </header>

      {/* OPENING NOTE */}
      <div className="opening-wrap">
        <div className="opening-card">
          <p className="opening-eyebrow">◆ A Note Before You Read</p>
          <p className="opening-text">This is one of the most searched and least clearly explained topics in the expat community. The questions come up every day in Facebook groups and the answers are almost always incomplete. This page covers everything — what your US divorce does and does not accomplish, what happens under Philippine law, what your spouse needs to do to update her civil status, and what you both need to know before making any legal moves.</p>
        </div>
      </div>

      {/* ── JUMP NAV ── */}
      <section className="dv-section dv-light" style={{paddingTop:'40px', paddingBottom:'48px'}}>
        <div className="dv-inner">
          <p className="cs-label">Jump to a Section</p>
          <div className="cs-grid">
            <a href="#us-divorce" className="cs-card">
              <p className="cs-city">US Divorce Process</p>
              <p className="cs-tagline">Filing without her signature</p>
            </a>
            <a href="#philippine-reality" className="cs-card">
              <p className="cs-city">The Philippine Reality</p>
              <p className="cs-tagline">Why your US divorce is not enough</p>
            </a>
            <a href="#article-26" className="cs-card">
              <p className="cs-city">Article 26</p>
              <p className="cs-tagline">The legal pathway for recognition</p>
            </a>
            <a href="#recognition-process" className="cs-card">
              <p className="cs-city">Recognition Process</p>
              <p className="cs-tagline">Step by step in Philippine court</p>
            </a>
            <a href="#annulment" className="cs-card">
              <p className="cs-city">Annulment</p>
              <p className="cs-tagline">The alternative path</p>
            </a>
            <a href="#assets" className="cs-card">
              <p className="cs-city">Philippine Assets</p>
              <p className="cs-tagline">What happens to property</p>
            </a>
            <a href="#children" className="cs-card">
              <p className="cs-city">Children and Custody</p>
              <p className="cs-tagline">International custody warning</p>
            </a>
            <a href="#remarry" className="cs-card">
              <p className="cs-city">Remarrying in PH</p>
              <p className="cs-tagline">What you need first</p>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: TWO LEGAL WORLDS */}
      <section className="dv-section dv-light" id="two-worlds">
        <div className="dv-inner">
          <p className="dv-eyebrow">Section 1</p>
          <h2 className="dv-title dv-title-lt">The Fundamental Reality — Two Legal Worlds</h2>
          <p className="dv-para dv-para-lt">When an American man married to a Filipina seeks a divorce he is navigating two completely separate legal systems that treat the marriage very differently. Understanding both is not optional — confusing them is one of the most costly mistakes in international family law.</p>
          <p className="dv-para dv-para-lt">In the United States your marriage can be dissolved through divorce under the laws of your state of residence. You can remarry in the US. Your US divorce is fully valid and recognized throughout America.</p>
          <p className="dv-para dv-para-lt">In the Philippines the same marriage continues to exist legally until a Philippine court formally recognizes your US divorce through a specific judicial proceeding. Your Filipina spouse remains legally married under Philippine law regardless of your US divorce decree. She cannot legally remarry in the Philippines and her civil status records still show her as married until a Philippine court acts.</p>
          <p className="dv-para dv-para-lt">These are two parallel legal realities that exist simultaneously. Understanding both protects you and protects her.</p>
        </div>
      </section>

      {/* SECTION 2: US DIVORCE PROCESS */}
      <section className="dv-section dv-dark" id="us-divorce">
        <div className="dv-inner">
          <p className="dv-eyebrow">Section 2</p>
          <h2 className="dv-title">Getting a US Divorce When Your Spouse Is in the Philippines</h2>
          <p className="dv-para">The most common question is whether the spouse needs to agree to or sign the divorce papers. In most US states the answer is no. US divorce law does not require both parties to consent.</p>

          <h3 className="dv-sub">Default Divorce Process</h3>
          <ol className="dv-nlist">
            <li className="dv-ni">File for divorce in your US state of residence. Most states require you to have lived there for a minimum period — typically 6 months to 1 year — before filing. File in the county where you reside.</li>
            <li className="dv-ni">Formally serve divorce papers on your spouse in the Philippines. This is the critical legal step. You must make a genuine legal effort to notify her. Methods typically accepted by US courts include: personal service through a licensed process server in the Philippines; service through the Philippine court system via Hague Convention procedures; certified mail with proof of delivery in some states; and as a last resort service by publication in a newspaper if she genuinely cannot be located.</li>
            <li className="dv-ni">Wait for the response deadline — typically 20 to 30 days from confirmed service depending on your state. If she does not respond within the required timeframe you can request a default.</li>
            <li className="dv-ni">The court grants a default divorce judgment. You receive a divorce decree without her signature or participation.</li>
          </ol>

          <h3 className="dv-sub">What She Can and Cannot Block</h3>
          <div className="dv-two-col">
            <div className="dv-col-card dv-col-cannot">
              <p className="dv-col-heading">She Cannot Block</p>
              <p className="dv-col-text">She cannot block the divorce itself in most US states. US courts have jurisdiction over the marriage if you are a US resident and the marriage was legally recognized. The court can and will grant the divorce even over her objection or non-participation.</p>
            </div>
            <div className="dv-col-card dv-col-can">
              <p className="dv-col-heading">She Can Complicate</p>
              <p className="dv-col-text">She can complicate proceedings regarding division of US-based assets, alimony or spousal support claims, and any shared US property or financial matters. If she ignores proceedings entirely a default judgment on all matters including asset division can be entered.</p>
            </div>
          </div>

          <h3 className="dv-sub">Service of Process in the Philippines</h3>
          <div className="dv-amber-alert">
            <p className="dv-amber-label">⚠ Do Not Underestimate This Step</p>
            <p className="dv-amber-body-dark">Properly serving your spouse in the Philippines is the step most people underestimate. Your state court requires proof that she was legally notified before entering a default judgment. The Philippines is a signatory to the Hague Service Convention which provides the official legal mechanism for serving court documents internationally. The process through official channels can take several months. Many attorneys recommend hiring a process server in the Philippines who can personally serve papers and provide the affidavit of service your US court requires. Do not skip this step or take shortcuts — improperly served papers can delay your case significantly or result in the default being challenged later.</p>
          </div>

          <h3 className="dv-sub">US Divorce Cost and Timeline</h3>
          <div className="dv-stat-row">
            <div className="dv-stat-card dv-stat-dk">
              <p className="dv-stat-label">Attorney Fees</p>
              <p className="dv-stat-value">~$1,500 – $5,000 USD plus court filing fees which vary by state</p>
            </div>
            <div className="dv-stat-card dv-stat-dk">
              <p className="dv-stat-label">Timeline</p>
              <p className="dv-stat-value">3 to 12 months from filing to decree depending on state waiting periods and service timelines</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: US DIVORCE DOES NOT EXIST IN PHILIPPINES */}
      <section className="dv-section dv-light dv-gold-top" id="philippine-reality">
        <div className="dv-inner">
          <p className="dv-eyebrow">Section 3 — Critical</p>
          <h2 className="dv-title dv-title-lt">Your US Divorce Does Not Exist in the Philippines</h2>
          <div className="dv-gold-alert">
            <p className="dv-alert-label">⚠ The Single Most Important Thing to Understand</p>
            <p className="dv-alert-body-lt">Your US divorce decree — no matter how valid and final it is in America — has absolutely no automatic effect on your wife&rsquo;s legal status in the Philippines. Philippine courts do not recognize foreign divorces automatically. The marriage continues to legally exist in the Philippines until a Philippine court formally recognizes the foreign divorce through a separate judicial proceeding.</p>
          </div>

          <h3 className="dv-sub dv-sub-lt">Why This Matters Practically</h3>
          <ul className="dv-list">
            <li className="dv-li dv-li-lt">Her PSA records — Philippine Statistics Authority which maintains civil registry records — will still show her as married.</li>
            <li className="dv-li dv-li-lt">She cannot obtain a CENOMAR — Certificate of No Marriage — which is required to remarry in the Philippines or for many official transactions.</li>
            <li className="dv-li dv-li-lt">If she remarries in the Philippines without first getting the foreign divorce judicially recognized she risks being charged with bigamy — a criminal offense under Philippine law.</li>
            <li className="dv-li dv-li-lt">Her passport, government benefits, and property transactions may be affected by her continued married status in Philippine records.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 4: ARTICLE 26 */}
      <section className="dv-section dv-dark" id="article-26">
        <div className="dv-inner">
          <p className="dv-eyebrow">Article 26 — Family Code of the Philippines</p>
          <h2 className="dv-title">Article 26 of the Family Code — The Legal Pathway</h2>
          <p className="dv-para">Article 26 Paragraph 2 of the Philippine Family Code is the legal provision that allows your Filipina spouse to have her civil status updated in the Philippines after your US divorce. The law states: <em>Where a marriage between a Filipino citizen and a foreigner is validly celebrated and a divorce is thereafter validly obtained abroad by the alien spouse capacitating him or her to remarry, the Filipino spouse shall have capacity to remarry under Philippine law.</em></p>
          <p className="dv-para">In plain terms: if you as the American spouse obtain a valid divorce in the United States and that divorce allows you to remarry, your Filipina spouse has the legal right to petition a Philippine court to recognize that divorce and update her civil status to single.</p>

          <h3 className="dv-sub">Philippine Supreme Court Updates</h3>
          <div className="dv-navy-card">
            <p className="dv-navy-label">Supreme Court Rulings — What Changed</p>
            <p className="dv-navy-body"><strong style={{color: '#C9A84C'}}>Republic v. Manalo (2018):</strong> The Supreme Court expanded Article 26 to cover situations where the Filipino spouse — not just the foreign spouse — initiates the divorce abroad. Either spouse can now seek judicial recognition of the foreign divorce in the Philippines.</p>
            <p className="dv-navy-body"><strong style={{color: '#C9A84C'}}>Republic v. Kikuchi (2022):</strong> Confirmed that administrative divorces are also recognizable — not only those granted by foreign courts.</p>
            <p className="dv-navy-body"><strong style={{color: '#C9A84C'}}>Republic v. Cuevas (2024):</strong> The Court confirmed that the type of divorce does not matter — whether judicial, administrative, or by mutual agreement — as long as it is valid under the foreign spouse&rsquo;s national law.</p>
            <p className="dv-navy-body"><strong style={{color: '#C9A84C'}}>As of June 2026:</strong> No law allowing Filipino citizens to file for absolute domestic divorce has been enacted despite multiple legislative attempts. Judicial recognition of foreign divorces in mixed marriages remains the primary legal pathway.</p>
          </div>
        </div>
      </section>

      {/* SECTION 5: ARTICLE 26 PROCESS */}
      <section className="dv-section dv-light" id="recognition-process">
        <div className="dv-inner">
          <p className="dv-eyebrow">Section 5</p>
          <h2 className="dv-title dv-title-lt">The Article 26 Judicial Recognition Process — Step by Step</h2>
          <p className="dv-para dv-para-lt">This is a separate court proceeding that must be filed in the Philippines. It is not automatic and it is not simple.</p>

          <h3 className="dv-sub dv-sub-first dv-sub-lt">Who Can File</h3>
          <p className="dv-para dv-para-lt">Either spouse can file the petition. Most commonly it is the Filipina spouse who files because she is the one whose Philippine civil status needs updating. The petition is filed in the Regional Trial Court — Family Court — in the city or province where the marriage was recorded or where the petitioner resides.</p>

          <h3 className="dv-sub dv-sub-lt">What Must Be Proven in Court</h3>
          <div className="dv-elements">
            <div className="dv-element-card-lt">
              <div className="dv-element-num">1</div>
              <p className="dv-element-text-lt">A valid marriage existed between a Filipino and a foreigner — citizenship is tested at the time the divorce was obtained. The foreign spouse must have been a non-Filipino national at the relevant time.</p>
            </div>
            <div className="dv-element-card-lt">
              <div className="dv-element-num">2</div>
              <p className="dv-element-text-lt">A divorce was validly obtained abroad under the law of the country that issued it. Philippine courts do not take judicial notice of foreign laws — the specific law of your US state on divorce must be proven as a fact in court with authenticated documentation.</p>
            </div>
            <div className="dv-element-card-lt">
              <div className="dv-element-num">3</div>
              <p className="dv-element-text-lt">The divorce capacitates the foreign spouse to remarry — meaning the US divorce is final and you are legally free to remarry in the US.</p>
            </div>
          </div>

          <h3 className="dv-sub dv-sub-lt">Documents Required</h3>
          <ul className="dv-list">
            <li className="dv-li dv-li-lt">Authenticated Philippine marriage certificate — PSA copy on security paper.</li>
            <li className="dv-li dv-li-lt">Authenticated US divorce decree — apostilled through the Secretary of State of the state where the divorce was granted. The Philippines joined the Hague Apostille Convention in 2019.</li>
            <li className="dv-li dv-li-lt"><strong>Authenticated copy of the specific US state divorce law — THIS IS THE MOST COMMONLY MISSING DOCUMENT AND THE MOST COMMON REASON PETITIONS FAIL.</strong> A certified copy of the relevant statutes of your state confirming the divorce is valid and final under that state&rsquo;s law. Must also be apostilled.</li>
            <li className="dv-li dv-li-lt">Birth certificates of children if any.</li>
            <li className="dv-li dv-li-lt">Proof of US citizenship — passport or naturalization certificate.</li>
            <li className="dv-li dv-li-lt">Proof of Philippine citizenship of the Filipino spouse — PSA birth certificate or passport.</li>
            <li className="dv-li dv-li-lt">Proof of residence.</li>
          </ul>

          <h3 className="dv-sub dv-sub-lt">The Court Process</h3>
          <ol className="dv-nlist">
            <li className="dv-ni dv-ni-lt">Philippine attorney files petition at the appropriate Regional Trial Court.</li>
            <li className="dv-ni dv-ni-lt">Court orders publication of notice in a newspaper of general circulation once a week for three consecutive weeks — mandatory procedural requirement.</li>
            <li className="dv-ni dv-ni-lt">Office of the Solicitor General is notified — they represent the government&rsquo;s interest and may oppose the petition.</li>
            <li className="dv-ni dv-ni-lt">Hearing held — petitioner presents all documentary evidence and proves the three required elements.</li>
            <li className="dv-ni dv-ni-lt">Court issues decision granting or denying recognition.</li>
            <li className="dv-ni dv-ni-lt">If granted — decision is registered with the Local Civil Registrar where the marriage was recorded and then with the Philippine Statistics Authority.</li>
            <li className="dv-ni dv-ni-lt">PSA annotates the marriage record showing the foreign divorce has been judicially recognized.</li>
            <li className="dv-ni dv-ni-lt">Filipino spouse can now obtain a CENOMAR showing her as single and is legally free to remarry in the Philippines.</li>
          </ol>

          <h3 className="dv-sub dv-sub-lt">Timeline and Cost</h3>
          <div className="dv-stat-row">
            <div className="dv-stat-card dv-stat-lk">
              <p className="dv-stat-label">Timeline</p>
              <p className="dv-stat-value-lt">12 to 24 months from filing to final PSA annotation</p>
            </div>
            <div className="dv-stat-card dv-stat-lk">
              <p className="dv-stat-label">Attorney Fees</p>
              <p className="dv-stat-value-lt">₱80,000 – ₱200,000 depending on firm and complexity</p>
            </div>
            <div className="dv-stat-card dv-stat-lk">
              <p className="dv-stat-label">Total Budget</p>
              <p className="dv-stat-value-lt">₱150,000 – ₱300,000 including filing, publication, and authentication (approx. $2,500 – $5,000 USD)</p>
            </div>
          </div>

          <h3 className="dv-sub dv-sub-lt">Common Reasons for Denial</h3>
          <ul className="dv-warn-list">
            <li className="dv-warn-li dv-warn-li-lt">Insufficient proof of the foreign divorce law — the most common failure point. Many petitions present the divorce decree but not an authenticated copy of the actual divorce statute from the US state.</li>
            <li className="dv-warn-li dv-warn-li-lt">Defective authentication of documents — incorrect apostille procedures or missing certifications.</li>
            <li className="dv-warn-li dv-warn-li-lt">Failure to establish that the foreign spouse was a non-Filipino at the relevant time. These deficiencies can often be cured by a lawyer and the petition refiled.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 6: ANNULMENT */}
      <section className="dv-section dv-dark" id="annulment">
        <div className="dv-inner">
          <p className="dv-eyebrow">Section 6</p>
          <h2 className="dv-title">Philippine Annulment — What It Is and When It Applies</h2>
          <p className="dv-para">Philippine annulment is the primary legal mechanism for dissolving a marriage where both spouses are Filipino citizens or where no foreign divorce has been obtained. For American men who have obtained a US divorce the Article 26 judicial recognition route is generally the relevant pathway. However understanding annulment matters because it may be relevant in some situations and because your Filipino spouse may need this information.</p>

          <h3 className="dv-sub">What Annulment Is and Is Not</h3>
          <p className="dv-para">Philippine annulment does not end a valid marriage the way divorce does. It declares that the marriage was never valid from the beginning due to a defect that existed at the time of the wedding. The most commonly used ground is psychological incapacity under Article 36 of the Family Code — defined as a personality structure or condition so severe that one or both spouses were unable to fulfill the essential obligations of marriage at the time of marriage. Following the landmark <em>Tan-Andal v. Andal</em> ruling in 2021 the Supreme Court stated that psychological incapacity is a legal not medical concept. A clinical psychiatrist&rsquo;s testimony is no longer absolutely required though most lawyers still recommend one.</p>

          <h3 className="dv-sub">Other Grounds for Annulment</h3>
          <ul className="dv-list">
            <li className="dv-li">Lack of parental consent if a party was between 18 and 21 at marriage.</li>
            <li className="dv-li">Insanity — one party was of unsound mind at time of marriage.</li>
            <li className="dv-li">Fraud — concealing pregnancy by another man, an STD, drug addiction, or concealed homosexuality existing at time of marriage.</li>
            <li className="dv-li">Force or intimidation — consent was obtained through coercion.</li>
            <li className="dv-li">Impotence existing at time of marriage and appearing incurable.</li>
            <li className="dv-li">Incurable sexually transmissible disease existing at time of marriage.</li>
            <li className="dv-li">Most grounds other than psychological incapacity have a 5-year statute of limitations from the date of marriage.</li>
          </ul>

          <h3 className="dv-sub">Annulment Cost and Timeline</h3>
          <div className="dv-stat-row">
            <div className="dv-stat-card dv-stat-dk">
              <p className="dv-stat-label">Timeline</p>
              <p className="dv-stat-value">2 to 5 years uncontested. Contested cases longer.</p>
            </div>
            <div className="dv-stat-card dv-stat-dk">
              <p className="dv-stat-label">Attorney Fees</p>
              <p className="dv-stat-value">₱150,000 – ₱500,000</p>
            </div>
            <div className="dv-stat-card dv-stat-dk">
              <p className="dv-stat-label">Psychologist Fees</p>
              <p className="dv-stat-value">₱40,000 – ₱80,000</p>
            </div>
            <div className="dv-stat-card dv-stat-dk">
              <p className="dv-stat-label">Total Budget</p>
              <p className="dv-stat-value">₱300,000 – ₱600,000 (approx. $5,000 – $10,000 USD). Court filing fees increased 15% as of April 1, 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: LEGAL SEPARATION */}
      <section className="dv-section dv-light" id="legal-separation">
        <div className="dv-inner">
          <p className="dv-eyebrow">Section 7</p>
          <h2 className="dv-title dv-title-lt">Legal Separation — What It Does and Does Not Do</h2>
          <p className="dv-para dv-para-lt">Legal separation is one of the most misunderstood concepts in Philippine family law. Legal separation allows spouses to live apart and divide their property. It does <strong>not</strong> dissolve the marriage bond. Legally separated spouses remain married. Neither party can remarry. Legal separation does not change anyone&rsquo;s civil status.</p>

          <h3 className="dv-sub dv-sub-lt">Grounds for Legal Separation</h3>
          <ul className="dv-list">
            <li className="dv-li dv-li-lt">Repeated physical violence or abusive conduct.</li>
            <li className="dv-li dv-li-lt">Drug addiction or habitual alcoholism.</li>
            <li className="dv-li dv-li-lt">Sexual infidelity.</li>
            <li className="dv-li dv-li-lt">Abandonment without just cause for more than one year.</li>
            <li className="dv-li dv-li-lt">Attempt against the life of the spouse or children.</li>
            <li className="dv-li dv-li-lt">Conviction of a crime with penalty of more than 6 years imprisonment.</li>
          </ul>
          <p className="dv-para dv-para-lt">For most expats seeking to end their marriage and eventually remarry legal separation serves no useful purpose. Many Filipinos describe themselves as legally separated when they have simply been living apart with no legal proceedings at all. That is not legal separation — that is just separation.</p>
        </div>
      </section>

      {/* SECTION 8: PHILIPPINE ASSETS */}
      <section className="dv-section dv-dark" id="assets">
        <div className="dv-inner">
          <p className="dv-eyebrow">Section 8</p>
          <h2 className="dv-title">Philippine Assets and Property — Critical Considerations</h2>
          <div className="dv-amber-alert">
            <p className="dv-amber-label">⚠ Your US Divorce Has No Automatic Effect on Philippine Assets</p>
            <p className="dv-amber-body-dark">A US divorce decree does not automatically affect Philippine-registered property or assets. Philippine property law is completely separate from US divorce law and requires separate attention in both jurisdictions.</p>
          </div>
          <p className="dv-para">Under Philippine law property acquired during marriage is generally governed by Absolute Community of Property unless a prenuptial agreement specifies otherwise. This means property acquired during the marriage by either spouse is jointly owned regardless of whose name it is registered in.</p>

          <h3 className="dv-sub">Key Points for Expats</h3>
          <ul className="dv-list">
            <li className="dv-li">If you own a condominium unit or other property registered in the Philippines your US divorce does not automatically transfer or divide that property. A separate proceeding or agreement is needed.</li>
            <li className="dv-li">If property is registered in your Filipino spouse&rsquo;s name your US divorce does not give you automatic rights to that property in the Philippines.</li>
            <li className="dv-li">If your Filipino spouse has Philippine bank accounts, investment accounts, or other assets, your US divorce decree has no direct effect on those assets under Philippine law.</li>
            <li className="dv-li">Consult a Philippine attorney about the division of any Philippine-based assets before or during your US divorce proceedings.</li>
            <li className="dv-li">Agreements about Philippine property should ideally be formalized in both jurisdictions.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 9: CHILDREN */}
      <section className="dv-section dv-light" id="children">
        <div className="dv-inner">
          <p className="dv-eyebrow">Section 9</p>
          <h2 className="dv-title dv-title-lt">Children in the Philippines — International Custody Warning</h2>
          <div className="dv-amber-alert">
            <p className="dv-amber-label">⚠ Requires Specialized Legal Advice in Both Countries</p>
            <p className="dv-amber-body">If children from the marriage are living in the Philippines international family law adds significant complexity that requires specialized legal advice in both countries. This is not an area where general divorce guidance applies.</p>
          </div>

          <h3 className="dv-sub dv-sub-lt">Key Points</h3>
          <ul className="dv-list">
            <li className="dv-li dv-li-lt">Philippine courts generally favor giving custody of young children to the mother. The Tender Years Doctrine presumes children under 7 years old should remain with the mother unless there is a compelling reason otherwise.</li>
            <li className="dv-li dv-li-lt">A US custody order is not automatically enforceable in the Philippines. Philippine courts will conduct their own custody determination based on Philippine law and the best interests of the child.</li>
            <li className="dv-li dv-li-lt">Removing a child from the Philippines without the other parent&rsquo;s consent can constitute child abduction under both Philippine law and international law even if you have a US custody order.</li>
            <li className="dv-li dv-li-lt">The Hague Convention on International Child Abduction which the Philippines has ratified provides a legal mechanism for the return of children who have been wrongfully removed or retained across international borders.</li>
            <li className="dv-li dv-li-lt">If your child is in the Philippines and you are seeking custody consult both a US family law attorney and a Philippine family law attorney before taking any action.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 10: REMARRIAGE */}
      <section className="dv-section dv-dark" id="remarry">
        <div className="dv-inner">
          <p className="dv-eyebrow">Section 10</p>
          <h2 className="dv-title">If You Want to Remarry in the Philippines</h2>
          <p className="dv-para">If you obtain a US divorce and later want to remarry in the Philippines — whether to your current Filipino partner or anyone else — your Philippine civil status must be updated first.</p>
          <p className="dv-para">Your US divorce must be judicially recognized by a Philippine court through the Article 26 process described above. Only after the Philippine court grants recognition and the PSA annotates the marriage record can you be considered legally free to remarry in the Philippines. If you attempt to marry in the Philippines while the marriage still exists in Philippine records you risk a bigamy charge regardless of your US divorce status.</p>
          <div className="dv-gold-alert-dark">
            <p className="dv-alert-label">The Most Common Question — Answered Directly</p>
            <p className="dv-alert-body">I got divorced in the US — can I marry my Filipino girlfriend in the Philippines now? The answer is not automatically yes. Your US divorce must first be judicially recognized in the Philippines. This process takes 12 to 24 months and requires a Philippine attorney. Plan accordingly and do not make commitments to a wedding timeline before understanding this requirement.</p>
          </div>
        </div>
      </section>

      {/* SECTION 11: PRACTICAL STEPS */}
      <section className="dv-section dv-light">
        <div className="dv-inner">
          <p className="dv-eyebrow">Section 11</p>
          <h2 className="dv-title dv-title-lt">Practical Steps — What to Do and In What Order</h2>
          <div className="dv-action-wrap">
            <ol className="dv-action-list">
              <li className="dv-action-item">Consult a US family law attorney in your state before filing anything. Divorce law varies significantly by state — residency requirements, waiting periods, grounds, asset division rules, and service of process requirements all differ. Get advice specific to your jurisdiction.</li>
              <li className="dv-action-item">Understand your service of process requirements. How you legally notify your spouse in the Philippines must satisfy your state court&rsquo;s standards. Improperly served papers can delay or derail your case.</li>
              <li className="dv-action-item">If the split is amicable a waiver of service or acknowledgment of proceedings from your spouse simplifies everything significantly even though her signature is not legally required.</li>
              <li className="dv-action-item">If there are Philippine assets involved consult a Philippine attorney before finalizing your US divorce. Asset division affecting Philippine property requires attention in both jurisdictions.</li>
              <li className="dv-action-item">If children are in the Philippines consult attorneys in both countries before taking any action. Do not rely on your US custody order alone.</li>
              <li className="dv-action-item">For the Article 26 recognition process the two most critical documents are: your apostilled US divorce decree AND an apostilled certified copy of your state&rsquo;s divorce law. Missing the second document is the most common reason petitions fail.</li>
              <li className="dv-action-item">Your Filipino spouse needs a Philippine attorney who specializes in judicial recognition of foreign divorce. This is a specialized practice area — not every family law attorney handles it regularly.</li>
              <li className="dv-action-item">Do not make wedding plans in the Philippines until the Article 26 recognition process is complete. The timeline is 12 to 24 months minimum.</li>
              <li className="dv-action-item">Do not rely on this page as legal advice. The consultation fee with a qualified attorney in both jurisdictions is money well spent before filing anything.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="dv-disclaimer">
        <div className="dv-disclaimer-inner">
          <p className="dv-disclaimer-label">Legal Disclaimer</p>
          <p className="dv-disclaimer-text">This page provides general information about divorce law as it applies to international marriages between American men and Filipino citizens. It is not legal advice and should not be relied upon as such. Philippine and US family law is complex, jurisdiction-specific, and subject to change. Laws change, court rulings evolve, and individual circumstances vary significantly. Always consult a licensed US family law attorney in your state and a licensed Philippine family law attorney before taking any legal action regarding your marriage. Expat Compass PH is not a law firm and does not provide legal advice. Nothing on this page creates an attorney-client relationship. The information on this page reflects conditions as of June 2026.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}

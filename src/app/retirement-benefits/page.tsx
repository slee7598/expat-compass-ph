import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "US Retirement Benefits Abroad — Social Security, Medicare & VA in the Philippines 2026",
  description:
    "Complete guide to Social Security, Medicare, SSI, SSDI, and VA benefits for Americans living permanently in the Philippines. What continues, what stops, and what to do before you move.",
  alternates: { canonical: "https://expatcompassph.com/retirement-benefits" },
};

export default function RetirementBenefitsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body { font-family: 'Inter', sans-serif; background: #F8F6F1; color: #0B1F3A; }

        /* ── NAV ── */
        .nav { display: flex; align-items: center; justify-content: space-between; padding: 28px 48px; border-bottom: 1px solid rgba(248,246,241,0.1); }
        .nav-logo { font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 700; color: #F8F6F1; letter-spacing: 0.02em; text-decoration: none; }
        .nav-logo span { color: #C9A84C; }

        /* ── PAGE HERO ── */
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
        .page-sub { font-size: 1.05rem; font-weight: 300; line-height: 1.65; color: rgba(248,246,241,0.72); max-width: 580px; }

        /* ── SECTIONS ── */
        .section { padding: 88px 48px; }
        .section-light { background: #F8F6F1; }
        .section-dark  { background: #0B1F3A; }
        .section-inner { max-width: 900px; }

        .section-label {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.7rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 16px;
        }
        .section-label::before { content: '◈'; font-size: 0.65rem; }
        .section-label-light { color: #C9A84C; }

        .section-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.7rem, 3vw, 2.4rem); font-weight: 700; line-height: 1.2;
          color: #0B1F3A; margin-bottom: 36px; max-width: 720px;
        }
        .section-heading-light { color: #F8F6F1; }

        /* ── BODY TEXT ── */
        .rb-body {
          font-size: 0.93rem; font-weight: 300; line-height: 1.85;
          color: #4A5868; margin-bottom: 16px; max-width: 760px;
        }
        .rb-body-light { color: rgba(248,246,241,0.8); }
        .rb-sub {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.05rem, 1.8vw, 1.28rem); font-weight: 700; line-height: 1.25;
          color: #0B1F3A; margin: 40px 0 14px;
          padding-top: 36px; border-top: 1px solid rgba(11,31,58,0.08);
        }
        .rb-sub-first { border-top: none; padding-top: 0; margin-top: 0; }
        .rb-sub-light { color: #F8F6F1; border-top-color: rgba(248,246,241,0.1); }

        /* ── STAT CARDS ── */
        .stat-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1px; background: rgba(11,31,58,0.08); border: 1px solid rgba(11,31,58,0.08);
          margin: 32px 0; max-width: 760px;
        }
        .stat-card { background: #fff; padding: 28px 24px; }
        .stat-card-dark { background: rgba(248,246,241,0.04); border: none; }
        .stat-label { font-size: 0.68rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #C9A84C; margin-bottom: 8px; }
        .stat-value { font-family: 'Playfair Display', serif; font-size: clamp(1.3rem, 2.5vw, 1.7rem); font-weight: 700; color: #0B1F3A; line-height: 1.2; }
        .stat-value-light { color: #F8F6F1; }
        .stat-note { font-size: 0.78rem; font-weight: 300; color: #6B7B8A; margin-top: 6px; line-height: 1.5; }
        .stat-note-light { color: rgba(248,246,241,0.5); }

        /* ── LISTS ── */
        .rb-list { list-style: none; margin: 12px 0 20px; display: flex; flex-direction: column; gap: 9px; max-width: 760px; }
        .rb-li { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #4A5868; padding-left: 22px; position: relative; }
        .rb-li::before { content: '—'; position: absolute; left: 0; color: #C9A84C; font-weight: 600; }
        .rb-li-light { color: rgba(248,246,241,0.78); }
        .rb-nlist { list-style: none; counter-reset: rbctr; margin: 12px 0 20px; display: flex; flex-direction: column; gap: 9px; max-width: 760px; }
        .rb-ni { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #4A5868; padding-left: 28px; position: relative; counter-increment: rbctr; }
        .rb-ni::before { content: counter(rbctr) '.'; position: absolute; left: 0; color: #C9A84C; font-size: 0.78rem; font-weight: 700; padding-top: 2px; }
        .rb-ni-light { color: rgba(248,246,241,0.78); }

        /* ── ALERT BOXES ── */
        .rb-warning {
          background: rgba(235,87,87,0.06); border: 1px solid rgba(235,87,87,0.25);
          border-left: 4px solid #EB5757; padding: 26px 28px; margin: 28px 0; max-width: 760px;
        }
        .rb-warning-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #EB5757; margin-bottom: 10px; }
        .rb-warning-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #4A5868; }

        .rb-alert {
          background: rgba(201,168,76,0.06); border: 1px solid rgba(201,168,76,0.3);
          border-left: 4px solid #C9A84C; padding: 26px 28px; margin: 28px 0; max-width: 760px;
        }
        .rb-alert-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
        .rb-alert-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: rgba(248,246,241,0.85); }
        .rb-alert-body-dark { color: #4A5868; }

        .rb-info {
          background: rgba(41,121,255,0.05); border: 1px solid rgba(41,121,255,0.2);
          border-left: 4px solid #2979FF; padding: 26px 28px; margin: 28px 0; max-width: 760px;
        }
        .rb-info-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #2979FF; margin-bottom: 10px; }
        .rb-info-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #4A5868; }

        .rb-amber {
          background: rgba(242,153,74,0.06); border: 1px solid rgba(242,153,74,0.28);
          border-left: 4px solid #F2994A; padding: 26px 28px; margin: 28px 0; max-width: 760px;
        }
        .rb-amber-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #F2994A; margin-bottom: 10px; }
        .rb-amber-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: rgba(248,246,241,0.85); }

        /* ── EXCEPTION CARDS ── */
        .exception-list { display: flex; flex-direction: column; gap: 16px; margin: 20px 0; max-width: 760px; }
        .exception-card {
          display: grid; grid-template-columns: 40px 1fr; gap: 16px;
          background: rgba(248,246,241,0.04); border: 1px solid rgba(248,246,241,0.08);
          padding: 22px 24px;
        }
        .exception-num {
          font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700;
          color: #C9A84C; line-height: 1;
        }
        .exception-body { font-size: 0.9rem; font-weight: 300; line-height: 1.75; color: rgba(248,246,241,0.78); }

        /* ── CHECKLIST CARD ── */
        .checklist-card {
          background: #fff; border: 1px solid #E8E4DC; padding: 40px 44px;
          margin-top: 8px; max-width: 760px;
        }
        .checklist-card-dark { background: rgba(248,246,241,0.04); border-color: rgba(248,246,241,0.08); }
        .checklist-items { list-style: none; display: flex; flex-direction: column; gap: 14px; counter-reset: chkctr; }
        .checklist-item {
          display: grid; grid-template-columns: 32px 1fr; gap: 12px;
          font-size: 0.9rem; font-weight: 300; line-height: 1.65; color: #4A5868;
          counter-increment: chkctr;
        }
        .checklist-item::before {
          content: counter(chkctr);
          display: flex; align-items: center; justify-content: center;
          width: 26px; height: 26px; background: #C9A84C;
          font-family: 'Playfair Display', serif; font-size: 0.8rem; font-weight: 700;
          color: #0B1F3A; flex-shrink: 0; margin-top: 1px;
        }

        /* ── STEVE'S NOTE ── */
        .sn-section {
          background: #0D1E30; padding: 88px 48px;
          border-top: 3px solid #C9A84C;
        }
        .sn-inner { max-width: 760px; }
        .sn-header { display: flex; align-items: center; gap: 20px; margin-bottom: 28px; }
        .sn-monogram {
          width: 48px; height: 48px; background: #C9A84C; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 700; color: #0B1F3A;
        }
        .sn-name { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 700; color: #F8F6F1; }
        .sn-tag { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(201,168,76,0.65); margin-top: 3px; }
        .sn-rule { height: 1px; background: rgba(201,168,76,0.2); margin-bottom: 28px; }
        .sn-body { display: flex; flex-direction: column; gap: 18px; margin-bottom: 28px; }
        .sn-body p { font-size: 0.95rem; font-weight: 300; line-height: 1.88; color: rgba(248,246,241,0.82); }
        .sn-verified { font-size: 0.62rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(201,168,76,0.5); }

        /* ── LEGAL NOTE ── */
        .legal-section { background: #F8F6F1; padding: 64px 48px; border-top: 1px solid #E8E4DC; }
        .legal-inner { max-width: 900px; display: grid; grid-template-columns: 1fr 2fr; gap: 64px; align-items: start; }
        .legal-icon {
          width: 40px; height: 40px; border: 2px solid rgba(11,31,58,0.18);
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          font-size: 0.95rem; font-weight: 700; color: rgba(11,31,58,0.45); margin-bottom: 16px;
        }
        .legal-heading { font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 700; color: #0B1F3A; margin-bottom: 6px; }
        .legal-body { font-size: 0.85rem; font-weight: 300; line-height: 1.85; color: #5C6B7A; }

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
          .page-hero { padding: 56px 24px 72px; }
          .section { padding: 64px 24px; }
          .sn-section { padding: 64px 24px; }
          .legal-section { padding: 48px 24px; }
          .legal-inner { grid-template-columns: 1fr; gap: 32px; }
          .stat-grid { grid-template-columns: 1fr 1fr; }
          .checklist-card { padding: 28px 24px; }
          .cs-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .stat-grid { grid-template-columns: 1fr; }
          .exception-card { grid-template-columns: 32px 1fr; }
        }
      `}</style>

      <div className="page-header">
        <Nav active="/retirement-benefits" />
        <div className="page-hero">
          <p className="page-eyebrow">US Benefits Abroad</p>
          <h1 className="page-title">Your US Benefits in the Philippines</h1>
          <p className="page-sub">What continues, what stops, and what every expat needs to know before they move — Social Security, Medicare, SSI, SSDI, and VA benefits explained clearly.</p>
        </div>
      </div>

      {/* ── JUMP NAV ── */}
      <section className="section section-light" style={{paddingTop:'40px', paddingBottom:'48px'}}>
        <div className="section-inner">
          <p className="cs-label">Jump to a Section</p>
          <div className="cs-grid">
            <a href="#social-security" className="cs-card">
              <p className="cs-city">Social Security</p>
              <p className="cs-tagline">Continues uninterrupted abroad</p>
            </a>
            <a href="#ssi" className="cs-card">
              <p className="cs-city">SSI Warning</p>
              <p className="cs-tagline">Stops after 30 days outside US</p>
            </a>
            <a href="#spousal-benefits" className="cs-card">
              <p className="cs-city">Spousal Benefits</p>
              <p className="cs-tagline">Rules for your Filipina spouse</p>
            </a>
            <a href="#medicare" className="cs-card">
              <p className="cs-city">Medicare Abroad</p>
              <p className="cs-tagline">The reality every expat must know</p>
            </a>
            <a href="#va-benefits" className="cs-card">
              <p className="cs-city">VA Benefits</p>
              <p className="cs-tagline">For military veterans</p>
            </a>
            <a href="#cutting-ties" className="cs-card">
              <p className="cs-city">Cutting US Ties</p>
              <p className="cs-tagline">Moving everything abroad</p>
            </a>
            <a href="#wep" className="cs-card">
              <p className="cs-city">WEP and GPO</p>
              <p className="cs-tagline">Critical update for teachers</p>
            </a>
            <a href="#canadian" className="cs-card">
              <p className="cs-city">Canadian Expats</p>
              <p className="cs-tagline">Provincial coverage deadline</p>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1 — SOCIAL SECURITY RETIREMENT */}
      <section className="section section-light" id="social-security">
        <div className="section-inner">
          <p className="section-label">Social Security</p>
          <h2 className="section-heading">Social Security Retirement — The Good News</h2>

          <p className="rb-body">The Philippines is not a restricted country. Your Social Security retirement payments continue uninterrupted when you move to the Philippines. US citizens who have earned at least 40 credits — 10 years of work — can collect Social Security retirement benefits while living in most foreign countries, and moving abroad does not cancel, reduce, or pause your payments.</p>

          <h3 className="rb-sub rb-sub-first">2026 Key Numbers</h3>
          <div className="stat-grid">
            <div className="stat-card">
              <p className="stat-label">Average Monthly Benefit</p>
              <p className="stat-value">$2,071</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Maximum Benefit at 67</p>
              <p className="stat-value">$4,152</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">2026 COLA Increase</p>
              <p className="stat-value">2.8%</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">WEP — Eliminated</p>
              <p className="stat-value">Jan 2025</p>
              <p className="stat-note">Social Security Fairness Act eliminated the Windfall Elimination Provision which previously reduced benefits for retirees with foreign pensions.</p>
            </div>
          </div>

          <h3 className="rb-sub">How to receive payments</h3>
          <p className="rb-body">Two options — direct deposit to your US bank account then transfer via Wise or Remitly, or direct deposit directly to a qualifying Philippine bank account. BDO, BPI, and Metrobank all support SSA international direct deposit. The Philippines participates in the SSA international direct deposit program meaning you do not need a US address or US bank account to receive Social Security.</p>
          <p className="rb-body">However most experienced expats recommend keeping a US bank account open. Charles Schwab International checking has no foreign transaction fees and reimburses ATM fees worldwide and is the most popular choice among long-term expats.</p>

          <h3 className="rb-sub">Annual verification</h3>
          <p className="rb-body">SSA periodically sends an Alive and Well questionnaire every 1 to 2 years to confirm you are still eligible. You must return this promptly or payments will be suspended. The Federal Benefits Unit at the US Embassy in Manila handles Social Security services for expats in the Philippines and over 40 countries in the Asia-Pacific region.</p>

          <h3 className="rb-sub">Reporting requirements</h3>
          <p className="rb-body">Notify SSA immediately if you change your address, bank account, or marital status. Failure to report changes can result in overpayments that SSA will collect back. Manage through your online My Social Security account at ssa.gov or through the Federal Benefits Unit in Manila at ph.usembassy.gov.</p>
        </div>
      </section>

      {/* SECTION 2 — SSI */}
      <section className="section section-dark" id="ssi">
        <div className="section-inner">
          <p className="section-label">Supplemental Security Income</p>
          <h2 className="section-heading section-heading-light">SSI — Supplemental Security Income — The Bad News</h2>

          <div className="rb-warning">
            <p className="rb-warning-label">⚠ Payments Stop After 30 Days Abroad</p>
            <p className="rb-warning-body">SSI is needs-based and stops after 30 days outside the US. If you are receiving SSI and move to the Philippines, your payments will stop. This is not a temporary suspension — you will need to return to the United States and re-establish residency to receive SSI again.</p>
          </div>

          <p className="rb-body rb-body-light">SSI and Social Security retirement are completely different programs and the rules for living abroad are completely different. If you receive both Social Security retirement and SSI, your retirement benefits continue in the Philippines but your SSI stops. Plan accordingly before you move.</p>
        </div>
      </section>

      {/* SECTION 3 — SSDI */}
      <section className="section section-light" id="ssdi">
        <div className="section-inner">
          <p className="section-label">Disability Insurance</p>
          <h2 className="section-heading">SSDI — Social Security Disability Insurance</h2>
          <p className="rb-body">SSDI follows the same rules as retirement benefits for US citizens. Your SSDI continues in the Philippines. However SSA may conduct periodic Continuing Disability Reviews to confirm you still qualify medically. These can be done remotely or through the Federal Benefits Unit in Manila.</p>
        </div>
      </section>

      {/* SECTION 4 — SPOUSAL BENEFITS */}
      <section className="section section-dark" id="spousal-benefits">
        <div className="section-inner">
          <p className="section-label">Spousal & Survivor Benefits</p>
          <h2 className="section-heading section-heading-light">Social Security for Your Filipina Spouse — Critical Rules</h2>

          <p className="rb-body rb-body-light">This is one of the most asked questions in expat communities and the answer is more complicated than most people expect. A non-US citizen spouse can qualify for Social Security spousal or survivor benefits based on your work record, but the rules are stricter than for US citizens. The SSA generally stops payments to non-citizens after six consecutive calendar months outside the United States unless the spouse meets one of three exceptions.</p>

          <div className="rb-alert">
            <p className="rb-alert-label">The Three Exceptions</p>
          </div>

          <div className="exception-list">
            <div className="exception-card">
              <span className="exception-num">1</span>
              <p className="exception-body">Your non-citizen spouse lived in the United States for at least five years while married to you — not necessarily consecutive. This is the most common exception for expat couples who lived in the US together before moving abroad.</p>
            </div>
            <div className="exception-card">
              <span className="exception-num">2</span>
              <p className="exception-body">Your spouse is a resident of a country that has a totalization agreement with the US. <strong style={{color: '#EB5757', fontWeight: 600}}>Note: The Philippines does NOT have a totalization agreement with the United States.</strong></p>
            </div>
            <div className="exception-card">
              <span className="exception-num">3</span>
              <p className="exception-body">Your spouse is a citizen of certain SSA-approved countries — check the SSA country list for the current approved list.</p>
            </div>
          </div>

          <div className="rb-amber">
            <p className="rb-amber-label">Use the SSA Screening Tool</p>
            <p className="rb-amber-body">Use the SSA Payments Abroad Screening Tool at ssa.gov to check your specific situation before making any decisions. Every case is different and the rules have significant financial consequences.</p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — MEDICARE */}
      <section className="section section-light" id="medicare">
        <div className="section-inner">
          <p className="section-label">Medicare</p>
          <h2 className="section-heading">Medicare — The Reality Every Expat Must Understand</h2>

          <p className="rb-body">This is the most misunderstood benefit among expats moving to the Philippines and the one most likely to cause serious financial harm if not planned for properly. Medicare coverage outside the US is limited. In most situations Medicare will not pay for health care or supplies you get outside the US.</p>
          <p className="rb-body">You paid into Medicare your entire working life. You move to the Philippines. Medicare will not pay for your hospital bill at Chong Hua. It will not pay for your surgery at Cebu Doctors. It will not pay for your prescriptions. You are on your own.</p>

          <h3 className="rb-sub rb-sub-first">Part A — Hospital Insurance</h3>
          <p className="rb-body">Most people qualify for premium-free Part A — keep it, it costs nothing and protects you during US visits.</p>
          <div className="rb-warning">
            <p className="rb-warning-label">Critical Warning — Do Not Disenroll from Part A</p>
            <p className="rb-warning-body">If you are enrolled in premium-free Part A you cannot disenroll without paying back all benefits received including Social Security payments. Do not disenroll from Part A.</p>
          </div>

          <h3 className="rb-sub">Part B — Medical Insurance</h3>
          <p className="rb-body">The 2026 Part B premium is approximately $185 per month — over $2,200 per year for coverage that pays nothing in the Philippines. If you drop Part B and later return to the US, you pay a 10% penalty for each year you went without coverage — permanently.</p>
          <p className="rb-body"><strong>Decision guide:</strong> If there is any chance you return to the US for medical care or permanently, keep Part B. If you are certain you are staying in the Philippines permanently and have comprehensive private insurance, dropping Part B saves real money but burns the bridge.</p>
          <p className="rb-body">If your Part B premium is currently deducted from your Social Security payment, this continues automatically regardless of where you live.</p>

          <h3 className="rb-sub">Part C — Medicare Advantage</h3>
          <p className="rb-body">Some Medicare Advantage plans offer emergency coverage during foreign travel but this is designed for temporary travel, not permanent residence. You may be disenrolled from your Medicare Advantage plan if you travel outside the US for more than six months.</p>

          <h3 className="rb-sub">Medigap — Supplemental Coverage</h3>
          <p className="rb-body">Most Medigap plans C, D, F, G, and N cover emergency medical care abroad with a lifetime cap of $50,000, covering 80% of eligible charges for medically necessary emergency care after a $250 annual deductible. This applies to emergencies in the first 60 days of a trip — designed for travel not permanent residence.</p>

          <h3 className="rb-sub">Medicare Portability Act — 2026 Development</h3>
          <div className="rb-info">
            <p className="rb-info-label">Legislative Update — 2026</p>
            <p className="rb-info-body">The Medicare Portability Act has been included as a budget rider in the FY 2026 Labor-HHS-Education Appropriations Bill. If passed it would introduce a pilot program allowing Medicare benefits to be used in 12 partner countries including the Philippines. Philippine hospitals including Makati Medical Center, The Medical City, St. Luke&rsquo;s Medical Center, and Chong Hua Hospital already meet Joint Commission International standards and would qualify under the proposed program. This is not law yet. Do not plan around it. But this is the most significant potential change to Medicare abroad in decades and we will update this page when there are developments.</p>
          </div>

          <h3 className="rb-sub">What to do instead</h3>
          <p className="rb-body">Private healthcare in the Philippines is dramatically cheaper than the US. A hospital stay that might cost $50,000 in America may cost $3,000 to $5,000 at Chong Hua in Cebu. Most expats use a combination of out-of-pocket payment for routine care and a private international health insurance policy for catastrophic coverage. <a href="https://safetywing.com/?referenceID=26552539&utm_source=26552539&utm_medium=Ambassador" target="_blank" rel="noopener noreferrer" style={{color: '#C9A84C', fontWeight: 500}}>SafetyWing</a>, Cigna Global, and AXA are the most popular options.</p>
        </div>
      </section>

      {/* SECTION 6 — VA BENEFITS */}
      <section className="section section-dark" id="va-benefits">
        <div className="section-inner">
          <p className="section-label">Military Veterans</p>
          <h2 className="section-heading section-heading-light">VA Benefits for Military Veterans</h2>

          <p className="rb-body rb-body-light">VA healthcare generally requires use of VA facilities in the United States. However VA disability compensation payments — the monthly payment based on your disability rating — continue regardless of where you live and are not affected by living in the Philippines.</p>

          <p className="rb-body rb-body-light">TRICARE — the military health insurance program — does cover care in the Philippines for eligible beneficiaries. Approximately 30,000 US military retirees currently live in the Philippines and receive care through TRICARE and VA programs. If you are TRICARE eligible your coverage continues in the Philippines at overseas rates. This is a significant advantage military retirees have over civilian retirees for healthcare abroad.</p>
        </div>
      </section>

      {/* SECTION 7 — CUTTING ALL US TIES */}
      <section className="section section-light" id="cutting-ties">
        <div className="section-inner">
          <p className="section-label">Full Commitment</p>
          <h2 className="section-heading">Cutting All US Ties — What Happens When You Move Everything Abroad</h2>

          <p className="rb-body">This is the real question most expats have but are afraid to ask. You sell the house, cancel the lease, close local accounts, and move everything to the Philippines. No US address. No US bank account. Full commitment. Here is exactly what happens.</p>

          <h3 className="rb-sub rb-sub-first">Social Security without a US address</h3>
          <p className="rb-body">The Philippines participates in the SSA international direct deposit program. Your Social Security can be deposited directly into a Philippine bank account. You do not need a US address to receive payments. Update your address with SSA before you leave — visit ssa.gov/foreign for SSA&rsquo;s official instructions for people leaving the US.</p>

          <h3 className="rb-sub">The US mail problem</h3>
          <p className="rb-body">When you move abroad with no US address, government agencies and the IRS still need to reach you. Solutions: Mail forwarding services like Traveling Mailbox, Anytime Mailbox, and PostScan Mail give you a real US street address, scan mail digitally, and forward internationally — cost approximately $15 to $30 per month. Alternatively use a trusted family member&rsquo;s US address for official correspondence.</p>

          <h3 className="rb-sub">What to update before leaving</h3>
          <ul className="rb-list">
            <li className="rb-li">SSA — new address and bank account information at ssa.gov</li>
            <li className="rb-li">IRS — Form 8822 to update your mailing address</li>
            <li className="rb-li">Medicare — update contact information if keeping coverage</li>
            <li className="rb-li">All US financial accounts — banks, brokerages, investment accounts</li>
            <li className="rb-li">Voter registration — register as overseas voter at fvap.gov</li>
            <li className="rb-li">Mail forwarding — set up service before departure</li>
          </ul>
        </div>
      </section>

      {/* SECTION 8 — US TAX OBLIGATIONS */}
      <section className="section section-dark" id="taxes">
        <div className="section-inner">
          <p className="section-label">Tax Obligations</p>
          <h2 className="section-heading section-heading-light">US Tax Obligations — The One Thing That Never Leaves</h2>

          <p className="rb-body rb-body-light">As a US citizen you are required to file US federal taxes every year regardless of where you live, whether you have US income, a US address, or a US bank account. Key obligations:</p>

          <ul className="rb-list">
            <li className="rb-li rb-li-light"><strong>FBAR</strong> — FinCEN Form 114 — if your Philippine bank accounts exceed $10,000 at any point during the year you must file by April 15. Failure carries severe penalties.</li>
            <li className="rb-li rb-li-light"><strong>FATCA</strong> — Form 8938 if foreign financial assets exceed certain thresholds.</li>
            <li className="rb-li rb-li-light"><strong>Foreign Earned Income Exclusion</strong> — up to $126,500 in earned income may be excluded in 2026.</li>
            <li className="rb-li rb-li-light"><strong>Social Security taxation</strong> — up to 85% of Social Security benefits may be taxable depending on total income.</li>
          </ul>

          <div className="rb-alert">
            <p className="rb-alert-label">Use a US Expat Tax Specialist</p>
            <p className="rb-alert-body">Use a US expat tax specialist not a regular accountant. Services like Greenback Tax Services, Taxes for Expats, and MyExpatTaxes specialize in this. A general tax preparer will likely miss critical forms and elections that could cost you significantly.</p>
          </div>
        </div>
      </section>

      {/* SECTION 9 — PRACTICAL STEPS */}
      <section className="section section-light">
        <div className="section-inner">
          <p className="section-label">Before You Move</p>
          <h2 className="section-heading">Practical Steps Before You Move</h2>

          <div className="checklist-card">
            <ol className="checklist-items">
              <li className="checklist-item">Contact SSA to update your address — use a US mail forwarding address or directly to a Philippine address.</li>
              <li className="checklist-item">Set up direct deposit to your US bank account if not already done.</li>
              <li className="checklist-item">Decide on Medicare Part B strategy — keep it or drop it — with full understanding of the permanent penalty implications.</li>
              <li className="checklist-item">If you have VA benefits contact the VA Foreign Medical Program office.</li>
              <li className="checklist-item">Open a Philippine bank account — BDO, BPI, and UnionBank are most expat-friendly.</li>
              <li className="checklist-item">Set up Wise or Remitly to transfer monthly Social Security payments efficiently.</li>
              <li className="checklist-item">Set up a US mail forwarding service before you leave.</li>
              <li className="checklist-item">File IRS Form 8822 to update your address with the IRS.</li>
              <li className="checklist-item">Register as an overseas voter at fvap.gov.</li>
              <li className="checklist-item">Consult a US expat tax professional about FBAR obligations and filing requirements.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* WEP AND GPO */}
      <section className="section section-light" id="wep">
        <div className="section-inner">
          <p className="section-label">2025 Law Change</p>
          <h2 className="section-heading">WEP and GPO Elimination — Critical Update for Teachers and Government Workers</h2>
          <p className="rb-body">If you worked as a teacher, firefighter, police officer, or other government employee in a job that did not pay into Social Security, the Social Security Fairness Act signed into law in January 2025 fundamentally changed your benefit calculation.</p>

          <div className="rb-alert">
            <p className="rb-alert-label">2025 Law Change — Social Security Fairness Act</p>
            <p className="rb-alert-body-dark">The Social Security Fairness Act was signed into law in January 2025 eliminating both the Windfall Elimination Provision (WEP) and the Government Pension Offset (GPO). If you were previously subject to WEP or GPO reductions to your Social Security benefit, those reductions have been eliminated and your benefit should now be calculated at full value. Contact SSA immediately to verify your updated benefit amount — many public sector retirees are now receiving higher payments and may be owed retroactive adjustments.</p>
          </div>

          <h3 className="rb-sub rb-sub-first">Who Was Affected by WEP</h3>
          <ul className="rb-list">
            <li className="rb-li">Teachers in states where teachers do not pay into Social Security — including California (CalSTRS), Texas (TRS), Illinois (TRS), Ohio (STRS), Massachusetts (MTRS), Louisiana, and others.</li>
            <li className="rb-li">Firefighters and police officers in many municipalities.</li>
            <li className="rb-li">Federal employees hired before 1984 under the Civil Service Retirement System.</li>
          </ul>

          <h3 className="rb-sub">What to Do Now</h3>
          <p className="rb-body">If you were previously affected by WEP or GPO reductions, contact SSA through the Federal Benefits Unit at the US Embassy Manila at <strong>manila.fbu@ssa.gov</strong> or through ssa.gov to verify your updated benefit. Retroactive payments from January 2025 may apply to some recipients.</p>

          <h3 className="rb-sub">CalSTRS and CalPERS Note</h3>
          <p className="rb-body">California teacher and public employee retirement systems continue paying benefits regardless of where you live. If you receive retiree health coverage through CalPERS, verify whether your specific plan provides coverage internationally before moving. Contact CalPERS directly at calpers.ca.gov before making your move.</p>
        </div>
      </section>

      {/* CANADIAN EXPATS */}
      <section className="section section-dark" id="canadian">
        <div className="section-inner">
          <p className="section-label">Canadian Expats</p>
          <h2 className="section-heading section-heading-light">Canadian Expats — Your Provincial Health Coverage Has a Deadline</h2>
          <p className="rb-body rb-body-light">Canadian expats face a healthcare coverage cliff that catches many people by surprise. Unlike US Medicare which you keep regardless of where you live, Canadian provincial health insurance has residency requirements. Moving to the Philippines permanently means losing it.</p>

          <h3 className="rb-sub rb-sub-first rb-sub-light">Provincial Coverage Timelines</h3>
          <div className="vtable-wrap" style={{maxWidth: '600px', margin: '20px 0 28px'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem'}}>
              <thead>
                <tr>
                  <th style={{background: 'rgba(201,168,76,0.12)', color: 'rgba(248,246,241,0.5)', fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '13px 18px', textAlign: 'left'}}>Province</th>
                  <th style={{background: 'rgba(201,168,76,0.12)', color: 'rgba(248,246,241,0.5)', fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '13px 18px', textAlign: 'left'}}>Coverage Lapses After</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{padding: '12px 18px', borderBottom: '1px solid rgba(248,246,241,0.07)', fontWeight: 600, color: '#F8F6F1'}}>British Columbia</td><td style={{padding: '12px 18px', borderBottom: '1px solid rgba(248,246,241,0.07)', fontWeight: 300, color: 'rgba(248,246,241,0.78)'}}>7 months</td></tr>
                <tr><td style={{padding: '12px 18px', borderBottom: '1px solid rgba(248,246,241,0.07)', fontWeight: 600, color: '#F8F6F1'}}>Ontario</td><td style={{padding: '12px 18px', borderBottom: '1px solid rgba(248,246,241,0.07)', fontWeight: 300, color: 'rgba(248,246,241,0.78)'}}>212 days (~7 months)</td></tr>
                <tr><td style={{padding: '12px 18px', borderBottom: '1px solid rgba(248,246,241,0.07)', fontWeight: 600, color: '#F8F6F1'}}>Alberta</td><td style={{padding: '12px 18px', borderBottom: '1px solid rgba(248,246,241,0.07)', fontWeight: 300, color: 'rgba(248,246,241,0.78)'}}>6 months</td></tr>
                <tr><td style={{padding: '12px 18px', fontWeight: 600, color: '#F8F6F1'}}>Quebec</td><td style={{padding: '12px 18px', fontWeight: 300, color: 'rgba(248,246,241,0.78)'}}>Contact RAMQ directly — rules differ</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="rb-sub rb-sub-light">What to Do</h3>
          <p className="rb-body rb-body-light">Purchase international health insurance before your provincial coverage lapses. Do not wait until your coverage ends. Cigna Global, Pacific Cross, and AXA are most recommended among Canadian expats in the Philippines. Pacific Cross has particularly strong Asia-Pacific coverage and is popular with Canadians. Budget $200 to $600 USD per month depending on age and coverage level.</p>

          <h3 className="rb-sub rb-sub-light">CPP and OAS Abroad</h3>
          <p className="rb-body rb-body-light">Canada Pension Plan and Old Age Security payments continue regardless of where you live. Canada has a tax treaty with the Philippines. Non-resident withholding tax on CPP and OAS is 25 percent unless you qualify for reduced treaty rates. Consult a Canadian expat tax specialist before moving.</p>
        </div>
      </section>

      {/* SSA-7162 */}
      <section className="section section-light">
        <div className="section-inner">
          <p className="section-label">Philippines-Based Recipients</p>
          <h2 className="section-heading">The SSA-7162 Questionnaire — What Philippines-Based Recipients Must Know</h2>
          <p className="rb-body">If you receive Social Security benefits while living in the Philippines, SSA will periodically send you Form SSA-7162 — the Questionnaire for United States Benefits Recipients Outside the United States. This form confirms you are still alive, still eligible, and still residing at your reported address.</p>

          <div className="rb-warning">
            <p className="rb-warning-label">⚠ Do Not Ignore This Form</p>
            <p className="rb-warning-body">SSA will suspend your benefit payments if you do not respond. Reinstatement requires contacting the Federal Benefits Unit and completing additional verification.</p>
          </div>

          <h3 className="rb-sub rb-sub-first">How to Handle It From the Philippines</h3>
          <p className="rb-body">The Federal Benefits Unit at the US Embassy Manila handles Social Security for Philippines-based recipients. Contact them at <strong>manila.fbu@ssa.gov</strong>. Ask whether scanned email submission of the completed form is accepted — this can save significant time and international postage. If mailing, use registered mail with tracking and keep a copy of the completed form.</p>

          <h3 className="rb-sub">If You Did Not Receive Your Form</h3>
          <p className="rb-body">Download Form SSA-7162 from ssa.gov, complete it, and submit to the Federal Benefits Unit. Do not wait for a replacement to arrive by international mail — Philippine mail delivery is unreliable and delays can result in suspended payments.</p>
        </div>
      </section>

      {/* STEVE'S NOTE */}
      <section className="sn-section">
        <div className="sn-inner">
          <div className="sn-header">
            <div className="sn-monogram">S</div>
            <div>
              <p className="sn-name">Steve&rsquo;s Note</p>
              <p className="sn-tag">Why I Built This Page · Cebu, Philippines</p>
            </div>
          </div>
          <div className="sn-rule" />
          <div className="sn-body">
            <p>I will be upfront — I am still working and covered by my company health insurance, so I do not have personal experience navigating Social Security or Medicare as an expat. What I do have is a front-row seat to the confusion these topics create every single day in expat Facebook groups. I see the same questions asked over and over by people who moved to the Philippines without understanding what happens to their benefits, and I see the financial stress that results from not having this information before making the move. That is why I built this page.</p>
            <p>The information here comes from SSA.gov, Medicare.gov, the US Embassy Manila Federal Benefits Unit, and current research from expat financial specialists. I have done my best to make it accurate and current as of June 2026.</p>
            <p>If you have first-hand experience navigating Social Security, Medicare, or VA benefits as an expat in the Philippines, I would genuinely love to hear from you. Real-world experience from people living this is more valuable than anything I can research. Send me a note at steve@expatcompassph.com — your experience could help hundreds of people facing the same situation.</p>
            <p>As always this is not financial or legal advice. Consult directly with SSA, Medicare, and a licensed US expat financial advisor before making decisions about your benefits.</p>
          </div>
          <p className="sn-verified">Last Updated: June 2026 · Cebu, Philippines</p>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="legal-section">
        <div className="legal-inner">
          <div>
            <div className="legal-icon">!</div>
            <h2 className="legal-heading">Verify before you move.</h2>
          </div>
          <p className="legal-body">
            Benefit rules, payment amounts, and eligibility requirements change regularly. This page reflects conditions as of June 2026 and is for general informational purposes only. It is not financial or legal advice. Always verify current rules directly with the Social Security Administration at <strong>ssa.gov</strong>, Medicare at <strong>medicare.gov</strong>, and the VA at <strong>va.gov</strong> before making decisions about your benefits.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

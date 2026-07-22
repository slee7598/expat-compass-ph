import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HolidayStatusGrid from "@/components/HolidayStatusGrid";

export const metadata: Metadata = {
  title: "Philippines Visa Guide for Expats 2026 — Tourist Extensions, SRRV, 13A & Digital Nomad Visa",
  description:
    "The complete 2026 guide to Philippines visas for foreign expats. Tourist visa extensions with real costs, SRRV retirement visa, 13A spousal visa, Digital Nomad Visa, ACR I-Card and PRA ID explained clearly.",
  alternates: { canonical: "https://expatcompassph.com/visas" },
};

export default function VisasPage() {
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
        .page-title { font-family: 'Playfair Display', serif; font-size: clamp(2.2rem, 4.5vw, 3.4rem); font-weight: 700; line-height: 1.12; color: #F8F6F1; margin-bottom: 24px; }
        .page-sub { font-size: 1.05rem; font-weight: 300; line-height: 1.65; color: #F8F6F1; max-width: 580px; }

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
        .section-heading { font-family: 'Playfair Display', serif; font-size: clamp(1.7rem, 3vw, 2.4rem); font-weight: 700; line-height: 1.2; color: #0B1F3A; margin-bottom: 32px; max-width: 680px; }
        .section-heading-light { color: #F8F6F1; }

        /* ── BODY TEXT ── */
        .vb { font-size: 0.93rem; font-weight: 300; line-height: 1.85; color: #4A5868; margin-bottom: 16px; max-width: 760px; }
        .vb-light { color: #F8F6F1; }
        .vsub { font-family: 'Playfair Display', serif; font-size: clamp(1.05rem, 1.8vw, 1.28rem); font-weight: 700; line-height: 1.25; color: #0B1F3A; margin: 40px 0 14px; padding-top: 36px; border-top: 1px solid rgba(11,31,58,0.08); }
        .vsub-first { border-top: none; padding-top: 0; margin-top: 4px; }
        .vsub-light { color: #F8F6F1; border-top-color: rgba(248,246,241,0.1); }

        /* ── LISTS ── */
        .vlist { list-style: none; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 9px; max-width: 760px; }
        .vli { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #4A5868; padding-left: 22px; position: relative; }
        .vli::before { content: '—'; position: absolute; left: 0; color: #C9A84C; font-weight: 600; }
        .vli-light { color: #F8F6F1; }
        .vnlist { list-style: none; counter-reset: vctr; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 10px; max-width: 760px; }
        .vni { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #4A5868; padding-left: 30px; position: relative; counter-increment: vctr; }
        .vni::before { content: counter(vctr) '.'; position: absolute; left: 0; color: #C9A84C; font-size: 0.78rem; font-weight: 700; padding-top: 2px; }

        /* ── ALERT / INFO BOXES ── */
        .va-gold { background: rgba(201,168,76,0.06); border: 1px solid rgba(201,168,76,0.3); border-left: 4px solid #C9A84C; padding: 26px 28px; margin: 28px 0; max-width: 760px; }
        .va-gold-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
        .va-gold-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #1A1A1A; }
        .va-gold-body-light { color: #1A1A1A; }

        .va-blue { background: rgba(41,121,255,0.05); border: 1px solid rgba(41,121,255,0.2); border-left: 4px solid #2979FF; padding: 26px 28px; margin: 28px 0; max-width: 760px; }
        .va-blue-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #2979FF; margin-bottom: 10px; }
        .va-blue-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #1A1A1A; }

        .va-amber { background: rgba(242,153,74,0.06); border: 1px solid rgba(242,153,74,0.28); border-left: 4px solid #F2994A; padding: 26px 28px; margin: 28px 0; max-width: 760px; }
        .va-amber-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #F2994A; margin-bottom: 10px; }
        .va-amber-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #1A1A1A; }
        .va-amber-body-light { color: #1A1A1A; }

        .va-warning { background: rgba(235,87,87,0.06); border: 1px solid rgba(235,87,87,0.22); border-left: 4px solid #EB5757; padding: 26px 28px; margin: 28px 0; max-width: 760px; }
        .va-warning-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #EB5757; margin-bottom: 10px; }
        .va-warning-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #1A1A1A; }

        /* ── TABLES ── */
        .vtable-wrap { overflow-x: auto; margin: 24px 0; max-width: 780px; }
        .vtable { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
        .vtable th { background: #C9A84C; color: #0B1F3A; font-family: 'Playfair Display', serif; font-size: 0.85rem; font-weight: 700; padding: 13px 18px; text-align: left; }
        .vtable th.th-dim { background: rgba(201,168,76,0.12); color: #F8F6F1; font-family: 'Inter', sans-serif; font-size: 0.68rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
        .vtable td { padding: 12px 18px; border-bottom: 1px solid rgba(248,246,241,0.07); font-weight: 300; line-height: 1.5; color: #F8F6F1; vertical-align: top; }
        .vtable td.td-dim { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: #F8F6F1; background: rgba(248,246,241,0.02); }
        .vtable-light th { background: #0B1F3A; color: #F8F6F1; }
        .vtable-light th.th-dim { background: rgba(11,31,58,0.08); color: rgba(11,31,58,0.45); }
        .vtable-light td { border-bottom-color: rgba(11,31,58,0.07); color: #4A5868; }
        .vtable-light td.td-dim { color: rgba(11,31,58,0.4); background: rgba(11,31,58,0.02); }
        .vtable .td-good { color: #6FCF97; font-weight: 500; }
        .vtable .td-warn { color: #F2994A; font-weight: 500; }
        .vtable .td-na { color: rgba(248,246,241,0.6); }
        .vtable-light .td-good { color: #27AE60; }
        .vtable-light .td-na { color: #8A9BAA; }

        /* ── COST TABLE ── */
        .cost-table-wrap { overflow-x: auto; margin: 20px 0 28px; max-width: 640px; }
        .cost-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
        .cost-table tr { border-bottom: 1px solid rgba(11,31,58,0.07); }
        .cost-table td { padding: 13px 0; font-weight: 300; line-height: 1.5; color: #4A5868; vertical-align: top; }
        .cost-table td:first-child { font-size: 0.82rem; font-weight: 500; color: #0B1F3A; padding-right: 32px; }
        .cost-table td:last-child { font-family: 'Playfair Display', serif; font-weight: 700; color: #0B1F3A; white-space: nowrap; }

        /* ── STAGE CARDS ── */
        .stage-list { display: flex; flex-direction: column; gap: 0; max-width: 760px; margin: 20px 0; }
        .stage-card { display: grid; grid-template-columns: 56px 1fr; gap: 0; border: 1px solid rgba(11,31,58,0.08); border-bottom: none; }
        .stage-card:last-child { border-bottom: 1px solid rgba(11,31,58,0.08); }
        .stage-num { background: #0B1F3A; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 700; color: #C9A84C; }
        .stage-body { padding: 22px 24px; background: #fff; }
        .stage-title { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #C9A84C; margin-bottom: 8px; }
        .stage-text { font-size: 0.88rem; font-weight: 300; line-height: 1.78; color: #4A5868; }

        /* ── DEPOSIT TABLE ── */
        .deposit-grid { display: flex; flex-direction: column; gap: 0; max-width: 720px; margin: 20px 0; }
        .deposit-row { display: grid; grid-template-columns: 1fr auto; gap: 24px; padding: 18px 24px; border: 1px solid rgba(11,31,58,0.08); border-bottom: none; align-items: center; background: #fff; }
        .deposit-row:last-child { border-bottom: 1px solid rgba(11,31,58,0.08); }
        .deposit-row:nth-child(even) { background: rgba(11,31,58,0.02); }
        .deposit-label { font-size: 0.88rem; font-weight: 300; line-height: 1.6; color: #4A5868; }
        .deposit-label strong { font-weight: 600; color: #0B1F3A; }
        .deposit-amount { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; color: #C9A84C; white-space: nowrap; }
        .deposit-head { background: rgba(201,168,76,0.1); border-color: rgba(201,168,76,0.2); }
        .deposit-head .deposit-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #C9A84C; }
        .deposit-head .deposit-amount { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(201,168,76,0.7); font-family: 'Inter', sans-serif; }

        /* ── SCENARIO CARDS ── */
        .scenario-grid { display: flex; flex-direction: column; gap: 0; max-width: 820px; margin-top: 12px; }
        .scenario-card { display: grid; grid-template-columns: 1fr 1.6fr; gap: 0; border: 1px solid #E8E4DC; border-bottom: none; }
        .scenario-card:last-child { border-bottom: 1px solid #E8E4DC; }
        .scenario-q { padding: 24px 28px; background: #0B1F3A; font-family: 'Playfair Display', serif; font-size: 0.92rem; font-weight: 600; color: #F8F6F1; line-height: 1.45; display: flex; align-items: center; }
        .scenario-a { padding: 24px 28px; background: #fff; font-size: 0.88rem; font-weight: 300; line-height: 1.72; color: #4A5868; display: flex; align-items: center; border-left: 3px solid #C9A84C; }

        /* ── STEVE'S NOTE ── */
        .sn-section {
          background: #0D1E30; border-top: 3px solid #C9A84C;
          padding: 80px 48px; position: relative; overflow: hidden;
        }
        .sn-section::before {
          content: 'S'; font-family: 'Playfair Display', serif; font-size: 320px; font-weight: 700;
          color: rgba(201,168,76,0.05); position: absolute; right: -10px; top: -60px;
          line-height: 1; pointer-events: none; user-select: none;
        }
        .sn-inner { max-width: 860px; position: relative; z-index: 1; }
        .sn-header { display: flex; align-items: center; gap: 20px; margin-bottom: 28px; }
        .sn-monogram { width: 52px; height: 52px; background: #C9A84C; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 700; color: #0B1F3A; flex-shrink: 0; }
        .sn-name { font-family: 'Playfair Display', serif; font-size: 1.6rem; font-weight: 700; color: #F8F6F1; line-height: 1.1; }
        .sn-tag { font-size: 0.7rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #C9A84C; margin-top: 4px; }
        .sn-rule { height: 1px; background: rgba(201,168,76,0.2); margin-bottom: 32px; }
        .sn-body { font-size: 0.95rem; font-weight: 300; line-height: 1.85; color: rgba(248,246,241,0.82); }
        .sn-body p + p { margin-top: 16px; }
        .sn-verified { margin-top: 36px; padding-top: 20px; border-top: 1px solid rgba(201,168,76,0.2); display: inline-flex; align-items: center; gap: 8px; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #C9A84C; }
        .sn-verified::before { content: '✓'; }

        /* ── LEGAL SECTION ── */
        .legal-section { background: #F8F6F1; padding: 64px 48px; border-top: 1px solid #E8E4DC; }
        .legal-inner { max-width: 900px; display: grid; grid-template-columns: 1fr 2fr; gap: 64px; align-items: start; }
        .legal-icon { width: 48px; height: 48px; background: #C9A84C; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; font-size: 1.2rem; color: #0B1F3A; font-weight: 700; flex-shrink: 0; }
        .legal-body { font-size: 0.9rem; font-weight: 300; line-height: 1.85; color: #5C6B7A; max-width: 640px; }
        .legal-body strong { color: #0B1F3A; font-weight: 600; }

        /* ── JUMP NAV ── */
        .cs-label { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #C9A84C; margin-bottom: 24px; display: flex; align-items: center; gap: 12px; }
        .cs-label::before, .cs-label::after { content: ''; display: block; flex: 1; height: 1px; background: rgba(201,168,76,0.25); }
        .cs-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; }
        .cs-card { display: block; text-decoration: none; background: #0B1F3A; padding: 22px 24px; border: 1px solid rgba(201,168,76,0.15); transition: border-color 0.18s, background 0.18s; cursor: pointer; }
        .cs-card:hover { border-color: #C9A84C; background: rgba(11,31,58,0.92); }
        .cs-city { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: #F8F6F1; display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 6px; }
        .cs-city::after { content: '→'; font-family: 'Inter', sans-serif; font-size: 0.85rem; color: #C9A84C; flex-shrink: 0; transition: transform 0.18s; }
        .cs-card:hover .cs-city::after { transform: translateX(4px); }
        .cs-tagline { font-size: 0.8rem; font-weight: 300; line-height: 1.55; color: rgba(248,246,241,0.78); }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .page-hero, .section, .sn-section, .legal-section { padding-left: 24px; padding-right: 24px; }
          .legal-inner { grid-template-columns: 1fr; gap: 32px; }
          .stage-card { grid-template-columns: 42px 1fr; }
          .scenario-card { grid-template-columns: 1fr; }
          .scenario-q { border-bottom: 2px solid #C9A84C; }
          .scenario-a { border-left: none; border-top: none; }
          .deposit-row { grid-template-columns: 1fr; gap: 6px; }
          .cs-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .page-title { font-size: 2rem; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="page-header">
        <Nav active="/visas" />
        <div className="page-hero">
          <p className="page-eyebrow">Visas and Immigration</p>
          <h1 className="page-title">Staying in the Philippines Legally</h1>
          <p className="page-sub">The complete guide to every visa option available to foreign nationals in 2026 — tourist extensions, retirement visas, spousal visas, and the new Digital Nomad Visa. Real costs, real timelines, no confusion.</p>
          <HolidayStatusGrid />
        </div>
      </div>

      {/* ── JUMP NAV ── */}
      <section className="section section-light" style={{paddingTop:'40px', paddingBottom:'48px'}}>
        <div className="section-inner">
          <p className="cs-label">Jump to a Section</p>
          <div className="cs-grid">
            <a href="#document-types" className="cs-card">
              <p className="cs-city">Document Types</p>
              <p className="cs-tagline">ACR I-Card vs PRA ID explained</p>
            </a>
            <a href="#tourist-extension" className="cs-card">
              <p className="cs-city">Tourist Extensions</p>
              <p className="cs-tagline">Real costs and the process</p>
            </a>
            <a href="#srrv" className="cs-card">
              <p className="cs-city">SRRV</p>
              <p className="cs-tagline">Retirement visa now available from age 40</p>
            </a>
            <a href="#13a" className="cs-card">
              <p className="cs-city">13A Spousal Visa</p>
              <p className="cs-tagline">For spouses of Filipino citizens</p>
            </a>
            <a href="#digital-nomad" className="cs-card">
              <p className="cs-city">Digital Nomad Visa</p>
              <p className="cs-tagline">New for remote workers</p>
            </a>
            <a href="#comparison" className="cs-card">
              <p className="cs-city">Which Visa Is Right</p>
              <p className="cs-tagline">Compare your options</p>
            </a>
            <a href="#criminal-records" className="cs-card">
              <p className="cs-city">Criminal Records</p>
              <p className="cs-tagline">How they affect your visa</p>
            </a>
            <a href="#ra9225" className="cs-card">
              <p className="cs-city">Dual Citizenship</p>
              <p className="cs-tagline">Reclaiming Philippine citizenship</p>
            </a>
            <a href="#passport-renewal" className="cs-card">
              <p className="cs-city">US Passport Renewal</p>
              <p className="cs-tagline">From the Philippines with or without Manila trip</p>
            </a>
            <a href="#minor-children" className="cs-card">
              <p className="cs-city">Minor Children</p>
              <p className="cs-tagline">Guardian authorization and visa requirements</p>
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: THREE DOCUMENTS ── */}
      <section className="section section-light" id="document-types">
        <div className="section-inner">
          <p className="section-label">Start Here</p>
          <h2 className="section-heading">Understanding the Three Long-Stay Documents</h2>

          <p className="vb">Before diving into specific visas, every foreigner in the Philippines needs to understand the difference between three commonly confused documents. Getting this wrong causes real problems at immigration counters, airports, and government offices.</p>

          <h3 className="vsub vsub-first">The 9(a) Tourist Visa — Visa-Free Entry</h3>
          <p className="vb">Most Western nationals including Americans, British, Australians, and Europeans enter the Philippines visa-free for an initial 30 days. Americans receive 59 days. This is not a visa in the traditional sense — it is a visa-free entry privilege under Executive Order 408. It can be extended monthly at any Bureau of Immigration office for up to 36 months total. After 59 days of stay, you are required to obtain an ACR I-Card.</p>

          <h3 className="vsub">The ACR I-Card — Alien Certificate of Registration Identity Card</h3>
          <p className="vb">Issued by the Bureau of Immigration to foreign nationals who have stayed in the Philippines for more than 59 days. It is your official identity document as a long-stay foreigner. It must be renewed periodically. You need it for banking, government transactions, and many official processes. Tourist visa extenders, 13A visa holders, and most other long-term foreign residents carry an ACR I-Card.</p>
          <div className="va-amber">
            <p className="va-amber-label">Annual Report Required</p>
            <p className="va-amber-body">ACR I-Card holders must file an Annual Report with the Bureau of Immigration between January 1 and the last day of February each year. Missing this deadline results in fines.</p>
          </div>

          <h3 className="vsub">The PRA ID Card — Philippine Retirement Authority Identity Card</h3>
          <p className="vb">This is NOT the same as an ACR I-Card. SRRV holders receive a PRA ID Card issued by the Philippine Retirement Authority — not the Bureau of Immigration. SRRV holders are specifically exempt from the ACR I-Card requirement. They are also exempt from the Bureau of Immigration Annual Report, exit clearances, and re-entry permits. Their identity document is the PRA Membership ID Card, which serves the same function as the ACR I-Card but comes from a completely different government agency. Confusing these two documents is one of the most common mistakes in expat forums and even in some immigration advice.</p>

          <h3 className="vsub">At a Glance</h3>
          <div className="vtable-wrap">
            <table className="vtable vtable-light">
              <thead>
                <tr>
                  <th>Document</th>
                  <th>Who carries it</th>
                  <th>Issued by</th>
                  <th>Annual Report required</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-dim">ACR I-Card</td>
                  <td>Tourist extenders, 13A holders, most long-stay foreigners</td>
                  <td>Bureau of Immigration</td>
                  <td className="td-warn">Yes — Jan/Feb each year</td>
                </tr>
                <tr>
                  <td className="td-dim">PRA ID Card</td>
                  <td>SRRV holders only</td>
                  <td>Philippine Retirement Authority</td>
                  <td className="td-good">No — exempt</td>
                </tr>
                <tr>
                  <td className="td-dim">None</td>
                  <td>Short-stay tourists under 59 days</td>
                  <td>N/A</td>
                  <td className="td-na">Not applicable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: 9(a) TOURIST VISA ── */}
      <section className="section section-dark" id="tourist-extension">
        <div className="section-inner">
          <p className="section-label">Tourist Visa</p>
          <h2 className="section-heading section-heading-light">The 9(a) Tourist Visa — Extending Your Stay</h2>

          <p className="vb vb-light">The 9(a) Temporary Visitor Visa is how the overwhelming majority of foreign expats stay in the Philippines. Most Western nationals enter visa-free and simply extend their stay month by month or every two months at any Bureau of Immigration office. It is legal, straightforward, and used by thousands of long-term expats who are not yet ready to commit to a long-term visa category.</p>

          <h3 className="vsub vsub-first vsub-light">How entry works</h3>
          <p className="vb vb-light">Most Western nationalities including Americans, Australians, British, and most Europeans receive 30 days visa-free upon arrival. Americans receive 59 days. Citizens of some countries require a visa in advance — check with the Philippine Embassy in your country before travel. All arrivals must complete the free eTravel registration before flying — do not use paid third-party sites, the official eTravel portal is free.</p>

          <h3 className="vsub vsub-light">The extension process</h3>
          <p className="vb vb-light">Extensions are processed at any Bureau of Immigration office nationwide. You can extend by one month or two months at a time. Extensions are also available online through the BI e-Services portal as of 2025, though the system has experienced recurring technical issues — do not wait until the last day of your authorized stay to file online. Always extend at least 7 to 10 days before your current extension expires.</p>

          <h3 className="vsub vsub-light">Real costs at the counter</h3>
          <div className="va-gold">
            <p className="va-gold-label">Steve's Personal Experience — June 2026</p>
            <p className="va-gold-body-light">Published BI fees look lower than what you actually pay at the counter. In practice, expect to pay approximately 5,000 pesos for a standard monthly or two-month extension. The difference between the published base fee and the actual amount is an expedited processing fee added automatically — you do not get a choice and there is no option to decline it. When your ACR I-Card is required after 59 days, the total jumps to 10,000 pesos or more. The LSVVE six-month extension at 11,500 to 13,900 pesos is actually the best value if you plan to stay long-term — one trip instead of monthly visits. Always bring extra cash.</p>
          </div>

          <div style={{margin: '32px 0', maxWidth: '900px'}}>
            <Image
              src="/images/bi-fee-board.jpg"
              alt="Official Bureau of Immigration fee schedule at the Mactan Satellite Office, Pajo, Lapu-Lapu City"
              width={1400}
              height={1050}
              style={{width: '100%', height: 'auto', display: 'block'}}
              priority
            />
            <p style={{fontSize: '0.78rem', color: 'rgba(248,246,241,0.72)', marginTop: '10px', fontStyle: 'italic', lineHeight: 1.55}}>
              Official BI fee schedule photographed at the Mactan Satellite Office, Pajo, Lapu-Lapu City — July 2026.
            </p>
          </div>

          <div className="vtable-wrap" style={{maxWidth: '900px'}}>
            <table className="vtable">
              <thead>
                <tr>
                  <th>Extension type</th>
                  <th>1 month</th>
                  <th>2 months</th>
                  <th>Minor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-dim">Standard extension (under 59 days)</td>
                  <td colSpan={3}>~₱5,000</td>
                </tr>
                <tr>
                  <td className="td-dim">First-time extension exceeding 59 days (ACR I-Card mandatory)</td>
                  <td>₱8,600</td>
                  <td>₱9,100</td>
                  <td>₱8,560</td>
                </tr>
                <tr>
                  <td className="td-dim">Second-time extension exceeding 59 days</td>
                  <td>₱3,870</td>
                  <td>₱4,370</td>
                  <td>₱4,230</td>
                </tr>
                <tr>
                  <td className="td-dim">LSVVE (6-month extension)</td>
                  <td colSpan={3}>₱11,500–13,900 depending on nationality</td>
                </tr>
                <tr>
                  <td colSpan={4} style={{fontSize: '0.78rem', color: 'rgba(248,246,241,0.72)', fontStyle: 'italic', paddingTop: '6px', paddingBottom: '14px', borderBottom: '1px solid rgba(248,246,241,0.07)'}}>LSVVE is a distinct visa product from standard monthly extensions, filed separately with its own fee schedule. This figure should be confirmed directly with BI, as it is not shown on the standard extension fee board.</td>
                </tr>
                <tr>
                  <td className="td-dim">Overstay fine</td>
                  <td colSpan={3}>₱1,010 flat fee covering 1 to 30 days of overstay</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="va-blue" style={{marginTop: '28px', maxWidth: '900px'}}>
            <p className="va-blue-label">Visa Stickers Discontinued — Keep Your Official Receipt</p>
            <p className="va-blue-body">Visa stickers have not been issued by the Bureau of Immigration since November 13, 2019. Your visa validity is now printed directly on the Official Receipt (OR) issued at the time of your extension. Keep your OR — you will need to present it at your next extension and at departure.</p>
          </div>

          <h3 className="vsub vsub-light">The 36-month limit</h3>
          <p className="vb vb-light">Non-visa required nationals can stay in the Philippines for a maximum of 36 months from their date of entry through tourist visa extensions. Visa-required nationals are limited to 24 months. Once you hit the cap, you must depart the Philippines. Most people take a short trip to a neighboring country — Japan, South Korea, Singapore, Hong Kong — and re-enter fresh. Re-entry is always at the discretion of the immigration officer.</p>

          <h3 className="vsub vsub-light">The ACR I-Card requirement</h3>
          <p className="vb vb-light">After 59 days of continuous stay in the Philippines, you are legally required to obtain an ACR I-Card from the Bureau of Immigration. It costs approximately 900 pesos for the card itself plus additional fees. Once you have an ACR I-Card, you must file the Annual Report with the Bureau of Immigration between January and February each year. Missing the Annual Report deadline results in fines.</p>

          <h3 className="vsub vsub-light">Online extensions</h3>
          <p className="vb vb-light">As of 2025 the Bureau of Immigration offers online extensions through the BI e-Services portal at bi.gov.ph. Processing takes 2 to 3 business days when approved. Confirm with BI whether a physical passport stamp is needed before your next immigration transaction or departure.</p>

          <h3 className="vsub vsub-light">The BI Cebu experience</h3>
          <p className="vb vb-light">The Bureau of Immigration satellite office in Lapu-Lapu City at Gaisano Mall handles extensions for Mactan Island and Cebu residents. In my personal experience this is one of the more efficient BI offices in the country — arrive early, bring all documents, and expect to be in and out within an hour on a good day. The main Cebu City BI office handles more complex transactions.</p>
        </div>
      </section>

      {/* ── SECTION 3: SRRV ── */}
      <section className="section section-light" id="srrv">
        <div className="section-inner">
          <p className="section-label">Retirement Visa</p>
          <h2 className="section-heading">The SRRV — Special Resident Retiree&rsquo;s Visa</h2>

          <div className="va-gold" style={{border:'2px solid #C9A84C', background:'rgba(201,168,76,0.08)', marginBottom:'28px'}}>
            <p className="va-gold-label">⚠ Important — Outdated Deposit Figures Circulating Online</p>
            <p className="va-gold-body">Many websites and expat forums still quote a $10,000 deposit figure for the Classic SRRV. This figure is outdated and no longer accurate. The correct 2026 deposit structure is: Over 50 with qualifying pension of $800 per month or more: $15,000 deposit. Over 50 without qualifying pension: $30,000 deposit. Age 40 to 49 with qualifying pension: $25,000 deposit. Age 40 to 49 without qualifying pension: $50,000 deposit. The deposit is fully yours — it earns interest in a PRA-accredited bank and is returned in full when you permanently leave the program. Do not make financial plans based on the $10,000 figure you may have seen elsewhere.</p>
          </div>

          <p className="vb">The SRRV is the Philippines&rsquo; premier long-term residency visa for qualifying foreign nationals and former Filipino citizens. It provides indefinite stay, multiple entry, and freedom from the monthly Bureau of Immigration visits that define life on a tourist extension. It is administered by the Philippine Retirement Authority — a separate government agency from the Bureau of Immigration — which creates important differences in how the visa works and what documents you carry.</p>

          <div className="va-gold">
            <p className="va-gold-label">Major 2025 Update — Age Requirement Lowered</p>
            <p className="va-gold-body">Effective September 2025, the minimum age requirement for the SRRV was lowered from 50 to 40 years old. This is a significant change that opens the SRRV to early retirees, digital entrepreneurs, and younger long-stay residents who previously had to wait until 50. If you read older guides online, be aware that the 50-year age requirement is now outdated.</p>
          </div>

          <div className="va-amber">
            <p className="va-amber-label">PRA ID Card — Not an ACR I-Card</p>
            <p className="va-amber-body">SRRV holders are specifically exempt from the Bureau of Immigration ACR I-Card requirement. Instead you receive a PRA Membership ID Card issued by the Philippine Retirement Authority. This card serves the same identification function as the ACR I-Card but comes from a completely different agency. SRRV holders are also exempt from the Bureau of Immigration Annual Report, exit clearance certificates, and re-entry permits. These exemptions are among the most valuable benefits of the SRRV.</p>
          </div>

          <h3 className="vsub vsub-first">SRRV benefits</h3>
          <ul className="vlist">
            <li className="vli">Indefinite stay — no expiry on your residency as long as you maintain PRA membership.</li>
            <li className="vli">Multiple entry — enter and exit freely without separate re-entry permits.</li>
            <li className="vli">No BI Annual Report — SRRV holders deal with PRA, not BI, for annual compliance.</li>
            <li className="vli">No ACR I-Card required — PRA ID Card serves as your identification.</li>
            <li className="vli">No exit clearance required for ordinary departures.</li>
            <li className="vli">Exemption from customs duties on one-time importation of household goods up to $7,000 USD.</li>
            <li className="vli">Deposit can be converted into approved investments including condominium purchase.</li>
            <li className="vli">Annual PRA membership fee of $360 USD covers principal and two dependents.</li>
          </ul>

          <h3 className="vsub">SRRV deposit requirements</h3>
          <div className="deposit-grid">
            <div className="deposit-row deposit-head">
              <span className="deposit-label">Category</span>
              <span className="deposit-amount">Required Deposit</span>
            </div>
            <div className="deposit-row">
              <span className="deposit-label"><strong>SRRV Classic — Age 50+</strong><br />With qualifying pension ($800/month or more)</span>
              <span className="deposit-amount">$15,000</span>
            </div>
            <div className="deposit-row">
              <span className="deposit-label"><strong>SRRV Classic — Age 50+</strong><br />Without qualifying pension</span>
              <span className="deposit-amount">$30,000</span>
            </div>
            <div className="deposit-row">
              <span className="deposit-label"><strong>SRRV Classic — Age 40 to 49</strong> (new Sep 2025)<br />With qualifying pension ($800/month or more)</span>
              <span className="deposit-amount">$25,000</span>
            </div>
            <div className="deposit-row">
              <span className="deposit-label"><strong>SRRV Classic — Age 40 to 49</strong> (new Sep 2025)<br />Without qualifying pension</span>
              <span className="deposit-amount">$50,000</span>
            </div>
            <div className="deposit-row">
              <span className="deposit-label"><strong>SRRV Courtesy</strong><br />Retired diplomats, military officers (bilateral), international org officers, high achievers in academics, sports, arts</span>
              <span className="deposit-amount">$1,500–6,000</span>
            </div>
          </div>
          <p className="vb" style={{marginTop: '8px', fontSize: '0.83rem', color: '#6B7B8A'}}>A qualifying pension means a lifetime monthly benefit of at least $800 for a single applicant or $1,000 for a couple — Social Security, private pension, military pension, or lifetime disability benefit. Temporary or fixed-term payments do not qualify. The deposit is fully refundable when you leave the program.</p>

          <h3 className="vsub">The SRRV application process</h3>
          <div className="stage-list">
            <div className="stage-card">
              <div className="stage-num">1</div>
              <div className="stage-body">
                <p className="stage-title">Arrive on a convertible 9(a) tourist visa</p>
                <p className="stage-text">Must have at least one month remaining validity. A non-convertible tourist visa cannot be used for SRRV application.</p>
              </div>
            </div>
            <div className="stage-card">
              <div className="stage-num">2</div>
              <div className="stage-body">
                <p className="stage-title">Obtain BI Clearance Certificate</p>
                <p className="stage-text">New requirement since September 2025. Get this ideally during a tourist visa extension visit so it does not delay your SRRV application.</p>
              </div>
            </div>
            <div className="stage-card">
              <div className="stage-num">3</div>
              <div className="stage-body">
                <p className="stage-title">Prepare and apostille all required documents</p>
                <p className="stage-text">Police clearance from country of origin, medical clearance from a PRA-accredited clinic, pension proof if applicable, and proof of deposit.</p>
              </div>
            </div>
            <div className="stage-card">
              <div className="stage-num">4</div>
              <div className="stage-body">
                <p className="stage-title">Complete inward remittance of deposit</p>
                <p className="stage-text">Transfer required deposit amount to a PRA-accredited bank — DBP, BDO, or PNB.</p>
              </div>
            </div>
            <div className="stage-card">
              <div className="stage-num">5</div>
              <div className="stage-body">
                <p className="stage-title">Submit complete application to PRA</p>
                <p className="stage-text">Head office in BGC Taguig or satellite offices in Cebu, Davao, or other cities.</p>
              </div>
            </div>
            <div className="stage-card">
              <div className="stage-num">6</div>
              <div className="stage-body">
                <p className="stage-title">PRA review and approval</p>
                <p className="stage-text">Current processing time is 30 to 45 working days from receipt of complete documents.</p>
              </div>
            </div>
            <div className="stage-card">
              <div className="stage-num">7</div>
              <div className="stage-body">
                <p className="stage-title">Take the oath administered by PRA</p>
                <p className="stage-text">Required step before issuance of your documents.</p>
              </div>
            </div>
            <div className="stage-card">
              <div className="stage-num">8</div>
              <div className="stage-body">
                <p className="stage-title">Receive SRRV visa stamp and PRA ID Card</p>
                <p className="stage-text">SRRV visa stamp goes in your passport from the Bureau of Immigration. PRA Membership ID Card is your primary identification document going forward.</p>
              </div>
            </div>
          </div>

          <h3 className="vsub">SRRV vs. 13A</h3>
          <p className="vb">The SRRV is entirely independent of your marital status — it stands on your own financial qualification. If you are single, widowed, or married to someone who is not a Filipino citizen, the SRRV is typically your best long-term option. The 13A spousal visa requires no deposit but is tied to your marriage. If the marriage ends, the 13A is affected. For those who qualify for 13A, it is often the better deal financially. For those who do not qualify, the SRRV is the most practical permanent solution.</p>

          <h3 className="vsub">Work rights on the SRRV</h3>
          <p className="vb">The SRRV grants residency, not an automatic right to work for Philippine employers. To take formal local employment you typically need a separate Alien Employment Permit from DOLE. However SRRV holders are exempt from the 9(g) employment visa that most working foreigners need. Running your own business as an owner or investor is generally permitted within Philippine foreign ownership rules.</p>
        </div>
      </section>

      {/* ── SECTION 4: 13A ── */}
      <section className="section section-dark" id="13a">
        <div className="section-inner">
          <p className="section-label">Spousal Visa</p>
          <h2 className="section-heading section-heading-light">The 13A — For Foreign Spouses of Filipino Citizens</h2>

          <p className="vb vb-light">The 13A is the Non-Quota Immigrant Visa by Marriage — the pathway to permanent residency for foreign nationals legally married to Filipino citizens. It derives from Section 13(a) of the Philippine Immigration Act of 1940 and is administered entirely by the Bureau of Immigration, not the PRA.</p>

          <h3 className="vsub vsub-first vsub-light">Who qualifies</h3>
          <ul className="vlist">
            <li className="vli vli-light">Legally married to a Filipino citizen — the marriage must be valid under Philippine law. If married abroad, the marriage must be registered with PSA.</li>
            <li className="vli vli-light">Your Filipino spouse must reside in the Philippines.</li>
            <li className="vli vli-light">Clean criminal record — confirmed via NBI clearance and apostilled police clearance from home country.</li>
            <li className="vli vli-light">Your country must have diplomatic relations with the Philippines and grant reciprocal immigration privileges to Filipinos — applies to nearly all Western nations.</li>
            <li className="vli vli-light">Free from communicable diseases — medical clearance required.</li>
            <li className="vli vli-light">No prior immigration violations in the Philippines.</li>
          </ul>

          <h3 className="vsub vsub-light">The two-stage process</h3>
          <div className="stage-list">
            <div className="stage-card">
              <div className="stage-num">1</div>
              <div className="stage-body">
                <p className="stage-title">Stage 1 — Probationary 13A (1 year)</p>
                <p className="stage-text">Issued after initial application, biometrics, and interview at the Bureau of Immigration. BI evaluates the genuine nature of the marriage during this year. Documents required: joint letter of request from both spouses, CGAF application form, PSA marriage certificate, PSA birth certificate of Filipino spouse, valid Philippine passport of Filipino spouse, NBI clearance (if in Philippines more than 6 months), apostilled police clearance from home country, medical clearance from BI-accredited physician, passport photos, and payment of fees. Processing time typically 2 to 3 months from complete submission.</p>
              </div>
            </div>
            <div className="stage-card">
              <div className="stage-num">2</div>
              <div className="stage-body">
                <p className="stage-title">Stage 2 — Permanent 13A (no expiry)</p>
                <p className="stage-text">Applied for before the probationary visa expires — as early as 3 months before expiration. Once granted it does not expire as long as the marriage remains valid. You receive your ACR I-Card as a permanent 13A holder. Total fees typically range from 20,000 to 50,000 pesos or more depending on processing speed and which BI office processes your application.</p>
              </div>
            </div>
          </div>

          <h3 className="vsub vsub-light">Benefits of the 13A</h3>
          <ul className="vlist">
            <li className="vli vli-light">Permanent residency once Stage 2 is granted — no annual renewals of the visa itself.</li>
            <li className="vli vli-light">Multiple entry and exit without separate permits.</li>
            <li className="vli vli-light">Right to work in the Philippines — exempt from Labor Market Test, though a Certificate of Exclusion from DOLE is still required for formal employment.</li>
            <li className="vli vli-light">Pathway to Philippine citizenship after statutory residency period.</li>
            <li className="vli vli-light">No deposit required unlike the SRRV.</li>
            <li className="vli vli-light">ACR I-Card issued as your identity document.</li>
          </ul>

          <div className="va-warning">
            <p className="va-warning-label">⚠ Important Caveat</p>
            <p className="va-warning-body">The 13A is tied to your marriage. If the marriage is legally dissolved through annulment or if your Filipino spouse passes away, your 13A status is affected. For this reason some couples pursue the SRRV as an independent backup visa once it becomes financially feasible.</p>
          </div>

          <h3 className="vsub vsub-light">Work rights on the 13A</h3>
          <p className="vb vb-light">The 13A grants the right to work in the Philippines with fewer requirements than most other foreign workers face. You are exempt from the Labor Market Test. However you must obtain a Certificate of Exclusion from DOLE before beginning formal employment. You can own and operate a business subject to Philippine foreign investment laws. Certain licensed professions such as medicine and law are generally reserved for Filipino citizens.</p>

          <div className="va-gold" style={{marginTop:'40px'}}>
            <p className="va-gold-label">ACRO Police Certificate — What British Applicants Need to Know</p>
            <p className="va-gold-body-light">British nationals applying for the 13A visa need an ACRO criminal records certificate — issued by ACRO Criminal Records Office — rather than a standard DBS check. The ACRO certificate covers the applicant&rsquo;s full criminal record history and is the document Philippine immigration accepts for UK nationals.</p>
          </div>

          <h3 className="vsub vsub-light">ACRO Certificate Validity</h3>
          <p className="vb vb-light">The Bureau of Immigration does not publish a definitive validity period for the ACRO certificate. In practice, 6 months from the date of issue is most commonly accepted. Some BI offices have accepted certificates up to 12 months old. The safest approach is to get your ACRO as close to your planned submission date as possible — and to call your specific BI office directly to confirm their current accepted validity period before applying, as requirements vary between offices.</p>

          <h3 className="vsub vsub-light">Processing Time</h3>
          <p className="vb vb-light">ACRO standard service takes 10 to 20 working days from submission. An enhanced service is available for faster processing. Add 4 to 6 weeks for FCDO apostille after the ACRO certificate is issued — the Philippines requires the apostille to authenticate the document. Total timeline from application to apostilled certificate ready for submission: plan for 8 to 10 weeks minimum. Do not leave this to the last minute.</p>

          <h3 className="vsub vsub-light">Where to Apply</h3>
          <p className="vb vb-light">Online at acro.police.uk. The certificate is issued digitally. You then send it to the FCDO for apostille — this can be done by post or through an apostille agent.</p>

          <div className="va-amber">
            <p className="va-amber-label">Other Nationalities — Equivalent Documents</p>
            <p className="va-amber-body">For 13A applicants from other countries, the equivalent document is the FBI Identification Record for Americans, the RCMP criminal record check for Canadians, the Australian National Police Check for Australians, and the equivalent national police authority certificate for other nationalities. All must be apostilled by the relevant national authority before submission to Philippine immigration.</p>
          </div>

          <div id="13a-exit-requirements">
            <h3 className="vsub vsub-light">13A Exit Requirements — ECC-B and What You Need to Know Before You Fly</h3>
            <p className="vb vb-light">One of the most commonly misunderstood aspects of the 13A visa is the exit clearance requirement. Many expats describe the 13A as completely hassle-free for travel — this is true for permanent holders but requires more nuance for probationary holders.</p>

            <div className="va-gold" style={{marginTop:'24px'}}>
              <p className="va-gold-label">ECC-B — Who Needs It and What It Is</p>
              <p className="va-gold-body-light">The ECC-B — Emigration Clearance Certificate Type B — is required for all holders of immigrant and non-immigrant visas with valid ACR I-Cards who are leaving the Philippines temporarily. This includes BOTH probationary and permanent 13A holders.</p>
              <p className="va-gold-body-light" style={{marginTop:'10px'}}><strong>What the ECC-B actually is:</strong> It serves simultaneously as your exit clearance and your Special Return Certificate — essentially your re-entry permit in one document. It is valid for one year from issuance and is single-use. Cost is approximately 2,800 pesos payable at the BI or at the airport.</p>
            </div>

            <p className="vb vb-light" style={{marginTop:'28px', marginBottom:'12px', fontWeight:500, color:'rgba(248,246,241,0.9)'}}>The key difference between probationary and permanent 13A:</p>

            <div className="scenario-grid" style={{marginTop:'0'}}>
              <div className="scenario-card">
                <div className="scenario-q">Probationary 13A Exit Requirements</div>
                <div className="scenario-a">ECC-B required before departure. Must be obtained in advance at a BI office — cannot always be processed at the airport on the day of departure during probationary status. Apply at least 3 to 5 working days before your flight — do not leave this to the last minute. Annual Report must be current — outstanding Annual Report will flag at departure and can prevent issuance of ECC-B. Important: If you leave the Philippines while your probationary 13A application is still pending without first obtaining a BI-issued Re-entry Permit, you abandon the petition and must start over.</div>
              </div>
              <div className="scenario-card">
                <div className="scenario-q">Permanent 13A Exit Requirements</div>
                <div className="scenario-a">ECC-B still required but the process is significantly simpler. Can be processed at the airport on the day of departure at NAIA or Cebu-Mactan international terminals. Also available 24 hours a day 7 days a week via the BI e-Services portal at bi.gov.ph. Annual Report must be current — ensure your Annual Report is completed at least 72 hours before your flight to avoid system delays at the airport cashier. Carry your ACR I-Card and passport together — have both ready at the immigration counter. Bring a hard copy of your latest Annual Report official receipt — immigration officers sometimes ask for it even though your ACR I-Card chip shows compliance.</div>
              </div>
            </div>

            <h3 className="vsub vsub-light">Practical Tips</h3>
            <ul className="vlist">
              <li className="vli vli-light">Never leave for an international trip on the day your ECC-B expires — the one-year validity catches people off guard.</li>
              <li className="vli vli-light">If your Annual Report is overdue sort it immediately — an outstanding Annual Report is the single most common reason for departure complications even for permanent 13A holders.</li>
              <li className="vli vli-light">For your very first international departure after receiving 13A status — whether probationary or permanent — verify current requirements with BI or your immigration attorney before booking. Requirements occasionally change and your first departure is not the time to discover a procedural change.</li>
              <li className="vli vli-light">Keep a physical binder with your ACR I-Card photocopy, latest Annual Report official receipt, and passport copies — BI loves paper trails and having these ready prevents delays.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION: MINOR CHILDREN ── */}
      <section className="section section-light" id="minor-children">
        <div className="section-inner">
          <p className="section-label">Foreign National Families</p>
          <h2 className="section-heading">Foreign National Minor Children in the Philippines — Guardian Authorization</h2>

          <p className="vb">If you have a foreign national child living in the Philippines — whether temporarily with grandparents, extended family, or any guardian while parents are abroad — Philippine immigration law requires specific documentation to protect that child and protect the guardian. This is a common situation for binational families and one that catches many people off guard.</p>

          <h3 className="vsub vsub-first">Visa Requirements for Foreign National Children</h3>
          <p className="vb">A US citizen or other Western national child entering the Philippines is treated as a foreign national. They receive the same visa-free entry as their nationality allows — typically 30 days for most Western passports, 59 days for US passports. If the child will stay beyond the initial visa-free period, extensions must be processed at the Bureau of Immigration the same as for any adult foreign national — approximately 5,000 pesos per extension. ACR I-Card is required after 59 days of continuous stay.</p>

          <h3 className="vsub">Dual Citizenship as the Cleanest Solution</h3>
          <p className="vb">If the child has Filipino heritage through a Filipino parent or grandparent, pursuing dual citizenship through RA 9225 is the most practical long-term solution for a child living in the Philippines. A child with Philippine citizenship can live in the Philippines indefinitely with no visa fees, no extensions, and no BI visits. Consult a Philippine immigration attorney and the Philippine Embassy in your country of residence about the child&rsquo;s eligibility.</p>

          <div className="va-gold" style={{border:'2px solid #C9A84C', background:'rgba(201,168,76,0.08)'}}>
            <p className="va-gold-label">Guardian Authorization — Essential Documentation</p>
            <p className="va-gold-body">Any foreign national child living in the Philippines with someone other than their legal parent requires a properly executed guardian authorization. Without this documentation the guardian has no legal authority to make decisions for the child in the Philippines including medical decisions, school enrollment, and government transactions.</p>
            <p className="va-gold-body" style={{marginTop:'12px'}}>The guardian authorization must be:</p>
            <ul className="vlist" style={{marginTop:'8px'}}>
              <li className="vli">Notarized in the country where the parent is signing.</li>
              <li className="vli">Apostilled by the appropriate national authority — for US parents this means the Secretary of State of the state where the document is notarized.</li>
              <li className="vli">Translated to English if not originally in English.</li>
            </ul>
            <p className="va-gold-body" style={{marginTop:'12px'}}>The document should explicitly authorize the named guardian to: make medical decisions, enroll the child in school, sign government documents on behalf of the child, and authorize international travel if applicable.</p>
          </div>

          <h3 className="vsub">Travel Authorization for Minors</h3>
          <p className="vb">A foreign national child traveling to or from the Philippines without both parents present may be questioned at immigration. Philippine immigration officers are trained to watch for child trafficking and unaccompanied or irregularly accompanied minors receive extra scrutiny. If a child is traveling with only one parent or with a guardian the following documentation is strongly recommended:</p>
          <ul className="vlist">
            <li className="vli">Notarized apostilled letter from the absent parent authorizing travel.</li>
            <li className="vli">Copy of the child&rsquo;s birth certificate showing both parents.</li>
            <li className="vli">Copy of the guardian&rsquo;s identification.</li>
            <li className="vli">If the sole-traveling parent has sole custody, a copy of the custody order.</li>
          </ul>

          <div className="va-amber">
            <p className="va-amber-label">Consult a Philippine Immigration Attorney</p>
            <p className="va-amber-body">Consult a Philippine immigration attorney for any complex family situation involving foreign national children living in the Philippines long-term. The rules are specific and the consequences of getting documentation wrong can significantly affect the child&rsquo;s legal status and the guardian&rsquo;s ability to care for them.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: DIGITAL NOMAD VISA ── */}
      <section className="section section-light" id="digital-nomad">
        <div className="section-inner">
          <p className="section-label">Digital Nomad Visa</p>
          <h2 className="section-heading">The Digital Nomad Visa — New in 2025</h2>

          <div className="va-blue">
            <p className="va-blue-label">New Visa — Executive Order No. 86 — April 2025</p>
            <p className="va-blue-body">The Philippines launched its Digital Nomad Visa under Executive Order No. 86, signed in April 2025. This is a dedicated visa pathway for foreign nationals who work remotely for employers or clients outside the Philippines.</p>
          </div>

          <h3 className="vsub vsub-first">Who it is for</h3>
          <p className="vb">Remote workers, freelancers, and business owners who work exclusively for non-Philippine employers or clients and want to live in the Philippines legally for an extended period without the monthly visa extension routine.</p>

          <h3 className="vsub">Key terms</h3>
          <ul className="vlist">
            <li className="vli">Valid for 12 months, renewable for an additional 12 months — maximum 2 years total.</li>
            <li className="vli">Multiple entry.</li>
            <li className="vli">No Philippine income tax on foreign-sourced income — you pay taxes only in your home country.</li>
            <li className="vli">Cannot work for Philippine employers or clients.</li>
          </ul>

          <h3 className="vsub">Income requirement and documents</h3>
          <ul className="vlist">
            <li className="vli">Minimum $24,000 USD per year — approximately $2,000 per month — from remote work or freelancing outside the Philippines.</li>
            <li className="vli">3 to 6 months of bank statements.</li>
            <li className="vli">Employment contracts or freelance agreements.</li>
            <li className="vli">Valid passport with at least 6 months validity.</li>
            <li className="vli">Valid health insurance covering the duration of the stay.</li>
            <li className="vli">Clean criminal record — apostilled police clearance from home country.</li>
            <li className="vli">Reciprocity requirement — your country must offer a similar digital nomad visa to Filipino citizens.</li>
          </ul>

          <div className="va-amber">
            <p className="va-amber-label">⚠ Verify Before Applying</p>
            <p className="va-amber-body">As of June 2026 some implementation details are still being finalized. No official list of qualifying countries has been published as of this writing. Verify current requirements directly with the Bureau of Immigration or Department of Foreign Affairs before preparing documents. Do not rely on third-party sites for the current income threshold or application process. Processing time when complete documents are submitted is approximately 2 to 3 weeks.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: ANNUAL REPORT ── */}
      <section className="section section-dark" id="annual-report">
        <div className="section-inner">
          <p className="section-label">ACR I-Card Holders</p>
          <h2 className="section-heading section-heading-light">The Annual Report — What ACR I-Card Holders Must Know</h2>

          <p className="vb vb-light">Every foreign national holding an ACR I-Card — including tourist visa extenders who have passed 59 days and 13A visa holders — must file the Bureau of Immigration Annual Report between January 1 and the last day of February each year. Missing this deadline results in fines.</p>

          <h3 className="vsub vsub-first vsub-light">Who must file</h3>
          <p className="vb vb-light">Any foreigner holding an ACR I-Card who was in the Philippines at any point during the previous year.</p>

          <h3 className="vsub vsub-light">Who is exempt</h3>
          <ul className="vlist">
            <li className="vli vli-light">SRRV holders — they deal with the PRA for annual compliance, not the BI.</li>
            <li className="vli vli-light">Short-stay tourists under 59 days with no ACR I-Card.</li>
          </ul>

          <h3 className="vsub vsub-light">How to file</h3>
          <p className="vb vb-light">As of 2025/2026 the BI has moved toward an online appointment system for the Annual Report. Check the BI e-Services portal at bi.gov.ph before going in person. Do not just walk in — appointments may be required depending on the BI office. Keep all official receipts. In the Philippines the receipt is often more important than the stamp for proving you have paid your fees.</p>

          <h3 className="vsub vsub-light">Late filing penalties</h3>
          <p className="vb vb-light">Fines apply for missing the deadline. If your stay is less than 6 months past the deadline, you pay the monthly fine plus express lane fees. Over 6 months requires filing a Motion for Reconsideration. Over 12 months puts you at risk of being labeled an Undesirable Alien. Do not let this lapse.</p>
        </div>
      </section>

      {/* ── SECTION 7: EXIT CLEARANCE ── */}
      <section className="section section-light" id="exit-clearance">
        <div className="section-inner">
          <p className="section-label">Departing the Philippines</p>
          <h2 className="section-heading">Exit Clearance Certificate — When You Need One</h2>

          <p className="vb">An Exit Clearance Certificate (ECC) is required from the Bureau of Immigration when certain categories of foreign nationals depart the Philippines after an extended stay.</p>

          <h3 className="vsub vsub-first">Who needs an ECC</h3>
          <ul className="vlist">
            <li className="vli">Foreign nationals who have stayed in the Philippines for more than 6 months on a tourist visa extension and hold an ACR I-Card.</li>
            <li className="vli">13A visa holders in certain situations.</li>
          </ul>

          <h3 className="vsub">Who does NOT need an ECC</h3>
          <ul className="vlist">
            <li className="vli">SRRV holders — this is one of the key exemptions of the SRRV program.</li>
            <li className="vli">Short-stay tourists who have not exceeded 6 months.</li>
          </ul>

          <h3 className="vsub">Practical note</h3>
          <p className="vb">Cost is approximately 500 to 1,000 pesos depending on your visa category and length of stay. Apply at the Bureau of Immigration main office or satellite offices before your intended departure — allow at least a week before flying. Do not show up at the airport and discover you need one that day.</p>
        </div>
      </section>

      {/* ── SECTION 8: WHICH IS RIGHT FOR YOU ── */}
      <section className="section section-dark" id="comparison">
        <div className="section-inner">
          <p className="section-label">Visa Comparison</p>
          <h2 className="section-heading section-heading-light">Which Visa Is Right For You?</h2>
          <div className="scenario-grid">
            <div className="scenario-card">
              <div className="scenario-q">I am visiting the Philippines and may stay long term.</div>
              <div className="scenario-a">Start on tourist visa extension. Convert to SRRV or 13A when your situation is clear. No need to commit immediately.</div>
            </div>
            <div className="scenario-card">
              <div className="scenario-q">I am married to a Filipino citizen and plan to live here.</div>
              <div className="scenario-a">The 13A is your best option. No deposit required. Apply as soon as your marriage is registered with PSA.</div>
            </div>
            <div className="scenario-card">
              <div className="scenario-q">I am 40 or older and want permanent residency independent of any relationship.</div>
              <div className="scenario-a">The SRRV is designed for you. Requires a deposit but grants complete independence from any marital status and exempts you from BI annual reports and exit clearances.</div>
            </div>
            <div className="scenario-card">
              <div className="scenario-q">I work remotely for a foreign employer and want to live here legally.</div>
              <div className="scenario-a">The Digital Nomad Visa is now available. Requires $24,000/year income and a qualifying citizenship. Verify current reciprocity requirements before applying.</div>
            </div>
            <div className="scenario-card">
              <div className="scenario-q">I am here on business and do not plan to stay long term.</div>
              <div className="scenario-a">Tourist visa extension is appropriate for stays up to 36 months. File Annual Report each January if you acquire an ACR I-Card.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEVE'S NOTE ── */}
      <section className="sn-section">
        <div className="sn-inner">
          <div className="sn-header">
            <div className="sn-monogram">S</div>
            <div>
              <p className="sn-name">Steve&rsquo;s Note</p>
              <p className="sn-tag">My personal immigration experience · Cebu, Philippines</p>
            </div>
          </div>
          <div className="sn-rule" />
          <div className="sn-body">
            <p>I have been living in the Philippines on tourist visa extensions while my wife Irish and I go through the CR-1 spousal visa process for her to eventually have the ability to visit the US. The monthly extension routine is straightforward once you know the system — but the costs surprised me when I first arrived. What you see on the BI website and what you pay at the counter are two different numbers. The automatic expedited fee adds up.</p>
            <p>If you are staying long term and qualify for the SRRV, the math often favors converting away from tourist extensions — the monthly cost adds up faster than most people realize, and the SRRV exemptions from annual reports and exit clearances are genuinely valuable.</p>
            <p>Irish and I are also working through the 13A process — I will document the real costs and timeline as we go through it ourselves.</p>
          </div>
          <p className="sn-verified">Last Updated: June 2026 · Cebu, Philippines</p>
        </div>
      </section>

      {/* ── CRIMINAL RECORDS ── */}
      <section className="section section-light" id="criminal-records">
        <div className="section-inner">
          <p className="section-label">Admissibility</p>
          <h2 className="section-heading">Criminal Records and Philippine Visa Admissibility</h2>
          <p className="vb">A criminal record does not automatically bar you from living in the Philippines, but certain offenses receive significant scrutiny and some may result in denial of entry or visa refusal.</p>

          <h3 className="vsub vsub-first">What Philippine Immigration Checks</h3>
          <ul className="vlist">
            <li className="vli">All long-stay visa applicants must provide an NBI clearance if they have been in the Philippines for more than 6 months.</li>
            <li className="vli">An apostilled police clearance certificate from their home country.</li>
            <li className="vli">Police clearance from every country where they have lived for 12 months or more.</li>
          </ul>

          <h3 className="vsub">Drug Offenses — Highest Scrutiny</h3>
          <div className="va-warning">
            <p className="va-warning-label">⚠ Drug Offenses — Consult an Attorney</p>
            <p className="va-warning-body">The Philippines takes drug-related offenses extremely seriously. Any conviction related to drug possession, trafficking, or supply — regardless of how long ago or whether the sentence was suspended — will receive heavy scrutiny from Philippine immigration. Suspended sentences, spent convictions, and expunged records in your home country do not automatically resolve the issue in Philippine immigration proceedings. Consult a licensed Philippine immigration attorney before applying for any long-stay visa if you have any drug-related record. Do not attempt to conceal drug offenses — concealment is treated far more seriously than disclosure.</p>
          </div>

          <h3 className="vsub">Violent Offenses</h3>
          <p className="vb">Assault, domestic violence, and similar convictions raise concerns particularly given Philippine laws like RA 9262. Disclose fully and consult an attorney. Each case is evaluated individually.</p>

          <h3 className="vsub">Fraud and Financial Crimes</h3>
          <p className="vb">Generally less problematic than drug or violent offenses but still require honest disclosure.</p>

          <h3 className="vsub">Minor Offenses</h3>
          <p className="vb">Minor traffic violations, small misdemeanors resulting in fines only, and offenses from decades ago are typically not problematic. Disclose honestly and let the process work.</p>

          <div className="va-amber">
            <p className="va-amber-label">Spent Convictions — Important Note</p>
            <p className="va-amber-body">The Philippines does not automatically recognize spent conviction legislation from other countries. Confirm with a licensed Philippine immigration attorney before assuming your spent record is irrelevant.</p>
          </div>

          <div className="va-gold">
            <p className="va-gold-label">The Universal Rule</p>
            <p className="va-gold-body">Always disclose honestly. Misrepresentation on immigration documents is grounds for permanent exclusion. With honest disclosure and proper legal guidance, many people with historic records successfully obtain Philippine visas.</p>
          </div>
        </div>
      </section>

      {/* ── RA 9225 ── */}
      <section className="section section-dark" id="ra9225">
        <div className="section-inner">
          <p className="section-label">Dual Citizenship</p>
          <h2 className="section-heading section-heading-light">RA 9225 — Reclaiming Philippine Citizenship for Former Filipinos</h2>
          <p className="vb vb-light">Republic Act 9225, the Citizenship Retention and Re-acquisition Act of 2003, allows natural-born Filipino citizens who became naturalized citizens of another country to reclaim their Philippine citizenship. Application fee is $50 USD. Processing typically takes 2 to 6 weeks depending on the embassy — some offer same-day oath-taking.</p>

          <h3 className="vsub vsub-first vsub-light">Who Qualifies</h3>
          <p className="vb vb-light">Natural-born Filipino citizens who lost Philippine citizenship through naturalization in another country. Does NOT apply to people who were never Filipino citizens or those born as dual citizens.</p>

          <h3 className="vsub vsub-light">Benefits</h3>
          <ul className="vlist">
            <li className="vli vli-light">Full Philippine citizenship alongside your foreign citizenship — you do not give up your American, Canadian, or other citizenship.</li>
            <li className="vli vli-light">Right to own land in the Philippines — the single most significant practical benefit, since foreigners are prohibited from land ownership.</li>
            <li className="vli vli-light">Right to live and work in the Philippines without any visa requirements.</li>
            <li className="vli vli-light">Access to PhilHealth and SSS as a citizen.</li>
            <li className="vli vli-light">Ability to apply for a Philippine passport.</li>
            <li className="vli vli-light">Derivative citizenship — unmarried children under 18 can be included for approximately $25 per child additional fee.</li>
          </ul>

          <h3 className="vsub vsub-light">How to Apply</h3>
          <p className="vb vb-light">Apply at the nearest Philippine Embassy or Consulate in your country of residence. Required documents: PSA birth certificate on security paper, foreign naturalization certificate, valid foreign passport, and two 2x2 passport photos with white background. Personal appearance is required for the Oath of Allegiance before a Philippine Consular Officer. After approval you receive an Identification Certificate confirming Philippine citizenship.</p>

          <div className="va-gold">
            <p className="va-gold-label">Planning Note — Start Early</p>
            <p className="va-gold-body-light">The PSA birth certificate is the most common delay. Request it through PSA Serbilis or your nearest Philippine Embassy well in advance — it can take weeks to months to arrive. Start the RA 9225 process while still in your home country if possible.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION: TEI ── */}
      <section className="section section-light" id="tei">
        <div className="section-inner">
          <p className="section-label">SRRV Benefit</p>
          <h2 className="section-heading">TEI — Tax Exemption Indorsement for SRRV Holders Importing Goods</h2>
          <p className="vb">SRRV holders are entitled to a one-time customs duty exemption on household goods and personal effects worth up to $7,000 USD — one of the most valuable but least understood benefits of the SRRV program. To claim this exemption you need a Tax Exemption Indorsement (TEI) from the Department of Finance Revenue Office. This must be applied for within 90 days of your SRRV visa issuance.</p>

          <h3 className="vsub vsub-first">The TEI Process — Practical Notes</h3>
          <ul className="vlist">
            <li className="vli">Apply at the Department of Finance Revenue Office in Manila — there is no satellite office for this process. If you are based in Cebu or another city you will need to either travel to Manila or engage a Manila-based representative or attorney to handle the filing.</li>
            <li className="vli">Processing typically takes 3 to 7 working days from the date of complete submission. Same-day processing is not available. Call the DOF Revenue Office before going to confirm current document requirements as these have changed periodically.</li>
            <li className="vli">Bring complete documents — incomplete submissions restart the clock. Required documents typically include your SRRV certificate, passport, PRA ID, itemized list of goods to be imported, and the commercial invoice or packing list for your shipment.</li>
            <li className="vli">The exemption applies to personal household goods and effects — not commercial goods or vehicles.</li>
          </ul>

          <div className="va-gold">
            <p className="va-gold-label">Worth Knowing Before You Move</p>
            <p className="va-gold-body">If you do not plan to import a container of household goods the TEI may not be relevant to you. As discussed in the Moving to Philippines section, most expats find it more cost-effective to buy furniture and appliances locally rather than ship from home. However if you have valuable personal effects worth shipping — art, specific furniture, collectibles — the TEI can save you significant customs duties on goods up to $7,000 USD in declared value.</p>
          </div>
        </div>
      </section>

      {/* ── US PASSPORT RENEWAL ── */}
      <section className="section section-dark" id="passport-renewal">
        <div className="section-inner">
          <p className="section-label">US Citizens</p>
          <h2 className="section-heading section-heading-light">US Passport Renewal and Services from the Philippines</h2>
          <p className="vb vb-light">US passport renewal from the Philippines is straightforward but requires understanding the process — which has changed significantly from the old mail-in-without-appointment approach some expats remember.</p>

          <h3 className="vsub vsub-first vsub-light">Mail-In Renewal — DS-82</h3>
          <div className="va-gold">
            <p className="va-gold-label">Most Renewals Qualify for Mail-In</p>
            <p className="va-gold-body-light">You can renew by mail if: you are at least 16 years old, your current passport was issued when you were 16 or older, it was issued less than 15 years ago, it had a 10-year validity, and you have a valid mailing address in the Philippines. Complete Form DS-82 online at travel.state.gov — it must be printed with the barcode in the upper left corner. Do not fill it out by hand. Mail your completed DS-82, current passport, one 2x2 inch photo on white background, and payment confirmation from pay.gov to: Passport Team, American Citizens Services, Consular Section, US Embassy, 1201 Roxas Boulevard, Ermita, Manila, 1000. Use DHL, FedEx, or another trackable courier — do not use Philippine postal mail for your passport. Wait until your tracking shows delivered before inquiring with the Embassy. Processing time: approximately 4 to 6 weeks. Your cancelled old passport is returned with your new one.</p>
          </div>

          <h3 className="vsub vsub-light">In Person Renewal — DS-11</h3>
          <div className="va-amber">
            <p className="va-amber-label">Walk-In Services Are NOT Available — Appointment Required</p>
            <p className="va-amber-body">Walk-in services are not available. Each individual requires an appointment. Do not show up without one. No exceptions. Schedule appointments online through the Embassy portal at ph.usembassy.gov. Cell phones and other electronic devices are prohibited inside the Embassy — do not bring them to your appointment. Arrive 15 to 30 minutes before your scheduled appointment with printed color photos, originals and photocopies of all required documents, and proof of payment from pay.gov. The fee must be paid online before your appointment. DS-11 is required for first-time applicants and lost or stolen passports.</p>
          </div>

          <h3 className="vsub vsub-light">Cebu-Based Americans — Use the Consular Agency</h3>
          <p className="vb vb-light">The US Consular Agency in Cebu handles passport and notarial services for Americans living in Cebu and the Visayas — you do not need to travel to Manila for routine services. Located in Waterfront Hotel, Lahug, Cebu City. Schedule Cebu appointments through the Embassy appointment scheduling system at ph.usembassy.gov — Cebu appointments are booked separately from Manila appointments.</p>

          <h3 className="vsub vsub-light">Emergency Passport</h3>
          <p className="vb vb-light">If you have confirmed travel within the next two weeks email ACSInfoManila@state.gov with &ldquo;Emergency Passport&rdquo; in the subject line. Do not call — email is the correct channel.</p>

          <div className="va-warning">
            <p className="va-warning-label">⚠ Timing Around Visa Extensions</p>
            <p className="va-warning-body">While your passport is being processed by the Embassy you will have limited ability to complete BI transactions that require your passport. Time your passport renewal to avoid overlapping with your visa extension deadline. Complete your BI extension first, then submit passport renewal, or ensure your current extension gives you enough time for the 4 to 6 week processing window.</p>
          </div>

          <h3 className="vsub vsub-light">Notarial Services</h3>
          <p className="vb vb-light">US notarial services — for authenticating US documents — are available at both the Manila Embassy and the Cebu Consular Agency by appointment only. Fee is $50 USD per notarial signature. Documents must be of US origin or intended for use in the United States. Only one appointment needed for multiple documents in the same session.</p>

          <div className="va-gold">
            <p className="va-gold-label">Contact Information</p>
            <p className="va-gold-body-light">Email ACSInfoManila@state.gov for Manila Embassy services or ACSInfoCebu@state.gov for the Cebu Consular Agency. Official website: ph.usembassy.gov. All scheduling is done online through the Embassy portal.</p>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section className="legal-section">
        <div className="legal-inner">
          <div>
            <div className="legal-icon">!</div>
            <p className="section-label">Important note</p>
            <h2 className="section-heading" style={{fontSize: '1.2rem', marginBottom: '8px'}}>Verify before you act.</h2>
          </div>
          <p className="legal-body">
            <strong>Immigration rules, fees, and requirements change regularly and without notice.</strong> The information on this page reflects conditions as of June 2026 and is for general informational purposes only. Always verify current requirements directly with the Bureau of Immigration at <strong>immigration.gov.ph</strong> or the Philippine Retirement Authority at <strong>pra.gov.ph</strong> before making immigration decisions.
            <br /><br />
            Consider consulting a licensed Philippine immigration attorney or PRA-accredited consultant for complex situations. Expat Compass PH is not a law firm and does not provide legal advice. Nothing on this site constitutes a legal opinion or creates an attorney-client relationship.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

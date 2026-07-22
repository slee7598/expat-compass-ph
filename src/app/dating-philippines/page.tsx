import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dating in the Philippines — The Honest Guide for Foreign Men 2026",
  description:
    "The most comprehensive and honest guide to dating in the Philippines for foreign men. Dating apps, cultural guide, scam operations, legal risks, transgender community, and sexual health. Written by an American expat and his Filipina wife.",
  alternates: { canonical: "https://expatcompassph.com/dating-philippines" },
};

export default function DatingPhilippinesPage() {
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
        .page-sub { font-size: 1.05rem; font-weight: 300; line-height: 1.65; color: #F8F6F1; max-width: 600px; }

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
        .section-heading { font-family: 'Playfair Display', serif; font-size: clamp(1.7rem, 3vw, 2.4rem); font-weight: 700; line-height: 1.2; color: #0B1F3A; margin-bottom: 36px; max-width: 720px; }
        .section-heading-light { color: #F8F6F1; }

        /* ── BODY TEXT ── */
        .rb-body { font-size: 0.93rem; font-weight: 300; line-height: 1.85; color: #4A5868; margin-bottom: 16px; max-width: 760px; }
        .rb-body-light { color: #F8F6F1; }
        .rb-sub { font-family: 'Playfair Display', serif; font-size: clamp(1.05rem, 1.8vw, 1.28rem); font-weight: 700; line-height: 1.25; color: #0B1F3A; margin: 40px 0 14px; padding-top: 36px; border-top: 1px solid rgba(11,31,58,0.08); }
        .rb-sub-first { border-top: none; padding-top: 0; margin-top: 0; }
        .rb-sub-light { color: #F8F6F1; border-top-color: rgba(248,246,241,0.1); }

        /* ── OPENING CARD ── */
        .opening-card { background: #0B1F3A; padding: 48px; max-width: 900px; border-left: 4px solid #C9A84C; margin: 0 48px 0; }
        .opening-card-text { font-size: 0.95rem; font-weight: 300; line-height: 1.9; color: rgba(248,246,241,0.82); }

        /* ── APP CARDS ── */
        .app-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1px; background: #E8E4DC; border: 1px solid #E8E4DC; margin: 32px 0; max-width: 820px; }
        .app-card { background: #fff; padding: 28px 26px; }
        .app-name { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: #0B1F3A; margin-bottom: 6px; }
        .app-tag { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #C9A84C; margin-bottom: 12px; }
        .app-desc { font-size: 0.85rem; font-weight: 300; line-height: 1.7; color: #5C6B7A; }
        .app-note { font-size: 0.8rem; font-weight: 400; color: #888; font-style: italic; margin-top: 8px; }

        /* ── LISTS ── */
        .rb-list { list-style: none; margin: 12px 0 20px; display: flex; flex-direction: column; gap: 9px; max-width: 760px; }
        .rb-li { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #4A5868; padding-left: 22px; position: relative; }
        .rb-li::before { content: '—'; position: absolute; left: 0; color: #C9A84C; font-weight: 600; }
        .rb-li-light { color: #F8F6F1; }

        /* ── ALERT BOXES ── */
        .rb-warning { background: rgba(235,87,87,0.06); border: 1px solid rgba(235,87,87,0.25); border-left: 4px solid #EB5757; padding: 26px 28px; margin: 28px 0; max-width: 760px; }
        .rb-warning-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #EB5757; margin-bottom: 10px; }
        .rb-warning-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #1A1A1A; }
        .rb-warning-body-light { color: #1A1A1A; }

        .rb-amber { background: rgba(242,153,74,0.07); border: 1px solid rgba(242,153,74,0.3); border-left: 4px solid #F2994A; padding: 26px 28px; margin: 28px 0; max-width: 760px; }
        .rb-amber-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #F2994A; margin-bottom: 10px; }
        .rb-amber-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #1A1A1A; }
        .rb-amber-body-light { color: #1A1A1A; }

        .rb-alert { background: rgba(201,168,76,0.06); border: 1px solid rgba(201,168,76,0.3); border-left: 4px solid #C9A84C; padding: 26px 28px; margin: 28px 0; max-width: 760px; }
        .rb-alert-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
        .rb-alert-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #1A1A1A; }
        .rb-alert-body-dark { color: #1A1A1A; }

        .rb-info { background: rgba(41,121,255,0.05); border: 1px solid rgba(41,121,255,0.2); border-left: 4px solid #2979FF; padding: 26px 28px; margin: 28px 0; max-width: 760px; }
        .rb-info-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #2979FF; margin-bottom: 10px; }
        .rb-info-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #1A1A1A; }

        .rb-green { background: rgba(111,207,151,0.06); border: 1px solid rgba(111,207,151,0.25); border-left: 4px solid #6FCF97; padding: 26px 28px; margin: 28px 0; max-width: 760px; }
        .rb-green-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #27AE60; margin-bottom: 10px; }
        .rb-green-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #1A1A1A; }

        /* ── SCAM CARDS ── */
        .scam-grid { display: flex; flex-direction: column; gap: 16px; max-width: 760px; margin: 24px 0; }
        .scam-card { border: 1px solid rgba(235,87,87,0.2); border-left: 4px solid #EB5757; padding: 22px 24px; background: rgba(235,87,87,0.03); }
        .scam-card-name { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #EB5757; margin-bottom: 8px; }
        .scam-card-body { font-size: 0.88rem; font-weight: 300; line-height: 1.75; color: #1A1A1A; }

        /* ── VERIFY CHECKLIST ── */
        .verify-list { list-style: none; display: flex; flex-direction: column; gap: 20px; max-width: 760px; margin: 24px 0; }
        .verify-item { border-left: 3px solid #C9A84C; padding: 16px 20px; background: rgba(201,168,76,0.04); }
        .verify-item-name { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #C9A84C; margin-bottom: 6px; }
        .verify-item-body { font-size: 0.88rem; font-weight: 300; line-height: 1.75; color: #1A1A1A; }

        /* ── FLAGS ── */
        .flag-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; max-width: 860px; }
        .flag-col-label { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; margin-bottom: 20px; }
        .flag-col-label-red { color: #EB5757; }
        .flag-col-label-green { color: #27AE60; }
        .flag-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .flag-item { font-size: 0.88rem; font-weight: 300; line-height: 1.65; color: #4A5868; padding-left: 22px; position: relative; }
        .flag-item-red::before { content: '✕'; position: absolute; left: 0; color: #EB5757; font-weight: 700; font-size: 0.75rem; top: 2px; }
        .flag-item-green::before { content: '✓'; position: absolute; left: 0; color: #27AE60; font-weight: 700; font-size: 0.75rem; top: 2px; }

        /* ── STAT CARDS ── */
        .stat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1px; background: rgba(11,31,58,0.08); border: 1px solid rgba(11,31,58,0.08); margin: 28px 0; max-width: 760px; }
        .stat-card { background: #fff; padding: 26px 22px; }
        .stat-label { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #C9A84C; margin-bottom: 8px; }
        .stat-value { font-family: 'Playfair Display', serif; font-size: clamp(1.1rem, 2vw, 1.5rem); font-weight: 700; color: #0B1F3A; line-height: 1.2; }
        .stat-note { font-size: 0.75rem; font-weight: 300; color: #6B7B8A; margin-top: 5px; line-height: 1.45; }

        /* ── STAT CARDS DARK ── */
        .stat-grid-dark { background: rgba(248,246,241,0.06); border-color: rgba(248,246,241,0.08); }
        .stat-card-dark { background: rgba(248,246,241,0.04); }
        .stat-label-dark { color: #C9A84C; }
        .stat-value-dark { color: #F8F6F1; }
        .stat-note-dark { color: rgba(248,246,241,0.78); }

        /* ── IRISH'S NOTE ── */
        .irish-note { background: #F0E8D0; border: 1px solid rgba(201,168,76,0.4); border-top: 3px solid #C9A84C; padding: 36px 40px; max-width: 700px; margin: 32px 0; }
        .irish-note-header { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
        .irish-monogram { width: 42px; height: 42px; background: #C9A84C; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; color: #0B1F3A; }
        .irish-name { font-family: 'Playfair Display', serif; font-size: 0.98rem; font-weight: 700; color: #0B1F3A; }
        .irish-tag { font-size: 0.62rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(11,31,58,0.5); margin-top: 2px; }
        .irish-body { font-size: 0.9rem; font-weight: 400; line-height: 1.85; color: #3A3020; font-style: italic; }
        .irish-sig { font-size: 0.75rem; font-weight: 600; color: #8B7340; margin-top: 14px; }

        /* ── STEVE & IRISH NOTE ── */
        .sn-section { background: #0D1E30; padding: 88px 48px; border-top: 3px solid #C9A84C; }
        .sn-inner { max-width: 760px; }
        .sn-header { display: flex; align-items: center; gap: 20px; margin-bottom: 28px; }
        .sn-monogram { width: 48px; height: 48px; background: #C9A84C; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 700; color: #0B1F3A; }
        .sn-name { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 700; color: #F8F6F1; }
        .sn-tag { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(201,168,76,0.65); margin-top: 3px; }
        .sn-rule { height: 1px; background: rgba(201,168,76,0.2); margin-bottom: 28px; }
        .sn-body { display: flex; flex-direction: column; gap: 18px; margin-bottom: 28px; }
        .sn-body p { font-size: 0.95rem; font-weight: 300; line-height: 1.88; color: rgba(248,246,241,0.82); }
        .sn-speaker { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #C9A84C; margin-bottom: 6px; }
        .sn-verified { font-size: 0.62rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(201,168,76,0.5); }

        /* ── LEGAL SECTION ── */
        .legal-section { background: #F8F6F1; padding: 56px 48px; border-top: 1px solid #E8E4DC; }
        .legal-inner { max-width: 900px; display: grid; grid-template-columns: 1fr 2fr; gap: 56px; align-items: start; }
        .legal-icon { width: 40px; height: 40px; border: 2px solid rgba(11,31,58,0.18); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.95rem; font-weight: 700; color: rgba(11,31,58,0.45); margin-bottom: 14px; }
        .legal-heading { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; color: #0B1F3A; margin-bottom: 6px; }
        .legal-body { font-size: 0.85rem; font-weight: 300; line-height: 1.85; color: #5C6B7A; }

        /* ── CHECKLIST CARD ── */
        .checklist-card { background: rgba(248,246,241,0.04); border: 1px solid rgba(248,246,241,0.08); padding: 36px 40px; max-width: 760px; margin-top: 8px; }
        .checklist-card-light { background: #fff; border: 1px solid #E8E4DC; }
        .checklist-items { list-style: none; display: flex; flex-direction: column; gap: 12px; counter-reset: chkctr; }
        .checklist-item { font-size: 0.9rem; font-weight: 300; line-height: 1.65; color: #F8F6F1; padding-left: 36px; position: relative; counter-increment: chkctr; }
        .checklist-item::before { content: counter(chkctr); position: absolute; left: 0; top: 0; width: 24px; height: 24px; background: #C9A84C; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 0.75rem; font-weight: 700; color: #0B1F3A; }
        .checklist-item-dark { color: #4A5868; }
        .checklist-head { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C9A84C; margin-bottom: 4px; }

        /* ── JUMP NAV ── */
        .cs-label { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #C9A84C; margin-bottom: 24px; display: flex; align-items: center; gap: 12px; }
        .cs-label::before, .cs-label::after { content: ''; display: block; flex: 1; height: 1px; background: rgba(201,168,76,0.25); }
        .cs-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; }
        .cs-card { display: block; text-decoration: none; background: #0B1F3A; padding: 22px 24px; border: 1px solid rgba(201,168,76,0.15); transition: border-color 0.18s, background 0.18s; cursor: pointer; }
        .cs-card:hover { border-color: #C9A84C; background: rgba(11,31,58,0.92); }
        .cs-city { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: #F8F6F1; display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 6px; }
        .cs-city::after { content: '→'; font-family: 'Inter', sans-serif; font-size: 0.85rem; color: #C9A84C; flex-shrink: 0; transition: transform 0.18s; }
        .cs-card:hover .cs-city::after { transform: translateX(4px); }
        .cs-tagline { font-size: 0.8rem; font-weight: 300; line-height: 1.55; color: #F8F6F1; }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .page-hero, .section, .sn-section, .legal-section { padding-left: 24px; padding-right: 24px; }
          .opening-card { margin: 0 24px; padding: 32px 24px; }
          .flag-grid { grid-template-columns: 1fr; gap: 36px; }
          .legal-inner { grid-template-columns: 1fr; gap: 28px; }
          .stat-grid { grid-template-columns: 1fr 1fr; }
          .app-grid { grid-template-columns: 1fr; }
          .checklist-card { padding: 24px; }
          .irish-note { padding: 28px 24px; }
          .cs-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .stat-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="page-header">
        <Nav active="/dating-philippines" />
        <div className="page-hero">
          <p className="page-eyebrow">Relationships and Dating</p>
          <h1 className="page-title">Dating in the Philippines</h1>
          <p className="page-sub">The honest guide no other expat site will write. Dating apps, cultural realities, scam operations, legal risks, and what you genuinely need to know before you start swiping.</p>
        </div>
      </div>

      {/* OPENING CARD */}
      <div className="opening-card">
        <p className="opening-card-text">This page exists because the questions never stop. Every day in expat Facebook groups and Reddit threads, foreign men ask the same things — which apps work, why she showed up with her entire family, what tampo means, whether she is really separated or just saying that, and how to know if the person they are talking to online is who they say they are. Most sites either ignore these questions entirely or answer them with sanitized advice that helps nobody. This page answers them honestly, from the perspective of a couple who has lived it — an American man who has spent years in the Philippines, and a Filipina woman who knows her own culture from the inside. This is not a guide to exploiting anyone. It is a guide to understanding a culture that is genuinely different from Western culture, navigating it honestly, and building real connections with real people.</p>
      </div>

      {/* ── JUMP NAV ── */}
      <section className="section section-light" style={{paddingTop:'40px', paddingBottom:'48px'}}>
        <div className="section-inner">
          <p className="cs-label">Jump to a Section</p>
          <div className="cs-grid">
            <a href="#apps" className="cs-card">
              <p className="cs-city">Dating Apps</p>
              <p className="cs-tagline">Which ones actually work</p>
            </a>
            <a href="#money-requests" className="cs-card">
              <p className="cs-city">Money Requests</p>
              <p className="cs-tagline">Read this before sending anything</p>
            </a>
            <a href="#tampo" className="cs-card">
              <p className="cs-city">Understanding Tampo</p>
              <p className="cs-tagline">The silent treatment explained</p>
            </a>
            <a href="#separated" className="cs-card">
              <p className="cs-city">Separated But Married</p>
              <p className="cs-tagline">The legal minefield</p>
            </a>
            <a href="#concubinage-laws" className="cs-card">
              <p className="cs-city">Concubinage Laws</p>
              <p className="cs-tagline">What every foreign man must understand</p>
            </a>
            <a href="#scams" className="cs-card">
              <p className="cs-city">The Scam Industry</p>
              <p className="cs-tagline">Organized operations targeting you</p>
            </a>
            <a href="#transgender" className="cs-card">
              <p className="cs-city">Transgender Community</p>
              <p className="cs-tagline">What to understand</p>
            </a>
            <a href="#red-flags" className="cs-card">
              <p className="cs-city">Red and Green Flags</p>
              <p className="cs-tagline">Practical guide</p>
            </a>
            <a href="#sexual-health" className="cs-card">
              <p className="cs-city">Sexual Health</p>
              <p className="cs-tagline">Facts, stats, and sources</p>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1 — DATING APPS */}
      <section className="section section-light" id="apps">
        <div className="section-inner">
          <p className="section-label">Online Dating</p>
          <h2 className="section-heading">The Dating App Landscape in the Philippines</h2>
          <p className="rb-body">The Philippines has one of the most active online dating markets in Asia. Filipinos are highly social, extremely online, and the country is predominantly English-speaking, making apps more accessible here than almost anywhere else in Southeast Asia.</p>

          <div className="app-grid">
            <div className="app-card">
              <p className="app-name">Tinder</p>
              <p className="app-tag">Dominant by volume</p>
              <p className="app-desc">Largest user base in the Philippines. Best for maximum exposure. The downside is volume — bots, fake profiles, and people who will never meet in person are common. Requires active filtering.</p>
            </div>
            <div className="app-card">
              <p className="app-name">Bumble</p>
              <p className="app-tag">Quality alternative</p>
              <p className="app-desc">Women message first, which filters out passive profiles. Converts better to real meetings because of fewer fakes. Best for higher-quality matches with less noise.</p>
            </div>
            <div className="app-card">
              <p className="app-name">FilipinoCupid</p>
              <p className="app-tag">Serious relationships</p>
              <p className="app-desc">Specifically designed for international relationships between Filipinas and foreign men. Large user base focused on serious connections. Messaging requires paid subscription. Best for long-term relationship seekers.</p>
            </div>
            <div className="app-card">
              <p className="app-name">PinaLove</p>
              <p className="app-tag">Expat favorite</p>
              <p className="app-desc">Local favorite among expats in Cebu and Manila. Smaller than Tinder but more engaged user base and a reputation for fewer fake profiles among longtime expats.</p>
              <p className="app-note">Note: Hinge is not available in the Philippines.</p>
            </div>
          </div>

          <div className="rb-alert">
            <p className="rb-alert-label">Profile Reality Check</p>
            <p className="rb-alert-body-dark">In the Philippine dating app market, foreign men are in a vastly superior position compared to local men. Simply adding photos and a bio showing you are a foreigner results in a surprisingly large number of likes and messages. Do not mistake volume for quality. Take your time and be selective.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — MONEY REQUEST */}
      <section className="section section-dark" id="money-requests">
        <div className="section-inner">
          <p className="section-label">Read This First</p>
          <h2 className="section-heading section-heading-light">The Money Request — Read This First</h2>

          <div className="rb-amber">
            <p className="rb-amber-label">⚠ Before Anything Else</p>
            <p className="rb-amber-body-light">Before anything else about Philippine dating culture, you need to understand this.</p>
          </div>

          <p className="rb-body rb-body-light">A frequent issue on Philippine dating apps is a money request before meeting. Just as the messages heat up and a date is agreed upon, demands for money arrive — transportation, a sick family member, a phone bill, an emergency. The vast majority are lies preying on your goodwill.</p>
          <p className="rb-body rb-body-light">Absolutely do not send money via GCash or any other means before meeting. The classic pattern is that you will be blocked the moment you send the money. If she says she cannot come because she has no transportation money, the correct response is to offer to give her taxi fare in cash when she arrives — not to send it in advance.</p>
          <div className="rb-warning">
            <p className="rb-warning-label">⚠ Not Culture — A Scam</p>
            <p className="rb-warning-body-light">If her family is asking for money before you have even met in person, that is not culture. That is a scam.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FAMILY AT THE DATE */}
      <section className="section section-light">
        <div className="section-inner">
          <p className="section-label">Culture Guide</p>
          <h2 className="section-heading">She Showed Up With Friends and Family</h2>
          <p className="rb-body">You arranged what you thought was a one-on-one first date. She arrives with her sister, her cousin, and possibly her mother. You are confused and possibly annoyed. This is completely normal and means something good.</p>
          <p className="rb-body">In Philippine culture, individualism is almost non-existent. A Filipina&rsquo;s decisions are influenced by her parents, siblings, aunts, uncles, and even distant cousins. Her bringing family or friends to a first meeting with a foreign man she met online is a sign she is taking the meeting seriously. Her family is checking you out.</p>
          <p className="rb-body">The correct response: be warm, be generous, pay for everyone, be genuinely interested in the people she brought. You are not just dating her — you are being evaluated by her entire support network. How you treat her family in that first meeting will be discussed for weeks. Women from genuinely good families do not show up alone to meet foreign strangers from dating apps.</p>
        </div>
      </section>

      {/* SECTION 4 — STOOD UP */}
      <section className="section section-dark">
        <div className="section-inner">
          <p className="section-label">Culture Guide</p>
          <h2 className="section-heading section-heading-light">Being Stood Up — And How to Handle It</h2>
          <p className="rb-body rb-body-light">It happens. You made plans, confirmed the night before, and she does not show. Filipino culture places enormous value on avoiding confrontation and maintaining smooth social relations — a concept called <em>pakikisama</em>. She may agree to a date because saying no feels uncomfortable, with no intention of following through. She may also genuinely have a family emergency, which in the Philippines can override almost any personal plan without notice.</p>
          <p className="rb-body rb-body-light">The honest advice: if someone cancels or does not show once with a reasonable explanation, give it another chance. If it happens twice, move on.</p>
          <p className="rb-body rb-body-light">There is another reason a date may not appear that most expat sites will never tell you — some Filipinas are genuinely embarrassed to be seen in public with a foreign man, particularly a significantly older one. The Philippines is a deeply social and image-conscious culture. What her neighbors think, what her coworkers think, and what her family thinks matters enormously. Being seen with a foreign man — especially an older one — can invite gossip, assumptions about her motivations, and judgment from her community. This is not a reflection of her feelings for you privately. It is a reflection of social pressure that is very real in Philippine culture. If a woman consistently cancels plans to meet in public but is warm and engaged privately, this may be the reason. It is worth having an honest conversation about it rather than assuming she is not interested. As the relationship deepens and her community accepts you, this discomfort typically fades.</p>
        </div>
      </section>

      {/* SECTION 5 — TAMPO */}
      <section className="section section-light" id="tampo">
        <div className="section-inner">
          <p className="section-label">Culture Guide</p>
          <h2 className="section-heading">Understanding Tampo — The Silent Treatment That Is Not What You Think</h2>
          <p className="rb-body">Every man in a relationship with a Filipina will encounter tampo. Understanding it is not optional — it is essential. Tampo is deeply ingrained in Filipino culture and is often seen as a subtle non-confrontational way to communicate emotions. In the Philippines, where maintaining harmony and avoiding direct conflict is highly valued, tampo allows individuals to express dissatisfaction without escalating the situation.</p>
          <p className="rb-body">In practical terms: she goes quiet. One-word answers. She says she is fine. She is not fine. She will not tell you what is wrong. She expects you to figure it out, come to her with affection, and make it right.</p>
          <p className="rb-body">Many foreigners make the mistake of getting angry back. This is the wrong move. In Filipino psychology, maintaining harmony is everything. Confrontation is seen as aggressive. She is not ignoring you to hurt you. She is ignoring you because she wants to be wooed back.</p>
          <p className="rb-body">The antidote to tampo is <em>suyo</em> — gently winning back her favor through persistence and affection. Drop the debate. Approach her gently. She will reject your first attempt. Bring her favorite food. Show her you were thinking about her. Ninety percent of the time the tampo breaks right there.</p>
          <div className="rb-warning">
            <p className="rb-warning-label">Important Distinction</p>
            <p className="rb-warning-body">While normal tampo is fleeting, frequent days-long silent treatments used to manipulate you into buying things or controlling your behavior is not okay. If she uses silence to punish you every time you say no to money requests, that is emotional manipulation, not culture.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINANCIAL EXPECTATIONS */}
      <section className="section section-dark">
        <div className="section-inner">
          <p className="section-label">Culture Guide</p>
          <h2 className="section-heading section-heading-light">Financial Expectations in a Genuine Relationship</h2>
          <p className="rb-body rb-body-light">In Filipino culture, the man pays. Always. For dates, for meals, for transportation. This is not negotiable and is not a red flag — it is a deeply embedded cultural norm. Accept it.</p>
          <p className="rb-body rb-body-light">As a relationship becomes serious, family support expectations will likely arise. Filipino culture expects children to support aging parents. A Filipina in a serious relationship with a foreign man may ask for help with her parents&rsquo; medical bills, her siblings&rsquo; tuition, or her family&rsquo;s rent. This is real, it is cultural, and it is not inherently a scam.</p>
          <p className="rb-body rb-body-light">The question to ask yourself is whether the relationship feels genuine and reciprocal, or whether financial requests started before the relationship had time to develop. There is a meaningful difference between a woman you have been with for a year asking for help with a family emergency and a woman you met online two weeks ago asking for money before you have ever met.</p>
        </div>
      </section>

      {/* SECTION 7 — SEPARATED BUT NOT ANNULLED */}
      <section className="section section-light" id="separated">
        <div className="section-inner">
          <p className="section-label">Legal Reality</p>
          <h2 className="section-heading">The Separated But Not Annulled Problem</h2>

          <div className="rb-warning">
            <p className="rb-warning-label">⚠ One of the Most Serious and Most Overlooked Issues</p>
            <p className="rb-warning-body">This is one of the most serious and most commonly overlooked issues for foreign men dating in the Philippines.</p>
          </div>

          <p className="rb-body">The Philippines is one of only two countries in the world where divorce is not legal for most citizens. The only way to legally end a marriage is through a lengthy and expensive annulment process that can take 3 to 7 years and cost 300,000 to 500,000 pesos or more. As a result, enormous numbers of Filipinos are legally married but living separately — sometimes for years or decades.</p>
          <p className="rb-body">When a woman on a dating app says she is &ldquo;separated&rdquo; she may mean: she has been living apart from her husband for years with no legal proceedings and is still legally married; she has filed for annulment but it has not been granted and is still legally married; her annulment has been granted and she is legally single; or she is divorced from a foreign husband under foreign law which may or may not be recognized in the Philippines.</p>
          <p className="rb-body">Why this matters to you: a foreigner can be charged under Philippine law if within Philippine jurisdiction and the elements of a crime are met. If you move in with a woman who is still legally married to someone else you may be exposed to legal risk. Criminal complaints can also be used to pressure immigration action — a foreigner can discover a case only when trying to renew their ACR I-Card and find an immigration hold-departure order has been filed.</p>
          <p className="rb-body">The practical steps: before a relationship becomes serious with a woman who describes herself as separated, ask directly whether she has an annulment decree or just a de facto separation. If she says annulment is in process, ask to see the case number. Consult a Philippine attorney if you have any doubt about your legal exposure.</p>
        </div>
      </section>

      {/* SECTION 7B — CONCUBINAGE AND ADULTERY LAWS */}
      <section className="section section-dark" id="concubinage-laws">
        <div className="section-inner">
          <p className="section-label">Philippine Law</p>
          <h2 className="section-heading section-heading-light">Concubinage and Adultery Laws — What Foreign Men Must Understand</h2>
          <p className="rb-body rb-body-light">The Philippines has criminal laws covering marital infidelity that remain actively enforceable in 2026. Every foreign man dating in the Philippines should understand these laws — not to be scared away from relationships, but to navigate the dating landscape with clear eyes.</p>

          <div className="rb-warning">
            <p className="rb-warning-label">Concubinage — Article 334 of the Revised Penal Code</p>
            <p className="rb-warning-body-light">Concubinage is a criminal offense that applies to married men who engage in specific acts of infidelity. The law requires the man to be legally married AND to have committed one of three specific acts: keeping a mistress in the conjugal home; having sexual intercourse under scandalous circumstances with a woman who is not his wife; or cohabiting with another woman in any other place. A simple affair or a single sexual encounter does not automatically constitute concubinage — the law requires one of these specific aggravated modes. As of January 2026 the Philippine Supreme Court reaffirmed these provisions remain fully enforceable.</p>
          </div>

          <h3 className="rb-sub rb-sub-first rb-sub-light">How This Affects Foreign Men</h3>
          <p className="rb-body rb-body-light">Nationality does not exempt you from Philippine criminal law if the offense is committed on Philippine soil. A married foreign man — married under any law recognized by the Philippines — who cohabits with a Filipina in the Philippines can be charged with concubinage. If you are legally married anywhere in the world and you move in with a Filipina girlfriend in the Philippines you have potential criminal exposure.</p>

          <h3 className="rb-sub rb-sub-light">Penalties</h3>
          <p className="rb-body rb-body-light">For the husband or foreign partner: imprisonment from 6 months and 1 day up to 4 years and 2 months. For the Filipino woman: destierro — a form of banishment from certain areas rather than imprisonment.</p>

          <h3 className="rb-sub rb-sub-light">The Private Crime Protection</h3>
          <p className="rb-body rb-body-light">Concubinage is classified as a private crime. This means only the offended wife can file the complaint — not the police, not a neighbor, not a government agency. The complaint must include both the husband and the woman. If the wife pardons the offense before charges are filed the case cannot proceed. This is important protective context — random third parties cannot weaponize this law against you. Only an actual legal spouse can file.</p>

          <h3 className="rb-sub rb-sub-light">The Scam Angle</h3>
          <p className="rb-body rb-body-light">The concern raised regularly in expat communities is that some Filipinas claiming to be single or separated use the threat of concubinage complaints as leverage — particularly when relationships end or when money is involved. The risk is real but it requires the woman to actually be legally married to someone who is willing to file a complaint against you. If she claims to be single and has a CENOMAR from PSA proving no marriage record, your exposure is dramatically reduced. Getting a CENOMAR before any serious relationship develops is the clearest protection.</p>

          <h3 className="rb-sub rb-sub-light">Adultery — A Separate Offense</h3>
          <p className="rb-body rb-body-light">Adultery is a separate offense that applies to married women — it covers a married Filipina having intercourse with a man who knows she is married. If you date a woman you know is legally married, you could be charged as the paramour in an adultery case even if you are not yourself married. The standard of proof is different from concubinage — adultery requires proof of sexual intercourse rather than cohabitation.</p>

          <div className="rb-amber">
            <p className="rb-amber-label">Practical Protective Steps</p>
            <p className="rb-amber-body-light">Ask specifically: is she legally annulled or widowed — not just is she single or separated. Separated without annulment means legally married. Request a CENOMAR from PSA before a relationship becomes serious. A legitimate woman in an honest relationship has no reason to refuse this request. Never move in with a woman you have reasonable grounds to believe is still legally married. If threatened with concubinage charges, consult a Philippine attorney immediately — do not pay anyone anything without legal advice. Keep records of all communications in any relationship that involves financial transactions.</p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — RA 9262 */}
      <section className="section section-dark">
        <div className="section-inner">
          <p className="section-label">Philippine Law</p>
          <h2 className="section-heading section-heading-light">RA 9262 — What Every Foreign Man Needs to Understand</h2>

          <div className="rb-info">
            <p className="rb-info-label">Republic Act 9262 — Anti-VAWC Act</p>
            <p className="rb-info-body">RA 9262, the Anti-Violence Against Women and Their Children Act, defines violence against women as any act committed by any person against a woman who is his wife, former wife, or against a woman with whom the person has or had a sexual or dating relationship. This means the law applies to dating relationships, not just marriages. The Supreme Court has ruled that even women in illicit relationships are protected by RA 9262.</p>
          </div>

          <p className="rb-body rb-body-light">Psychological violence — verbal abuse, humiliation, and psychological torment — are criminal acts. RA 9262 has extraterritorial application, meaning Philippine courts can take jurisdiction even if parts of the abuse occurred abroad.</p>

          <h3 className="rb-sub rb-sub-light">What this means in practice</h3>
          <ul className="rb-list">
            <li className="rb-li rb-li-light">Ending a relationship badly, particularly if there was any financial involvement, can create legal exposure.</li>
            <li className="rb-li rb-li-light">Screaming at her, publicly humiliating her, or threatening her in any way can constitute a criminal offense.</li>
            <li className="rb-li rb-li-light">Withholding money you agreed to provide can be alleged as economic abuse.</li>
            <li className="rb-li rb-li-light">Social media posts making negative statements about a former partner can strengthen a case against you.</li>
          </ul>

          <h3 className="rb-sub rb-sub-light">How to protect yourself</h3>
          <p className="rb-body rb-body-light">Treat every relationship with respect and dignity. End relationships cleanly and without drama. Do not make financial commitments you cannot or will not keep. Do not threaten, harass, or publicly humiliate a former partner. If you receive notice of a legal complaint, consult a Philippine attorney immediately.</p>
        </div>
      </section>

      {/* SECTION 9 — SCAM INDUSTRY */}
      <section className="section section-dark" id="scams" style={{background: '#06121F'}}>
        <div className="section-inner">
          <p className="section-label">Scam Operations</p>
          <h2 className="section-heading section-heading-light">The Scam Industry — What Every Foreign Man Must Understand</h2>

          <div className="rb-warning">
            <p className="rb-warning-label">⚠ The Scale</p>
            <p className="rb-warning-body-light">This is not about a few dishonest individuals. These are companies with registered business names, office spaces, hired employees, shift schedules, and performance targets whose entire business model is deceiving foreign men on dating apps. The FBI Internet Crime Complaint Center logged $16.6 billion in total US internet crime losses in 2024 — a 33 percent jump from 2023. The Philippine National Police Anti-Cybercrime Group raided an organized romance scam hub in Malate Manila in October 2025, arresting 39 people across three condo units. The NBI raided a BPO hub in Angeles City registered as FMD Non-Voices Outsourcing Services — 84 workers were recruited under false pretenses and coerced into posing as romantic partners targeting US, Middle East, and European nationals. There are registered companies in the Philippines whose product is a fake romantic relationship with you. They have employees, shift supervisors, and performance targets.</p>
          </div>

          <h3 className="rb-sub rb-sub-light">How They Work</h3>
          <p className="rb-body rb-body-light">The profile is typically a beautiful young Filipina — photos stolen from real people&rsquo;s social media — with an appealing backstory. Love bombing follows: a flurry of sweet messages to make you feel special. The attention is overwhelming and intentional — a script refined through thousands of previous targets. By the time the money ask comes, skepticism feels like betrayal. The first ask is always small — designed to be easy to say yes to. Once you send it, the next ask is easier. Escalation follows: medical emergencies, family crises, customs fees, visa fees, investment opportunities.</p>

          <div className="rb-warning" style={{marginTop: '32px'}}>
            <p className="rb-warning-label">⚠ The Pig Butchering Scam</p>
            <p className="rb-warning-body-light">After weeks of relationship building, she introduces you to an investment opportunity — cryptocurrency, forex, a special platform. Early investments show spectacular returns. You invest more. When you try to withdraw, there are fees and complications. The platform disappears with everything you put in. Any investment opportunity introduced by someone you met on a dating app should be treated as a scam until proven otherwise. No exceptions.</p>
          </div>

          <div className="rb-info" style={{marginTop: '24px'}}>
            <p className="rb-info-label">The AI Upgrade — 2026</p>
            <p className="rb-info-body">FBI field offices have warned since early 2026 that scammers are using AI to generate convincing profile photos, voice notes, and deepfake video calls. A scam operation can feed a stolen photo into a face-swap tool and have the &ldquo;girlfriend&rdquo; appear briefly on a video call before the connection drops. The workaround: demand live extended video with real-time unpredictable prompts — ask her to hold up three fingers, turn to show a specific item in her room, read a specific sentence out loud. AI deepfakes struggle with unpredictable real-time prompts.</p>
          </div>

          <h3 className="rb-sub rb-sub-light">Specific Scam Patterns</h3>
          <div className="scam-grid">
            <div className="scam-card">
              <p className="scam-card-name">The Customs Package Scam</p>
              <p className="scam-card-body">She is sending you a gift that is held by customs. You need to pay a release fee to a personal account. Always a scam. Philippine customs does not collect fees through personal accounts or GCash.</p>
            </div>
            <div className="scam-card">
              <p className="scam-card-name">The Visa and Travel Fee Scam</p>
              <p className="scam-card-body">She wants to visit you but needs money for a visa fee, travel tax, or airport fee. She sends a convincing-looking document. Always a scam. Legitimate visa fees are paid to embassies through official channels.</p>
            </div>
            <div className="scam-card">
              <p className="scam-card-name">The Medical Emergency Scam</p>
              <p className="scam-card-body">A family member is hospitalized and needs a deposit before treatment. The most emotionally manipulative scam. If this happens with someone you have never met in person, it is almost certainly a scam.</p>
            </div>
            <div className="scam-card">
              <p className="scam-card-name">The Sextortion Scam</p>
              <p className="scam-card-body">She sends intimate content then threatens to share it with your family and employer unless you pay. Do not send intimate images to strangers online under any circumstances. If this happens, stop all payments immediately — paying escalates demands — and report to the NBI Cybercrime Division.</p>
            </div>
          </div>

          <h3 className="rb-sub rb-sub-light">How to Verify</h3>
          <ul className="verify-list">
            <li className="verify-item">
              <p className="verify-item-name">The Live Video Test</p>
              <p className="verify-item-body">Demand a live video call with real-time unpredictable requests. Ask her to write your name on paper and hold it up. Ask her to show a specific item in her room. AI deepfakes and pre-recorded videos cannot pass this test.</p>
            </li>
            <li className="verify-item">
              <p className="verify-item-name">The Consistency Test</p>
              <p className="verify-item-body">Ask questions over time and cross-reference answers. Inconsistencies are the clearest signal of a scripted operation.</p>
            </li>
            <li className="verify-item">
              <p className="verify-item-name">The Reverse Image Search</p>
              <p className="verify-item-body">Right-click any photo she sent you and search Google Images. If her photos appear on other profiles with different names, you are talking to a fake profile.</p>
            </li>
            <li className="verify-item">
              <p className="verify-item-name">The Money Rule — No Exceptions</p>
              <p className="verify-item-body">Never send money to anyone you have not met in person. Not for transportation. Not for emergencies. Not for visas. Not for customs. Not as an investment. The moment money is requested before a real-world meeting, the conversation is over.</p>
            </li>
          </ul>

          <div className="rb-alert" style={{marginTop: '32px'}}>
            <p className="rb-alert-label">If You Have Been Scammed</p>
            <p className="rb-alert-body">You are not stupid. These are professional operations run by organized crime with scripts refined through thousands of victims. Stop all further payments immediately. Do not confront the scammer. Preserve every message, receipt, photo, video, and bank record. Report to the money-transfer provider first as this is time-sensitive, then your bank, then law enforcement in both your home country and through the NBI Cybercrime Division or PNP Anti-Cybercrime Group in the Philippines. Report even if you feel embarrassed — the Malate bust in October 2025 happened because multiple victims reported independently.</p>
          </div>
        </div>
      </section>

      {/* SECTION 10 — TRANSGENDER COMMUNITY */}
      <section className="section section-light" id="transgender">
        <div className="section-inner">
          <p className="section-label">Community and Diversity</p>
          <h2 className="section-heading">The Transgender Community in the Philippines</h2>

          <div className="rb-alert">
            <p className="rb-alert-label">A Note on This Section</p>
            <p className="rb-alert-body-dark">This section is written with honesty and with respect. Irish, my Filipina wife, has a close friend who is a ladyboy. This is not an outsider view — it is written by people who know and care about members of this community.</p>
          </div>

          <p className="rb-body">The Philippines has one of the most visible and socially integrated transgender communities in Asia. In cities like Manila, Cebu, and the Visayas, you will see transgender Filipinas — commonly called ladyboys, though many in the community prefer trans Pinay — in malls, restaurants, bars, entertainment, and every aspect of daily life. This is not unusual, underground, or hidden. It is everyday Philippine life. There are transgender Filipinas who are so feminine that foreigners often cannot tell the difference. Transgender personalities are prominent in Philippine media — TV shows hosted by transgender personalities air nationwide.</p>

          <h3 className="rb-sub rb-sub-first">Why This Matters on Dating Apps</h3>
          <p className="rb-body">Due to social stigma, many transgender Filipinas are not comfortable revealing their true gender identity on general dating apps like Tinder. This can result in profiles that do not disclose that the person is transgender. This is more common on general apps than in dedicated communities where people are more open.</p>
          <p className="rb-body">Why non-disclosure happens: there is still significant stigma with dating transgender individuals among local men. Many transgender Filipinas have found that presenting as female opens more doors in employment and daily life. The economic reality of a poor country is significant here.</p>

          <h3 className="rb-sub">Practical Guidance</h3>
          <p className="rb-body">Video calling before meeting in person is the single most effective way to verify who you are talking to. Insist on a live video call — not a voice call, not a photo — before committing to meeting anyone.</p>
          <p className="rb-body">If you arrive at a date and discover the person is transgender: handle it with dignity. This person is a human being who may have been afraid of rejection. You are not obligated to continue the date, but you are obligated to be respectful. Excuse yourself politely if you need to leave.</p>

          <h3 className="rb-sub">For Men Interested in Dating Transgender Filipinas</h3>
          <p className="rb-body">Transgender Filipinas often prefer to date foreign men because they are more open to genuine long-term relationships. They are often educated, expressive, and hardworking. Dedicated apps like MyLadyboyDate and MyTransgenderCupid are safer and more transparent environments for these connections than general apps.</p>

          <div className="irish-note">
            <div className="irish-note-header">
              <div className="irish-monogram">I</div>
              <div>
                <p className="irish-name">Irish&rsquo;s Note</p>
                <p className="irish-tag">Personal perspective · Cebu, Philippines</p>
              </div>
            </div>
            <p className="irish-body">One of my closest friends is a ladyboy. She is kind, funny, loyal, and one of the most hardworking people I know. She has faced discrimination her whole life — from her family, from employers, from men who treated her badly after finding out who she was. I am not asking you to date someone you do not want to date. I am asking you to treat every person you encounter with basic human dignity, regardless of who they are. The Philippines is a diverse and complicated society. The more you understand it with an open heart, the richer your experience here will be.</p>
            <p className="irish-sig">— Irish</p>
          </div>
        </div>
      </section>

      {/* SECTION 11 — RED FLAGS AND GREEN FLAGS */}
      <section className="section section-dark" id="red-flags">
        <div className="section-inner">
          <p className="section-label">At a Glance</p>
          <h2 className="section-heading section-heading-light">Red Flags and Green Flags</h2>
          <div className="flag-grid">
            <div>
              <p className="flag-col-label flag-col-label-red">Red Flags</p>
              <ul className="flag-list">
                <li className="flag-item flag-item-red">Money requests before meeting in person.</li>
                <li className="flag-item flag-item-red">Refuses to video call before meeting.</li>
                <li className="flag-item flag-item-red">Asks for money for emergencies repeatedly.</li>
                <li className="flag-item flag-item-red">Claims to be separated but cannot provide documentation.</li>
                <li className="flag-item flag-item-red">Her family contacts you asking for money.</li>
                <li className="flag-item flag-item-red">Profile photos all professional quality with no casual shots.</li>
                <li className="flag-item flag-item-red">Inconsistent details about her life across conversations.</li>
                <li className="flag-item flag-item-red">Immediately pushes to move off the dating app to WhatsApp or Viber.</li>
                <li className="flag-item flag-item-red">Her story changes between conversations.</li>
              </ul>
            </div>
            <div>
              <p className="flag-col-label flag-col-label-green">Green Flags</p>
              <ul className="flag-list">
                <li className="flag-item flag-item-green">Brings family or friends to a first meeting.</li>
                <li className="flag-item flag-item-green">Consistent natural communication over time.</li>
                <li className="flag-item flag-item-green">Willing to video call freely and spontaneously.</li>
                <li className="flag-item flag-item-green">Talks about her life in specific, verifiable detail.</li>
                <li className="flag-item flag-item-green">Her social media reflects a real life with friends and family.</li>
                <li className="flag-item flag-item-green">Does not ask for money in the early stages.</li>
                <li className="flag-item flag-item-green">Honest about her situation including family, work, and past relationships.</li>
                <li className="flag-item flag-item-green">Introduces you to her real social circle over time.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 — SEXUAL HEALTH */}
      <section className="section section-light" id="sexual-health">
        <div className="section-inner">
          <p className="section-label">Public Health</p>
          <h2 className="section-heading">Sexual Health in the Philippines — What Every Expat Needs to Know</h2>

          <p className="rb-body">This section is written with the same honesty we bring to every topic on this site. Sexual health is a legitimate public health matter. Accurate information protects people. We present the facts from official Philippine Department of Health sources and WHO research — without judgment or alarm.</p>

          <div className="rb-alert">
            <p className="rb-alert-label">The Overall Picture</p>
            <p className="rb-alert-body-dark">The Philippines is not a uniquely dangerous country for sexually transmitted infections. Among five Southeast Asian countries studied, the Philippines had the lowest overall STI prevalence rate in the general population. The general population risk for a foreign man in a monogamous relationship with a Filipina who does not engage in high-risk behaviors is modest and manageable. However specific infections — particularly HIV and Hepatitis B — present elevated risk compared to Western countries, and informed awareness can make a significant difference to your long-term health.</p>
          </div>

          <h3 className="rb-sub rb-sub-first">HIV — The Most Important Conversation</h3>

          <div className="stat-grid">
            <div className="stat-card">
              <p className="stat-label">Q1 2026 New Cases</p>
              <p className="stat-value">4,633</p>
              <p className="stat-note">Newly confirmed HIV cases — Philippine DOH</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Q1 2025 New Cases</p>
              <p className="stat-value">5,101</p>
              <p className="stat-note">A 57% increase from Q1 2024</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Cumulative Since 1984</p>
              <p className="stat-value">160,000+</p>
              <p className="stat-note">Total confirmed cases</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Male-to-Male Transmission</p>
              <p className="stat-value">84%</p>
              <p className="stat-note">Of new cases among males — Source: DOH HIV Surveillance 2026</p>
            </div>
          </div>

          <p className="rb-body">The HIV epidemic in the Philippines is concentrated among men who have sex with men — a clinical term that includes men who identify as gay, bisexual, or straight but engage in same-sex sexual activity. This group accounts for the overwhelming majority of new infections. The rate of transmission through heterosexual contact — the primary exposure for most foreign men dating Filipinas — is real but statistically far lower. These are official Department of Health numbers.</p>

          <p className="rb-body">Approximately 70 percent of HIV cases in the Philippines are among men who have sex with men, yet over three-quarters of them have never obtained an HIV test, because stigma and discrimination prevent people from getting tested, knowing their status, and accessing treatment. People who do not know they are positive cannot protect their partners. This is a public health tragedy, not a moral one.</p>

          <h3 className="rb-sub">What This Means for You</h3>
          <ul className="rb-list">
            <li className="rb-li">If you are a heterosexual man in a committed monogamous relationship with a Filipina who has been tested — your HIV risk is low.</li>
            <li className="rb-li">If you are engaging in casual sexual encounters with multiple partners — your risk is meaningfully higher than you might experience in your home country, and testing every 3 to 6 months is strongly recommended.</li>
            <li className="rb-li">If you are open to or engaging in sexual contact with transgender Filipinas — your risk profile is elevated. This is not a reason to avoid these relationships — it is a reason to know your status and your partner&rsquo;s status, use protection consistently, and consider PrEP.</li>
          </ul>

          <div className="rb-green" style={{marginTop: '24px'}}>
            <p className="rb-green-label">U=U — Undetectable Equals Untransmittable</p>
            <p className="rb-green-body">People with HIV who maintain an undetectable viral load have effectively no risk of transmitting HIV to their HIV-negative partners through sex. HIV today is a manageable chronic condition, not a death sentence. A partner who is HIV positive and on treatment with an undetectable viral load presents no transmission risk during sex.</p>
          </div>

          <h3 className="rb-sub">PrEP</h3>
          <p className="rb-body">PrEP is a daily medication that reduces HIV transmission risk by over 99 percent when taken consistently. It is available in the Philippines through select clinics and government health facilities. Ask a doctor about PrEP if you are sexually active with multiple partners or in a higher-risk category.</p>

          <h3 className="rb-sub">Where to Get Tested in Cebu</h3>
          <ul className="rb-list">
            <li className="rb-li">Cebu City Health Office — free HIV testing.</li>
            <li className="rb-li">Vicente Sotto Memorial Medical Center — HIV testing and treatment.</li>
            <li className="rb-li">LoveYourself community health centers — judgment-free confidential testing.</li>
            <li className="rb-li">Chong Hua Hospital and Cebu Doctors Hospital — paid private testing available.</li>
          </ul>

          <h3 className="rb-sub">Hepatitis B — The Silent Risk Most Expats Ignore</h3>
          <p className="rb-body">Hepatitis B is the STI most likely to affect foreign men in the Philippines and the one most commonly overlooked. The prevalence of chronic Hepatitis B infection in the Philippines ranges from 2 to 16.5 percent, averaging approximately 12 percent in studied populations. In the United States chronic Hepatitis B affects approximately 0.3 percent of the population — in the Philippines it may be 40 times more prevalent. Most carriers have no symptoms and do not know they are infected.</p>
          <p className="rb-body">Hepatitis B is transmitted through sexual contact, blood-to-blood contact, and from mother to child. It is significantly more infectious than HIV through sexual transmission. Chronic Hepatitis B can lead to liver cirrhosis and liver cancer decades after infection.</p>
          <div className="rb-green">
            <p className="rb-green-label">The Good News — It Is Vaccine-Preventable</p>
            <p className="rb-green-body">If you have not been vaccinated and are living in the Philippines, get vaccinated immediately. The vaccine requires three doses over six months and provides lifelong protection.</p>
          </div>

          <h3 className="rb-sub">Syphilis</h3>
          <p className="rb-body">Present in the Philippines and rising in urban areas. Highly treatable with antibiotics when caught early. Often asymptomatic in early stages — you can have syphilis and feel completely normal. Untreated it can cause serious long-term organ damage. Regular STI testing including syphilis screening is strongly recommended for anyone sexually active with new partners.</p>

          <h3 className="rb-sub">Gonorrhea and Chlamydia</h3>
          <p className="rb-body">Both present in the Philippines. Studies find a relatively high prevalence of chlamydial infection among young people, and the majority of cases are asymptomatic. Gonococcal resistance to penicillin and other antibiotics is high in the Philippines — do not attempt to self-treat with antibiotics purchased from a pharmacy. Both are curable with the correct treatment when diagnosed properly.</p>

          <h3 className="rb-sub">Practical Guidance</h3>
          <div className="checklist-card checklist-card-light">
            <ol className="checklist-items">
              <li className="checklist-item checklist-item-dark"><span className="checklist-head">Get vaccinated.</span> Hepatitis B three-dose series if not already vaccinated. HPV recommended for sexually active adults up to age 45. Hepatitis A recommended for all expats in Southeast Asia.</li>
              <li className="checklist-item checklist-item-dark"><span className="checklist-head">Get tested regularly.</span> If sexually active with new or multiple partners, test every 3 to 6 months for HIV, syphilis, gonorrhea, chlamydia, and Hepatitis B.</li>
              <li className="checklist-item checklist-item-dark"><span className="checklist-head">Use condoms consistently.</span> Widely available at pharmacies, supermarkets, and convenience stores throughout the Philippines.</li>
              <li className="checklist-item checklist-item-dark"><span className="checklist-head">Know your partner&rsquo;s status.</span> In a serious committed relationship, both partners getting tested together is a reasonable and caring step.</li>
              <li className="checklist-item checklist-item-dark"><span className="checklist-head">Consider PrEP.</span> Talk to a doctor if you are in a higher-risk situation.</li>
            </ol>
          </div>

          <div className="rb-alert" style={{marginTop: '32px'}}>
            <p className="rb-alert-label">Closing Note</p>
            <p className="rb-alert-body-dark">The Philippines is not uniquely dangerous. People form healthy loving long-term relationships here every day. The expat community includes thousands of foreign men who have been living here for decades in committed partnerships. The information in this section is not meant to frighten you. It is meant to ensure you make informed decisions and access healthcare when needed. Knowledge is protection.</p>
          </div>
        </div>
      </section>

      {/* STEVE AND IRISH'S NOTE */}
      <section className="sn-section">
        <div className="sn-inner">
          <div className="sn-header">
            <div className="sn-monogram">S&amp;I</div>
            <div>
              <p className="sn-name">Steve and Irish&rsquo;s Note</p>
              <p className="sn-tag">Our Honest Perspective · Cebu, Philippines</p>
            </div>
          </div>
          <div className="sn-rule" />
          <div className="sn-body">
            <div>
              <p className="sn-speaker">Steve</p>
              <p>I have been in the Philippines long enough to have seen both the best and worst of the expat dating experience. I have watched good men get taken advantage of and I have watched men behave terribly toward women who deserved better. The Philippines is genuinely one of the best places in the world to find a meaningful relationship with a warm, loyal, family-oriented partner. But it requires honesty, patience, and cultural awareness — not a transactional mindset.</p>
            </div>
            <div>
              <p className="sn-speaker">Irish</p>
              <p>I love my country and I love Filipino women. We are loyal, caring, and family-first in everything we do. We are also human beings who deserve to be treated with respect. If you come to the Philippines looking for a genuine connection, you will find one. If you come looking to exploit people in a poor country, you will find that too — and you will deserve everything that follows from it. Come with an open heart. Be honest about who you are and what you want. And please — be kind to everyone you meet here, regardless of how the connection works out.</p>
            </div>
          </div>
          <p className="sn-verified">Last Updated: June 2026 · Cebu, Philippines</p>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="legal-section">
        <div className="legal-inner">
          <div>
            <div className="legal-icon">!</div>
            <h2 className="legal-heading">Not legal or medical advice.</h2>
          </div>
          <p className="legal-body">
            This page reflects personal experience and research. It is not legal advice. Philippine law is complex and specific legal situations require consultation with a licensed Philippine attorney. For any legal concern including RA 9262, annulment status, or immigration matters, consult an attorney before making decisions. Medical information is for general informational purposes only — consult a licensed healthcare provider for personal medical advice.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BodyText from "@/components/BodyText";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Expat Red-Flag Checklist — Romance Scams in the Philippines",
  description:
    "A free one-page checklist for foreigners in the Philippines: how scam hubs work, the tests to run before you trust anyone, and exactly what to do if you've already sent money.",
  alternates: { canonical: "https://expatcompassph.com/red-flag-checklist" },
};

export default function RedFlagChecklistPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background: #F8F6F1; color: #0B1F3A; }

        /* ── PAGE HERO ── */
        .page-header { background: #0B1F3A; }
        .page-hero { padding: 72px 48px 56px; max-width: 820px; }
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

        /* ── INTRO + DOWNLOAD ── */
        .rf-intro { background: #0B1F3A; padding: 0 48px 72px; }
        .rf-intro-inner { max-width: 820px; }
        .rf-body { font-size: 0.93rem; font-weight: 300; line-height: 1.85; margin-bottom: 16px; max-width: 760px; }
        .rf-download-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 15px 36px; background: #C9A84C; color: #0B1F3A;
          font-size: 0.78rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;
          text-decoration: none; margin-top: 28px;
          transition: background 0.2s;
        }
        .rf-download-btn::before { content: '↓'; font-size: 1.05rem; }
        .rf-download-btn:hover { background: #dbb95a; }

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
        .section-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.7rem, 3vw, 2.4rem); font-weight: 700; line-height: 1.2;
          color: #0B1F3A; margin-bottom: 36px; max-width: 720px;
        }
        .section-heading-light { color: #F8F6F1; }

        /* ── JUMP NAV ── */
        .cs-label {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 24px;
          display: flex; align-items: center; gap: 12px;
        }
        .cs-label::before, .cs-label::after { content: ''; display: block; flex: 1; height: 1px; background: rgba(201,168,76,0.25); }
        .cs-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; }
        .cs-card {
          display: block; text-decoration: none; background: #0B1F3A;
          padding: 22px 24px; border: 1px solid rgba(201,168,76,0.15);
          transition: border-color 0.18s, background 0.18s; cursor: pointer;
        }
        .cs-card:hover { border-color: #C9A84C; background: rgba(11,31,58,0.92); }
        .cs-city {
          font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: #F8F6F1;
          display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 6px;
        }
        .cs-city::after { content: '→'; font-family: 'Inter', sans-serif; font-size: 0.85rem; color: #C9A84C; flex-shrink: 0; transition: transform 0.18s; }
        .cs-card:hover .cs-city::after { transform: translateX(4px); }
        .cs-tagline { font-size: 0.8rem; font-weight: 300; line-height: 1.55; color: #F8F6F1; }

        /* ── THE ONE RULE ── */
        .rf-rule-card {
          background: rgba(248,246,241,0.04);
          border: 1px solid rgba(201,168,76,0.2); border-left: 6px solid #C9A84C;
          padding: 48px; max-width: 760px; margin-top: 8px;
        }
        .rf-rule-text {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.3rem, 2.5vw, 1.75rem); font-weight: 700;
          line-height: 1.5; color: #F8F6F1;
        }

        /* ── PLAYBOOK CHECKBOXES ── */
        .rf-check-list { list-style: none; display: flex; flex-direction: column; gap: 10px; max-width: 760px; margin: 24px 0; }
        .rf-check-item {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 16px 20px; background: #fff;
          border: 1px solid rgba(11,31,58,0.1);
          transition: border-color 0.18s;
        }
        .rf-check-item:hover { border-color: rgba(201,168,76,0.4); }
        .rf-check-input {
          appearance: none; -webkit-appearance: none;
          width: 22px; height: 22px; min-width: 22px;
          border: 2px solid rgba(11,31,58,0.25); background: white;
          cursor: pointer; position: relative; margin-top: 2px; flex-shrink: 0;
          transition: border-color 0.2s, background 0.2s;
        }
        .rf-check-input:checked { background: #C9A84C; border-color: #C9A84C; }
        .rf-check-input:checked::after {
          content: '✓'; position: absolute; top: -2px; left: 2px;
          color: #0B1F3A; font-size: 0.9rem; font-weight: 800;
        }
        .rf-check-label { font-size: 0.9rem; font-weight: 300; line-height: 1.65; color: #0B1F3A; cursor: pointer; }
        .rf-check-label strong { font-weight: 600; }
        .rf-check-label em { font-style: italic; }

        /* ── VERIFY LIST (quick checks) ── */
        .verify-list { list-style: none; display: flex; flex-direction: column; gap: 20px; max-width: 760px; margin: 24px 0; }
        .verify-item { border-left: 3px solid #C9A84C; padding: 16px 20px; background: rgba(201,168,76,0.04); }
        .verify-item-name {
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 6px;
        }
        .verify-item-body { font-size: 0.88rem; font-weight: 300; line-height: 1.75; color: #F8F6F1; }

        /* ── ACTION LIST (already sent money) ── */
        .rf-action-list { list-style: none; display: flex; flex-direction: column; gap: 12px; max-width: 760px; margin: 24px 0; }
        .rf-action-item {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 18px 22px;
          background: rgba(248,246,241,0.04);
          border: 1px solid rgba(248,246,241,0.08); border-left: 4px solid #C9A84C;
        }
        .rf-action-num {
          font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700;
          color: #C9A84C; flex-shrink: 0; min-width: 20px; padding-top: 1px;
        }
        .rf-action-text { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #F8F6F1; }
        .rf-action-text a { color: #C9A84C; text-decoration: none; }
        .rf-action-text a:hover { text-decoration: underline; }
        .rf-action-text strong { font-weight: 600; }

        /* ── NORDPASS CARD ── */
        .nordpass-card {
          max-width: 760px; margin-top: 32px;
          border-left: 4px solid #C9A84C; padding: 36px 40px;
          background: rgba(248,246,241,0.04);
          border-top: 1px solid rgba(201,168,76,0.2);
          border-right: 1px solid rgba(201,168,76,0.2);
          border-bottom: 1px solid rgba(201,168,76,0.2);
        }
        .nordpass-label {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 14px;
        }
        .nordpass-label::before { content: ''; display: block; width: 20px; height: 1px; background: #C9A84C; }
        .nordpass-line { font-size: 0.9rem; font-weight: 300; line-height: 1.82; color: #F8F6F1; margin-bottom: 20px; }
        .nordpass-btn {
          display: inline-block; padding: 13px 32px;
          background: #C9A84C; color: #0B1F3A;
          font-size: 0.75rem; font-weight: 800;
          letter-spacing: 0.12em; text-transform: uppercase;
          text-decoration: none; transition: background 0.2s;
        }
        .nordpass-btn:hover { background: #dbb95a; }
        .nordpass-disclosure {
          font-size: 0.72rem; font-weight: 300;
          color: rgba(248,246,241,0.78);
          margin-top: 14px; display: block;
        }

        /* ── CLOSING ── */
        .rf-closing-section { background: #F8F6F1; padding: 72px 48px; }
        .rf-closing-inner { max-width: 760px; }
        .rf-closing-text {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.1rem, 2vw, 1.4rem); font-weight: 400;
          line-height: 1.65; color: #0B1F3A;
        }
        .rf-closing-text a {
          color: #C9A84C; text-decoration: none;
          border-bottom: 1px solid rgba(201,168,76,0.4);
        }
        .rf-closing-text a:hover { border-bottom-color: #C9A84C; }

        /* ── SOURCES ── */
        .rf-sources-section { background: #F8F6F1; padding: 32px 48px 56px; border-top: 1px solid #E8E4DC; }
        .rf-sources-inner { max-width: 760px; }
        .rf-sources-label {
          font-size: 0.62rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(11,31,58,0.4); margin-bottom: 10px;
        }
        .rf-sources-text { font-size: 0.75rem; font-weight: 300; line-height: 1.65; color: #5C6B7A; }

        /* ── DISCLOSURE ── */
        .rf-disclosure-section { background: #F8F6F1; padding: 0 48px 56px; }
        .rf-disclosure-inner { max-width: 760px; border-top: 1px solid #E8E4DC; padding-top: 28px; }
        .rf-disclosure-text { font-size: 0.78rem; font-weight: 300; line-height: 1.72; color: #5C6B7A; }

        /* ── NEWSLETTER ── */
        .newsletter-section { background: #0B1F3A; }
        .nl-wrap { max-width: 600px; margin: 0 auto; text-align: center; }
        .nl-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.7rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 16px;
        }
        .nl-eyebrow::before, .nl-eyebrow::after { content: ''; display: block; width: 20px; height: 1px; background: #C9A84C; }
        .nl-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 2.8vw, 2.2rem); font-weight: 700; line-height: 1.2;
          color: #F8F6F1; margin-bottom: 16px;
        }
        .nl-sub { font-size: 0.95rem; font-weight: 300; line-height: 1.7; color: #F8F6F1; margin-bottom: 32px; }
        .nl-form { display: flex; gap: 0; max-width: 480px; margin: 0 auto 12px; }
        .nl-input {
          flex: 1; padding: 14px 18px;
          background: rgba(248,246,241,0.96);
          border: 1px solid rgba(201,168,76,0.3); border-right: none;
          outline: none; font-family: 'Inter', sans-serif; font-size: 0.9rem; color: #0B1F3A;
        }
        .nl-input::placeholder { color: rgba(11,31,58,0.4); }
        .nl-btn {
          padding: 14px 24px; background: #C9A84C; color: #0B1F3A;
          font-family: 'Inter', sans-serif; font-size: 0.76rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          border: none; cursor: pointer; transition: background 0.2s;
          white-space: nowrap; flex-shrink: 0;
        }
        .nl-btn:hover:not(:disabled) { background: #b8943e; }
        .nl-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .nl-success {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 24px; background: rgba(201,168,76,0.12);
          border: 1px solid rgba(201,168,76,0.3); color: #C9A84C;
          font-size: 0.9rem; font-weight: 500; margin-bottom: 12px;
        }
        .nl-check { font-size: 1.1rem; font-weight: 700; }
        .nl-error { font-size: 0.82rem; color: rgba(248,246,241,0.78); margin-top: 8px; }
        .nl-note { font-size: 0.72rem; color: rgba(248,246,241,0.6); margin-top: 12px; }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .page-hero, .rf-intro, .section, .rf-closing-section, .rf-sources-section, .rf-disclosure-section {
            padding-left: 24px; padding-right: 24px;
          }
          .cs-grid { grid-template-columns: repeat(2, 1fr); }
          .rf-rule-card { padding: 28px 24px; }
          .nordpass-card { padding: 24px; }
        }
        @media (max-width: 560px) {
          .cs-grid { grid-template-columns: 1fr 1fr; }
          .rf-action-item { gap: 10px; }
        }
      `}</style>

      {/* HEADER */}
      <div className="page-header">
        <Nav active="/red-flag-checklist" />
        <div className="page-hero">
          <p className="page-eyebrow">Free Download · YouTube Companion</p>
          <h1 className="page-title">Expat Red-Flag Checklist:<br />Romance Scams in the Philippines</h1>
        </div>
      </div>

      {/* INTRO + DOWNLOAD */}
      <div className="rf-intro">
        <div className="rf-intro-inner">
          <BodyText variant="dark-bg" className="rf-body">
            Philippine police and the NBI have raided romance-scam hubs in Mactan, Malate, Angeles and Bohol. They run the same playbook every time. This page is the free checklist from the Expat Compass PH video. Print it, save it, or send it to a friend who&rsquo;s talking to someone they&rsquo;ve never met.
          </BodyText>
          <a
            href="/downloads/Expat-Red-Flag-Checklist.pdf"
            className="rf-download-btn"
            download
          >
            Download the printable checklist (PDF)
          </a>
        </div>
      </div>

      {/* JUMP NAV */}
      <section className="section section-light" style={{ paddingTop: "40px", paddingBottom: "48px" }}>
        <div className="section-inner">
          <p className="cs-label">Jump to a Section</p>
          <div className="cs-grid">
            <a href="#the-rule" className="cs-card">
              <p className="cs-city">The One Rule</p>
              <p className="cs-tagline">The only thing you have to remember</p>
            </a>
            <a href="#the-playbook" className="cs-card">
              <p className="cs-city">The Playbook</p>
              <p className="cs-tagline">Tick anything that has happened</p>
            </a>
            <a href="#quick-checks" className="cs-card">
              <p className="cs-city">Quick Checks</p>
              <p className="cs-tagline">Tests to run before you trust anyone</p>
            </a>
            <a href="#already-sent-money" className="cs-card">
              <p className="cs-city">Already Sent Money</p>
              <p className="cs-tagline">Do this today</p>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: THE ONE RULE */}
      <section id="the-rule" className="section section-dark" style={{ background: "#06121F" }}>
        <div className="section-inner">
          <p className="section-label">The One Rule</p>
          <h2 className="section-heading section-heading-light">The rule that defeats every scam.</h2>
          <div className="rf-rule-card">
            <p className="rf-rule-text">
              Never send money to someone you haven&rsquo;t met in person. Not once. Not a little. Not even phone load. No matter the story.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: THE PLAYBOOK */}
      <section id="the-playbook" className="section section-light">
        <div className="section-inner">
          <p className="section-label">1. The Playbook</p>
          <h2 className="section-heading">Tick anything that has happened.</h2>
          <BodyText variant="light-bg" className="rf-body">
            These are the exact moves every scam hub uses, in order. If more than one item is ticked, the conversation is following a script.
          </BodyText>
          <ul className="rf-check-list">
            <li className="rf-check-item">
              <input type="checkbox" className="rf-check-input" id="p1" />
              <label htmlFor="p1" className="rf-check-label">
                <strong>She found you first</strong> &mdash; on a dating app, Facebook, or a &ldquo;wrong number&rdquo; message.
              </label>
            </li>
            <li className="rf-check-item">
              <input type="checkbox" className="rf-check-input" id="p2" />
              <label htmlFor="p2" className="rf-check-label">
                Within days, she asked to move to <strong>WhatsApp or Telegram</strong>. Apps can flag and ban scam accounts. On WhatsApp, nobody is watching.
              </label>
            </li>
            <li className="rf-check-item">
              <input type="checkbox" className="rf-check-input" id="p3" />
              <label htmlFor="p3" className="rf-check-label">
                <strong>Weeks of good-morning texts</strong>, but you still haven&rsquo;t met.
              </label>
            </li>
            <li className="rf-check-item">
              <input type="checkbox" className="rf-check-input" id="p4" />
              <label htmlFor="p4" className="rf-check-label">
                A <strong>tiny first ask</strong>: &ldquo;Babe, my phone needs load.&rdquo; A hundred pesos tests whether you&rsquo;ll send money, and how fast.
              </label>
            </li>
            <li className="rf-check-item">
              <input type="checkbox" className="rf-check-input" id="p5" />
              <label htmlFor="p5" className="rf-check-label">
                Then the <strong>real ask</strong>, in one of three shapes: <em>Emergency</em> (hospital bill, sick mother, typhoon), <em>Trip</em> (ticket, visa, passport so she can visit), <em>Opportunity</em> (a crypto platform she wants to &ldquo;help&rdquo; you invest in).
              </label>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION: QUICK CHECKS */}
      <section id="quick-checks" className="section section-dark">
        <div className="section-inner">
          <p className="section-label">2. Quick Checks</p>
          <h2 className="section-heading section-heading-light">Before you trust anyone.</h2>
          <ul className="verify-list">
            <li className="verify-item">
              <p className="verify-item-name">Reverse-search her photos</p>
              <p className="verify-item-body">Use Google Lens or TinEye. The same face under other names means stolen photos.</p>
            </li>
            <li className="verify-item">
              <p className="verify-item-name">A video call is not proof</p>
              <p className="verify-item-body">One raided hub in Angeles paid a model &#8369;25,000 per video call.</p>
            </li>
            <li className="verify-item">
              <p className="verify-item-name">Ask to meet this week</p>
              <p className="verify-item-body">Somewhere public: a mall, a caf&eacute;, a Jollibee. Endless excuses are the answer.</p>
            </li>
            <li className="verify-item">
              <p className="verify-item-name">Tell someone you trust</p>
              <p className="verify-item-body">Scammers depend on secrecy.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION: ALREADY SENT MONEY */}
      <section id="already-sent-money" className="section section-dark">
        <div className="section-inner">
          <p className="section-label">3. Already Sent Money?</p>
          <h2 className="section-heading section-heading-light">Do this today.</h2>

          <ul className="rf-action-list">
            <li className="rf-action-item">
              <span className="rf-action-num">1</span>
              <p className="rf-action-text"><strong>Stop sending and stop replying.</strong></p>
            </li>
            <li className="rf-action-item">
              <span className="rf-action-num">2</span>
              <p className="rf-action-text">
                <strong>Call your bank, remittance service or crypto platform now.</strong> Say you paid a scammer and ask them to reverse or freeze the transfer.
              </p>
            </li>
            <li className="rf-action-item">
              <span className="rf-action-num">3</span>
              <p className="rf-action-text">
                <strong>Report it.</strong> Philippines: <strong>CICC Hotline 1326</strong> (free, 24/7). U.S.:{" "}
                <a href="https://ic3.gov" target="_blank" rel="noopener noreferrer">ic3.gov</a> (FBI) and{" "}
                <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer">ReportFraud.ftc.gov</a>.
                Also report the profile to the app.
              </p>
            </li>
            <li className="rf-action-item">
              <span className="rf-action-num">4</span>
              <p className="rf-action-text">
                <strong>Ignore anyone offering to &ldquo;recover&rdquo; your money for a fee.</strong> That is a second scam; fake pages have even used the CICC&rsquo;s name.
              </p>
            </li>
            <li className="rf-action-item">
              <span className="rf-action-num">5</span>
              <p className="rf-action-text"><strong>Change any passwords you shared.</strong></p>
            </li>
          </ul>

          {/* NordPass recommendation */}
          <div className="nordpass-card">
            <p className="nordpass-label">Password Security</p>
            <p className="nordpass-line">
              Expat Compass PH recommends a password manager such as NordPass. It generates and stores strong unique passwords for every account, autofills logins securely across all devices, and syncs between phone and computer — so access is never lost whether in the Philippines or traveling.
            </p>
            <a
              href="https://go.nordpass.io/aff_c?offer_id=488&aff_id=151612&url_id=9356"
              target="_blank"
              rel="noopener noreferrer"
              className="nordpass-btn"
            >
              Get NordPass
            </a>
            <span className="nordpass-disclosure">
              Affiliate link &mdash; Expat Compass PH may earn a small commission if you purchase through this link, at no extra cost to you. Only products genuinely recommended are featured here.
            </span>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="rf-closing-section">
        <div className="rf-closing-inner">
          <p className="rf-closing-text">
            Most Filipinas are not scammers. That&rsquo;s exactly why the scam works. The real ones start in person.{" "}
            <Link href="/dating-philippines">The full guide to dating in the Philippines &rarr;</Link>
          </p>
        </div>
      </section>

      {/* VIDEO PLACEHOLDER — hidden until embed URL is added */}
      <div style={{ display: "none" }}>
        {/* TODO: YouTube embed URL after publish */}
        <section className="section section-dark">
          <div className="section-inner">
            <p className="section-label">Watch the Full Documentary</p>
            <h2 className="section-heading section-heading-light">Watch the full documentary</h2>
          </div>
        </section>
      </div>

      {/* NEWSLETTER */}
      <section className="section newsletter-section">
        <NewsletterSignup heading="Get the next checklist in your inbox." />
      </section>

      {/* SOURCES */}
      <div className="rf-sources-section">
        <div className="rf-sources-inner">
          <p className="rf-sources-label">Sources</p>
          <p className="rf-sources-text">NBI, PNP Anti-Cybercrime Group, FBI IC3 2025 report, U.S. FTC, CICC.</p>
        </div>
      </div>

      {/* AFFILIATE DISCLOSURE */}
      <div className="rf-disclosure-section">
        <div className="rf-disclosure-inner">
          <p className="rf-disclosure-text">
            Some links on this page may be affiliate links. If you use them, Expat Compass PH may earn a small commission at no extra cost to you. Only products and services genuinely believed in are recommended here. Our opinions are never influenced by affiliate relationships.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BodyText from "@/components/BodyText";

export const metadata: Metadata = {
  title: "Best Cities in the Philippines for Expats 2026 — Where to Live Guide",
  description:
    "In-depth honest profiles of the best cities for expats in the Philippines — Cebu and Mactan, Manila and BGC, Dumaguete, Davao, Iloilo, and Baguio. Costs, lifestyle, healthcare, and who each city suits.",
  alternates: { canonical: "https://expatcompassph.com/city-guides" },
};

export default function CityGuidesPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background: #F8F6F1; color: #0B1F3A; }

        /* ── PAGE HEADER ── */
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
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 700; line-height: 1.12; color: #F8F6F1; margin-bottom: 24px;
        }
        .page-sub {
          font-size: 1.05rem; font-weight: 300; line-height: 1.65;
          color: #F8F6F1; max-width: 580px;
        }

        /* ── SECTIONS ── */
        .section { padding: 96px 48px; }
        .section-light { background: #F8F6F1; }
        .section-dark  { background: #0B1F3A; }
        .section-inner { max-width: 1100px; margin: 0 auto; }

        .section-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.7rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 16px;
        }
        .section-eyebrow::before { content: '◈'; font-size: 0.65rem; }
        .section-eyebrow-light { color: #C9A84C; }
        .section-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700; line-height: 1.15; color: #0B1F3A; margin-bottom: 12px;
        }
        .section-heading-light { color: #F8F6F1; }
        .section-tagline {
          font-size: 0.9rem; font-weight: 500; letter-spacing: 0.06em;
          color: #C9A84C; margin-bottom: 32px; font-style: italic;
        }

        /* ── OPENING NOTE ── */
        .opening-note {
          border: 2px solid #C9A84C;
          background: rgba(201,168,76,0.06);
          padding: 36px 40px;
          margin-bottom: 0;
        }
        .opening-note-label {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 14px;
        }
        .opening-note-body {
          font-size: 1rem; font-weight: 300; line-height: 1.8; color: #0B1F3A;
        }

        /* ── CITY SECTION LAYOUT ── */
        .city-layout {
          display: grid; grid-template-columns: 280px 1fr; gap: 80px; align-items: start;
        }
        .city-intro {
          font-size: 0.9rem; font-weight: 300; line-height: 1.8; color: #5C6B7A;
        }
        .city-intro-light { color: #F8F6F1; }
        .city-intro p + p { margin-top: 14px; }

        /* ── CITY BADGE ── */
        .city-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: #C9A84C; color: #0B1F3A;
          font-size: 0.63rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 6px 14px; margin-bottom: 20px;
        }
        .city-badge::before { content: '★'; font-size: 0.6rem; }

        /* ── DETAIL ROWS ── */
        .detail-rows { display: flex; flex-direction: column; }
        .detail-row {
          padding: 24px 0;
          border-bottom: 1px solid #E8E4DC;
          display: grid; grid-template-columns: 180px 1fr; gap: 24px; align-items: start;
        }
        .detail-row:first-child { border-top: 1px solid #E8E4DC; }
        .detail-row-dark { border-bottom-color: rgba(248,246,241,0.1); }
        .detail-row-dark:first-child { border-top-color: rgba(248,246,241,0.1); }
        .detail-row-label {
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
          color: #C9A84C; padding-top: 3px;
        }
        .detail-row-body {
          font-size: 0.88rem; font-weight: 300; line-height: 1.78; color: #4A5868;
        }
        .detail-row-body-light { color: #F8F6F1; }

        /* ── NEIGHBORHOODS SUB-BLOCK ── */
        .neighborhoods { margin-top: 40px; }
        .neighborhoods-heading {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 20px;
          display: flex; align-items: center; gap: 10px;
        }
        .neighborhoods-heading::after { content: ''; flex: 1; height: 1px; background: rgba(201,168,76,0.25); }
        .neighborhood-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: rgba(248,246,241,0.06); }
        .neighborhood-card { background: rgba(248,246,241,0.05); padding: 24px 28px; border-left: 3px solid transparent; }
        .neighborhood-card-featured { border-left-color: #C9A84C; }
        .neighborhood-name {
          font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 8px;
        }
        .neighborhood-body { font-size: 0.83rem; font-weight: 300; line-height: 1.75; color: #F8F6F1; }

        /* light variant neighborhoods */
        .neighborhood-grid-light { background: #E8E4DC; }
        .neighborhood-card-light { background: #F8F6F1; border-left-color: transparent; }
        .neighborhood-card-light.neighborhood-card-featured { border-left-color: #C9A84C; }
        .neighborhood-body-light { color: #4A5868; }

        /* ── COST BOX ── */
        .cost-box {
          background: rgba(201,168,76,0.08); border-left: 3px solid #C9A84C;
          padding: 24px 28px; margin-top: 24px;
        }
        .cost-box-light { background: rgba(11,31,58,0.04); }
        .cost-box-heading {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 14px;
        }
        .cost-list { list-style: none; display: flex; flex-direction: column; gap: 7px; }
        .cost-list li {
          font-size: 0.83rem; font-weight: 300; line-height: 1.6;
          color: #F8F6F1; display: flex; gap: 8px;
        }
        .cost-list li::before { content: '—'; color: #C9A84C; flex-shrink: 0; }
        .cost-list-light li { color: #4A5868; }

        /* ── ALERT BOX ── */
        .city-alert {
          background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.3);
          padding: 20px 24px; margin-top: 24px;
        }
        .city-alert-light { background: rgba(201,168,76,0.08); }
        .city-alert-label {
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 8px;
        }
        .city-alert-body { font-size: 0.83rem; font-weight: 300; line-height: 1.7; color: #F8F6F1; }
        .city-alert-body-light { color: #4A5868; }

        /* ── COMPARISON TABLE ── */
        .table-wrap { overflow-x: auto; margin-top: 8px; }
        .comp-table { width: 100%; border-collapse: collapse; font-size: 0.83rem; }
        .comp-table th {
          text-align: left; padding: 12px 16px;
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          color: #C9A84C; background: rgba(201,168,76,0.08);
          border-bottom: 1px solid rgba(201,168,76,0.2);
        }
        .comp-table td {
          padding: 14px 16px; vertical-align: top;
          font-size: 0.82rem; font-weight: 300; line-height: 1.6;
          color: #F8F6F1;
          border-bottom: 1px solid rgba(248,246,241,0.07);
        }
        .comp-table tr:last-child td { border-bottom: none; }
        .comp-table .city-col {
          font-weight: 600; color: #F8F6F1; white-space: nowrap;
        }
        .comp-table .featured-row td { background: rgba(201,168,76,0.06); }
        .comp-table .featured-row .city-col { color: #C9A84C; }

        /* ── DECISION CARDS ── */
        .decision-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; background: #E8E4DC; }
        .decision-card { background: #F8F6F1; padding: 28px 32px; }
        .decision-scenario {
          font-size: 0.8rem; font-weight: 500; line-height: 1.5; color: #0B1F3A;
          margin-bottom: 10px;
        }
        .decision-scenario::before { content: 'IF  '; color: #8A9AAA; font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; }
        .decision-answer {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem; font-weight: 600; color: #C9A84C;
          margin-bottom: 8px;
        }
        .decision-reason { font-size: 0.8rem; font-weight: 300; line-height: 1.65; color: #5C6B7A; }

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
        .sn-monogram {
          width: 52px; height: 52px; background: #C9A84C;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 700;
          color: #0B1F3A; flex-shrink: 0;
        }
        .sn-name { font-family: 'Playfair Display', serif; font-size: 1.6rem; font-weight: 700; color: #F8F6F1; line-height: 1.1; }
        .sn-tag { font-size: 0.7rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #C9A84C; margin-top: 4px; }
        .sn-rule { height: 1px; background: rgba(201,168,76,0.2); margin-bottom: 32px; }
        .sn-body { font-size: 0.95rem; font-weight: 300; line-height: 1.85; color: rgba(248,246,241,0.82); }
        .sn-body p + p { margin-top: 14px; }
        .sn-verified {
          margin-top: 36px; padding-top: 20px; border-top: 1px solid rgba(201,168,76,0.2);
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #C9A84C;
        }
        .sn-verified::before { content: '✓'; }

        /* ── DISCLAIMER ── */
        .disclaimer-section { background: #F8F6F1; border-top: 3px solid #C9A84C; }
        .disclaimer-body {
          font-size: 0.88rem; font-weight: 300; line-height: 1.85; color: #5C6B7A; max-width: 720px;
        }
        .disclaimer-body strong { color: #0B1F3A; font-weight: 600; }

        /* ── CITY SELECTOR ── */
        .cs-label {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 24px;
          display: flex; align-items: center; gap: 12px;
        }
        .cs-label::before, .cs-label::after {
          content: ''; display: block; flex: 1; height: 1px; background: rgba(201,168,76,0.25);
        }
        .cs-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px;
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
          .cs-grid { grid-template-columns: repeat(2, 1fr); }
          .page-hero { padding: 52px 24px 72px; }
          .section { padding: 64px 24px; }
          .city-layout { grid-template-columns: 1fr; gap: 40px; }
          .detail-row { grid-template-columns: 1fr; gap: 6px; }
          .neighborhood-grid { grid-template-columns: 1fr; }
          .decision-grid { grid-template-columns: 1fr; }
          .sn-section { padding: 56px 24px; }
        }
        @media (max-width: 560px) {
          .page-title { font-size: 2rem; }
        }
      `}</style>

      {/* PAGE HEADER */}
      <header className="page-header">
        <Nav active="/city-guides" />
        <div className="page-hero">
          <p className="page-eyebrow">City Guides</p>
          <h1 className="page-title">Where to Live in the Philippines</h1>
          <p className="page-sub">
            Not every city suits every expat. Honest profiles of the six cities where
            foreigners actually settle — costs, lifestyle, healthcare, and who each one
            is really right for.
          </p>
        </div>
      </header>

      {/* OPENING NOTE */}
      <section className="section section-light">
        <div className="section-inner">
          <div className="opening-note">
            <p className="opening-note-label">Before you choose</p>
            <p className="opening-note-body">
              The biggest mistake new expats make is choosing a city based on photos. The second
              biggest mistake is choosing based on price alone. The right city depends on who you
              are, what matters to you, and what trade-offs you can live with. These profiles are
              written to help you make that decision honestly.
            </p>
          </div>
        </div>
      </section>

      {/* ── CITY SELECTOR ── */}
      <section className="section section-light" style={{paddingTop:'40px', paddingBottom:'48px'}}>
        <div className="section-inner">
          <p className="cs-label">Jump to a City</p>
          <div className="cs-grid">
            <a href="#cebu" className="cs-card">
              <p className="cs-city">Cebu &amp; Mactan</p>
              <p className="cs-tagline">Best overall balance for most expats</p>
            </a>
            <a href="#manila" className="cs-card">
              <p className="cs-city">Manila &amp; BGC</p>
              <p className="cs-tagline">Families, schools, and specialist medical</p>
            </a>
            <a href="#dumaguete" className="cs-card">
              <p className="cs-city">Dumaguete</p>
              <p className="cs-tagline">Best budget retirement city</p>
            </a>
            <a href="#davao" className="cs-card">
              <p className="cs-city">Davao</p>
              <p className="cs-tagline">Safest and most orderly Philippine city</p>
            </a>
            <a href="#iloilo" className="cs-card">
              <p className="cs-city">Iloilo</p>
              <p className="cs-tagline">The underrated gem</p>
            </a>
            <a href="#baguio" className="cs-card">
              <p className="cs-city">Baguio</p>
              <p className="cs-tagline">The only city where you don&rsquo;t need aircon</p>
            </a>
            <a href="#subic" className="cs-card">
              <p className="cs-city">Subic Bay</p>
              <p className="cs-tagline">America&rsquo;s footprint in the Philippines</p>
            </a>
            <a href="#dive-destinations" className="cs-card">
              <p className="cs-city">Dive Destinations</p>
              <p className="cs-tagline">Philippines is a top 3 dive destination</p>
            </a>
            <a href="#education" className="cs-card">
              <p className="cs-city">Education Guide</p>
              <p className="cs-tagline">Schools for expat families by city</p>
            </a>
            <a href="#2026-holidays" className="cs-card">
              <p className="cs-city">2026 Holiday Schedule</p>
              <p className="cs-tagline">Official non-working days — Proclamation No. 1006</p>
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: CEBU AND MACTAN ── */}
      <section className="section section-dark" id="cebu">
        <div className="section-inner">
          <div className="city-layout">
            <div>
              <div className="city-badge">Steve&rsquo;s Home City</div>
              <p className="section-eyebrow section-eyebrow-light">Cebu &amp; Mactan Island</p>
              <h2 className="section-heading section-heading-light">The Expat Sweet Spot of the Philippines</h2>
              <p className="section-tagline">Best overall balance of infrastructure, lifestyle, healthcare, cost, and community</p>
              <div className="city-intro city-intro-light">
                <p>Cebu is the second largest metropolitan area in the Philippines and the undisputed
                capital of the Visayas. For most Western expats it represents the best overall balance
                of infrastructure, lifestyle, healthcare, cost, and community.</p>
                <p>Mactan Island — connected to Cebu City by two bridges — is where most resort-oriented
                expats live, combining beach access with urban convenience.</p>
              </div>

              <div className="cost-box" style={{marginTop:"32px"}}>
                <p className="cost-box-heading">Cost of Living</p>
                <ul className="cost-list">
                  <li>1BR Marigondon budget: ₱3,000–8,000 / month</li>
                  <li>1BR Mactan standard: ₱15,000–30,000 / month</li>
                  <li>1BR Mactan Newtown premium: ₱25,000–45,000 / month</li>
                  <li>Steve&rsquo;s Movenpick 66sqm + full resort access: ₱33,000 / month</li>
                  <li>Electricity moderate aircon: ₱4,000–8,000 / month</li>
                  <li>Comfortable expat total: ₱60,000–100,000 ($1,000–$1,700 USD)</li>
                  <li>Can you live on $1,500 USD/month: Yes, comfortably</li>
                </ul>
              </div>

              <div className="city-alert" style={{marginTop:"20px"}}>
                <p className="city-alert-label">Bridge Reality</p>
                <p className="city-alert-body">
                  Both Mactan bridges experience heavy traffic 7–9am and 5–8pm. Off-peak: 10–15 min
                  crossing. Rush hour: 45 min to over an hour. Sunday is consistently the best day.
                  Plan Cebu City visits accordingly.
                </p>
              </div>
            </div>

            <div>
              <div className="detail-rows">
                <div className="detail-row detail-row-dark">
                  <span className="detail-row-label">Who it suits best</span>
                  <p className="detail-row-body detail-row-body-light">
                    Expats who want a balance of city infrastructure and island lifestyle. Beach lovers
                    who still want access to good hospitals and fast internet. People who enjoy an active
                    expat community without the overwhelming scale of Manila. Those who want to island
                    hop — Mactan is perfectly positioned for exploring the Visayas.
                  </p>
                </div>
                <div className="detail-row detail-row-dark">
                  <span className="detail-row-label">Healthcare</span>
                  <p className="detail-row-body detail-row-body-light">
                    Chong Hua Hospital — ranked among the world&rsquo;s best hospitals in 2026 — is the gold
                    standard for expat healthcare in Cebu. Two campuses: Fuente Osmeña in Cebu City and
                    Mandaue closer to Mactan Island. Cebu Doctors University Hospital, Perpetual Succour
                    Hospital, and Vicente Sotto Memorial Medical Center also serve the area.
                    Steve&rsquo;s personal ER experience at Chong Hua: 6 hours, IV treatment, blood tests,
                    medications for a week, total bill $300 USD.
                  </p>
                </div>
                <div className="detail-row detail-row-dark">
                  <span className="detail-row-label">Best for</span>
                  <p className="detail-row-body detail-row-body-light">
                    Almost everyone. Cebu and Mactan suit the widest range of expat profiles of any city
                    in the Philippines. The notable exception is expats who specifically need Manila&rsquo;s
                    international school options or highest-tier specialist medical care.
                  </p>
                </div>
              </div>

              <div className="neighborhoods" style={{marginTop:"40px"}}>
                <p className="neighborhoods-heading">Neighborhoods</p>
                <div className="neighborhood-grid">
                  <div className="neighborhood-card neighborhood-card-featured">
                    <p className="neighborhood-name">Punta Engaño &amp; Mactan Newtown</p>
                    <p className="neighborhood-body">
                      The premium end of Mactan Island. Punta Engaño is the resort strip — Movenpick,
                      Shangri-La, Crimson — private beaches and 5-star amenities. Mactan Newtown is a
                      master-planned development with high-end condominiums, restaurants, bars, gyms,
                      and retail all within walking distance. Steve lives in Punta Engaño at the
                      Residences at Movenpick. Less than half a mile separates the two areas.
                    </p>
                  </div>
                  <div className="neighborhood-card">
                    <p className="neighborhood-name">Marigondon</p>
                    <p className="neighborhood-body">
                      More affordable Mactan option. Good mid-density community with 7-Eleven, restaurants,
                      bars, and nail salons within walking distance. Studio apartments from ₱3,000 per month.
                      Less glamorous than Mactan Newtown but completely functional and good value.
                    </p>
                  </div>
                  <div className="neighborhood-card">
                    <p className="neighborhood-name">IT Park &amp; Lahug (Cebu City)</p>
                    <p className="neighborhood-body">
                      The urban alternative for expats who want city life over beach life. IT Park is
                      walkable, lively, and packed with restaurants, cafes, and bars. Home to the Sugbo
                      Mercado night market. Talamban road can be difficult and Banilad is prone to flooding
                      during heavy rains — verify with locals before committing.
                    </p>
                  </div>
                  <div className="neighborhood-card">
                    <p className="neighborhood-name">Banilad &amp; Lahug</p>
                    <p className="neighborhood-body">
                      Established mid-range residential areas with good infrastructure, quieter than IT
                      Park. Popular with longer-term expat families. Good access to shopping and hospitals.
                      Banilad prone to flooding in heavy rains — verify with locals before committing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: MANILA AND BGC ── */}
      <section className="section section-light" id="manila">
        <div className="section-inner">
          <div className="city-layout">
            <div>
              <p className="section-eyebrow">Manila &amp; BGC</p>
              <h2 className="section-heading">First-World Infrastructure at Developing World Prices — With Traffic</h2>
              <p className="section-tagline">Best hospitals, best international schools, highest cost, worst traffic</p>
              <div className="city-intro">
                <p>Metro Manila is the Philippines&rsquo; capital and largest metropolitan area with over 13
                million people in the city proper. It offers the country&rsquo;s best hospitals, most
                international schools, strongest expat infrastructure, and most direct flight connections.</p>
                <p>The trade-offs are traffic, air quality, cost, and scale.</p>
              </div>

              <div className="cost-box cost-box-light" style={{marginTop:"32px"}}>
                <p className="cost-box-heading">Cost of Living</p>
                <ul className="cost-list cost-list-light">
                  <li>1BR BGC: $700–1,200 USD / month</li>
                  <li>1BR Makati: $600–1,000 USD / month</li>
                  <li>1BR Pasig: $400–700 USD / month</li>
                  <li>1BR Quezon City: $250–450 USD / month</li>
                  <li>Comfortable single expat total BGC: $1,800–2,500 USD</li>
                  <li>Budget expat total Quezon City: $1,000–1,400 USD</li>
                </ul>
              </div>

              <div className="city-alert city-alert-light" style={{marginTop:"20px", border:"1px solid rgba(11,31,58,0.15)"}}>
                <p className="city-alert-label">The Honest Trade-Offs</p>
                <p className="city-alert-body city-alert-body-light">
                  Manila traffic is among Asia&rsquo;s worst. Rush hour commutes of 1–3 hours are routine.
                  Air quality is poor — regular haze especially in summer. BGC feels like a bubble:
                  comfortable and modern but insulated from the real Philippines. Cost is significantly
                  higher than other Philippine cities.
                </p>
              </div>
            </div>

            <div>
              <div className="detail-rows">
                <div className="detail-row">
                  <span className="detail-row-label">BGC — Bonifacio Global City</span>
                  <p className="detail-row-body">
                    The most expat-friendly neighborhood in the Philippines. Former military base turned
                    planned urban district — clean streets, working traffic lights, wide sidewalks, no
                    street vendors, and a thoroughly modern feel that surprises first-time visitors. BGC
                    has the Philippines&rsquo; densest concentration of international restaurants, luxury
                    condos, co-working spaces, and multinational offices. International School Manila and
                    British School Manila are within or near BGC. Best for families, corporate transferees,
                    and expats who want Singapore-level infrastructure.
                  </p>
                </div>
                <div className="detail-row">
                  <span className="detail-row-label">Makati</span>
                  <p className="detail-row-body">
                    The original CBD. Legazpi and Salcedo Villages are leafy, walkable, and home to weekend
                    markets. Poblacion has the best independent bar and restaurant scene in the Philippines.
                    Rockwell is gated luxury. 1BR: $600–1,000 USD per month. More character than BGC with
                    slightly lower prices and more hustle.
                  </p>
                </div>
                <div className="detail-row">
                  <span className="detail-row-label">Pasig &amp; Ortigas</span>
                  <p className="detail-row-body">
                    The value play between Makati and BGC. 20–30 percent lower rents than Makati for
                    similar amenities. Kapitolyo has an excellent food scene. Traffic on EDSA and Ortigas
                    Avenue is relentless. Good option for cost-conscious professionals who still need Manila access.
                  </p>
                </div>
                <div className="detail-row">
                  <span className="detail-row-label">Healthcare</span>
                  <p className="detail-row-body">
                    Manila has the Philippines&rsquo; best hospitals. St. Luke&rsquo;s Medical Center BGC holds Global
                    Healthcare Accreditation — the first Philippine hospital with this designation. Makati
                    Medical Center and The Medical City are also JCI-accredited. GP consultations $10–25 USD.
                    Specialists $17–52 USD. All major hospitals have English-speaking staff.
                  </p>
                </div>
                <div className="detail-row">
                  <span className="detail-row-label">Best for</span>
                  <p className="detail-row-body">
                    Families who need international schools. Corporate transferees. Expats who need Manila&rsquo;s
                    specialist medical infrastructure. Those who want the most international urban experience
                    in the Philippines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: DUMAGUETE ── */}
      <section className="section section-dark" id="dumaguete">
        <div className="section-inner">
          <div className="city-layout">
            <div>
              <p className="section-eyebrow section-eyebrow-light">Dumaguete</p>
              <h2 className="section-heading section-heading-light">The Quiet Achiever — Best Budget Retirement City in the Philippines</h2>
              <p className="section-tagline">Lowest cost of living of any well-served expat city in the Philippines</p>
              <div className="city-intro city-intro-light">
                <p>A small university city of approximately 140,000 people on the eastern coast of
                Negros Oriental island. Consistently tops lists of best retirement destinations in Asia —
                lowest cost of living of any well-served expat city in the Philippines, combined with a
                compact walkable layout, a genuine expat community, and access to world-class diving.</p>
                <p>The presence of Silliman University gives Dumaguete an educated English-speaking
                population, a vibrant cultural scene, and a university-town feel that most Philippine
                cities lack. Rizal Boulevard along the waterfront is the social heart of the city.</p>
              </div>

              <div className="cost-box" style={{marginTop:"32px"}}>
                <p className="cost-box-heading">Cost of Living — Most Affordable</p>
                <ul className="cost-list">
                  <li>1BR near center: $200–350 USD / month</li>
                  <li>1BR outside center: $150–250 USD / month</li>
                  <li>Small house with yard: $300–500 USD / month</li>
                  <li>Comfortable single expat total: ~$800–1,000 USD / month</li>
                  <li>Primary care doctor visit: $12–25 USD</li>
                  <li>Monthly healthcare spend (healthy expat): ~$40–50 USD out of pocket</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="detail-rows">
                <div className="detail-row detail-row-dark">
                  <span className="detail-row-label">What makes it different</span>
                  <p className="detail-row-body detail-row-body-light">
                    The expat community is well established and close-knit. Rizal Boulevard along the
                    waterfront is the social heart — cafes, restaurants, and weekend markets in a compact
                    walkable strip that feels nothing like Manila or Cebu&rsquo;s sprawl. Apo Island, one of
                    the world&rsquo;s top dive sites, is 30 minutes away by boat.
                  </p>
                </div>
                <div className="detail-row detail-row-dark">
                  <span className="detail-row-label">Healthcare</span>
                  <p className="detail-row-body detail-row-body-light">
                    Silliman University Medical Center anchors Dumaguete&rsquo;s healthcare. Adequate for routine
                    and most specialist care. For complex procedures and serious emergencies, Cebu —
                    approximately 3–4 hours by fast ferry — is the standard referral destination. This is
                    the main healthcare trade-off of choosing Dumaguete over Cebu.
                  </p>
                </div>
                <div className="detail-row detail-row-dark">
                  <span className="detail-row-label">Honest limitations</span>
                  <p className="detail-row-body detail-row-body-light">
                    No Grab in Dumaguete — motorbikes, tricycles, and your own scooter are the transport
                    reality. Expats consistently recommend learning to ride a motorcycle before arriving.
                    Smaller selection of Western groceries and restaurants than Cebu or Manila. Ferry-dependent
                    for island travel which adds logistical complexity.
                  </p>
                </div>
                <div className="detail-row detail-row-dark">
                  <span className="detail-row-label">Best for</span>
                  <p className="detail-row-body detail-row-body-light">
                    Retirees on fixed income — Social Security or modest pension. Budget-conscious expats
                    who prioritize low cost over urban amenities. Divers. People who want a genuine small-city
                    Philippine life rather than an expat bubble. The $800–1,000 USD per month budget works
                    here in a way it does not in Cebu or Manila.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: DAVAO ── */}
      <section className="section section-light" id="davao">
        <div className="section-inner">
          <div className="city-layout">
            <div>
              <p className="section-eyebrow">Davao City</p>
              <h2 className="section-heading">The Safe, Clean, Organized Alternative — Mindanao&rsquo;s Best Kept Secret</h2>
              <p className="section-tagline">Largest city in the Philippines by land area — consistently ranked among the safest</p>
              <div className="city-intro">
                <p>Davao City is the largest city in the Philippines by land area at 2,444 square
                kilometers — roughly 8 times Cebu City&rsquo;s footprint. Consistently ranked among the
                Philippines&rsquo; safest cities and famous for its cleanliness, strict local ordinances,
                and organized feel.</p>
                <p>Strict ordinances that actually get enforced: total smoking ban in public spaces, total
                firecracker ban, 1am–8am liquor ban, 30km/h CBD speed limit, helmet enforcement. Some
                expats find this peaceful. Others find it restrictive.</p>
              </div>

              <div className="cost-box cost-box-light" style={{marginTop:"32px"}}>
                <p className="cost-box-heading">Cost of Living</p>
                <ul className="cost-list cost-list-light">
                  <li>1BR condo Lanang: ~$250–450 USD / month</li>
                  <li>Comfortable single expat total: ~$900–1,200 USD (₱45,000–55,000 / month as of May 2026)</li>
                  <li>Electricity: Davao Light rates ranged ₱9.71–₱11.72 per kWh across 6 months in 2025–2026 — budget for the band, not a fixed number</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="detail-rows">
                <div className="detail-row">
                  <span className="detail-row-label">Neighborhoods</span>
                  <p className="detail-row-body">
                    <strong>Lanang:</strong> Northeast near SM Lanang Premier mall and the airport. Condo-heavy.
                    The default first stop for relocating expats. Most expensive district.
                    <br /><br />
                    <strong>Bajada &amp; Matina:</strong> Mid-range areas with good access to hospitals and amenities.
                    <br /><br />
                    <strong>Buhangin:</strong> More affordable, further from center.
                  </p>
                </div>
                <div className="detail-row">
                  <span className="detail-row-label">Healthcare</span>
                  <p className="detail-row-body">
                    Southern Philippines Medical Center handles major cases. Davao Doctors Hospital and
                    Brokenshire Memorial Hospital serve private patients. Adequate for most needs. For rare
                    specialist care Manila is the reference. Davao is approximately 1.5 hours by plane from
                    Manila and Cebu.
                  </p>
                </div>
                <div className="detail-row">
                  <span className="detail-row-label">Honest trade-offs</span>
                  <p className="detail-row-body">
                    Davao&rsquo;s large land area means you cannot walk between neighborhoods the way you can in
                    Cebu&rsquo;s IT Park triangle. Transport is primarily Grab and taxis — limited walkability
                    outside specific commercial areas. The city is less international than Cebu or Manila
                    with a smaller expat community and fewer Western amenities. Mindanao carries a security
                    perception issue for some foreigners — Davao City itself is consistently rated safe and
                    expats report feeling comfortable.
                  </p>
                </div>
                <div className="detail-row">
                  <span className="detail-row-label">Best for</span>
                  <p className="detail-row-body">
                    Expats who prioritize safety and cleanliness. Nature lovers and outdoor enthusiasts —
                    Davao is the best base for Philippine outdoor adventure (Mount Apo, Samal Island, Mati).
                    People who want a real Philippine city experience without Manila&rsquo;s scale. Budget-conscious
                    expats who want urban amenities at lower cost than Cebu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ILOILO ── */}
      <section className="section section-dark" id="iloilo">
        <div className="section-inner">
          <div className="city-layout">
            <div>
              <p className="section-eyebrow section-eyebrow-light">Iloilo City</p>
              <h2 className="section-heading section-heading-light">The Underrated Gem — UNESCO Gastronomy City With a Smart Expat Community</h2>
              <p className="section-tagline">First Philippine UNESCO Creative City of Gastronomy — consistently underrated</p>
              <div className="city-intro city-intro-light">
                <p>Iloilo City on the southeastern coast of Panay island is one of the Philippines&rsquo; most
                livable cities and consistently one of the most underrated by expats who overlook it in
                favor of Cebu or Dumaguete. Designated a UNESCO Creative City of Gastronomy — the first
                in the Philippines.</p>
                <p>Iloilo has the longest walkable and bikeable linear park in the Philippines along the
                Iloilo River Esplanade. The city is genuinely clean, well-planned, and has invested heavily
                in green spaces and cycling infrastructure.</p>
              </div>

              <div className="cost-box" style={{marginTop:"32px"}}>
                <p className="cost-box-heading">Cost of Living</p>
                <ul className="cost-list">
                  <li>1BR Mandurriao: $250–450 USD / month</li>
                  <li>1BR outside center: $180–300 USD / month</li>
                  <li>Comfortable single expat total: ~$800–1,050 USD / month</li>
                  <li>One of the lowest total monthly costs of any major Philippine city</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="detail-rows">
                <div className="detail-row detail-row-dark">
                  <span className="detail-row-label">Neighborhoods</span>
                  <p className="detail-row-body detail-row-body-light">
                    <strong style={{color:"#C9A84C"}}>Mandurriao:</strong> The preferred expat neighborhood. Modern condominiums, proximity to major hospitals, walkable amenities. Iloilo Business Park is nearby.
                    <br /><br />
                    <strong style={{color:"#C9A84C"}}>City Proper &amp; Jaro:</strong> More affordable, more local character, good access to markets and the waterfront.
                  </p>
                </div>
                <div className="detail-row detail-row-dark">
                  <span className="detail-row-label">Healthcare</span>
                  <p className="detail-row-body detail-row-body-light">
                    The Medical City Iloilo and Healthway QualiMed are the main private hospital options.
                    Both are well-regarded for routine and specialist care. For rare complex procedures,
                    Cebu or Manila remain the standard referral destinations. Iloilo is approximately 1 hour
                    by plane from Manila and 45 minutes from Cebu.
                  </p>
                </div>
                <div className="detail-row detail-row-dark">
                  <span className="detail-row-label">Honest trade-offs</span>
                  <p className="detail-row-body detail-row-body-light">
                    Smaller expat community than Cebu or Manila means less built-in social infrastructure
                    when you arrive. Fewer Western grocery options. Airport connections are good but not as
                    extensive as Cebu or Manila. Local language is Hiligaynon (Ilonggo) — distinct from
                    Tagalog. Learning basic phrases helps significantly.
                  </p>
                </div>
                <div className="detail-row detail-row-dark">
                  <span className="detail-row-label">Best for</span>
                  <p className="detail-row-body detail-row-body-light">
                    Expats who want a genuinely livable Philippine city that has not been overrun by
                    foreigners. Foodies — Iloilo&rsquo;s restaurant and market scene is exceptional. Budget-conscious
                    expats who want better infrastructure than Dumaguete at similar cost. People who plan
                    to island hop the Western Visayas — Iloilo is an excellent base for Guimaras, Bacolod,
                    and Antique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: BAGUIO ── */}
      <section className="section section-light" id="baguio">
        <div className="section-inner">
          <div className="city-layout">
            <div>
              <p className="section-eyebrow">Baguio City</p>
              <h2 className="section-heading">The Cool Mountain City — The Philippines Without the Tropical Heat</h2>
              <p className="section-tagline">The only Philippine city where you can live without running aircon all day</p>
              <div className="city-intro">
                <p>Baguio is unlike every other city on this list in one fundamental way — the weather.
                Sitting at approximately 1,500 meters elevation in the Cordillera mountains of northern
                Luzon, Baguio rarely exceeds 26°C. In a country where the rest of the major cities
                regularly hit 35°C and above, this is a genuinely remarkable distinction.</p>
                <p>The cool climate is the primary draw and it genuinely changes daily life. You sleep
                comfortably without aircon. You can exercise outdoors in the morning without heat
                exhaustion. Strawberries and vegetables that cannot grow in the tropical lowlands are
                locally produced and fresh in Baguio&rsquo;s markets.</p>
              </div>

              <div className="cost-box cost-box-light" style={{marginTop:"32px"}}>
                <p className="cost-box-heading">Cost of Living</p>
                <ul className="cost-list cost-list-light">
                  <li>Budget studio or boarding house: $60–170 USD / month</li>
                  <li>1BR center average: ~$260 USD / month</li>
                  <li>1BR outside center average: ~$180 USD / month</li>
                  <li>Comfortable digital nomad total: ~$800–1,200 USD / month</li>
                  <li>No aircon electricity bill: ₱2,000–3,000 / month typical</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="detail-rows">
                <div className="detail-row">
                  <span className="detail-row-label">Healthcare</span>
                  <p className="detail-row-body">
                    Baguio General Hospital and Medical Center handles most routine care. Private hospitals
                    in the area are adequate for general needs. For specialist care and complex procedures,
                    Manila is the reference — Clark International Airport is approximately 2–3 hours away.
                    This is the most significant healthcare trade-off of choosing Baguio.
                  </p>
                </div>
                <div className="detail-row">
                  <span className="detail-row-label">Transport reality</span>
                  <p className="detail-row-body">
                    No Grab in Baguio — getting around is by taxi, jeepney, or your own vehicle. Taxis
                    can be difficult to find and are in high demand. Traffic is heavy and worsens
                    significantly during peak tourist season December through April.
                  </p>
                </div>
                <div className="detail-row">
                  <span className="detail-row-label">Honest trade-offs</span>
                  <p className="detail-row-body">
                    Multiple reviewers specifically note air quality issues — the combination of traffic,
                    forest proximity, and geographic bowl can produce significant air pollution, particularly
                    in summer. Globe mobile internet is often unreliable in Baguio — Smart PLDT performs better.
                    Airport access is the most difficult of any city on this list: Clark International Airport
                    2–3 hour drive, Manila NAIA 3–4 hours.
                  </p>
                </div>
                <div className="detail-row">
                  <span className="detail-row-label">Best for</span>
                  <p className="detail-row-body">
                    Expats who genuinely cannot tolerate tropical heat — this is the primary and often
                    decisive factor for choosing Baguio. Digital nomads who want low costs and cool
                    temperatures and can tolerate limited mobility. Artists, hikers, and people drawn to
                    mountain culture. People who will visit regularly rather than live permanently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUBIC BAY ── */}
      <section className="section section-dark" id="subic">
        <div className="section-inner">
          <div className="city-layout">
            <div>
              <p className="section-eyebrow section-eyebrow-light">Subic Bay &amp; Olongapo</p>
              <h2 className="section-heading section-heading-light">America&rsquo;s Footprint — A Unique Philippines Experience</h2>
              <p className="section-tagline" style={{color:'rgba(248,246,241,0.78)'}}>The former US Naval Base and the expat community that never left</p>
              <div className="city-intro city-intro-light">
                <p>Subic Bay and the adjacent Olongapo City occupy a unique place in Philippine expat life. This is where the US Naval Base Subic Bay operated until 1991 — one of the largest overseas US military installations in history. The American influence runs deep in the local culture, language, and community in ways you will not find anywhere else in the Philippines.</p>
                <p>Taglish spoken locally is more English-influenced here than almost anywhere outside Metro Manila. The American Legion Post 4 in Olongapo is an active community hub. There are thousands of retired American veterans in the area who chose to stay close to where they once served.</p>
                <p>The former naval base is now a special economic zone — the Subic Bay Freeport Zone — with its own separate governance, lower taxes, and a distinct character from the rest of Olongapo. Harbor Point Ayala Mall sits within the Freeport Zone. The zone has its own beaches, yacht club, and water sports facilities. Duty-free shopping is available within the zone.</p>
              </div>

              <div className="cost-box" style={{marginTop:'32px'}}>
                <p className="cost-box-heading">Cost of Living</p>
                <ul className="cost-list">
                  <li>1BR Barretto or Kalaklan long-term: $250–500 USD / month</li>
                  <li>Comfortable single expat total: ~$900–1,200 USD / month</li>
                  <li>Note: electricity costs similar to Cebu for heavy aircon use</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="neighborhoods" style={{marginTop:'0'}}>
                <p className="neighborhoods-heading">Neighborhoods</p>
                <div className="neighborhood-grid">
                  <div className="neighborhood-card neighborhood-card-featured">
                    <p className="neighborhood-name">Barretto</p>
                    <p className="neighborhood-body">Most popular expat neighborhood outside the Freeport Zone. Known for its bars and restaurants along the national highway. Affordable rents and a lively expat social scene.</p>
                  </div>
                  <div className="neighborhood-card">
                    <p className="neighborhood-name">Kalaklan &amp; Mabayuan</p>
                    <p className="neighborhood-body">More residential and quieter than Barretto. Good value rents. Preferred by expats who want community without the bar strip character.</p>
                  </div>
                  <div className="neighborhood-card">
                    <p className="neighborhood-name">Olongapo City Proper</p>
                    <p className="neighborhood-body">Urban and walkable. SM City Olongapo is the main mall. The American Legion and Frankie&rsquo;s Restaurant are community anchors.</p>
                  </div>
                  <div className="neighborhood-card">
                    <p className="neighborhood-name">Subic Bay Freeport Zone</p>
                    <p className="neighborhood-body">Premium pricing but modern facilities, good security, and beachfront access. Distinct governance from the rest of Olongapo.</p>
                  </div>
                </div>
              </div>

              <div className="detail-rows" style={{marginTop:'32px'}}>
                <div className="detail-row detail-row-dark">
                  <span className="detail-row-label">Healthcare</span>
                  <p className="detail-row-body detail-row-body-light">TotalMed Subic Ambulatory and Medical Center and Lifeline Medical Center serve the area with specialist services including cardiology, urology, and general medicine. For complex cases Olongapo City hospitals handle most needs, with Manila as the referral destination. Subic is approximately 2 to 3 hours from Manila via the NLEX and SCTEX expressways.</p>
                </div>
                <div className="detail-row detail-row-dark">
                  <span className="detail-row-label">Honest assessment</span>
                  <p className="detail-row-body detail-row-body-light">The bar scene in Barretto is prominent and shapes the character of that neighborhood significantly. The expat community skews older and heavily veteran. For veterans who want to be near a piece of American history and live among people who share that connection, Subic Bay is genuinely compelling. For others it may be an interesting place to visit but not a first choice for long-term living.</p>
                </div>
                <div className="detail-row detail-row-dark">
                  <span className="detail-row-label">Best for</span>
                  <p className="detail-row-body detail-row-body-light">US military veterans who want to retire near the former Naval Base. Expats who want a strong American-influenced community. Budget-conscious expats who want proximity to Manila without Manila costs. People who enjoy a community lifestyle over a beach resort setting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FESTIVAL CALENDAR ── */}
      <section className="section section-light">
        <div className="section-inner">
          <p className="section-eyebrow">Live Like a Local</p>
          <h2 className="section-heading">Philippines Festival Calendar — Plan Around These Dates</h2>
          <BodyText variant="light-bg" style={{fontSize:'0.93rem', fontWeight:300, lineHeight:1.85, marginBottom:'32px', maxWidth:'760px'}}>The Philippines has some of the most spectacular festivals in Asia. As an expat living here you will want to know about them — both to enjoy them and to plan your travel around the traffic and accommodation crunches they create.</BodyText>

          {/* Sinulog — featured gold card */}
          <div style={{background:'rgba(201,168,76,0.08)', border:'2px solid #C9A84C', padding:'28px 32px', marginBottom:'16px', maxWidth:'860px'}}>
            <p style={{fontSize:'0.62rem', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'#C9A84C', marginBottom:'8px'}}>★ Featured — Biggest Festival in the Philippines</p>
            <p style={{fontFamily:"'Playfair Display', serif", fontSize:'1.15rem', fontWeight:700, color:'#0B1F3A', marginBottom:'6px'}}>Sinulog — Cebu City</p>
            <p style={{fontSize:'0.72rem', fontWeight:600, color:'#C9A84C', marginBottom:'14px', letterSpacing:'0.06em'}}>Third Sunday of January &mdash; Sinulog 2027: January 17</p>
            <BodyText variant="light-bg" style={{fontSize:'0.9rem', fontWeight:300, lineHeight:1.8, marginBottom:'12px'}}>One of the largest festivals in the Philippines attracting over 5 million attendees. A religious and cultural celebration honoring the Santo Ni&ntilde;o — the Child Jesus — combining grand parades, street dancing, novena masses, and spectacular fireworks. Activities begin as early as December 27 and run through January 31.</BodyText>
            <BodyText variant="light-bg" style={{fontSize:'0.9rem', fontWeight:300, lineHeight:1.8}}><strong style={{color:'#0B1F3A'}}>For expats on Mactan:</strong> The bridge crossing to Cebu City during Sinulog week is extremely congested. Stay on the Mactan side if you do not plan to attend. If you want to attend, stay in Cebu City — not Mactan. Book accommodation months in advance as the city fills completely.</BodyText>
          </div>

          <div className="detail-rows" style={{maxWidth:'860px'}}>
            <div className="detail-row">
              <span className="detail-row-label">Ati-Atihan<br/>Kalibo, Aklan</span>
              <div>
                <p style={{fontSize:'0.72rem', fontWeight:600, color:'#C9A84C', marginBottom:'6px', letterSpacing:'0.06em'}}>Third Sunday of January — same weekend as Sinulog</p>
                <p className="detail-row-body">The oldest festival in the Philippines, often called the Mother of all Philippine Festivals. Wild street dancing, tribal costumes, and non-stop drumming in Kalibo in Aklan, Western Visayas. More raw and community-based than the polished Sinulog parade. Flights to Caticlan near Boracay fill up around this time.</p>
              </div>
            </div>
            <div className="detail-row">
              <span className="detail-row-label">Dinagyang<br/>Iloilo City</span>
              <div>
                <p style={{fontSize:'0.72rem', fontWeight:600, color:'#C9A84C', marginBottom:'6px', letterSpacing:'0.06em'}}>Fourth Sunday of January — Dinagyang 2027: January 24</p>
                <p className="detail-row-body">Iloilo&rsquo;s answer to Sinulog — equally spectacular and some argue more authentic. Warrior dance performances in elaborate tribal costumes honoring the Santo Ni&ntilde;o. If you miss Sinulog in Cebu, Dinagyang in Iloilo the following weekend is an excellent alternative with less crowding.</p>
              </div>
            </div>
            <div className="detail-row">
              <span className="detail-row-label">Panagbenga<br/>Baguio City</span>
              <div>
                <p style={{fontSize:'0.72rem', fontWeight:600, color:'#C9A84C', marginBottom:'6px', letterSpacing:'0.06em'}}>The entire month of February</p>
                <p className="detail-row-body">Baguio&rsquo;s annual flower festival celebrating the city&rsquo;s cool climate and highland flowers. Float parades, street dancing, and flower arrangements. February is the best time to visit Baguio — peak blooms, festive atmosphere, and still in the dry season. Accommodation fills significantly in February.</p>
              </div>
            </div>
            <div className="detail-row">
              <span className="detail-row-label">Moriones<br/>Marinduque</span>
              <div>
                <p style={{fontSize:'0.72rem', fontWeight:600, color:'#C9A84C', marginBottom:'6px', letterSpacing:'0.06em'}}>Holy Week — March or April depending on Easter</p>
                <p className="detail-row-body">Men dress as Roman soldiers in elaborate carved wooden masks and costumes and reenact the story of Longinus the Roman soldier who stabbed Christ. Held on the island of Marinduque accessible by ferry from Lucena or by small plane. Worth the trip for the completely unique visual spectacle.</p>
              </div>
            </div>
            <div className="detail-row">
              <span className="detail-row-label">Pahiyas<br/>Lucban, Quezon</span>
              <div>
                <p style={{fontSize:'0.72rem', fontWeight:600, color:'#C9A84C', marginBottom:'6px', letterSpacing:'0.06em'}}>May 15 every year</p>
                <p className="detail-row-body">Houses in Lucban are decorated with kiping — colorful leaf-shaped rice wafers — and local produce, creating the most visually striking street decoration of any Philippine festival. A 2-hour drive from Manila. Excellent day trip or overnight from Metro Manila.</p>
              </div>
            </div>
            <div className="detail-row">
              <span className="detail-row-label">Kadayawan<br/>Davao City</span>
              <div>
                <p style={{fontSize:'0.72rem', fontWeight:600, color:'#C9A84C', marginBottom:'6px', letterSpacing:'0.06em'}}>Third week of August</p>
                <p className="detail-row-body">Davao&rsquo;s major festival celebrating the city&rsquo;s diverse indigenous cultures, harvest, and natural bounty. Street dancing, floral floats, and tribal performances. The best time to visit Davao if you want to see the city at its most festive.</p>
              </div>
            </div>
            <div className="detail-row">
              <span className="detail-row-label">MassKara<br/>Bacolod City</span>
              <div>
                <p style={{fontSize:'0.72rem', fontWeight:600, color:'#C9A84C', marginBottom:'6px', letterSpacing:'0.06em'}}>October — weekend nearest October 19</p>
                <p className="detail-row-body">The Festival of Smiling Masks. Dancers in elaborate smiling mask costumes, street parties, and a genuinely joyful atmosphere. Bacolod earned the nickname City of Smiles and MassKara is the celebration of that identity. Easily accessible from Cebu by fast ferry.</p>
              </div>
            </div>
          </div>

          <div className="city-alert city-alert-light" style={{maxWidth:'860px', marginTop:'28px'}}>
            <p className="city-alert-label">Practical Festival Planning Tips</p>
            <p className="city-alert-body city-alert-body-light">Book accommodation months in advance for Sinulog, Ati-Atihan, and Dinagyang — these fill up completely. Sinulog week in Cebu: avoid crossing the Mactan-Cebu bridge unless you have hours to spare. Most major Philippine festivals fall in January to May during the dry season — ideal travel weather. Sinulog 2027: January 17. Dinagyang 2027: January 24.</p>
          </div>
        </div>
      </section>

      {/* ── 2026 HOLIDAY SCHEDULE ── */}
      <section className="section section-dark" id="2026-holidays">
        <div className="section-inner">
          <p className="section-eyebrow section-eyebrow-light">Proclamation No. 1006 · Signed Sept 3, 2025</p>
          <h2 className="section-heading section-heading-light">2026 Philippine National Holiday Schedule</h2>
          <p style={{fontSize:'0.93rem', fontWeight:300, lineHeight:1.85, color:'#F8F6F1', marginBottom:'32px', maxWidth:'760px'}}>
            Official non-working holidays declared by the President of the Philippines for 2026. Government offices, the Bureau of Immigration, banks, and most private businesses are closed on regular and special non-working holidays. Plan your visa appointments, bank visits, and arrivals around these dates.
          </p>

          <div style={{overflowX:'auto', maxWidth:'860px'}}>
            <table style={{width:'100%', borderCollapse:'collapse', fontSize:'0.87rem'}}>
              <thead>
                <tr>
                  <th style={{background:'#C9A84C', color:'#0B1F3A', padding:'11px 18px', textAlign:'left', fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', whiteSpace:'nowrap'}}>Date</th>
                  <th style={{background:'#C9A84C', color:'#0B1F3A', padding:'11px 18px', textAlign:'left', fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase'}}>Holiday</th>
                  <th style={{background:'#C9A84C', color:'#0B1F3A', padding:'11px 18px', textAlign:'left', fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', whiteSpace:'nowrap'}}>Type</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { date: "Jan 1", name: "New Year's Day", type: "regular" },
                  { date: "Feb 17", name: "Chinese New Year", type: "special" },
                  { date: "Feb 25", name: "EDSA People Power Anniversary", type: "working" },
                  { date: "Apr 2", name: "Maundy Thursday", type: "regular" },
                  { date: "Apr 3", name: "Good Friday", type: "regular" },
                  { date: "Apr 4", name: "Black Saturday", type: "special" },
                  { date: "Apr 9", name: "Day of Valor (Araw ng Kagitingan)", type: "regular" },
                  { date: "May 1", name: "Labor Day", type: "regular" },
                  { date: "Jun 12", name: "Independence Day", type: "regular" },
                  { date: "TBA", name: "Eidul Fitr", type: "tba" },
                  { date: "TBA", name: "Eidul Adha", type: "tba" },
                  { date: "Aug 21", name: "Ninoy Aquino Day", type: "special" },
                  { date: "Aug 31", name: "National Heroes Day", type: "regular" },
                  { date: "Nov 1", name: "All Saints Day", type: "special" },
                  { date: "Nov 2", name: "All Souls Day", type: "special" },
                  { date: "Nov 30", name: "Bonifacio Day", type: "regular" },
                  { date: "Dec 8", name: "Feast of the Immaculate Conception", type: "special" },
                  { date: "Dec 24", name: "Christmas Eve", type: "special" },
                  { date: "Dec 25", name: "Christmas Day", type: "regular" },
                  { date: "Dec 30", name: "Rizal Day", type: "regular" },
                  { date: "Dec 31", name: "New Year's Eve", type: "special" },
                ].map((row, i) => {
                  const isWorking = row.type === "working";
                  const isTBA = row.type === "tba";
                  const rowBg = isWorking
                    ? "rgba(251,191,36,0.08)"
                    : i % 2 === 0
                    ? "rgba(248,246,241,0.03)"
                    : "transparent";
                  const typePill =
                    row.type === "regular"
                      ? { label: "Regular Holiday", bg: "#0B1F3A", border: "rgba(248,246,241,0.25)", color: "#F8F6F1" }
                      : row.type === "special"
                      ? { label: "Special Non-Working", bg: "rgba(201,168,76,0.15)", border: "#C9A84C", color: "#C9A84C" }
                      : row.type === "working"
                      ? { label: "Special Working Day", bg: "rgba(251,191,36,0.12)", border: "#FBBF24", color: "#FBBF24" }
                      : { label: "TBA — Islamic Calendar", bg: "rgba(148,163,184,0.1)", border: "rgba(148,163,184,0.4)", color: "rgba(248,246,241,0.70)" };
                  return (
                    <tr key={row.name} style={{background: rowBg}}>
                      <td style={{padding:'12px 18px', borderBottom:'1px solid rgba(248,246,241,0.07)', color:'#F8F6F1', fontWeight:600, whiteSpace:'nowrap', verticalAlign:'top'}}>{row.date}</td>
                      <td style={{padding:'12px 18px', borderBottom:'1px solid rgba(248,246,241,0.07)', color:'#F8F6F1', verticalAlign:'top', lineHeight:1.55}}>{row.name}</td>
                      <td style={{padding:'12px 18px', borderBottom:'1px solid rgba(248,246,241,0.07)', verticalAlign:'top'}}>
                        <span style={{display:'inline-block', fontSize:'0.62rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', background: typePill.bg, border:`1px solid ${typePill.border}`, color: typePill.color, padding:'3px 9px', whiteSpace:'nowrap'}}>
                          {typePill.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="city-alert" style={{maxWidth:'860px', marginTop:'28px'}}>
            <p className="city-alert-label">Important Notes</p>
            <p className="city-alert-body">
              <strong style={{color:'#C9A84C'}}>Feb 25 — EDSA People Power Anniversary</strong> is classified as a Special Working Day, not a non-working holiday. Government offices, the Bureau of Immigration, banks, and businesses operate as normal. Do not confuse it with a day off.
            </p>
            <p className="city-alert-body" style={{marginTop:'10px'}}>
              <strong style={{color:'#C9A84C'}}>Eidul Fitr and Eidul Adha</strong> — exact 2026 dates are TBA pending official Islamic calendar determination and a subsequent Presidential Proclamation. Check the Official Gazette of the Philippines for the announcement.
            </p>
          </div>

          {/* ── LOCAL & PROVINCIAL HOLIDAYS ── */}
          <div style={{marginTop:'48px'}}>
            <p className="section-eyebrow section-eyebrow-light" style={{marginBottom:'6px'}}>City & Provincial Proclamations</p>
            <h3 style={{fontFamily:"'Playfair Display', serif", fontSize:'1.3rem', fontWeight:700, color:'#F8F6F1', marginBottom:'10px'}}>
              Local &amp; Provincial Holidays 2026
            </h3>
            <BodyText variant="dark-bg" style={{fontSize:'0.88rem', fontWeight:300, lineHeight:1.8, marginBottom:'24px', maxWidth:'760px'}}>
              In addition to national holidays, individual cities and provinces observe non-working days for their own charter anniversaries and local festivals. These apply only within that city or municipality. Dates are subject to annual local proclamation — verify with the relevant local government unit (LGU) before making plans.
            </BodyText>

            <div style={{overflowX:'auto', maxWidth:'860px'}}>
              <table style={{width:'100%', borderCollapse:'collapse', fontSize:'0.87rem'}}>
                <thead>
                  <tr>
                    <th style={{background:'#C9A84C', color:'#0B1F3A', padding:'11px 16px', textAlign:'left', fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', whiteSpace:'nowrap'}}>City / Area</th>
                    <th style={{background:'#C9A84C', color:'#0B1F3A', padding:'11px 16px', textAlign:'left', fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', whiteSpace:'nowrap'}}>Date</th>
                    <th style={{background:'#C9A84C', color:'#0B1F3A', padding:'11px 16px', textAlign:'left', fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase'}}>Holiday</th>
                    <th style={{background:'#C9A84C', color:'#0B1F3A', padding:'11px 16px', textAlign:'left', fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase'}}>Source</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { city:"Manila",        date:"Jun 24", name:"Araw ng Maynila (Manila Day)", source:"Proc. No. 1320", type:"special" },
                    { city:"Cebu City",     date:"Jan 18", name:"Sinulog Sunday",                source:"Annual local proc.", type:"special" },
                    { city:"Cebu City",     date:"Feb 24", name:"Cebu City Charter Day",         source:"Annual local proc.", type:"regular" },
                    { city:"Lapu-Lapu City", date:"Apr 27", name:"Lapu-Lapu City Charter Day",  source:"Annual local proc.", type:"regular" },
                    { city:"Mandaue City (Cebu Prov.)", date:"Jun 21", name:"Mandaue City Charter Day", source:"Annual local proc.", type:"regular" },
                    { city:"Baguio City",   date:"Sep 1",  name:"Baguio City Charter Day",       source:"Annual local proc.", type:"regular" },
                    { city:"Davao City",    date:"Oct 16", name:"Araw ng Davao (Charter Day)",   source:"Annual local proc.", type:"regular" },
                    { city:"Iloilo City",   date:"Jan 25", name:"Dinagyang Sunday",              source:"Annual local proc.", type:"special" },
                    { city:"Olongapo City / Subic", date:"Jun 1", name:"Olongapo City Charter Day", source:"Annual local proc.", type:"regular" },
                  ].map((row, i) => {
                    const typePill = row.type === "regular"
                      ? { label:"Regular Holiday",      bg:"#0B1F3A", border:"rgba(248,246,241,0.25)", color:"#F8F6F1" }
                      : { label:"Special Non-Working",  bg:"rgba(201,168,76,0.15)", border:"#C9A84C", color:"#C9A84C" };
                    const rowBg = i % 2 === 0 ? "rgba(248,246,241,0.03)" : "transparent";
                    return (
                      <tr key={`${row.city}-${row.date}`} style={{background:rowBg}}>
                        <td style={{padding:'11px 16px', borderBottom:'1px solid rgba(248,246,241,0.07)', color:'#F8F6F1', fontWeight:600, whiteSpace:'nowrap', verticalAlign:'top'}}>{row.city}</td>
                        <td style={{padding:'11px 16px', borderBottom:'1px solid rgba(248,246,241,0.07)', color:'#F8F6F1', fontWeight:600, whiteSpace:'nowrap', verticalAlign:'top'}}>{row.date}</td>
                        <td style={{padding:'11px 16px', borderBottom:'1px solid rgba(248,246,241,0.07)', color:'#F8F6F1', verticalAlign:'top', lineHeight:1.55}}>{row.name}</td>
                        <td style={{padding:'11px 16px', borderBottom:'1px solid rgba(248,246,241,0.07)', verticalAlign:'top'}}>
                          <span style={{display:'inline-block', fontSize:'0.6rem', fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', background:typePill.bg, border:`1px solid ${typePill.border}`, color:typePill.color, padding:'3px 8px', whiteSpace:'nowrap', marginBottom:'4px'}}>{typePill.label}</span>
                          <br />
                          <span style={{fontSize:'0.6rem', color:'rgba(248,246,241,0.60)', letterSpacing:'0.04em'}}>{row.source}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Severe weather advisory */}
            <div className="city-alert" style={{maxWidth:'860px', marginTop:'24px', borderLeftColor:'rgba(201,168,76,0.45)'}}>
              <p className="city-alert-label" style={{color:'#C9A84C'}}>⚠ Severe Weather Advisory</p>
              <p className="city-alert-body" style={{color:'rgba(248,246,241,0.78)'}}>
                <strong style={{color:'#C9A84C'}}>Typhoons, flooding, and other severe weather events</strong> can cause temporary unplanned closure of government offices, Bureau of Immigration branches, courts, and banks — even outside declared national or local holidays. This is most common during typhoon season (June to November), especially in Metro Manila and coastal cities. Always confirm appointment availability directly with the relevant office before traveling during storm season, particularly if PAGASA has issued a storm signal for your area. Signal 2 or higher typically results in government work/school suspension in the affected region.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── DIVE DESTINATIONS ── */}
      <section className="section section-dark" id="dive-destinations">
        <div className="section-inner">
          <p className="section-eyebrow section-eyebrow-light">For Expat Divers</p>
          <h2 className="section-heading section-heading-light">Philippines Dive Destinations — The Complete Guide for Expat Divers</h2>
          <BodyText variant="dark-bg" style={{fontSize:'0.93rem', fontWeight:300, lineHeight:1.85, marginBottom:'40px', maxWidth:'760px'}}>The Philippines is one of the top three scuba diving destinations in the world, sitting at the heart of the Coral Triangle with more than 3,000 species of reef fish, 600 species of coral, and over 7,000 islands to explore. For expats living here, world-class diving is not a vacation — it is a weekend activity.</BodyText>

          {/* MALAPASCUA */}
          <div style={{marginBottom:'48px'}}>
            <div style={{display:'flex', alignItems:'center', gap:'16px', marginBottom:'16px'}}>
              <div style={{background:'#C9A84C', padding:'4px 12px', fontSize:'0.6rem', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:'#0B1F3A', flexShrink:0}}>★ Bucket List</div>
              <p style={{fontFamily:"'Playfair Display', serif", fontSize:'1.2rem', fontWeight:700, color:'#F8F6F1'}}>Malapascua Island</p>
            </div>
            <div className="detail-rows" style={{maxWidth:'860px'}}>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">Location</span>
                <p className="detail-row-body detail-row-body-light">Northern tip of Cebu Island — 30 minutes by boat from Maya Port in northern Cebu. Plan at least 2 to 3 nights; day trips are not practical.</p>
              </div>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">What makes it world famous</span>
                <p className="detail-row-body detail-row-body-light">Malapascua is the only place on earth where you can reliably dive with thresher sharks year-round. Every morning at Kimud Shoal — a submerged seamount 45 minutes from the island — these deep-water predators rise for cleaning stations. Daily encounters are virtually guaranteed. Dives start before sunrise, typically 4:30am departure.</p>
              </div>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">Beyond threshers</span>
                <p className="detail-row-body detail-row-body-light">Vibrant coral walls, mandarin fish mating dives at sunset, macro critters, and Gato Island cave systems with white-tip reef sharks. The Pioneer WWII wreck at 55 metres for technical divers.</p>
              </div>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">Skill level</span>
                <p className="detail-row-body detail-row-body-light">Advanced Open Water minimum for the thresher shark dive. Beginner sites also available on the island.</p>
              </div>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">Best season</span>
                <p className="detail-row-body detail-row-body-light">Year-round for thresher sharks. Best visibility November to May.</p>
              </div>
            </div>
          </div>

          {/* MOALBOAL */}
          <div style={{marginBottom:'48px'}}>
            <p style={{fontFamily:"'Playfair Display', serif", fontSize:'1.2rem', fontWeight:700, color:'#F8F6F1', marginBottom:'16px'}}>Moalboal — Cebu</p>
            <div className="detail-rows" style={{maxWidth:'860px'}}>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">Location</span>
                <p className="detail-row-body detail-row-body-light">Southwest coast of Cebu, approximately 2 hours from Cebu City. Day trips possible from Cebu City.</p>
              </div>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">What makes it special</span>
                <p className="detail-row-body detail-row-body-light">The Moalboal sardine run is one of the most spectacular underwater spectacles in the Philippines. Up to 7 million sardines form a constantly moving, swirling bait ball just metres from the shore of Panagsama Beach — accessible to snorkelers and divers alike. The bait ball is present year-round, not just seasonally.</p>
              </div>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">Beyond the sardines</span>
                <p className="detail-row-body detail-row-body-light">Pescador Island wall diving with canyons and swim-throughs. Resident sea turtles. Good macro diving. Kawasan Falls nearby for above-water activities.</p>
              </div>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">Honest note</span>
                <p className="detail-row-body detail-row-body-light">Moalboal town has a party backpacker scene that contrasts with the diving quality. Choose your accommodation accordingly if quiet is a priority.</p>
              </div>
            </div>
          </div>

          {/* DUMAGUETE AND DAUIN */}
          <div style={{marginBottom:'48px'}}>
            <p style={{fontFamily:"'Playfair Display', serif", fontSize:'1.2rem', fontWeight:700, color:'#F8F6F1', marginBottom:'16px'}}>Dumaguete and Dauin — Negros Oriental</p>
            <div className="detail-rows" style={{maxWidth:'860px'}}>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">Location</span>
                <p className="detail-row-body detail-row-body-light">Eastern coast of Negros island, 2 to 3 hours from Cebu by fast ferry.</p>
              </div>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">What makes it special</span>
                <p className="detail-row-body detail-row-body-light">Dumaguete is the best base for expat divers wanting to combine world-class diving with affordable cost of living. Apo Island — 30 minutes by boat — is one of the Philippines&rsquo; great marine conservation success stories. Sea turtle encounters are virtually guaranteed on every dive. Dauin, just south of Dumaguete, is among the best macro diving in the country — frogfish, nudibranchs, seahorses, mandarin fish, blue-ring octopus, and ghost pipefish on black volcanic sand slopes.</p>
              </div>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">Apo Island</span>
                <p className="detail-row-body detail-row-body-light">30 minutes from Dauin or 1 hour from Dumaguete. Community-managed marine sanctuary with pristine coral recovery and turtle encounters on virtually every dive. Day trip only — no overnight accommodation on the island.</p>
              </div>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">Beyond diving</span>
                <p className="detail-row-body detail-row-body-light">Dumaguete is a university town with genuine cafe culture, excellent restaurants along Rizal Boulevard, and one of the lowest costs of living in the Philippines.</p>
              </div>
            </div>
          </div>

          {/* CORON */}
          <div style={{marginBottom:'48px'}}>
            <p style={{fontFamily:"'Playfair Display', serif", fontSize:'1.2rem', fontWeight:700, color:'#F8F6F1', marginBottom:'16px'}}>Coron — Palawan</p>
            <div className="detail-rows" style={{maxWidth:'860px'}}>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">Location</span>
                <p className="detail-row-body detail-row-body-light">Northern Palawan. Fly to Busuanga airport then 50-minute transfer to Coron town.</p>
              </div>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">What makes it special</span>
                <p className="detail-row-body detail-row-body-light">Coron is the wreck diving capital of Southeast Asia. In 1944 US Navy aircraft sank a fleet of Japanese Imperial Navy ships in Coron Bay. Today over 10 of those wrecks rest at recreational diving depths of 15 to 35 metres, encrusted with coral and teeming with marine life. The Irako, Akitsushima, and Olympia Maru are the standouts. Barracuda Lake — a thermocline-layered lake inside a limestone formation — is one of the most unique diving experiences in the Philippines.</p>
              </div>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">Skill level</span>
                <p className="detail-row-body detail-row-body-light">Advanced Open Water minimum for most wreck penetration dives. Some wrecks accessible to Open Water.</p>
              </div>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">Best season</span>
                <p className="detail-row-body detail-row-body-light">October to June for best visibility. July to September rainy season reduces visibility significantly.</p>
              </div>
            </div>
          </div>

          {/* BOHOL */}
          <div style={{marginBottom:'48px'}}>
            <p style={{fontFamily:"'Playfair Display', serif", fontSize:'1.2rem', fontWeight:700, color:'#F8F6F1', marginBottom:'16px'}}>Bohol and Panglao</p>
            <div className="detail-rows" style={{maxWidth:'860px'}}>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">Location</span>
                <p className="detail-row-body detail-row-body-light">Panglao Island connected by bridge to Bohol mainland. 2 hour fast ferry from Cebu.</p>
              </div>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">What makes it special</span>
                <p className="detail-row-body detail-row-body-light">Three dive experiences in one: Panglao Island reef diving for beginners and intermediates; Balicasag Island walls and reef sharks; Anda on the eastern side with pristine walls, caves, and macro life. Cabilao Island between Cebu and Bohol has hammerhead sightings in season.</p>
              </div>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">Mixed groups</span>
                <p className="detail-row-body detail-row-body-light">Above water Bohol has the Chocolate Hills, Philippine tarsiers, and Loboc River cruises — excellent for non-diving companions. Best destination on this list for mixed diver and non-diver groups.</p>
              </div>
            </div>
          </div>

          {/* SIARGAO */}
          <div style={{marginBottom:'48px'}}>
            <p style={{fontFamily:"'Playfair Display', serif", fontSize:'1.2rem', fontWeight:700, color:'#F8F6F1', marginBottom:'16px'}}>Siargao</p>
            <div className="detail-rows" style={{maxWidth:'860px'}}>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">Location</span>
                <p className="detail-row-body detail-row-body-light">Surigao del Norte, eastern Mindanao. Accessible by domestic flight from Manila or Cebu.</p>
              </div>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">What makes it special</span>
                <p className="detail-row-body detail-row-body-light">Best known internationally for surfing at Cloud 9. For divers, the reefs around the island and nearby Bucas Grande offer excellent and largely uncrowded diving with good visibility. The island lifestyle is genuinely special — small, relaxed, coconut-lined roads, a growing expat community.</p>
              </div>
              <div className="detail-row detail-row-dark">
                <span className="detail-row-label">Practical note</span>
                <p className="detail-row-body detail-row-body-light">Flight connections can be limited. Weather during typhoon season June to November can significantly affect access and diving conditions. Best months: November to May.</p>
              </div>
            </div>
          </div>

          {/* SEASON SUMMARY TABLE */}
          <p style={{fontFamily:"'Playfair Display', serif", fontSize:'1.1rem', fontWeight:700, color:'#F8F6F1', marginBottom:'16px', marginTop:'8px'}}>Dive Season Quick Reference</p>
          <div className="table-wrap">
            <table className="comp-table">
              <thead>
                <tr>
                  <th>Destination</th>
                  <th>Best Season</th>
                  <th>Key Attraction</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="city-col">Malapascua</td>
                  <td>Year-round; best Nov–May</td>
                  <td>Thresher sharks — the only place on earth</td>
                </tr>
                <tr>
                  <td className="city-col">Moalboal</td>
                  <td>Year-round</td>
                  <td>Sardine run — 7 million fish metres from shore</td>
                </tr>
                <tr>
                  <td className="city-col">Dumaguete &amp; Apo Island</td>
                  <td>Year-round; best Mar–Jun</td>
                  <td>Sea turtles, macro, best expat diving base</td>
                </tr>
                <tr>
                  <td className="city-col">Coron wrecks</td>
                  <td>Oct–Jun; best Nov–Mar</td>
                  <td>WWII Japanese fleet — wreck capital of SEA</td>
                </tr>
                <tr>
                  <td className="city-col">Bohol &amp; Panglao</td>
                  <td>Year-round; best Dec–May</td>
                  <td>Reefs, walls, mixed diver/non-diver groups</td>
                </tr>
                <tr>
                  <td className="city-col">Siargao</td>
                  <td>Nov–May only</td>
                  <td>Uncrowded reefs, island lifestyle, surfing</td>
                </tr>
                <tr>
                  <td className="city-col">Tubbataha liveaboard</td>
                  <td>Mar–Jun only</td>
                  <td>UNESCO pristine reef — serious divers only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="city-alert" style={{maxWidth:'860px', marginTop:'32px'}}>
            <p className="city-alert-label">Getting Certified in Cebu</p>
            <p className="city-alert-body">If you are not yet a certified diver, Cebu is one of the best places in the world to get your Open Water certification. Several reputable dive schools operate in Mactan, Moalboal, and Malapascua offering PADI and SSI certification courses. Open Water certification typically takes 3 to 4 days and costs approximately 15,000 to 25,000 pesos at reputable schools. With certification in hand, every destination on this page is accessible to you.</p>
          </div>
        </div>
      </section>

      {/* ── EDUCATION SECTION ── */}
      <section className="section section-light" id="education">
        <div className="section-inner">
          <p className="section-eyebrow">For Expat Families</p>
          <h2 className="section-heading">Philippine Education System — A Guide for Expat Families</h2>
          <BodyText variant="light-bg" style={{fontSize:'0.9rem', fontWeight:300, lineHeight:1.85, marginBottom:'40px', maxWidth:'760px'}}>For expat families with school-age children, understanding the Philippine education system is critical to choosing the right city. The quality gap between school types is significant and the best options vary by location.</BodyText>

          <div className="neighborhood-grid neighborhood-grid-light" style={{marginBottom:'40px'}}>
            <div className="neighborhood-card neighborhood-card-light">
              <p className="neighborhood-name">Public Schools — Honest Assessment</p>
              <p className="neighborhood-body neighborhood-body-light">The Philippine public school system is functional but resource-constrained and generally not recommended for expat children. Average class sizes of 50 to 60 students are common. The K-12 curriculum introduced in 2013 is still being unevenly implemented across regions. English is used as a medium of instruction from Grade 4 onwards but consistency varies. Public schools are appropriate for Filipino children and for expat families on extremely tight budgets, but the classroom experience is significantly different from what most Western children are accustomed to.</p>
            </div>
            <div className="neighborhood-card neighborhood-card-light">
              <p className="neighborhood-name">Private Schools — Strong and Affordable</p>
              <p className="neighborhood-body neighborhood-body-light">Established Philippine private schools are genuinely good and remarkably affordable by Western standards. La Salle, Ateneo, and San Carlos networks have strong academic reputations across the Philippines. English is the primary medium of instruction. Small class sizes, strong discipline, and Filipino values-based education. Annual tuition typically ranges from 50,000 to 200,000 pesos depending on the school and city. Cebu has the strongest selection of quality private schools outside Manila.</p>
            </div>
            <div className="neighborhood-card neighborhood-card-light neighborhood-card-featured">
              <p className="neighborhood-name">International Schools — Best for Western Curriculum</p>
              <p className="neighborhood-body neighborhood-body-light">For families who need recognized international curriculum — particularly those planning to return to their home country for university — international schools are the clear choice. They offer IB, Cambridge, or American curriculum that transfers seamlessly to Western educational systems. Cebu options: International School Cebu and Cebu International School are the most established and well-regarded. Manila has the widest selection including International School Manila, British School Manila, and Brent International School. Annual tuition ranges from $5,000 to $15,000 USD or more depending on the school and grade level. Factor this cost into any family budget planning for Philippines relocation.</p>
            </div>
            <div className="neighborhood-card neighborhood-card-light">
              <p className="neighborhood-name">Homeschooling — A Growing Option</p>
              <p className="neighborhood-body neighborhood-body-light">Homeschooling is growing significantly in the Philippines and is a practical option for many expat families. Philippine-based programs: Homeschool Global, PAREF, and Angelicum College all offer DepEd-recognized homeschool programs. US-based online schools: Connections Academy, K12, and Calvert Education continue seamlessly from the Philippines — useful if the family plans to return to the US for high school or university. DepEd recognition matters if the child plans to attend a Philippine university — verify whether your chosen program is DepEd-recognized before enrolling.</p>
            </div>
          </div>

          <p style={{fontSize:'0.68rem', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'#C9A84C', marginBottom:'24px', display:'flex', alignItems:'center', gap:'12px'}}>
            <span style={{flex:1, height:'1px', background:'rgba(201,168,76,0.25)', display:'block'}} />
            Education by City — Quick Reference
            <span style={{flex:1, height:'1px', background:'rgba(201,168,76,0.25)', display:'block'}} />
          </p>

          <div className="detail-rows" style={{maxWidth:'860px'}}>
            <div className="detail-row">
              <span className="detail-row-label">Cebu</span>
              <p className="detail-row-body">Strongest selection of quality private and international schools outside Manila. International School Cebu, Cebu International School. Best for families needing international curriculum in the Visayas.</p>
            </div>
            <div className="detail-row">
              <span className="detail-row-label">Manila BGC &amp; Makati</span>
              <p className="detail-row-body">Widest selection of international schools in the Philippines. International School Manila, British School Manila, Brent International School. Best for families needing the full range of international options.</p>
            </div>
            <div className="detail-row">
              <span className="detail-row-label">Dumaguete</span>
              <p className="detail-row-body">Silliman University has excellent primary and secondary schools. More limited international options but strong local private schools.</p>
            </div>
            <div className="detail-row">
              <span className="detail-row-label">Davao</span>
              <p className="detail-row-body">Good private school selection. Limited international options compared to Cebu and Manila.</p>
            </div>
            <div className="detail-row">
              <span className="detail-row-label">Baguio</span>
              <p className="detail-row-body">Brent International School Baguio campus is one of the Philippines&rsquo; most established international schools. Good option for families in northern Luzon.</p>
            </div>
            <div className="detail-row">
              <span className="detail-row-label">Iloilo</span>
              <p className="detail-row-body">Growing private school selection. Limited international options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="section section-dark">
        <div className="section-inner">
          <p className="section-eyebrow section-eyebrow-light">At a Glance</p>
          <h2 className="section-heading section-heading-light" style={{marginBottom:"40px"}}>City Comparison — 2026</h2>
          <div className="table-wrap">
            <table className="comp-table">
              <thead>
                <tr>
                  <th>City</th>
                  <th>Monthly Budget</th>
                  <th>Best For</th>
                  <th>Healthcare</th>
                  <th>Climate</th>
                  <th>Expat Community</th>
                </tr>
              </thead>
              <tbody>
                <tr className="featured-row">
                  <td className="city-col">Cebu &amp; Mactan</td>
                  <td>$1,000–1,700</td>
                  <td>Most expats — best overall balance</td>
                  <td>Chong Hua — world ranked</td>
                  <td>Hot tropical</td>
                  <td>Large and established</td>
                </tr>
                <tr>
                  <td className="city-col">Manila BGC</td>
                  <td>$1,800–2,500</td>
                  <td>Families, corporate, specialist medical</td>
                  <td>JCI-accredited, best in Philippines</td>
                  <td>Hot tropical, poor air quality</td>
                  <td>Largest in Philippines</td>
                </tr>
                <tr>
                  <td className="city-col">Dumaguete</td>
                  <td>$800–1,000</td>
                  <td>Budget retirees, divers</td>
                  <td>Adequate; Cebu for serious cases</td>
                  <td>Hot tropical, typhoon sheltered</td>
                  <td>Small and close-knit</td>
                </tr>
                <tr>
                  <td className="city-col">Davao</td>
                  <td>$900–1,200</td>
                  <td>Safety-focused, nature lovers</td>
                  <td>Good private hospitals</td>
                  <td>Hot tropical, less typhoon risk</td>
                  <td>Small but growing</td>
                </tr>
                <tr>
                  <td className="city-col">Iloilo</td>
                  <td>$800–1,050</td>
                  <td>Foodies, underrated gem seekers</td>
                  <td>Medical City Iloilo</td>
                  <td>Hot tropical</td>
                  <td>Small but welcoming</td>
                </tr>
                <tr>
                  <td className="city-col">Baguio</td>
                  <td>$800–1,200</td>
                  <td>Heat-intolerant expats, artists, hikers</td>
                  <td>Adequate; Manila for serious cases</td>
                  <td>Cool mountain — no aircon needed</td>
                  <td>Small, diverse</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── HOW TO CHOOSE ── */}
      <section className="section section-light">
        <div className="section-inner">
          <p className="section-eyebrow">Decision Guide</p>
          <h2 className="section-heading" style={{marginBottom:"40px"}}>How to Choose Your City</h2>
          <div className="decision-grid">
            <div className="decision-card">
              <p className="decision-scenario">I am retired on Social Security or a modest pension</p>
              <p className="decision-answer">Dumaguete or Iloilo</p>
              <p className="decision-reason">Both deliver a comfortable lifestyle on $800–1,000 per month.</p>
            </div>
            <div className="decision-card">
              <p className="decision-scenario">I have a family with school-age children</p>
              <p className="decision-answer">Manila BGC or Makati</p>
              <p className="decision-reason">International schools of real quality exist only in Metro Manila.</p>
            </div>
            <div className="decision-card">
              <p className="decision-scenario">I want the best beach and island access</p>
              <p className="decision-answer">Cebu and Mactan</p>
              <p className="decision-reason">Unmatched position for island hopping the Visayas.</p>
            </div>
            <div className="decision-card">
              <p className="decision-scenario">I cannot handle tropical heat</p>
              <p className="decision-answer">Baguio</p>
              <p className="decision-reason">It is the only answer. Nowhere else in the Philippines offers a cool climate.</p>
            </div>
            <div className="decision-card">
              <p className="decision-scenario">I want urban infrastructure but not Manila&rsquo;s scale and cost</p>
              <p className="decision-answer">Cebu</p>
              <p className="decision-reason">The clear answer.</p>
            </div>
            <div className="decision-card">
              <p className="decision-scenario">I want the safest most orderly Philippine city</p>
              <p className="decision-answer">Davao</p>
              <p className="decision-reason">Reputation is well earned.</p>
            </div>
            <div className="decision-card">
              <p className="decision-scenario">I want something authentic that has not been overrun by foreigners</p>
              <p className="decision-answer">Iloilo</p>
              <p className="decision-reason">The best-kept secret on this list.</p>
            </div>
            <div className="decision-card">
              <p className="decision-scenario">I want the best overall quality of life if budget is not the primary concern</p>
              <p className="decision-answer">Cebu and Mactan — Mactan Newtown or Punta Engaño</p>
              <p className="decision-reason">Resort amenities, world-ranked healthcare, and island access in one location.</p>
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
              <p className="sn-tag">Why I Chose Cebu — Punta Engaño, Mactan Island</p>
            </div>
          </div>
          <div className="sn-rule" />
          <div className="sn-body">
            <p>I spent time in Marigondon on Mactan and a month in IT Park in Cebu City before I found my place in Punta Engaño. Those months were not wasted — they showed me exactly what I wanted and what I did not. IT Park is lively and walkable with excellent food and nightlife. But I wanted beach. I wanted resort. I wanted to wake up and see water. Marigondon gave me the community feel and the affordability — and confirmed that I wanted something a bit more peaceful.</p>
            <p>Punta Engaño at the Residences at Movenpick is exactly what I was looking for. The sunrise over one horizon and the sunset over the other from my 11th floor balcony. Full resort access. A private beach 3 minutes from my door.</p>
            <p>This is not what every expat needs — plenty of people would find my setup overpriced when a perfectly comfortable 22sqm studio in Marigondon costs 3,000 pesos a month. The point is this: do not pick a city from a website. Come, rent an Airbnb, and live in it for a month. The right city will reveal itself to you. Every city on this page has people who love it and people who left. Only you know which one is yours.</p>
          </div>
          <p className="sn-verified">Last Updated June 2026 · Punta Engaño, Mactan Island, Cebu</p>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section className="section disclaimer-section">
        <div className="section-inner">
          <p className="section-eyebrow">Important Note</p>
          <h2 className="section-heading" style={{marginBottom:"24px"}}>Costs and Conditions Change</h2>
          <p className="disclaimer-body">
            <strong>All figures reflect conditions as of June 2026.</strong> Rental markets,
            neighborhood character, and infrastructure quality change — sometimes quickly. Rental
            figures are indicative ranges based on furnished condos in mid-to-upper-tier buildings.
            Actual prices vary by specific building, floor, furnishing level, lease term, and
            negotiation. Verify current rental prices and availability directly with local realtors
            and landlords before making any decisions.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

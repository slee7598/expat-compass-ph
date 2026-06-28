import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
          color: rgba(248,246,241,0.72); max-width: 580px;
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
        .city-intro-light { color: rgba(248,246,241,0.65); }
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
        .detail-row-body-light { color: rgba(248,246,241,0.72); }

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
        .neighborhood-body { font-size: 0.83rem; font-weight: 300; line-height: 1.75; color: rgba(248,246,241,0.65); }

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
          color: rgba(248,246,241,0.72); display: flex; gap: 8px;
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
        .city-alert-body { font-size: 0.83rem; font-weight: 300; line-height: 1.7; color: rgba(248,246,241,0.72); }
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
          color: rgba(248,246,241,0.72);
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

        /* ── MOBILE ── */
        @media (max-width: 900px) {
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

      {/* ── SECTION 1: CEBU AND MACTAN ── */}
      <section className="section section-dark">
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
      <section className="section section-light">
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
      <section className="section section-dark">
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
      <section className="section section-light">
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
      <section className="section section-dark">
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
      <section className="section section-light">
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

import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cost of Living in the Philippines for Expats 2026 — Real Numbers from Cebu",
  description:
    "Honest, detailed cost of living breakdown for expats in the Philippines with real numbers from an American living in Mactan Island, Cebu. Monthly budgets from frugal to comfortable with actual costs.",
  alternates: { canonical: "https://expatcompassph.com/cost-of-living" },
};

export default function CostOfLivingPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background: #F8F6F1; color: #0B1F3A; }

        /* ── SECTIONS ── */
        .section { padding: 88px 48px; }
        .section-light { background: #F8F6F1; }
        .section-dark  { background: #0B1F3A; }
        .section-mid   { background: #0D1E30; }
        .section-inner { max-width: 900px; }

        .section-label {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.7rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 16px;
        }
        .section-label::before { content: '◈'; font-size: 0.65rem; }
        .section-heading { font-family: 'Playfair Display', serif; font-size: clamp(1.7rem, 3vw, 2.4rem); font-weight: 700; line-height: 1.2; color: #0B1F3A; margin-bottom: 32px; max-width: 720px; }
        .section-heading-light { color: #F8F6F1; }

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
        .page-sub { font-size: 1.05rem; font-weight: 300; line-height: 1.65; color: rgba(248,246,241,0.72); max-width: 600px; }

        /* ── OPENING CARD ── */
        .opening-card {
          border: 1px solid rgba(201,168,76,0.4); border-left: 4px solid #C9A84C;
          background: rgba(201,168,76,0.05); padding: 32px 36px; margin-bottom: 0;
          max-width: 800px;
        }
        .opening-card-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 14px; }
        .opening-card-body { font-size: 0.95rem; font-weight: 300; line-height: 1.85; color: #4A5868; }

        /* ── BODY TEXT ── */
        .cb { font-size: 0.93rem; font-weight: 300; line-height: 1.85; color: #4A5868; margin-bottom: 16px; max-width: 760px; }
        .cb-light { color: rgba(248,246,241,0.8); }
        .csub { font-family: 'Playfair Display', serif; font-size: clamp(1rem, 1.8vw, 1.22rem); font-weight: 700; line-height: 1.25; color: #0B1F3A; margin: 40px 0 14px; padding-top: 36px; border-top: 1px solid rgba(11,31,58,0.08); }
        .csub-first { border-top: none; padding-top: 0; margin-top: 4px; }
        .csub-light { color: #F8F6F1; border-top-color: rgba(248,246,241,0.1); }

        /* ── LISTS ── */
        .clist { list-style: none; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 9px; max-width: 760px; }
        .cli { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #4A5868; padding-left: 22px; position: relative; }
        .cli::before { content: '—'; position: absolute; left: 0; color: #C9A84C; font-weight: 600; }
        .cli-light { color: rgba(248,246,241,0.78); }
        .cli-light::before { color: #C9A84C; }

        /* ── TIER CARDS ── */
        .tier-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; max-width: 900px; margin: 8px 0 28px; }
        .tier-card { padding: 36px 30px 32px; border: 1px solid rgba(248,246,241,0.07); }
        .tier-card:not(:last-child) { border-right: none; }
        .tier-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
        .tier-name { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; color: #F8F6F1; margin-bottom: 6px; }
        .tier-range { font-size: 0.82rem; font-weight: 600; color: #C9A84C; margin-bottom: 16px; }
        .tier-desc { font-size: 0.85rem; font-weight: 300; line-height: 1.72; color: rgba(248,246,241,0.72); }
        .tier-card-highlight { background: rgba(201,168,76,0.08); border-color: rgba(201,168,76,0.3) !important; }
        .tier-note { font-size: 0.8rem; font-weight: 300; color: rgba(248,246,241,0.5); margin-top: 20px; max-width: 760px; }

        /* ── ALERT BOXES ── */
        .ca-gold { background: rgba(201,168,76,0.06); border: 1px solid rgba(201,168,76,0.3); border-left: 4px solid #C9A84C; padding: 26px 28px; margin: 24px 0; max-width: 760px; }
        .ca-gold-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
        .ca-gold-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: rgba(248,246,241,0.85); }
        .ca-gold-body-light { color: #4A5868; }

        .ca-amber { background: rgba(242,153,74,0.06); border: 1px solid rgba(242,153,74,0.28); border-left: 4px solid #F2994A; padding: 26px 28px; margin: 24px 0; max-width: 760px; }
        .ca-amber-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #F2994A; margin-bottom: 10px; }
        .ca-amber-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #4A5868; }

        /* ── DATA CARD (electricity) ── */
        .data-card { background: rgba(248,246,241,0.04); border: 1px solid rgba(248,246,241,0.1); max-width: 680px; margin: 20px 0 28px; }
        .data-card-head { padding: 18px 24px; background: rgba(201,168,76,0.12); border-bottom: 1px solid rgba(201,168,76,0.2); }
        .data-card-title { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #C9A84C; }
        .data-row { display: grid; grid-template-columns: 1fr auto; gap: 24px; padding: 14px 24px; border-bottom: 1px solid rgba(248,246,241,0.06); align-items: baseline; }
        .data-row:last-child { border-bottom: none; }
        .data-label { font-size: 0.88rem; font-weight: 300; color: rgba(248,246,241,0.72); }
        .data-value { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: #C9A84C; white-space: nowrap; }

        /* ── SHOP LIST ── */
        .shop-grid { display: flex; flex-direction: column; gap: 0; max-width: 680px; margin: 18px 0; }
        .shop-row { display: grid; grid-template-columns: 1fr 2fr; gap: 0; border: 1px solid rgba(11,31,58,0.07); border-bottom: none; }
        .shop-row:last-child { border-bottom: 1px solid rgba(11,31,58,0.07); }
        .shop-name { padding: 16px 20px; background: #0B1F3A; font-size: 0.82rem; font-weight: 600; color: #C9A84C; display: flex; align-items: center; }
        .shop-desc { padding: 16px 20px; background: #fff; font-size: 0.85rem; font-weight: 300; line-height: 1.65; color: #4A5868; }

        /* ── RESTAURANT TIERS ── */
        .resto-list { display: flex; flex-direction: column; gap: 0; max-width: 680px; margin: 18px 0; }
        .resto-row { display: grid; grid-template-columns: 2fr 1fr; gap: 0; padding: 14px 0; border-bottom: 1px solid rgba(11,31,58,0.07); align-items: baseline; }
        .resto-row:first-child { padding-top: 0; }
        .resto-type { font-size: 0.88rem; font-weight: 300; color: #4A5868; }
        .resto-cost { font-family: 'Playfair Display', serif; font-size: 0.95rem; font-weight: 700; color: #0B1F3A; text-align: right; }

        /* ── BUDGET TABLE ── */
        .budget-table-wrap { max-width: 780px; margin: 16px 0 32px; }
        .budget-section-head { background: rgba(201,168,76,0.12); padding: 14px 22px; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #C9A84C; border: 1px solid rgba(201,168,76,0.2); border-bottom: none; }
        .budget-row { display: grid; grid-template-columns: 1fr auto; gap: 24px; padding: 14px 22px; border: 1px solid rgba(248,246,241,0.07); border-top: none; align-items: baseline; }
        .budget-row:hover { background: rgba(248,246,241,0.02); }
        .budget-item { font-size: 0.88rem; font-weight: 300; color: rgba(248,246,241,0.78); }
        .budget-item small { display: block; font-size: 0.75rem; color: rgba(248,246,241,0.45); margin-top: 3px; }
        .budget-amount { font-family: 'Playfair Display', serif; font-size: 0.97rem; font-weight: 700; color: #C9A84C; white-space: nowrap; text-align: right; }
        .budget-subtotal { display: grid; grid-template-columns: 1fr auto; gap: 24px; padding: 14px 22px; border: 1px solid rgba(201,168,76,0.2); border-top: none; background: rgba(201,168,76,0.06); align-items: baseline; }
        .budget-subtotal-label { font-size: 0.78rem; font-weight: 600; color: #C9A84C; }
        .budget-subtotal-amount { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 700; color: #C9A84C; text-align: right; }
        .budget-total-row { display: grid; grid-template-columns: 1fr auto; gap: 24px; padding: 20px 22px; background: #C9A84C; align-items: center; margin-top: 4px; }
        .budget-total-label { font-size: 0.78rem; font-weight: 700; color: #0B1F3A; }
        .budget-total-amount { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 700; color: #0B1F3A; text-align: right; }

        /* ── LIFESTYLE TIER DETAIL ── */
        .tier-detail { max-width: 760px; margin: 24px 0 36px; border: 1px solid rgba(11,31,58,0.08); }
        .tier-detail-head { padding: 22px 26px; background: #0B1F3A; }
        .tier-detail-name { font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 700; color: #F8F6F1; }
        .tier-detail-range { font-size: 0.82rem; font-weight: 600; color: #C9A84C; margin-top: 4px; }
        .tier-detail-body { background: #fff; }
        .tier-line { display: grid; grid-template-columns: 1fr auto; gap: 24px; padding: 12px 26px; border-bottom: 1px solid rgba(11,31,58,0.05); align-items: baseline; }
        .tier-line:last-child { border-bottom: none; }
        .tier-line-cat { font-size: 0.85rem; font-weight: 300; color: #4A5868; }
        .tier-line-cost { font-family: 'Playfair Display', serif; font-size: 0.9rem; font-weight: 700; color: #0B1F3A; text-align: right; white-space: nowrap; }
        .tier-line-total { background: #F0EDE6; }
        .tier-line-total .tier-line-cat { font-weight: 600; color: #0B1F3A; font-size: 0.82rem; letter-spacing: 0.04em; text-transform: uppercase; }
        .tier-line-total .tier-line-cost { color: #0B1F3A; font-size: 1rem; }

        /* ── SURPRISE LISTS ── */
        .surprise-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; max-width: 900px; margin: 16px 0; }
        .surprise-col { padding: 0 28px 28px 0; }
        .surprise-col:last-child { padding-right: 0; padding-left: 28px; border-left: 1px solid rgba(11,31,58,0.08); }
        .surprise-head { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid; }
        .surprise-head-more { color: #EB5757; border-color: #EB5757; }
        .surprise-head-less { color: #27AE60; border-color: #27AE60; }
        .surprise-item { margin-bottom: 20px; }
        .surprise-item-title { font-size: 0.88rem; font-weight: 600; color: #0B1F3A; margin-bottom: 5px; }
        .surprise-item-body { font-size: 0.84rem; font-weight: 300; line-height: 1.72; color: #5C6B7A; }

        /* ── HEALTHCARE ── */
        .health-callout { background: rgba(201,168,76,0.06); border: 1px solid rgba(201,168,76,0.25); border-left: 4px solid #C9A84C; padding: 32px 36px; margin: 16px 0 28px; max-width: 760px; }
        .health-callout-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 12px; }
        .health-callout-body { font-size: 0.95rem; font-weight: 300; line-height: 1.88; color: #4A5868; }

        .health-benchmarks { max-width: 640px; margin: 18px 0; }
        .hb-row { display: grid; grid-template-columns: 2fr 1fr; gap: 16px; padding: 13px 0; border-bottom: 1px solid rgba(11,31,58,0.07); align-items: baseline; }
        .hb-row:last-child { border-bottom: none; }
        .hb-label { font-size: 0.88rem; font-weight: 300; color: #4A5868; }
        .hb-cost { font-family: 'Playfair Display', serif; font-size: 0.92rem; font-weight: 700; color: #0B1F3A; text-align: right; }

        /* ── INSURANCE CARDS ── */
        .insurance-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; max-width: 760px; margin: 20px 0; }
        .ins-card { padding: 22px 24px; border: 1px solid rgba(11,31,58,0.08); background: #fff; }
        .ins-name { font-size: 0.88rem; font-weight: 600; color: #0B1F3A; margin-bottom: 6px; }
        .ins-desc { font-size: 0.82rem; font-weight: 300; line-height: 1.65; color: #5C6B7A; }
        .ins-link { display: inline-block; margin-top: 10px; font-size: 0.78rem; font-weight: 600; color: #C9A84C; text-decoration: none; letter-spacing: 0.05em; }

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

        /* ── LEGAL ── */
        .legal-section { background: #F8F6F1; padding: 52px 48px; border-top: 1px solid #E8E4DC; }
        .legal-inner { max-width: 780px; }
        .legal-body { font-size: 0.88rem; font-weight: 300; line-height: 1.85; color: #5C6B7A; }
        .legal-body strong { color: #0B1F3A; font-weight: 600; }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .page-hero, .section, .sn-section, .legal-section { padding-left: 24px; padding-right: 24px; }
          .tier-grid { grid-template-columns: 1fr; }
          .tier-card:not(:last-child) { border-right: 1px solid rgba(248,246,241,0.07); border-bottom: none; }
          .shop-row { grid-template-columns: 1fr; }
          .shop-name { border-bottom: 1px solid rgba(201,168,76,0.2); }
          .surprise-grid { grid-template-columns: 1fr; }
          .surprise-col:last-child { padding-left: 0; padding-top: 28px; border-left: none; border-top: 1px solid rgba(11,31,58,0.08); }
          .insurance-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .page-title { font-size: 2rem; }
          .data-row, .budget-row, .budget-subtotal, .budget-total-row { grid-template-columns: 1fr; gap: 4px; }
          .data-value, .budget-amount, .budget-subtotal-amount, .budget-total-amount, .tier-line-cost, .hb-cost, .resto-cost { text-align: left; }
          .budget-total-row { padding: 18px 22px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="page-header">
        <Nav active="/cost-of-living" />
        <div className="page-hero">
          <p className="page-eyebrow">Cost of Living</p>
          <h1 className="page-title">What Life Actually Costs in the Philippines</h1>
          <p className="page-sub">Not ranges pulled from other websites. Real monthly costs from an American expat living in Punta Engaño, Mactan Island, Cebu in 2026 — from rent to groceries to electricity to healthcare.</p>
        </div>
      </div>

      {/* ── OPENING NOTE ── */}
      <section className="section section-light">
        <div className="section-inner">
          <div className="opening-card">
            <p className="opening-card-label">A note on these numbers</p>
            <p className="opening-card-body">Every cost of living guide for the Philippines has the same problem — vague ranges that do not help you plan. This page is different. The numbers here come from my actual monthly bills and real spending living in Cebu with my Filipina wife Irish. Where I do not have personal experience I tell you that clearly. Use these numbers as a genuine planning baseline, not marketing material.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: THREE TIERS ── */}
      <section className="section section-dark" id="tiers">
        <div className="section-inner">
          <p className="section-label">Budget Overview</p>
          <h2 className="section-heading section-heading-light">The Three Budget Tiers</h2>

          <div className="tier-grid">
            <div className="tier-card">
              <p className="tier-label">Tier 1</p>
              <p className="tier-name">Frugal Expat</p>
              <p className="tier-range">35,000–50,000 pesos / month<br />($600–$850 USD)</p>
              <p className="tier-desc">Living simply, cooking at home, local transport, modest accommodation outside the resort areas. Entirely achievable and comfortable by Philippine standards. Not deprivation — Filipinos with good jobs live on this.</p>
            </div>
            <div className="tier-card">
              <p className="tier-label">Tier 2</p>
              <p className="tier-name">Comfortable Expat</p>
              <p className="tier-range">60,000–100,000 pesos / month<br />($1,000–$1,700 USD)</p>
              <p className="tier-desc">Good accommodation, mix of home cooking and dining out, Grab for transport, private health insurance, some discretionary spending. This is what most Western expats target and it delivers a genuinely good quality of life.</p>
            </div>
            <div className="tier-card tier-card-highlight">
              <p className="tier-label">Tier 3 — Steve&rsquo;s Level</p>
              <p className="tier-name">Premium Expat</p>
              <p className="tier-range">~135,000 pesos / month<br />(~$2,300 USD)</p>
              <p className="tier-desc">5-star resort living, premium condo, S&amp;R groceries, nice restaurants once a week, gym and spa, full Grab transport. Living very well by any standard — and still dramatically cheaper than an equivalent lifestyle in the United States.</p>
            </div>
          </div>

          <p className="tier-note">All figures in Philippine pesos unless otherwise noted. Exchange rates fluctuate — check the live rate on our <a href="/banking" style={{color: '#C9A84C', textDecoration: 'none', fontWeight: 600}}>Banking page</a>.</p>
        </div>
      </section>

      {/* ── SECTION 2: HOUSING ── */}
      <section className="section section-light" id="housing">
        <div className="section-inner">
          <p className="section-label">Biggest Variable</p>
          <h2 className="section-heading">Housing</h2>

          <p className="cb">Housing is where the Philippines delivers its most dramatic value compared to Western countries, and where the range is widest depending on your expectations and location.</p>

          <div className="ca-gold">
            <p className="ca-gold-label">Steve&rsquo;s Situation — Punta Engaño, Mactan Island</p>
            <p className="ca-gold-body-light">I found an exceptional deal that I acknowledge I would struggle to replicate — a 66 square meter 1-bedroom 1-bathroom condo on the 11th floor of the Residences at Movenpick in Punta Engaño, Mactan Island. I pay 33,000 pesos per month. For that I get a large balcony with views of both sides of the island — I can watch the sunrise over one horizon and the sunset over the other from the same balcony. Full access to all amenities at the adjacent Movenpick 5-star resort: private beach, multiple pools, restaurants, game room, gym, and a 20 percent discount on everything at the resort including room rates for visiting family. This is an extraordinary deal for what it includes.</p>
          </div>

          <h3 className="csub">The broader market — real data</h3>
          <div className="shop-grid">
            <div className="shop-row">
              <div className="shop-name">Budget studio</div>
              <div className="shop-desc">3,000 to 8,000 pesos per month. A friend lives in a 22 sqm studio in Marigondon, Lapu-Lapu City for 3,000 pesos per month. Basic but functional.</div>
            </div>
            <div className="shop-row">
              <div className="shop-name">Standard 1BR, Mactan or Cebu City</div>
              <div className="shop-desc">15,000 to 30,000 pesos per month.</div>
            </div>
            <div className="shop-row">
              <div className="shop-name">Mid-range 1BR with amenities</div>
              <div className="shop-desc">25,000 to 45,000 pesos per month.</div>
            </div>
            <div className="shop-row">
              <div className="shop-name">Premium or resort-adjacent</div>
              <div className="shop-desc">30,000 to 60,000 pesos per month. Includes the Movenpick area and similar resort-integrated developments.</div>
            </div>
            <div className="shop-row">
              <div className="shop-name">Manila BGC or Makati premium</div>
              <div className="shop-desc">50,000 to 100,000+ pesos per month.</div>
            </div>
          </div>

          <h3 className="csub">How to find the best deals</h3>
          <p className="cb">The Philippines rewards patience in finding accommodation. The best deals come from direct landlord relationships, Facebook housing groups, and word of mouth — not from property portals where prices are marked up for foreigners. Dot Property Philippines (dotproperty.com.ph) is a solid starting point for searching — it is where I found my current condo.</p>
        </div>
      </section>

      {/* ── SECTION 3: ELECTRICITY ── */}
      <section className="section section-dark" id="electricity">
        <div className="section-inner">
          <p className="section-label">The Surprise Cost</p>
          <h2 className="section-heading section-heading-light">Electricity</h2>

          <p className="cb cb-light">Electricity is the cost that most surprises newly arrived expats in the Philippines. The Philippines has some of the highest electricity rates in Southeast Asia, and air conditioning is the culprit. In a tropical climate where temperatures regularly hit 35 degrees Celsius and above, running aircon is not optional for most Westerners — it is a survival necessity.</p>

          <h3 className="csub csub-first csub-light">Steve&rsquo;s real electricity data</h3>
          <div className="data-card">
            <div className="data-card-head">
              <p className="data-card-title">Monthly electricity — Movenpick Residences, Punta Engaño</p>
            </div>
            <div className="data-row">
              <span className="data-label">Month 1 — both aircons running 24/7</span>
              <span className="data-value">14,000 pesos</span>
            </div>
            <div className="data-row">
              <span className="data-label">Month 2+ — one aircon at a time, room to room</span>
              <span className="data-value">7,000 pesos</span>
            </div>
            <div className="data-row">
              <span className="data-label">January–April dry season — minimal aircon, fans only</span>
              <span className="data-value">~2,000 pesos</span>
            </div>
            <div className="data-row">
              <span className="data-label">Summer months — aircon at night and frugally during the day</span>
              <span className="data-value">4,000–5,000 pesos</span>
            </div>
          </div>

          <p className="cb cb-light">The lesson: your electricity bill is almost entirely a function of how much you run aircon. Ceiling fans and standing fans make a significant difference. S&amp;R sells quality fans that pay for themselves in electricity savings within weeks during moderate months.</p>

          <h3 className="csub csub-light">Practical tips to manage your bill</h3>
          <ul className="clist">
            <li className="cli cli-light">Run one aircon at a time — move between rooms rather than cooling the whole unit simultaneously.</li>
            <li className="cli cli-light">Use fans to extend the comfort range before turning on aircon.</li>
            <li className="cli cli-light">January to April in Cebu is the coolest period — many months you can live comfortably on fans alone.</li>
            <li className="cli cli-light">May to November is when aircon becomes necessary for sleep — budget accordingly.</li>
            <li className="cli cli-light">A good condo with cross-ventilation and shade reduces aircon dependency significantly.</li>
          </ul>

          <p className="cb cb-light">For budget planning: for a typical 1–2 bedroom condo with moderate aircon use, budget 4,000 to 8,000 pesos per month. If you run aircon heavily, budget up to 12,000–15,000 pesos.</p>
        </div>
      </section>

      {/* ── SECTION 4: OTHER UTILITIES ── */}
      <section className="section section-light" id="utilities">
        <div className="section-inner">
          <p className="section-label">Monthly Fixed Costs</p>
          <h2 className="section-heading">Internet, Water &amp; Other Utilities</h2>

          <h3 className="csub csub-first">Internet</h3>
          <p className="cb">Steve pays 3,400 pesos per month for 1 gigabit fiber from PLDT. This is among the fastest consumer internet available in the Philippines and is sufficient for video calls, streaming, and working remotely without any issues. Converge is the main alternative to PLDT for fiber — many expats subscribe to both for redundancy. Standard fiber plans start around 1,500 to 2,000 pesos for 100–300 Mbps. The 1 Gbps plan at 3,400 pesos is excellent value for remote workers or heavy streamers.</p>

          <h3 className="csub">Water</h3>
          <p className="cb">Steve&rsquo;s water bill was 500 pesos per month and recently increased to 1,000 pesos per month. Water is dramatically cheaper than electricity and is rarely a budget concern. Budget 500 to 1,500 pesos per month depending on usage and building.</p>

          <h3 className="csub">Generator coverage and brownouts</h3>
          <p className="cb">Cebu and Mactan experience periodic brownouts — power outages that can last minutes to hours. A condo with building generator backup is highly recommended and worth paying a premium for. Steve&rsquo;s building at Movenpick has full generator coverage — no disruption to aircon, internet, or appliances during outages. Verify generator coverage before signing any lease. This is a question many new expats forget to ask and regret not asking.</p>
        </div>
      </section>

      {/* ── SECTION 5: FOOD ── */}
      <section className="section section-dark" id="food">
        <div className="section-inner">
          <p className="section-label">Day to Day</p>
          <h2 className="section-heading section-heading-light">Groceries &amp; Food</h2>

          <h3 className="csub csub-first csub-light">Home cooking</h3>
          <p className="cb cb-light">Steve and Irish shop primarily at S&amp;R — the Philippines equivalent of Costco, with membership warehouse pricing and a strong selection of Western products alongside local items. S&amp;R delivers free with a minimum 5,000 peso order. Steve spends 5,000 to 7,000 pesos every two weeks for two people — approximately 10,000 to 14,000 pesos per month on groceries. This covers quality ingredients for home-cooked meals daily and reflects a comfortable Western-influenced diet.</p>

          <h3 className="csub csub-light">Where to shop by budget</h3>
          <div className="shop-grid" style={{borderColor: 'rgba(248,246,241,0.08)'}}>
            <div className="shop-row" style={{borderColor: 'rgba(248,246,241,0.08)'}}>
              <div className="shop-name">S&amp;R</div>
              <div className="shop-desc" style={{background: 'rgba(248,246,241,0.04)', color: 'rgba(248,246,241,0.75)'}}>Best prices on bulk Western products, excellent quality, delivery available. Membership required. Steve&rsquo;s primary store.</div>
            </div>
            <div className="shop-row" style={{borderColor: 'rgba(248,246,241,0.08)'}}>
              <div className="shop-name">Landers</div>
              <div className="shop-desc" style={{background: 'rgba(248,246,241,0.04)', color: 'rgba(248,246,241,0.75)'}}>Similar to S&amp;R, competitive on many items, strong imported product selection.</div>
            </div>
            <div className="shop-row" style={{borderColor: 'rgba(248,246,241,0.08)'}}>
              <div className="shop-name">NCCC / Robinsons</div>
              <div className="shop-desc" style={{background: 'rgba(248,246,241,0.04)', color: 'rgba(248,246,241,0.75)'}}>Good mid-range local supermarkets with a mix of local and imported products.</div>
            </div>
            <div className="shop-row" style={{borderColor: 'rgba(248,246,241,0.08)'}}>
              <div className="shop-name">Local wet market (palengke)</div>
              <div className="shop-desc" style={{background: 'rgba(248,246,241,0.04)', color: 'rgba(248,246,241,0.75)'}}>Dramatically cheaper for fresh produce, fish, pork, chicken, and local vegetables. A Filipina partner&rsquo;s knowledge of the wet market is invaluable for keeping food costs low.</div>
            </div>
            <div className="shop-row" style={{borderColor: 'rgba(248,246,241,0.08)'}}>
              <div className="shop-name">Carrefour / Ayala Supermarket</div>
              <div className="shop-desc" style={{background: 'rgba(248,246,241,0.04)', color: 'rgba(248,246,241,0.75)'}}>Higher end, more imported products, higher prices.</div>
            </div>
          </div>

          <h3 className="csub csub-light">Dining out</h3>
          <p className="cb cb-light">Steve and Irish eat out approximately once a week, choosing nicer restaurants rather than street food. A meal for two at a good restaurant runs 2,000 to 3,000 pesos. They do not drink alcohol which keeps dining bills significantly lower than the typical expat experience.</p>

          <div className="resto-list">
            <div className="resto-row">
              <span className="resto-type" style={{color: 'rgba(248,246,241,0.6)', fontWeight: 500, fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase'}}>Venue type</span>
              <span className="resto-cost" style={{color: 'rgba(248,246,241,0.6)', fontFamily: 'Inter', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase'}}>Per person</span>
            </div>
            <div className="resto-row" style={{borderBottomColor: 'rgba(248,246,241,0.07)'}}>
              <span className="resto-type" style={{color: 'rgba(248,246,241,0.75)'}}>Carinderia or turo-turo (local Filipino canteen)</span>
              <span className="resto-cost" style={{color: '#C9A84C'}}>100–200 pesos</span>
            </div>
            <div className="resto-row" style={{borderBottomColor: 'rgba(248,246,241,0.07)'}}>
              <span className="resto-type" style={{color: 'rgba(248,246,241,0.75)'}}>Mid-range Filipino or Asian restaurant</span>
              <span className="resto-cost" style={{color: '#C9A84C'}}>300–600 pesos</span>
            </div>
            <div className="resto-row" style={{borderBottomColor: 'rgba(248,246,241,0.07)'}}>
              <span className="resto-type" style={{color: 'rgba(248,246,241,0.75)'}}>Good Western or fusion restaurant, mall dining</span>
              <span className="resto-cost" style={{color: '#C9A84C'}}>600–1,200 pesos</span>
            </div>
            <div className="resto-row" style={{borderBottomColor: 'rgba(248,246,241,0.07)'}}>
              <span className="resto-type" style={{color: 'rgba(248,246,241,0.75)'}}>Nice restaurant, resort dining, Japanese</span>
              <span className="resto-cost" style={{color: '#C9A84C'}}>1,000–2,500 pesos</span>
            </div>
            <div className="resto-row" style={{borderBottomColor: 'rgba(248,246,241,0.07)'}}>
              <span className="resto-type" style={{color: 'rgba(248,246,241,0.75)'}}>Fine dining at resort restaurants</span>
              <span className="resto-cost" style={{color: '#C9A84C'}}>2,000–5,000 pesos</span>
            </div>
          </div>

          <div className="ca-gold" style={{marginTop: '24px'}}>
            <p className="ca-gold-label">Beer and alcohol</p>
            <p className="ca-gold-body">San Miguel Pale Pilsen at a sari-sari store or convenience store runs approximately 38 to 50 pesos per bottle. At a mid-range bar or restaurant expect 80 to 150 pesos per bottle. At a resort bar or upscale venue expect 150 to 300 pesos. A 24-pack of San Miguel Pale Pilsen at S&amp;R costs 1,240 pesos — the cheapest bulk option available in Cebu. Alcohol is cheap in the Philippines by Western standards — a significant cost factor for expats who drink regularly.</p>
          </div>

          <p className="cb cb-light" style={{marginTop: '20px'}}>Steve&rsquo;s honest note on food: I cook every day and eat well — this is not a sacrifice. Philippine ingredients are fresh and excellent. The combination of S&amp;R grocery delivery and Irish&rsquo;s cooking means we eat better here than I did in the US, at a fraction of the cost. The one meal out per week at a nice restaurant is a genuine treat, not a budget necessity.</p>
        </div>
      </section>

      {/* ── SECTION 6: TRANSPORT ── */}
      <section className="section section-light" id="transport">
        <div className="section-inner">
          <p className="section-label">Getting Around</p>
          <h2 className="section-heading">Transportation</h2>

          <p className="cb">Steve uses Grab and Maxim exclusively for transport, occasionally renting scooters and cars for road trips. Grab is the dominant rideshare app — reliable, safe, air-conditioned, and tracked. Maxim is a competing app that is often cheaper.</p>

          <div className="ca-amber">
            <p className="ca-amber-label">⚠ 2026 Fuel Price Alert</p>
            <p className="ca-amber-body">Grab prices have increased significantly since the Iran conflict pushed fuel prices higher. Petrol in the Philippines went from approximately 50 pesos per liter to nearly 100 pesos per liter. This has directly impacted Grab fares. A ride from Punta Engaño to Cebu City that used to cost 400 to 600 pesos now runs 600 to 1,000 pesos depending on traffic and time of day. Budget accordingly and use Maxim when available for better pricing.</p>
          </div>

          <h3 className="csub">Transport options by budget</h3>
          <div className="health-benchmarks">
            <div className="hb-row" style={{borderBottomColor: 'rgba(11,31,58,0.07)'}}>
              <span className="hb-label" style={{fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#0B1F3A'}}>Option</span>
              <span className="hb-cost" style={{fontFamily: 'Inter', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase'}}>Cost</span>
            </div>
            <div className="hb-row">
              <span className="hb-label">E-jeepney and jeepney — local routes</span>
              <span className="hb-cost">13–25 pesos</span>
            </div>
            <div className="hb-row">
              <span className="hb-label">Habal-habal (motorcycle taxi) — short local trips</span>
              <span className="hb-cost">50–150 pesos</span>
            </div>
            <div className="hb-row">
              <span className="hb-label">Grab or Maxim rideshare</span>
              <span className="hb-cost">150–1,000+ pesos</span>
            </div>
            <div className="hb-row">
              <span className="hb-label">Scooter rental — self-drive, per day</span>
              <span className="hb-cost">400–600 pesos</span>
            </div>
            <div className="hb-row">
              <span className="hb-label">Car rental including basic insurance, per day</span>
              <span className="hb-cost">2,000–4,000 pesos</span>
            </div>
          </div>

          <h3 className="csub">Monthly transport budget estimates</h3>
          <ul className="clist">
            <li className="cli">Frugal (jeepney and occasional Grab) — 2,000 to 4,000 pesos per month.</li>
            <li className="cli">Comfortable (regular Grab) — 8,000 to 15,000 pesos per month.</li>
            <li className="cli">Steve&rsquo;s level (Grab and Maxim exclusively, occasional rentals) — included in his 20,000 peso bi-weekly discretionary cash withdrawal.</li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 7: SERVICES ── */}
      <section className="section section-dark" id="services">
        <div className="section-inner">
          <p className="section-label">Domestic &amp; Personal</p>
          <h2 className="section-heading section-heading-light">Domestic Help &amp; Services</h2>

          <h3 className="csub csub-first csub-light">Housekeeper</h3>
          <p className="cb cb-light">Steve previously employed a housekeeper who charged 500 pesos per visit to clean his condo, coming twice a week — 4,000 pesos per month total. This is typical for the Mactan area. In other parts of Cebu and provincial areas, rates may be lower. A live-in housekeeper (kasambahay) for a larger household typically costs 5,000 to 8,000 pesos per month plus accommodation and meals, and is governed by the Kasambahay Law which provides employment protections.</p>

          <h3 className="csub csub-light">Laundry service</h3>
          <p className="cb cb-light">Steve uses a pickup and delivery laundry service for himself and Irish, spending 700 to 1,200 pesos per pickup depending on whether bedding is included. This is a common and affordable luxury — laundry services are ubiquitous in the Philippines and excellent value. Most expats adopt a laundry delivery service within weeks of arriving.</p>

          <h3 className="csub csub-light">Gym and spa</h3>
          <p className="cb cb-light">Steve and Irish spend 14,000 pesos every 3 months for gym and spa access — approximately 4,667 pesos per month combined. This is for a premium facility. Basic gym memberships in Cebu start at 1,000 to 2,000 pesos per month.</p>
        </div>
      </section>

      {/* ── SECTION 8: HEALTHCARE ── */}
      <section className="section section-light" id="healthcare">
        <div className="section-inner">
          <p className="section-label">Medical Costs</p>
          <h2 className="section-heading">Healthcare — The Number That Will Surprise You</h2>

          <p className="cb">Healthcare is where the Philippines delivers some of its most dramatic value compared to the United States, and where the quality in private hospitals is genuinely excellent.</p>

          <div className="health-callout">
            <p className="health-callout-label">Steve&rsquo;s Personal Experience — Private Hospital, Cebu</p>
            <p className="health-callout-body">I had a significant illness that required a hospital visit to a private hospital in Cebu. I was in a hospital bed for 6 hours. During that time I received IV hydration, IV antibiotics, two separate blood tests, and a fecal test. I was prescribed four medications that I took for a full week, all filled at the hospital pharmacy. My total bill including everything — the hospital stay, all tests, all IV treatment, and all medications — was $300 USD. In the United States, that same visit would conservatively cost $3,000 to $5,000 without insurance and significantly more at an emergency room. This was not a budget clinic. This was quality private hospital care.</p>
          </div>

          <h3 className="csub">Healthcare cost benchmarks</h3>
          <div className="health-benchmarks">
            <div className="hb-row">
              <span className="hb-label">Private doctor consultation</span>
              <span className="hb-cost">500–1,500 pesos</span>
            </div>
            <div className="hb-row">
              <span className="hb-label">Basic blood test panel</span>
              <span className="hb-cost">500–2,000 pesos</span>
            </div>
            <div className="hb-row">
              <span className="hb-label">Emergency room visit with treatment</span>
              <span className="hb-cost">5,000–20,000 pesos</span>
            </div>
            <div className="hb-row">
              <span className="hb-label">Hospital room per day (private room)</span>
              <span className="hb-cost">3,000–8,000 pesos</span>
            </div>
            <div className="hb-row">
              <span className="hb-label">Surgery (varies greatly — typically 10–20% of US costs)</span>
              <span className="hb-cost">Fraction of US</span>
            </div>
          </div>

          <h3 className="csub">Best private hospitals in Cebu</h3>
          <ul className="clist">
            <li className="cli"><strong>Chong Hua Hospital</strong> — Steve&rsquo;s personal recommendation. Modern facilities, excellent English-speaking doctors, efficient service, reasonable costs.</li>
            <li className="cli"><strong>Cebu Doctors Hospital</strong> — well regarded, central Cebu City location.</li>
            <li className="cli"><strong>Vicente Sotto Memorial Medical Center</strong> — government hospital, very affordable but busier.</li>
          </ul>

          <h3 className="csub">Health insurance options for expats</h3>
          <div className="insurance-grid">
            <div className="ins-card">
              <p className="ins-name">SafetyWing Nomad Insurance</p>
              <p className="ins-desc">Affordable entry-level option popular with expats and digital nomads. Good for those on a budget who want basic coverage.</p>
              <a className="ins-link" href="https://safetywing.com/?referenceID=26552539&utm_source=26552539&utm_medium=Ambassador" target="_blank" rel="noopener noreferrer">Get a quote →</a>
            </div>
            <div className="ins-card">
              <p className="ins-name">Cigna Global</p>
              <p className="ins-desc">Comprehensive international coverage with a strong network. Good for those who want more complete protection.</p>
            </div>
            <div className="ins-card">
              <p className="ins-name">AXA Philippines</p>
              <p className="ins-desc">Local option with good hospital network throughout the Philippines. Worth comparing with international plans.</p>
            </div>
            <div className="ins-card">
              <p className="ins-name">PhilHealth</p>
              <p className="ins-desc">Government insurance. Foreigners on certain visas can enroll. Basic coverage only — not a substitute for private insurance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: STEVE'S COMPLETE BUDGET ── */}
      <section className="section section-mid" id="budget">
        <div className="section-inner">
          <p className="section-label">The Real Numbers</p>
          <h2 className="section-heading section-heading-light">Steve&rsquo;s Complete Monthly Budget</h2>
          <p className="cb cb-light" style={{marginBottom: '32px'}}>Punta Engaño, Mactan Island, Cebu — 2026</p>

          <div className="budget-table-wrap">
            <div className="budget-section-head">Fixed Monthly Costs</div>
            <div className="budget-row">
              <span className="budget-item">Rent — Residences at Movenpick, 66 sqm 1BR, 11th floor, full resort access<small>Private beach, multiple pools, restaurants, gym, spa — 20% discount on all resort services</small></span>
              <span className="budget-amount">33,000</span>
            </div>
            <div className="budget-row">
              <span className="budget-item">PLDT 1 Gbps fiber internet</span>
              <span className="budget-amount">3,400</span>
            </div>
            <div className="budget-row">
              <span className="budget-item">Water</span>
              <span className="budget-amount">1,000</span>
            </div>
            <div className="budget-row">
              <span className="budget-item">Electricity — annual average<small>Ranges from 2,000 (cool season, fans only) to 14,000 (hot months, both aircons). Average ~5,000.</small></span>
              <span className="budget-amount">~5,000</span>
            </div>
            <div className="budget-row">
              <span className="budget-item">Gym and spa — 2 people, premium facility<small>14,000 pesos every 3 months</small></span>
              <span className="budget-amount">~4,667</span>
            </div>
            <div className="budget-row">
              <span className="budget-item">Laundry service — pickup and delivery</span>
              <span className="budget-amount">~1,000</span>
            </div>
            <div className="budget-subtotal">
              <span className="budget-subtotal-label">Fixed Subtotal</span>
              <span className="budget-subtotal-amount">~48,000 pesos</span>
            </div>

            <div className="budget-section-head" style={{marginTop: '4px'}}>Variable Monthly Costs</div>
            <div className="budget-row">
              <span className="budget-item">Groceries — S&amp;R delivery for 2 people</span>
              <span className="budget-amount">10,000–14,000</span>
            </div>
            <div className="budget-row">
              <span className="budget-item">Dining out — once weekly, nice restaurant, 2 people<small>No alcohol — keeps the bill significantly lower</small></span>
              <span className="budget-amount">8,000–12,000</span>
            </div>
            <div className="budget-row">
              <span className="budget-item">Discretionary spending — cash withdrawals<small>Covers transport (Grab/Maxim), activities, incidentals, shopping. 20,000 pesos every 2 weeks.</small></span>
              <span className="budget-amount">~40,000</span>
            </div>
            <div className="budget-subtotal">
              <span className="budget-subtotal-label">Variable Subtotal</span>
              <span className="budget-subtotal-amount">~58,000–66,000 pesos</span>
            </div>

            <div className="budget-total-row">
              <span className="budget-total-label">TOTAL MONTHLY — Approximately $1,800–$1,950 USD at current exchange rates</span>
              <span className="budget-total-amount">106,000–114,000 pesos</span>
            </div>
          </div>

          <p className="cb cb-light" style={{marginTop: '24px'}}>I live at the top end of expat comfort in Cebu. My rent alone is exceptional value for what it includes — 5-star resort access, private beach, pools, and a view that most people pay thousands of dollars a night to experience as a hotel guest. Even at this level, my total spend is less than I would pay for a modest apartment in most American cities.</p>
        </div>
      </section>

      {/* ── SECTION 10: BUDGET PLANNING ── */}
      <section className="section section-light" id="planning">
        <div className="section-inner">
          <p className="section-label">Planning Tool</p>
          <h2 className="section-heading">Budget Planning by Lifestyle</h2>

          <h3 className="csub csub-first">The Frugal Expat</h3>
          <div className="tier-detail">
            <div className="tier-detail-head">
              <p className="tier-detail-name">Frugal Expat</p>
              <p className="tier-detail-range">35,000–50,000 pesos / month &nbsp;·&nbsp; $600–$850 USD</p>
            </div>
            <div className="tier-detail-body">
              <div className="tier-line"><span className="tier-line-cat">Housing — studio or small 1BR outside resort areas</span><span className="tier-line-cost">5,000–12,000</span></div>
              <div className="tier-line"><span className="tier-line-cat">Electricity — modest aircon use</span><span className="tier-line-cost">2,000–4,000</span></div>
              <div className="tier-line"><span className="tier-line-cat">Internet — 100–300 Mbps plan</span><span className="tier-line-cost">1,500–2,000</span></div>
              <div className="tier-line"><span className="tier-line-cat">Water</span><span className="tier-line-cost">500–800</span></div>
              <div className="tier-line"><span className="tier-line-cat">Groceries — local markets and supermarket</span><span className="tier-line-cost">5,000–8,000</span></div>
              <div className="tier-line"><span className="tier-line-cat">Food — mostly home cooking, occasional carinderia</span><span className="tier-line-cost">1,000–2,000</span></div>
              <div className="tier-line"><span className="tier-line-cat">Transport — jeepney and occasional Grab</span><span className="tier-line-cost">2,000–3,000</span></div>
              <div className="tier-line"><span className="tier-line-cat">Miscellaneous</span><span className="tier-line-cost">3,000–5,000</span></div>
              <div className="tier-line tier-line-total"><span className="tier-line-cat">Estimated Total</span><span className="tier-line-cost">20,000–36,000</span></div>
            </div>
          </div>
          <p className="cb">This is genuinely comfortable living by Philippine standards. You are not suffering — you are living better than the majority of Filipinos on a middle-class income. The key is cooking at home, using local transport, and choosing accommodation outside the premium areas.</p>

          <h3 className="csub">The Comfortable Expat</h3>
          <div className="tier-detail">
            <div className="tier-detail-head">
              <p className="tier-detail-name">Comfortable Expat</p>
              <p className="tier-detail-range">60,000–100,000 pesos / month &nbsp;·&nbsp; $1,000–$1,700 USD</p>
            </div>
            <div className="tier-detail-body">
              <div className="tier-line"><span className="tier-line-cat">Housing — good 1BR condo with amenities</span><span className="tier-line-cost">18,000–35,000</span></div>
              <div className="tier-line"><span className="tier-line-cat">Electricity — regular aircon</span><span className="tier-line-cost">5,000–8,000</span></div>
              <div className="tier-line"><span className="tier-line-cat">Internet — 1 Gbps fiber</span><span className="tier-line-cost">3,400</span></div>
              <div className="tier-line"><span className="tier-line-cat">Water</span><span className="tier-line-cost">800–1,200</span></div>
              <div className="tier-line"><span className="tier-line-cat">Groceries — S&amp;R or Landers</span><span className="tier-line-cost">8,000–12,000</span></div>
              <div className="tier-line"><span className="tier-line-cat">Dining out — 2 to 3 times weekly</span><span className="tier-line-cost">8,000–15,000</span></div>
              <div className="tier-line"><span className="tier-line-cat">Transport — regular Grab</span><span className="tier-line-cost">8,000–12,000</span></div>
              <div className="tier-line"><span className="tier-line-cat">Health insurance — SafetyWing or similar</span><span className="tier-line-cost">3,000–5,000</span></div>
              <div className="tier-line"><span className="tier-line-cat">Discretionary</span><span className="tier-line-cost">10,000–15,000</span></div>
              <div className="tier-line tier-line-total"><span className="tier-line-cat">Estimated Total</span><span className="tier-line-cost">64,000–103,000</span></div>
            </div>
          </div>
          <p className="cb">This is a very comfortable expat lifestyle. Nice accommodation, eating out regularly, air-conditioned transport, health coverage, money for activities and occasional travel.</p>

          <div className="ca-gold" style={{marginTop: '36px'}}>
            <p className="ca-gold-label">The $1,500 USD Question — Can You Live Comfortably in Cebu on $1,500 a Month?</p>
            <p className="ca-gold-body-light">Yes — absolutely. At current exchange rates $1,500 USD is approximately 87,000 pesos. That is firmly in the comfortable expat tier and provides a genuinely good quality of life in Cebu. You would have solid accommodation, good food, reliable transport, health insurance, and money left over for activities and savings. The Philippines is one of the few places in the world where a $1,500 monthly budget represents comfortable middle-class living rather than survival.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 11/12: SURPRISES ── */}
      <section className="section section-dark" id="surprises">
        <div className="section-inner">
          <p className="section-label">Honest Assessment</p>
          <h2 className="section-heading section-heading-light">What Costs More — and Less — Than You Expect</h2>

          <div className="surprise-grid">
            <div className="surprise-col">
              <p className="surprise-head surprise-head-more">Costs more than expected</p>

              <div className="surprise-item">
                <p className="surprise-item-title" style={{color: '#F8F6F1'}}>Electricity</p>
                <p className="surprise-item-body">Already covered above but worth emphasizing. Aircon is expensive. Budget conservatively and adjust — do not plan your entire budget around the low end.</p>
              </div>

              <div className="surprise-item">
                <p className="surprise-item-title" style={{color: '#F8F6F1'}}>Imported products</p>
                <p className="surprise-item-body">Western food and household products at S&amp;R and Landers carry a significant import premium. A jar of peanut butter, a box of cereal, or imported cheese costs noticeably more than in the US. Local alternatives are excellent and dramatically cheaper.</p>
              </div>

              <div className="surprise-item">
                <p className="surprise-item-title" style={{color: '#F8F6F1'}}>Grab transport</p>
                <p className="surprise-item-body">Fuel price increases from 2025–2026 have pushed Grab fares significantly higher than expats who arrived before this expect. Budget 20–30 percent more than older guides suggest.</p>
              </div>

              <div className="surprise-item">
                <p className="surprise-item-title" style={{color: '#F8F6F1'}}>Visa costs</p>
                <p className="surprise-item-body">Tourist visa extensions at approximately 5,000 pesos per month total 60,000 pesos per year — $1,000 USD annually just to maintain legal stay. Factor this into your budget if you are on a tourist extension rather than SRRV or 13A.</p>
              </div>

              <div className="surprise-item">
                <p className="surprise-item-title" style={{color: '#F8F6F1'}}>Unexpected healthcare</p>
                <p className="surprise-item-body">While dramatically cheaper than the US, unexpected healthcare costs can still be significant for serious conditions. Private health insurance is strongly recommended.</p>
              </div>
            </div>

            <div className="surprise-col">
              <p className="surprise-head surprise-head-less">Costs less than expected</p>

              <div className="surprise-item">
                <p className="surprise-item-title" style={{color: '#F8F6F1'}}>Domestic help</p>
                <p className="surprise-item-body">A twice-weekly housekeeper for 500 pesos per visit is completely normal and affordable even on a modest expat budget. Most Westerners have never had household help. Here it is routine.</p>
              </div>

              <div className="surprise-item">
                <p className="surprise-item-title" style={{color: '#F8F6F1'}}>Fresh food</p>
                <p className="surprise-item-body">Local wet market produce, fish, pork, and chicken are dramatically cheaper than Western supermarket equivalents and dramatically fresher. A whole fresh fish for 150 pesos. A kilo of pork for 200 pesos. Tropical fruits for next to nothing.</p>
              </div>

              <div className="surprise-item">
                <p className="surprise-item-title" style={{color: '#F8F6F1'}}>Healthcare</p>
                <p className="surprise-item-body">As documented above, private hospital care at excellent facilities costs a fraction of Western equivalents. The comparison is genuinely shocking for Americans who have internalized US medical pricing.</p>
              </div>

              <div className="surprise-item">
                <p className="surprise-item-title" style={{color: '#F8F6F1'}}>Laundry</p>
                <p className="surprise-item-body">Professional pickup and delivery laundry service for 700 to 1,200 pesos per visit is affordable luxury that most expats adopt within weeks of arriving.</p>
              </div>

              <div className="surprise-item">
                <p className="surprise-item-title" style={{color: '#F8F6F1'}}>Entertainment and leisure</p>
                <p className="surprise-item-body">Beaches, island hopping, resort pools, snorkeling, and the natural beauty of the Philippines are largely free or very low cost compared to Western leisure activities.</p>
              </div>
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
              <p className="sn-tag">Living the Life &nbsp;·&nbsp; Punta Engaño, Mactan Island</p>
            </div>
          </div>
          <div className="sn-rule" />
          <div className="sn-body">
            <p>I want to be honest about my situation because I think it is both aspirational and realistic. I live in a 5-star resort complex on the 11th floor with views of two ocean horizons, full access to a private beach and multiple pools, and a kitchen where Irish cooks exceptional food every day. My total monthly spend including everything is approximately 106,000 to 114,000 pesos — under $2,000 USD. In Los Angeles or New York that money barely covers rent. Here it covers a lifestyle that most people in the West associate with a luxury vacation.</p>
            <p>I am not independently wealthy. I work remotely. The Philippines makes this possible.</p>
            <p>What I will tell you honestly is that finding my specific deal at Movenpick required patience, timing, and some luck. You may not find exactly this — but the Philippines rewards people who look carefully, build local relationships, and are willing to live like a resident rather than a tourist.</p>
            <p>The expat who moves here expecting to recreate their American lifestyle at American prices will be disappointed. The expat who embraces what the Philippines actually offers — fresh food, warm people, a tropical climate, and a pace of life that prioritizes living over working — will find this place transforms them. Irish and I are building something real here. The cost of living makes it possible.</p>
          </div>
          <p className="sn-verified">Last Updated: June 2026 · Punta Engaño, Mactan Island, Cebu</p>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section className="legal-section">
        <div className="legal-inner">
          <p className="legal-body">
            <strong>Costs fluctuate with exchange rates, fuel prices, and inflation.</strong> All figures reflect conditions as of June 2026. Individual costs vary significantly based on lifestyle, location, and personal choices. This page reflects one expat&rsquo;s real experience and should be used as a planning guide, not a guarantee. Exchange rates change — verify the current PHP/USD rate before making financial plans.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

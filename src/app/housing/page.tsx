import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Renting in the Philippines for Expats 2026 — Housing Guide for Cebu and Mactan",
  description:
    "Complete guide to finding and renting accommodation in the Philippines as a foreigner. Real advice from an American expat in Mactan Island — Airbnb first, trusted realtors, what to check, what to avoid.",
  alternates: { canonical: "https://expatcompassph.com/housing" },
};

export default function HousingPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background: #F8F6F1; color: #0B1F3A; }

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

        /* ── OPENING CARD ── */
        .opening-card { border: 1px solid rgba(201,168,76,0.4); border-left: 4px solid #C9A84C; background: rgba(201,168,76,0.05); padding: 32px 36px; max-width: 800px; }
        .opening-card-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 14px; }
        .opening-card-body { font-size: 0.95rem; font-weight: 300; line-height: 1.88; color: #4A5868; }

        /* ── BODY TEXT ── */
        .hb { font-size: 0.93rem; font-weight: 300; line-height: 1.85; color: #4A5868; margin-bottom: 16px; max-width: 760px; }
        .hb-light { color: #F8F6F1; }
        .hsub { font-family: 'Playfair Display', serif; font-size: clamp(1rem, 1.8vw, 1.22rem); font-weight: 700; line-height: 1.25; color: #0B1F3A; margin: 40px 0 14px; padding-top: 36px; border-top: 1px solid rgba(11,31,58,0.08); }
        .hsub-first { border-top: none; padding-top: 0; margin-top: 4px; }
        .hsub-light { color: #F8F6F1; border-top-color: rgba(248,246,241,0.1); }

        /* ── LISTS ── */
        .hlist { list-style: none; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 9px; max-width: 760px; }
        .hli { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #4A5868; padding-left: 22px; position: relative; }
        .hli::before { content: '—'; position: absolute; left: 0; color: #C9A84C; font-weight: 600; }
        .hli-light { color: #F8F6F1; }

        /* ── ALERT BOXES ── */
        .ha-gold { background: rgba(201,168,76,0.06); border: 1px solid rgba(201,168,76,0.3); border-left: 4px solid #C9A84C; padding: 26px 28px; margin: 24px 0; max-width: 760px; }
        .ha-gold-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
        .ha-gold-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #4A5868; }
        .ha-gold-link { display: inline-block; margin-top: 12px; font-size: 0.82rem; font-weight: 600; color: #C9A84C; text-decoration: none; border-bottom: 1px solid rgba(201,168,76,0.4); padding-bottom: 1px; }

        .ha-amber { background: rgba(242,153,74,0.06); border: 1px solid rgba(242,153,74,0.28); border-left: 4px solid #F2994A; padding: 26px 28px; margin: 24px 0; max-width: 760px; }
        .ha-amber-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #F2994A; margin-bottom: 10px; }
        .ha-amber-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #4A5868; }
        .ha-amber-body-light { color: #F8F6F1; }

        /* ── PERSONAL CALLOUT ── */
        .personal-callout { background: #0D1E30; border-left: 4px solid #C9A84C; padding: 28px 32px; margin: 24px 0; max-width: 760px; }
        .personal-callout-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 12px; display: flex; align-items: center; gap: 10px; }
        .personal-callout-label::before { content: ''; display: block; width: 20px; height: 1px; background: #C9A84C; }
        .personal-callout-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #F8F6F1; }
        .personal-callout-link { display: inline-block; margin-top: 12px; font-size: 0.82rem; font-weight: 600; color: #C9A84C; text-decoration: none; border-bottom: 1px solid rgba(201,168,76,0.4); }

        /* ── AREA CARDS ── */
        .area-grid { display: flex; flex-direction: column; gap: 0; max-width: 820px; margin: 20px 0; }

        .area-card-featured { border: 1px solid rgba(201,168,76,0.4); margin-bottom: 0; }
        .area-card-featured-head { background: #C9A84C; padding: 14px 24px; }
        .area-card-featured-eyebrow { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #0B1F3A; }
        .area-card-featured-body { background: #fff; padding: 24px 28px; }

        .area-card { border: 1px solid rgba(11,31,58,0.08); border-top: none; }
        .area-card-head { background: #0B1F3A; padding: 14px 24px; }
        .area-card-eyebrow { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; }
        .area-card-body { background: #fff; padding: 24px 28px; }
        .area-card-title { font-family: 'Playfair Display', serif; font-size: 0.95rem; font-weight: 700; color: #0B1F3A; margin-bottom: 10px; }
        .area-card-text { font-size: 0.87rem; font-weight: 300; line-height: 1.75; color: #4A5868; }

        /* ── CHECKLIST ── */
        .checklist { display: flex; flex-direction: column; gap: 0; max-width: 760px; margin: 20px 0; }
        .check-row { display: grid; grid-template-columns: 180px 1fr; gap: 0; border: 1px solid rgba(11,31,58,0.08); border-bottom: none; }
        .check-row:last-child { border-bottom: 1px solid rgba(11,31,58,0.08); }
        .check-label { background: #0B1F3A; padding: 18px 20px; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C9A84C; display: flex; align-items: flex-start; }
        .check-body { padding: 18px 22px; background: #fff; font-size: 0.87rem; font-weight: 300; line-height: 1.72; color: #4A5868; }

        /* ── NOISE CALLOUT ── */
        .noise-callout { background: #0D1E30; border: 1px solid rgba(248,246,241,0.08); border-left: 4px solid #F2994A; padding: 28px 32px; margin: 24px 0; max-width: 760px; }
        .noise-callout-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #F2994A; margin-bottom: 12px; }
        .noise-callout-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #F8F6F1; }

        /* ── RENTAL MARKET TABLE ── */
        .rent-table { max-width: 760px; margin: 20px 0; }
        .rent-row { display: grid; grid-template-columns: 1fr auto; gap: 24px; padding: 14px 0; border-bottom: 1px solid rgba(11,31,58,0.07); align-items: baseline; }
        .rent-row:first-child { padding-top: 0; }
        .rent-cat { font-size: 0.88rem; font-weight: 300; color: #4A5868; }
        .rent-cat small { display: block; font-size: 0.76rem; color: #8A9BAA; margin-top: 2px; }
        .rent-cost { font-family: 'Playfair Display', serif; font-size: 0.95rem; font-weight: 700; color: #0B1F3A; white-space: nowrap; text-align: right; }
        .rent-row-highlight .rent-cat { font-weight: 500; color: #0B1F3A; }
        .rent-row-highlight .rent-cost { color: #C9A84C; }

        .rent-table-light .rent-row { border-bottom-color: rgba(248,246,241,0.07); }
        .rent-table-light .rent-cat { color: #F8F6F1; }
        .rent-table-light .rent-cat small { color: rgba(248,246,241,0.78); }
        .rent-table-light .rent-cost { color: #F8F6F1; }
        .rent-table-light .rent-row-highlight .rent-cat { color: #F8F6F1; }

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
        .sn-body { font-size: 0.95rem; font-weight: 300; line-height: 1.85; color: #F8F6F1; }
        .sn-body p + p { margin-top: 16px; }
        .sn-verified { margin-top: 36px; padding-top: 20px; border-top: 1px solid rgba(201,168,76,0.2); display: inline-flex; align-items: center; gap: 8px; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #C9A84C; }
        .sn-verified::before { content: '✓'; }

        /* ── LEGAL ── */
        .legal-section { background: #F8F6F1; padding: 52px 48px; border-top: 1px solid #E8E4DC; }
        .legal-inner { max-width: 780px; }
        .legal-body { font-size: 0.88rem; font-weight: 300; line-height: 1.85; color: #5C6B7A; }
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
          .cs-grid { grid-template-columns: repeat(2, 1fr); }
          .check-row { grid-template-columns: 1fr; }
          .check-label { border-bottom: 1px solid rgba(201,168,76,0.2); }
        }
        @media (max-width: 600px) {
          .page-title { font-size: 2rem; }
          .rent-row { grid-template-columns: 1fr; gap: 4px; }
          .rent-cost { text-align: left; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="page-header">
        <Nav active="/housing" />
        <div className="page-hero">
          <p className="page-eyebrow">Housing</p>
          <h1 className="page-title">Finding Your Home in the Philippines</h1>
          <p className="page-sub">Where to live, how to find it, what to pay, and what to watch out for. Real advice from an American expat who has lived it — from a 22sqm Airbnb studio to an 11th floor resort condo.</p>
        </div>
      </div>

      {/* ── OPENING NOTE ── */}
      <section className="section section-light">
        <div className="section-inner">
          <div className="opening-card">
            <p className="opening-card-label">The most important advice on this page</p>
            <p className="opening-card-body">The biggest mistake foreign men make when housing hunting in the Philippines is moving too fast. Commit to an Airbnb or Booking.com short stay first, learn the neighborhoods, build local knowledge, and then make a long-term decision. I lived in Marigondon for a month before finding my place in Punta Engaño. That month taught me more about Cebu than six months of research online.</p>
          </div>
        </div>
      </section>

      {/* ── JUMP NAV ── */}
      <section className="section section-light" style={{paddingTop:'40px', paddingBottom:'48px'}}>
        <div className="section-inner">
          <p className="cs-label">Jump to a Section</p>
          <div className="cs-grid">
            <a href="#mactan-areas" className="cs-card">
              <p className="cs-city">Mactan Neighborhoods</p>
              <p className="cs-tagline">Punta Engaño to IT Park</p>
            </a>
            <a href="#airbnb-first" className="cs-card">
              <p className="cs-city">Start With Airbnb</p>
              <p className="cs-tagline">Why this is not optional advice</p>
            </a>
            <a href="#realtor" className="cs-card">
              <p className="cs-city">Finding a Realtor</p>
              <p className="cs-tagline">Use a trusted agent not a stranger</p>
            </a>
            <a href="#what-to-check" className="cs-card">
              <p className="cs-city">What to Check</p>
              <p className="cs-tagline">Before you sign anything</p>
            </a>
            <a href="#lease-terms" className="cs-card">
              <p className="cs-city">Lease Terms</p>
              <p className="cs-tagline">Post-dated checks and deposits</p>
            </a>
            <a href="#furnished" className="cs-card">
              <p className="cs-city">Furnished vs Unfurnished</p>
              <p className="cs-tagline">Always go furnished</p>
            </a>
            <a href="#shipping" className="cs-card">
              <p className="cs-city">Do Not Ship</p>
              <p className="cs-tagline">Buy it here instead</p>
            </a>
            <a href="#rental-costs" className="cs-card">
              <p className="cs-city">Rental Costs</p>
              <p className="cs-tagline">What things actually cost in 2026</p>
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: MACTAN AREAS ── */}
      <section className="section section-dark" id="mactan-areas">
        <div className="section-inner">
          <p className="section-label">Where Expats Actually Live</p>
          <h2 className="section-heading section-heading-light">Understanding the Mactan Island Area</h2>

          <p className="hb hb-light">Most expats in Cebu end up on Mactan Island — the island connected to Cebu City by two bridges that is home to the international airport, the best resort areas, and an increasingly sophisticated expat community. Understanding the different areas of Mactan helps you make the right choice for your lifestyle.</p>

          <div className="area-grid">
            <div className="area-card-featured">
              <div className="area-card-featured-head">
                <p className="area-card-featured-eyebrow">Premium Area — Steve&rsquo;s Recommendation</p>
              </div>
              <div className="area-card-featured-body">
                <p className="area-card-title" style={{color: '#0B1F3A', fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 700, marginBottom: '14px'}}>Punta Engaño &amp; Mactan Newtown</p>
                <p className="area-card-text">These two areas are less than half a mile from each other and together represent the premium end of Mactan Island living. Think of them as one destination with two personalities.</p>
                <p className="area-card-text" style={{marginTop: '12px'}}><strong style={{color: '#0B1F3A'}}>Punta Engaño</strong> is the resort strip — Movenpick, Shangri-La, Crimson, and other 5-star resorts line this peninsula. If you want resort living, a private beach, and the quietest corner of Mactan, this is it. Steve lives here in the Residences at Movenpick.</p>
                <p className="area-card-text" style={{marginTop: '12px'}}><strong style={{color: '#0B1F3A'}}>Mactan Newtown</strong> is a master-planned development that is the best of everything in one place — high-end condominiums, restaurants, bars, convenience stores, gyms, and retail all within walking distance. It has the energy and amenities of a modern urban development without the chaos of central Cebu City. For expats who want walkable urban convenience with excellent accommodation options, Mactan Newtown is the top recommendation. The only trade-off is crossing the bridge to Cebu City — manageable if you time it right, frustrating during rush hour.</p>
              </div>
            </div>

            <div className="area-card">
              <div className="area-card-head">
                <p className="area-card-eyebrow">Mid-Range &amp; Budget-Friendly</p>
              </div>
              <div className="area-card-body">
                <p className="area-card-title">Marigondon</p>
                <p className="area-card-text">The most affordable area on Mactan for expats. Home to Saekyung Village and similar mid-density developments. Good value accommodation, local amenities including 7-Eleven, restaurants, bars, nail salons, and massage shops within walking distance. More crowded and less premium than Punta Engaño and Mactan Newtown but completely functional and comfortable for budget-conscious expats. Steve spent his first month here in a 22sqm Airbnb studio for approximately $500 USD per month — small but well-equipped with hot plate, fridge, microwave, TV, balcony, and a washing machine.</p>
              </div>
            </div>

            <div className="area-card">
              <div className="area-card-head">
                <p className="area-card-eyebrow">Urban &amp; Walkable — Cebu City</p>
              </div>
              <div className="area-card-body">
                <p className="area-card-title">IT Park — Cebu City</p>
                <p className="area-card-text">For expats who want to be in the heart of Cebu City rather than on Mactan Island, IT Park (Cebu IT Park in Lahug) is worth serious consideration. Steve spent a month here in a 22sqm studio from Airbnb at approximately $500 USD per month. The condo itself was nowhere near as nice as Saekyung — no comparable amenities — but IT Park compensates with what is outside your door. The area is walkable, lively, and packed with restaurants, cafes, bars, and conveniences. The Sugbo Mercado — a beloved weekend night market with Filipino street food, local vendors, live music, and an electric atmosphere — is right there. The trade-off is traffic. IT Park sits in central Cebu City and the surrounding roads can be heavily congested, especially during rush hours. Steve found IT Park and Saekyung together gave him the full picture of what he wanted — and what he did not want. The conclusion: more of a beach resort lifestyle, which led him to Punta Engaño. That is exactly the point of the Airbnb-first strategy — you discover what actually matters to you by living it, not by reading about it.</p>

                <div style={{background:'rgba(201,168,76,0.06)', border:'1px solid rgba(201,168,76,0.3)', borderLeft:'3px solid #C9A84C', padding:'24px 28px', marginTop:'20px'}}>
                  <p style={{fontSize:'0.62rem', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'#C9A84C', marginBottom:'16px'}}>IT Park Specific Living Guide — What Five Years Teaches You</p>

                  <p style={{fontSize:'0.8rem', fontWeight:700, color:'#0B1F3A', marginBottom:'6px'}}>Infrastructure — The Best in Cebu</p>
                  <p style={{fontSize:'0.87rem', fontWeight:300, lineHeight:1.75, color:'#4A5868', marginBottom:'16px'}}>IT Park has the most reliable power infrastructure of any residential area in Cebu. Multiple backup generators serve the commercial and residential towers. Internet is excellent — PLDT, Converge, and Globe all have strong coverage and most buildings have fiber backbone. For remote workers this infrastructure advantage over other Mactan and Cebu areas is significant. The digital infrastructure is genuinely better here than anywhere else in Cebu.</p>

                  <p style={{fontSize:'0.8rem', fontWeight:700, color:'#0B1F3A', marginBottom:'6px'}}>The Noise Reality</p>
                  <p style={{fontSize:'0.87rem', fontWeight:300, lineHeight:1.75, color:'#4A5868', marginBottom:'16px'}}>IT Park houses major BPO operations — call centers and back-office operations running 24 hours a day 7 days a week. This means shift workers coming and going at 2am, 4am, and 6am. The areas immediately surrounding the BPO buildings — particularly the ground floor restaurant and retail strip — are active at unusual hours. Expats who live in upper floors facing the interior park space rather than the street report significantly quieter conditions. If noise is a concern ask specifically which direction the unit faces and what floor it is on before committing.</p>

                  <p style={{fontSize:'0.8rem', fontWeight:700, color:'#0B1F3A', marginBottom:'6px'}}>No-Car Lifestyle</p>
                  <p style={{fontSize:'0.87rem', fontWeight:300, lineHeight:1.75, color:'#4A5868', marginBottom:'16px'}}>IT Park is one of the few areas in Cebu where a car is genuinely optional. The Sugbo Mercado night market, Ayala Center Cebu, SM Seaside City via Grab, restaurants, cafes, gyms, convenience stores, and medical clinics are all accessible without a vehicle. Grab pickup is fast and reliable within IT Park at virtually any hour due to the constant BPO traffic keeping drivers in the area.</p>

                  <p style={{fontSize:'0.8rem', fontWeight:700, color:'#0B1F3A', marginBottom:'6px'}}>Avida Towers Specifically</p>
                  <p style={{fontSize:'0.87rem', fontWeight:300, lineHeight:1.75, color:'#4A5868', marginBottom:'16px'}}>Avida Tower 1 is frequently recommended by long-term IT Park expats as one of the better-managed buildings in the area. Backup power coverage, professional management, and good security track record. Worth specifically asking about when looking for IT Park accommodation.</p>

                  <p style={{fontSize:'0.8rem', fontWeight:700, color:'#0B1F3A', marginBottom:'6px'}}>Rental Agent Over Online Portals</p>
                  <p style={{fontSize:'0.87rem', fontWeight:300, lineHeight:1.75, color:'#4A5868', marginBottom:'16px'}}>Multiple experienced IT Park expats specifically recommend using local rental agents rather than relying solely on online property portals for IT Park units. Agents know which buildings have management issues, which units have recurring maintenance problems, and which landlords are reliable. The commission is typically paid by the landlord not the tenant. Ask in Cebu expat Facebook groups for current rental agent recommendations.</p>

                  <p style={{fontSize:'0.8rem', fontWeight:700, color:'#0B1F3A', marginBottom:'6px'}}>Working From Home Aircon Consideration</p>
                  <p style={{fontSize:'0.87rem', fontWeight:300, lineHeight:1.75, color:'#4A5868', marginBottom:'0'}}>Working from home in IT Park means running aircon significantly more than someone who leaves for an office. Budget your electricity at the higher end of the range — 8,000 to 12,000 pesos per month if you run aircon during working hours in a typical 1BR unit. Factor this into your total budget calculation.</p>
                </div>
              </div>
            </div>

            <div className="area-card">
              <div className="area-card-head">
                <p className="area-card-eyebrow">Local &amp; Practical</p>
              </div>
              <div className="area-card-body">
                <p className="area-card-title">Lapu-Lapu City Proper</p>
                <p className="area-card-text">The business and administrative center of Mactan Island. Less resort, more local city. Good access to the Bureau of Immigration satellite office at Gaisano Mall, local markets, and transportation. Practical rather than glamorous.</p>
              </div>
            </div>
          </div>

          <div className="ha-amber" style={{marginTop: '28px', background: 'rgba(242,153,74,0.05)', borderColor: 'rgba(242,153,74,0.2)'}}>
            <p className="ha-amber-label">Bridge Crossing Reality</p>
            <p className="ha-amber-body-light" style={{color: 'rgba(248,246,241,0.8)', fontSize: '0.92rem', fontWeight: 300, lineHeight: 1.85}}>Both bridges connecting Mactan to Cebu City experience significant traffic during morning rush hour (7 to 9am) and evening rush hour (5 to 8pm). During off-peak hours the crossing takes 10 to 15 minutes. During rush hour it can take 45 minutes to over an hour. Sunday is consistently the best day for crossing — light traffic at almost any time. Plan your Cebu City visits accordingly and you will rarely feel the limitation.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: AIRBNB FIRST ── */}
      <section className="section section-light" id="airbnb-first">
        <div className="section-inner">
          <p className="section-label">Non-Negotiable First Step</p>
          <h2 className="section-heading">Start With Airbnb or Booking.com</h2>

          <p className="hb">Every expat considering a long-term move to the Philippines should spend at least one month in short-term accommodation before signing any lease. This is not optional advice — it is the single most important thing you can do to avoid an expensive mistake.</p>

          <h3 className="hsub hsub-first">Why Airbnb first</h3>
          <ul className="hlist">
            <li className="hli">You need to experience a neighborhood before committing to it. What looks good on Google Maps feels completely different when you are living it. Traffic patterns, noise levels, proximity to things you actually use, the quality of building management, internet reliability — none of this is visible from a listing description.</li>
            <li className="hli">Prices and availability in the long-term rental market are not obvious from outside. Spending a month locally lets you find deals that never appear on property portals.</li>
            <li className="hli">You will meet other expats who will point you to opportunities, warn you away from problem buildings, and share knowledge that no website has.</li>
          </ul>

          <div className="ha-gold">
            <p className="ha-gold-label">Steve&rsquo;s VPN Tip for Airbnb</p>
            <p className="ha-gold-body">I noticed consistently better rates when I access Airbnb through my VPN compared to accessing directly through my PLDT connection. Dynamic pricing algorithms may show different rates based on your location or browsing history. I book all my Airbnbs through my VPN now. Worth testing before you book.</p>
          </div>

          <h3 className="hsub">What a good short-term Airbnb in Mactan costs</h3>
          <div className="rent-table">
            <div className="rent-row">
              <span className="rent-cat">Well-equipped studio, Marigondon or similar<small>Short-term Airbnb rate</small></span>
              <span className="rent-cost">$400–$600 USD/mo</span>
            </div>
            <div className="rent-row">
              <span className="rent-cat">Studio or 1BR, Mactan Newtown area<small>Short-term Airbnb rate</small></span>
              <span className="rent-cost">$600–$1,200 USD/mo</span>
            </div>
            <div className="rent-row">
              <span className="rent-cat">Resort-adjacent units near Punta Engaño<small>Short-term Airbnb rate — varies widely</small></span>
              <span className="rent-cost">$800–$1,800+ USD/mo</span>
            </div>
          </div>
          <p className="hb" style={{fontSize: '0.83rem', color: '#6B7B8A', marginTop: '4px'}}>These are short-term prices. Long-term lease rates are significantly lower — the discount for committing to 6 or 12 months is real and significant.</p>
        </div>
      </section>

      {/* ── SECTION 3: TRUSTED REALTOR ── */}
      <section className="section section-dark" id="realtor">
        <div className="section-inner">
          <p className="section-label">Finding Long-Term Accommodation</p>
          <h2 className="section-heading section-heading-light">Use a Trusted Local Realtor</h2>

          <p className="hb hb-light">Once you know the area and are ready to commit to a 6 to 12 month lease, use a trusted local realtor. This is Steve&rsquo;s strong personal recommendation and the approach he used to find his own condo.</p>

          <div className="personal-callout">
            <p className="personal-callout-label">Steve&rsquo;s Recommendation</p>
            <p className="personal-callout-body">I would never rent directly from a private citizen I do not know. The potential for scams, misrepresented properties, and lease disputes is too high. I found my Movenpick condo and my realtor through dotproperty.com.ph — specifically the Lapu-Lapu City rental listings. A legitimate realtor with verifiable listings gives you a level of protection that a private Facebook marketplace deal simply does not.</p>
            <a className="personal-callout-link" href="https://www.dotproperty.com.ph/properties-for-rent/cebu/lapu-lapu" target="_blank" rel="noopener noreferrer">Browse Lapu-Lapu City rentals on Dot Property →</a>
          </div>

          <h3 className="hsub hsub-light">How to find a good realtor</h3>
          <ul className="hlist">
            <li className="hli hli-light">Ask in expat Facebook groups — Expats in Cebu and Foreigners in the Philippines regularly have realtor recommendations from people who have actually used them.</li>
            <li className="hli hli-light">Use Dot Property Philippines — legitimate agents list verified properties here.</li>
            <li className="hli hli-light">Ask your Airbnb host — if you have a good experience in short-term accommodation, the host may know the local rental market or have other units available long-term at better rates.</li>
            <li className="hli hli-light">Never pay any fee before seeing a property in person and verifying the landlord&rsquo;s ownership documents.</li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 4: WHAT TO CHECK ── */}
      <section className="section section-light" id="what-to-check">
        <div className="section-inner">
          <p className="section-label">Before You Sign Anything</p>
          <h2 className="section-heading">What to Check When Viewing a Condo</h2>

          <p className="hb">Beyond the obvious — price, size, location — here is what actually matters when evaluating a condo in the Philippines.</p>

          <div className="checklist">
            <div className="check-row">
              <div className="check-label">Water Pressure</div>
              <div className="check-body">Run every tap and shower at full pressure. Low water pressure is a daily frustration that no amount of rent negotiation fixes. Some buildings have chronic pressure issues that are simply not solvable at the unit level.</div>
            </div>
            <div className="check-row">
              <div className="check-label">Generator Coverage</div>
              <div className="check-body">Ask explicitly what the building generator covers during brownouts. Does it cover all units or only common areas? Does it cover aircon? Steve&rsquo;s building at Movenpick has full generator coverage — this is not universal and it matters significantly in a country with regular power outages.</div>
            </div>
            <div className="check-row">
              <div className="check-label">Internet Infrastructure</div>
              <div className="check-body">Ask what providers serve the building. Confirm you can get PLDT or Converge fiber installed at the unit. Some buildings have exclusivity agreements or infrastructure limitations. Do not assume fiber is available until confirmed.</div>
            </div>
            <div className="check-row">
              <div className="check-label">Common Areas</div>
              <div className="check-body">How a building maintains its lobby, corridors, and amenities tells you everything about building management quality. Dirty common areas and a poorly maintained lobby are a preview of what happens when something breaks in your unit.</div>
            </div>
            <div className="check-row">
              <div className="check-label">Amenities Condition</div>
              <div className="check-body">Visit the pool, gym, and other amenities at the time of day you would actually use them. A pool listed in the amenities that is always crowded, dirty, or closed for maintenance is not an amenity.</div>
            </div>
            <div className="check-row">
              <div className="check-label">Aircon Units</div>
              <div className="check-body">Are they included and in good condition? Ask about the age of the units. Replacing or repairing aircon units in the Philippines is expensive and slow — and in a tropical climate, aircon is not optional.</div>
            </div>
          </div>

          <div className="noise-callout">
            <p className="noise-callout-label">⚠ Noise — A Reality Check</p>
            <p className="noise-callout-body">Noise is something you have to accept in the Philippines. Roosters crow at 3am regardless of whether it is a weekday or weekend. Karaoke happens at volume levels you did not think were legal — and it happens at night, outdoors, in residential areas. Scooters with modified exhaust pipes are a constant presence on Philippine streets. The occasional school marching band will parade through your neighborhood with full enthusiasm. Delivery trucks come early. Construction starts at 7am. No amount of checking during a daytime viewing will tell you what a building sounds like at 2am on a Saturday. Accept this as part of Philippine life rather than a dealbreaker and you will be much happier. Earplugs are a legitimate investment.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: LEASE TERMS ── */}
      <section className="section section-dark" id="lease-terms">
        <div className="section-inner">
          <p className="section-label">Know Before You Sign</p>
          <h2 className="section-heading section-heading-light">Understanding Philippine Lease Terms</h2>

          <h3 className="hsub hsub-first hsub-light">Post-dated checks</h3>
          <p className="hb hb-light">Many Philippine landlords require post-dated checks — one check per month of the lease — provided upfront at signing. This is standard practice and not a red flag in itself. It is simply how the rental market operates. Steve paid first month, last month, and a security deposit equivalent to one month&rsquo;s rent when securing his current condo, transferred through Remitly before arrival.</p>

          <h3 className="hsub hsub-light">Security deposit</h3>
          <p className="hb hb-light">Typically one to two months rent. Should be returned at the end of the lease minus any legitimate deductions for damage. Get the condition of the unit documented in writing and photographs at move-in — this protects both parties and is standard practice.</p>

          <h3 className="hsub hsub-light">HOA and resort fees</h3>
          <p className="hb hb-light">Ask explicitly what is included in the monthly rent. Steve&rsquo;s 33,000 peso rent at Movenpick includes all HOA fees and resort access fees — this is exceptional and part of what makes his deal so strong. In many buildings HOA fees are separate and can add 2,000 to 5,000 pesos or more per month.</p>

          <h3 className="hsub hsub-light">Lease length</h3>
          <p className="hb hb-light">Standard leases run 6 or 12 months. Month-to-month arrangements are possible but command a premium. A 12-month commitment typically gets you a better rate and a landlord who is invested in maintaining the relationship.</p>

          <h3 className="hsub hsub-light">Foreign ownership note</h3>
          <p className="hb hb-light">Foreigners cannot own land in the Philippines. You can own a condominium unit outright as a foreigner provided the building maintains less than 40 percent foreign ownership. For rental purposes this is not relevant — you can rent any property regardless of nationality.</p>
        </div>
      </section>

      {/* ── SECTION 6: FURNISHED ── */}
      <section className="section section-light" id="furnished">
        <div className="section-inner">
          <p className="section-label">Furnished vs Unfurnished</p>
          <h2 className="section-heading">Always Go Furnished</h2>

          <p className="hb">Steve&rsquo;s recommendation is unambiguous — always rent furnished in the Philippines, especially when starting out.</p>

          <h3 className="hsub hsub-first">Why furnished makes sense</h3>
          <ul className="hlist">
            <li className="hli">Shipping furniture and household goods from the United States to the Philippines is prohibitively expensive. Steve&rsquo;s mother sent two certified documents by FedEx and it cost $150 USD. Shipping a container of furniture would be financially absurd.</li>
            <li className="hli">Philippine furniture is affordable and readily available. S&amp;R, SM Department Store, and the Home Store at SM Seaside all carry quality furniture at reasonable prices. Steve bought a fabric couch with two recliners from S&amp;R for 20,000 pesos and a LazyBoy from the Home Store at SM Seaside for 10,000 pesos.</li>
            <li className="hli">The landlord relationship handles replacement naturally — when Steve upgraded a piece of furniture, his landlord came and picked up what he was replacing. This is a common arrangement in the Philippines.</li>
          </ul>

          <h3 className="hsub">What furnished typically includes</h3>
          <p className="hb">Bed, wardrobe, sofa, dining set, aircon units, refrigerator, washing machine, and basic kitchen appliances. Quality varies enormously — inspect every item before signing.</p>

          <h3 className="hsub">What you will likely want to add</h3>
          <ul className="hlist">
            <li className="hli">A comfortable reading or lounging chair — furnished units rarely have one worth sitting in.</li>
            <li className="hli">Better kitchen appliances if you cook regularly.</li>
            <li className="hli">Additional fans for the dry season — ceiling fans and standing fans make a significant difference to electricity costs.</li>
            <li className="hli">Blackout curtains if you are a light sleeper.</li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 7: DO NOT SHIP ── */}
      <section className="section section-dark" id="shipping">
        <div className="section-inner">
          <p className="section-label">Critical Advice</p>
          <h2 className="section-heading section-heading-light">The Do Not Ship Anything Rule</h2>

          <p className="hb hb-light">Do not ship household goods from the United States to the Philippines. This rule has almost no exceptions.</p>

          <h3 className="hsub hsub-first hsub-light">The cost reality</h3>
          <p className="hb hb-light">International shipping to the Philippines is expensive, slow, and subject to Philippine customs which can be unpredictable, time-consuming, and occasionally very expensive. Steve&rsquo;s experience shipping two certified documents by FedEx cost $150 USD — two pieces of paper. A container shipment of household goods would cost thousands of dollars in shipping plus customs duties plus handling fees.</p>

          <h3 className="hsub hsub-light">What to bring instead</h3>
          <p className="hb hb-light">Clothes, personal items, laptops and electronics, medications, and documents. Everything else can be bought here at reasonable prices.</p>

          <div className="ha-amber" style={{background: 'rgba(242,153,74,0.05)', borderColor: 'rgba(242,153,74,0.2)'}}>
            <p className="ha-amber-label">Electronics Note — 220V</p>
            <p className="ha-amber-body-light">The Philippines uses 220V electricity. American appliances designed for 110V will not work without a voltage converter or will be damaged. Buy electronics in the Philippines or bring dual-voltage items only. Laptops and phone chargers are typically dual-voltage — check the label. Hair dryers, electric shavers, and kitchen appliances often are not.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: RENTAL COSTS ── */}
      <section className="section section-light" id="rental-costs">
        <div className="section-inner">
          <p className="section-label">Market Reference 2026</p>
          <h2 className="section-heading">What Long-Term Rental Actually Costs in Mactan &amp; Cebu</h2>

          <div className="rent-table">
            <div className="rent-row">
              <span className="rent-cat">Budget studio (22 sqm, basic amenities)<small>Marigondon area — long-term lease</small></span>
              <span className="rent-cost">3,000–8,000 pesos</span>
            </div>
            <div className="rent-row">
              <span className="rent-cat">Standard 1-bedroom condo<small>Mactan general — long-term lease</small></span>
              <span className="rent-cost">12,000–22,000 pesos</span>
            </div>
            <div className="rent-row">
              <span className="rent-cat">Good 1-bedroom with amenities<small>Mactan Newtown, Lapu-Lapu — long-term lease</small></span>
              <span className="rent-cost">20,000–35,000 pesos</span>
            </div>
            <div className="rent-row">
              <span className="rent-cat">Premium 1-bedroom, resort adjacent<small>Punta Engaño area — long-term lease</small></span>
              <span className="rent-cost">30,000–55,000 pesos</span>
            </div>
            <div className="rent-row rent-row-highlight">
              <span className="rent-cat">Steve&rsquo;s actual deal — 66 sqm, 11th floor<small>Full Movenpick 5-star resort access included</small></span>
              <span className="rent-cost">33,000 pesos</span>
            </div>
            <div className="rent-row">
              <span className="rent-cat">2-bedroom condo, Mactan Newtown<small>Long-term lease</small></span>
              <span className="rent-cost">30,000–55,000 pesos</span>
            </div>
            <div className="rent-row">
              <span className="rent-cat">Manila BGC or Makati premium 1-bedroom<small>For comparison — long-term lease</small></span>
              <span className="rent-cost">50,000–120,000+ pesos</span>
            </div>
          </div>

          <div className="ha-gold" style={{marginTop: '24px'}}>
            <p className="ha-gold-label">Airbnb vs Long-Term Lease</p>
            <p className="ha-gold-body">A unit renting for 25,000 pesos per month on a 12-month lease may list for $800 to $1,200 USD per month on Airbnb for equivalent short-term accommodation. The discount for committing long-term is real and significant. This is another reason the Airbnb-first strategy works — you confirm the area is right for you, then convert to a long-term lease at dramatically lower rates.</p>
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
              <p className="sn-tag">Finding Home &nbsp;·&nbsp; Punta Engaño, Mactan Island</p>
            </div>
          </div>
          <div className="sn-rule" />
          <div className="sn-body">
            <p>I have lived in two places on Mactan Island and they could not have been more different. My first month in Marigondon at a 22sqm studio was exactly what I needed — a base to learn the island, meet people, figure out where I wanted to be. It was comfortable enough and the community had everything within walking distance. But I knew it was not where I wanted to stay long-term.</p>
            <p>When I found the Residences at Movenpick through Dot Property, I knew immediately it was the right move. 33,000 pesos for an 11th floor condo with resort access, a private beach, and a view of both sunrises and sunsets from the same balcony. That deal took patience and a local realtor to find. It would not have happened if I had signed a 12-month lease in the first week I arrived.</p>
            <p>My advice is simple: take your time, start on Airbnb, and use a trusted realtor when you are ready to commit. The Philippines rewards patience. The right place is out there — do not rush into the wrong one.</p>
          </div>
          <p className="sn-verified">Last Updated: June 2026 · Punta Engaño, Mactan Island, Cebu</p>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section className="legal-section">
        <div className="legal-inner">
          <p className="legal-body">
            <strong>Rental prices change with market conditions.</strong> All figures reflect 2026 conditions in the Mactan Island and Cebu area. Prices in Manila and other cities will vary. Always verify current rates and lease terms directly with landlords or realtors before signing any agreement. This page reflects one expat&rsquo;s personal experience and should be used as a planning guide, not a guarantee.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

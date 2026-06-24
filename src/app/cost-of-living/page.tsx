import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const categories = [
  {
    label: "Housing",
    subtitle: "Rent & utilities",
    description:
      "The single biggest variable in your budget. A studio in a provincial city costs a fraction of an equivalent unit in Makati or BGC.",
    href: "#housing",
  },
  {
    label: "Food & Dining",
    subtitle: "Markets, restaurants & groceries",
    description:
      "Local markets and carinderia meals are extraordinarily cheap. A fully Western diet sourced from supermarkets costs considerably more.",
    href: "#daily",
  },
  {
    label: "Transport",
    subtitle: "Grab, jeepney & beyond",
    description:
      "Public transport is cheap; convenience has a price. Grab is reliable and inexpensive by Western standards but adds up with daily use.",
    href: "#budgets",
  },
  {
    label: "City Comparison",
    subtitle: "Manila, Cebu, Davao & more",
    description:
      "Where you live matters as much as how you live. Costs can differ by 40–60% between Metro Manila and a smaller provincial city.",
    href: "#cities",
  },
];

const budgetTiers = [
  {
    tier: "Frugal",
    php: "₱25,000–35,000",
    usd: "~USD 430–600",
    tagline: "Local lifestyle, modest comforts",
    points: [
      "Basic studio or room in a provincial city or outer Metro Manila",
      "Meals largely from local markets, carinderia, and turo-turo",
      "Jeepney, tricycle, and occasional Grab for transport",
      "Electric fan rather than air-conditioning",
      "Prepaid or entry-level postpaid mobile plan",
    ],
  },
  {
    tier: "Comfortable",
    php: "₱55,000–85,000",
    usd: "~USD 950–1,450",
    tagline: "Modern condo, mixed lifestyle",
    points: [
      "Modern studio or 1-bedroom in a well-located city area",
      "Mix of supermarket groceries, local restaurants, and occasional Western dining",
      "Regular Grab use supplemented by public transit",
      "Air-conditioning and reliable fibre internet included",
      "Gym membership, streaming services, and leisure budget",
    ],
  },
  {
    tier: "Expat Standard",
    php: "₱100,000–180,000+",
    usd: "~USD 1,700–3,100+",
    tagline: "Premium condo, Western comforts",
    points: [
      "Premium condo in Makati, BGC, Cebu IT Park, or equivalent",
      "Regular supermarket imports, dining at mid-to-upscale restaurants",
      "Car or full-time driver, supplemented by Grab",
      "Full-time domestic helper (common at this budget level)",
      "Private health insurance, gym, travel, and entertainment",
    ],
  },
];

const housing = {
  details: [
    {
      label: "Metro Manila",
      body: "Studio in Makati or BGC: ₱20,000–45,000/mo · 1-bedroom in the same areas: ₱28,000–60,000/mo · Comparable units in Mandaluyong, Quezon City, or Pasig run 30–50% less for broadly similar quality.",
    },
    {
      label: "Cebu City",
      body: "Studio near IT Park or Lahug: ₱12,000–22,000/mo · 1-bedroom in a mid-range condo: ₱15,000–28,000/mo. Cebu generally runs 25–35% cheaper than equivalent Manila addresses.",
    },
    {
      label: "Davao & others",
      body: "Davao City offers well-maintained condos and houses from ₱8,000–16,000/mo. Dumaguete, Tagaytay, and similar secondary cities can be cheaper still — decent apartments from ₱5,000–12,000/mo.",
    },
    {
      label: "Electricity",
      body: "The Philippines has some of the highest electricity rates in Southeast Asia. A unit with air-conditioning used regularly can generate a monthly bill of ₱4,000–12,000 depending on size and usage. Electricity costs are almost always excluded from quoted rent — confirm this before signing a lease.",
    },
    {
      label: "Other utilities",
      body: "Fibre internet: ₱1,299–2,000/mo · Water: ₱300–800/mo · Basic cable or streaming: ₱400–800/mo. Many condo buildings include water and association dues (ASSO) in the monthly rate; clarify what is and is not covered.",
    },
  ],
};

const daily = {
  details: [
    {
      label: "Local meals",
      body: "A full meal at a turo-turo (steam table canteen) or carinderia: ₱80–150 including rice and a drink. Street food snacks run ₱20–60. This is how the majority of Filipinos eat daily, and the food is often excellent.",
    },
    {
      label: "Restaurants",
      body: "A sit-down meal at a mid-range Filipino or Asian restaurant: ₱200–450 per person. Western-style or mall restaurants: ₱400–800 per person. A Starbucks-equivalent coffee: ₱160–220. Weekend dining out for two can easily reach ₱2,000–3,500.",
    },
    {
      label: "Groceries",
      body: "Shopping at a local wet market and mid-range supermarket (SM, Robinsons): ₱8,000–14,000/mo for one person eating a mixed local and Western diet. Relying heavily on imported goods, specialty items, or S&R (Costco equivalent): ₱18,000–28,000/mo.",
    },
    {
      label: "Transport",
      body: "Jeepney or e-jeepney: ₱13–15 per ride · Tricycle: ₱20–60 depending on distance · Grab car (5 km): ₱130–200 · Grab bike (5 km): ₱70–110. A heavy Grab user should budget ₱5,000–9,000/mo. Owning a car adds fuel (₱3,000–6,000/mo) and parking (₱3,000–8,000/mo in Manila).",
    },
    {
      label: "Domestic help",
      body: "A full-time live-in domestic helper (kasambahay) earns approximately ₱5,000–8,000/mo in Metro Manila, plus mandatory SSS, PhilHealth, and Pag-IBIG contributions. Live-out helpers charge ₱400–600 per day. This is a common and legal arrangement at many income levels.",
    },
    {
      label: "Healthcare",
      body: "A consultation with a private doctor: ₱500–1,500 · Routine blood tests: ₱500–2,500 · Dental cleaning: ₱600–1,500. Private health insurance for a foreigner typically runs ₱1,500–5,000/mo depending on age and coverage level. Without insurance, a hospital stay can be very expensive.",
    },
  ],
};

const cities = [
  {
    label: "Metro Manila",
    subtitle: "The capital",
    description:
      "The widest range of services, hospitals, restaurants, and expat infrastructure — but also the highest rents and the most severe traffic. BGC and Makati are the premium expat hubs; frugal living here requires living further out.",
  },
  {
    label: "Cebu City",
    subtitle: "The second city",
    description:
      "A well-balanced alternative to Manila. Good hospitals, growing international food and services scene, and rents that run 25–35% lower. Traffic is improving but can still be significant in the city centre.",
  },
  {
    label: "Davao City",
    subtitle: "Mindanao's hub",
    description:
      "Consistently ranked among the Philippines' most liveable cities — well-organised, relatively low crime, and noticeably more affordable than Manila or Cebu. A growing expat community and good private hospital infrastructure.",
  },
  {
    label: "Dumaguete",
    subtitle: "The university town",
    description:
      "Long popular with retirees for its low cost of living, relaxed pace, and small-city walkability. Rents and daily costs are among the lowest of any Philippine city. Trade-off: fewer services, limited flight connections, and a smaller expat social scene.",
  },
];

export default function CostOfLivingPage() {
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

        /* ── BUDGET TIERS ── */
        .tiers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border-top: 1px solid rgba(248,246,241,0.12);
          border-left: 1px solid rgba(248,246,241,0.12);
        }
        .tier-card {
          padding: 40px 36px;
          border-right: 1px solid rgba(248,246,241,0.12);
          border-bottom: 1px solid rgba(248,246,241,0.12);
        }
        .tier-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: #C9A84C;
          margin-bottom: 8px;
        }
        .tier-php {
          font-size: 1.5rem;
          font-weight: 600;
          color: #F8F6F1;
          letter-spacing: -0.01em;
          margin-bottom: 4px;
        }
        .tier-usd {
          font-size: 0.8rem;
          font-weight: 400;
          color: rgba(248,246,241,0.45);
          margin-bottom: 6px;
          letter-spacing: 0.02em;
        }
        .tier-tagline {
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(248,246,241,0.4);
          margin-bottom: 28px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(248,246,241,0.1);
        }
        .tier-points {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .tier-points li {
          font-size: 0.87rem;
          font-weight: 300;
          line-height: 1.55;
          color: rgba(248,246,241,0.65);
          padding-left: 16px;
          position: relative;
        }
        .tier-points li::before {
          content: '–';
          position: absolute;
          left: 0;
          color: #C9A84C;
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

        /* ── CITY CARDS (no-link variant) ── */
        .city-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 1px solid #E8E4DC;
          border-left: 1px solid #E8E4DC;
        }
        .city-card {
          padding: 36px 32px;
          border-right: 1px solid #E8E4DC;
          border-bottom: 1px solid #E8E4DC;
        }
        .city-card-label {
          font-family: 'Playfair Display', serif;
          font-size: 1.08rem;
          font-weight: 600;
          color: #0B1F3A;
          margin-bottom: 4px;
        }
        .city-card-subtitle {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: #C9A84C;
          margin-bottom: 12px;
          text-transform: uppercase;
        }
        .city-card-desc {
          font-size: 0.85rem;
          font-weight: 400;
          line-height: 1.6;
          color: #5C6B7A;
        }

        /* ── DISCLAIMER ── */
        .disclaimer-section {
          background: #F8F6F1;
          border-top: 3px solid #C9A84C;
        }
        .disclaimer-inner {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
        }
        .disclaimer-icon {
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
        .disclaimer-body {
          font-size: 0.95rem;
          font-weight: 300;
          line-height: 1.8;
          color: #5C6B7A;
          max-width: 640px;
        }
        .disclaimer-body strong {
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
        @media (max-width: 900px) {
          .sn-section { padding: 56px 24px; }
        }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .nav { padding: 20px 24px; }
          .nav-links { display: none; }
          .page-hero { padding: 52px 24px 72px; }
          .section { padding: 72px 24px; }
          .card-grid { grid-template-columns: repeat(2, 1fr); }
          .tiers-grid { grid-template-columns: 1fr; }
          .detail-inner { grid-template-columns: 1fr; gap: 40px; }
          .detail-row { grid-template-columns: 1fr; gap: 8px; }
          .city-grid { grid-template-columns: repeat(2, 1fr); }
          .disclaimer-inner { grid-template-columns: 1fr; gap: 32px; }
          .footer { flex-direction: column; gap: 12px; text-align: center; }
        }
        @media (max-width: 560px) {
          .card-grid { grid-template-columns: 1fr; }
          .city-grid { grid-template-columns: 1fr; }
          .page-title { font-size: 2rem; }
        }
      `}</style>

      {/* PAGE HEADER */}
      <header className="page-header">
        <Nav active="/cost-of-living" />

        <div className="page-hero">
          <p className="page-eyebrow">Cost of Living</p>
          <h1 className="page-title">
            What it actually costs<br />to live in the Philippines.
          </h1>
          <p className="page-sub">
            Realistic monthly budgets for three distinct lifestyles, a breakdown
            of the major expense categories, and a city-by-city comparison —
            so you can plan with numbers that reflect the real Philippines, not
            the tourist brochure.
          </p>
        </div>
      </header>

      {/* OVERVIEW CARDS */}
      <section className="section section-light" id="overview">
        <p className="section-label">What shapes your budget</p>
        <h2 className="section-heading">
          Four factors that matter most.
        </h2>
        <div className="card-grid">
          {categories.map((c) => (
            <a key={c.label} href={c.href} className="card">
              <div className="card-label">{c.label}</div>
              <p className="card-subtitle">{c.subtitle}</p>
              <p className="card-desc">{c.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* BUDGET TIERS */}
      <section className="section section-dark" id="budgets">
        <p className="section-label">Monthly budgets</p>
        <h2 className="section-heading section-heading-light">
          Three lifestyles, three price points.
        </h2>
        <div className="tiers-grid">
          {budgetTiers.map((t) => (
            <div key={t.tier} className="tier-card">
              <p className="tier-name">{t.tier}</p>
              <p className="tier-php">{t.php}<span style={{fontSize:"1rem",fontWeight:300}}>/mo</span></p>
              <p className="tier-usd">{t.usd} per month</p>
              <p className="tier-tagline">{t.tagline}</p>
              <ul className="tier-points">
                {t.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* HOUSING */}
      <section className="section section-light" id="housing">
        <div className="detail-inner">
          <div>
            <p className="section-label">Housing</p>
            <h2 className="section-heading">
              Rent varies more than almost anything else.
            </h2>
            <p className="detail-intro">
              Where you choose to live — and within that city, which
              neighbourhood — is the single greatest lever on your monthly
              outgoings. The figures below are for unfurnished to
              semi-furnished units; fully furnished units in premium buildings
              command a significant premium.
            </p>
          </div>
          <div className="detail-rows">
            {housing.details.map((d) => (
              <div key={d.label} className="detail-row">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAY-TO-DAY */}
      <section className="section section-dark" id="daily">
        <div className="detail-inner">
          <div>
            <p className="section-label">Day-to-Day</p>
            <h2 className="section-heading section-heading-light">
              Food, transport, and everyday costs.
            </h2>
            <p className="detail-intro detail-intro-light">
              Day-to-day spending in the Philippines rewards flexibility. Those
              willing to eat and travel like locals can live extremely cheaply;
              those who insist on Western groceries and car travel will find
              costs rising quickly toward Western levels.
            </p>
          </div>
          <div className="detail-rows">
            {daily.details.map((d) => (
              <div key={d.label} className="detail-row detail-row-dark">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body detail-row-body-light">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITY COMPARISON */}
      <section className="section section-light" id="cities">
        <p className="section-label">City comparison</p>
        <h2 className="section-heading">
          Where you live changes everything.
        </h2>
        <div className="city-grid">
          {cities.map((c) => (
            <div key={c.label} className="city-card">
              <p className="city-card-label">{c.label}</p>
              <p className="city-card-subtitle">{c.subtitle}</p>
              <p className="city-card-desc">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STEVE'S NOTE */}
      <section className="sn-section">
        <div className="sn-inner">
          <div className="sn-header">
            <div className="sn-monogram">S</div>
            <div>
              <p className="sn-name">Steve&rsquo;s Note</p>
              <p className="sn-tag">First-hand experience · Cebu, Philippines</p>
            </div>
          </div>
          <div className="sn-rule" />
          <div className="sn-body">
            <p>My personal spending looks different from most expats because I work remotely for a U.S.-based company and split my time — roughly nine months in the Philippines and three months back in the States for the holidays. I also maintain a U.S. residence, which adds costs that most full-time expats won&rsquo;t have.</p>
            <p>If you&rsquo;re relocating permanently and cutting ties with housing back home, your monthly costs in the Philippines will likely be significantly lower than mine. Keep that in mind when comparing numbers.</p>
          </div>
          <p className="sn-verified">Last Verified: June 2026 · Cebu, Philippines</p>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="section disclaimer-section">
        <div className="disclaimer-inner">
          <div>
            <div className="disclaimer-icon">!</div>
            <p className="section-label">About these figures</p>
            <h2 className="section-heading">
              Estimates, not guarantees.
            </h2>
          </div>
          <p className="disclaimer-body">
            <strong>All figures on this page are approximate and reflect general
            conditions at the time of writing.</strong> Prices in the Philippines —
            particularly rent, electricity, and imported goods — can shift noticeably
            with inflation, fuel costs, and exchange rate movements. The peso-to-dollar
            conversion used here is roughly ₱57–58 per USD; check the current rate
            before drawing up a budget.
            <br /><br />
            Costs vary significantly within cities as well as between them. A unit in
            Poblacion, Makati will price differently from one in New Manila, Quezon City,
            even if both are described as &ldquo;Metro Manila.&rdquo; Always verify current
            rental listings and utility rates directly before committing to a location.
            <br /><br />
            These figures are intended as a planning framework, not a financial plan.
            Your actual costs will depend on your lifestyle, household size, health needs,
            and personal spending habits.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

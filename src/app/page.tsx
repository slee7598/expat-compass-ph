import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSearch from "@/components/HeroSearch";

const topics = [
  {
    label: "Visas & Residency",
    description:
      "SRRV, 13A, tourist extensions, and long-stay options explained clearly.",
    href: "/visas",
  },
  {
    label: "Marriage",
    description:
      "Legal requirements for marrying a Filipino citizen as a foreign national.",
    href: "/marriage",
  },
  {
    label: "Cost of Living",
    description:
      "Realistic monthly budgets across cities, from frugal to comfortable.",
    href: "/cost-of-living",
  },
  {
    label: "Housing",
    description:
      "Renting vs. owning, condo laws for foreigners, and neighborhoods to know.",
    href: "/housing",
  },
  {
    label: "Healthcare",
    description:
      "Private hospitals, PhilHealth, international insurance, and medical costs.",
    href: "/healthcare",
  },
  {
    label: "Banking",
    description:
      "Opening accounts as a foreigner, remittances, and digital banking options.",
    href: "/banking",
  },
  {
    label: "Transportation",
    description:
      "Getting around by jeepney, Grab, ferry, and domestic flights.",
    href: "/transportation",
  },
  {
    label: "City Guides",
    description:
      "In-depth profiles of Metro Manila, Cebu, Davao, Dumaguete, and more.",
    href: "/city-guides",
  },
];

const pillars = [
  {
    heading: "Accurate",
    body: "Every article is researched from official sources and updated regularly.",
  },
  {
    heading: "Practical",
    body: "We skip the filler and give you the steps, costs, and timelines you actually need.",
  },
  {
    heading: "Independent",
    body: "No paid placements, no affiliate bias — just honest guidance.",
  },
];

export default function Home() {
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
          position: absolute;
          top: 0; left: 0; right: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          height: 72px;
          background: rgba(11,31,58,0.6);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(201,168,76,0.18);
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
          gap: 2px;
          list-style: none;
        }
        .nav-links a {
          display: block;
          font-size: 0.74rem;
          font-weight: 500;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: rgba(248,246,241,0.82);
          text-decoration: none;
          padding: 7px 13px;
          border: 1px solid transparent;
          transition: color 0.18s, border-color 0.18s;
        }
        .nav-links a:hover {
          color: #C9A84C;
          border-color: rgba(201,168,76,0.4);
        }

        /* ── HERO ── */
        .hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: flex-end;
        }
        .hero-img {
          object-fit: cover;
          object-position: center 40%;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(11,31,58,0.82) 0%,
            rgba(11,31,58,0.35) 55%,
            rgba(11,31,58,0.08) 100%
          );
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 48px 72px;
          max-width: 760px;
        }
        .hero-eyebrow {
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
        .hero-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #C9A84C;
        }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.6rem, 5.5vw, 4.2rem);
          font-weight: 700;
          line-height: 1.12;
          color: #F8F6F1;
          margin-bottom: 24px;
        }
        .hero-sub {
          font-size: 1.05rem;
          font-weight: 300;
          line-height: 1.65;
          color: rgba(248,246,241,0.78);
          max-width: 520px;
          margin-bottom: 28px;
        }
        .hero-cta {
          display: inline-block;
          margin-top: 24px;
          padding: 15px 34px;
          background: #C9A84C;
          color: #0B1F3A;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.2s;
        }
        .hero-cta:hover { background: #b8943e; }

        /* ── HERO SEARCH ── */
        .hs-wrap { width: 100%; max-width: 640px; }
        .hs-label {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .hs-label::before {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: #C9A84C;
        }
        .hs-form {
          display: flex;
        }
        .hs-input {
          flex: 1;
          padding: 16px 20px;
          font-family: 'Inter', sans-serif;
          font-size: 0.92rem;
          font-weight: 400;
          color: #0B1F3A;
          background: rgba(248,246,241,0.96);
          border: none;
          outline: none;
          min-width: 0;
        }
        .hs-input::placeholder { color: #9AAABB; }
        .hs-btn {
          padding: 16px 24px;
          background: #C9A84C;
          color: #0B1F3A;
          font-family: 'Inter', sans-serif;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .hs-btn:hover:not(:disabled) { background: #b8943e; }
        .hs-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        .hs-dots {
          display: flex;
          gap: 5px;
          padding: 16px 0 0;
        }
        .hs-dots span {
          width: 6px; height: 6px;
          background: #C9A84C;
          border-radius: 50%;
          animation: hsPulse 1.2s ease-in-out infinite;
        }
        .hs-dots span:nth-child(2) { animation-delay: 0.2s; }
        .hs-dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes hsPulse {
          0%,80%,100% { opacity: 0.25; transform: scale(0.85); }
          40% { opacity: 1; transform: scale(1); }
        }
        .hs-error {
          margin-top: 12px;
          font-size: 0.82rem;
          color: rgba(248,246,241,0.55);
          font-weight: 300;
        }
        .hs-answer {
          margin-top: 16px;
          background: rgba(248,246,241,0.96);
          border-left: 3px solid #C9A84C;
          padding: 24px 28px;
          animation: hsFade 0.25s ease;
          max-height: 380px;
          overflow-y: auto;
        }
        @keyframes hsFade {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hs-answer-q {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 10px;
        }
        .hs-answer-text {
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.8;
          color: #1A2D42;
          white-space: pre-wrap;
        }
        .hs-cursor {
          display: inline-block;
          width: 2px; height: 0.9em;
          background: #C9A84C;
          vertical-align: text-bottom;
          margin-left: 2px;
          animation: hsBlink 0.8s step-end infinite;
        }
        @keyframes hsBlink { 50% { opacity: 0; } }
        .hs-answer-foot {
          margin-top: 16px;
          padding-top: 12px;
          border-top: 1px solid rgba(11,31,58,0.1);
          font-size: 0.68rem;
          color: #8A9AAA;
        }

        /* ── SECTION SHARED ── */
        .section {
          padding: 96px 48px;
        }
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
          max-width: 520px;
        }

        /* ── TOPICS GRID ── */
        .topics-section {
          background: #F8F6F1;
        }
        .topics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 1px solid #E8E4DC;
          border-left: 1px solid #E8E4DC;
        }
        .topic-card {
          padding: 36px 32px;
          border-right: 1px solid #E8E4DC;
          border-bottom: 1px solid #E8E4DC;
          text-decoration: none;
          display: block;
          transition: background 0.2s;
        }
        .topic-card:hover {
          background: #fff;
        }
        .topic-card-label {
          font-family: 'Playfair Display', serif;
          font-size: 1.08rem;
          font-weight: 600;
          color: #0B1F3A;
          margin-bottom: 10px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 8px;
        }
        .topic-card-label::after {
          content: '→';
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: #C9A84C;
          flex-shrink: 0;
          margin-top: 2px;
          transition: transform 0.2s;
        }
        .topic-card:hover .topic-card-label::after {
          transform: translateX(4px);
        }
        .topic-card-desc {
          font-size: 0.85rem;
          font-weight: 400;
          line-height: 1.6;
          color: #5C6B7A;
        }
        .topic-card-inactive {
          cursor: default;
          opacity: 0.45;
        }
        .topic-card-inactive:hover { background: transparent; }
        .topic-card-inactive .topic-card-label::after { display: none; }

        /* ── TRUST STRIP ── */
        .trust-section {
          background: #0B1F3A;
        }
        .trust-inner {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
        }
        .trust-intro .section-heading {
          color: #F8F6F1;
          margin-bottom: 0;
        }
        .trust-pillars {
          display: flex;
          flex-direction: column;
          gap: 40px;
          padding-top: 8px;
        }
        .pillar {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(248,246,241,0.1);
        }
        .pillar:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .pillar-heading {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: #C9A84C;
        }
        .pillar-body {
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(248,246,241,0.7);
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
        }
        .footer-logo span { color: #C9A84C; }
        .footer-note {
          font-size: 0.75rem;
          color: rgba(248,246,241,0.35);
        }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .nav { padding: 0 24px; }
          .nav-links { display: none; }
          .hero-content { padding: 0 24px 52px; }
          .hs-wrap { max-width: 100%; }
          .section { padding: 72px 24px; }
          .topics-grid { grid-template-columns: repeat(2, 1fr); }
          .trust-inner { grid-template-columns: 1fr; gap: 40px; }
          .footer { flex-direction: column; gap: 12px; text-align: center; }
        }
        @media (max-width: 560px) {
          .topics-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 2.2rem; }
          .hs-form { flex-direction: column; }
          .hs-btn { padding: 14px 20px; }
        }
      `}</style>

      {/* NAV */}
      <Nav />

      {/* HERO */}
      <section className="hero">
        <Image
          src="/images/sunrise.jpg"
          alt="Sunrise from Movenpick Residences, Punta Engaño, Cebu"
          fill
          priority
          className="hero-img"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Your relocation resource</p>
          <h1 className="hero-title">
            Living in the Philippines,<br />done properly.
          </h1>
          <p className="hero-sub">
            Clear, practical, up-to-date guidance on visas, housing,
            healthcare, and daily life — for foreigners who want to do
            it right.
          </p>
          <HeroSearch />
          <a href="#topics" className="hero-cta">Explore the guides</a>
        </div>
      </section>

      {/* TOPICS */}
      <section className="section topics-section" id="topics">
        <p className="section-label">Everything you need</p>
        <h2 className="section-heading">
          The essential topics,<br />covered in depth.
        </h2>
        <div className="topics-grid">
          {topics.map((t) =>
            t.href ? (
              <Link key={t.label} href={t.href} className="topic-card">
                <div className="topic-card-label">{t.label}</div>
                <p className="topic-card-desc">{t.description}</p>
              </Link>
            ) : (
              <div key={t.label} className="topic-card topic-card-inactive">
                <div className="topic-card-label">{t.label}</div>
                <p className="topic-card-desc">{t.description}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* TRUST */}
      <section className="section trust-section">
        <div className="trust-inner">
          <div className="trust-intro">
            <p className="section-label" style={{color:"#C9A84C"}}>Why Expat Compass PH</p>
            <h2 className="section-heading">
              Guidance you can actually rely on.
            </h2>
          </div>
          <div className="trust-pillars">
            {pillars.map((p) => (
              <div key={p.heading} className="pillar">
                <h3 className="pillar-heading">{p.heading}</h3>
                <p className="pillar-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
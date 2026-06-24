import Image from "next/image";

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
    href: "#",
  },
  {
    label: "Cost of Living",
    description:
      "Realistic monthly budgets across cities, from frugal to comfortable.",
    href: "#",
  },
  {
    label: "Housing",
    description:
      "Renting vs. owning, condo laws for foreigners, and neighborhoods to know.",
    href: "#",
  },
  {
    label: "Healthcare",
    description:
      "Private hospitals, PhilHealth, international insurance, and medical costs.",
    href: "#",
  },
  {
    label: "Banking",
    description:
      "Opening accounts as a foreigner, remittances, and digital banking options.",
    href: "#",
  },
  {
    label: "Transportation",
    description:
      "Getting around by jeepney, Grab, ferry, and domestic flights.",
    href: "#",
  },
  {
    label: "City Guides",
    description:
      "In-depth profiles of Metro Manila, Cebu, Davao, Dumaguete, and more.",
    href: "#",
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
          padding: 28px 48px;
        }
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #F8F6F1;
          letter-spacing: 0.02em;
          text-decoration: none;
        }
        .nav-logo span {
          color: #C9A84C;
        }
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
          color: rgba(248,246,241,0.75);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: #F8F6F1; }

        /* ── HERO ── */
        .hero {
          position: relative;
          height: 92vh;
          min-height: 560px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
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
          margin-bottom: 36px;
        }
        .hero-cta {
          display: inline-block;
          padding: 15px 34px;
          background: #C9A84C;
          color: #0B1F3A;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .hero-cta:hover { background: #b8943e; }

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
          .nav { padding: 20px 24px; }
          .nav-links { display: none; }
          .hero-content { padding: 0 24px 52px; }
          .section { padding: 72px 24px; }
          .topics-grid { grid-template-columns: repeat(2, 1fr); }
          .trust-inner { grid-template-columns: 1fr; gap: 40px; }
          .footer { flex-direction: column; gap: 12px; text-align: center; }
        }
        @media (max-width: 560px) {
          .topics-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 2.2rem; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <a href="/" className="nav-logo">
          Expat Compass <span>PH</span>
        </a>
        <ul className="nav-links">
          <li><a href="/visas">Visas</a></li>
          <li><a href="#">City Guides</a></li>
          <li><a href="#">Cost of Living</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <Image
          src="/images/philippines.jpg"
          alt="The Philippines"
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
          {topics.map((t) => (
            <a key={t.label} href={t.href} className="topic-card">
              <div className="topic-card-label">{t.label}</div>
              <p className="topic-card-desc">{t.description}</p>
            </a>
          ))}
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
      <footer className="footer">
        <div className="footer-logo">
          Expat Compass <span>PH</span>
        </div>
        <p className="footer-note">
          © {new Date().getFullYear()} Expat Compass PH · For informational purposes only
        </p>
      </footer>
    </>
  );
}
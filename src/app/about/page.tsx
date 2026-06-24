import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const story = [
  "I spent 25 years working and raising my two children — 12 of those years as a full-time single father. When you're juggling a full-time job and raising kids on your own, international travel beyond Mexico simply isn't in the cards, let alone a trip to the other side of the globe.",
  "Once my youngest headed off to college, it was high time for some me time.",
  "I had a list of places I was considering for the nomad lifestyle, but the deciding factor for the Philippines was straightforward — Filipinos speak English. I didn't have to worry about a language barrier, and that made all the difference.",
  "I initially planned to come for three months. Shortly after arriving, that became six. I ended up staying nine months before going home for three months to see my family for birthdays and the holidays.",
  "But if I'm being honest, by that point the Philippines had significantly changed the person I was when I left America. It was great seeing my family and friends — but I couldn't wait to get back. I don't think that will ever change.",
  "Sure, there are plenty of things about living here that drive me absolutely crazy. But overall, the Philippines is the greatest place I have ever lived. The people are the friendliest I have ever encountered. The women are absolutely stunning — and they are crazy for us foreigners. And the paradise here is beyond anything I have ever seen.",
  "We have earthquakes. At least 13 typhoons a year. Active volcanoes scattered across the islands. With extreme beauty comes extreme nature. That's the deal, and I'll take it every single time.",
  "This is my home now. I live at a five-star resort. In three weeks, I'm marrying the woman of my dreams — the same woman who inspired the Marriage page on this site, and who will soon be co-hosting our YouTube travel vlog. And I have access to some of the most beautiful places on earth.",
  "I wouldn't change a thing.",
  "Live your best life now.",
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background: #F8F6F1; color: #0B1F3A; }

        /* ── NAV ── */
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 48px;
          border-bottom: 1px solid rgba(248,246,241,0.08);
        }
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #F8F6F1;
          letter-spacing: 0.02em;
          text-decoration: none;
        }
        .nav-logo span { color: #C9A84C; }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
          list-style: none;
        }
        .nav-links a {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: rgba(248,246,241,0.6);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: #F8F6F1; }
        .nav-links a.active { color: #C9A84C; }

        /* ── PAGE HERO ── */
        .page-header { background: #0B1F3A; }
        .page-hero { padding: 56px 48px 88px; }
        .page-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.16em;
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
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          font-weight: 700;
          color: #F8F6F1;
          line-height: 1.1;
          margin-bottom: 12px;
        }
        .page-subtitle {
          font-size: 0.88rem;
          font-weight: 400;
          color: rgba(248,246,241,0.45);
          letter-spacing: 0.04em;
        }

        /* ── INTRO SECTION ── */
        .intro-section {
          background: #F8F6F1;
          padding: 72px 48px;
          border-bottom: 1px solid rgba(11,31,58,0.08);
        }
        .intro-inner { max-width: 700px; }
        .intro-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 20px;
        }
        .intro-label::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #C9A84C;
        }
        .intro-text {
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.85;
          color: #2A3A4A;
        }

        /* ── STORY SECTION ── */
        .story-section {
          background: #0B1F3A;
          padding: 80px 48px;
        }
        .story-inner { max-width: 700px; }
        .story-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 20px;
        }
        .story-label::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #C9A84C;
        }
        .story-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: #F8F6F1;
          line-height: 1.2;
          margin-bottom: 40px;
        }
        .story-body { display: flex; flex-direction: column; gap: 20px; }
        .story-para {
          font-size: 0.97rem;
          font-weight: 300;
          line-height: 1.9;
          color: rgba(248,246,241,0.82);
        }
        .story-rule {
          width: 48px;
          height: 1px;
          background: rgba(201,168,76,0.35);
          margin: 12px 0;
        }
        .story-sign {
          margin-top: 8px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .story-sign-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #C9A84C;
        }
        .story-sign-location {
          font-size: 0.78rem;
          font-weight: 400;
          color: rgba(248,246,241,0.45);
          letter-spacing: 0.04em;
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

        /* ── PHOTO SECTIONS ── */
        .photo-section {
          background: #0B1F3A;
          padding: 0;
          line-height: 0;
        }
        .photo-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 7;
          overflow: hidden;
        }
        .photo-wrap-portrait {
          position: relative;
          max-width: 560px;
          margin: 0 auto;
          aspect-ratio: 3 / 4;
          overflow: hidden;
        }
        .photo-img {
          object-fit: cover;
          object-position: center top;
          width: 100%;
          height: 100%;
          display: block;
        }
        .photo-caption {
          background: #0B1F3A;
          padding: 16px 48px;
          font-size: 0.72rem;
          font-weight: 400;
          letter-spacing: 0.06em;
          color: rgba(248,246,241,0.35);
          line-height: 1;
          text-align: center;
        }
        .caricature-section {
          background: #F8F6F1;
          padding: 72px 48px;
          text-align: center;
        }
        .caricature-wrap {
          position: relative;
          width: 360px;
          max-width: 100%;
          margin: 0 auto;
          aspect-ratio: 1 / 1;
          overflow: hidden;
        }
        .caricature-caption {
          margin-top: 18px;
          font-size: 0.72rem;
          font-weight: 400;
          letter-spacing: 0.06em;
          color: rgba(11,31,58,0.4);
        }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .nav { padding: 20px 24px; }
          .nav-links { display: none; }
          .page-hero { padding: 48px 24px 64px; }
          .intro-section { padding: 56px 24px; }
          .story-section { padding: 64px 24px; }
          .photo-caption { padding: 14px 24px; }
          .caricature-section { padding: 56px 24px; }
          .footer { flex-direction: column; gap: 12px; text-align: center; }
        }
      `}</style>

      {/* PAGE HEADER */}
      <header className="page-header">
        <Nav active="/about" />
        <div className="page-hero">
          <p className="page-eyebrow">About</p>
          <h1 className="page-title">Steve Lee</h1>
          <p className="page-subtitle">Founder, Expat Compass PH &nbsp;·&nbsp; Punta Engaño, Mactan Island, Cebu, Philippines</p>
        </div>
      </header>

      {/* MAIN PHOTO */}
      <div className="photo-section">
        <div className="photo-wrap">
          <Image
            src="/images/irish-and-steve.jpg"
            alt="Steve & Irish — Punta Engaño, Cebu"
            fill
            priority
            className="photo-img"
          />
        </div>
        <p className="photo-caption">Steve &amp; Irish — Punta Engaño, Cebu</p>
      </div>

      {/* INTRO */}
      <section className="intro-section">
        <div className="intro-inner">
          <p className="intro-label">Who is Steve?</p>
          <p className="intro-text">
            Steve Lee is the founder of Expat Compass PH. He is an American expat living full-time
            in Punta Engaño, Mactan Island, Cebu, Philippines. Everything on this site comes from
            his own experience — the research, the mistakes, the wins, and the honest
            assessments. There is no editorial team and no sponsored opinion. Just one person who
            made the move and wants to help others do the same with their eyes open.
          </p>
        </div>
      </section>

      {/* STEVE'S STORY */}
      <section className="story-section">
        <div className="story-inner">
          <p className="story-label">Steve&rsquo;s Story</p>
          <h2 className="story-heading">In his own words.</h2>
          <div className="story-body">
            {story.map((para, i) => (
              <p key={i} className="story-para">{para}</p>
            ))}
            <div className="story-rule" />
            <div className="story-sign">
              <span className="story-sign-name">&mdash; Steve &amp; Irish Lee (Soon)</span>
              <span className="story-sign-location">Punta Engaño, Mactan Island, Cebu, Philippines &nbsp;·&nbsp; June 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* CARICATURE */}
      <section className="caricature-section">
        <div className="caricature-wrap">
          <Image
            src="/images/caricature.jpg"
            alt="Steve & Irish — Cebu, Philippines"
            fill
            className="photo-img"
          />
        </div>
        <p className="caricature-caption">Steve &amp; Irish — Cebu, Philippines</p>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

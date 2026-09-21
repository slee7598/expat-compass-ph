import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Expat Compass PH — Steve Lee & Irish, Living in Cebu Philippines",
  description:
    "Expat Compass PH is run by Steve Lee, an American expat living in Punta Engaño, Mactan Island, Cebu, and his Filipina partner Irish. Real experience, honest guidance.",
  alternates: { canonical: "https://expatcompassph.com/about" },
};

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
          color: rgba(248,246,241,0.78);
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
          color: #F8F6F1;
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
          color: #F8F6F1;
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
          color: #F8F6F1;
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
          color: rgba(248,246,241,0.6);
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
          color: rgba(248,246,241,0.6);
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

        /* ── IRISH'S BIO ── */
        .irish-section {
          background: #F8F6F1;
          padding: 80px 48px;
          border-bottom: 1px solid rgba(11,31,58,0.08);
        }
        .irish-inner { max-width: 700px; }
        .irish-label {
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
        .irish-label::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #C9A84C;
        }
        .irish-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: #0B1F3A;
          line-height: 1.2;
          margin-bottom: 36px;
        }
        .irish-body { display: flex; flex-direction: column; gap: 20px; }
        .irish-para {
          font-size: 0.97rem;
          font-weight: 300;
          line-height: 1.9;
          color: #2A3A4A;
        }

        /* ── WEDDING PHOTOS ── */
        .wedding-photos-section {
          background: #0D1E30;
          padding: 0;
          line-height: 0;
        }
        .wedding-photos-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }
        .wedding-photo-wrap {
          position: relative;
          aspect-ratio: 3 / 4;
          overflow: hidden;
        }

        /* ── WEDDING SECTION ── */
        .wedding-section {
          background: #0B1F3A;
          padding: 80px 48px;
        }
        .wedding-inner { max-width: 700px; }
        .wedding-label {
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
        .wedding-label::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #C9A84C;
        }
        .wedding-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: #F8F6F1;
          line-height: 1.2;
          margin-bottom: 40px;
        }
        .wedding-body { display: flex; flex-direction: column; gap: 20px; }
        .wedding-para {
          font-size: 0.97rem;
          font-weight: 300;
          line-height: 1.9;
          color: #F8F6F1;
        }
        .wedding-em {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #C9A84C;
        }
        .wedding-rule {
          width: 48px;
          height: 1px;
          background: rgba(201,168,76,0.35);
          margin: 4px 0;
        }
        .wedding-sub {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          font-weight: 700;
          color: #F8F6F1;
          line-height: 1.25;
        }
        .wedding-sign {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 8px;
        }
        .wedding-sign-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #C9A84C;
        }
        .wedding-sign-line {
          font-size: 0.88rem;
          font-weight: 400;
          color: #F8F6F1;
          letter-spacing: 0.03em;
        }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .nav { padding: 20px 24px; }
          .nav-links { display: none; }
          .page-hero { padding: 48px 24px 64px; }
          .intro-section { padding: 56px 24px; }
          .story-section { padding: 64px 24px; }
          .irish-section { padding: 64px 24px; }
          .photo-caption { padding: 14px 24px; }
          .caricature-section { padding: 56px 24px; }
          .footer { flex-direction: column; gap: 12px; text-align: center; }
          .wedding-section { padding: 64px 24px; }
          .wedding-photos-grid { grid-template-columns: 1fr; }
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
              <span className="story-sign-name">&mdash; Steve &amp; Irish Lee</span>
              <span className="story-sign-location">Punta Engaño, Mactan Island, Cebu, Philippines &nbsp;·&nbsp; June 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* IRISH'S BIO */}
      <section className="irish-section">
        <div className="irish-inner">
          <p className="irish-label">Meet Irish</p>
          <h2 className="irish-heading">In her own words.</h2>
          <div className="irish-body">
            <p className="irish-para">I was born in Hilagasan, Barili, Cebu, the youngest of four siblings — one sister and three brothers. I graduated from senior high school at 18, and in 2024, my parents and I moved to Lapu-Lapu City in search of better opportunities. Living with relatives during that time taught me responsibility, independence, and the importance of working hard to build a better future for my family.</p>
            <p className="irish-para">I began my career as a machine operator in a factory, where I developed discipline, resilience, and a deep appreciation for hard work. Over time, I explored new opportunities and eventually found my way to a sports bar in the Soong area, where I continued to grow both personally and professionally.</p>
            <p className="irish-para">It was during this chapter of my life that I met Steve. What started as a simple conversation grew into something meaningful. Steve took the time to meet my family, showed them the respect they deserved, and asked for their blessing to marry me. After difficult experiences in the past, I am truly grateful to have found someone who shares my goals, my values, and my outlook on life. We have the same energy and enjoy the same things — healthy, protein-rich meals, an active lifestyle, travel, and new adventures together.</p>
            <p className="irish-para">We are fully committed to building a future together, and we have exciting plans ahead — including launching a YouTube channel in the near future where we will share our life, love, and travels across the Philippines.</p>
            <p className="irish-para">My journey has taught me to stay strong through challenges, to always value family, and to be grateful for the love and opportunities that have shaped who I am today.</p>
          </div>
        </div>
      </section>

      {/* WEDDING PHOTOS */}
      <div className="wedding-photos-section">
        <div className="wedding-photos-grid">
          <div className="wedding-photo-wrap">
            <Image
              src="/images/wedding-1.jpg"
              alt="Steve &amp; Irish Lee — Wedding Day, September 18, 2026"
              fill
              className="photo-img"
            />
          </div>
          <div className="wedding-photo-wrap">
            <Image
              src="/images/wedding-2.jpg"
              alt="Steve &amp; Irish Lee — Lapu-Lapu City, Cebu, September 18, 2026"
              fill
              className="photo-img"
            />
          </div>
        </div>
        <p className="photo-caption">September 18, 2026 &nbsp;&middot;&nbsp; Lapu-Lapu City, Cebu, Philippines</p>
      </div>

      {/* WEDDING SECTION */}
      <section className="wedding-section">
        <div className="wedding-inner">
          <p className="wedding-label">We Did It</p>
          <h2 className="wedding-heading">Irish and I Are Officially Married</h2>
          <div className="wedding-body">
            <p className="wedding-para">On September 18, 2026, after months of paperwork, appointments, requirements, unexpected obstacles, and more than a few trips to government offices, Irish and I officially became husband and wife.</p>
            <p className="wedding-para">For anyone who has been following Expat Compass PH, you know this wasn&rsquo;t something I wanted to document after the fact. We&rsquo;ve shared the process as we actually lived it—the good information, the confusing information, the requirements that changed depending on who we talked to, the marriage seminars, the documents, the CENOMAR questions, trying to find someone available to perform the ceremony, and everything else that comes with an American marrying a Filipina in the Philippines.</p>
            <p className="wedding-para">Now we finally get to add the most important update:</p>
            <p className="wedding-em">We got married.</p>

            <div className="wedding-rule" />
            <h3 className="wedding-sub">From a Process to Our Story</h3>

            <p className="wedding-para">When I started documenting our marriage process, the goal was to help other foreigners understand what they may actually encounter when getting married in the Philippines.</p>
            <p className="wedding-para">There are plenty of websites that give you a checklist.</p>
            <p className="wedding-para">What I wanted to provide was something different: what actually happened to us.</p>
            <p className="wedding-para">Sometimes what we experienced matched the official requirements perfectly. Sometimes City Hall asked for something we weren&rsquo;t expecting. Sometimes the answer to a question depended on the office, the person behind the counter, or the city where we were getting married.</p>
            <p className="wedding-para">We documented those experiences because that&rsquo;s the information I would have wanted when we started.</p>
            <p className="wedding-para">And now we&rsquo;ve reached the part of the story all that paperwork was leading toward.</p>

            <div className="wedding-rule" />
            <h3 className="wedding-sub">September 18, 2026</h3>

            <p className="wedding-para">Irish and I were officially married on September 18, 2026, in Lapu-Lapu City, Cebu, Philippines.</p>
            <p className="wedding-para">After everything it took to get there, being able to finally say &ldquo;my wife&rdquo; instead of &ldquo;my fiancée&rdquo; feels pretty damn good.</p>
            <p className="wedding-para">But this isn&rsquo;t the end of what we&rsquo;re documenting.</p>
            <p className="wedding-para">It&rsquo;s really the beginning of the next chapter.</p>

            <div className="wedding-rule" />
            <h3 className="wedding-sub">What&rsquo;s Next</h3>

            <p className="wedding-para">Our next major process is obtaining Irish&rsquo;s PSA Marriage Certificate and beginning the CR-1 spousal visa process so she can eventually become a U.S. permanent resident.</p>
            <p className="wedding-para">We&rsquo;ll continue living primarily in the Philippines, but we want Irish to be able to travel with me to the United States, spend time with my family, and eventually have the freedom that comes with permanent residency.</p>
            <p className="wedding-para">And just like we did with the marriage process, we&rsquo;re going to document the CR-1 process as we actually experience it.</p>
            <p className="wedding-para">The forms. The costs. The waiting. USCIS. NVC. The medical examination. The U.S. Embassy interview in Manila. The mistakes we avoid—and probably a few things we learn the hard way.</p>
            <p className="wedding-para">When something changes, we&rsquo;ll update it.</p>
            <p className="wedding-para">When we&rsquo;re told something different from what the websites say, we&rsquo;ll tell you.</p>
            <p className="wedding-para">And when Irish eventually receives her immigrant visa, you&rsquo;ll know exactly how we got there.</p>

            <div className="wedding-rule" />
            <h3 className="wedding-sub">Officially Mr. &amp; Mrs. Lee</h3>

            <p className="wedding-para">For now, though, we&rsquo;re going to enjoy this moment.</p>
            <p className="wedding-para">After documenting every requirement and every step along the way, I&rsquo;m extremely happy to finally write this one:</p>

            <div className="wedding-sign">
              <span className="wedding-sign-name">Stephen &amp; Irish Lee</span>
              <span className="wedding-sign-line">Married September 18, 2026</span>
              <span className="wedding-sign-line">Lapu-Lapu City, Cebu, Philippines 🇺🇸❤️🇵🇭</span>
            </div>

            <div className="wedding-rule" />
            <p className="wedding-para">The marriage process is complete.</p>
            <p className="wedding-para">Now the next adventure begins.</p>
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

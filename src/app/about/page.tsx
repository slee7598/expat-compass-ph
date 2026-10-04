import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BodyText from "@/components/BodyText";

export const metadata: Metadata = {
  title: "About Expat Compass PH — Practical Guides for Living in the Philippines",
  description:
    "Expat Compass PH is a practical reference for Americans and other Western expats living in or moving to the Philippines. Real experience, honest guidance.",
  alternates: { canonical: "https://expatcompassph.com/about" },
};

const topics = [
  { label: "Cost of Living", href: "/cost-of-living", desc: "Real monthly budget data from Cebu, including rent, utilities, groceries, dining, and transport." },
  { label: "City Guides", href: "/city-guides", desc: "Neighbourhood breakdowns for Mactan Island and Cebu City, with honest pros, cons, and price ranges." },
  { label: "Visas & Immigration", href: "/visas", desc: "Tourist visa extensions, the 13A spousal visa, the SRRV, and current BI fee schedules." },
  { label: "Healthcare", href: "/healthcare", desc: "Private hospitals, PhilHealth, international health insurance, and first-hand ER cost data." },
  { label: "Housing", href: "/housing", desc: "How to find a condo, what to pay, what to ask landlords, and the Airbnb-first strategy." },
  { label: "Banking & Money", href: "/banking", desc: "GCash, Wise, Remitly, local banks, and how to manage money across borders." },
  { label: "Transportation", href: "/transportation", desc: "Grab, Maxim, LTO license conversion, and a real used-motorcycle purchase example." },
  { label: "Marriage in the Philippines", href: "/marriage", desc: "Step-by-step marriage license process, NSO documents, and CR-1 spousal visa guidance." },
  { label: "Income Abroad", href: "/income-abroad", desc: "Remote work rules, the FEIE, and how US expats in the Philippines handle taxes." },
  { label: "Retirement Benefits", href: "/retirement-benefits", desc: "Social Security abroad, Medicare, VA benefits, and how they interact with Philippine residency." },
  { label: "Moving to the Philippines", href: "/moving-to-philippines", desc: "What to bring, what to ship, what to buy locally, and how to handle customs." },
  { label: "Arrival Guide", href: "/arrival-guide", desc: "First days on the ground — SIM cards, airport, getting to your accommodation, and orientation." },
  { label: "Dating in the Philippines", href: "/dating-philippines", desc: "Honest guidance on dating apps, cultural context, scam awareness, and what to expect." },
  { label: "Expat Toolkit", href: "/expat-toolkit", desc: "Products and services Expat Compass PH uses and recommends, with affiliate links disclosed." },
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background: #F8F6F1; color: #0B1F3A; }

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
          color: rgba(248,246,241,0.78);
          letter-spacing: 0.04em;
        }

        /* ── INTRO ── */
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
        .intro-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          font-weight: 700;
          color: #0B1F3A;
          line-height: 1.2;
          margin-bottom: 28px;
        }
        .intro-text {
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.85;
          color: #2A3A4A;
        }
        .intro-text + .intro-text { margin-top: 20px; }

        /* ── TOPICS ── */
        .topics-section {
          background: #0B1F3A;
          padding: 80px 48px;
        }
        .topics-inner { max-width: 900px; }
        .topics-label {
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
        .topics-label::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #C9A84C;
        }
        .topics-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: #F8F6F1;
          line-height: 1.2;
          margin-bottom: 40px;
        }
        .topics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
        }
        .topic-card {
          background: rgba(248,246,241,0.04);
          padding: 22px 24px;
          text-decoration: none;
          transition: background 0.2s;
          display: block;
        }
        .topic-card:hover { background: rgba(248,246,241,0.08); }
        .topic-card-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 8px;
        }
        .topic-card-desc {
          font-size: 0.88rem;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(248,246,241,0.78);
        }

        /* ── RESEARCH ── */
        .research-section {
          background: #F8F6F1;
          padding: 80px 48px;
          border-bottom: 1px solid rgba(11,31,58,0.08);
        }
        .research-inner { max-width: 700px; }
        .research-label {
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
        .research-label::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #C9A84C;
        }
        .research-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          font-weight: 700;
          color: #0B1F3A;
          line-height: 1.2;
          margin-bottom: 28px;
        }
        .research-text {
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.85;
          color: #2A3A4A;
        }
        .research-text + .research-text { margin-top: 20px; }

        /* ── DISCLOSURE ── */
        .disclosure-section {
          background: #0B1F3A;
          padding: 80px 48px;
        }
        .disclosure-inner { max-width: 700px; }
        .disclosure-label {
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
        .disclosure-label::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #C9A84C;
        }
        .disclosure-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          font-weight: 700;
          color: #F8F6F1;
          line-height: 1.2;
          margin-bottom: 28px;
        }
        .disclosure-text {
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.85;
          color: rgba(248,246,241,0.78);
        }
        .disclosure-text + .disclosure-text { margin-top: 20px; }
        .disclosure-contact {
          margin-top: 40px;
          padding: 24px 28px;
          background: rgba(248,246,241,0.06);
          border-left: 3px solid #C9A84C;
        }
        .disclosure-contact-label {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 10px;
        }
        .disclosure-contact-email {
          font-size: 0.97rem;
          font-weight: 400;
          color: #F8F6F1;
        }
        .disclosure-contact-email a {
          color: #C9A84C;
          text-decoration: none;
        }
        .disclosure-contact-email a:hover { text-decoration: underline; }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .page-hero { padding: 48px 24px 64px; }
          .intro-section { padding: 56px 24px; }
          .topics-section { padding: 64px 24px; }
          .topics-grid { grid-template-columns: 1fr; }
          .research-section { padding: 64px 24px; }
          .disclosure-section { padding: 64px 24px; }
        }
      `}</style>

      {/* PAGE HEADER */}
      <header className="page-header">
        <Nav active="/about" />
        <div className="page-hero">
          <p className="page-eyebrow">About</p>
          <h1 className="page-title">Expat Compass PH</h1>
          <p className="page-subtitle">Practical guides for living in the Philippines &nbsp;·&nbsp; Updated from Cebu</p>
        </div>
      </header>

      {/* INTRO */}
      <section className="intro-section">
        <div className="intro-inner">
          <p className="intro-label">What This Site Is</p>
          <h2 className="intro-heading">A practical reference built from real experience in Cebu.</h2>
          <p className="intro-text">
            Expat Compass PH is a practical reference for Americans and other Western expats who are living in,
            moving to, or seriously considering the Philippines. Every page on this site is built from first-hand
            experience on the ground in Cebu — not from a tourist visit, not from aggregated travel blogs, and
            not from content written without actually living here.
          </p>
          <p className="intro-text">
            The site covers the practical side of expat life: cost of living, housing, visas, banking, healthcare,
            transportation, and more. Where official requirements exist, they are checked against official sources
            and updated when they change. Where the lived reality differs from what the government websites say,
            both are noted clearly.
          </p>
          <p className="intro-text">
            Expat Compass PH is not a travel guide. It is a reference for people making a real move — or already
            living it.
          </p>
        </div>
      </section>

      {/* TOPICS */}
      <section className="topics-section">
        <div className="topics-inner">
          <p className="topics-label">Coverage</p>
          <h2 className="topics-heading">What this site covers.</h2>
          <div className="topics-grid">
            {topics.map((t) => (
              <a key={t.href} className="topic-card" href={t.href}>
                <p className="topic-card-label">{t.label}</p>
                <p className="topic-card-desc">{t.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE RESEARCH */}
      <section className="research-section">
        <div className="research-inner">
          <p className="research-label">How Information Is Gathered</p>
          <h2 className="research-heading">First-hand, updated when things change.</h2>
          <p className="research-text">
            Every page on Expat Compass PH is built from direct experience. The cost figures, visa fee schedules,
            hospital costs, rental prices, and practical tips all come from actually doing the things described —
            not from summarising other websites. Where an &ldquo;Expat Compass PH Note&rdquo; callout appears on a page, it
            flags first-hand experience with that specific process, cost, or service.
          </p>
          <p className="research-text">
            The Philippines changes quickly. Bureau of Immigration fees are adjusted periodically. Bank policies
            shift. New requirements appear without much announcement. Pages are reviewed and updated when changes
            are confirmed. When content has been recently verified, the verification date appears at the bottom
            of the relevant section. When information is known to be outdated, that is flagged clearly rather
            than left to mislead.
          </p>
          <p className="research-text">
            No content on this site is written speculatively, aggregated from other expat blogs, or filled in
            with generic advice where real experience is missing. If a section is incomplete, it says so.
          </p>
        </div>
      </section>

      {/* DISCLOSURE & CONTACT */}
      <section className="disclosure-section">
        <div className="disclosure-inner">
          <p className="disclosure-label">Transparency</p>
          <h2 className="disclosure-heading">Affiliate links & contact.</h2>
          <BodyText variant="dark-bg" style={{fontSize:'1rem',fontWeight:300,lineHeight:1.85}}>
            Some pages on Expat Compass PH — particularly the{' '}
            <a href="/expat-toolkit" style={{color:'#C9A84C',textDecoration:'none'}}>Expat Toolkit</a>
            {' '}and the{' '}
            <a href="/banking" style={{color:'#C9A84C',textDecoration:'none'}}>Banking</a>
            {' '}page — contain affiliate links. If you use a link and make a purchase or sign up,
            Expat Compass PH may earn a small commission at no extra cost to you. Affiliate links
            are disclosed on every page where they appear.
          </BodyText>
          <BodyText variant="dark-bg" style={{fontSize:'1rem',fontWeight:300,lineHeight:1.85,marginTop:'20px'}}>
            Only products and services that have been personally tested or used are recommended on this site.
            Expat Compass PH does not accept sponsored placements or paid reviews. The recommendations reflect
            genuine first-hand use, and the affiliate status of a link does not change the recommendation.
          </BodyText>
          <BodyText variant="dark-bg" style={{fontSize:'1rem',fontWeight:300,lineHeight:1.85,marginTop:'20px'}}>
            Limited display advertising from Google AdSense may appear on some pages. Ad placements are
            handled automatically by Google and do not reflect editorial endorsements.
          </BodyText>
          <div className="disclosure-contact">
            <p className="disclosure-contact-label">Contact</p>
            <p className="disclosure-contact-email">
              For questions, corrections, or to report outdated information:{' '}
              <a href="mailto:contact@expatcompassph.com">contact@expatcompassph.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BodyText from "@/components/BodyText";

export const metadata: Metadata = {
  title: "Passport Bros: What the Term Means and Where I Stand | Expat Compass PH",
  description:
    "Steve explains what the passport bro label means, where he stands on it, and how he ended up married in the Philippines.",
  alternates: { canonical: "https://expatcompassph.com/passport-bros" },
};

export default function PassportBrosPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background: #F8F6F1; color: #0B1F3A; }

        /* ── PAGE HEADER ── */
        .pb-header { background: #0B1F3A; }
        .pb-hero { padding: 72px 48px 96px; max-width: 820px; }
        .pb-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 20px;
        }
        .pb-eyebrow::before { content: ''; display: block; width: 28px; height: 1px; background: #C9A84C; }
        .pb-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 700; line-height: 1.12; color: #F8F6F1;
        }

        /* ── SECTIONS ── */
        .pb-section { padding: 88px 48px; }
        .pb-light { background: #F8F6F1; }
        .pb-dark  { background: #0B1F3A; }
        .pb-inner { max-width: 860px; }

        /* ── SECTION LABELS ── */
        .pb-label {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.7rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 16px;
        }
        .pb-label::before { content: '◈'; font-size: 0.65rem; }

        /* ── HEADINGS ── */
        .pb-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.7rem, 3vw, 2.3rem);
          font-weight: 700; line-height: 1.2; margin-bottom: 36px; max-width: 720px;
        }
        .pb-heading-light { color: #F8F6F1; }
        .pb-heading-dark  { color: #0B1F3A; }

        /* ── BODY TEXT ── */
        .pb-para  { font-size: 0.93rem; font-weight: 300; line-height: 1.85; margin-bottom: 18px; max-width: 760px; }
        .pb-intro { font-size: 1rem; font-weight: 300; line-height: 1.75; max-width: 760px; margin-bottom: 18px; }

        /* ── LIST ── */
        .pb-list { list-style: none; margin: 12px 0 24px; display: flex; flex-direction: column; gap: 10px; max-width: 760px; }
        .pb-li { font-size: 0.93rem; font-weight: 300; line-height: 1.75; padding-left: 24px; position: relative; }
        .pb-li::before { content: '—'; position: absolute; left: 0; color: #C9A84C; font-weight: 600; }

        /* ── SIGNOFF ── */
        .pb-signoff { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; font-style: italic; margin-top: 36px; }

        /* ── INLINE LINKS ── */
        .pb-link { color: #C9A84C; text-decoration: none; font-weight: 500; }
        .pb-link:hover { text-decoration: underline; }

        /* ── JUMP NAV ── */
        .cs-label {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 24px; margin-top: 48px;
          display: flex; align-items: center; gap: 12px;
        }
        .cs-label::before, .cs-label::after { content: ''; display: block; flex: 1; height: 1px; background: rgba(201,168,76,0.25); }
        .cs-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; }
        .cs-card {
          display: block; text-decoration: none; background: #0B1F3A;
          padding: 22px 24px; border: 1px solid rgba(201,168,76,0.15);
          transition: border-color 0.18s, background 0.18s; cursor: pointer;
        }
        .cs-card:hover { border-color: #C9A84C; background: rgba(11,31,58,0.92); }
        .cs-city {
          font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: #F8F6F1;
          display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 6px;
        }
        .cs-city::after { content: '→'; font-family: 'Inter', sans-serif; font-size: 0.85rem; color: #C9A84C; flex-shrink: 0; transition: transform 0.18s; }
        .cs-card:hover .cs-city::after { transform: translateX(4px); }
        .cs-tagline { font-size: 0.8rem; font-weight: 300; line-height: 1.55; color: #F8F6F1; }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .pb-hero    { padding: 48px 24px 64px; }
          .pb-section { padding: 56px 24px; }
          .cs-grid    { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      {/* HEADER */}
      <div className="pb-header">
        <Nav active="/passport-bros" />
        <div className="pb-hero">
          <p className="pb-eyebrow">Steve&rsquo;s Story</p>
          <h1 className="pb-title">Passport Bros: What the Term Means and Where I Stand</h1>
        </div>
      </div>

      {/* OPENING + JUMP NAV */}
      <section className="pb-section pb-light">
        <div className="pb-inner">
          <BodyText variant="light-bg" className="pb-intro">
            This site is for every kind of expat. This page covers one topic that comes up constantly, and where I stand on it.
          </BodyText>
          <BodyText variant="light-bg" className="pb-intro">
            If you spend any time in the Philippines expat world, someone will eventually call you a passport bro. Technically, I became one. Here&rsquo;s what I think the term means, what I think it has turned into, and how it applies to me.
          </BodyText>

          <p className="cs-label">Jump to a Section</p>
          <div className="cs-grid">
            <a href="#two-kinds" className="cs-card">
              <p className="cs-city">Two Very Different Things</p>
              <p className="cs-tagline">What the term actually covers</p>
            </a>
            <a href="#where-i-stand" className="cs-card">
              <p className="cs-city">Where I Stand</p>
              <p className="cs-tagline">The approach I&rsquo;d suggest to anyone</p>
            </a>
            <a href="#my-story" className="cs-card">
              <p className="cs-city">My Story</p>
              <p className="cs-tagline">How I ended up married in the Philippines</p>
            </a>
            <a href="#highlight-reels" className="cs-card">
              <p className="cs-city">What the Highlight Reels Leave Out</p>
              <p className="cs-tagline">The realities no one posts about</p>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1 — TWO VERY DIFFERENT THINGS */}
      <section className="pb-section pb-dark" id="two-kinds">
        <div className="pb-inner">
          <p className="pb-label">The term</p>
          <h2 className="pb-heading pb-heading-light">Two very different things</h2>
          <BodyText variant="dark-bg" className="pb-para">The term now covers two kinds of men.</BodyText>
          <BodyText variant="dark-bg" className="pb-para">The first flies in for a few weeks of sex and flies home. I want nothing to do with that. Nothing on this site is written for him or meant to help him.</BodyText>
          <BodyText variant="dark-bg" className="pb-para">The second is a man who ends up building a real life with a Filipina: courtship, family, marriage, and the paperwork that goes with it. That&rsquo;s the only version I&rsquo;m talking about here.</BodyText>
        </div>
      </section>

      {/* SECTION 2 — WHERE I STAND */}
      <section className="pb-section pb-light" id="where-i-stand">
        <div className="pb-inner">
          <p className="pb-label">My view</p>
          <h2 className="pb-heading pb-heading-dark">Where I stand</h2>
          <BodyText variant="light-bg" className="pb-para">
            Whatever brings you to the Philippines, whether it&rsquo;s adventure, work, retirement, or a relationship, this site is for you. Here&rsquo;s the approach I&rsquo;d suggest to anyone:
          </BodyText>
          <ul className="pb-list">
            <BodyText as="li" variant="light-bg" className="pb-li">Come for the country first. Get to know the place before you make any big decisions.</BodyText>
            <BodyText as="li" variant="light-bg" className="pb-li">Treat people and their families with respect. If you&rsquo;re building a relationship, that includes meeting her family and honoring what they expect of you.</BodyText>
            <BodyText as="li" variant="light-bg" className="pb-li">Verify everything yourself. Never send money to someone you haven&rsquo;t met in person.</BodyText>
            <BodyText as="li" variant="light-bg" className="pb-li">Do the legal process properly. Marriage, immigration, and property all work differently here, and cutting corners is how good people get hurt.</BodyText>
            <BodyText as="li" variant="light-bg" className="pb-li">Ask questions and take your time. Nobody has this figured out on day one, and I certainly didn&rsquo;t.</BodyText>
          </ul>
        </div>
      </section>

      {/* SECTION 3 — MY STORY */}
      <section className="pb-section pb-dark" id="my-story">
        <div className="pb-inner">
          <p className="pb-label">Steve&rsquo;s story</p>
          <h2 className="pb-heading pb-heading-light">My story</h2>
          <BodyText variant="dark-bg" className="pb-para">I didn&rsquo;t come to the Philippines looking for love. I came for the adventure: waterfalls, beautiful beaches, island hopping, and a place that felt nothing like home. I chose the Philippines over the rest of Southeast Asia for one reason. It&rsquo;s an English-speaking country, period.</BodyText>
          <BodyText variant="dark-bg" className="pb-para">I&rsquo;d lived here for about a year when I met Irish. By then I&rsquo;d noticed how different the gender roles were, and how close they are to the way I grew up. In my experience, the women here are more traditional and feminine, deeply family-oriented, and looking for a man who provides and protects. That&rsquo;s how America was when I was a kid, and it lines up with my values. That&rsquo;s my experience and my values. It isn&rsquo;t a claim about every woman, and it isn&rsquo;t a knock on women back home.</BodyText>
          <BodyText variant="dark-bg" className="pb-para">Irish is the most beautiful woman I have ever seen, inside and out, and her interest in me was genuine. She was raised in the province, in Hilagasan, Barili, Cebu, which is more traditional than the city. For me it was love at first sight. She didn&rsquo;t rush. She took the time to get to know me, and meeting her family was paramount.</BodyText>
          <BodyText variant="dark-bg" className="pb-para">We were married on September 18, 2026, in Lapu-Lapu City. We&rsquo;re now starting the CR-1 process so Irish can eventually live and travel with me in the US, and we&rsquo;re documenting every step on this site.</BodyText>
          <BodyText variant="dark-bg" className="pb-para">So I became a passport bro after I came to the Philippines, not before. The country changed what I wanted, not the other way around.</BodyText>
        </div>
      </section>

      {/* SECTION 4 — WHAT THE HIGHLIGHT REELS LEAVE OUT */}
      <section className="pb-section pb-light" id="highlight-reels">
        <div className="pb-inner">
          <p className="pb-label">The realities</p>
          <h2 className="pb-heading pb-heading-dark">What the highlight reels leave out</h2>
          <ul className="pb-list">
            <BodyText as="li" variant="light-bg" className="pb-li">Money requests are real. Some are innocent, some are a pattern, and some are a scam. There&rsquo;s an entire romance-scam industry built around lonely foreign men.</BodyText>
            <BodyText as="li" variant="light-bg" className="pb-li">Family is part of the deal. You don&rsquo;t marry just her.</BodyText>
            <BodyText as="li" variant="light-bg" className="pb-li">The law isn&rsquo;t on your side by default. There&rsquo;s no divorce in the Philippines, concubinage is a crime, and a US divorce isn&rsquo;t automatically recognized here.</BodyText>
            <BodyText as="li" variant="light-bg" className="pb-li">Not every story ends well. The men it goes badly for usually moved fast and ignored the warning signs.</BodyText>
          </ul>
          <BodyText variant="light-bg" className="pb-para" style={{ marginTop: "24px" }}>
            If you&rsquo;re serious, start with our{" "}
            <Link href="/dating-philippines" className="pb-link">dating guide</Link>
            , then the{" "}
            <Link href="/marriage" className="pb-link">marriage</Link>
            {" "}and{" "}
            <Link href="/divorce-philippines" className="pb-link">divorce</Link>
            {" "}pages.
          </BodyText>
          <BodyText variant="light-bg" className="pb-signoff">— Steve</BodyText>
        </div>
      </section>

      <Footer />
    </>
  );
}

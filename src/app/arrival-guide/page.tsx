import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Arriving in the Philippines — Airport Guide and First Steps 2026",
  description:
    "Step-by-step arrival guide for the Philippines. NAIA Manila and Mactan-Cebu airport process, immigration, customs, transport, and your first week setup checklist.",
  alternates: { canonical: "https://expatcompassph.com/arrival-guide" },
};

export default function ArrivalGuidePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background: #F8F6F1; color: #0B1F3A; }

        .page-header { background: #0B1F3A; }
        .page-hero { padding: 72px 48px 96px; max-width: 820px; }
        .page-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 20px;
        }
        .page-eyebrow::before { content: ''; display: block; width: 28px; height: 1px; background: #C9A84C; }
        .page-title { font-family: 'Playfair Display', serif; font-size: clamp(2.2rem, 4.5vw, 3.4rem); font-weight: 700; line-height: 1.12; color: #F8F6F1; margin-bottom: 24px; }
        .page-sub { font-size: 1.05rem; font-weight: 300; line-height: 1.65; color: #F8F6F1; max-width: 580px; }

        .section { padding: 88px 48px; }
        .section-light { background: #F8F6F1; }
        .section-dark { background: #0B1F3A; }
        .section-inner { max-width: 900px; }

        .section-label {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.7rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 16px;
        }
        .section-label::before { content: '◈'; font-size: 0.65rem; }
        .section-heading { font-family: 'Playfair Display', serif; font-size: clamp(1.7rem, 3vw, 2.4rem); font-weight: 700; line-height: 1.2; color: #0B1F3A; margin-bottom: 32px; max-width: 720px; }
        .section-heading-light { color: #F8F6F1; }

        .ab { font-size: 0.93rem; font-weight: 300; line-height: 1.85; color: #4A5868; margin-bottom: 16px; max-width: 760px; }
        .ab-light { color: #F8F6F1; }
        .asub { font-family: 'Playfair Display', serif; font-size: clamp(1.05rem,1.8vw,1.28rem); font-weight: 700; color: #0B1F3A; margin: 36px 0 12px; padding-top: 32px; border-top: 1px solid rgba(11,31,58,0.08); max-width: 760px; }
        .asub-first { border-top: none; padding-top: 0; margin-top: 0; }
        .asub-light { color: #F8F6F1; border-top-color: rgba(248,246,241,0.1); }

        .alist { list-style: none; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 9px; max-width: 760px; }
        .ali { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #4A5868; padding-left: 22px; position: relative; }
        .ali::before { content: '—'; position: absolute; left: 0; color: #C9A84C; font-weight: 600; }
        .ali-light { color: #F8F6F1; }

        .anlist { list-style: none; counter-reset: actr; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 10px; max-width: 760px; }
        .ani { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #4A5868; padding-left: 30px; position: relative; counter-increment: actr; }
        .ani::before { content: counter(actr) '.'; position: absolute; left: 0; color: #C9A84C; font-size: 0.78rem; font-weight: 700; padding-top: 2px; }
        .ani-light { color: #F8F6F1; }

        .aa-gold { background: rgba(201,168,76,0.06); border: 1px solid rgba(201,168,76,0.3); border-left: 4px solid #C9A84C; padding: 26px 28px; margin: 28px 0; max-width: 760px; }
        .aa-gold-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
        .aa-gold-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #4A5868; }
        .aa-gold-body-light { color: #F8F6F1; }

        .aa-warning { background: rgba(235,87,87,0.06); border: 1px solid rgba(235,87,87,0.22); border-left: 4px solid #EB5757; padding: 26px 28px; margin: 28px 0; max-width: 760px; }
        .aa-warning-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #EB5757; margin-bottom: 10px; }
        .aa-warning-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #F8F6F1; }

        /* 24-hour checklist card */
        .checklist-24 { background: #0B1F3A; padding: 40px 44px; margin: 28px 0; max-width: 760px; }
        .checklist-24-title { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; color: #C9A84C; margin-bottom: 24px; letter-spacing: 0.02em; }
        .checklist-24-items { list-style: none; display: flex; flex-direction: column; gap: 14px; }
        .checklist-24-item { font-size: 0.9rem; font-weight: 300; line-height: 1.65; color: #F8F6F1; padding-left: 26px; position: relative; }
        .checklist-24-item::before { content: '✓'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; font-size: 0.8rem; }

        .checklist-card { background: #fff; border: 1px solid #E8E4DC; padding: 40px 44px; margin-top: 8px; max-width: 760px; }
        .checklist-items { list-style: none; display: flex; flex-direction: column; gap: 14px; counter-reset: chkctr; }
        .checklist-item { display: grid; grid-template-columns: 32px 1fr; gap: 12px; font-size: 0.9rem; font-weight: 300; line-height: 1.65; color: #4A5868; counter-increment: chkctr; }
        .checklist-item::before { content: counter(chkctr); display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; background: #C9A84C; font-family: 'Playfair Display', serif; font-size: 0.8rem; font-weight: 700; color: #0B1F3A; flex-shrink: 0; margin-top: 1px; }

        .sn-section { background: #0D1E30; border-top: 3px solid #C9A84C; padding: 80px 48px; position: relative; overflow: hidden; }
        .sn-section::before { content: 'S'; font-family: 'Playfair Display', serif; font-size: 320px; font-weight: 700; color: rgba(201,168,76,0.05); position: absolute; right: -10px; top: -60px; line-height: 1; pointer-events: none; user-select: none; }
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

        .legal-section { background: #F8F6F1; padding: 64px 48px; border-top: 1px solid #E8E4DC; }
        .legal-inner { max-width: 900px; display: grid; grid-template-columns: 1fr 2fr; gap: 64px; align-items: start; }
        .legal-icon { width: 48px; height: 48px; background: #C9A84C; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; font-size: 1.2rem; color: #0B1F3A; font-weight: 700; }
        .legal-body { font-size: 0.9rem; font-weight: 300; line-height: 1.85; color: #5C6B7A; max-width: 640px; }
        .legal-body strong { color: #0B1F3A; font-weight: 600; }

        @media (max-width: 900px) {
          .page-hero { padding: 56px 24px 72px; }
          .section { padding: 64px 24px; }
          .sn-section { padding: 56px 24px; }
          .legal-section { padding: 48px 24px; }
          .legal-inner { grid-template-columns: 1fr; gap: 32px; }
          .checklist-card { padding: 28px 24px; }
          .checklist-24 { padding: 28px 24px; }
        }
        @media (max-width: 600px) {
          .page-title { font-size: 2rem; }
        }
      `}</style>

      <div className="page-header">
        <Nav active="/arrival-guide" />
        <div className="page-hero">
          <p className="page-eyebrow">Arrival Guide</p>
          <h1 className="page-title">Arriving in the Philippines</h1>
          <p className="page-sub">Step by step through immigration, customs, transport, and your first week. No surprises — just clear, practical guidance for a smooth arrival.</p>
        </div>
      </div>

      {/* BEFORE YOU BOARD */}
      <section className="section section-light" id="before-you-board">
        <div className="section-inner">
          <p className="section-label">Before You Board</p>
          <h2 className="section-heading">Before You Board</h2>

          <div className="aa-gold">
            <p className="aa-gold-label">eTravel Registration — Required for All Arrivals</p>
            <p className="aa-gold-body">Register at <strong>ph.etravel.gov.ph</strong> before your flight — completely free. Do not use paid third-party sites that charge for this registration. Have your QR code ready on your phone before landing. Check which terminal your flight arrives at — NAIA has four separate terminal buildings that cannot be accessed internally.</p>
          </div>

          <ul className="alist">
            <li className="ali">Register at ph.etravel.gov.ph — free, takes 5 minutes.</li>
            <li className="ali">Save your QR code to your phone — screenshot it in case of connectivity issues on arrival.</li>
            <li className="ali">Check your ticket for the correct NAIA terminal — Terminal 1, 2, 3, or 4 are separate buildings.</li>
            <li className="ali">Have your accommodation address accessible — immigration officers may ask.</li>
            <li className="ali">Have your return or onward ticket accessible — officers occasionally ask.</li>
          </ul>
        </div>
      </section>

      {/* MACTAN-CEBU */}
      <section className="section section-dark" id="mactan-cebu">
        <div className="section-inner">
          <p className="section-label">Cebu Arrivals</p>
          <h2 className="section-heading section-heading-light">Mactan-Cebu International Airport</h2>
          <p className="ab ab-light">Modern airport — significantly more manageable than NAIA.</p>
          <ul className="alist">
            <li className="ali ali-light">International arrivals typically processed in 15 to 30 minutes.</li>
            <li className="ali ali-light">Baggage 20 to 40 minutes.</li>
            <li className="ali ali-light">Globe and Smart SIM card counters in the arrival hall — buy immediately after collecting baggage.</li>
            <li className="ali ali-light">Grab is fully operational from the airport — do not use airport touts.</li>
            <li className="ali ali-light">Official taxi queue available but Grab is more reliable and price-transparent.</li>
          </ul>
        </div>
      </section>

      {/* NAIA MANILA */}
      <section className="section section-light" id="naia">
        <div className="section-inner">
          <p className="section-label">Manila Arrivals</p>
          <h2 className="section-heading">NAIA Manila — Step by Step</h2>
          <p className="ab">Terminal 1 for most international flag carrier flights. Terminal 3 for Cebu Pacific and most budget airlines. Terminals are completely separate buildings — verify your terminal from your ticket before arriving.</p>

          <div className="anlist">
            <div className="ani">
              <strong>eTravel QR code</strong> — Have your registration QR code ready; it is scanned at the arrival hall entrance.
            </div>
            <div className="ani">
              <strong>Immigration</strong> — Follow signs to Immigration; fill out the arrival card if distributed; have your passport open to the photo page; state purpose as tourism; have your accommodation address accessible; officers may ask about your return ticket.
            </div>
            <div className="ani">
              <strong>Baggage claim</strong> — NAIA baggage handling is slow; allow 45 to 60 minutes; check display boards for your flight&rsquo;s carousel number.
            </div>
            <div className="ani">
              <strong>Customs</strong> — Declare items over the duty-free allowance; most travelers with standard luggage pass through the green lane.
            </div>
            <div className="ani">
              <strong>Exit and transport</strong> — Exit through arrival doors; official airport taxi queues are marked; use only these or Grab from the designated rideshare pickup area; ignore anyone approaching you inside the terminal offering transport or accommodation.
            </div>
          </div>

          <div className="aa-warning">
            <p className="aa-warning-label">⚠ Touts and Fixers</p>
            <p className="aa-warning-body">Anyone approaching you unsolicited inside or outside the terminal offering taxis, transport, or accommodation is operating outside the official system. Use only the official taxi queue or Grab. Overcharging and scams targeting new arrivals are common at NAIA.</p>
          </div>
        </div>
      </section>

      {/* CONNECTING TO CEBU */}
      <section className="section section-dark" id="connecting">
        <div className="section-inner">
          <p className="section-label">Manila to Cebu</p>
          <h2 className="section-heading section-heading-light">Connecting from Manila to Cebu or Other Domestic Destinations</h2>
          <p className="ab ab-light">You must exit the international arrival terminal, take a shuttle or taxi to the domestic terminal, and check in again with your baggage. Allow a minimum of 3 to 4 hours for international-to-domestic connections at NAIA.</p>
          <ul className="alist">
            <li className="ali ali-light">Terminal 2 for PAL (Philippine Airlines) domestic flights.</li>
            <li className="ali ali-light">Terminal 3 for Cebu Pacific and most budget domestic carriers.</li>
            <li className="ali ali-light">A shuttle bus runs between terminals but taxis are faster with luggage.</li>
            <li className="ali ali-light">Do not underestimate connection time — 3 hours minimum is not excessive at NAIA.</li>
          </ul>
        </div>
      </section>

      {/* IMMIGRATION */}
      <section className="section section-light" id="immigration">
        <div className="section-inner">
          <p className="section-label">Immigration</p>
          <h2 className="section-heading">At Philippine Immigration — What to Expect</h2>
          <p className="ab">Officers are professional and the process is routine for Western visitors.</p>
          <ul className="alist">
            <li className="ali">Americans receive 59 days on arrival.</li>
            <li className="ali">Most other Western nationalities receive 30 days.</li>
            <li className="ali">State tourism as your purpose of visit.</li>
            <li className="ali">Have your accommodation address ready.</li>
            <li className="ali">Have your return or onward ticket accessible — officers occasionally ask.</li>
          </ul>

          <div className="aa-gold">
            <p className="aa-gold-label">What Not to Say</p>
            <p className="aa-gold-body">Do not state that you plan to stay indefinitely or that you are looking for work. State tourism as your purpose of visit even if you intend to apply for a long-stay visa after arrival.</p>
          </div>
        </div>
      </section>

      {/* FIRST 24 HOURS */}
      <section className="section section-dark" id="first-24">
        <div className="section-inner">
          <p className="section-label">First 24 Hours</p>
          <h2 className="section-heading section-heading-light">First 24 Hours Checklist</h2>
          <div className="checklist-24">
            <p className="checklist-24-title">Get these done today.</p>
            <ul className="checklist-24-items">
              <li className="checklist-24-item">Buy local SIM card — Globe or Smart at the airport.</li>
              <li className="checklist-24-item">Download Grab.</li>
              <li className="checklist-24-item">Set up Maya for digital payments.</li>
              <li className="checklist-24-item">Find your accommodation.</li>
              <li className="checklist-24-item">Eat something good.</li>
              <li className="checklist-24-item">Sleep — you just crossed the Pacific.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FIRST WEEK */}
      <section className="section section-light" id="first-week">
        <div className="section-inner">
          <p className="section-label">First Week</p>
          <h2 className="section-heading">First Week Setup Checklist</h2>
          <div className="checklist-card">
            <ol className="checklist-items">
              <li className="checklist-item">Buy local SIM — Globe or Smart.</li>
              <li className="checklist-item">Download Grab.</li>
              <li className="checklist-item">Set up Maya or GCash.</li>
              <li className="checklist-item">Confirm eTravel registration at ph.etravel.gov.ph.</li>
              <li className="checklist-item">Locate nearest Bureau of Immigration office.</li>
              <li className="checklist-item">Open Philippine bank account — BDO, BPI, or UnionBank.</li>
              <li className="checklist-item">Set up Wise or Remitly.</li>
              <li className="checklist-item">Save nearest private hospital number — Chong Hua Mandaue for Mactan residents.</li>
              <li className="checklist-item">Join expat Facebook groups — Expats in Cebu and Foreigners in the Philippines.</li>
              <li className="checklist-item">Get Hepatitis B vaccination if not already done.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* STEVE'S NOTE */}
      <section className="sn-section">
        <div className="sn-inner">
          <div className="sn-header">
            <div className="sn-monogram">S</div>
            <div>
              <p className="sn-name">Steve&rsquo;s Note</p>
              <p className="sn-tag">First Impressions · Cebu, Philippines</p>
            </div>
          </div>
          <div className="sn-rule" />
          <div className="sn-body">
            <p>The first time I arrived in the Philippines I had no idea what to expect. NAIA is chaotic and overwhelming if you have never been. But once I got through and on a flight to Cebu, everything changed. Mactan-Cebu airport is modern and manageable. The heat hits you the moment you step outside. A Grab showed up in 4 minutes. By the time I reached my accommodation I already felt like things were going to be okay.</p>
            <p>The Philippines rewards people who arrive with patience and a sense of humor. Give yourself a full day to adjust before making any judgments. You made the right decision.</p>
          </div>
          <p className="sn-verified">Last Updated: June 2026 · Cebu, Philippines</p>
        </div>
      </section>

      <Footer />
    </>
  );
}

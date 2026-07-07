import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HolidayBanner from "@/components/HolidayBanner";

export const metadata: Metadata = {
  title: "Moving to the Philippines — Complete Packing List and First Steps 2026",
  description:
    "Complete guide to moving to the Philippines as an expat. What to bring, what to buy locally, essential documents, airport arrival guide, and first week setup checklist. Real advice from an American living in Cebu.",
  alternates: { canonical: "https://expatcompassph.com/moving-to-philippines" },
};

export default function MovingToPhilippinesPage() {
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

        .mb { font-size: 0.93rem; font-weight: 300; line-height: 1.85; color: #4A5868; margin-bottom: 16px; max-width: 760px; }
        .mb-light { color: #F8F6F1; }
        .msub { font-family: 'Playfair Display', serif; font-size: clamp(1.05rem,1.8vw,1.28rem); font-weight: 700; color: #0B1F3A; margin: 36px 0 12px; padding-top: 32px; border-top: 1px solid rgba(11,31,58,0.08); max-width: 760px; }
        .msub-first { border-top: none; padding-top: 0; margin-top: 0; }
        .msub-light { color: #F8F6F1; border-top-color: rgba(248,246,241,0.1); }

        .mlist { list-style: none; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 9px; max-width: 760px; }
        .mli { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #4A5868; padding-left: 22px; position: relative; }
        .mli::before { content: '—'; position: absolute; left: 0; color: #C9A84C; font-weight: 600; }
        .mli-light { color: #F8F6F1; }
        .mnlist { list-style: none; counter-reset: mctr; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 10px; max-width: 760px; }
        .mni { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #4A5868; padding-left: 30px; position: relative; counter-increment: mctr; }
        .mni::before { content: counter(mctr) '.'; position: absolute; left: 0; color: #C9A84C; font-size: 0.78rem; font-weight: 700; padding-top: 2px; }
        .mni-light { color: #F8F6F1; }

        .ma-gold { background: rgba(201,168,76,0.06); border: 1px solid rgba(201,168,76,0.3); border-left: 4px solid #C9A84C; padding: 26px 28px; margin: 28px 0; max-width: 760px; }
        .ma-gold-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
        .ma-gold-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #4A5868; }
        .ma-gold-body-light { color: #F8F6F1; }

        .ma-warning { background: rgba(235,87,87,0.06); border: 1px solid rgba(235,87,87,0.22); border-left: 4px solid #EB5757; padding: 26px 28px; margin: 28px 0; max-width: 760px; }
        .ma-warning-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #EB5757; margin-bottom: 10px; }
        .ma-warning-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #4A5868; }

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

        @media (max-width: 900px) {
          .page-hero { padding: 56px 24px 72px; }
          .cs-grid { grid-template-columns: repeat(2, 1fr); }
          .section { padding: 64px 24px; }
          .sn-section { padding: 56px 24px; }
          .legal-section { padding: 48px 24px; }
          .legal-inner { grid-template-columns: 1fr; gap: 32px; }
          .checklist-card { padding: 28px 24px; }
        }
        @media (max-width: 600px) {
          .page-title { font-size: 2rem; }
        }
      `}</style>

      <div className="page-header">
        <Nav active="/moving-to-philippines" />
        <div className="page-hero">
          <p className="page-eyebrow">Moving Guide</p>
          <h1 className="page-title">Moving to the Philippines</h1>
          <p className="page-sub">What to bring, what to leave behind, what to do first, and how to set yourself up for success. Real advice from someone who has done it.</p>
          <HolidayBanner />
        </div>
      </div>

      {/* OPENING CALLOUT */}
      <section className="section section-light">
        <div className="section-inner">
          <div className="ma-gold">
            <p className="ma-gold-label">Before You Pack</p>
            <p className="ma-gold-body">The biggest mistake people make when moving to the Philippines is treating it like a domestic move. You are not relocating your American life to a new zip code. You are starting a new life in a tropical country with different voltage, different infrastructure, and dramatically different costs. The sooner you embrace this, the better your move will go.</p>
          </div>
        </div>
      </section>

      {/* ── JUMP NAV ── */}
      <section className="section section-light" style={{paddingTop:'40px', paddingBottom:'48px'}}>
        <div className="section-inner">
          <p className="cs-label">Jump to a Section</p>
          <div className="cs-grid">
            <a href="#documents" className="cs-card">
              <p className="cs-city">Documents to Prepare</p>
              <p className="cs-tagline">Get these before you leave</p>
            </a>
            <a href="#what-to-bring" className="cs-card">
              <p className="cs-city">What to Bring</p>
              <p className="cs-tagline">The essential packing list</p>
            </a>
            <a href="#what-not-to-bring" className="cs-card">
              <p className="cs-city">What NOT to Bring</p>
              <p className="cs-tagline">Save your luggage space</p>
            </a>
            <a href="#first-week" className="cs-card">
              <p className="cs-city">First Week Checklist</p>
              <p className="cs-tagline">Twelve things to do immediately</p>
            </a>
            <a href="#airport" className="cs-card">
              <p className="cs-city">Airport Arrival</p>
              <p className="cs-tagline">NAIA and Mactan-Cebu explained</p>
            </a>
            <a href="#pets" className="cs-card">
              <p className="cs-city">Bringing Your Pet</p>
              <p className="cs-tagline">The SPSIC process</p>
            </a>
            <a href="#cpap" className="cs-card">
              <p className="cs-city">CPAP &amp; Medical Gear</p>
              <p className="cs-tagline">Voltage, UPS, and supplies</p>
            </a>
            <a href="#shopping-guide" className="cs-card">
              <p className="cs-city">Shopping Guide</p>
              <p className="cs-tagline">Where to find everything in Cebu</p>
            </a>
            <a href="#balikbayan" className="cs-card">
              <p className="cs-city">Balikbayan Privilege</p>
              <p className="cs-tagline">Duty-free benefits for you and your partner</p>
            </a>
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="section section-dark" id="documents">
        <div className="section-inner">
          <p className="section-label">Documents</p>
          <h2 className="section-heading section-heading-light">Documents — Prepare These Before You Leave</h2>

          <div className="ma-gold">
            <p className="ma-gold-label">Steve&rsquo;s Shipping Reality Check</p>
            <p className="ma-gold-body-light">My mother sent my birth certificate and divorce decree — two documents — by FedEx to the Philippines. It cost $150 USD. That is two pieces of paper. Do not ship anything here that you can bring in your luggage or handle before you leave.</p>
          </div>

          <ul className="mlist">
            <li className="mli mli-light">Passport — valid for at least 12 months beyond planned departure.</li>
            <li className="mli mli-light">US birth certificate — certified copy; apostille if needed for visa applications.</li>
            <li className="mli mli-light">Divorce decree if applicable — apostilled copy required for SRRV, 13A, and marriage in the Philippines.</li>
            <li className="mli mli-light">Marriage certificate if applicable — apostilled.</li>
            <li className="mli mli-light">Social Security card — keep in secure storage.</li>
            <li className="mli mli-light">Medicare card if applicable.</li>
            <li className="mli mli-light">Military discharge papers (DD-214) if applicable — for VA benefits and SRRV Courtesy category.</li>
            <li className="mli mli-light">FBI background check apostilled — required for SRRV and 13A applications; takes 8 to 12 weeks from FBI, order well in advance.</li>
            <li className="mli mli-light">Medical records especially for ongoing conditions and vaccination history.</li>
            <li className="mli mli-light">Hepatitis B vaccination record — important.</li>
            <li className="mli mli-light">Full vaccination records — bring complete history.</li>
            <li className="mli mli-light">Financial records — recent tax returns, bank statements, and proof of income for visa applications.</li>
            <li className="mli mli-light">Professional licenses if applicable — apostille any you may need.</li>
          </ul>

          <div className="ma-gold" style={{background: 'rgba(201,168,76,0.04)', borderColor: 'rgba(201,168,76,0.2)'}}>
            <p className="ma-gold-label">Apostille Note</p>
            <p className="ma-gold-body-light">An apostille is issued by the Secretary of State in the state where the document was issued. FBI background checks are apostilled through the US Department of State. Allow 8 to 12 weeks for FBI apostille processing.</p>
          </div>
        </div>
      </section>

      {/* WHAT TO BRING */}
      <section className="section section-light" id="what-to-bring">
        <div className="section-inner">
          <p className="section-label">Packing List</p>
          <h2 className="section-heading">What to Bring — The Essential List</h2>

          <h3 className="msub msub-first">Electronics</h3>
          <ul className="mlist">
            <li className="mli">Laptop — bring your existing one; electronics are more expensive in the Philippines.</li>
            <li className="mli">Unlocked smartphone — bring your current phone; buy a local SIM at the airport.</li>
            <li className="mli">Voltage awareness — the Philippines uses 220V; American appliances designed for 110V will be damaged without a converter. Laptops and phone chargers are typically dual-voltage — check the label. Hair dryers and kitchen appliances often are not.</li>
            <li className="mli">Surge protector — bring one from the US; power fluctuations are common and the Philippine selection is inconsistent.</li>
            <li className="mli">VPN router — GL.iNet travel routers recommended; sets up a permanent VPN for all devices. See Steve&rsquo;s Expat Toolkit.</li>
            <li className="mli">Amazon Firestick 4K — bring one; gives access to full US streaming library through VPN. See Steve&rsquo;s Expat Toolkit.</li>
          </ul>

          <h3 className="msub">Clothing and Personal</h3>
          <ul className="mlist">
            <li className="mli">Shoes in your size — if you wear US size 11 or larger, bring multiple pairs. Philippine shoe sizes run smaller and large Western sizes are very limited. This is one of the most commonly cited packing regrets.</li>
            <li className="mli">Lightweight clothing — the Philippines is hot year-round.</li>
            <li className="mli">One set of smart casual clothing — for visa appointments and nicer restaurants.</li>
            <li className="mli">Sunscreen — available but expensive for Western SPF levels.</li>
            <li className="mli">Prescription eyeglasses — bring two pairs and your prescription.</li>
          </ul>

          <h3 className="msub">Medications</h3>
          <ul className="mlist">
            <li className="mli">3 to 6 month supply of all prescription medications — most medications are available but brand names differ; some are not available; establishing with a new doctor takes time.</li>
            <li className="mli">Over-the-counter medications you rely on — specific formulations may not be locally available.</li>
          </ul>
          <div className="ma-warning">
            <p className="ma-warning-label">⚠ Controlled Substances — Philippine Drug Laws</p>
            <p className="ma-warning-body">Do NOT bring controlled substances beyond what is legally allowed for personal use with valid prescription documentation. Philippine drug laws are extremely strict.</p>
          </div>

          <h3 className="msub">OTC Medications — What Is and Is Not Available in the Philippines</h3>
          <p className="mb">Many medications that require a prescription in the United States are available over the counter in the Philippines. However the specific branded formulations you rely on may not be stocked, and some common US OTC ingredients are controlled or absent entirely.</p>

          <p className="mb"><strong>Widely available without prescription:</strong></p>
          <ul className="mlist">
            <li className="mli">Paracetamol — sold as Panadol, Biogesic, and generics. The standard Philippine pain reliever and fever reducer. Equivalent to Tylenol.</li>
            <li className="mli">Ibuprofen — available as Advil, Motrin, and generics.</li>
            <li className="mli">Mefenamic acid — sold as Ponstan; extremely common in the Philippines for pain relief, less familiar to Westerners but effective.</li>
            <li className="mli">Antihistamines — cetirizine (Zyrtec equivalent) and loratadine (Claritin equivalent) widely available.</li>
            <li className="mli">Antacids — omeprazole (Omepron, generics), famotidine, and antacid tablets readily available.</li>
            <li className="mli">Loperamide — the Imodium equivalent for diarrhea; important for new arrivals adjusting to local food.</li>
            <li className="mli">Oral rehydration salts — cheap and widely available at every pharmacy. Essential for dengue recovery and stomach illness.</li>
          </ul>

          <p className="mb"><strong>Not available or significantly different:</strong></p>
          <ul className="mlist">
            <li className="mli">US combination cold medicines — no exact NyQuil, DayQuil, Robitussin, or Mucinex equivalents. Philippines pharmacies have their own local formulations.</li>
            <li className="mli">Pseudoephedrine — strictly controlled in the Philippines because it is a precursor for methamphetamine (shabu). Sudafed and other pseudoephedrine decongestants are not available OTC. Bring an adequate supply if you rely on pseudoephedrine-based decongestants.</li>
            <li className="mli">Specific US brand supplement formulations — particular vitamin blends, protein powders, and specialty supplements may not be available or will be significantly more expensive than at US prices.</li>
          </ul>

          <div className="ma-warning">
            <p className="ma-warning-label">⚠ Pseudoephedrine Is Controlled in the Philippines</p>
            <p className="ma-warning-body">Pseudoephedrine — the active ingredient in Sudafed and many US decongestants — is tightly controlled in the Philippines due to its use in manufacturing shabu (methamphetamine). It is not available over the counter. If you depend on pseudoephedrine for chronic sinus issues or allergies, bring a sufficient supply from the US with supporting documentation from your doctor. Ask your doctor about alternatives available locally before you leave.</p>
          </div>

          <h3 className="msub" id="cpap">CPAP Machines and Medical Equipment</h3>
          <p className="mb">If you use a CPAP machine you will be relieved to know that modern CPAP machines including ResMed AirSense and Philips DreamStation models are dual voltage rated 100-240V 50-60Hz and work in the Philippines without a voltage converter. You only need a plug adapter for Philippine outlets. Check the label on your CPAP power supply to confirm — it will say Input: 100-240V if it is dual voltage.</p>
          <p className="mb">However the Philippines experiences periodic brownouts — power outages that can last minutes to hours. For CPAP users a brownout mid-sleep is not just an inconvenience — it interrupts critical therapy. Two solutions: First invest in a quality UPS — Uninterruptible Power Supply — before leaving the US. A UPS provides battery backup that keeps your CPAP running through short brownouts and protects against voltage spikes. Look for a pure sine wave UPS which is safer for sensitive medical equipment. Second consider bringing a dedicated CPAP battery backup like the EASYLONGER ES720 which provides multiple nights of therapy independent of the power grid. This is also useful for travel and island hopping where power reliability varies.</p>
          <p className="mb">Also bring an AVR — Automatic Voltage Regulator — for general electronics protection. Philippine power fluctuations can damage electronics over time even without a full outage. An AVR smooths out voltage irregularities before they reach your devices.</p>
          <p className="mb"><strong>Supplies and accessories:</strong> Bring at least a 6-month supply of CPAP masks, filters, tubing, and distilled water tablets. CPAP supplies are available in the Philippines through specialty suppliers but selection is limited and prices are higher than US suppliers. Stock up before you leave and order from US suppliers periodically.</p>
          <p className="mb"><strong>Prescriptions:</strong> Your CPAP prescription from your US doctor is valid for ordering supplies but you will want to establish with a Philippine pulmonologist or sleep specialist for ongoing monitoring. Chong Hua Hospital in Cebu has pulmonology specialists experienced with foreign patients.</p>

          <h3 className="msub">Specialty Medications — GLP-1 Drugs Including Mounjaro and Ozempic</h3>
          <p className="mb">GLP-1 receptor agonist medications including tirzepatide (Mounjaro) and semaglutide (Ozempic and Wegovy) have become extremely common in the United States and are now among the most asked-about medications by expats moving to the Philippines. The honest answer: availability in the Philippines is limited, inconsistent, and unreliable compared to the US.</p>
          <p className="mb">Philippine pharmacies do not operate on a US-style refill system. You cannot simply present a prescription and receive a 90-day supply. Each dispensing event requires a new Philippine prescription from a licensed local doctor. More critically, Mounjaro and Ozempic availability at Philippine pharmacies — even major chains like Mercury Drug, Rose Pharmacy, and Watsons — is inconsistent. Stock arrives irregularly and sells out quickly. Do not plan to source these medications locally as a reliable ongoing supply.</p>
          <p className="mb"><strong>What to do:</strong> Bring the maximum supply you can legally transport. These medications require refrigeration — 2 to 8 degrees Celsius — for storage. For travel, they can be at room temperature below 30 degrees for up to 21 days for Mounjaro and up to 28 days for Ozempic, but confirm current guidelines with your doctor or pharmacist before travel. A quality travel cooler or medical-grade insulin travel case is strongly recommended for the flight.</p>
          <p className="mb">Once in the Philippines, establish with a Philippine endocrinologist early. Chong Hua Hospital in Cebu has endocrinology specialists. They can assess your situation, provide Philippine prescriptions if needed, and may have access to sourcing channels not available at retail pharmacies. Private specialist consultation at Chong Hua runs approximately 800 to 2,000 pesos.</p>
          <p className="mb"><strong>Refrigeration backup:</strong> As covered in the CPAP section above, Philippine power fluctuations and brownouts can affect refrigeration. A quality UPS for your refrigerator is a worthwhile investment to protect temperature-sensitive medications. Monitor your refrigerator temperature during brownouts.</p>

          <h3 className="msub">Food and Specialty Items</h3>
          <ul className="mlist">
            <li className="mli">Your favorite spices and seasonings that may not be locally available.</li>
            <li className="mli">Protein powder or supplements — available at Healthy Options but expensive.</li>
            <li className="mli">Peanut butter, specific cereals, or pantry staples — available at S&amp;R and Landers at import premium prices.</li>
          </ul>
        </div>
      </section>

      {/* WHAT NOT TO BRING */}
      <section className="section section-dark" id="what-not-to-bring">
        <div className="section-inner">
          <p className="section-label">Leave Behind</p>
          <h2 className="section-heading section-heading-light">What NOT to Bring</h2>

          <h3 className="msub msub-first msub-light">Furniture and Appliances</h3>
          <p className="mb mb-light">Do not ship furniture or large appliances. International shipping is expensive, slow, and subject to unpredictable customs. Philippine furniture is affordable. Steve bought a fabric couch with two recliners from S&amp;R for 20,000 pesos and a LazyBoy from the Home Store at SM Seaside for 10,000 pesos. When he upgraded furniture his landlord picked up what he replaced — a common arrangement in the Philippines.</p>

          <h3 className="msub msub-light">Large Electronics</h3>
          <p className="mb mb-light">Buy locally — correctly voltaged for Philippine electricity.</p>

          <h3 className="msub msub-light">Excessive Clothing</h3>
          <p className="mb mb-light">Philippine laundry services are excellent and affordable — 700 to 1,200 pesos for pickup and delivery. Pack for the first month and supplement locally.</p>

          <div className="ma-gold">
            <p className="ma-gold-label">Steve&rsquo;s Shipping Reality Check</p>
            <p className="ma-gold-body-light">My mother sent my birth certificate and divorce decree by FedEx to the Philippines. Cost: $150 USD. Two pieces of paper. Do not ship anything here that you can bring in luggage or buy locally.</p>
          </div>
        </div>
      </section>

      {/* FIRST WEEK SETUP */}
      <section className="section section-light" id="first-week">
        <div className="section-inner">
          <p className="section-label">Setup Checklist</p>
          <h2 className="section-heading">First Week Setup Checklist</h2>
          <div className="checklist-card">
            <ol className="checklist-items">
              <li className="checklist-item">Buy local SIM card at airport — Globe and Smart have counters at Mactan-Cebu International Airport and NAIA. Data plans are affordable; unlimited monthly plans approximately 799 pesos.</li>
              <li className="checklist-item">Download Grab — primary transport app; set up at airport if possible.</li>
              <li className="checklist-item">Set up Maya or GCash digital wallets — Maya is more foreigner-friendly for setting up without a Philippine bank account; load with cash at any 7-Eleven.</li>
              <li className="checklist-item">Confirm eTravel registration — official portal is ph.etravel.gov.ph, completely free. Do not use paid third-party sites.</li>
              <li className="checklist-item">Locate nearest Bureau of Immigration office — for Mactan Island residents, the Gaisano Mall office in Lapu-Lapu City.</li>
              <li className="checklist-item">Open Philippine bank account — BDO, BPI, and UnionBank are most foreigner-friendly; call ahead to confirm requirements.</li>
              <li className="checklist-item">Set up Wise or Remitly for receiving money from US — Wise generally offers the best exchange rates.</li>
              <li className="checklist-item">Save nearest private hospital number — Chong Hua Mandaue for Mactan Island residents. Do this before you need it.</li>
              <li className="checklist-item">Join local expat Facebook groups — Expats in Cebu and Foreigners in the Philippines.</li>
              <li className="checklist-item">Get Hepatitis B vaccination if not already vaccinated — walk into any Chong Hua clinic; three doses over 6 months; single most important preventive health action for new arrivals.</li>
              <li className="checklist-item">Get your Barangay Clearance — go to the barangay hall serving your home address within your first two weeks. Bring your passport and lease contract. Required for bank account opening and various government transactions. Cost is 20 to 100 pesos and it is usually issued the same day.</li>
              <li className="checklist-item">Find your nearest water refilling station — tap water in the Philippines is not safe to drink directly. Water refilling stations sell purified water in 5-gallon jugs for 25 to 35 pesos per jug. Most condos have a water dispenser; ask your landlord or building management for the supplier number on day one. Do not spend 100 to 150 pesos per bottle at convenience stores when the refilling station jug costs 30 pesos.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SHOPPING GUIDE */}
      <section className="section section-dark" id="shopping-guide">
        <div className="section-inner">
          <p className="section-label">Shopping Guide</p>
          <h2 className="section-heading section-heading-light">Shopping Guide — Where to Go for Everything in Cebu and Mactan</h2>
          <p className="mb mb-light">One of the first things new arrivals ask is where to shop. The Philippines has an excellent range of options from cheap wet markets to international brands. Here is where to go for everything you need.</p>

          <h3 className="msub msub-light">Groceries</h3>

          <p className="mb mb-light"><strong style={{color:'#C9A84C'}}>SM Supermarket and Robinsons Supermarket:</strong> The two most ubiquitous supermarket chains in the Philippines. Found in virtually every major mall. Good selection of local and some imported products at reasonable prices. SM Seaside City, SM City, and Robinsons Galleria are the main Cebu options.</p>

          <div className="ma-gold">
            <p className="ma-gold-label">Steve&rsquo;s Grocery Choice</p>
            <p className="ma-gold-body-light">S&amp;R Membership Shopping — The Philippines equivalent of Costco. Membership warehouse pricing on bulk items and the best selection of Western imported products in Cebu — peanut butter, cereals, imported meats, snacks, wine, and more. Free delivery with a 5,000 peso minimum order. Steve shops here for the majority of his groceries. Membership required. Locations: Mandaue City and SM Seaside area.</p>
          </div>

          <p className="mb mb-light"><strong style={{color:'#C9A84C'}}>Landers Superstore:</strong> Strong competitor to S&amp;R with excellent imported product selection and no membership required. Good for Western pantry staples and imported goods. Located in Cebu Business Park and other major areas.</p>

          <p className="mb mb-light"><strong style={{color:'#C9A84C'}}>Wet Markets — Taboan and Carbon:</strong> For the cheapest fresh produce, fish, pork, and chicken in Cebu, nothing beats the wet markets. Taboan Market in Cebu City is famous for dried fish and local preserved goods — worth visiting once for the experience. Carbon Market is one of the largest in the Visayas for fresh produce. Prices dramatically lower than supermarkets. Irish handles the wet market shopping — a Filipina partner&rsquo;s knowledge of local markets is invaluable for food budgeting.</p>

          <p className="mb mb-light"><strong style={{color:'#C9A84C'}}>Delivery Options:</strong> Most supermarkets and S&amp;R offer delivery. Grab Food, Foodpanda, and LalaFood deliver groceries and prepared food. In Mactan, S&amp;R delivery is the most popular among expats for bulk grocery runs.</p>

          <h3 className="msub msub-light">Home Essentials and Hardware</h3>

          <p className="mb mb-light"><strong style={{color:'#C9A84C'}}>ACE Hardware:</strong> The largest and best-stocked hardware chain in the Philippines. Found in major malls. Good for tools, home maintenance items, electrical supplies, and basic furniture accessories.</p>

          <p className="mb mb-light"><strong style={{color:'#C9A84C'}}>Wilcon Depot:</strong> Philippines equivalent of Home Depot. Larger format than ACE, better for tiles, plumbing, electrical, and renovation materials. Located in Mandaue City and Cebu City.</p>

          <p className="mb mb-light"><strong style={{color:'#C9A84C'}}>SM Home and Appliances:</strong> SM Department Store has a home section with furniture, appliances, and housewares. For quality furniture The Home Store at SM Seaside is the best option — Steve bought his LazyBoy there for 10,000 pesos. For appliances Abenson and Anson&rsquo;s are the most reliable chains.</p>

          <h3 className="msub msub-light">Clothing</h3>

          <p className="mb mb-light"><strong style={{color:'#C9A84C'}}>Ayala Center Cebu:</strong> The premium mall for branded clothing in Cebu. Uniqlo is here and offers excellent quality at very reasonable Philippines prices — comparable to or cheaper than US Uniqlo. Zara, H&amp;M, and other international brands also present.</p>

          <p className="mb mb-light"><strong style={{color:'#C9A84C'}}>SM Malls:</strong> SM Department Store has the widest selection of affordable local and international clothing brands. SM Seaside City is the largest SM mall in the Visayas.</p>

          <p className="mb mb-light"><strong style={{color:'#C9A84C'}}>Ukay-Ukay:</strong> Filipino term for secondhand clothing shops. Quality varies enormously but you can find excellent Western branded items — Levi&rsquo;s, Nike, Under Armour, Columbia — at tiny fractions of retail price. Worth exploring once you know the good shops in your area. Ask local expats for recommendations on the best ukay-ukay stores near you.</p>

          <div className="ma-warning">
            <p className="ma-warning-label">⚠ Important — Western Sizes Are Extremely Limited</p>
            <p className="ma-warning-body">Western sizing above XL is extremely limited in Philippine retail stores. If you are above XL or wear shoe sizes US 11 or larger bring sufficient clothing and shoes from home. This is one of the most consistently cited packing regrets among expats — do not underestimate it.</p>
          </div>
        </div>
      </section>

      {/* ARRIVING AT THE AIRPORT */}
      <section className="section section-dark" id="airport">
        <div className="section-inner">
          <p className="section-label">Airport Arrival</p>
          <h2 className="section-heading section-heading-light">Arriving at the Airport</h2>

          <h3 className="msub msub-first msub-light">Mactan-Cebu International Airport</h3>
          <p className="mb mb-light">Modern, manageable airport. International arrivals processed in 15 to 30 minutes. Baggage 20 to 40 minutes. Globe and Smart SIM counters in the arrival hall. Use the official taxi queue or a pre-booked Grab only — ignore touts.</p>

          <h3 className="msub msub-light">NAIA Manila — Step by Step</h3>
          <p className="mb mb-light">NAIA is older, busier, and more chaotic than most Western airports. Terminal 1 handles most international flights. Terminal 3 for Cebu Pacific and budget carriers. Terminals are separate buildings — check your ticket before arriving.</p>
          <ol className="mnlist">
            <li className="mni mni-light">eTravel QR code — have registration ready; scanned at arrival hall entrance.</li>
            <li className="mni mni-light">Immigration — follow signs; have passport open; state purpose as tourism; have accommodation address ready.</li>
            <li className="mni mni-light">Baggage claim — allow 45 to 60 minutes; NAIA baggage handling is slow.</li>
            <li className="mni mni-light">Customs — declare items over duty-free allowance; most travelers pass through the green lane.</li>
            <li className="mni mni-light">Exit and transport — use only the official airport taxi queue or a pre-booked Grab; ignore all touts offering transport.</li>
          </ol>

          <h3 className="msub msub-light">Connecting Manila to Cebu</h3>
          <p className="mb mb-light">You must exit the international terminal, take a shuttle or taxi to the domestic terminal, and check in again. Allow a minimum of 3 to 4 hours. Terminal 2 for PAL domestic. Terminal 3 for Cebu Pacific.</p>
        </div>
      </section>

      {/* PETS */}
      <section className="section section-light" id="pets">
        <div className="section-inner">
          <p className="section-label">Bringing Your Pet</p>
          <h2 className="section-heading">Bringing Your Pet to the Philippines</h2>
          <p className="mb">Bringing dogs or cats to the Philippines requires planning starting 3 to 4 months before travel.</p>

          <h3 className="msub msub-first">The SPSIC</h3>
          <p className="mb">The official permit is called the Sanitary and Phytosanitary Import Clearance (SPSIC), issued by the Bureau of Animal Industry (BAI). Apply online through intercommerce.com.ph. SPSIC is valid for 60 days. Maximum 3 animals per application. Pet must be at least 120 days old at time of application. Payment is made upon arrival at the Veterinary Quarantine office at the airport.</p>

          <h3 className="msub">SPSIC Requirements</h3>
          <ul className="mlist">
            <li className="mli">Vaccination and antiparasitic records for internal and external parasites — original or certified true copy.</li>
            <li className="mli">Proof of ISO-compliant microchip.</li>
            <li className="mli">Photograph of pet.</li>
            <li className="mli">Pet passport if available.</li>
            <li className="mli">USDA-accredited veterinarian health certificate dated within 30 days of arrival, endorsed by USDA-APHIS.</li>
          </ul>

          <h3 className="msub">Required Vaccinations</h3>
          <p className="mb"><strong>Dogs:</strong> Rabies, distemper, leptospirosis, parvovirus, adenovirus type 2.</p>
          <p className="mb"><strong>Cats:</strong> Rabies, herpes, calicivirus, panleukopenia, feline leukemia.</p>

          <div className="ma-warning">
            <p className="ma-warning-label">⚠ Brachycephalic Breed Restriction</p>
            <p className="ma-warning-body">Not all airlines accept live animals. Brachycephalic breeds — pugs, French bulldogs, English bulldogs, boxers — are commonly restricted by airlines due to breathing risk. Verify breed restrictions before booking.</p>
          </div>

          <h3 className="msub">Health in the Philippines</h3>
          <ul className="mlist">
            <li className="mli">Heartworm prevention is critical — mosquitoes are year-round.</li>
            <li className="mli">Tick prevention is equally important.</li>
            <li className="mli">Heat is significant — monitor your pet carefully and ensure shade and water are always available.</li>
            <li className="mli">Find a local vet before arrival through expat Facebook groups.</li>
          </ul>
        </div>
      </section>

      {/* BALIKBAYAN PRIVILEGE */}
      <section className="section section-light" id="balikbayan">
        <div className="section-inner">
          <p className="section-label">Balikbayan Privilege</p>
          <h2 className="section-heading">The Balikbayan Privilege — Duty-Free Benefits for You and Your Filipino Partner</h2>

          <p className="mb">If you are moving to the Philippines with or to be with a Filipino partner, the Balikbayan Program may provide meaningful duty-free benefits when you first arrive — and on every subsequent return trip. Understanding how it works prevents you from leaving money on the table at customs.</p>

          <h3 className="msub msub-first">What Is the Balikbayan Privilege?</h3>
          <p className="mb">The Balikbayan Program is established under Republic Act 6768, as amended by Republic Act 9174. "Balikbayan" literally means a Filipino who returns to the Philippines after residing abroad. The law grants qualifying balikbayans — and their accompanying foreign spouses and minor children — duty-free importation of personal effects and goods up to a defined value threshold.</p>

          <div className="ma-gold">
            <p className="ma-gold-label">2026 Duty-Free Threshold</p>
            <p className="ma-gold-body-light">Duty-free goods worth up to PHP 150,000 (approximately $2,500 USD at current exchange rates) per qualifying balikbayan per arrival. The foreign spouse and minor children traveling with the balikbayan are included in this privilege as a family unit. Threshold is set by the Bangko Sentral ng Pilipinas and may be updated periodically.</p>
          </div>

          <h3 className="msub">Who Qualifies as a Balikbayan?</h3>
          <ul className="mlist">
            <li className="mli">Filipino citizens who have been continuously residing abroad for at least one year and are returning to the Philippines.</li>
            <li className="mli">Former natural-born Filipino citizens who have been naturalized as foreign citizens (covered under RA 9225 dual citizenship framework).</li>
            <li className="mli">Overseas Filipino Workers (OFWs) returning from abroad.</li>
            <li className="mli">Filipino crew members of international vessels.</li>
          </ul>

          <h3 className="msub">The Foreign Spouse and Children Benefit</h3>
          <p className="mb">The foreign spouse and minor children of a qualifying balikbayan who travel with that balikbayan on the same trip also receive the duty-free privilege as part of the family unit. This means if your Filipino partner qualifies as a balikbayan and you are arriving together, you benefit from the duty-free allowance when bringing in goods.</p>

          <div className="ma-warning">
            <p className="ma-warning-label">⚠ Important Limitation — You Must Travel Together</p>
            <p className="ma-warning-body">The duty-free privilege for foreign spouses and children applies only when traveling together with the qualifying balikbayan on the same arrival. A foreign spouse arriving separately — without the Filipino balikbayan — does not receive the balikbayan duty-free benefit. Your Filipino partner must be present and must independently qualify as a balikbayan (at least one year continuous residence abroad).</p>
          </div>

          <h3 className="msub">The Balikbayan Box</h3>
          <p className="mb">Separately from arriving in person, qualified balikbayans can ship packages to the Philippines duty-free — known as "balikbayan boxes." The boxes are entitled to duty-free treatment once per calendar year, up to the applicable threshold value, administered by the Bureau of Customs. This is how OFWs routinely ship goods to family in the Philippines without paying customs duties.</p>
          <ul className="mlist">
            <li className="mli">Must be addressed to a qualified balikbayan or their immediate family in the Philippines.</li>
            <li className="mli">Subject to Bureau of Customs inspection and valuation.</li>
            <li className="mli">Commercial quantities or goods clearly intended for resale are excluded from the duty-free privilege.</li>
            <li className="mli">Prohibited items still apply regardless of balikbayan status — verify current Bureau of Customs restrictions.</li>
          </ul>

          <h3 className="msub">Duty-Free Shopping in the Philippines</h3>
          <p className="mb">Qualifying balikbayans can also shop at designated duty-free facilities within the Philippines. The most prominent is DFS (Duty Free Philippines) located at NAIA Terminal 3 and other locations. Eligible purchases from duty-free shops count against your balikbayan allowance. Shops are open to arriving international passengers and qualified balikbayans within a specified period of arrival.</p>
        </div>
      </section>

      {/* STEVE'S NOTE */}
      <section className="sn-section">
        <div className="sn-inner">
          <div className="sn-header">
            <div className="sn-monogram">S</div>
            <div>
              <p className="sn-name">Steve&rsquo;s Note</p>
              <p className="sn-tag">Lessons from the Move · Punta Engaño, Mactan Island</p>
            </div>
          </div>
          <div className="sn-rule" />
          <div className="sn-body">
            <p>When I moved to the Philippines I overthought what to bring and underthought what to do when I arrived. The things I stressed about before leaving — whether I would find familiar food, whether the internet would be fast enough — turned out to be non-issues. The things I did not think about enough — getting my documents prepared in advance, understanding the visa extension timeline, knowing where the nearest good hospital was — those required scrambling to sort out after arrival.</p>
            <p>Get your documents done before you leave. Bring your medications. Bring a VPN router and Firestick. And do not ship anything. Everything else you can figure out when you get here. The Philippines rewards people who show up with an open attitude and figure things out as they go.</p>
          </div>
          <p className="sn-verified">Last Updated: June 2026 · Punta Engaño, Mactan Island, Cebu</p>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="legal-section">
        <div className="legal-inner">
          <div>
            <div className="legal-icon">!</div>
            <h2 style={{fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, color: '#0B1F3A', marginBottom: '6px'}}>Verify before you move.</h2>
          </div>
          <p className="legal-body">
            <strong>Immigration requirements, airline policies, and government processes change regularly.</strong> Verify all requirements directly with relevant authorities before travel. Pet import requirements should be verified with the Philippine Bureau of Animal Industry at <strong>bai.gov.ph</strong> before departure. This page does not constitute legal or immigration advice.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

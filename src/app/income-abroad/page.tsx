import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Living on Income in the Philippines — How Expats Fund Their Life 2026",
  description:
    "How expats earn and manage income in the Philippines — Social Security, pensions, remote work, Digital Nomad Visa, online business, and receiving money from the US efficiently.",
  alternates: { canonical: "https://expatcompassph.com/income-abroad" },
};

export default function IncomeAbroadPage() {
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

        .ib { font-size: 0.93rem; font-weight: 300; line-height: 1.85; color: #4A5868; margin-bottom: 16px; max-width: 760px; }
        .ib-light { color: #F8F6F1; }
        .isub { font-family: 'Playfair Display', serif; font-size: clamp(1.05rem,1.8vw,1.28rem); font-weight: 700; color: #0B1F3A; margin: 36px 0 12px; padding-top: 32px; border-top: 1px solid rgba(11,31,58,0.08); max-width: 760px; }
        .isub-first { border-top: none; padding-top: 0; margin-top: 0; }
        .isub-light { color: #F8F6F1; border-top-color: rgba(248,246,241,0.1); }

        .ilist { list-style: none; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 9px; max-width: 760px; }
        .ili { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #4A5868; padding-left: 22px; position: relative; }
        .ili::before { content: '—'; position: absolute; left: 0; color: #C9A84C; font-weight: 600; }
        .ili-light { color: #F8F6F1; }

        .ia-gold { background: rgba(201,168,76,0.06); border: 1px solid rgba(201,168,76,0.3); border-left: 4px solid #C9A84C; padding: 26px 28px; margin: 28px 0; max-width: 760px; }
        .ia-gold-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
        .ia-gold-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #4A5868; }
        .ia-gold-body-light { color: #F8F6F1; }

        .ia-warning { background: rgba(235,87,87,0.06); border: 1px solid rgba(235,87,87,0.22); border-left: 4px solid #EB5757; padding: 26px 28px; margin: 28px 0; max-width: 760px; }
        .ia-warning-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #EB5757; margin-bottom: 10px; }
        .ia-warning-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #F8F6F1; }

        /* ── COMPARISON CARDS ── */
        .transfer-grid { display: flex; flex-direction: column; gap: 0; max-width: 800px; margin: 28px 0; }
        .transfer-card { border: 1px solid #E8E4DC; border-bottom: none; padding: 26px 30px; background: #fff; }
        .transfer-card:last-child { border-bottom: 1px solid #E8E4DC; }
        .transfer-header { display: flex; align-items: center; gap: 14px; margin-bottom: 12px; }
        .transfer-name { font-family: 'Playfair Display', serif; font-size: 1.02rem; font-weight: 700; color: #0B1F3A; }
        .transfer-body { font-size: 0.88rem; font-weight: 300; line-height: 1.78; color: #4A5868; }

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

        /* ── FEIE SECTION ── */
        .feie-clarify { background: rgba(201,168,76,0.08); border: 2px solid rgba(201,168,76,0.4); border-left: 6px solid #C9A84C; padding: 32px 36px; margin: 32px 0; max-width: 800px; }
        .feie-clarify-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 14px; }
        .feie-clarify-body { font-size: 0.95rem; font-weight: 300; line-height: 1.9; color: #1A1A1A; }
        .feie-clarify-body + .feie-clarify-body { margin-top: 14px; }
        .feie-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; max-width: 800px; margin: 24px 0 32px; }
        .feie-col { border: 1px solid #E8E4DC; padding: 24px 28px; background: #fff; }
        .feie-col-head { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 2px solid; }
        .feie-col-yes-head { color: #27AE60; border-bottom-color: #27AE60; }
        .feie-col-no-head { color: #EB5757; border-bottom-color: #EB5757; }
        .feie-item { font-size: 0.87rem; font-weight: 300; line-height: 1.65; color: #4A5868; padding: 8px 0 8px 22px; border-bottom: 1px solid #F0EDE6; position: relative; }
        .feie-item:last-child { border-bottom: none; }
        .feie-item-yes::before { content: '✓'; position: absolute; left: 0; color: #27AE60; font-weight: 700; }
        .feie-item-no::before { content: '✕'; position: absolute; left: 0; color: #EB5757; font-weight: 700; }
        .test-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; max-width: 800px; margin: 24px 0 32px; }
        .test-card { background: #0B1F3A; padding: 28px 26px; }
        .test-card-tag { font-size: 0.6rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
        .test-card-title { font-family: 'Playfair Display', serif; font-size: 1.08rem; font-weight: 700; color: #F8F6F1; margin-bottom: 14px; line-height: 1.25; }
        .test-card-body { font-size: 0.87rem; font-weight: 300; line-height: 1.8; color: #F8F6F1; }
        .test-card-body strong { font-weight: 600; color: #C9A84C; }
        .feie-steve { background: #0D1E30; border-left: 4px solid #C9A84C; padding: 28px 32px; margin: 32px 0; max-width: 800px; }
        .feie-steve-tag { font-size: 0.6rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #C9A84C; margin-bottom: 12px; }
        .feie-steve-body { font-size: 0.93rem; font-weight: 300; line-height: 1.88; color: #F8F6F1; }
        .feie-disclaimer { font-size: 0.8rem; font-weight: 300; line-height: 1.7; color: #8A9AB0; max-width: 760px; margin-top: 40px; padding-top: 28px; border-top: 1px solid rgba(11,31,58,0.1); font-style: italic; }

        @media (max-width: 900px) {
          .page-hero { padding: 56px 24px 72px; }
          .section { padding: 64px 24px; }
          .sn-section { padding: 56px 24px; }
          .legal-section { padding: 48px 24px; }
          .legal-inner { grid-template-columns: 1fr; gap: 32px; }
          .feie-cols, .test-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .page-title { font-size: 2rem; }
        }
      `}</style>

      <div className="page-header">
        <Nav active="/income-abroad" />
        <div className="page-hero">
          <p className="page-eyebrow">Income and Finances</p>
          <h1 className="page-title">Living on Income in the Philippines</h1>
          <p className="page-sub">How expats fund their life in the Philippines — from Social Security and pensions to remote work, online business, and the new Digital Nomad Visa.</p>
        </div>
      </div>

      {/* FIXED INCOME */}
      <section className="section section-light" id="fixed-income">
        <div className="section-inner">
          <p className="section-label">Retirement Income</p>
          <h2 className="section-heading">Most Expats Live on Fixed Income</h2>
          <p className="ib">The majority of expats in the Philippines — particularly retirees — live on some combination of Social Security, military pension, 401k distributions, and investment income. The dramatically lower cost of living makes income that would be tight in the US genuinely comfortable here.</p>
          <p className="ib">A Social Security benefit of $1,500 to $2,000 per month that barely covers rent in a US city funds a comfortable middle-class lifestyle in Cebu. See the <a href="/cost-of-living" style={{color: '#C9A84C', fontWeight: 500}}>Cost of Living page</a> for specific budget breakdowns and the <a href="/retirement-benefits" style={{color: '#C9A84C', fontWeight: 500}}>US Benefits Abroad page</a> for Social Security rules for Philippines-based recipients.</p>
        </div>
      </section>

      {/* REMOTE WORK */}
      <section className="section section-dark" id="remote-work">
        <div className="section-inner">
          <p className="section-label">Remote Work</p>
          <h2 className="section-heading section-heading-light">Remote Work</h2>
          <p className="ib ib-light">The fastest growing segment of the expat community in the Philippines is remote workers employed by US or European companies working from the Philippines. Fast fiber internet widely available in major cities, excellent English, and dramatically lower cost of living make the Philippines well suited for remote work.</p>
          <p className="ib ib-light">The Digital Nomad Visa launched in 2025 under Executive Order 86 provides a legal framework — see the <a href="/visas" style={{color: '#C9A84C', fontWeight: 500}}>Visas page</a> for full requirements including the $24,000 per year minimum income requirement. The Digital Nomad Visa specifically prohibits working for Philippine employers or clients.</p>
        </div>
      </section>

      {/* FEIE */}
      <section className="section section-light" id="feie">
        <div className="section-inner">
          <p className="section-label">FEIE Tax Exclusion</p>
          <h2 className="section-heading">The Foreign Earned Income Exclusion — The Most Misunderstood Tax Benefit for American Expats</h2>

          <div className="feie-clarify">
            <p className="feie-clarify-label">The Name Is Confusing — Let&rsquo;s Clear It Up Immediately</p>
            <p className="feie-clarify-body"><strong>FOREIGN EARNED INCOME does NOT mean income earned from a foreign employer.</strong> The word <em>foreign</em> describes WHERE YOU ARE — not who pays you.</p>
            <p className="feie-clarify-body">If you work remotely for an American company while living in the Philippines your income is Foreign Earned Income and you may qualify for this exclusion. If you freelance for American clients while living in the Philippines your income is Foreign Earned Income. If you run an online business from your condo in Cebu your income is Foreign Earned Income.</p>
            <p className="feie-clarify-body">The IRS uses <em>foreign</em> to mean earned outside the United States. Your employer&rsquo;s nationality is irrelevant.</p>
          </div>

          <h3 className="isub isub-first">What the FEIE Is</h3>
          <p className="ib">The Foreign Earned Income Exclusion allows qualifying US citizens living abroad to exclude a significant amount of their earned income from US federal income tax entirely. For tax year 2026 the exclusion limit is <strong style={{color:'#0B1F3A'}}>$132,900 per person</strong> — adjusted annually for inflation from $126,500 in 2025.</p>
          <p className="ib">If you qualify and earn $132,900 or less in foreign earned income you pay zero US federal income tax on that income. If you earn more than $132,900 only the amount above the exclusion is taxable at your normal federal rate.</p>
          <p className="ib">For a married couple where both spouses qualify and both work abroad each can claim their own exclusion — up to <strong style={{color:'#0B1F3A'}}>$265,800 combined</strong> excluded from US federal income tax in 2026.</p>

          <h3 className="isub">What Counts as Foreign Earned Income</h3>
          <p className="ib">This distinction matters enormously — especially for retirees. Social Security, pensions, and investment income are NOT foreign earned income and cannot be excluded under FEIE regardless of where you live. FEIE is primarily a benefit for remote workers, freelancers, and self-employed expats.</p>

          <div className="feie-cols">
            <div className="feie-col">
              <p className="feie-col-head feie-col-yes-head">Qualifies for FEIE</p>
              <p className="feie-item feie-item-yes">Salary or wages from your US employer paid while you live in the Philippines</p>
              <p className="feie-item feie-item-yes">Remote work income from any employer while living abroad</p>
              <p className="feie-item feie-item-yes">Freelance income from US or international clients earned while living abroad</p>
              <p className="feie-item feie-item-yes">Self-employment income from your online business while living abroad</p>
              <p className="feie-item feie-item-yes">Consulting fees earned while living abroad</p>
            </div>
            <div className="feie-col">
              <p className="feie-col-head feie-col-no-head">Does Not Qualify for FEIE</p>
              <p className="feie-item feie-item-no">Social Security retirement payments</p>
              <p className="feie-item feie-item-no">Pension income</p>
              <p className="feie-item feie-item-no">Investment dividends and capital gains</p>
              <p className="feie-item feie-item-no">Rental income</p>
              <p className="feie-item feie-item-no">Interest income</p>
              <p className="feie-item feie-item-no">Passive income of any kind</p>
              <p className="feie-item feie-item-no">Income from US government employment abroad</p>
            </div>
          </div>

          <h3 className="isub">The Two Qualifying Tests</h3>
          <p className="ib">You must meet one of two tests to qualify for the FEIE. Most expats use the Physical Presence Test because it is more mechanical and easier to document.</p>

          <div className="test-grid">
            <div className="test-card">
              <p className="test-card-tag">Most Commonly Used</p>
              <p className="test-card-title">Physical Presence Test</p>
              <p className="test-card-body">You must be physically present in a foreign country or countries for at least <strong>330 full days</strong> during any consecutive 12-month period. Travel days to or from the US do not count. Each qualifying day must span a full 24-hour period beginning at midnight. The 12-month period does not have to be a calendar year — it can be any consecutive 12 months. If you live in the Philippines full time and return to the US for less than 35 days per year you almost certainly meet this test.</p>
            </div>
            <div className="test-card">
              <p className="test-card-tag">Requires More Documentation</p>
              <p className="test-card-title">Bona Fide Residence Test</p>
              <p className="test-card-body">You must be a bona fide resident of a foreign country for an uninterrupted period that includes an entire calendar year — January 1 through December 31. You must demonstrate substantial ties to the country such as a permanent home, local bank accounts, lease agreements, and long-term intent to remain abroad. More subjective than the physical presence test and requires stronger documentation. If you have a long-term lease in the Philippines, an ACR I-Card, Philippine bank accounts, and genuine community ties you likely meet this test after your first full calendar year abroad.</p>
            </div>
          </div>

          <div className="feie-steve">
            <p className="feie-steve-tag">Steve&rsquo;s Situation — A Real Example</p>
            <p className="feie-steve-body">I work remotely for a US company. My employer is American. My salary is paid in US dollars into my US bank account. Under the FEIE my entire salary — paid by an American company into an American bank — may qualify for exclusion from US federal income tax because I earn it while living in the Philippines. The word <em>foreign</em> describes me not my employer. This is the single most important tax concept for American remote workers living abroad and the one most people get wrong.</p>
          </div>

          <div className="ia-gold">
            <p className="ia-gold-label">⚠ The Self-Employment Tax Trap — Critical for Freelancers</p>
            <p className="ia-gold-body">The FEIE reduces your US income tax but it does NOT eliminate self-employment tax. Self-employment tax — which covers Social Security and Medicare — is calculated on your net self-employment income regardless of the FEIE. If you are self-employed or freelancing from the Philippines you still owe approximately 15.3 percent self-employment tax on your net earnings even if your income falls entirely within the FEIE exclusion. This surprises many expats. Factor it into your tax planning.</p>
          </div>

          <h3 className="isub">The Housing Exclusion — An Additional Benefit</h3>
          <p className="ib">In addition to the FEIE qualifying taxpayers may also claim the Foreign Housing Exclusion for housing expenses that exceed a base amount. The base amount is 16 percent of the FEIE exclusion — approximately $21,264 in 2026. Housing expenses above this base amount up to an IRS-set limit may be excluded from income in addition to the $132,900 earned income exclusion. For expats paying significant rent this can provide meaningful additional tax savings. Consult a US expat tax specialist to determine your specific housing exclusion amount.</p>

          <div className="ia-warning">
            <p className="ia-warning-label">⚠ The Five Year Revocation Trap</p>
            <p className="ia-warning-body" style={{color:'#1A1A1A'}}>Once you elect the FEIE by filing Form 2555 you should not revoke it without careful consideration. If you revoke the FEIE you cannot re-elect it for five years without IRS approval. Do not revoke your FEIE election without consulting a US expat tax specialist first.</p>
          </div>

          <h3 className="isub">How to Claim It — Form 2555</h3>
          <p className="ib">The FEIE is claimed on IRS Form 2555 attached to your standard Form 1040. The form requires you to declare which qualifying test you are using, document your foreign address and tax home, provide a travel log showing your days in and out of the US for the physical presence test, and calculate your exclusion amount. The IRS takes the day count seriously — keep records of passport stamps, flight tickets, and boarding passes to support your travel log. The exclusion amount flows from Form 2555 to Schedule 1 as a negative number reducing your adjusted gross income.</p>

          <h3 className="isub">FEIE vs Foreign Tax Credit — Which Is Better</h3>
          <p className="ib">The Foreign Tax Credit is an alternative to FEIE that credits foreign taxes you paid against your US tax bill rather than excluding income. You cannot use both on the same income. For expats in the Philippines where income tax on foreign-sourced income is generally not applicable the FEIE is typically more beneficial than the Foreign Tax Credit. For expats in high-tax countries the analysis is more complex. A US expat tax specialist can model both options for your specific situation.</p>

          <h3 className="isub">Recommended Tax Specialists</h3>
          <ul className="ilist">
            <li className="ili"><strong>Greenback Tax Services</strong> — <a href="https://www.greenbacktaxservices.com" target="_blank" rel="noopener noreferrer" style={{color:'#C9A84C', textDecoration:'none'}}>greenbacktaxservices.com</a> — specializes exclusively in US expat taxes</li>
            <li className="ili"><strong>Taxes for Expats</strong> — <a href="https://www.taxesforexpats.com" target="_blank" rel="noopener noreferrer" style={{color:'#C9A84C', textDecoration:'none'}}>taxesforexpats.com</a> — another expat-specialist firm</li>
          </ul>

          <p className="feie-disclaimer">This section provides general educational information about the Foreign Earned Income Exclusion. It is not tax advice. Tax situations vary significantly based on individual circumstances. Always consult a licensed US tax professional who specializes in expat taxation before making any decisions based on this information.</p>
        </div>
      </section>

      {/* REMOTE WORK TAX IMPLICATIONS */}
      <section className="section section-light" id="remote-work-tax">
        <div className="section-inner">
          <p className="section-label">Tax Implications</p>
          <h2 className="section-heading">Remote Work Tax Implications — What You Must Know</h2>
          <p className="ib">Working remotely from the Philippines as a US citizen has specific tax implications that go beyond just filing a US return. Understanding the rules before you commit to an extended stay protects you from unexpected tax bills in two countries.</p>

          <h3 className="isub isub-first">US Tax Obligations — You Always Owe</h3>
          <p className="ib">As a US citizen you must file a US tax return every year on your worldwide income regardless of where you live or where your employer is based. The Foreign Earned Income Exclusion (FEIE) allows you to exclude approximately $126,500 of foreign earned income from US tax in 2026 if you meet the bona fide residence test or physical presence test — 330 days outside the US in a 12-month period. This can significantly reduce or eliminate US income tax on remote work income.</p>

          <div className="ia-warning">
            <p className="ia-warning-label">⚠ Philippine Tax Residency — The 180 Day Trigger</p>
            <p className="ia-warning-body" style={{color:'#1A1A1A'}}>This is where many remote workers get surprised. Under Philippine tax law, a foreign national who stays in the Philippines for more than 180 days in a calendar year may be considered a resident alien and subject to Philippine income tax on Philippine-sourced income. For most remote workers employed by foreign companies with no Philippine-sourced income this may not create a tax liability on their employment income. However the threshold matters and should be discussed with a Philippine tax attorney if you plan to stay more than 180 days in the calendar year.</p>
          </div>

          <h3 className="isub">The Digital Nomad Visa Solution</h3>
          <p className="ib">The Digital Nomad Visa launched under Executive Order 86 in 2025 provides the cleanest tax structure for remote workers in the Philippines. Holders of the Digital Nomad Visa are specifically exempt from Philippine income tax on their foreign-sourced income — you pay taxes only in your home country. The visa requires a minimum income of $24,000 per year from non-Philippine sources. See the <a href="/visas" style={{color:'#C9A84C', fontWeight:500}}>Visas page</a> for full requirements and application process.</p>

          <h3 className="isub">Permanent Establishment Risk for Your Employer</h3>
          <p className="ib">This is a corporate tax concern that affects some remote workers. If your US employer has you working from the Philippines on an ongoing basis, Philippine tax authorities may potentially argue that this creates a permanent establishment of the company in the Philippines — which would expose the company to Philippine corporate tax obligations. This is most relevant for senior employees or those who sign contracts or conduct business activities on behalf of their employer from the Philippines. Raise this with your company&rsquo;s legal team before committing to a long-term remote work arrangement. Many companies have policies about employees working from foreign countries precisely because of this concern.</p>

          <h3 className="isub">No Totalization Agreement</h3>
          <p className="ib">The United States and the Philippines do not have a totalization agreement. This means there is no mechanism to avoid double taxation of Social Security contributions if you are self-employed or if your situation creates Social Security obligations in both countries. Self-employed remote workers and freelancers should consult a US expat tax specialist about self-employment tax obligations.</p>

          <div className="ia-gold">
            <p className="ia-gold-label">Practical Recommendation</p>
            <p className="ia-gold-body">Consult a US expat tax specialist before committing to working remotely from the Philippines for an extended period. Services like Greenback Tax Services and Taxes for Expats specialize in exactly this situation. The Digital Nomad Visa is the cleanest legal structure for most remote workers and its tax exemption on foreign-sourced income is a significant benefit worth understanding before you arrive.</p>
          </div>
        </div>
      </section>

      {/* ONLINE BUSINESS */}
      <section className="section section-light" id="online-business">
        <div className="section-inner">
          <p className="section-label">Online Business</p>
          <h2 className="section-heading">Online Business and Freelancing</h2>
          <p className="ib">Dropshipping, e-commerce, content creation, consulting, coaching, freelancing, and trading are all common income sources among expats. The Philippines imposes no income tax on foreign-sourced income for non-residents.</p>
          <p className="ib">However US citizens must still pay US taxes on worldwide income regardless of where they live. Consult a US expat tax specialist — services like Greenback Tax Services and Taxes for Expats specialize in this.</p>
        </div>
      </section>

      {/* YOUTUBE */}
      <section className="section section-dark" id="content-creation">
        <div className="section-inner">
          <p className="section-label">Content Creation</p>
          <h2 className="section-heading section-heading-light">YouTube and Content Creation</h2>
          <p className="ib ib-light">The Philippines is increasingly popular as a content creation base. Expat life, travel, food, and relationship content performs well on YouTube, Instagram, and TikTok.</p>
          <ul className="ilist">
            <li className="ili ili-light">Maintain your US Google AdSense account — US accounts have significantly higher RPM rates than accounts based in other countries.</li>
            <li className="ili ili-light">Add your spouse or partner as a channel manager from the start.</li>
            <li className="ili ili-light">Digital assets including YouTube channels should be addressed in your estate planning — designate a successor manager and include in your will.</li>
          </ul>
        </div>
      </section>

      {/* ENGLISH TEACHING */}
      <section className="section section-light" id="english-teaching">
        <div className="section-inner">
          <p className="section-label">Teaching English</p>
          <h2 className="section-heading">Teaching English Online</h2>
          <p className="ib">Platforms including Cambly, iTutor, and Preply allow native English speakers to teach online from anywhere. Income ranges from $10 to $25 per hour depending on platform and qualifications. Not a full income replacement but a useful supplement covering daily expenses for many expats.</p>
        </div>
      </section>

      {/* WHAT FOREIGNERS CANNOT DO */}
      <section className="section section-dark" id="restrictions">
        <div className="section-inner">
          <p className="section-label">Legal Restrictions</p>
          <h2 className="section-heading section-heading-light">What Foreigners Cannot Do</h2>
          <ul className="ilist">
            <li className="ili ili-light">Foreigners cannot take local employment in the Philippines without an Alien Employment Permit from DOLE and in most cases a sponsored work visa.</li>
            <li className="ili ili-light">Working for Philippine employers without proper authorization is illegal.</li>
            <li className="ili ili-light">The Digital Nomad Visa specifically prohibits working for Philippine clients or employers.</li>
            <li className="ili ili-light">Certain licensed professions — including medicine, law, and engineering — are restricted to Philippine citizens.</li>
          </ul>

          <div className="ia-warning">
            <p className="ia-warning-label">⚠ Local Employment Without Authorization</p>
            <p className="ia-warning-body">Working for Philippine employers without an Alien Employment Permit is an immigration violation and can result in deportation and blacklisting. Remote work for foreign employers is generally not subject to this restriction but verify current rules with an immigration attorney for your specific situation.</p>
          </div>
        </div>
      </section>

      {/* RECEIVING MONEY */}
      <section className="section section-light" id="receiving-money">
        <div className="section-inner">
          <p className="section-label">Money Transfers</p>
          <h2 className="section-heading">Receiving Money in the Philippines — The Best Methods</h2>

          <div className="transfer-grid">
            <div className="transfer-card">
              <div className="transfer-header">
                <span className="transfer-name">Wise</span>
              </div>
              <p className="transfer-body">Best exchange rates for regular transfers. Low fees. Transfer takes 1 to 2 business days. Recommended for regular monthly transfers from US accounts.</p>
            </div>
            <div className="transfer-card">
              <div className="transfer-header">
                <span className="transfer-name">Remitly</span>
              </div>
              <p className="transfer-body">Fast, competitive. Can send directly to Philippine bank accounts and GCash. Good for urgent transfers.</p>
            </div>
            <div className="transfer-card">
              <div className="transfer-header">
                <span className="transfer-name">Bank Wire Transfer</span>
              </div>
              <p className="transfer-body">Works but expensive in fees and typically poor exchange rates. Use only when other options are unavailable.</p>
            </div>
            <div className="transfer-card">
              <div className="transfer-header">
                <span className="transfer-name">ATM Withdrawal</span>
              </div>
              <p className="transfer-body">Works using US debit cards at Philippine ATMs. Fees add up and daily limits apply. Charles Schwab International checking reimburses ATM fees worldwide — best card for international ATM use.</p>
            </div>
            <div className="transfer-card">
              <div className="transfer-header">
                <span className="transfer-name">Direct Deposit to Philippine Bank</span>
              </div>
              <p className="transfer-body">Social Security can be deposited directly to Philippine bank accounts — BDO, BPI, Metrobank — through the SSA international direct deposit program.</p>
            </div>
          </div>

          <div className="ia-gold">
            <p className="ia-gold-label">Not a Financial Advisor</p>
            <p className="ia-gold-body">This page provides general information only. For personalized advice on receiving and managing income abroad, consult a licensed US expat financial advisor.</p>
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
              <p className="sn-tag">Funding the Life · Cebu, Philippines</p>
            </div>
          </div>
          <div className="sn-rule" />
          <div className="sn-body">
            <p>I work remotely for a US company and my income funds a lifestyle here that would cost three to four times as much in the United States. The Philippines is genuinely transformative for anyone whose income is in US dollars — your purchasing power increases dramatically the moment you land.</p>
            <p>I am not retired yet, but I have watched friends here live very comfortably on Social Security alone. The key is being honest with yourself about what comfortable means to you — and being willing to live like a resident rather than a tourist. The people who struggle financially here are usually the ones trying to recreate an American lifestyle at American prices in a country where that is not necessary and not particularly satisfying anyway.</p>
          </div>
          <p className="sn-verified">Last Updated: June 2026 · Cebu, Philippines</p>
        </div>
      </section>

      <Footer />
    </>
  );
}

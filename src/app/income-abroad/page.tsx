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
        .page-sub { font-size: 1.05rem; font-weight: 300; line-height: 1.65; color: rgba(248,246,241,0.72); max-width: 580px; }

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
        .ib-light { color: rgba(248,246,241,0.8); }
        .isub { font-family: 'Playfair Display', serif; font-size: clamp(1.05rem,1.8vw,1.28rem); font-weight: 700; color: #0B1F3A; margin: 36px 0 12px; padding-top: 32px; border-top: 1px solid rgba(11,31,58,0.08); max-width: 760px; }
        .isub-first { border-top: none; padding-top: 0; margin-top: 0; }
        .isub-light { color: #F8F6F1; border-top-color: rgba(248,246,241,0.1); }

        .ilist { list-style: none; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 9px; max-width: 760px; }
        .ili { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #4A5868; padding-left: 22px; position: relative; }
        .ili::before { content: '—'; position: absolute; left: 0; color: #C9A84C; font-weight: 600; }
        .ili-light { color: rgba(248,246,241,0.78); }

        .ia-gold { background: rgba(201,168,76,0.06); border: 1px solid rgba(201,168,76,0.3); border-left: 4px solid #C9A84C; padding: 26px 28px; margin: 28px 0; max-width: 760px; }
        .ia-gold-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
        .ia-gold-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #4A5868; }
        .ia-gold-body-light { color: rgba(248,246,241,0.85); }

        .ia-warning { background: rgba(235,87,87,0.06); border: 1px solid rgba(235,87,87,0.22); border-left: 4px solid #EB5757; padding: 26px 28px; margin: 28px 0; max-width: 760px; }
        .ia-warning-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #EB5757; margin-bottom: 10px; }
        .ia-warning-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: rgba(248,246,241,0.85); }

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
        .sn-body { font-size: 0.95rem; font-weight: 300; line-height: 1.85; color: rgba(248,246,241,0.82); }
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
            <p className="ia-warning-body">This is where many remote workers get surprised. Under Philippine tax law, a foreign national who stays in the Philippines for more than 180 days in a calendar year may be considered a resident alien and subject to Philippine income tax on Philippine-sourced income. For most remote workers employed by foreign companies with no Philippine-sourced income this may not create a tax liability on their employment income. However the threshold matters and should be discussed with a Philippine tax attorney if you plan to stay more than 180 days in the calendar year.</p>
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

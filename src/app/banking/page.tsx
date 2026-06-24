import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const aspects = [
  {
    label: "Opening an Account",
    subtitle: "Requirements for foreigners",
    description:
      "It is possible to open a Philippine bank account as a foreigner, but it takes more documentation than for citizens. Requirements vary by bank — BDO, BPI, and Security Bank are the most accommodating.",
    href: "#opening",
  },
  {
    label: "Sending Money In",
    subtitle: "Remittances & wire transfers",
    description:
      "Multiple services transfer money to the Philippines. Rates and fees vary significantly — comparing Wise, Remitly, and your bank's wire before each transfer is worth the 60 seconds it takes.",
    href: "#remittances",
  },
  {
    label: "Digital Wallets",
    subtitle: "GCash, Maya & beyond",
    description:
      "GCash and Maya dominate everyday digital payments and are accepted at markets, utilities, and government services. A Philippine mobile number and basic ID verification are all you need to start.",
    href: "#digital",
  },
  {
    label: "Day-to-Day Banking",
    subtitle: "Cash, ATMs & cards",
    description:
      "The Philippines is still heavily cash-dependent outside major shopping centres. ATM access is good in cities but thins out in provinces — and foreign-card fees add up fast without the right setup.",
    href: "#daily",
  },
];

const opening = {
  details: [
    {
      label: "Recommended banks",
      body: "BDO (Banco de Oro), BPI (Bank of the Philippine Islands), and Security Bank are the banks most commonly recommended by expats for their willingness to work with foreign account holders and their broad ATM and branch networks. UnionBank stands out for its genuinely good digital platform. Metrobank and RCBC are solid alternatives. All operate in English.",
    },
    {
      label: "Standard requirements",
      body: "Most banks require: a valid passport · your ACR I-Card (for holders of a long-stay visa such as the SRRV or 13A) · proof of Philippine address such as a lease contract or utility bill in your name · two passport-sized photos · an initial deposit. Some branches will ask for a Tax Identification Number (TIN); others will open the account without one and allow you to provide it later. Requirements can vary between branches of the same bank — it is worth calling ahead.",
    },
    {
      label: "Getting a TIN",
      body: "A Philippine TIN (Tax Identification Number) is issued by the Bureau of Internal Revenue (BIR). Foreigners who work or do business in the Philippines are legally required to have one. Even if you do not work locally, some banks and government transactions require it. Obtaining a TIN is straightforward — bring your passport and visa to the nearest BIR Revenue District Office (RDO). It is issued the same day.",
    },
    {
      label: "Initial deposit & balance",
      body: "Basic peso savings accounts typically require an initial deposit of PHP 5,000–25,000 and a maintaining balance in the same range. Falling below the maintaining balance incurs a monthly fee of PHP 200–500 depending on the bank and account type. Premium accounts have higher minimums (PHP 50,000+) but often waive monthly fees and offer better rates. Foreign currency accounts (USD, EUR, SGD) are available at most major banks with higher minimums.",
    },
    {
      label: "US citizens & FATCA",
      body: "US citizens face additional scrutiny due to FATCA (Foreign Account Tax Compliance Act) reporting requirements — US persons are required to report foreign financial accounts to the IRS. Some smaller Philippine banks decline to open accounts for US citizens to avoid the compliance burden. BDO and BPI have experience with FATCA documentation and are generally the better starting point. Ensure you understand your own FBAR and Form 8938 reporting obligations before opening accounts.",
    },
    {
      label: "Non-resident option",
      body: "If you are on a tourist visa or visiting long-term without a permanent resident visa, some banks will open a non-resident account with your passport and a home-country address. These accounts typically have more restrictions — lower transfer limits, no chequebook — but are functional for everyday use. Converting to a resident account after obtaining your long-stay visa is straightforward at most banks.",
    },
  ],
};

const remittances = {
  details: [
    {
      label: "Wise",
      body: "Wise (formerly TransferWise) consistently offers among the best exchange rates with low, transparent fees — typically 0.4–1.5% of the transfer amount. Transfers to a Philippine bank account usually arrive within one to two business days. Wise also offers a multi-currency account and debit card that can reduce ATM fees significantly for day-to-day use in the Philippines.",
    },
    {
      label: "Remitly & WorldRemit",
      body: "Remitly and WorldRemit are popular for speed — economy transfers arrive in one to three business days; express options can deliver within hours for a higher fee. Both offer direct deposit to Philippine bank accounts and, in some cases, to GCash wallets. Rates are competitive but slightly less favourable than Wise on larger amounts. Good options for regular monthly transfers.",
    },
    {
      label: "Bank wire (SWIFT)",
      body: "A direct bank-to-bank SWIFT transfer is the most straightforward option and ideal for large amounts where percentage-based fees become costly. You will need your Philippine bank's SWIFT code, the full account number, the branch name and address, and the account holder's name exactly as it appears on the account. Fees are typically flat (USD 15–50 at the sending end) plus a correspondent bank fee that the Philippine bank may deduct on receipt. Ask your Philippine bank about incoming wire fees before you use this method.",
    },
    {
      label: "Western Union & MoneyGram",
      body: "Both services support cash pickup at thousands of locations across the Philippines — useful if your recipient does not have a bank account. Fees are higher than digital services and exchange rates are less favourable, but the network reach and same-day cash availability make them the right tool for certain situations. Both also support direct bank deposit at higher fees.",
    },
    {
      label: "Currency exchange",
      body: "When converting cash, avoid airport money changers — their rates are consistently poor. Accredited money changers at SM and Robinson's malls, and standalone changers in business districts, typically offer rates close to interbank. The Philippine peso (PHP) is freely convertible and rates are published daily by the Bangko Sentral ng Pilipinas. Large exchanges may require presenting your passport.",
    },
    {
      label: "Large transfers",
      body: "The Anti-Money Laundering Council (AMLC) requires Philippine banks to report covered transactions above PHP 500,000 and flag suspicious transactions at any amount. Routine large transfers — pension payments, property purchases, business income — are not a problem but may generate a request for documentation. Keep records of the source of funds for any transfer above this threshold.",
    },
  ],
};

const digital = {
  details: [
    {
      label: "GCash",
      body: "GCash, operated by Globe Telecom, is the dominant mobile wallet in the Philippines. It is accepted at virtually all major supermarkets, restaurants, pharmacies, utility billers, government payment portals (PhilHealth, SSS, PhilSys), and hundreds of thousands of small merchants via QR code. A Philippine SIM card is required. Basic registration allows low-limit transfers; full KYC verification — which accepts foreign passports — unlocks higher monthly limits and additional features.",
    },
    {
      label: "Maya",
      body: "Maya (formerly PayMaya and now operating as a digital bank) is GCash's main competitor and is similarly accepted across major merchants. Maya also issues a physical Visa debit card linked to the wallet, which works anywhere Visa is accepted including ATMs. Maya Bank offers competitive interest rates on savings balances, making it a practical tool for parking a peso emergency fund.",
    },
    {
      label: "UnionBank digital",
      body: "Among traditional banks, UnionBank has the most capable digital platform in the Philippines. Accounts can be opened and managed entirely through the app — no branch visit required for existing Philippine residents — and local transfers to other banks are fast. Many expats use UnionBank as their primary bank for the app quality alone. The bank is also linked to Citi's former Philippine operations.",
    },
    {
      label: "Other digital banks",
      body: "Several digital-only banks have launched in recent years, all regulated by the Bangko Sentral ng Pilipinas: SeaBank (backed by Shopee) and Tonik offer savings accounts with notably high interest rates — useful for holding idle peso balances. GoTyme Bank can be opened at a kiosk in Robinson's malls without any prior account. These are supplement tools for most expats, not a primary banking solution.",
    },
    {
      label: "Philippine SIM & number",
      body: "A local Philippine mobile number — on Globe, Smart, or DITO — is effectively a prerequisite for digital banking and wallets. SIM registration now requires a valid ID under the SIM Registration Act; foreign passports and ACR I-Cards are accepted. Pre-paid SIMs are available at airports, convenience stores, and telco outlets for a few hundred pesos and can be registered on the spot.",
    },
  ],
};

const daily = {
  details: [
    {
      label: "Cash reality",
      body: "Despite the growth of digital payments, the Philippines remains substantially cash-dependent — particularly at wet markets, local eateries, tricycles, jeepneys, smaller shops, and in provincial areas. Plan to carry cash regularly. Peso bills come in denominations of 20, 50, 100, 200, 500, and 1,000 — smaller bills are sometimes scarce, and merchants at markets may struggle to make change for a 1,000-peso note.",
    },
    {
      label: "ATM access & limits",
      body: "ATMs are plentiful in Metro Manila, Cebu City, Davao, and most provincial capitals. They become sparse in rural areas. Most ATMs accept international Visa and Mastercard debit and credit cards via the BancNet or Megalink networks. Single-transaction withdrawal limits are typically PHP 10,000–20,000. ATMs at malls and airports occasionally run low on cash on weekends — withdrawing Thursday or Friday avoids the Sunday scramble.",
    },
    {
      label: "Foreign card fees",
      body: "Using a home-country debit card at a Philippine ATM typically stacks three costs: a PHP 200–250 operator fee charged by the local bank · a foreign transaction fee from your home bank (often 1–3%) · a dynamic currency conversion markup if you accept conversion at the ATM (always choose to be charged in pesos). A Wise debit card or similar no-FX-fee card eliminates the home-bank fees and consistently gets the mid-market rate — worthwhile for anyone spending months in the Philippines.",
    },
    {
      label: "Credit cards",
      body: "Obtaining a Philippine-issued credit card as a foreigner without local payroll income is genuinely difficult. Most issuers require a Certificate of Employment, local income documentation, or an existing banking relationship of six months or more. The practical approach for most expats is to keep a home-country credit card for larger purchases and use a low-FX debit card for everyday spending. Visa and Mastercard are widely accepted at malls and restaurants; American Express acceptance is more limited.",
    },
    {
      label: "ATM safety",
      body: "Card skimming occurs at ATMs in the Philippines, as in most countries. Use ATMs attached to bank branches rather than standalone machines where possible. Cover the keypad when entering your PIN. Check your statements weekly, especially after using unfamiliar ATMs. Consider setting a foreign transaction alert with your home bank so you are notified of every charge — useful for spotting unauthorised use quickly.",
    },
  ],
};

export default function BankingPage() {
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
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 48px;
          border-bottom: 1px solid rgba(248,246,241,0.1);
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
          gap: 32px;
          list-style: none;
        }
        .nav-links a {
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(248,246,241,0.65);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-links a:hover,
        .nav-links a.active { color: #F8F6F1; }

        /* ── PAGE HEADER ── */
        .page-header { background: #0B1F3A; }
        .page-hero {
          padding: 72px 48px 96px;
          max-width: 820px;
        }
        .page-eyebrow {
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
        .page-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #C9A84C;
        }
        .page-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 700;
          line-height: 1.12;
          color: #F8F6F1;
          margin-bottom: 24px;
        }
        .page-sub {
          font-size: 1.05rem;
          font-weight: 300;
          line-height: 1.65;
          color: rgba(248,246,241,0.72);
          max-width: 560px;
        }

        /* ── SECTIONS ── */
        .section { padding: 96px 48px; }
        .section-light { background: #F8F6F1; }
        .section-dark  { background: #0B1F3A; }

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
        .section-label::before { content: '◈'; font-size: 0.65rem; }
        .section-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700;
          color: #0B1F3A;
          line-height: 1.2;
          margin-bottom: 56px;
          max-width: 560px;
        }
        .section-heading-light { color: #F8F6F1; }

        /* ── OVERVIEW CARDS ── */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 1px solid #E8E4DC;
          border-left: 1px solid #E8E4DC;
        }
        .card {
          padding: 36px 32px;
          border-right: 1px solid #E8E4DC;
          border-bottom: 1px solid #E8E4DC;
          text-decoration: none;
          display: block;
          transition: background 0.2s;
        }
        .card:hover { background: #fff; }
        .card-label {
          font-family: 'Playfair Display', serif;
          font-size: 1.08rem;
          font-weight: 600;
          color: #0B1F3A;
          margin-bottom: 4px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 8px;
        }
        .card-label::after {
          content: '→';
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: #C9A84C;
          flex-shrink: 0;
          margin-top: 2px;
          transition: transform 0.2s;
        }
        .card:hover .card-label::after { transform: translateX(4px); }
        .card-subtitle {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: #C9A84C;
          margin-bottom: 12px;
          text-transform: uppercase;
        }
        .card-desc {
          font-size: 0.85rem;
          font-weight: 400;
          line-height: 1.6;
          color: #5C6B7A;
        }

        /* ── DETAIL SECTIONS ── */
        .detail-inner {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
        }
        .detail-intro {
          font-size: 0.95rem;
          font-weight: 300;
          line-height: 1.75;
          color: #5C6B7A;
          margin-top: 4px;
        }
        .detail-intro-light { color: rgba(248,246,241,0.65); }

        .detail-rows { display: flex; flex-direction: column; padding-top: 8px; }
        .detail-row {
          padding: 28px 0;
          border-bottom: 1px solid #E8E4DC;
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 24px;
          align-items: start;
        }
        .detail-row:first-child { border-top: 1px solid #E8E4DC; }
        .detail-row-dark { border-bottom-color: rgba(248,246,241,0.1); }
        .detail-row-dark:first-child { border-top-color: rgba(248,246,241,0.1); }
        .detail-row-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #C9A84C;
          padding-top: 2px;
        }
        .detail-row-body {
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.75;
          color: #4A5868;
        }
        .detail-row-body-light { color: rgba(248,246,241,0.72); }

        /* ── DISCLAIMER ── */
        .disclaimer-section {
          background: #F8F6F1;
          border-top: 3px solid #C9A84C;
        }
        .disclaimer-inner {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
        }
        .disclaimer-icon {
          width: 48px;
          height: 48px;
          background: #C9A84C;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 1.2rem;
          color: #0B1F3A;
          font-weight: 700;
        }
        .disclaimer-body {
          font-size: 0.95rem;
          font-weight: 300;
          line-height: 1.8;
          color: #5C6B7A;
          max-width: 640px;
        }
        .disclaimer-body strong { color: #0B1F3A; font-weight: 600; }

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
        .footer-note { font-size: 0.75rem; color: rgba(248,246,241,0.35); }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .nav { padding: 20px 24px; }
          .nav-links { display: none; }
          .page-hero { padding: 52px 24px 72px; }
          .section { padding: 72px 24px; }
          .card-grid { grid-template-columns: repeat(2, 1fr); }
          .detail-inner { grid-template-columns: 1fr; gap: 40px; }
          .detail-row { grid-template-columns: 1fr; gap: 8px; }
          .disclaimer-inner { grid-template-columns: 1fr; gap: 32px; }
          .footer { flex-direction: column; gap: 12px; text-align: center; }
        }
        @media (max-width: 560px) {
          .card-grid { grid-template-columns: 1fr; }
          .page-title { font-size: 2rem; }
        }
      `}</style>

      {/* PAGE HEADER */}
      <header className="page-header">
        <Nav active="/banking" />
        <div className="page-hero">
          <p className="page-eyebrow">Banking</p>
          <h1 className="page-title">
            Managing your money<br />in the Philippines.
          </h1>
          <p className="page-sub">
            What you need to open a Philippine bank account, how to send money
            in cost-effectively, which digital wallets are worth using, and the
            practical realities of cash and cards in daily life.
          </p>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="section section-light" id="overview">
        <p className="section-label">The banking landscape</p>
        <h2 className="section-heading">
          Four things worth knowing before you arrive.
        </h2>
        <div className="card-grid">
          {aspects.map((a) => (
            <a key={a.label} href={a.href} className="card">
              <div className="card-label">{a.label}</div>
              <p className="card-subtitle">{a.subtitle}</p>
              <p className="card-desc">{a.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* OPENING AN ACCOUNT */}
      <section className="section section-dark" id="opening">
        <div className="detail-inner">
          <div>
            <p className="section-label">Opening an Account</p>
            <h2 className="section-heading section-heading-light">
              Getting set up with a Philippine bank.
            </h2>
            <p className="detail-intro detail-intro-light">
              A local bank account makes day-to-day life significantly easier —
              for receiving payroll, paying utilities and rent via transfer, and
              avoiding the foreign-card fees that add up quickly. The process
              is manageable, but requirements can vary between branches and change
              without notice. Go prepared and be ready to make a second visit.
            </p>
          </div>
          <div className="detail-rows">
            {opening.details.map((d) => (
              <div key={d.label} className="detail-row detail-row-dark">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body detail-row-body-light">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REMITTANCES */}
      <section className="section section-light" id="remittances">
        <div className="detail-inner">
          <div>
            <p className="section-label">Sending Money In</p>
            <h2 className="section-heading">
              Getting your money to the Philippines efficiently.
            </h2>
            <p className="detail-intro">
              The right transfer method depends on the amount, the urgency, and
              whether the recipient has a bank account. For regular transfers,
              the difference between a good and a poor service compounds over
              time. Compare rates on the day — they fluctuate, and the cheapest
              option changes.
            </p>
          </div>
          <div className="detail-rows">
            {remittances.details.map((d) => (
              <div key={d.label} className="detail-row">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL WALLETS */}
      <section className="section section-dark" id="digital">
        <div className="detail-inner">
          <div>
            <p className="section-label">Digital Wallets</p>
            <h2 className="section-heading section-heading-light">
              GCash, Maya, and the digital banking layer.
            </h2>
            <p className="detail-intro detail-intro-light">
              Digital payments have grown rapidly in the Philippines. GCash in
              particular has become infrastructure — woven into utilities, government
              services, and street-level commerce. For expats, getting set up on
              at least one wallet is worth doing early.
            </p>
          </div>
          <div className="detail-rows">
            {digital.details.map((d) => (
              <div key={d.label} className="detail-row detail-row-dark">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body detail-row-body-light">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAY-TO-DAY */}
      <section className="section section-light" id="daily">
        <div className="detail-inner">
          <div>
            <p className="section-label">Day-to-Day Banking</p>
            <h2 className="section-heading">
              Cash, ATMs, and cards in practice.
            </h2>
            <p className="detail-intro">
              The gap between how the Philippines is moving digitally and how it
              operates on the street is real. Understanding both sides — and
              having the right card for ATM withdrawals — keeps avoidable costs
              out of your monthly budget.
            </p>
          </div>
          <div className="detail-rows">
            {daily.details.map((d) => (
              <div key={d.label} className="detail-row">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="section disclaimer-section">
        <div className="disclaimer-inner">
          <div>
            <div className="disclaimer-icon">!</div>
            <p className="section-label">Important note</p>
            <h2 className="section-heading">
              Banking rules and fees change. Verify before you act.
            </h2>
          </div>
          <p className="disclaimer-body">
            <strong>The information on this page is for general guidance only</strong>{" "}
            and reflects conditions at the time of writing. Bank account requirements,
            maintaining balances, and fee structures are set at the discretion of
            each bank and change without notice — always confirm current requirements
            directly with the branch you plan to use before visiting.
            <br /><br />
            Transfer fees and exchange rates change daily. Any figures cited here
            are indicative. Compare live rates on the day of transfer using a
            comparison tool before committing to any service.
            <br /><br />
            Philippine banking regulations, AMLC thresholds, and Bangko Sentral ng
            Pilipinas guidelines are updated periodically. US citizens should
            consult a tax professional familiar with FATCA and FBAR obligations
            before opening foreign accounts. This page does not constitute financial
            or legal advice.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

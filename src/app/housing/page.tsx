import Nav from "@/components/Nav";

const aspects = [
  {
    label: "Renting",
    subtitle: "The expat default",
    description:
      "Most foreigners rent. Leases typically run one year, with two months advance and one to two months security deposit required upfront.",
    href: "#renting",
  },
  {
    label: "Ownership Rules",
    subtitle: "What foreigners can hold",
    description:
      "Foreigners cannot own land in the Philippines. Condominium units are the primary legal route to property ownership for foreign nationals.",
    href: "#ownership",
  },
  {
    label: "Buying a Condo",
    subtitle: "The 40% rule",
    description:
      "Foreign nationals may own condo units outright, but total foreign ownership across any one project is capped at 40% of all units.",
    href: "#buying",
  },
  {
    label: "Neighborhoods",
    subtitle: "Where expats live",
    description:
      "BGC and Makati lead in Metro Manila. Cebu IT Park rivals both for modern infrastructure at lower cost. Smaller cities offer value at the expense of convenience.",
    href: "#neighborhoods",
  },
];

const ownership = {
  details: [
    {
      label: "Land — prohibited",
      body: "The Philippine Constitution explicitly prohibits foreign nationals from owning land, including residential lots, house-and-lot packages, and agricultural land. This applies regardless of how long you have lived in the Philippines or what visa you hold.",
    },
    {
      label: "Condominiums",
      body: "Foreign nationals may own condominium units in their own name under Republic Act 4726 (the Condominium Act), provided total foreign ownership across the entire project does not exceed 40% of units. Ownership is registered via a Condominium Certificate of Title (CCT) and can be sold, leased, or bequeathed without restriction.",
    },
    {
      label: "Long-term leases",
      body: "Under the Investors' Lease Act, foreigners may lease land for up to 50 years, renewable for a further 25 years. This is useful for those who want a house on a private lot — the structure can be owned by you, while the land beneath it remains leased from a Filipino owner.",
    },
    {
      label: "Married to a Filipino",
      body: "Land may be titled in your Filipino spouse's name. As the foreign spouse, you have no ownership interest in the land itself, but you may live in and enjoy the property. Some couples structure purchases this way, though it is worth understanding the implications in the event of separation.",
    },
    {
      label: "Corporate ownership",
      body: "Some foreigners hold land through a Philippine corporation that is at least 60% Filipino-owned. This is a legitimate but legally complex arrangement that requires proper structuring and ongoing compliance. Professional legal advice is essential before pursuing this route.",
    },
  ],
};

const renting = {
  details: [
    {
      label: "Lease terms",
      body: "Standard leases run 12 months. Six-month contracts exist but are less common and may attract a slightly higher monthly rate. Month-to-month arrangements are possible in some buildings but are treated as the exception, not the norm — landlords generally prefer fixed-term commitments.",
    },
    {
      label: "Advance & deposit",
      body: "Expect to pay two months advance rent plus one or two months security deposit at signing — meaning three to four months of rent is required before you get the keys. The security deposit is refundable at the end of the lease, subject to any deductions for damage or unpaid bills. Budget for this upfront cost carefully.",
    },
    {
      label: "Post-dated cheques",
      body: "Post-dated cheques (PDCs) are the standard mechanism for rent payment in the Philippines. Most landlords require a full year's worth of cheques at lease signing. If you don't yet have a Philippine bank account, opening one should be a priority before you begin seriously viewing properties.",
    },
    {
      label: "Utilities",
      body: "Electricity, water, and internet are almost always excluded from the quoted rent and billed separately. Electricity in particular can be a significant and surprising addition — especially with air-conditioning. Always ask explicitly what is and is not included before signing any agreement.",
    },
    {
      label: "Association dues",
      body: "For condo rentals, monthly ASSO (association dues) cover building maintenance, security, and shared amenities. These are typically paid separately by the tenant on top of rent and range from ₱2,000 to ₱6,000/mo depending on the building tier. Confirm who is responsible for ASSO before signing.",
    },
    {
      label: "Things to inspect",
      body: "Check water pressure and hot water availability (not universal in older buildings) · Test air-conditioning units and assess their age · Confirm internet provider availability in the building · Note natural light, cross-ventilation, and noise from nearby roads · Inspect for mould, particularly in lower floors or buildings near water.",
    },
  ],
};

const buying = {
  details: [
    {
      label: "The 40% quota",
      body: "Foreign nationals collectively cannot own more than 40% of units in any single condominium project. In established expat-popular developments — particularly in BGC and Makati — this quota is sometimes close to being reached. Always verify the current foreign ownership percentage with the developer or building administration before committing to a purchase.",
    },
    {
      label: "Title & ownership",
      body: "Ownership is registered in your own name under a Condominium Certificate of Title (CCT) issued by the Registry of Deeds. This is a genuine freehold interest in the unit. You may sell, lease, renovate, or bequeath the unit without restriction, and the title holds equal legal weight to that of a Filipino owner.",
    },
    {
      label: "Payment options",
      body: "Most developers offer in-house financing: typically a 20–30% down payment spread over 12–24 months, with the balance payable over 2–5 years at fixed rates. Bank financing is available for foreigners but is subject to stricter eligibility requirements and lower loan-to-value ratios. Many foreign buyers pay cash or use developer terms entirely.",
    },
    {
      label: "Taxes & fees",
      body: "Budget an additional 3–5% of the purchase price for transaction costs: transfer tax (0.5–0.75%), documentary stamp tax (1.5%), registration fees, notarial fees, and broker commission if applicable. These are over and above the purchase price and are typically paid by the buyer.",
    },
    {
      label: "Pre-selling vs. resale",
      body: "Pre-selling (off-plan) units can be 15–25% cheaper than completed equivalents, but carry construction risk and a 2–4 year wait before you can occupy. Resale units are priced at a premium but are ready to move into and can be inspected before purchase. Research the developer's track record carefully before buying off-plan.",
    },
  ],
};

const neighborhoods = {
  details: [
    {
      label: "BGC, Taguig",
      body: "Bonifacio Global City is the most modern district in Metro Manila — planned streets, wide pavements, and an established expat and dining scene. Rents are the highest in the country: studios from ₱22,000/mo, 1-bedrooms from ₱30,000/mo. Traffic in and out can be severe during peak hours, but within BGC itself it is unusually walkable by Manila standards.",
    },
    {
      label: "Makati & Rockwell",
      body: "Makati CBD remains the business and financial heart of the Philippines. Well-served by MRT, Grab, and an extensive network of restaurants, malls, and hospitals. Rents run slightly lower than BGC for comparable units. Rockwell — a premium enclave within Makati — is quieter and more curated, with a smaller selection of high-quality condos at premium prices.",
    },
    {
      label: "Ortigas & QC",
      body: "Ortigas Centre (Pasig/Mandaluyong) offers more affordable rents than BGC and Makati with good transport links. Quezon City is the largest city in Metro Manila by area and population — more residential and local in character, with rents 30–50% lower than the premium districts. Good options for those working remotely and prioritising value over prestige address.",
    },
    {
      label: "Cebu City",
      body: "IT Park (Lahug) and Cebu Business Park (Ayala) are the primary expat hubs — modern condos, walkable, and well-stocked with international restaurants and services. Rents run approximately 25–35% below Manila equivalents. The surrounding Banilad and Lahug residential areas offer a quieter, more suburban feel at lower cost.",
    },
    {
      label: "Davao City",
      body: "Consistently rated one of the Philippines' most liveable cities. Well-managed, relatively low crime, and noticeably more affordable than Manila or Cebu. The Matina and Lanang areas have the best concentration of modern condos and international amenities. A growing expat community and solid private hospital infrastructure make it an increasingly viable long-stay option.",
    },
    {
      label: "Smaller cities",
      body: "Dumaguete, Tagaytay, Bacolod, and similar provincial cities offer some of the lowest housing costs in the country — apartments from ₱5,000–12,000/mo. The trade-offs are fewer services, limited flight connections, and smaller expat communities. Popular with retirees and remote workers for whom access to Manila's infrastructure is not a daily requirement.",
    },
  ],
};

export default function HousingPage() {
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

        .detail-rows {
          display: flex;
          flex-direction: column;
          padding-top: 8px;
        }
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

        /* ── LEGAL NOTE ── */
        .legal-section {
          background: #F8F6F1;
          border-top: 3px solid #C9A84C;
        }
        .legal-inner {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
        }
        .legal-icon {
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
        .legal-body {
          font-size: 0.95rem;
          font-weight: 300;
          line-height: 1.8;
          color: #5C6B7A;
          max-width: 640px;
        }
        .legal-body strong {
          color: #0B1F3A;
          font-weight: 600;
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

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .nav { padding: 20px 24px; }
          .nav-links { display: none; }
          .page-hero { padding: 52px 24px 72px; }
          .section { padding: 72px 24px; }
          .card-grid { grid-template-columns: repeat(2, 1fr); }
          .detail-inner { grid-template-columns: 1fr; gap: 40px; }
          .detail-row { grid-template-columns: 1fr; gap: 8px; }
          .legal-inner { grid-template-columns: 1fr; gap: 32px; }
          .footer { flex-direction: column; gap: 12px; text-align: center; }
        }
        @media (max-width: 560px) {
          .card-grid { grid-template-columns: 1fr; }
          .page-title { font-size: 2rem; }
        }
      `}</style>

      {/* PAGE HEADER */}
      <header className="page-header">
        <Nav active="/housing" />

        <div className="page-hero">
          <p className="page-eyebrow">Housing</p>
          <h1 className="page-title">
            Renting, buying, and finding<br />your place in the Philippines.
          </h1>
          <p className="page-sub">
            A clear guide to what foreigners can and cannot own, how the rental
            process works in practice, the rules around condo purchases, and
            which neighbourhoods are worth knowing about across the country&rsquo;s
            main cities.
          </p>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="section section-light" id="overview">
        <p className="section-label">What this guide covers</p>
        <h2 className="section-heading">
          Four things every expat needs to understand.
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

      {/* OWNERSHIP RULES */}
      <section className="section section-dark" id="ownership">
        <div className="detail-inner">
          <div>
            <p className="section-label">Ownership Rules</p>
            <h2 className="section-heading section-heading-light">
              What the law says about foreign ownership.
            </h2>
            <p className="detail-intro detail-intro-light">
              Philippine property law draws a firm line between what foreigners
              may and may not own. Understanding this before you begin looking
              for a home will save you considerable time and prevent expensive
              mistakes.
            </p>
          </div>
          <div className="detail-rows">
            {ownership.details.map((d) => (
              <div key={d.label} className="detail-row detail-row-dark">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body detail-row-body-light">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RENTING */}
      <section className="section section-light" id="renting">
        <div className="detail-inner">
          <div>
            <p className="section-label">Renting</p>
            <h2 className="section-heading">
              How the rental process actually works.
            </h2>
            <p className="detail-intro">
              Renting is the path of least resistance for most newly arrived
              foreigners, and for many it remains the right long-term choice.
              The process is broadly familiar but has a few local practices
              worth knowing before you start viewing.
            </p>
          </div>
          <div className="detail-rows">
            {renting.details.map((d) => (
              <div key={d.label} className="detail-row">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYING A CONDO */}
      <section className="section section-dark" id="buying">
        <div className="detail-inner">
          <div>
            <p className="section-label">Buying a Condo</p>
            <h2 className="section-heading section-heading-light">
              Owning property as a foreign national.
            </h2>
            <p className="detail-intro detail-intro-light">
              A condominium unit is the most practical and legally
              straightforward property purchase available to foreign nationals.
              The title is yours outright — but there are quotas, costs, and
              financing considerations that differ meaningfully from what you
              may be used to at home.
            </p>
          </div>
          <div className="detail-rows">
            {buying.details.map((d) => (
              <div key={d.label} className="detail-row detail-row-dark">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body detail-row-body-light">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section className="section section-light" id="neighborhoods">
        <div className="detail-inner">
          <div>
            <p className="section-label">Neighborhoods</p>
            <h2 className="section-heading">
              Where expats tend to live, and why.
            </h2>
            <p className="detail-intro">
              Location shapes daily life in the Philippines more than almost
              anything else. Traffic, access to hospitals, proximity to
              international groceries and restaurants — all of these vary
              enormously between and within cities.
            </p>
          </div>
          <div className="detail-rows">
            {neighborhoods.details.map((d) => (
              <div key={d.label} className="detail-row">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL NOTE */}
      <section className="section legal-section">
        <div className="legal-inner">
          <div>
            <div className="legal-icon">!</div>
            <p className="section-label">Important note</p>
            <h2 className="section-heading">
              Get proper legal advice before you buy.
            </h2>
          </div>
          <p className="legal-body">
            <strong>This page is for general informational purposes only</strong> and
            does not constitute legal or financial advice. Philippine property law —
            particularly around foreign ownership, corporate structures, and leasehold
            arrangements — is nuanced and subject to change through legislation and
            court decisions.
            <br /><br />
            Before purchasing any property, engage a licensed Philippine real estate
            attorney to review the title, verify the foreign ownership quota status of
            the building, and advise on the transaction structure. A registered real
            estate broker (PRC-licensed) should handle the sales process. Do not rely
            solely on a developer&rsquo;s in-house sales team for legal guidance.
            <br /><br />
            Rental figures and neighborhood descriptions reflect general conditions at
            the time of writing and will change. Always verify current listings directly
            and inspect any property personally before signing or paying anything.
            Expat Compass PH is not a law firm and does not provide legal advice.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="/" className="footer-logo">
          Expat Compass <span>PH</span>
        </a>
        <p className="footer-note">
          © {new Date().getFullYear()} Expat Compass PH · For informational purposes only
        </p>
      </footer>
    </>
  );
}

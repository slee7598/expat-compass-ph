import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Steve's Expat Toolkit — Products & Services I Actually Use in the Philippines",
  description:
    "The apps, services, and tools I personally use as an American expat living in Cebu, Philippines. VPN setup, SIM cards, streaming, insurance, and more.",
  alternates: { canonical: "https://expatcompassph.com/steve-recommends" },
};

type RecItem = { name: string; body: string; link?: string; linkLabel?: string; note?: string };

const comms: RecItem[] = [
  {
    name: "Smart eSIM (iPhone)",
    body: "I use the Smart eSIM on my iPhone. I set it up at Gaisano Mall in Pasak, Lapu-Lapu City — they activate it for you on the spot, no hassle at all. I mainly got it because I needed a local number for apps like Lazada and Shopee, which require a Philippine number to function properly. The whole process took minutes.",
  },
  {
    name: "GLinet VPN Setup — The Remote Worker Hack",
    body: "I don’t use a traditional VPN app. I use a GLinet home router (the Flint 3) paired with a GLinet travel router (the Slate 7 Pro). The travel router connects back to my home router in Las Vegas, which means every device I connect to it appears to be sitting on my couch in Las Vegas — not in the Philippines. This is an absolute game-changer for remote workers. Your US banking apps, streaming services, and work systems see a US connection. No flags, no blocks, no issues. If you work remotely from the Philippines, this setup is worth every penny.",
    link: "https://www.amazon.com/s?k=GLinet&crid=Q08TN6PS44T6&sprefix=glinet%2Caps%2C795&linkCode=ll2&tag=expatcompassp-20&linkId=22e5dc989cc69abcbc3f97d3e8ddf57f&language=en_US&ref_=as_li_ss_tl",
    linkLabel: "Shop GLinet on Amazon →",
  },
];

const transport: RecItem[] = [
  {
    name: "Cebu Pacific",
    body: "The cheapest domestic airline for island hopping in the Philippines. Delays happen. Cancellations happen. I use Cebu Pacific because frankly, you can’t be in a hurry for anything in the Philippines. If you can roll with it, the price is hard to beat.",
  },
  {
    name: "Philippine Airlines",
    body: "Significantly more reliable than Cebu Pacific. If you have a connection to catch or a meeting to make, pay the extra and fly PAL. You get what you pay for.",
  },
  {
    name: "Grab",
    body: "The most reliable ride app in the Philippines. Fare shown upfront. More available than Maxim during peak hours.",
  },
  {
    name: "Maxim",
    body: "About half the price of Grab. My go-to when I’m not in a rush.",
  },
];

const food: RecItem[] = [
  {
    name: "S&R Membership Shopping",
    body: "I have my groceries delivered from S&R. The local SM and Robinsons stores are always sold out of something you need. I cook at home far more than I eat out, so I like to stay well stocked. S&R delivery has been the most reliable solution for that.",
  },
  {
    name: "A Word on Street Food",
    body: "I never eat street food. Foreigners need to be careful — our bodies aren’t adjusted to the local bacteria the way locals are. What’s fine for someone who grew up here can put you flat on your back for days. It’s not worth the risk.",
  },
  {
    name: "Water",
    body: "Always drink bottled water. I have 5-gallon bottles delivered to my condo every month. Never drink tap water. This is non-negotiable.",
  },
];

const health: RecItem[] = [
  {
    name: "My Approach to Health Insurance",
    body: "I’m 52 years old and live a healthy lifestyle, so I’ve made a deliberate choice not to carry expat health insurance. When I need medical attention, I go to a private ER — as my Chong Hua experience shows, the costs are very manageable by Western standards. I keep my receipts and submit them to my US healthcare provider for full or partial reimbursement. This approach works for me given my age, health, and situation. It may not be right for everyone. If you have pre-existing conditions or want peace of mind, look into SafetyWing or a similar expat health plan.",
    link: "https://safetywing.com/?referenceID=26552539&utm_source=26552539&utm_medium=Ambassador",
    linkLabel: "Explore SafetyWing →",
  },
];

const banking: RecItem[] = [
  {
    name: "Wise — Best Exchange Rates for Moving Money to the Philippines",
    body: "If you are moving money regularly from the United States to the Philippines, Wise is the transfer service I recommend above everything else. The reason is simple: Wise uses the mid-market exchange rate — the real rate you see when you search the exchange rate on Google. Not a marked-up rate, not a promotional rate that expires after your first transfer. The actual rate every single time. Most banks and transfer services make their money by quietly giving you a worse exchange rate. They call it a zero-fee transfer and then take their cut in the margin. Wise does the opposite — they show you a small transparent fee upfront and give you the real rate. On a $1,000 transfer from the US to the Philippines, the difference between Wise and a typical bank wire can be $30 to $80 in your favor every month. Fees start from as low as 0.4 percent of the transfer amount. 74 percent of transfers arrive in under 20 seconds. 95 percent complete within a day. New in 2026 — the Wise Debit Card Mastercard is now available for Philippine residents, meaning your Filipina partner can hold a Wise account and receive transfers with no hidden fees. Wise-to-Wise transfers between account holders are free for same-currency transfers. For regular monthly transfers from your US account to your Philippine bank account, Wise is the most cost-effective solution available.",
    link: "https://wise.com",
    linkLabel: "Open a Wise Account →",
    note: "Affiliate link coming soon — genuine personal recommendation",
  },
  {
    name: "Remitly — Fast Transfers When Speed Matters",
    body: "Remitly is a solid money transfer service with one important caveat you need to understand before using it. What Remitly does well: the app is excellent, consistently rated 4.9 out of 5 on the Apple App Store across millions of reviews. The interface is clean and simple. For a first-time transfer or when you need money to arrive fast, Remitly Express delivers quickly. Cash pickup and home delivery options are available in the Philippines through major banking partners. 24/7 customer support. Transfer limits up to $30,000 for fully verified accounts with no fee on transfers over $1,000. The important caveat: Remitly's promotional exchange rate only applies to your first transfer. After that you move to Remitly's standard rate, which is typically 1 to 3 percent below the mid-market rate. The difference on a $1,000 transfer can be $10 to $30 less in your pocket compared to the promotional rate. This is not hidden — Remitly discloses it — but it catches many people by surprise when their second transfer delivers noticeably fewer pesos than their first. When Remitly makes sense: for your first transfer when the promotional rate is excellent, and for Express transfers when speed is critical. For regular monthly transfers where you want the best ongoing exchange rate, use Wise instead.",
    link: "https://remitly.com",
    linkLabel: "Send with Remitly →",
    note: "Affiliate link coming soon",
  },
];

const immigration: RecItem[] = [
  {
    name: "Bureau of Immigration — Gaisano Mall, Pasak, Lapu-Lapu City",
    body: "The Bureau of Immigration office inside Gaisano Mall in Pasak, Lapu-Lapu City is the best immigration office I have been to in the Philippines. In and out in 15 minutes. No chaos, no confusion. If you’re based on Mactan Island, this is your office. Don’t go downtown if you don’t have to.",
  },
];

const entertainment: RecItem[] = [
  {
    name: "Amazon Fire TV Stick 4K",
    body: "The Fire TV Stick 4K is how I watch all my US content here in the Philippines. Plug it into any TV with an HDMI port and you have access to Netflix, Prime Video, YouTube, and hundreds of other apps. Pair it with the GLinet VPN setup I describe above and your streaming services think you are sitting in the US. An absolute must-have for any expat.",
    link: "https://www.amazon.com/s?k=Amazon+Firestick+4k&crid=Q20WSVAQF6X0&sprefix=amazon+firestick+4k%2Caps%2C403&linkCode=ll2&tag=expatcompassp-20&linkId=ea0a337c78a3f62afd409ac45c5aec33&language=en_US&ref_=as_li_ss_tl",
    linkLabel: "Shop on Amazon →",
  },
  {
    name: "Xtreme Player",
    body: "Xtreme Player is the app I use to organize and stream my entire personal media library — movies, TV shows, and music — across all my devices. Clean interface, supports every format, and works great on the Fire TV Stick. If you have a media library you want to access anywhere, this is the app. Use my referral code 789011 at checkout to get started.",
    link: "https://xtremeplayerllc.com",
    linkLabel: "Visit Xtreme Player →",
  },
];

const activities: RecItem[] = [
  {
    name: "Klook — Activities & Experiences",
    body: "Klook is my go-to for booking activities and experiences across the Philippines and Southeast Asia. Island hopping, diving, city tours, transfers — it is all on there, with instant confirmation and competitive prices.",
    link: "https://www.klook.com/destination/co1016-philippines/?aid=125611",
    linkLabel: "Browse Philippines Activities →",
  },
  {
    name: "Agoda — Best Hotel and Resort Booking for the Philippines and Asia",
    body: "When I am planning travel within the Philippines — whether it is a resort stay in Boracay, a dive trip hotel in Dumaguete, or a night in Manila between flights — Agoda is the first place I check. Agoda is part of Booking Holdings but focuses specifically on the Asia-Pacific market. That regional focus means their Philippines inventory is exceptional. Every resort in Cebu, every beach hotel in Palawan, every guesthouse in Siargao is on Agoda, often at lower rates than anywhere else for Asian properties. The search and filter tools are excellent. The reviews are genuine and plentiful. The mobile app is outstanding for booking on the go. For expats in the Philippines, Agoda covers short-term accommodation when you first arrive, finding resort deals for weekend escapes, booking for visiting family and friends, and planning island hopping trips throughout the Visayas, Palawan, Siargao, and beyond. Over 2 million properties worldwide. Available in 38 languages. One of the most trusted booking platforms in Asia since 2005. Ambassador promo codes ExpatPH, CompassPH, StevePH, and IrishPH coming soon once Ambassador approval is confirmed.",
    link: "https://www.agoda.com",
    linkLabel: "Search Hotels on Agoda →",
    note: "Ambassador approval in progress — promo codes and affiliate link coming soon",
  },
  {
    name: "Booking.com — Best for International Travel Outside Asia",
    body: "Booking.com is the largest online accommodation marketplace in the world — 28 million listings across 226 countries and over 1 million room nights booked every single day. For expats in the Philippines, it is a valuable complement to Agoda, particularly for international travel outside Asia. When you are booking accommodation in the US for family visits, in Europe, or anywhere outside the Asia-Pacific region, Booking.com typically has more options and better rates. Within the Philippines, Agoda often offers better rates due to its Asia-Pacific focus. For international travel, Booking.com is the stronger choice. Use both and compare for your specific destination and dates. Free cancellation on most properties. 30-day cookie window.",
    link: "https://www.booking.com",
    linkLabel: "Search Booking.com →",
    note: "Affiliate link coming soon",
  },
  {
    name: "Airbnb",
    body: "Airbnb is my personal go-to for finding apartments, condos, and unique stays across the Philippines. The selection in Cebu, Manila, and Boracay is excellent — you can find everything from budget studios to beachfront villas. I use it for every trip. Note: Airbnb no longer has an affiliate program, so there is no commission link here — just an honest recommendation from someone who uses it constantly.",
    link: "https://www.airbnb.com",
    linkLabel: "Browse Airbnb Philippines →",
  },
];

export default function SteveRecommendsPage() {
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
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 700;
          color: #F8F6F1;
          line-height: 1.1;
          max-width: 640px;
        }

        /* ── SECTIONS ── */
        .rec-section { padding: 72px 48px; }
        .rec-light { background: #F8F6F1; }
        .rec-dark { background: #0B1F3A; }
        .rec-inner { max-width: 860px; }

        /* ── CATEGORY HEADER ── */
        .cat-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 12px;
        }
        .cat-label::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #C9A84C;
        }
        .cat-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: #0B1F3A;
          line-height: 1.15;
          margin-bottom: 36px;
        }
        .rec-dark .cat-heading { color: #F8F6F1; }

        /* ── ITEM CARDS ── */
        .rec-items { display: flex; flex-direction: column; gap: 10px; }

        .rec-item {
          border-left: 3px solid #C9A84C;
          padding: 24px 28px;
        }
        .rec-light .rec-item {
          background: #FFFFFF;
          border-top: 1px solid rgba(201,168,76,0.12);
          border-right: 1px solid rgba(201,168,76,0.12);
          border-bottom: 1px solid rgba(201,168,76,0.12);
        }
        .rec-dark .rec-item {
          background: rgba(248,246,241,0.04);
          border-top: 1px solid rgba(201,168,76,0.1);
          border-right: 1px solid rgba(201,168,76,0.1);
          border-bottom: 1px solid rgba(201,168,76,0.1);
        }
        .rec-item-name {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 10px;
        }
        .rec-light .rec-item-name { color: #0B1F3A; }
        .rec-dark .rec-item-name { color: #F8F6F1; }
        .rec-item-body {
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.82;
        }
        .rec-light .rec-item-body { color: #2A3A4A; }
        .rec-dark .rec-item-body { color: rgba(248,246,241,0.75); }
        .rec-item-link {
          display: inline-block;
          margin-top: 14px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #C9A84C;
          text-decoration: none;
          border-bottom: 1px solid rgba(201,168,76,0.3);
          padding-bottom: 2px;
          transition: border-color 0.2s;
        }
        .rec-item-link:hover { border-color: #C9A84C; }
        .rec-item-note {
          display: block;
          margin-top: 8px;
          font-size: 0.72rem;
          font-weight: 300;
          letter-spacing: 0.02em;
        }
        .rec-light .rec-item-note { color: rgba(11,31,58,0.42); }
        .rec-dark .rec-item-note { color: rgba(248,246,241,0.38); }

        /* ── NORDVPN FEATURED CARD ── */
        .nordvpn-card {
          max-width: 860px;
          margin-top: 24px;
          border-left: 4px solid #C9A84C;
          padding: 36px 40px;
          background: #0B1F3A;
          border-top: 1px solid rgba(201,168,76,0.2);
          border-right: 1px solid rgba(201,168,76,0.2);
          border-bottom: 1px solid rgba(201,168,76,0.2);
        }
        .nordvpn-featured-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 16px;
        }
        .nordvpn-featured-label::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #C9A84C;
        }
        .nordvpn-card-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.3rem, 2.5vw, 1.65rem);
          font-weight: 700;
          color: #F8F6F1;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .nordvpn-card-body {
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.82;
          color: rgba(248,246,241,0.78);
          margin-bottom: 16px;
        }
        .nordvpn-card-subhead {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 700;
          color: #C9A84C;
          margin-top: 24px;
          margin-bottom: 12px;
        }
        .nordvpn-btn-wrap {
          margin-top: 28px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }
        .nordvpn-btn {
          display: inline-block;
          padding: 13px 32px;
          background: #C9A84C;
          color: #0B1F3A;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .nordvpn-btn:hover { background: #dbb95a; }
        .nordvpn-affiliate-note {
          font-size: 0.72rem;
          font-weight: 300;
          color: rgba(248,246,241,0.38);
          letter-spacing: 0.02em;
        }

        /* ── DISCLOSURE BANNER ── */
        .disclosure-wrap {
          background: #F8F6F1;
          padding: 40px 48px 0;
        }
        .disclosure-card {
          max-width: 860px;
          background: #C9A84C;
          padding: 28px 32px;
          display: flex;
          align-items: flex-start;
          gap: 18px;
        }
        .disclosure-icon {
          flex-shrink: 0;
          font-size: 1.4rem;
          line-height: 1;
          margin-top: 2px;
        }
        .disclosure-text {
          font-size: 0.88rem;
          font-weight: 600;
          line-height: 1.75;
          color: #0B1F3A;
        }

        /* ── DISCLAIMER ── */
        .rec-disclaimer {
          background: #0B1F3A;
          border-top: 1px solid rgba(201,168,76,0.15);
          padding: 32px 48px;
        }
        .rec-disclaimer p {
          font-size: 0.78rem;
          font-weight: 300;
          color: rgba(248,246,241,0.4);
          line-height: 1.7;
          max-width: 680px;
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
          .page-hero { padding: 48px 24px 64px; }
          .rec-section { padding: 56px 24px; }
          .rec-disclaimer { padding: 28px 24px; }
          .footer { flex-direction: column; gap: 12px; text-align: center; }
        }
      `}</style>

      {/* PAGE HEADER */}
      <header className="page-header">
        <Nav active="/steve-recommends" />
        <div className="page-hero">
          <p className="page-eyebrow">Steve's Expat Toolkit</p>
          <h1 className="page-title">Steve's Expat Toolkit</h1>
        </div>
      </header>

      {/* AFFILIATE DISCLOSURE */}
      <div className="disclosure-wrap">
        <div className="disclosure-card">
          <span className="disclosure-icon">◆</span>
          <p className="disclosure-text">
            Expat Compass PH is completely free — no ads, no memberships, no paywalls. It costs real time and money to research, build, and update this site daily. Some of the links on this page are affiliate links, which means if you click through and make a purchase, we may earn a small commission at no extra cost to you. We only recommend products and services we genuinely believe in. Our opinions are never influenced by affiliate relationships — if something is not worth recommending, it does not appear on this site.
          </p>
        </div>
      </div>

      {/* COMMUNICATIONS & TECH */}
      <section className="rec-section rec-light">
        <div className="rec-inner">
          <p className="cat-label">Communications &amp; Tech</p>
          <h2 className="cat-heading">Staying connected and working remotely.</h2>
          <div className="rec-items">
            {comms.map((item) => (
              <div key={item.name} className="rec-item">
                <p className="rec-item-name">{item.name}</p>
                <p className="rec-item-body">{item.body}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="rec-item-link">
                    {item.linkLabel}
                  </a>
                )}
                {item.note && (
                  <span className="rec-item-note">{item.note}</span>
                )}
              </div>
            ))}
          </div>
          <div className="nordvpn-card">
            <p className="nordvpn-featured-label">Featured Recommendation</p>
            <h2 className="nordvpn-card-title">NordVPN — The VPN Service I Recommend for Expats</h2>
            <p className="nordvpn-card-body">
              I run a personal private VPN setup for my own specific technical needs here in Punta Engaño. But if I were recommending a commercial VPN service to any expat in the Philippines — and I do recommend one — it is NordVPN without hesitation. I have followed the VPN space long enough to know NordVPN is the gold standard.
            </p>
            <p className="nordvpn-card-subhead">Why expats in the Philippines need a VPN</p>
            <p className="nordvpn-card-body">
              Your US streaming services — Netflix, Hulu, HBO Max, Disney Plus — are geo-blocked in the Philippines. NordVPN routes your connection through a US server so your full streaming library works exactly as it did at home. Your US banking apps sometimes flag Philippine IP addresses as suspicious activity — NordVPN keeps your connection appearing US-based so you never get locked out of your own accounts. The Airbnb pricing trick — I only book Airbnbs through a VPN because I consistently see better rates when my IP is not showing as a local Philippine connection. Dynamic pricing algorithms show different rates based on your location. And your Social Security account, Medicare portal, and US government services occasionally have issues with foreign IP addresses — a VPN eliminates that friction entirely.
            </p>
            <p className="nordvpn-card-subhead">Why NordVPN specifically</p>
            <p className="nordvpn-card-body">
              100% no-logs policy, independently audited. Military-grade AES-256 encryption. Servers in 111 countries including the United States. Up to 10 simultaneous devices on one subscription. Works on Windows, Mac, iOS, Android, and can be configured directly on compatible routers so every device in your home is automatically protected. At their 1 and 2-year plan pricing, it is one of the best value purchases you can make as an expat.
            </p>
            <div className="nordvpn-btn-wrap">
              <a href="https://nordvpn.com" target="_blank" rel="noopener noreferrer" className="nordvpn-btn">
                Get NordVPN
              </a>
              <span className="nordvpn-affiliate-note">Affiliate link coming soon.</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPORTATION */}
      <section className="rec-section rec-dark">
        <div className="rec-inner">
          <p className="cat-label">Transportation</p>
          <h2 className="cat-heading">Getting around the Philippines.</h2>
          <div className="rec-items">
            {transport.map((item) => (
              <div key={item.name} className="rec-item">
                <p className="rec-item-name">{item.name}</p>
                <p className="rec-item-body">{item.body}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="rec-item-link">
                    {item.linkLabel}
                  </a>
                )}
                {item.note && (
                  <span className="rec-item-note">{item.note}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD & GROCERIES */}
      <section className="rec-section rec-light">
        <div className="rec-inner">
          <p className="cat-label">Food &amp; Groceries</p>
          <h2 className="cat-heading">Eating and stocking up.</h2>
          <div className="rec-items">
            {food.map((item) => (
              <div key={item.name} className="rec-item">
                <p className="rec-item-name">{item.name}</p>
                <p className="rec-item-body">{item.body}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="rec-item-link">
                    {item.linkLabel}
                  </a>
                )}
                {item.note && (
                  <span className="rec-item-note">{item.note}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTH & INSURANCE */}
      <section className="rec-section rec-dark">
        <div className="rec-inner">
          <p className="cat-label">Health &amp; Insurance</p>
          <h2 className="cat-heading">Healthcare on your own terms.</h2>
          <div className="rec-items">
            {health.map((item) => (
              <div key={item.name} className="rec-item">
                <p className="rec-item-name">{item.name}</p>
                <p className="rec-item-body">{item.body}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="rec-item-link">
                    {item.linkLabel}
                  </a>
                )}
                {item.note && (
                  <span className="rec-item-note">{item.note}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANKING & MONEY TRANSFER */}
      <section className="rec-section rec-light">
        <div className="rec-inner">
          <p className="cat-label">Banking &amp; Money Transfer</p>
          <h2 className="cat-heading">Moving money the smart way.</h2>
          <div className="rec-items">
            {banking.map((item) => (
              <div key={item.name} className="rec-item">
                <p className="rec-item-name">{item.name}</p>
                <p className="rec-item-body">{item.body}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="rec-item-link">
                    {item.linkLabel}
                  </a>
                )}
                {item.note && (
                  <span className="rec-item-note">{item.note}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMMIGRATION */}
      <section className="rec-section rec-dark">
        <div className="rec-inner">
          <p className="cat-label">Immigration</p>
          <h2 className="cat-heading">Navigating the Bureau of Immigration.</h2>
          <div className="rec-items">
            {immigration.map((item) => (
              <div key={item.name} className="rec-item">
                <p className="rec-item-name">{item.name}</p>
                <p className="rec-item-body">{item.body}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="rec-item-link">
                    {item.linkLabel}
                  </a>
                )}
                {item.note && (
                  <span className="rec-item-note">{item.note}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENTERTAINMENT */}
      <section className="rec-section rec-light">
        <div className="rec-inner">
          <p className="cat-label">Entertainment</p>
          <h2 className="cat-heading">Watching what you love from home.</h2>
          <div className="rec-items">
            {entertainment.map((item) => (
              <div key={item.name} className="rec-item">
                <p className="rec-item-name">{item.name}</p>
                <p className="rec-item-body">{item.body}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="rec-item-link">
                    {item.linkLabel}
                  </a>
                )}
                {item.note && (
                  <span className="rec-item-note">{item.note}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="rec-section rec-dark">
        <div className="rec-inner">
          <p className="cat-label">Activities</p>
          <h2 className="cat-heading">Getting out and exploring.</h2>
          <div className="rec-items">
            {activities.map((item) => (
              <div key={item.name} className="rec-item">
                <p className="rec-item-name">{item.name}</p>
                <p className="rec-item-body">{item.body}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="rec-item-link">
                    {item.linkLabel}
                  </a>
                )}
                {item.note && (
                  <span className="rec-item-note">{item.note}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="rec-disclaimer">
        <p>
          Some links on this page may be affiliate links. If you use them, I may earn a small
          commission at no extra cost to you. I only recommend products and services I personally use.
        </p>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

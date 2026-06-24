import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const aspects = [
  {
    label: "Ride-Hailing",
    subtitle: "Grab, Maxim & alternatives",
    description:
      "Grab dominates but Maxim is meaningfully cheaper where it operates — often 20–40% less for the same trip. Motorcycle taxis (Angkas, Joyride) cut through traffic faster than any car.",
    href: "#ridehailing",
  },
  {
    label: "Public Transit",
    subtitle: "Jeepney, rail & bus",
    description:
      "Jeepneys, the LRT/MRT rail lines, UV Express vans, and point-to-point buses form the backbone of urban transport. Cheap and extensive — crowded and slow at peak hours.",
    href: "#public",
  },
  {
    label: "Long-Distance",
    subtitle: "Flights, ferries & buses",
    description:
      "Island geography means inter-island travel relies on domestic flights and ferries. Budget airlines run frequent routes; RoRo ferries connect islands for vehicles and passengers.",
    href: "#longdistance",
  },
  {
    label: "Driving",
    subtitle: "Licenses, roads & traffic",
    description:
      "Foreigners can drive on a home-country license for 90 days; conversion to a Philippine license is straightforward. Manila traffic is genuinely severe — many expats skip car ownership entirely.",
    href: "#driving",
  },
];

const ridehailing = {
  details: [
    {
      label: "Grab",
      body: "Grab is the dominant ride-hailing app in the Philippines, available in Metro Manila, Cebu, Davao, and most other major cities. It functions similarly to Uber — book a car through the app, pay via GCash, credit or debit card, or cash. GrabCar covers private vehicles; GrabTaxi books metered taxis through the same app. Fares surge during peak hours and heavy rain. International phone numbers and cards work for registration.",
    },
    {
      label: "Maxim — the cheaper option",
      body: "Maxim is a ride-hailing app with strong coverage in Cebu, Davao, and a growing presence in other Philippine cities. Where it operates, it is consistently cheaper than Grab — typically 20–40% less for the same route. The app works the same way and accepts similar payment methods. It is worth opening Maxim alongside Grab and checking both before booking, particularly for longer trips where the savings are more meaningful. Driver availability varies by city and time of day.",
    },
    {
      label: "Motorcycle taxis",
      body: "Angkas is a regulated motorcycle taxi app available in select cities. It is significantly faster than a car in heavy traffic — a 45-minute car ride can become 15 minutes on a motorbike. Helmets are provided and required. Joyride operates in some areas where Angkas has limited coverage. Both are suitable for solo travel with minimal luggage. Not recommended in heavy rain.",
    },
    {
      label: "Traditional taxis",
      body: "Yellow metered taxis remain common in Metro Manila. Always insist on the meter — many drivers will propose a flat rate that is well above what the meter would show. The flag-down rate is low and metered rides are generally fair; the issue is drivers who refuse to use the meter. Airports have accredited taxi counters with fixed rates inside the terminal — use these rather than approaching drivers directly outside arrivals.",
    },
    {
      label: "Tricycles & habal-habal",
      body: "Three-wheeled motorcycle taxis (tricycles) are the primary short-distance transport in residential areas and smaller towns outside city centres. Fares for short local trips are PHP 10–25 and are often fixed by the local government; negotiate for longer distances. Habal-habal (a motorcycle ridden with a passenger, sometimes two) fills the same role in rural and mountainous areas where tricycles cannot go. Both are normal everyday transport — no app needed.",
    },
  ],
};

const publicTransit = {
  details: [
    {
      label: "Jeepneys",
      body: "Jeepneys — evolved from US military jeeps — are the most widely used form of public transport in most Philippine cities and remain iconic. Routes are fixed; Google Maps covers most routes. Board from the roadside, pay the driver or a conductor (PHP 13–15 minimum in Metro Manila; higher for longer distances), and tell them your stop. Modern articulated minibuses are replacing old-style jeepneys under the government's PUV Modernisation Programme — the transition is ongoing and coverage varies by route.",
    },
    {
      label: "LRT & MRT (Manila)",
      body: "Three rail lines serve Metro Manila. LRT-1 runs north–south from Baclaran (Pasay) to Roosevelt (Quezon City). LRT-2 runs east–west from Recto to Antipolo. MRT-3 runs along EDSA from Taft Avenue to North Avenue. All require a stored-value Beep card (available at stations; PHP 20 card fee plus load). Fares are PHP 15–35 depending on distance. Trains are extremely crowded during weekday peak hours — 7–9 am and 5–8 pm — and often require queuing. Outside those windows, the rail is a fast and cheap way to cross the city.",
    },
    {
      label: "UV Express & P2P buses",
      body: "UV Express vans run fixed express routes across Metro Manila and other cities — faster than jeepneys, air-conditioned, and typically PHP 35–70 per trip. Point-to-point (P2P) buses connect suburban areas and major business districts in Metro Manila with fixed fares, reserved seating, and no standing passengers (PHP 60–100). Both are significantly more comfortable than standard public transit and are popular with commuters making longer cross-city trips.",
    },
    {
      label: "Beep card",
      body: "The Beep card is the stored-value card used on LRT-1, LRT-2, MRT-3, and some bus lines. Buy one at any rail station for PHP 20 (the card fee, separate from your initial load). Load additional credit at station kiosks or convenience stores. Keep it — it is reusable indefinitely. Having a Beep card avoids the single-journey ticket queue, which can be long during rush hour.",
    },
    {
      label: "Outside Metro Manila",
      body: "Cebu City has a Bus Rapid Transit (BRT) system. Most provincial cities are served by jeepneys, tricycles, and local bus routes. In smaller towns, the tricycle is effectively the only public option. Grab and Maxim coverage drops significantly outside the main urban centres — having a local contact or knowing the tricycle and habal-habal rates for your area is useful.",
    },
  ],
};

const longDistance = {
  details: [
    {
      label: "Domestic flights",
      body: "Flying is the fastest way to travel between major islands and is often the only practical option. Philippine Airlines (PAL), Cebu Pacific, and AirAsia Philippines are the main carriers. Manila (NAIA — four terminals; confirm yours before leaving), Cebu (Mactan-Cebu), and Davao (Francisco Bangoy) are the main hubs with dozens of daily connections. Cebu Pacific and AirAsia run frequent fare sales — booking 3–6 weeks ahead typically gets the best prices. Budget at least 2–3 hours before departure at NAIA for check-in and security queues.",
    },
    {
      label: "NAIA terminals",
      body: "Manila's Ninoy Aquino International Airport (NAIA) has four separate terminals that are not connected by a walkthrough — travelling between them requires going outside and taking a shuttle or taxi. Terminal 1: international airlines. Terminal 2: Philippine Airlines international and domestic. Terminal 3: Cebu Pacific, AirAsia, and most other domestic carriers. Terminal 4: smaller domestic carriers. Confirm your terminal before travel — arriving at the wrong one with limited time is a preventable problem.",
    },
    {
      label: "Ferries",
      body: "Ferries are essential for inter-island travel, particularly in the Visayas and Mindanao where short crossings connect islands that would otherwise require a flight. 2GO Travel operates major overnight routes including Manila–Cebu and Manila–Cagayan de Oro. For shorter Visayas crossings — Cebu–Bohol, Cebu–Ormoc, Cebu–Dumaguete, and others — fast craft operators like OceanJet and Lite Ferries are quick and frequent. Accommodation classes range from open deck to private cabin on overnight routes.",
    },
    {
      label: "RoRo ferries",
      body: "Roll-on Roll-off (RoRo) ferries carry vehicles and their passengers across water gaps between islands. Key routes include Batangas–Puerto Galera (for Mindoro), Matnog–Allen (Luzon to Samar), and Lipata–Liloan (crossing the Surigao Strait into Mindanao). These make island-hopping road trips feasible — drive onto the ferry, ride across, and continue driving on the other side. Schedules vary by route; check with local operators.",
    },
    {
      label: "Long-distance buses",
      body: "An extensive bus network connects cities on the same island. Air-conditioned coaches with multiple comfort classes (ordinary, deluxe, sleeper) serve most major Luzon routes. Main Metro Manila bus terminals are at Araneta Center (Cubao) in Quezon City and along EDSA and Taft Avenue in Pasay for provincial routes. Sample journey times: Manila to Baguio 5–6 hours; Manila to Legazpi 10–12 hours; Manila to Vigan 8–9 hours. Buses in the Visayas and Mindanao connect cities within each island.",
    },
  ],
};

const driving = {
  details: [
    {
      label: "Foreign license validity",
      body: "A valid foreign driver's license allows you to drive in the Philippines for 90 days from the date of your most recent arrival. After that point, a Philippine license is legally required to drive. Driving on an expired-for-Philippines foreign license leaves you uninsured in most scenarios and subject to fines.",
    },
    {
      label: "Converting your license",
      body: "The Land Transportation Office (LTO) allows holders of a valid foreign license to convert to a Philippine license without a driving exam, provided the issuing country has a reciprocal agreement with the Philippines — which covers most Western countries. Requirements: valid foreign license, passport, ACR I-Card or long-stay visa, completed application form, medical certificate (available at LTO-accredited clinics near the office), and the conversion fee. The process takes roughly 1–2 hours at an LTO district office.",
    },
    {
      label: "Manila traffic",
      body: "Metro Manila traffic is genuinely severe and consistently ranks among the worst in Southeast Asia. EDSA — the main highway — can take 1.5 hours to travel a distance driveable in 10 minutes outside peak hours. The Unified Vehicular Volume Reduction Programme (UVVRP), known as number coding, bans vehicles with certain plate number endings on specific weekdays from 7 am to 8 pm. Wet season from June to November compounds congestion due to flooding on many roads.",
    },
    {
      label: "Road conditions",
      body: "Expressways (NLEX, SLEX, TPLEX, CAVITEX, NAIAX) are well-maintained and fast. City roads vary from acceptable to heavily potholed. Provincial roads range from good to deeply rutted depending on the region and recent weather. Defensive driving is essential — lane discipline is inconsistent, vehicles stop suddenly, and pedestrians cross anywhere. Night driving in rural areas carries additional hazards: unlighted vehicles, livestock on the road, and poorly lit surfaces.",
    },
    {
      label: "Car ownership realities",
      body: "Many long-term Metro Manila expats choose not to own a car. The combination of traffic, number coding restrictions, parking costs (PHP 40–60 for the first hour at malls), and the availability of Grab and Maxim makes car ownership more burden than convenience in the capital. Cebu, Davao, and provincial areas are more manageable. If you do drive, a dashcam is strongly recommended — it is routine practice among local drivers and invaluable in the event of an accident.",
    },
  ],
};

export default function TransportationPage() {
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
          grid-template-columns: 180px 1fr;
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
        <Nav active="/transportation" />
        <div className="page-hero">
          <p className="page-eyebrow">Transportation</p>
          <h1 className="page-title">
            Getting around<br />the Philippines.
          </h1>
          <p className="page-sub">
            From the jeepney to domestic flights — how to navigate daily
            commutes, cross islands efficiently, save money on ride-hailing,
            and decide whether owning a car in the Philippines is actually
            worth it.
          </p>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="section section-light" id="overview">
        <p className="section-label">Getting around</p>
        <h2 className="section-heading">
          Four modes every expat should understand.
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

      {/* RIDE-HAILING */}
      <section className="section section-dark" id="ridehailing">
        <div className="detail-inner">
          <div>
            <p className="section-label">Ride-Hailing</p>
            <h2 className="section-heading section-heading-light">
              Apps, costs, and what to use where.
            </h2>
            <p className="detail-intro detail-intro-light">
              App-based transport has transformed daily life for expats in the
              Philippines. Having Grab, Maxim, and one motorcycle taxi app
              installed covers most scenarios. Check Maxim before booking
              Grab — the savings on regular trips add up quickly.
            </p>
          </div>
          <div className="detail-rows">
            {ridehailing.details.map((d) => (
              <div key={d.label} className="detail-row detail-row-dark">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body detail-row-body-light">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLIC TRANSIT */}
      <section className="section section-light" id="public">
        <div className="detail-inner">
          <div>
            <p className="section-label">Public Transit</p>
            <h2 className="section-heading">
              Jeepneys, rail, and the commuter network.
            </h2>
            <p className="detail-intro">
              Philippine public transit is cheap, comprehensive, and — outside
              of peak hours — genuinely useful. Understanding how it works
              expands your options, reduces costs, and sometimes gets you across
              Metro Manila faster than a car ever could.
            </p>
          </div>
          <div className="detail-rows">
            {publicTransit.details.map((d) => (
              <div key={d.label} className="detail-row">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LONG-DISTANCE */}
      <section className="section section-dark" id="longdistance">
        <div className="detail-inner">
          <div>
            <p className="section-label">Long-Distance Travel</p>
            <h2 className="section-heading section-heading-light">
              Flights, ferries, and crossing the islands.
            </h2>
            <p className="detail-intro detail-intro-light">
              The Philippines is an archipelago of over 7,000 islands. Getting
              between them is part of life here. Budget airlines and a well-developed
              ferry network make inter-island travel routine — once you know which
              tools to use for which route.
            </p>
          </div>
          <div className="detail-rows">
            {longDistance.details.map((d) => (
              <div key={d.label} className="detail-row detail-row-dark">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body detail-row-body-light">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRIVING */}
      <section className="section section-light" id="driving">
        <div className="detail-inner">
          <div>
            <p className="section-label">Driving</p>
            <h2 className="section-heading">
              Licenses, roads, and whether to bother with a car.
            </h2>
            <p className="detail-intro">
              Driving in the Philippines is legal and straightforward to set up
              as a foreigner. Whether it is worth it depends heavily on where
              you live. In Metro Manila, most long-term expats eventually decide
              the answer is no.
            </p>
          </div>
          <div className="detail-rows">
            {driving.details.map((d) => (
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
              Apps, fares, and regulations change. Check before you travel.
            </h2>
          </div>
          <p className="disclaimer-body">
            <strong>All information on this page is for general guidance only.</strong>{" "}
            App availability, fare structures, and route coverage for Grab, Maxim,
            Angkas, and other services change frequently and vary by city. Always
            check the app itself for current pricing and service areas — what operates
            in Cebu may not operate in Davao or Metro Manila.
            <br /><br />
            Domestic airline routes, ferry schedules, and bus timetables are subject
            to change, particularly during typhoon season (June–November) when services
            are regularly suspended or rerouted at short notice. Check with your
            carrier before travel and build in flexibility during wet season.
            <br /><br />
            LTO licensing rules, UVVRP (number coding) schedules, and public transit
            fares are set by government agencies and are updated periodically. Verify
            current requirements with the LTO directly before converting a foreign
            license. This page does not constitute legal or regulatory advice.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

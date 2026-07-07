import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Getting Around the Philippines — Expat Guide to Transport 2026",
  description:
    "How to get around the Philippines as an expat. Grab, jeepneys, ferries, domestic flights, and practical tips for daily transport in Cebu, Manila, and beyond.",
  alternates: { canonical: "https://expatcompassph.com/transportation" },
};

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
          color: rgba(248,246,241,0.78);
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
          color: #F8F6F1;
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
        .detail-intro-light { color: #F8F6F1; }

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
        .detail-row-body-light { color: #F8F6F1; }

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

        /* ── STEVE'S NOTE ── */
        .sn-section {
          background: #0D1E30;
          border-top: 3px solid #C9A84C;
          padding: 80px 48px;
          position: relative;
          overflow: hidden;
        }
        .sn-section::before {
          content: 'S';
          font-family: 'Playfair Display', serif;
          font-size: 320px;
          font-weight: 700;
          color: rgba(201,168,76,0.05);
          position: absolute;
          right: -10px;
          top: -60px;
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }
        .sn-inner {
          max-width: 860px;
          position: relative;
          z-index: 1;
        }
        .sn-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 28px;
        }
        .sn-monogram {
          width: 52px;
          height: 52px;
          background: #C9A84C;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #0B1F3A;
          flex-shrink: 0;
        }
        .sn-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #F8F6F1;
          line-height: 1.1;
        }
        .sn-tag {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-top: 4px;
        }
        .sn-rule {
          height: 1px;
          background: rgba(201,168,76,0.2);
          margin-bottom: 32px;
        }
        .sn-body {
          font-size: 0.95rem;
          font-weight: 300;
          line-height: 1.85;
          color: rgba(248,246,241,0.82);
        }
        .sn-body p + p { margin-top: 14px; }
        .sn-verified {
          margin-top: 36px;
          padding-top: 20px;
          border-top: 1px solid rgba(201,168,76,0.2);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #C9A84C;
        }
        .sn-verified::before { content: '✓'; }
        @media (max-width: 900px) {
          .sn-section { padding: 56px 24px; }
        }

        /* ── LTO SECTION ── */
        .lto-body { font-size: 0.93rem; font-weight: 300; line-height: 1.85; color: #4A5868; margin-bottom: 16px; max-width: 760px; }
        .lto-sub { font-family: 'Playfair Display', serif; font-size: clamp(1.05rem,1.8vw,1.28rem); font-weight: 700; color: #0B1F3A; margin: 36px 0 12px; padding-top: 32px; border-top: 1px solid rgba(11,31,58,0.08); max-width: 760px; }
        .lto-sub-first { border-top: none; padding-top: 0; margin-top: 0; }
        .lto-list { list-style: none; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 9px; max-width: 760px; }
        .lto-li { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #4A5868; padding-left: 22px; position: relative; }
        .lto-li::before { content: '—'; position: absolute; left: 0; color: #C9A84C; font-weight: 600; }
        .lto-nlist { list-style: none; counter-reset: ltoctr; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 10px; max-width: 760px; }
        .lto-ni { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #4A5868; padding-left: 30px; position: relative; counter-increment: ltoctr; }
        .lto-ni::before { content: counter(ltoctr) '.'; position: absolute; left: 0; color: #C9A84C; font-size: 0.78rem; font-weight: 700; padding-top: 2px; }
        .lto-alert { background: rgba(201,168,76,0.06); border: 1px solid rgba(201,168,76,0.3); border-left: 4px solid #C9A84C; padding: 22px 26px; margin: 24px 0; max-width: 760px; }
        .lto-alert-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
        .lto-alert-body { font-size: 0.9rem; font-weight: 300; line-height: 1.82; color: #4A5868; }
        .lto-body-light { color: #F8F6F1; }
        .lto-sub-light { color: #F8F6F1; border-top-color: rgba(248,246,241,0.1); }
        .lto-li-light { color: #F8F6F1; }

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

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .nav { padding: 20px 24px; }
          .nav-links { display: none; }
          .page-hero { padding: 52px 24px 72px; }
          .section { padding: 72px 24px; }
          .card-grid { grid-template-columns: repeat(2, 1fr); }
          .cs-grid { grid-template-columns: repeat(2, 1fr); }
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

      {/* STEVE'S NOTE */}
      <section className="sn-section">
        <div className="sn-inner">
          <div className="sn-header">
            <div className="sn-monogram">S</div>
            <div>
              <p className="sn-name">Steve&rsquo;s Note</p>
              <p className="sn-tag">First-hand experience · Cebu, Philippines</p>
            </div>
          </div>
          <div className="sn-rule" />
          <div className="sn-body">
            <p>Grab and Maxim have been my go-to ride apps in the Philippines. Both show you the fare upfront before you confirm — no surprises. Taxis exist and can be cheaper, but if you don&rsquo;t know the city, some drivers will take the scenic route. Stick to the apps until you know your way around.</p>
            <p>One tip worth knowing: Maxim is typically about half the price of Grab. That said, Grab tends to be more available and more reliable during busy periods. My approach — use Maxim when I&rsquo;m not in a rush, use Grab when I need to be somewhere on time.</p>
          </div>
          <p className="sn-verified">Last Verified: June 2026 · Cebu, Philippines</p>
        </div>
      </section>

      {/* LTO LICENSE CONVERSION */}
      <section className="section section-light" id="lto-conversion">
        <div style={{maxWidth: '860px'}}>
          <p className="section-label">Driver License</p>
          <h2 className="section-heading">Converting Your Foreign Driver License to a Philippine License</h2>
          <p className="lto-body">Foreigners can drive in the Philippines on a valid foreign driver license for 90 days from their date of arrival. After 90 days, driving on a foreign license is illegal. Most long-term expats convert their foreign license to a Philippine license through the Land Transportation Office (LTO).</p>

          <div className="lto-alert">
            <p className="lto-alert-label">Key Fact — Convert Before Your License Expires</p>
            <p className="lto-alert-body">If your foreign license is currently valid at the time of conversion, no written or practical driving exam is required — the conversion is treated as an administrative process. If your foreign license has expired, you are treated as a new applicant and must pass both the theoretical exam and the practical driving test. Convert before your license expires to avoid the exam requirement.</p>
          </div>

          <h3 className="lto-sub lto-sub-first">Required Documents</h3>
          <ul className="lto-list">
            <li className="lto-li">Valid foreign driver license — original and one photocopy. If not in English, an official English translation from your embassy is required.</li>
            <li className="lto-li">Passport — original and photocopy of bio page, valid visa, and latest arrival stamp.</li>
            <li className="lto-li">Medical certificate from an LTO-accredited clinic — approximately 200 to 500 pesos for basic vision and physical fitness examination.</li>
            <li className="lto-li">Accomplished Application for Permits and Licenses (APL) form — available at the LTO office.</li>
            <li className="lto-li">ACR I-Card if you hold one — some LTO branches require this as proof of long-stay status.</li>
          </ul>

          <h3 className="lto-sub">LTO Conversion Process</h3>
          <ol className="lto-nlist">
            <li className="lto-ni">Go to a major LTO Licensing Center — not all branches process foreign license conversions.</li>
            <li className="lto-ni">Get a queue number and checklist at the customer service counter.</li>
            <li className="lto-ni">Complete the APL application form.</li>
            <li className="lto-ni">Submit documents at the evaluator counter.</li>
            <li className="lto-ni">Undergo biometrics — photo, digital signature, and fingerprints.</li>
            <li className="lto-ni">Pay fees — 585 pesos for Non-Professional license.</li>
            <li className="lto-ni">Processing takes approximately 30 days and some offices require you to return to collect the physical card.</li>
          </ol>

          <h3 className="lto-sub">Practical Tips</h3>
          <ul className="lto-list">
            <li className="lto-li">Bring at least 5 photocopies of every document.</li>
            <li className="lto-li">Arrive early.</li>
            <li className="lto-li">Avoid fixers — people outside LTO offices offering to speed up your application for a fee are operating illegally.</li>
            <li className="lto-li">The Lapu-Lapu City LTO serves Mactan Island residents.</li>
          </ul>

          <h3 className="lto-sub">Motorcycle Note</h3>
          <p className="lto-body">A standard car license conversion covers passenger vehicles. If you want to ride a motorcycle or scooter, confirm requirements at your specific LTO branch as this may require additional steps.</p>
        </div>
      </section>

      {/* JUMP NAV — NEW SECTIONS */}
      <section className="section section-light" style={{paddingTop:'40px', paddingBottom:'48px'}}>
        <div style={{maxWidth: '860px'}}>
          <p className="cs-label">More Transportation Guides</p>
          <div className="cs-grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
            <a href="#motorcycle-purchase" className="cs-card">
              <p className="cs-city">Motorcycle Purchase Guide</p>
              <p className="cs-tagline">Honda ADV 160, LTO transfer, CTPL insurance</p>
            </a>
            <a href="#driving-philippines" className="cs-card">
              <p className="cs-city">Driving in the Philippines</p>
              <p className="cs-tagline">What to expect on Philippine roads</p>
            </a>
          </div>
        </div>
      </section>

      {/* MOTORCYCLE PURCHASE */}
      <section className="section section-light" id="motorcycle-purchase">
        <div style={{maxWidth: '860px'}}>
          <p className="section-label">Two-Wheel Transport</p>
          <h2 className="section-heading">Buying a Motorcycle in the Philippines — Complete Guide</h2>
          <p className="lto-body">A motorcycle is the most practical personal transport option for many expats in Cebu and the provinces. Lower purchase price, minimal fuel cost, no parking problems, and the ability to filter through traffic that would stop a car. Here is what you need to know before buying.</p>

          <div className="lto-alert">
            <p className="lto-alert-label">Most Recommended for Expats — Honda ADV 160</p>
            <p className="lto-alert-body">The Honda ADV 160 is consistently the top recommendation among long-term expats in Cebu. Adventure scooter design with 160cc engine, automatic transmission, good ground clearance for rough Philippine roads, underseat storage, ABS, and an excellent dealer service network throughout the Philippines. No clutch or manual shifting required — accessible to riders with limited motorcycle experience. Approximate new price: PHP 130,000 to 160,000 from an authorized Honda dealer. Other solid choices: Honda Click 125i or 160i (city commuter, lighter and cheaper), Yamaha NMAX 155 (performance-oriented, popular with daily commuters), Honda PCX 160 (comfort-focused, larger body).</p>
          </div>

          <h3 className="lto-sub lto-sub-first">Buying New — From an Authorized Dealer</h3>
          <p className="lto-body">Buying new from an authorized dealer is the cleanest and most straightforward option. The dealer handles all LTO paperwork, the Certificate of Registration (CR), the Official Receipt (OR), and initial registration. CTPL insurance (see below) is typically bundled with purchase.</p>
          <ul className="lto-list">
            <li className="lto-li">Bring your passport and ACR I-Card if you hold one. Foreigners can legally own and register motorcycles in the Philippines — no citizenship restriction.</li>
            <li className="lto-li">Pay the purchase price plus registration fees. Dealer submits LTO documents.</li>
            <li className="lto-li">CR and OR are your most important ownership documents — keep them in a safe place, not in the motorcycle. You will need them for every registration renewal and any transfer of ownership.</li>
          </ul>

          <h3 className="lto-sub">Buying Second-Hand — The 20-Working-Day Rule</h3>
          <p className="lto-body">Second-hand motorcycles are widely available at significantly lower prices. However the LTO transfer of ownership process has a practical reality every buyer must understand: the transfer takes 20 working days from submission of documents to completion. During this period, the motorcycle is in a registration limbo. Plan accordingly — do not buy a second-hand motorcycle if you need it registered and road-legal by a specific date.</p>

          <div className="lto-alert">
            <p className="lto-alert-label">Second-Hand Purchase Checklist — Verify Before You Buy</p>
            <p className="lto-alert-body">Verify that the CR and OR are in the seller's name and match the motorcycle engine and chassis numbers. Request a PNP-HPG (Highway Patrol Group) clearance to confirm the unit is not stolen — the seller should facilitate this or it can be processed at Camp Crame or accredited HPG offices. A clean HPG clearance is required for LTO transfer of ownership. Never pay full price before verifying HPG clearance and confirming the documents are clean. Skipping this step has caught out more than a few expats who ended up with paperwork problems that were expensive to resolve.</p>
          </div>

          <h3 className="lto-sub">LTO Transfer of Ownership — Documents Required</h3>
          <ul className="lto-list">
            <li className="lto-li">Original Certificate of Registration (CR) endorsed/signed by the seller.</li>
            <li className="lto-li">Original Official Receipt (OR) — proof of taxes paid.</li>
            <li className="lto-li">Notarized Deed of Sale — have this prepared by a notary public; cost approximately 200 to 500 pesos.</li>
            <li className="lto-li">PNP-HPG clearance certificate.</li>
            <li className="lto-li">Valid CTPL insurance policy.</li>
            <li className="lto-li">Your passport and ACR I-Card as the buyer.</li>
            <li className="lto-li">Transfer fee — approximately 300 to 600 pesos depending on motorcycle type.</li>
          </ul>

          <h3 className="lto-sub">CTPL — Compulsory Third Party Liability Insurance</h3>
          <p className="lto-body">CTPL insurance is required by law for all registered motor vehicles in the Philippines. Without a valid CTPL policy, you cannot register a motorcycle or renew its registration. CTPL covers third-party bodily injury and death — it does not cover damage to your own motorcycle or property.</p>
          <ul className="lto-list">
            <li className="lto-li">Annual CTPL cost: approximately PHP 500 to 700 for a motorcycle.</li>
            <li className="lto-li">Typically bundled with new motorcycle purchase at the dealer.</li>
            <li className="lto-li">Available at LTO offices, insurance offices, and online through CTPL providers.</li>
            <li className="lto-li">Comprehensive insurance is separate from CTPL and optional — strongly recommended; covers theft, accidents, and third-party property damage.</li>
          </ul>

          <h3 className="lto-sub">RA 12209 — Motorcycle Plate Requirements</h3>
          <p className="lto-body">Republic Act 12209, the Motorcycles Under Road Safety Act (MUSRA), introduced requirements for larger, more visible motorcycle license plates — both front and rear — to improve identification and road safety. Ensure any motorcycle you purchase (new or second-hand) has compliant plates per current LTO standards. Non-compliant plates are a citable traffic offense. When buying second-hand, verify the current plates are LTO-compliant before completing the purchase.</p>
        </div>
      </section>

      {/* STEVE'S NOTE — ADV 160 PURCHASE */}
      <section className="sn-section">
        <div className="sn-inner">
          <div className="sn-header">
            <div className="sn-monogram">S</div>
            <div>
              <p className="sn-name">Steve&rsquo;s Note &mdash; I Just Bought My First Philippine Vehicle</p>
              <p className="sn-tag">REAL PURCHASE EXPERIENCE &middot; MACTAN ISLAND CEBU</p>
            </div>
          </div>
          <div className="sn-rule" />
          <div className="sn-body">
            <p>I just bought my first vehicle in the Philippines and I want to share exactly what it cost and how the process worked so you have real numbers to plan with.</p>
            <p>The bike: 2024 Honda ADV 160 ABS TCS Keyless — the top specification model with ABS brakes, traction control, and keyless ignition. 17,000 kilometers on the odometer. All original stock, engine never opened, complete OR/CR, 2027 registration already paid, original plates, no LTO violations or alarms.</p>
            <p>The numbers: Listed at PHP 120,000. Negotiated to PHP 115,000. I hired a local attorney to handle the entire transaction — verifying the documents, closing the open deed of sale, handling the LTO transfer paperwork, and ensuring everything was done correctly. Attorney fee: PHP 13,000. Total all-in cost: PHP 128,000.</p>
            <p>Why I used an attorney: The listing had an open deed of sale — a common but risky situation where the buyer information is left blank. An open deed creates legal uncertainty and the LTO does not accept them. My attorney closed the deed properly, verified the OR/CR numbers matched the physical bike, handled the PNP-HPG clearance, and filed all the LTO transfer paperwork within the required 20-working-day window. For PHP 13,000 I got complete peace of mind that the transfer was done correctly. I would do it again.</p>
            <p>My attorney recommendation for Mactan Island expats: Atty. Al M. Limalima, Lawyer and Notary Public. Office on M.L. Quezon Highway, Lapu-Lapu City, in front of the Hall of Justice. Contact: 0977-849-7678 or 0922-820-0382. He handled my transaction efficiently and professionally.</p>
            <p>Pro tip: Have the seller meet you at Lapu-Lapu City Hall. Everything you need for the transaction is right there — the attorney office is steps away on M.L. Quezon Highway in front of the Hall of Justice, notary services are on site, photocopying is available, and there is a scooter shop directly behind City Hall where we bought helmets immediately after completing the transaction. One location, one trip, done.</p>
            <p>The ride: The ADV 160 is everything expats say it is. Comfortable, powerful enough for Cebu roads, smooth on the Mactan highways, and practical for two-up riding. The keyless ignition and ABS are worth paying for. After spending years paying PHP 600 roundtrip for a dart tournament 10 minutes away by scooter, owning my own transportation feels like a genuine quality of life upgrade. No more waiting 30 minutes for a Grab driver. No more no change problem. No more surge pricing.</p>
          </div>
          <p className="sn-verified">LAST UPDATED JULY 2026 &middot; PUNTA ENGANO MACTAN ISLAND CEBU</p>
        </div>
      </section>

      {/* DRIVING IN THE PHILIPPINES */}
      <section className="section section-dark" id="driving-philippines">
        <div style={{maxWidth: '860px'}}>
          <p className="section-label">On Philippine Roads</p>
          <h2 className="section-heading section-heading-light">Driving in the Philippines — What to Expect</h2>
          <p className="lto-body lto-body-light">Philippine road culture is significantly different from Western driving norms. Understanding it before you get behind the wheel makes the experience less stressful and considerably safer.</p>

          <h3 className="lto-sub lto-sub-first lto-sub-light">Traffic Culture — The Unwritten Rules</h3>
          <ul className="lto-list">
            <li className="lto-li lto-li-light">Beeping is communication, not aggression. A short beep means "I am here" or "I am overtaking." A long beep means "move aside." Do not take horn use personally — it is simply part of road communication.</li>
            <li className="lto-li lto-li-light">Lane discipline is loose. Vehicles drift between lanes, overtaking from the left or right is common, and lane markings are treated as suggestions. Expect it and drive defensively.</li>
            <li className="lto-li lto-li-light">Flashing headlights has multiple meanings depending on context — sometimes "I am coming through," sometimes "I am giving way to you." Read the situation, not just the signal.</li>
            <li className="lto-li lto-li-light">Right of way at intersections is often determined informally by vehicle size, driver confidence, and local convention rather than strict traffic rules. Be cautious even when you technically have right of way.</li>
            <li className="lto-li lto-li-light">Vehicles stop anywhere — for passengers, for food, for conversation. Always scan ahead for sudden stops.</li>
          </ul>

          <h3 className="lto-sub lto-sub-light">Night Driving</h3>
          <p className="lto-body lto-body-light">Night driving outside cities carries significant additional hazards. Motorcycles with broken or absent headlights are common. Livestock on the road is a genuine risk in provincial areas. Road surfaces may be poorly lit, unmarked, or deteriorate without warning. If you are not familiar with a route, avoid driving it after dark until you know what to expect. In Cebu City and Mactan, night driving is generally manageable but the same defensive principles apply.</p>

          <h3 className="lto-sub lto-sub-light">Wet Season and Flooding</h3>
          <p className="lto-body lto-body-light">The wet season from June to November brings heavy rainfall and flooding to many Cebu and Metro Manila roads. Learn which roads in your area flood and have alternate routes planned. Never drive through water of unknown depth — floodwater conceals road damage, open manholes, and can stall your vehicle quickly. Check weather apps and local Facebook groups before setting out in heavy rain.</p>

          <h3 className="lto-sub lto-sub-light">Traffic Violations and Fines</h3>
          <p className="lto-body lto-body-light">Traffic violations carry official fines. If stopped, ask for the official ticket and pay through the proper channel — get a receipt. Do not pay cash directly to officers without an official receipt. Speed limits: expressways 100 kph, national highways 80 kph, school and residential zones 30 to 40 kph. Number coding (UVVRP) in Metro Manila bans vehicles with certain plate number endings on specific weekdays from 7 am to 8 pm.</p>

          <h3 className="lto-sub lto-sub-light">Fuel and Practical Costs</h3>
          <ul className="lto-list">
            <li className="lto-li lto-li-light">Petrol: unleaded RON 91 or 95 available at Petron, Shell, Caltex, and Seaoil stations throughout the country. As of 2026, approximately PHP 70 to 100 per liter following fuel price increases.</li>
            <li className="lto-li lto-li-light">Parking at malls: approximately PHP 40 to 60 for the first hour, PHP 25 to 40 for each additional hour.</li>
            <li className="lto-li lto-li-light">Dashcam: strongly recommended. It is standard practice among local drivers and invaluable in the event of an accident or insurance dispute.</li>
            <li className="lto-li lto-li-light">Comprehensive vehicle insurance beyond mandatory CTPL: approximately PHP 10,000 to 25,000 per year depending on vehicle value. Shop through reputable Philippine insurance brokers.</li>
          </ul>

          <div className="lto-alert">
            <p className="lto-alert-label">Should You Drive in the Philippines?</p>
            <p className="lto-alert-body">Whether driving makes sense depends entirely on where you live. In Metro Manila, most long-term expats eventually conclude the answer is no — traffic is genuinely severe, parking is costly, and Grab and Maxim cover the need competently. In Cebu, especially outside the city core, having a car or motorcycle is genuinely convenient and the traffic, while real, is far more manageable. In provincial areas a vehicle is often essential. If you are new to the Philippines, consider spending your first few months using Grab and Maxim before deciding whether to buy. You will learn the roads without the pressure of ownership, and your decision will be better informed by actual experience.</p>
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

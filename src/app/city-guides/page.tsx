import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best Cities in the Philippines for Expats 2026 — Where to Live Guide",
  description:
    "In-depth profiles of the best cities for expats in the Philippines — Cebu, Manila, Davao, Dumaguete, and more. Costs, lifestyle, healthcare, and honest assessments.",
  alternates: { canonical: "https://expatcompassph.com/city-guides" },
};

const overview = [
  {
    label: "Metro Manila",
    subtitle: "The capital region",
    description:
      "The most international city in the Philippines — the best hospitals, dining, and career opportunities, alongside the worst traffic and the highest cost of living.",
    href: "#manila",
  },
  {
    label: "Cebu City",
    subtitle: "The Queen City of the South",
    description:
      "A genuine alternative to Manila: international airport, strong expat community, beach access from the city, and costs 25–40% lower than the capital.",
    href: "#cebu",
  },
  {
    label: "Davao City",
    subtitle: "Mindanao's safe hub",
    description:
      "One of Southeast Asia's largest cities by land area. Consistently ranked among the safest cities in the Philippines, affordable, and refreshingly free of Manila-scale traffic.",
    href: "#davao",
  },
  {
    label: "Smaller Cities",
    subtitle: "Dumaguete, Baguio, Iloilo & more",
    description:
      "Provincial cities with established expat communities, dramatically lower costs, and a slower pace — often the right choice for retirees and remote workers.",
    href: "#smaller",
  },
];

const manila = [
  {
    label: "Character",
    body: "Metro Manila is a sprawling megalopolis of 23 million people across 17 cities and municipalities. It is the Philippines in concentrated form: chaotic, vibrant, expensive by local standards, and genuinely world-class in pockets. The gap between a well-chosen neighbourhood and a poorly chosen one is larger here than anywhere else in the country.",
  },
  {
    label: "BGC",
    body: "Bonifacio Global City in Taguig is the top choice for most arriving expats. It is the most planned, cleanest, and safest district in Metro Manila — walkable, well-lit, with underground utilities, wide pavements, and a concentration of international restaurants, gyms, malls, and co-working spaces. It is also the most expensive. A 1-bedroom condo runs PHP 35,000–80,000 per month.",
  },
  {
    label: "Makati & Rockwell",
    body: "Makati's CBD and Salcedo/Legazpi Village are the established expat hub — denser and more urban than BGC, with a livelier street scene. Rockwell Center in Makati is a smaller, quieter enclave popular with professionals and retirees. Rents are broadly similar to BGC. Both areas have excellent restaurant and bar scenes and are well-served by taxis and Grab.",
  },
  {
    label: "Ortigas & QC",
    body: "Ortigas Center (Mandaluyong/Pasig) is a major business district with lower rents than Makati or BGC — PHP 20,000–40,000 for a 1-bedroom — and good mall infrastructure. Quezon City is the largest city in Metro Manila by population; it offers a more local feel, lower costs, proximity to the University of the Philippines, and a growing arts and food scene. Less polished than the south, but significantly cheaper.",
  },
  {
    label: "Healthcare",
    body: "Metro Manila has the best hospitals in the Philippines. St. Luke's (BGC and QC), Makati Medical Center, Asian Hospital (Muntinlupa), The Medical City (Pasig), and Cardinal Santos (San Juan) are all within 30–45 minutes of most expat neighbourhoods in normal traffic. A serious medical situation is as well-managed here as in most developed countries.",
  },
  {
    label: "Getting around",
    body: "Traffic on EDSA and connecting roads is severe during weekday peak hours and gets worse in rain. Grab and Maxim are the practical day-to-day solution for most expats. The LRT and MRT rail lines skip the traffic entirely and are fast outside rush hours. Many BGC and Makati residents walk within their own neighbourhood and Grab everywhere else. Owning a car in Metro Manila is a lifestyle choice, not a necessity.",
  },
  {
    label: "Best for",
    body: "Professionals working locally or regionally, expats who want maximum international amenity, people who need access to specialist healthcare, and anyone whose work or social life is centred on the capital. Less suited to those seeking a relaxed pace, a lower budget, or proximity to nature.",
  },
];

const cebu = [
  {
    label: "Character",
    body: "Cebu City and the surrounding Metro Cebu is a genuine second city — not a smaller copy of Manila, but a distinct urban centre with its own culture, food scene, and rhythm. It sits at the heart of the Visayas, offers some of the best diving in the world within an hour's reach, and is far more manageable than the capital while still offering most of what expats need.",
  },
  {
    label: "IT Park & Lahug",
    body: "Cebu IT Park in Lahug is the city's primary expat and professional hub — a compact, walkable business and lifestyle district with international restaurants, gyms, co-working spaces, and consistent 24-hour energy. Rents for a 1-bedroom condo: PHP 18,000–40,000. Immediately north of IT Park, Lahug and Nivel Hills are quieter residential areas popular with longer-term expats.",
  },
  {
    label: "Mactan Island",
    body: "Mactan is connected to mainland Cebu by two bridges and sits next to the international airport. It hosts most of Cebu's beach resorts and has a significant population of retiree expats who prioritise beach proximity over city access. Lapu-Lapu City on Mactan is less urban than Cebu proper, quieter, and slightly lower cost. The trade-off is a longer commute to city amenities.",
  },
  {
    label: "Typical rent",
    body: "A furnished 1-bedroom condo in a modern building in IT Park or the Ayala area: PHP 18,000–38,000 per month. A similar unit in a mid-tier building in Lahug or Mandaue: PHP 12,000–22,000. Mactan beachfront properties with resort amenities: PHP 25,000–55,000. All figures are significantly below comparable Manila districts.",
  },
  {
    label: "Healthcare",
    body: "Chong Hua Hospital and Cebu Doctors' University Hospital are the main referral centres for serious cases in the Visayas. Both are well-equipped and competent for most conditions. For highly complex procedures, some patients prefer to travel to Manila — a one-hour flight. Routine care, specialist consultations, and dental work are well-served in Cebu.",
  },
  {
    label: "Getting there",
    body: "Mactan-Cebu International Airport has direct flights to Manila (multiple daily, 1 hour 10 minutes), and direct international connections to Hong Kong, Singapore, Doha, Tokyo, Seoul, Osaka, and other Asian hubs. It is the best-connected airport in the Philippines outside Manila — a significant practical advantage for expats who travel frequently.",
  },
  {
    label: "Best for",
    body: "Remote workers and digital nomads, retirees who want beach access without full provincial isolation, those priced out of Manila who still want a genuine city, and divers or outdoor enthusiasts. Cebu is the most well-rounded choice for most expats who do not have a specific reason to be in Manila.",
  },
];

const davao = [
  {
    label: "Character",
    body: "Davao City is one of Southeast Asia's largest cities by land area, home to around 1.8 million people, and the undisputed economic centre of Mindanao. It is known for three things among expats: genuine safety, affordable living, and exceptional tropical fruit. The city has a more relaxed, provincial character than either Manila or Cebu despite its size.",
  },
  {
    label: "Safety",
    body: "Davao has a reputation — largely deserved — as one of the Philippines' safest cities. Crime rates are low, the streets are orderly, and expats living there consistently report feeling comfortable walking at night in central areas. It should be noted that Mindanao as a region has historically had security concerns in specific remote provinces; Davao City itself is distinct from these areas and has not experienced significant urban security incidents for many years.",
  },
  {
    label: "Neighbourhoods",
    body: "Poblacion (the downtown core), the NCCC Mall and SM Lanang areas in Lanang, and the Matina district are the primary expat-friendly zones. Lanang in particular — along the bay — is a growing upscale corridor with new condo developments, international restaurants, and mall infrastructure. Damosa Gateway is another newer commercial node. The city is spread out; a motorcycle or car is useful.",
  },
  {
    label: "Typical rent",
    body: "A furnished 1-bedroom condo in a modern building in Lanang or near SM Davao: PHP 12,000–28,000 per month. Older or more basic units in Poblacion or Matina: PHP 7,000–15,000. Davao is noticeably more affordable than Cebu and dramatically more affordable than Manila for equivalent quality.",
  },
  {
    label: "Healthcare",
    body: "Davao Doctors Hospital, Brokenshire Hospital, and Southern Philippines Medical Center (government) are the main facilities. Both private hospitals handle most routine and specialist needs competently. For complex cases requiring subspecialty care, Cebu or Manila is the practical referral destination. Davao is sufficiently served for everyday and moderate healthcare needs.",
  },
  {
    label: "Getting there",
    body: "Francisco Bangoy International Airport (also called Francisco Bangoy or FBIA) has multiple daily flights to Manila (1 hour 30 minutes) on Cebu Pacific, Philippine Airlines, and AirAsia. Direct international connections are limited — Cotabato is closer for some Mindanao points, but Davao is the main international entry point for the island. Connections to Cebu are also available.",
  },
  {
    label: "Best for",
    body: "Retirees who prioritise safety and affordability over city amenities, those with a specific connection to Mindanao, and expats who find both Manila and Cebu too busy or expensive. Less suited to those who need frequent international travel (limited direct connections), specialist healthcare, or a large established expat social scene.",
  },
];

const smallerCities = [
  {
    name: "Dumaguete",
    province: "Negros Oriental",
    tagline: "The City of Gentle People",
    character:
      "A small university city on the eastern coast of Negros Oriental, Dumaguete is one of the most popular retirement destinations for expats in the Philippines. The expat community is well-established, English fluency is high, and the pace of life is genuinely unhurried. Apo Island — one of the best dive sites in the world — is a 30-minute boat ride away.",
    costLevel: "Very low — among the cheapest liveable cities for expats",
    typicalRent: "PHP 8,000–20,000 for a furnished 1-bedroom",
    bestFor: "Retirees, divers, and remote workers seeking maximum affordability and community",
    watchOut: "Limited specialist healthcare (Cebu for serious cases); can feel small quickly for those used to city life",
  },
  {
    name: "Baguio",
    province: "Benguet, Cordillera",
    tagline: "The Summer Capital of the Philippines",
    character:
      "Sitting at 1,500 metres above sea level in the Cordillera mountains, Baguio is the only Philippine city where you do not need air-conditioning. Average temperatures of 14–23°C year-round attract Filipinos escaping the heat and a community of expats who find the tropical lowlands oppressive. The city has a genuine arts scene, excellent coffee culture, and spectacular highland scenery.",
    costLevel: "Moderate — higher than provincial towns but well below Manila",
    typicalRent: "PHP 10,000–25,000 for a furnished 1-bedroom",
    bestFor: "Those who cannot tolerate tropical heat, outdoor enthusiasts, and those working remotely who want cooler highland living",
    watchOut: "Notorious traffic during Philippine holidays (one main road in/out); sits on an active fault line; no beach access",
  },
  {
    name: "Iloilo City",
    province: "Iloilo, Western Visayas",
    tagline: "The City of Love",
    character:
      "Iloilo is an underrated gem — a heritage city with well-preserved Spanish-era churches, a thriving food scene (La Paz batchoy, fresh seafood), and a rapidly growing economy driven by IT-BPO and academia. It is one of the cleanest and most liveable mid-sized cities in the country. Guimaras Island — famous for the sweetest mangoes in the Philippines — is a 15-minute ferry ride across the strait.",
    costLevel: "Low — comparable to Dumaguete with more city amenities",
    typicalRent: "PHP 10,000–25,000 for a furnished 1-bedroom",
    bestFor: "Expats who want a liveable mid-sized city with heritage character, good food, and lower costs than Cebu",
    watchOut: "Smaller expat community than Cebu or Davao; fewer international connections (via Manila or Cebu for most destinations)",
  },
  {
    name: "Bacolod",
    province: "Negros Occidental",
    tagline: "The City of Smiles",
    character:
      "Bacolod is the capital of Negros Occidental and the gateway to the sugar-producing heartland of the Philippines. It is best known for chicken inasal (the original, far better than the chain versions), the MassKara Festival in October, and a warmth in its residents that lives up to the city's nickname. A growing number of expats — particularly those married to Negrense partners — have settled here for the combination of affordability, friendliness, and increasingly good infrastructure.",
    costLevel: "Low — similar to Iloilo, below Cebu",
    typicalRent: "PHP 9,000–22,000 for a furnished 1-bedroom",
    bestFor: "Those with local family ties, retirees seeking affordability and a strong local culture, and anyone willing to trade expat infrastructure for a more genuine local experience",
    watchOut: "Smaller expat network; serious medical cases go to Cebu; fewer international dining and shopping options",
  },
];

export default function CityGuidesPage() {
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

        /* ── CITY DETAIL SECTIONS ── */
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

        /* ── SMALLER CITIES GRID ── */
        .city-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          background: #E8E4DC;
          margin-top: 0;
        }
        .city-card {
          background: #F8F6F1;
          padding: 44px 40px;
        }
        .city-card-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #0B1F3A;
          margin-bottom: 4px;
        }
        .city-card-province {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 6px;
        }
        .city-card-tagline {
          font-size: 0.82rem;
          font-style: italic;
          color: #8A9AAA;
          margin-bottom: 20px;
        }
        .city-card-body {
          font-size: 0.88rem;
          font-weight: 300;
          line-height: 1.75;
          color: #4A5868;
          margin-bottom: 24px;
        }
        .city-card-stats {
          display: flex;
          flex-direction: column;
          gap: 12px;
          border-top: 1px solid #E8E4DC;
          padding-top: 24px;
        }
        .city-stat {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 12px;
          align-items: start;
        }
        .city-stat-label {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #C9A84C;
          padding-top: 1px;
        }
        .city-stat-value {
          font-size: 0.82rem;
          font-weight: 300;
          line-height: 1.6;
          color: #4A5868;
        }

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

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .nav { padding: 20px 24px; }
          .nav-links { display: none; }
          .page-hero { padding: 52px 24px 72px; }
          .section { padding: 72px 24px; }
          .card-grid { grid-template-columns: repeat(2, 1fr); }
          .detail-inner { grid-template-columns: 1fr; gap: 40px; }
          .detail-row { grid-template-columns: 1fr; gap: 8px; }
          .city-grid { grid-template-columns: 1fr; }
          .city-card { padding: 36px 24px; }
          .city-stat { grid-template-columns: 1fr; gap: 4px; }
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
        <Nav active="/city-guides" />
        <div className="page-hero">
          <p className="page-eyebrow">City Guides</p>
          <h1 className="page-title">
            Choosing where<br />to live in the Philippines.
          </h1>
          <p className="page-sub">
            In-depth profiles of the cities where expats actually settle —
            their neighbourhoods, costs, healthcare, and honest assessments
            of who each one suits best.
          </p>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="section section-light" id="overview">
        <p className="section-label">The expat cities</p>
        <h2 className="section-heading">
          Where most expats end up, and why.
        </h2>
        <div className="card-grid">
          {overview.map((o) => (
            <a key={o.label} href={o.href} className="card">
              <div className="card-label">{o.label}</div>
              <p className="card-subtitle">{o.subtitle}</p>
              <p className="card-desc">{o.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* METRO MANILA */}
      <section className="section section-dark" id="manila">
        <div className="detail-inner">
          <div>
            <p className="section-label">Metro Manila</p>
            <h2 className="section-heading section-heading-light">
              The capital&rsquo;s best neighbourhoods for expats.
            </h2>
            <p className="detail-intro detail-intro-light">
              Metro Manila offers the most — the best hospitals, the most
              international restaurants, the widest career options, and the
              strongest connections to the rest of the world. It also demands
              the most: the highest costs, the worst traffic, and a density
              that takes adjustment. The right neighbourhood makes a decisive
              difference.
            </p>
          </div>
          <div className="detail-rows">
            {manila.map((d) => (
              <div key={d.label} className="detail-row detail-row-dark">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body detail-row-body-light">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEBU */}
      <section className="section section-light" id="cebu">
        <div className="detail-inner">
          <div>
            <p className="section-label">Cebu City</p>
            <h2 className="section-heading">
              The most well-rounded choice for most expats.
            </h2>
            <p className="detail-intro">
              Cebu consistently earns its reputation as the best all-round
              expat city in the Philippines. It offers a genuine urban life,
              real beach access, an international airport, and costs that are
              25–40% lower than Manila — without the compromises of full
              provincial living.
            </p>
          </div>
          <div className="detail-rows">
            {cebu.map((d) => (
              <div key={d.label} className="detail-row">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAVAO */}
      <section className="section section-dark" id="davao">
        <div className="detail-inner">
          <div>
            <p className="section-label">Davao City</p>
            <h2 className="section-heading section-heading-light">
              Safe, affordable, and underrated.
            </h2>
            <p className="detail-intro detail-intro-light">
              Davao does not get the attention it deserves in expat circles.
              It is one of the largest cities in Southeast Asia, genuinely
              safe, significantly more affordable than Cebu or Manila, and
              surrounded by natural attractions. Those who live there tend
              to stay.
            </p>
          </div>
          <div className="detail-rows">
            {davao.map((d) => (
              <div key={d.label} className="detail-row detail-row-dark">
                <span className="detail-row-label">{d.label}</span>
                <p className="detail-row-body detail-row-body-light">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMALLER CITIES */}
      <section className="section section-light" id="smaller">
        <p className="section-label">Smaller cities</p>
        <h2 className="section-heading">
          Provincial cities with real expat communities.
        </h2>
        <div className="city-grid">
          {smallerCities.map((c) => (
            <div key={c.name} className="city-card">
              <p className="city-card-province">{c.province}</p>
              <h3 className="city-card-name">{c.name}</h3>
              <p className="city-card-tagline">&ldquo;{c.tagline}&rdquo;</p>
              <p className="city-card-body">{c.character}</p>
              <div className="city-card-stats">
                <div className="city-stat">
                  <span className="city-stat-label">Cost level</span>
                  <span className="city-stat-value">{c.costLevel}</span>
                </div>
                <div className="city-stat">
                  <span className="city-stat-label">Typical rent</span>
                  <span className="city-stat-value">{c.typicalRent}</span>
                </div>
                <div className="city-stat">
                  <span className="city-stat-label">Best for</span>
                  <span className="city-stat-value">{c.bestFor}</span>
                </div>
                <div className="city-stat">
                  <span className="city-stat-label">Watch out for</span>
                  <span className="city-stat-value">{c.watchOut}</span>
                </div>
              </div>
            </div>
          ))}
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
            <p>Beyond the waterfalls and beaches around Cebu, I&rsquo;ve visited Bohol and Siargao so far.</p>
            <p>Bohol is wonderful. Beautiful, not congested, mostly clean, and great for renting a scooter and exploring at your own pace. The Chocolate Hills are as surreal in person as they look in photos. The Tarsier sanctuary is worth the stop — those tiny primates are bizarre in the best way. The beaches down south in Panglao are excellent. The whole island felt more relaxed and tourist-oriented than Cebu. I&rsquo;d seriously consider Bohol for retirement. One caveat: if you need regular access to major hospitals or specialist care, the medical infrastructure isn&rsquo;t there yet. Factor that in.</p>
            <p>Siargao is known as the surfing capital of the Philippines, and it earns the title. It&rsquo;s also a full-on party island — lots of young expats living their best lives. I&rsquo;m not in that demographic anymore, but I had a genuinely good time. If you&rsquo;re in your 20s or 30s and want a low-cost, high-energy expat experience, Siargao deserves serious consideration. Just know what you&rsquo;re signing up for.</p>
          </div>
          <p className="sn-verified">Last Verified: June 2026 · Cebu, Philippines</p>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="section disclaimer-section">
        <div className="disclaimer-inner">
          <div>
            <div className="disclaimer-icon">!</div>
            <p className="section-label">Important note</p>
            <h2 className="section-heading">
              Conditions change. Visit before you commit.
            </h2>
          </div>
          <p className="disclaimer-body">
            <strong>All city profiles and rental figures on this page are for
            general orientation only</strong> and reflect conditions at the time
            of writing. Rental markets, neighbourhood character, and infrastructure
            quality change — sometimes quickly. A new development can transform a
            district; a new expressway can change commute times significantly.
            <br /><br />
            Rental figures are indicative ranges based on furnished condos in
            mid-to-upper-tier buildings. Actual prices vary by specific building,
            floor, furnishing level, lease term, and negotiation. Always verify
            current market rates by checking listings on Lamudi, Dot Property,
            or Facebook Marketplace, and ideally by viewing properties in person
            before signing anything.
            <br /><br />
            Security assessments reflect the general character of each city at
            the time of writing and are not a guarantee of personal safety.
            Check current travel advisories from your home government before
            travelling to any Philippine destination, particularly in Mindanao.
            This page does not constitute travel, legal, or financial advice.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

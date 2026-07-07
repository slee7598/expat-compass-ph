import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HomeSidebar from "@/components/HomeSidebar";
import Footer from "@/components/Footer";
import HeroSearch from "@/components/HeroSearch";
import NewsletterSignup from "@/components/NewsletterSignup";
import HeroRate from "@/components/HeroRate";

export const metadata: Metadata = {
  title: "Expat Compass PH — Your Guide to Living in the Philippines",
  description:
    "Practical, first-hand guidance on visas, housing, healthcare, banking, and daily life in the Philippines for expats and foreigners. Written by an American living in Cebu.",
  alternates: { canonical: "https://expatcompassph.com" },
};

const topics = [
  {
    label: "Visas & Residency",
    description:
      "SRRV, 13A, tourist extensions, and long-stay options explained clearly.",
    href: "/visas",
  },
  {
    label: "Marriage",
    description:
      "Legal requirements for marrying a Filipino citizen as a foreign national.",
    href: "/marriage",
  },
  {
    label: "Divorce Guide",
    description:
      "Divorcing a Filipino spouse involves two legal systems. US divorce process, Article 26 Philippine recognition, annulment, assets, and remarriage explained.",
    href: "/divorce-philippines",
  },
  {
    label: "Dating in the Philippines",
    description:
      "Dating apps, cultural realities, scam operations, legal risks, and the honest guide no other expat site will write.",
    href: "/dating-philippines",
  },
  {
    label: "US Benefits Abroad",
    description:
      "Social Security, Medicare, SSI, SSDI, and VA benefits for Americans living permanently in the Philippines. What continues and what stops.",
    href: "/retirement-benefits",
  },
  {
    label: "Cost of Living",
    description:
      "Realistic monthly budgets across cities, from frugal to comfortable.",
    href: "/cost-of-living",
  },
  {
    label: "Housing",
    description:
      "Renting vs. owning, condo laws for foreigners, and neighborhoods to know.",
    href: "/housing",
  },
  {
    label: "Healthcare",
    description:
      "Private hospitals, PhilHealth, international insurance, and medical costs.",
    href: "/healthcare",
  },
  {
    label: "Banking",
    description:
      "Opening accounts as a foreigner, remittances, and digital banking options.",
    href: "/banking",
  },
  {
    label: "Transportation",
    description:
      "Getting around by jeepney, Grab, ferry, and domestic flights.",
    href: "/transportation",
  },
  {
    label: "City Guides",
    description:
      "In-depth profiles of Metro Manila, Cebu, Davao, Dumaguete, and more.",
    href: "/city-guides",
  },
  {
    label: "Moving to the Philippines",
    description:
      "What to bring, what to leave behind, documents to prepare, and your first week setup checklist.",
    href: "/moving-to-philippines",
  },
  {
    label: "Arriving in the Philippines",
    description:
      "Step-by-step guide through immigration, customs, transport, and your first week.",
    href: "/arrival-guide",
  },
  {
    label: "Living on Income",
    description:
      "How expats fund their life — Social Security, remote work, Digital Nomad Visa, and receiving money efficiently.",
    href: "/income-abroad",
  },
];

const pillars = [
  {
    heading: "Accurate",
    body: "Every article is researched from official sources and updated regularly.",
  },
  {
    heading: "Practical",
    body: "We skip the filler and give you the steps, costs, and timelines you actually need.",
  },
  {
    heading: "Independent",
    body: "No paid placements, no affiliate bias — just honest guidance.",
  },
];

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background: #F8F6F1; color: #0B1F3A; }

        /* ── SIDEBAR — inside hero, scrolls away with it ── */
        .lsb {
          position: absolute;
          left: 0; top: 0;
          height: 100%;
          width: 200px;
          z-index: 10;
          display: flex;
          flex-direction: column;
        }
        .lsb-head {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 16px 18px;
          flex-shrink: 0;
          /* transparent — hero image shows through */
        }
        .lsb-logo-link { display: block; line-height: 0; }
        .lsb-logo-img {
          display: block;
          width: 110px; height: auto;
          border-radius: 12px;
          padding: 6px;
          background: white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        .lsb-nav {
          flex: 1;
          padding: 10px 0;
          overflow-y: auto;
          background: rgba(11,31,58,0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 2px solid #C9A84C;
          border-right: 1px solid rgba(201,168,76,0.15);
        }
        .lsb-link {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 0.71rem; font-weight: 500;
          letter-spacing: 0.09em; text-transform: uppercase;
          color: rgba(248,246,241,0.82);
          text-decoration: none;
          padding: 11px 18px 11px 20px;
          border-left: 2px solid transparent;
          transition: color 0.18s, background 0.18s, border-color 0.18s;
        }
        .lsb-link:hover {
          color: #C9A84C;
          background: rgba(201,168,76,0.06);
          border-left-color: rgba(201,168,76,0.3);
        }
        .lsb-link.active { color: #C9A84C; border-left-color: #C9A84C; }

        /* ── HERO ── */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        .hero-img {
          object-fit: cover;
          object-position: center 40%;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            rgba(11,31,58,0.5) 0%,
            rgba(11,31,58,0.68) 100%
          );
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 60px 64px 72px 260px;
          width: 100%;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 20px;
        }
        .hero-eyebrow::before {
          content: '';
          display: block;
          width: 28px; height: 1px;
          background: #C9A84C;
        }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          font-weight: 700; line-height: 1.12;
          color: #F8F6F1;
          margin-bottom: 24px;
        }
        .hero-sub {
          font-size: 1rem; font-weight: 300; line-height: 1.65;
          color: rgba(248,246,241,0.78);
          max-width: 500px;
          margin-bottom: 28px;
        }

        /* ── HERO SEARCH ── */
        .hs-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 10px;
        }
        .hs-wrap { max-width: 520px; }
        .hs-form {
          display: flex; gap: 0;
          background: rgba(248,246,241,0.96);
          border: 1px solid rgba(201,168,76,0.3);
        }
        .hs-input {
          flex: 1; padding: 16px 20px;
          background: transparent; border: none; outline: none;
          font-family: 'Inter', sans-serif; font-size: 0.9rem; color: #0B1F3A;
        }
        .hs-input::placeholder { color: rgba(11,31,58,0.4); }
        .hs-btn {
          padding: 16px 24px;
          background: #C9A84C; color: #0B1F3A;
          font-family: 'Inter', sans-serif; font-size: 0.76rem;
          font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          border: none; cursor: pointer; transition: background 0.2s;
          white-space: nowrap; flex-shrink: 0;
        }
        .hs-btn:hover:not(:disabled) { background: #b8943e; }
        .hs-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        .hs-dots { display: flex; gap: 5px; padding: 16px 0 0; }
        .hs-dots span {
          width: 6px; height: 6px; background: #C9A84C;
          border-radius: 50%; animation: hsPulse 1.2s ease-in-out infinite;
        }
        .hs-dots span:nth-child(2) { animation-delay: 0.2s; }
        .hs-dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes hsPulse {
          0%,80%,100% { opacity: 0.25; transform: scale(0.85); }
          40% { opacity: 1; transform: scale(1); }
        }
        .hs-error { margin-top: 12px; font-size: 0.82rem; color: rgba(248,246,241,0.82); font-weight: 300; }
        .hs-answer {
          margin-top: 16px; background: rgba(248,246,241,0.96);
          border-left: 3px solid #C9A84C; padding: 24px 28px;
          animation: hsFade 0.25s ease; max-height: 380px; overflow-y: auto;
        }
        @keyframes hsFade {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hs-answer-q { font-size: 0.68rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
        .hs-answer-text { font-size: 0.9rem; font-weight: 300; line-height: 1.8; color: #1A2D42; white-space: pre-wrap; }
        .hs-cursor { display: inline-block; width: 2px; height: 0.9em; background: #C9A84C; vertical-align: text-bottom; margin-left: 2px; animation: hsBlink 0.8s step-end infinite; }
        @keyframes hsBlink { 50% { opacity: 0; } }
        .hs-answer-text-md { white-space: normal; }
        .hs-answer-text-md p { margin-bottom: 10px; line-height: 1.8; }
        .hs-answer-text-md p:last-child { margin-bottom: 0; }
        .hs-answer-text-md h2 { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: #0B1F3A; margin: 16px 0 8px; padding-bottom: 5px; border-bottom: 1px solid rgba(201,168,76,0.3); }
        .hs-answer-text-md h3 { font-family: 'Playfair Display', serif; font-size: 0.92rem; font-weight: 700; color: #0B1F3A; margin: 12px 0 6px; }
        .hs-answer-text-md hr { border: none; border-top: 1px solid rgba(201,168,76,0.35); margin: 14px 0; }
        .hs-answer-text-md ul { margin: 8px 0 10px 16px; list-style: disc; }
        .hs-answer-text-md ol { margin: 8px 0 10px 16px; list-style: decimal; }
        .hs-answer-text-md li { margin-bottom: 4px; line-height: 1.65; }
        .hs-answer-text-md strong { font-weight: 600; color: #0B1F3A; }
        .hs-answer-text-md code { background: rgba(11,31,58,0.07); padding: 1px 4px; border-radius: 2px; font-size: 0.85em; font-family: 'Courier New', monospace; }
        .hs-answer-text-md .md-table-wrap { overflow-x: auto; margin: 10px 0; }
        .hs-answer-text-md .md-table-wrap table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
        .hs-answer-text-md .md-table-wrap th { background: #0B1F3A; color: #F8F6F1; padding: 7px 12px; text-align: left; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; white-space: nowrap; }
        .hs-answer-text-md .md-table-wrap td { padding: 7px 12px; border-bottom: 1px solid rgba(11,31,58,0.07); color: #1A2D42; vertical-align: top; line-height: 1.55; }
        .hs-answer-text-md .md-table-wrap tr:last-child td { border-bottom: none; }
        .hs-answer-text-md .md-table-wrap tr:nth-child(even) td { background: rgba(11,31,58,0.03); }
        .hs-followup { margin-top: 16px; border-top: 1px solid rgba(201,168,76,0.35); background: rgba(201,168,76,0.05); padding: 12px 16px; }
        .hs-followup-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #C9A84C; margin-bottom: 6px; }
        .hs-followup-text { font-size: 0.88rem; font-weight: 400; line-height: 1.65; color: #1A2D42; }
        .hs-answer-foot { margin-top: 16px; padding-top: 12px; border-top: 1px solid rgba(11,31,58,0.1); font-size: 0.68rem; color: #8A9AAA; }

        /* ── SECTIONS ── */
        .section { padding: 96px 48px; }
        .section-inner { max-width: 1100px; margin: 0 auto; }
        .section-label {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.7rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 16px;
        }
        .section-label::before { content: '◈'; font-size: 0.65rem; }
        .section-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 700;
          color: #0B1F3A; line-height: 1.2; margin-bottom: 56px; max-width: 520px;
        }
        .topics-section { background: #F8F6F1; }
        .topics-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 0; border-top: 1px solid #E8E4DC; border-left: 1px solid #E8E4DC;
        }
        .topic-card {
          padding: 36px 32px; border-right: 1px solid #E8E4DC; border-bottom: 1px solid #E8E4DC;
          text-decoration: none; display: block; transition: background 0.2s;
        }
        .topic-card:hover { background: #fff; }
        .topic-card-label {
          font-family: 'Playfair Display', serif; font-size: 1.08rem; font-weight: 600;
          color: #0B1F3A; margin-bottom: 10px;
          display: flex; align-items: flex-start; justify-content: space-between; gap: 8px;
        }
        .topic-card-label::after { content: '→'; font-family: 'Inter', sans-serif; font-size: 0.9rem; color: #C9A84C; flex-shrink: 0; margin-top: 2px; transition: transform 0.2s; }
        .topic-card:hover .topic-card-label::after { transform: translateX(4px); }
        .topic-card-desc { font-size: 0.85rem; font-weight: 400; line-height: 1.6; color: #5C6B7A; }
        .topic-card-inactive { cursor: default; opacity: 0.45; }
        .topic-card-inactive:hover { background: transparent; }
        .topic-card-inactive .topic-card-label::after { display: none; }

        /* ── NEWSLETTER ── */
        .newsletter-section { background: #0B1F3A; }
        .nl-wrap {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }
        .nl-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.7rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 16px;
        }
        .nl-eyebrow::before, .nl-eyebrow::after {
          content: '';
          display: block;
          width: 20px; height: 1px;
          background: #C9A84C;
        }
        .nl-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 2.8vw, 2.2rem);
          font-weight: 700; line-height: 1.2;
          color: #F8F6F1;
          margin-bottom: 16px;
        }
        .nl-sub {
          font-size: 0.95rem; font-weight: 300; line-height: 1.7;
          color: #F8F6F1;
          margin-bottom: 32px;
        }
        .nl-form {
          display: flex;
          gap: 0;
          max-width: 480px;
          margin: 0 auto 12px;
        }
        .nl-input {
          flex: 1;
          padding: 14px 18px;
          background: rgba(248,246,241,0.96);
          border: 1px solid rgba(201,168,76,0.3);
          border-right: none;
          outline: none;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: #0B1F3A;
        }
        .nl-input::placeholder { color: rgba(11,31,58,0.4); }
        .nl-btn {
          padding: 14px 24px;
          background: #C9A84C; color: #0B1F3A;
          font-family: 'Inter', sans-serif;
          font-size: 0.76rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          border: none; cursor: pointer;
          transition: background 0.2s;
          white-space: nowrap; flex-shrink: 0;
        }
        .nl-btn:hover:not(:disabled) { background: #b8943e; }
        .nl-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .nl-success {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          background: rgba(201,168,76,0.12);
          border: 1px solid rgba(201,168,76,0.3);
          color: #C9A84C;
          font-size: 0.9rem; font-weight: 500;
          margin-bottom: 12px;
        }
        .nl-check {
          font-size: 1.1rem; font-weight: 700;
        }
        .nl-error {
          font-size: 0.82rem;
          color: rgba(248,246,241,0.78);
          margin-top: 8px;
        }
        .nl-note {
          font-size: 0.72rem;
          color: rgba(248,246,241,0.6);
          margin-top: 12px;
        }

        .trust-section { background: #0B1F3A; }
        .trust-inner { display: grid; grid-template-columns: 1fr 2fr; gap: 80px; align-items: start; }
        .trust-intro .section-heading { color: #F8F6F1; margin-bottom: 0; }
        .trust-pillars { display: flex; flex-direction: column; gap: 40px; padding-top: 8px; }
        .pillar { display: grid; grid-template-columns: 1fr; gap: 8px; padding-bottom: 40px; border-bottom: 1px solid rgba(248,246,241,0.1); }
        .pillar:last-child { border-bottom: none; padding-bottom: 0; }
        .pillar-heading { font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 600; color: #C9A84C; }
        .pillar-body { font-size: 0.9rem; font-weight: 300; line-height: 1.7; color: #F8F6F1; }

        .footer { background: #0B1F3A; border-top: 1px solid rgba(248,246,241,0.08); padding: 40px 48px; display: flex; align-items: center; justify-content: space-between; }
        .footer-logo { font-family: 'Playfair Display', serif; font-size: 0.95rem; font-weight: 700; color: #F8F6F1; letter-spacing: 0.02em; }
        .footer-logo span { color: #C9A84C; }
        .footer-note { font-size: 0.75rem; color: rgba(248,246,241,0.6); }

        /* ── MOBILE NAV BAR (hero page) ── */
        .lsb-mob-bar {
          display: none;
          position: absolute;
          top: 0; left: 0; right: 0;
          z-index: 20;
          padding: 12px 20px;
          align-items: center;
          gap: 12px;
        }
        .lsb-mob-burger {
          background: none; border: none; cursor: pointer;
          padding: 4px;
          display: flex; flex-direction: column; gap: 5px;
          flex-shrink: 0;
        }
        .lsb-mob-burger span {
          display: block; width: 22px; height: 2px;
          background: #C9A84C; border-radius: 1px;
        }
        .lsb-mob-logo-link { display: block; line-height: 0; }
        .lsb-mob-logo-img {
          display: block; width: 70px; height: auto;
          border-radius: 12px;
          padding: 6px;
          background: white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        .lsb-mob-drawer {
          position: fixed;
          left: 0; top: 0;
          height: 100vh; width: 260px;
          z-index: 400;
          background: #0B1F3A;
          border-right: 2px solid #C9A84C;
          display: flex; flex-direction: column;
          transform: translateX(-100%);
          transition: transform 0.28s ease;
          overflow-y: auto;
        }
        .lsb-mob-drawer--open { transform: translateX(0); }
        .lsb-mob-close {
          align-self: flex-end;
          background: none; border: none;
          color: rgba(248,246,241,0.72); font-size: 1.8rem;
          cursor: pointer; padding: 18px 20px 10px;
          transition: color 0.15s;
        }
        .lsb-mob-close:hover { color: #F8F6F1; }
        .lsb-mob-nav { flex: 1; padding: 8px 0 24px; }
        .lsb-mob-link {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(248,246,241,0.82);
          text-decoration: none;
          padding: 14px 24px;
          border-left: 2px solid transparent;
          transition: color 0.18s, background 0.18s, border-color 0.18s;
        }
        .lsb-mob-link:hover, .lsb-mob-link.active { color: #C9A84C; }
        .lsb-mob-link:hover { background: rgba(201,168,76,0.07); border-left-color: rgba(201,168,76,0.3); }
        .lsb-mob-link.active { border-left-color: #C9A84C; }
        .lsb-mob-backdrop {
          position: fixed; inset: 0; z-index: 390;
          background: rgba(0,0,0,0.45);
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .lsb { display: none; }
          .lsb-mob-bar { display: flex; }
          .hero-content { padding: 96px 24px 48px; }
          .hs-wrap { max-width: 100%; }
          .lsb-logo-img { width: 70px; }
        }
        @media (max-width: 900px) {
          .section { padding: 72px 24px; }
          .topics-grid { grid-template-columns: repeat(2, 1fr); }
          .trust-inner { grid-template-columns: 1fr; gap: 40px; }
          .footer { flex-direction: column; gap: 12px; text-align: center; }
        }
        @media (max-width: 560px) {
          .topics-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 2.2rem; }
          .hs-form { flex-direction: column; }
          .hs-btn { padding: 14px 20px; }
        }

        /* ── EXAMPLE PILLS ── */
        .hs-pills-wrap { margin-top: 16px; max-width: 520px; }
        .hs-pills-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(201,168,76,0.75);
          margin-bottom: 10px;
        }
        .hs-pills {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .hs-pill {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem; font-weight: 500; line-height: 1.45;
          color: rgba(248,246,241,0.9);
          background: rgba(11,31,58,0.65);
          border: 1px solid rgba(201,168,76,0.38);
          border-radius: 20px;
          padding: 8px 14px;
          cursor: pointer;
          transition: background 0.18s, border-color 0.18s, color 0.18s;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          text-align: left;
        }
        .hs-pill:hover {
          background: #0B1F3A;
          border-color: #C9A84C;
          color: #F8F6F1;
        }
        @media (min-width: 640px) {
          .hs-pills { grid-template-columns: 1fr 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .hs-pills { grid-template-columns: 1fr 1fr 1fr 1fr; }
          .hs-pills-wrap { max-width: 620px; }
        }
        @media (max-width: 768px) {
          .hs-pills-wrap { max-width: 100%; }
        }
      `}</style>

      {/* HERO — sidebar sits inside, scrolls away with the hero */}
      <section className="hero">
        <Image
          src="/images/sunrise.jpg"
          alt="Sunrise from Movenpick Residences, Punta Engaño, Cebu"
          fill
          priority
          className="hero-img"
        />
        <div className="hero-overlay" />
        <HomeSidebar />
        <div className="hero-content">
          <p className="hero-eyebrow">Your relocation resource</p>
          <HeroRate />
          <h1 className="hero-title">
            Living in the Philippines,<br />done properly.
          </h1>
          <p className="hero-sub">
            Clear, practical, up-to-date guidance on visas, housing,
            healthcare, and daily life — for foreigners who want to do
            it right.
          </p>
          <HeroSearch />
          <div style={{marginTop:'20px', maxWidth:'520px', background:'rgba(11,31,58,0.72)', borderLeft:'3px solid #C9A84C', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)', padding:'18px 22px'}}>
            <p style={{fontSize:'0.62rem', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:'#C9A84C', marginBottom:'8px'}}>About Our AI Expat Advisor</p>
            <p style={{fontSize:'0.82rem', fontWeight:300, lineHeight:1.75, color:'rgba(248,246,241,0.88)'}}>Our AI Expat Advisor is a custom tool built specifically for Philippines expat questions — not a generic AI search. It is updated continuously from real expat community questions, Philippine government agency announcements, and tracked policy changes in immigration, healthcare, banking, and daily life. It provides honest, current, directional guidance. Always verify immigration, legal, and financial decisions with qualified professionals.</p>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="section topics-section" id="topics">
        <div className="section-inner">
          <p className="section-label">Everything you need</p>
          <h2 className="section-heading">
            The essential topics,<br />covered in depth.
          </h2>
          <div className="topics-grid">
            {topics.map((t) =>
              t.href ? (
                <Link key={t.label} href={t.href} className="topic-card">
                  <div className="topic-card-label">{t.label}</div>
                  <p className="topic-card-desc">{t.description}</p>
                </Link>
              ) : (
                <div key={t.label} className="topic-card topic-card-inactive">
                  <div className="topic-card-label">{t.label}</div>
                  <p className="topic-card-desc">{t.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section newsletter-section">
        <NewsletterSignup />
      </section>

      {/* TRUST */}
      <section className="section trust-section">
        <div className="section-inner">
          <div className="trust-inner">
            <div className="trust-intro">
              <p className="section-label" style={{ color: "#C9A84C" }}>Why Expat Compass PH</p>
              <h2 className="section-heading">
                Guidance you can actually rely on.
              </h2>
            </div>
            <div className="trust-pillars">
              {pillars.map((p) => (
                <div key={p.heading} className="pillar">
                  <h3 className="pillar-heading">{p.heading}</h3>
                  <p className="pillar-body">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BodyText from "@/components/BodyText";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Healthcare in the Philippines for Expats 2026 — Hospitals, Costs & Insurance",
  description:
    "Complete guide to healthcare in the Philippines for expats. Real costs from Chong Hua Hospital Cebu, private hospital comparisons, dental tourism, health insurance options, and what Medicare does not cover abroad.",
  alternates: { canonical: "https://expatcompassph.com/healthcare" },
  openGraph: {
    images: [{ url: "/og/healthcare.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/healthcare.jpg"],
  },
};

export default function HealthcarePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background: #F8F6F1; color: #0B1F3A; }

        /* ── PAGE HERO ── */
        .page-header { background: #0B1F3A; }
        .page-hero { padding: 72px 48px 96px; max-width: 820px; }
        .page-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 20px;
        }
        .page-eyebrow::before { content: ''; display: block; width: 28px; height: 1px; background: #C9A84C; }
        .page-title { font-family: 'Playfair Display', serif; font-size: clamp(2.2rem, 4.5vw, 3.4rem); font-weight: 700; line-height: 1.12; color: #F8F6F1; margin-bottom: 24px; }
        .page-sub { font-size: 1.05rem; font-weight: 300; line-height: 1.65; color: #F8F6F1; max-width: 600px; }

        /* ── SECTIONS ── */
        .section { padding: 88px 48px; }
        .section-light { background: #F8F6F1; }
        .section-dark  { background: #0B1F3A; }
        .section-mid   { background: #0D1E30; }
        .section-inner { max-width: 900px; }

        .section-label {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.7rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 16px;
        }
        .section-label::before { content: '◈'; font-size: 0.65rem; }
        .section-heading { font-family: 'Playfair Display', serif; font-size: clamp(1.7rem, 3vw, 2.4rem); font-weight: 700; line-height: 1.2; color: #0B1F3A; margin-bottom: 32px; max-width: 720px; }
        .section-heading-light { color: #F8F6F1; }

        /* ── OPENING HOOK ── */
        .hook-card {
          border: 1px solid rgba(201,168,76,0.4); border-left: 4px solid #C9A84C;
          background: rgba(201,168,76,0.05); padding: 36px 40px; max-width: 800px;
        }
        .hook-card-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 14px; }
        .hook-card-body { font-size: 1.02rem; font-weight: 300; line-height: 1.88; color: #4A5868; }
        .hook-card-note { font-size: 0.88rem; font-weight: 300; line-height: 1.72; color: #5C6B7A; margin-top: 14px; border-top: 1px solid rgba(201,168,76,0.2); padding-top: 14px; }

        /* ── BODY TEXT ── */
        .hb { font-size: 0.93rem; font-weight: 300; line-height: 1.85; color: #4A5868; margin-bottom: 16px; max-width: 760px; }
        .hb-light { color: #F8F6F1; }
        .hsub { font-family: 'Playfair Display', serif; font-size: clamp(1rem, 1.8vw, 1.22rem); font-weight: 700; line-height: 1.25; color: #0B1F3A; margin: 40px 0 14px; padding-top: 36px; border-top: 1px solid rgba(11,31,58,0.08); }
        .hsub-first { border-top: none; padding-top: 0; margin-top: 4px; }
        .hsub-light { color: #F8F6F1; border-top-color: rgba(248,246,241,0.1); }

        /* ── LISTS ── */
        .hlist { list-style: none; margin: 10px 0 18px; display: flex; flex-direction: column; gap: 9px; max-width: 760px; }
        .hli { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #4A5868; padding-left: 22px; position: relative; }
        .hli::before { content: '—'; position: absolute; left: 0; color: #C9A84C; font-weight: 600; }
        .hli-light { color: #F8F6F1; }
        .hnlist { list-style: none; counter-reset: hctr; display: flex; flex-direction: column; gap: 14px; max-width: 760px; margin: 16px 0; }
        .hni { font-size: 0.9rem; font-weight: 300; line-height: 1.75; color: #4A5868; padding-left: 38px; position: relative; counter-increment: hctr; }
        .hni::before { content: counter(hctr); position: absolute; left: 0; top: 1px; width: 22px; height: 22px; background: #C9A84C; color: #0B1F3A; font-size: 0.68rem; font-weight: 700; display: flex; align-items: center; justify-content: center; font-family: 'Inter', sans-serif; }

        /* ── ALERT BOXES ── */
        .ha-gold { background: rgba(201,168,76,0.06); border: 1px solid rgba(201,168,76,0.3); border-left: 4px solid #C9A84C; padding: 26px 28px; margin: 24px 0; max-width: 760px; }
        .ha-gold-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
        .ha-gold-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #4A5868; }

        .ha-amber { background: rgba(242,153,74,0.06); border: 1px solid rgba(242,153,74,0.28); border-left: 4px solid #F2994A; padding: 26px 28px; margin: 24px 0; max-width: 760px; }
        .ha-amber-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #F2994A; margin-bottom: 10px; }
        .ha-amber-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #4A5868; }
        .ha-amber-body-light { color: #F8F6F1; }

        .ha-blue { background: rgba(41,121,255,0.05); border: 1px solid rgba(41,121,255,0.2); border-left: 4px solid #2979FF; padding: 26px 28px; margin: 24px 0; max-width: 760px; }
        .ha-blue-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #2979FF; margin-bottom: 10px; }
        .ha-blue-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #F8F6F1; }

        .ha-red { background: rgba(235,87,87,0.06); border: 1px solid rgba(235,87,87,0.22); border-left: 4px solid #EB5757; padding: 26px 28px; margin: 24px 0; max-width: 760px; }
        .ha-red-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #EB5757; margin-bottom: 10px; }
        .ha-red-body { font-size: 0.92rem; font-weight: 300; line-height: 1.85; color: #F8F6F1; }

        /* ── FEATURED HOSPITAL CARD ── */
        .hospital-hero { border: 1px solid rgba(201,168,76,0.25); background: rgba(201,168,76,0.03); max-width: 820px; margin-bottom: 28px; }
        .hospital-hero-head { background: #0B1F3A; padding: 32px 36px; display: flex; align-items: flex-start; gap: 24px; }
        .hospital-icon { width: 56px; height: 56px; background: #C9A84C; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; color: #0B1F3A; font-weight: 700; font-family: 'Playfair Display', serif; letter-spacing: -0.02em; }
        .hospital-name { font-family: 'Playfair Display', serif; font-size: 1.35rem; font-weight: 700; color: #F8F6F1; line-height: 1.2; }
        .hospital-tagline { font-size: 0.8rem; font-weight: 300; color: rgba(248,246,241,0.85); margin-top: 6px; line-height: 1.5; }
        .hospital-body { padding: 24px 36px 28px; }

        /* ── ACHIEVEMENT CALLOUT ── */
        .achievement { background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.35); padding: 22px 26px; margin: 20px 0; max-width: 720px; display: flex; gap: 20px; align-items: flex-start; }
        .achievement-star { font-size: 1.4rem; flex-shrink: 0; line-height: 1; padding-top: 2px; }
        .achievement-body { font-size: 0.9rem; font-weight: 300; line-height: 1.72; color: #4A5868; }
        .achievement-body strong { color: #0B1F3A; font-weight: 600; }

        /* ── PERSONAL CALLOUT ── */
        .personal-callout { background: #0D1E30; border-left: 4px solid #C9A84C; padding: 32px 36px; margin: 28px 0; max-width: 760px; }
        .personal-callout-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #C9A84C; margin-bottom: 14px; display: flex; align-items: center; gap: 10px; }
        .personal-callout-label::before { content: ''; display: block; width: 20px; height: 1px; background: #C9A84C; }
        .personal-callout-body { font-size: 0.94rem; font-weight: 300; line-height: 1.88; color: #F8F6F1; }

        /* ── CAMPUS GRID ── */
        .campus-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; max-width: 760px; margin: 20px 0; }
        .campus-card { padding: 26px 28px; border: 1px solid rgba(11,31,58,0.08); border-right: none; background: #fff; }
        .campus-card:last-child { border-right: 1px solid rgba(11,31,58,0.08); }
        .campus-name { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #C9A84C; margin-bottom: 8px; }
        .campus-title { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: #0B1F3A; margin-bottom: 10px; }
        .campus-body { font-size: 0.85rem; font-weight: 300; line-height: 1.72; color: #5C6B7A; }

        /* ── COST TABLES ── */
        .cost-table-wrap { overflow-x: auto; margin: 20px 0 8px; max-width: 760px; }
        .cost-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
        .cost-table th { background: #0B1F3A; color: #F8F6F1; font-family: 'Playfair Display', serif; font-size: 0.85rem; font-weight: 700; padding: 13px 18px; text-align: left; }
        .cost-table th.th-right { text-align: right; }
        .cost-table td { padding: 12px 18px; border-bottom: 1px solid rgba(11,31,58,0.07); font-weight: 300; line-height: 1.5; color: #4A5868; vertical-align: top; }
        .cost-table td.td-service { font-weight: 400; color: #0B1F3A; }
        .cost-table td.td-cost { font-family: 'Playfair Display', serif; font-weight: 700; color: #0B1F3A; white-space: nowrap; text-align: right; }
        .cost-table td.td-us { font-family: 'Playfair Display', serif; font-weight: 700; color: #EB5757; white-space: nowrap; text-align: right; }
        .cost-table td.td-ph { font-family: 'Playfair Display', serif; font-weight: 700; color: #27AE60; white-space: nowrap; text-align: right; }
        .cost-table-note { font-size: 0.8rem; font-weight: 300; color: #6B7B8A; margin-top: 8px; max-width: 760px; }

        /* big-ticket table on dark bg */
        .cost-table-dark td { border-bottom-color: rgba(248,246,241,0.07); color: #F8F6F1; }
        .cost-table-dark td.td-service { color: #F8F6F1; font-weight: 500; }
        .cost-table-dark td.td-cost { color: #C9A84C; }
        .cost-table-dark td.td-us { color: #EB5757; }
        .cost-table-note-dark { font-size: 0.8rem; font-weight: 300; color: rgba(248,246,241,0.78); margin-top: 8px; max-width: 760px; }

        /* ── HOSPITAL LIST ── */
        .hosp-list { display: flex; flex-direction: column; gap: 0; max-width: 820px; margin: 16px 0; }
        .hosp-card { border: 1px solid rgba(248,246,241,0.08); border-bottom: none; display: grid; grid-template-columns: 200px 1fr; }
        .hosp-card:last-child { border-bottom: 1px solid rgba(248,246,241,0.08); }
        .hosp-label { background: rgba(248,246,241,0.05); padding: 22px 24px; display: flex; flex-direction: column; justify-content: center; border-right: 1px solid rgba(248,246,241,0.08); }
        .hosp-label-name { font-family: 'Playfair Display', serif; font-size: 0.92rem; font-weight: 700; color: #F8F6F1; line-height: 1.3; }
        .hosp-label-tag { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #C9A84C; margin-top: 6px; }
        .hosp-content { padding: 22px 24px; font-size: 0.87rem; font-weight: 300; line-height: 1.75; color: #F8F6F1; }

        /* ── SITUATION TABLE ── */
        .situation-list { display: flex; flex-direction: column; gap: 0; max-width: 720px; margin: 16px 0; }
        .situation-row { display: grid; grid-template-columns: 1.2fr 1fr; gap: 0; border: 1px solid rgba(248,246,241,0.07); border-bottom: none; }
        .situation-row:last-child { border-bottom: 1px solid rgba(248,246,241,0.07); }
        .situation-q { padding: 16px 20px; background: rgba(248,246,241,0.03); font-size: 0.85rem; font-weight: 300; line-height: 1.6; color: #F8F6F1; }
        .situation-a { padding: 16px 20px; border-left: 2px solid #C9A84C; font-size: 0.85rem; font-weight: 500; color: #C9A84C; line-height: 1.6; }

        /* ── INSURANCE CARDS ── */
        .ins-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; max-width: 820px; margin: 20px 0; }
        .ins-card { border: 1px solid rgba(11,31,58,0.08); background: #fff; }
        .ins-card-head { padding: 20px 24px 0; }
        .ins-card-tier { font-size: 0.6rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #C9A84C; margin-bottom: 6px; }
        .ins-card-name { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: #0B1F3A; }
        .ins-card-body { padding: 14px 24px 22px; font-size: 0.84rem; font-weight: 300; line-height: 1.72; color: #5C6B7A; }
        .ins-card-link { display: inline-block; margin-top: 12px; padding: 9px 20px; background: #C9A84C; color: #0B1F3A; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.06em; text-decoration: none; }
        .ins-card-featured { border-color: rgba(201,168,76,0.4); background: rgba(201,168,76,0.04); }
        .ins-card-featured .ins-card-name { color: #C9A84C; }
        .ins-card-wide { grid-column: 1 / -1; }

        /* ── SAFETYWING PLAN CARDS ── */
        .sw-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; max-width: 820px; margin: 20px 0; }
        .sw-card { border: 1px solid rgba(11,31,58,0.08); background: #fff; padding: 28px 28px 24px; }
        .sw-card-tier { font-size: 0.6rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #C9A84C; margin-bottom: 8px; }
        .sw-card-name { font-family: 'Playfair Display', serif; font-size: 1.08rem; font-weight: 700; color: #0B1F3A; margin-bottom: 12px; }
        .sw-card-price { font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 700; color: #0B1F3A; margin-bottom: 4px; }
        .sw-card-price-note { font-size: 0.75rem; font-weight: 300; color: #5C6B7A; margin-bottom: 16px; }
        .sw-card-rule { font-size: 0.84rem; font-weight: 300; line-height: 1.72; color: #5C6B7A; border-top: 1px solid rgba(11,31,58,0.07); padding-top: 14px; margin-top: 14px; }
        .sw-card-rule + .sw-card-rule { border-top: none; padding-top: 0; margin-top: 8px; }

        /* ── PHARMACY GRID ── */
        .pharmacy-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; max-width: 760px; margin: 20px 0; }
        .pharmacy-card { padding: 16px 18px; border: 1px solid rgba(248,246,241,0.08); background: rgba(248,246,241,0.04); text-align: center; }
        .pharmacy-name { font-size: 0.82rem; font-weight: 600; color: #F8F6F1; }
        .pharmacy-note { font-size: 0.72rem; font-weight: 300; color: rgba(248,246,241,0.82); margin-top: 4px; line-height: 1.4; }
        .pharmacy-featured { background: rgba(201,168,76,0.1); border-color: rgba(201,168,76,0.3); }
        .pharmacy-featured .pharmacy-name { color: #C9A84C; }

        /* ── JUMP NAV ── */
        .cs-label {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 24px;
          display: flex; align-items: center; gap: 12px;
        }
        .cs-label::before, .cs-label::after {
          content: ''; display: block; flex: 1; height: 1px; background: rgba(201,168,76,0.25);
        }
        .cs-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px;
        }
        .cs-card {
          display: block; text-decoration: none;
          background: #0B1F3A; padding: 22px 24px;
          border: 1px solid rgba(201,168,76,0.15);
          transition: border-color 0.18s, background 0.18s;
          cursor: pointer;
        }
        .cs-card:hover { border-color: #C9A84C; background: rgba(11,31,58,0.92); }
        .cs-city {
          font-family: 'Playfair Display', serif;
          font-size: 1rem; font-weight: 700; color: #F8F6F1;
          display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;
          margin-bottom: 6px;
        }
        .cs-city::after { content: '→'; font-family: 'Inter', sans-serif; font-size: 0.85rem; color: #C9A84C; flex-shrink: 0; transition: transform 0.18s; }
        .cs-card:hover .cs-city::after { transform: translateX(4px); }
        .cs-tagline {
          font-size: 0.8rem; font-weight: 300; line-height: 1.55;
          color: #F8F6F1;
        }

        /* ── NEWSLETTER ── */
        /* ── VIDEO EMBED ── */
        .hc-video-section { background: #0B1F3A; padding: 56px 48px; }
        .hc-video-inner { max-width: 860px; }
        .hc-video-wrap {
          position: relative; width: 100%; max-width: 860px;
          padding-bottom: 48.375%; /* 16:9 on max-width 860px */
          height: 0; overflow: hidden; margin-top: 0;
        }
        .hc-video-iframe {
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%; border: none;
        }

        .newsletter-section { background: #0B1F3A; }
        .nl-wrap { max-width: 600px; margin: 0 auto; text-align: center; }
        .nl-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.7rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 16px;
        }
        .nl-eyebrow::before, .nl-eyebrow::after { content: ''; display: block; width: 20px; height: 1px; background: #C9A84C; }
        .nl-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 2.8vw, 2.2rem); font-weight: 700; line-height: 1.2;
          color: #F8F6F1; margin-bottom: 16px;
        }
        .nl-sub { font-size: 0.95rem; font-weight: 300; line-height: 1.7; color: #F8F6F1; margin-bottom: 32px; }
        .nl-form { display: flex; gap: 0; max-width: 480px; margin: 0 auto 12px; }
        .nl-input {
          flex: 1; padding: 14px 18px;
          background: rgba(248,246,241,0.96);
          border: 1px solid rgba(201,168,76,0.3); border-right: none;
          outline: none; font-family: 'Inter', sans-serif; font-size: 0.9rem; color: #0B1F3A;
        }
        .nl-input::placeholder { color: rgba(11,31,58,0.4); }
        .nl-btn {
          padding: 14px 24px; background: #C9A84C; color: #0B1F3A;
          font-family: 'Inter', sans-serif; font-size: 0.76rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; border: none; cursor: pointer;
          transition: background 0.2s; white-space: nowrap; flex-shrink: 0;
        }
        .nl-btn:hover:not(:disabled) { background: #b8943e; }
        .nl-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .nl-success {
          display: inline-flex; align-items: center; gap: 10px; padding: 14px 24px;
          background: rgba(201,168,76,0.12); border: 1px solid rgba(201,168,76,0.3);
          color: #C9A84C; font-size: 0.9rem; font-weight: 500; margin-bottom: 12px;
        }
        .nl-check { font-size: 1.1rem; font-weight: 700; }
        .nl-error { font-size: 0.82rem; color: rgba(248,246,241,0.78); margin-top: 8px; }
        .nl-note { font-size: 0.72rem; color: rgba(248,246,241,0.6); margin-top: 12px; }

        /* ── STEVE'S NOTE ── */
        .sn-section {
          background: #0D1E30; border-top: 3px solid #C9A84C;
          padding: 80px 48px; position: relative; overflow: hidden;
        }
        .sn-section::before {
          content: 'S'; font-family: 'Playfair Display', serif; font-size: 320px; font-weight: 700;
          color: rgba(201,168,76,0.05); position: absolute; right: -10px; top: -60px;
          line-height: 1; pointer-events: none; user-select: none;
        }
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

        /* ── LEGAL ── */
        .legal-section { background: #F8F6F1; padding: 52px 48px; border-top: 1px solid #E8E4DC; }
        .legal-inner { max-width: 780px; }
        .legal-body { font-size: 0.88rem; font-weight: 300; line-height: 1.85; color: #5C6B7A; }
        .legal-body strong { color: #0B1F3A; font-weight: 600; }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .page-hero, .section, .sn-section, .legal-section { padding-left: 24px; padding-right: 24px; }
          .campus-grid { grid-template-columns: 1fr; }
          .campus-card { border-right: 1px solid rgba(11,31,58,0.08); border-bottom: none; }
          .campus-card:last-child { border-bottom: 1px solid rgba(11,31,58,0.08); }
          .ins-grid { grid-template-columns: 1fr; }
          .ins-card-wide { grid-column: auto; }
          .sw-grid { grid-template-columns: 1fr; }
          .hosp-card { grid-template-columns: 1fr; }
          .hosp-label { border-right: none; border-bottom: 1px solid rgba(201,168,76,0.25); }
          .pharmacy-grid { grid-template-columns: repeat(2, 1fr); }
          .situation-row { grid-template-columns: 1fr; }
          .situation-a { border-left: none; border-top: 2px solid #C9A84C; }
          .cs-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .page-title { font-size: 2rem; }
          .hospital-hero-head { flex-direction: column; gap: 16px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="page-header">
        <Nav active="/healthcare" />
        <div className="page-hero">
          <p className="page-eyebrow">Healthcare</p>
          <h1 className="page-title">Healthcare in the Philippines</h1>
          <p className="page-sub">World-class private hospitals at a fraction of Western costs. Real prices, honest assessments, and everything you need to know about staying healthy as an expat in Cebu and the Philippines.</p>
        </div>
      </div>

      {/* ── VIDEO EMBED ── */}
      <section className="hc-video-section">
        <div className="hc-video-inner">
          <div className="hc-video-wrap">
            <iframe
              src="https://www.youtube.com/embed/cP4h8nkmSds"
              title="Philippines Healthcare: The $300 Hospital Night and the One That Isn't Cheap"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="hc-video-iframe"
            />
          </div>
        </div>
      </section>

      {/* ── OPENING HOOK ── */}
      <section className="section section-light">
        <div className="section-inner">
          <div className="hook-card">
            <p className="hook-card-label">The number that changes how you think about Philippine healthcare</p>
            <p className="hook-card-body">In the United States, a 6-hour emergency room visit with IV treatment, blood tests, and a week of prescription medications would cost $3,000 to $5,000 minimum without insurance — and often significantly more. The total bill at Chong Hua Hospital in Cebu for exactly that treatment was $300 USD. That is not a typo. That is healthcare in the Philippines.</p>
            <p className="hook-card-note">That figure covers one emergency-room visit: 6 hours, IV fluids and antibiotics, two blood tests, a week of medication, doctor&rsquo;s fee included. Everyday and emergency care here is genuinely this affordable. For serious procedures — heart surgery, cancer treatment, or medical evacuation — the numbers are very different. See the <a href="#big-ticket-costs" style={{color: '#C9A84C', fontWeight: 600, textDecoration: 'none'}}>big-ticket costs table</a> below.</p>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="section newsletter-section">
        <NewsletterSignup />
      </section>

      {/* ── JUMP NAV ── */}
      <section className="section section-light" style={{paddingTop:'40px', paddingBottom:'48px'}}>
        <div className="section-inner">
          <p className="cs-label">Jump to a Section</p>
          <div className="cs-grid">
            <a href="#chong-hua" className="cs-card">
              <p className="cs-city">Chong Hua Hospital</p>
              <p className="cs-tagline">The expat standard in Cebu</p>
            </a>
            <a href="#other-hospitals" className="cs-card">
              <p className="cs-city">Other Hospitals</p>
              <p className="cs-tagline">More options across Cebu</p>
            </a>
            <a href="#dental" className="cs-card">
              <p className="cs-city">Dental Care</p>
              <p className="cs-tagline">Implants for a fraction of US cost</p>
            </a>
            <a href="#pharmacies" className="cs-card">
              <p className="cs-city">Pharmacies</p>
              <p className="cs-tagline">Where to fill prescriptions</p>
            </a>
            <a href="#big-ticket-costs" className="cs-card">
              <p className="cs-city">Big-Ticket Costs</p>
              <p className="cs-tagline">What serious procedures really cost</p>
            </a>
            <a href="#insurance" className="cs-card">
              <p className="cs-city">Health Insurance</p>
              <p className="cs-tagline">SafetyWing, Cigna, and more</p>
            </a>
            <a href="#safetywing-plans" className="cs-card">
              <p className="cs-city">SafetyWing Plans</p>
              <p className="cs-tagline">Essential vs Complete compared</p>
            </a>
            <a href="#paying-the-hospital" className="cs-card">
              <p className="cs-city">Paying the Hospital</p>
              <p className="cs-tagline">Laws, deposits, and practical tips</p>
            </a>
            <a href="#local-hmos" className="cs-card">
              <p className="cs-city">Local HMOs</p>
              <p className="cs-tagline">Age limits and what to expect</p>
            </a>
            <a href="#medicare" className="cs-card">
              <p className="cs-city">Medicare Abroad</p>
              <p className="cs-tagline">What it does and does not cover</p>
            </a>
            <a href="#specialist-care" className="cs-card">
              <p className="cs-city">Specialist Care</p>
              <p className="cs-tagline">Urology, cardiology, oncology, orthopedics</p>
            </a>
            <a href="#tips" className="cs-card">
              <p className="cs-city">Practical Tips</p>
              <p className="cs-tagline">Ten things to know before you need them</p>
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: BOTTOM LINE ── */}
      <section className="section section-dark" id="overview">
        <div className="section-inner">
          <p className="section-label">The Overview</p>
          <h2 className="section-heading section-heading-light">The Bottom Line on Philippine Healthcare</h2>

          <p className="hb hb-light">The Philippines offers genuinely excellent private hospital care at costs that will shock anyone accustomed to Western healthcare prices. In major cities like Cebu and Manila, private hospitals are modern, well-equipped, English-speaking, and staffed by doctors who trained in the Philippines and often abroad. The quality gap between Philippine private healthcare and Western healthcare is far smaller than most expats expect. The cost gap is enormous.</p>

          <p className="hb hb-light">This does not mean healthcare is without challenges. Rural areas have significantly fewer resources. Public hospitals are overcrowded and underfunded. And while routine and emergency care is dramatically affordable, complex long-term conditions or rare procedures may require Manila or medical evacuation. Know the landscape before you need it.</p>

          <h3 className="hsub hsub-first hsub-light">Key facts</h3>
          <ul className="hlist">
            <li className="hli hli-light">Private hospital consultations cost 800 to 2,200 pesos — under $40 USD.</li>
            <li className="hli hli-light">Emergency room visits cost 1,800 to 4,500 pesos for the consultation alone.</li>
            <li className="hli hli-light">Most doctors speak excellent English — medical education in the Philippines is conducted in English.</li>
            <li className="hli hli-light">Major private hospitals in Cebu and Manila accept international patients without prior authorization.</li>
            <li className="hli hli-light">Cash payment is standard — bring pesos or a card. Most private hospitals accept major credit cards.</li>
            <li className="hli hli-light">Medications prescribed at the hospital can usually be filled at the hospital pharmacy same day.</li>
          </ul>
        </div>
      </section>

      {/* ── SECTION 2: CHONG HUA ── */}
      <section className="section section-light" id="chong-hua">
        <div className="section-inner">
          <p className="section-label">The Expat Standard in Cebu</p>
          <h2 className="section-heading">Chong Hua Hospital</h2>

          <div className="hospital-hero">
            <div className="hospital-hero-head">
              <div className="hospital-icon">CH</div>
              <div>
                <p className="hospital-name">Chong Hua Hospital</p>
                <p className="hospital-tagline">Largest and most advanced private hospital in the Visayas and Mindanao regions &nbsp;·&nbsp; One of Cebu&rsquo;s oldest private hospitals &nbsp;·&nbsp; Two Metro Cebu campuses</p>
              </div>
            </div>
            <div className="hospital-body">
              <p className="hb">When expats in Cebu ask where to go for medical care, the answer is almost universally Chong Hua Hospital. It is the largest and most advanced private hospital in the Visayas and Mindanao regions, one of Cebu&rsquo;s oldest private hospitals, and has two major campuses serving Metro Cebu.</p>
            </div>
          </div>

          <div className="achievement">
            <span className="achievement-star">★</span>
            <p className="achievement-body"><strong>National recognition — 2026:</strong> Chong Hua Hospital was named to Newsweek and Statista&rsquo;s World&rsquo;s Best Hospitals 2026 list for the Philippines — the first year the country was included in the ranking. This is a national Philippines distinction, recognizing Chong Hua among the top hospitals in the country.</p>
          </div>

          <div className="personal-callout">
            <p className="personal-callout-label">First-Hand Experience at Chong Hua ER</p>
            <p className="personal-callout-body">A significant illness required a visit to the Chong Hua emergency room. The process was seamless — a basic digital sign-in app, straight to a bed with no wait. The staff was genuinely some of the friendliest encountered in any medical setting anywhere. IV hydration and IV antibiotics administered; two blood tests run; four medications prescribed for a full week. Total bill including the separate doctor&rsquo;s fee: $300 USD. In the United States that same visit would have cost thousands of dollars. The quality of care and the bill were both impressive.</p>
          </div>

          <div className="ha-gold">
            <p className="ha-gold-label">Expat Compass PH Note</p>
            <p className="ha-gold-body">The $300 figure above was for one emergency room visit. That is representative of everyday and ER-level care in the Philippines. For serious procedures — a cardiac procedure, cancer treatment, or medical evacuation — costs are far higher. See the <a href="#big-ticket-costs" style={{color: '#C9A84C', fontWeight: 600, textDecoration: 'none'}}>big-ticket costs section</a> for a realistic picture of what major care actually runs.</p>
          </div>

          <h3 className="hsub">Two campuses — which to use</h3>
          <div className="campus-grid">
            <div className="campus-card">
              <p className="campus-name">Original Campus</p>
              <p className="campus-title">Chong Hua Fuente Osmeña</p>
              <p className="campus-body">The original campus in central Cebu City. Older building but full tertiary services, specialist coverage, and the most established location. Best for complex specialist consultations and the widest range of subspecialties.</p>
            </div>
            <div className="campus-card">
              <p className="campus-name">Newer Campus</p>
              <p className="campus-title">Chong Hua Mandaue</p>
              <p className="campus-body">Newer campus with more modern facilities, closer to Mactan Island, Lapu-Lapu City, and the northern Metro Cebu corridor. For expats living in Mactan this is typically the more convenient option and has excellent facilities.</p>
            </div>
          </div>

          <div className="ha-amber">
            <p className="ha-amber-label">Practical Advice</p>
            <p className="ha-amber-body">Choose the campus closest to where you live. In Cebu traffic can add 30 to 60 minutes to any journey — in a medical situation proximity matters. Save both addresses and phone numbers in your phone before you need them.</p>
          </div>

          <h3 className="hsub">2026 Chong Hua rate benchmarks</h3>
          <div className="cost-table-wrap">
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th className="th-right">Approximate cost 2026</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="td-service">OPD Consultation (outpatient)</td><td className="td-cost">800–2,200 pesos</td></tr>
                <tr><td className="td-service">ER Consultation</td><td className="td-cost">1,800–4,500 pesos</td></tr>
                <tr><td className="td-service">CT Scan</td><td className="td-cost">7,000–12,000 pesos</td></tr>
                <tr><td className="td-service">MRI</td><td className="td-cost">12,000–18,000 pesos</td></tr>
                <tr><td className="td-service">Private Room per day</td><td className="td-cost">6,000–11,000 pesos</td></tr>
                <tr><td className="td-service">Chest X-ray</td><td className="td-cost">800–1,500 pesos</td></tr>
                <tr><td className="td-service">Blood test panel</td><td className="td-cost">500–3,000 pesos</td></tr>
                <tr><td className="td-service">Normal delivery</td><td className="td-cost">90,000–180,000 pesos</td></tr>
                <tr><td className="td-service">C-section</td><td className="td-cost">180,000–350,000 pesos</td></tr>
              </tbody>
            </table>
          </div>
          <p className="cost-table-note">Chong Hua rates are 25 to 40 percent below comparable Manila tier-1 hospitals like St. Luke&rsquo;s and MakatiMed for similar services. PhilHealth and most major HMOs accepted.</p>
        </div>
      </section>

      {/* ── SECTION 3: OTHER HOSPITALS ── */}
      <section className="section section-dark" id="other-hospitals">
        <div className="section-inner">
          <p className="section-label">Cebu Private Hospitals</p>
          <h2 className="section-heading section-heading-light">Other Major Hospitals in Cebu</h2>

          <div className="hosp-list">
            <div className="hosp-card">
              <div className="hosp-label">
                <p className="hosp-label-name">Cebu Doctors University Hospital</p>
                <p className="hosp-label-tag">CDUH</p>
              </div>
              <div className="hosp-content">One of Cebu&rsquo;s premier private hospitals, affiliated with Cebu Doctors University. Particularly strong in cardiac care, cancer treatment, and orthopedics. Has a dedicated heart center and oncology program. Well covered by HMOs and PhilHealth accredited. Located in Cebu City.</div>
            </div>
            <div className="hosp-card">
              <div className="hosp-label">
                <p className="hosp-label-name">Perpetual Succour Hospital</p>
                <p className="hosp-label-tag">Over 100 years in Cebu</p>
              </div>
              <div className="hosp-content">A Catholic mission hospital with over 100 years of history in Cebu. Known for pulmonology, internal medicine, and maternal care. Many fellowship-trained specialists in the Visayas completed residencies here. Compassionate care reputation, widely covered by PhilHealth and HMOs.</div>
            </div>
            <div className="hosp-card">
              <div className="hosp-label">
                <p className="hosp-label-name">Vicente Sotto Memorial Medical Center</p>
                <p className="hosp-label-tag">VSMMC · Government</p>
              </div>
              <div className="hosp-content">The major government hospital in Cebu. Significantly more affordable than private options — PhilHealth zero-copay care available. Staffed by excellent doctors including specialists, but significantly busier than private hospitals. Best for Filipinos with PhilHealth coverage or for expats on a very tight budget who need non-emergency care.</div>
            </div>
            <div className="hosp-card">
              <div className="hosp-label">
                <p className="hosp-label-name">The Medical City Cebu</p>
                <p className="hosp-label-tag">Modern · HMO-friendly</p>
              </div>
              <div className="hosp-content">Newer private hospital with modern facilities. Good for HMO-covered executive health screenings and specialist consultations. Growing reputation in Metro Cebu.</div>
            </div>
          </div>

          <h3 className="hsub hsub-light">Which hospital for which situation</h3>
          <div className="situation-list">
            <div className="situation-row">
              <span className="situation-q">Complex or rare conditions</span>
              <span className="situation-a">VSMMC or CDUH</span>
            </div>
            <div className="situation-row">
              <span className="situation-q">Cardiac care</span>
              <span className="situation-a">CDUH Heart Center or Chong Hua</span>
            </div>
            <div className="situation-row">
              <span className="situation-q">Cancer treatment</span>
              <span className="situation-a">CDUH Oncology or The Medical City Cebu</span>
            </div>
            <div className="situation-row">
              <span className="situation-q">Kidney disease and dialysis</span>
              <span className="situation-a">Chong Hua nephrology program</span>
            </div>
            <div className="situation-row">
              <span className="situation-q">Maternal care and delivery</span>
              <span className="situation-a">Perpetual Succour or CDUH</span>
            </div>
            <div className="situation-row">
              <span className="situation-q">Government rates / PhilHealth zero-copay</span>
              <span className="situation-a">VSMMC</span>
            </div>
            <div className="situation-row">
              <span className="situation-q">Emergency in Mactan Island</span>
              <span className="situation-a">Chong Hua Mandaue — closest major private hospital</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: DENTAL ── */}
      <section className="section section-light" id="dental">
        <div className="section-inner">
          <p className="section-label">Dental Tourism</p>
          <h2 className="section-heading">Dental Care — One of the Best Kept Secrets in the Philippines</h2>

          <p className="hb">Dental care in the Philippines is one of the most underappreciated benefits of expat life here. Philippine dentists are well trained, English speaking, and charge a fraction of Western rates for work that would bankrupt an uninsured American.</p>

          <div className="ha-gold">
            <p className="ha-gold-label">The number that stops people</p>
            <p className="ha-gold-body">One dental clinic here advertised implants for 22,000 pesos per tooth. At current exchange rates that is approximately $375 USD. In the United States a single dental implant typically costs $3,000 to $6,000. Many expats factor the cost of dental work into their decision to move to the Philippines — and some visit specifically for dental tourism, saving enough on a single procedure to cover flights and accommodation.</p>
          </div>

          <h3 className="hsub">Dental cost benchmarks Philippines 2026</h3>
          <div className="cost-table-wrap">
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Procedure</th>
                  <th className="th-right">Philippines</th>
                  <th className="th-right">United States</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-service">Dental implant (per tooth)</td>
                  <td className="td-ph">22,000–45,000 pesos<br /><span style={{fontSize:'0.76rem', fontFamily:'Inter', fontWeight:300}}>($375–$760)</span></td>
                  <td className="td-us">$3,000–$6,000</td>
                </tr>
                <tr>
                  <td className="td-service">Crown (per tooth)</td>
                  <td className="td-ph">8,000–20,000 pesos<br /><span style={{fontSize:'0.76rem', fontFamily:'Inter', fontWeight:300}}>($135–$340)</span></td>
                  <td className="td-us">$1,000–$3,500</td>
                </tr>
                <tr>
                  <td className="td-service">Root canal</td>
                  <td className="td-ph">5,000–15,000 pesos<br /><span style={{fontSize:'0.76rem', fontFamily:'Inter', fontWeight:300}}>($85–$255)</span></td>
                  <td className="td-us">$700–$2,000</td>
                </tr>
                <tr>
                  <td className="td-service">Basic cleaning</td>
                  <td className="td-ph">500–1,500 pesos<br /><span style={{fontSize:'0.76rem', fontFamily:'Inter', fontWeight:300}}>($8–$25)</span></td>
                  <td className="td-us">$75–$300</td>
                </tr>
                <tr>
                  <td className="td-service">Tooth extraction</td>
                  <td className="td-ph">500–3,000 pesos<br /><span style={{fontSize:'0.76rem', fontFamily:'Inter', fontWeight:300}}>($8–$50)</span></td>
                  <td className="td-us">$75–$600</td>
                </tr>
                <tr>
                  <td className="td-service">Veneers (per tooth)</td>
                  <td className="td-ph">8,000–25,000 pesos<br /><span style={{fontSize:'0.76rem', fontFamily:'Inter', fontWeight:300}}>($135–$425)</span></td>
                  <td className="td-us">$900–$2,500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ha-amber" style={{marginTop: '20px'}}>
            <p className="ha-amber-label">Dental tourism tip</p>
            <p className="ha-amber-body">If you are considering significant dental work — implants, crowns, full mouth restoration — the Philippines is worth serious consideration. The savings on even two or three implants can cover a month or more of living expenses. Ask for recommendations in expat Facebook groups for trusted dentists in your area. Cebu City and Mactan have numerous well-equipped dental clinics used regularly by the expat community. Quality varies significantly — do not choose on price alone. Get a recommendation.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PHARMACIES ── */}
      <section className="section section-dark" id="pharmacies">
        <div className="section-inner">
          <p className="section-label">Medications</p>
          <h2 className="section-heading section-heading-light">Pharmacies and Medications</h2>

          <p className="hb hb-light">Pharmacies are everywhere in the Philippines — Mercury Drug, Rose Pharmacy, Watsons, and Generika are the major chains found in every mall and on most major streets.</p>

          <div className="pharmacy-grid">
            <div className="pharmacy-card">
              <p className="pharmacy-name">Mercury Drug</p>
              <p className="pharmacy-note">Most widespread chain. 24-hour locations available.</p>
            </div>
            <div className="pharmacy-card">
              <p className="pharmacy-name">Rose Pharmacy</p>
              <p className="pharmacy-note">Strong in Cebu and the Visayas. Good selection.</p>
            </div>
            <div className="pharmacy-card">
              <p className="pharmacy-name">Watsons</p>
              <p className="pharmacy-note">Mall-based. Good for health and personal care products.</p>
            </div>
            <div className="pharmacy-card pharmacy-featured">
              <p className="pharmacy-name">Generika</p>
              <p className="pharmacy-note">Specializes in generics. Most affordable option for common medications.</p>
            </div>
          </div>

          <p className="hb hb-light" style={{marginTop: '24px'}}>Many medications available only by prescription in the United States are available over the counter in the Philippines. Common antibiotics, blood pressure medications, and many other drugs can be purchased directly without a prescription, though consulting a doctor first is always advisable.</p>

          <p className="hb hb-light">Generic medications are dramatically cheaper than branded equivalents. Ask specifically for the generic version — pharmacists will know what you need. Generika pharmacy specializes in generics and is typically the most affordable option.</p>

          <div className="ha-red">
            <p className="ha-red-label">⚠ If You Take Regular Prescription Medications</p>
            <p className="ha-red-body">Some medications commonly used in the West are controlled or unavailable in the Philippines. If you take regular prescription medications, bring a sufficient supply when you move and consult with a Philippine doctor about local equivalents. Do not assume your home prescription will be filled as-is.</p>
          </div>
        </div>
      </section>

      {/* ── BIG-TICKET COSTS ── */}
      <section className="section section-dark" id="big-ticket-costs">
        <div className="section-inner">
          <p className="section-label">When It Gets Serious</p>
          <h2 className="section-heading section-heading-light">Big-Ticket Costs: 2026 Ranges</h2>

          <BodyText variant="dark-bg" className="hb">Everyday care and emergency-room visits are genuinely cheap here. Major procedures are a different story. These are real-world ranges for serious interventions at private hospitals — the numbers that make insurance non-negotiable.</BodyText>

          <div className="cost-table-wrap">
            <table className="cost-table cost-table-dark">
              <thead>
                <tr>
                  <th>Procedure</th>
                  <th className="th-right">PHP Range</th>
                  <th className="th-right">USD Equivalent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-service">Angioplasty + stent</td>
                  <td className="td-cost">₱150,000–350,000+</td>
                  <td className="td-us">~$2,500–$6,000+</td>
                </tr>
                <tr>
                  <td className="td-service">Heart bypass (full package, Manila private hospital)</td>
                  <td className="td-cost">₱1.2–1.4 million</td>
                  <td className="td-us">over $20,000</td>
                </tr>
                <tr>
                  <td className="td-service">Air ambulance (jet)</td>
                  <td className="td-cost">—</td>
                  <td className="td-us">thousands of dollars per hour</td>
                </tr>
                <tr>
                  <td className="td-service">Medical flight from Asia to the U.S.</td>
                  <td className="td-cost">—</td>
                  <td className="td-us">$165,000–$225,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="cost-table-note-dark">Sources: clinicfinderph.com (2026), Pacific Prime. Ranges vary widely; get a written estimate. Angioplasty costs more in an emergency or with multiple stents.</p>

          <div className="ha-amber" style={{marginTop: '28px'}}>
            <p className="ha-amber-label">Why This Table Matters</p>
            <p className="ha-amber-body">A heart event or the need for air evacuation can erase a decade of savings. The Philippines is excellent value for routine and emergency care. It is not a free pass on insurance for anything serious.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: INSURANCE ── */}
      <section className="section section-light" id="insurance">
        <div className="section-inner">
          <p className="section-label">Coverage Options</p>
          <h2 className="section-heading">Health Insurance for Expats</h2>

          <div className="ha-amber">
            <p className="ha-amber-label">⚠ Medicare Does Not Cover Care in the Philippines</p>
            <p className="ha-amber-body">If you are relying on Medicare as your health coverage, you are uninsured here. Every expat in the Philippines should have some form of private health coverage. The full Medicare breakdown is on our <a href="/retirement-benefits" style={{color: '#C9A84C', fontWeight: 600, textDecoration: 'none'}}>US Benefits Abroad page</a>.</p>
          </div>

          <div className="ins-grid">
            <div className="ins-card ins-card-featured ins-card-wide">
              <div className="ins-card-head">
                <p className="ins-card-tier">Most Popular Among Expats — Two Plans Available</p>
                <p className="ins-card-name">SafetyWing</p>
              </div>
              <div className="ins-card-body">
                SafetyWing now offers two distinct products. <strong>Essential (travel-medical)</strong> is the original — affordable month-to-month emergency and hospitalization coverage, no long-term commitment. <strong>Complete (international health plan)</strong> is a more comprehensive annual plan that includes routine care, cancer treatment, and specialist visits. See the full <a href="#safetywing-plans" style={{color: '#C9A84C', fontWeight: 600, textDecoration: 'none'}}>SafetyWing Plans comparison</a> below for details and 2026 pricing.
                <br />
                <a className="ins-card-link" href="https://safetywing.com/?referenceID=26552539&utm_source=26552539&utm_medium=Ambassador" target="_blank" rel="noopener noreferrer">Get a Quote from SafetyWing →</a>
                <br />
                <span style={{fontSize: '0.75rem', fontWeight: 300, color: '#5C6B7A', display: 'block', marginTop: '8px'}}>Affiliate link: Expat Compass PH may earn a small commission at no extra cost to you.</span>
              </div>
            </div>

            <div className="ins-card">
              <div className="ins-card-head">
                <p className="ins-card-tier">Comprehensive International</p>
                <p className="ins-card-name">Cigna Global</p>
              </div>
              <div className="ins-card-body">Comprehensive international health insurance designed for expats living abroad long-term. Covers routine care, specialist consultations, hospitalization, and often dental and vision. More expensive than SafetyWing but significantly more comprehensive. Good option for older expats or those with ongoing health needs.</div>
            </div>

            <div className="ins-card">
              <div className="ins-card-head">
                <p className="ins-card-tier">Local Philippine Option</p>
                <p className="ins-card-name">AXA Philippines</p>
              </div>
              <div className="ins-card-body">Local Philippine health insurance with good hospital network coverage including Chong Hua and other major private hospitals. More affordable than international plans. Covers care within the Philippines but limited for international travel. Good option if you plan to stay primarily in the Philippines.</div>
            </div>

            <div className="ins-card">
              <div className="ins-card-head">
                <p className="ins-card-tier">Government Program</p>
                <p className="ins-card-name">PhilHealth</p>
              </div>
              <div className="ins-card-body">The Philippine government health insurance program. Foreign residents with an SRRV or a valid ACR I-Card (such as 13(a) visa holders) can enroll. Coverage is a meaningful subsidy — typically around 60% of a hospital bill — but not comprehensive. Worth enrolling in as a supplement to private insurance, not as a replacement. See the full PhilHealth breakdown below.</div>
            </div>

            <div className="ins-card" style={{borderColor: 'rgba(242,153,74,0.3)', background: 'rgba(242,153,74,0.03)'}}>
              <div className="ins-card-head">
                <p className="ins-card-tier" style={{color: '#F2994A'}}>Advanced Consideration</p>
                <p className="ins-card-name">Out of Pocket — Is It Viable?</p>
              </div>
              <div className="ins-card-body">For many healthy expats, paying out of pocket for routine and emergency-room care is genuinely feasible here — a 6-hour ER visit with IV treatment and blood tests can run around $300 USD. But the out-of-pocket calculation changes dramatically for serious conditions. See the <a href="#big-ticket-costs" style={{color: '#C9A84C', fontWeight: 600, textDecoration: 'none'}}>big-ticket costs table</a> before deciding. Expat Compass PH recommends: a basic plan like SafetyWing plus $5,000 to $10,000 you can reach the same night.</div>
            </div>
          </div>

          <h3 className="hsub">PhilHealth for Foreign Residents — 2026 Rates and Enrollment</h3>
          <BodyText variant="light-bg" className="hb">Foreigners who are legal residents can join PhilHealth as direct contributors. Here is what you need to know in 2026.</BodyText>

          <div className="ha-gold">
            <p className="ha-gold-label">2026 Annual Contribution Rates — Foreign Residents</p>
            <p className="ha-gold-body">SRRV (Special Resident Retiree Visa) holders: approximately PHP 15,000 per year. &nbsp;·&nbsp; 13(a) spousal visa holders (and other ACR I-Card holders): approximately PHP 17,000 per year. These are direct contributor rates for foreigners not employed by a Philippine company. Rates are set by PhilHealth and may be adjusted — verify current rates at philhealth.gov.ph before enrolling.</p>
          </div>

          <div className="ha-gold">
            <p className="ha-gold-label">Expat Compass PH Note — What PhilHealth Actually Covers</p>
            <p className="ha-gold-body">PhilHealth typically covers around 60% of a hospital bill. Expect to pay up to 40% yourself. It is a subsidy, not a safety net.</p>
          </div>

          <h3 className="hsub">Who Qualifies</h3>
          <ul className="hlist">
            <li className="hli">SRRV holders — the SRRV is issued by the Philippine Retirement Authority and qualifies you as a direct contributor.</li>
            <li className="hli">Foreigners holding a valid ACR I-Card, such as 13(a) spousal visa holders (both probationary and permanent).</li>
            <li className="hli">Foreigners employed by a Philippine-registered company — mandatory enrollment with different contribution structure.</li>
            <li className="hli">On tourist visa extensions, most PhilHealth offices won&rsquo;t enroll you. Ask your local office. Verify eligibility directly with PhilHealth at philhealth.gov.ph.</li>
          </ul>

          <h3 className="hsub">What PhilHealth Covers</h3>
          <ul className="hlist">
            <li className="hli">Inpatient hospitalization — case rates for common conditions including pneumonia, dengue, typhoid, appendectomy, and more. Directly reduces your hospital bill at PhilHealth-accredited facilities.</li>
            <li className="hli">Outpatient package — selected procedures and consultations at accredited outpatient clinics.</li>
            <li className="hli">Z-benefit packages — coverage for catastrophic conditions including dialysis, cancer treatment chemotherapy and radiation, and selected major surgeries at significantly reduced patient cost.</li>
            <li className="hli">Accepted at: VSMMC, Chong Hua Hospital, Cebu Doctors University Hospital, Perpetual Succour Hospital, and most major accredited government and private hospitals.</li>
          </ul>

          <h3 className="hsub">How to Enroll</h3>
          <ol className="hnlist">
            <li className="hni">Go to the nearest PhilHealth office — in Cebu, the main office is in Cebu City with satellite offices in Mandaue and other areas.</li>
            <li className="hni">Bring your passport, ACR I-Card or SRRV identification, and visa documentation.</li>
            <li className="hni">Fill out the PhilHealth Membership Registration Form (PMRF).</li>
            <li className="hni">Pay your first annual contribution. You will receive your PhilHealth Identification Number (PIN).</li>
            <li className="hni">Present your PhilHealth PIN or card at accredited hospitals when seeking inpatient care to apply the benefit at the time of discharge.</li>
          </ol>

          <div className="ha-amber">
            <p className="ha-amber-label">Honest Assessment — Is PhilHealth Worth It for Foreign Residents?</p>
            <p className="ha-amber-body">At PHP 15,000 to 17,000 per year, PhilHealth is worth enrolling in if you qualify on SRRV or 13A. The inpatient case rate reductions can meaningfully cut a hospital bill for a significant illness or surgery. However PhilHealth is not a substitute for comprehensive private insurance — coverage gaps for outpatient care, specialist consultations, and medications are real. Expat Compass PH recommends: PhilHealth plus SafetyWing or similar international plan. That gives you both the government subsidy at accredited hospitals and proper international coverage for emergencies. <a href="https://safetywing.com/?referenceID=26552539&utm_source=26552539&utm_medium=Ambassador" target="_blank" rel="noopener noreferrer" style={{color: '#C9A84C', fontWeight: 600, textDecoration: 'none'}}>Get a SafetyWing quote →</a></p>
          </div>
        </div>
      </section>

      {/* ── SAFETYWING PLANS ── */}
      <section className="section section-light" id="safetywing-plans">
        <div className="section-inner">
          <p className="section-label">SafetyWing</p>
          <h2 className="section-heading">SafetyWing: Essential vs Complete</h2>

          <BodyText variant="light-bg" className="hb">SafetyWing offers two distinct products for expats. They serve different purposes at very different price points. Know which one you need before you sign up.</BodyText>

          <div className="sw-grid">
            <div className="sw-card">
              <p className="sw-card-tier">Travel-Medical Plan</p>
              <p className="sw-card-name">SafetyWing Essential</p>
              <p className="sw-card-price">~$161 / 4 weeks</p>
              <p className="sw-card-price-note">Age 50–59. Billed every 28 days.</p>
              <p className="sw-card-rule">$250,000 medical maximum per coverage period. Built for emergencies and acute illness, not routine care.</p>
              <p className="sw-card-rule">Reimbursement-first: you pay the hospital, then claim back. Does not cover pre-existing conditions.</p>
              <p className="sw-card-rule">Coverage ends at age 69. No long-term commitment — cancel any time.</p>
            </div>
            <div className="sw-card" style={{borderColor: 'rgba(201,168,76,0.4)', background: 'rgba(201,168,76,0.03)'}}>
              <p className="sw-card-tier">International Health Plan</p>
              <p className="sw-card-name">SafetyWing Complete</p>
              <p className="sw-card-price">~$380.50 / month</p>
              <p className="sw-card-price-note">Age 50–59. About $4,500 a year. 12-month commitment.</p>
              <p className="sw-card-rule">Up to $1.5 million a year in hospital and medical cover. Includes cancer treatment, specialist visits, mental health, and a yearly checkup.</p>
              <p className="sw-card-rule">Must sign up by age 64 (renewable after). No pre-existing conditions. You cannot list the U.S. as your country of residence.</p>
              <p className="sw-card-rule">12-month commitment required. Best for expats who need comprehensive annual coverage, not just emergency backup.</p>
            </div>
          </div>

          <div className="ha-gold">
            <p className="ha-gold-label">How SafetyWing Pays Hospitals</p>
            <p className="ha-gold-body">SafetyWing can send a hospital a guarantee of payment for the first 24 hours of an emergency and pay directly for planned treatment — but a hospital can still decline it. For day-to-day care, the standard process is pay first, claim back. Keep receipts for everything.</p>
          </div>

          <p className="cost-table-note" style={{marginTop: '24px'}}>Prices from the SafetyWing calculator, Nov 2026. Check your own age and quote — rates vary by age band.</p>

          <div style={{marginTop: '24px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap'}}>
            <a className="ins-card-link" href="https://safetywing.com/?referenceID=26552539&utm_source=26552539&utm_medium=Ambassador" target="_blank" rel="noopener noreferrer">Get a SafetyWing Quote →</a>
            <span style={{fontSize: '0.78rem', fontWeight: 300, color: '#5C6B7A'}}>Affiliate link: Expat Compass PH may earn a small commission at no extra cost to you.</span>
          </div>
        </div>
      </section>

      {/* ── PAYING THE HOSPITAL ── */}
      <section className="section section-dark" id="paying-the-hospital">
        <div className="section-inner">
          <p className="section-label">Know Before You Go</p>
          <h2 className="section-heading section-heading-light">Paying the Hospital</h2>

          <BodyText variant="dark-bg" className="hb">Philippine hospital billing has specific rules — some that protect patients, some that catch expats off guard. Know these before you need them.</BodyText>

          <h3 className="hsub hsub-first hsub-light">Emergency Admissions — Republic Act 10932</h3>
          <BodyText variant="dark-bg" className="hb">The Anti-Hospital Deposit Law (RA 10932) says that in an emergency, a hospital cannot demand a cash deposit before providing basic emergency care. Staff who break this law face fines of ₱100,000 or more and possible imprisonment.</BodyText>

          <h3 className="hsub hsub-light">Planned Admissions</h3>
          <BodyText variant="dark-bg" className="hb">Planned admissions work differently. Chong Hua, for example, asks for a partial payment on admission. The doctor&rsquo;s fee is typically billed separately from the hospital bill — expect two bills.</BodyText>

          <BodyText variant="dark-bg" className="hb">At private hospitals you generally cannot leave until the full bill is paid. Plan for this.</BodyText>

          <h3 className="hsub hsub-light">Republic Act 9439 — Promissory Note Discharge</h3>
          <BodyText variant="dark-bg" className="hb">RA 9439 allows patients to leave a hospital on a promissory note backed by a mortgage or a co-signer if they cannot pay the full bill immediately. <strong style={{color: '#F8F6F1'}}>Important exception: patients in private rooms are not covered by RA 9439.</strong> This law applies to ward and semi-private patients.</BodyText>

          <div className="ha-gold">
            <p className="ha-gold-label">Expat Compass PH Recommends</p>
            <p className="ha-gold-body">Keep $5,000 to $10,000 you can reach the same night — card limit or bank funds. Save your hospital&rsquo;s phone number in your phone now, before you need it. At Chong Hua: Mandaue campus (032) 233-8000, Fuente campus (032) 255-8000. Confirm current numbers directly with the hospital.</p>
          </div>
        </div>
      </section>

      {/* ── LOCAL HMOs ── */}
      <section className="section section-light" id="local-hmos">
        <div className="section-inner">
          <p className="section-label">Local Coverage</p>
          <h2 className="section-heading">Local HMOs and Age Limits</h2>

          <BodyText variant="light-bg" className="hb">Local Philippine HMOs (Health Maintenance Organizations) are an option some expats explore as an alternative to international insurance. The key thing to know: most of them have age cutoffs for new members.</BodyText>

          <div className="ha-amber">
            <p className="ha-amber-label">Age Cutoffs for Local HMO Individual Plans</p>
            <p className="ha-amber-body">Maxicare&rsquo;s main individual plan (MyMaxicare) stops taking new members at age 60. Most local HMOs cap new individual members at 60 to 65. If you are under 60 and healthy, a local HMO may be worth exploring as a supplement. If you are over 60, most individual HMO plans are not an option as a new member.</p>
          </div>

          <BodyText variant="light-bg" className="hb">Over 60, the realistic local options shift to prepaid health cards — products that cover checkups and diagnostics but not a major hospital stay. These are useful for routine care but are not a substitute for international health insurance for serious illness.</BodyText>

          <div className="ha-gold">
            <p className="ha-gold-label">Expat Compass PH Recommends</p>
            <p className="ha-gold-body">If you are over 60, do not count on a local HMO as your primary coverage. Pursue an international plan like SafetyWing Complete (must sign up by 64) or Cigna Global while you are still eligible. Waiting costs more and closes doors.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: MEDICARE ── */}
      <section className="section section-mid" id="medicare">
        <div className="section-inner">
          <p className="section-label">Critical for Americans</p>
          <h2 className="section-heading section-heading-light">What Medicare Covers in the Philippines</h2>

          <div className="ha-blue">
            <p className="ha-blue-label">The Short Answer</p>
            <p className="ha-blue-body">Nothing. Medicare does not cover planned or routine care outside the United States. It does not cover your Chong Hua consultation. It does not cover your medications. It does not cover a hospital stay in Cebu. You paid into Medicare your entire working life and in the Philippines it provides no benefit for the care you actually receive.</p>
          </div>

          <p className="hb hb-light">In most situations Medicare does not pay for care outside the U.S. However, you can keep Part A and Part B — as long as you keep paying the Part B premium — so that coverage is there when you fly home. That is the main reason most American expats maintain their Medicare while living abroad.</p>

          <p className="hb hb-light">There are extremely limited exceptions for emergency care during travel within 60 days of entering a foreign country under certain Medigap plans, but these are temporary travel provisions — not coverage for people living abroad.</p>

          <p className="hb hb-light">The full breakdown of Medicare, Part A, Part B, Medigap, and a proposed bill that would study Medicare coverage abroad is on our <a href="/retirement-benefits" style={{color: '#C9A84C', fontWeight: 600, textDecoration: 'none'}}>US Benefits Abroad page</a>. Read it before you make any decisions about dropping or maintaining Medicare coverage.</p>
        </div>
      </section>

      {/* ── SECTION 8: PRACTICAL TIPS ── */}
      <section className="section section-light" id="tips">
        <div className="section-inner">
          <p className="section-label">Before You Need It</p>
          <h2 className="section-heading">Practical Tips for Navigating Philippine Healthcare</h2>

          <ol className="hnlist">
            <li className="hni">Save hospital numbers in your phone now — before you need them. Chong Hua Mandaue for Mactan residents, Chong Hua Fuente for Cebu City residents.</li>
            <li className="hni">Bring cash or a card — private hospitals expect payment. Most accept major credit cards but cash in pesos is always safe.</li>
            <li className="hni">Doctor fees are often billed separately from hospital fees — do not be surprised when you receive two bills.</li>
            <li className="hni">Ask for generics at the pharmacy — dramatically cheaper than branded medications for equivalent effect.</li>
            <li className="hni">Get a full blood panel annually — comprehensive blood work at a Philippine private hospital costs a fraction of US prices and is an excellent preventive health investment.</li>
            <li className="hni">English is universal in private hospitals — do not worry about language barriers at Chong Hua or other major private facilities.</li>
            <li className="hni">For non-emergency specialist care, you can often book directly without a referral — unlike the US system, you can walk into most specialist clinics with an appointment.</li>
            <li className="hni">International health insurance claims — keep all receipts, doctor&rsquo;s notes, and prescription records. Most international insurers require documentation for reimbursement claims.</li>
            <li className="hni">Medical evacuation — for catastrophic conditions requiring care unavailable in the Philippines, medical evacuation to Singapore, Bangkok, or Hong Kong is the standard option. Verify whether your insurance plan includes evacuation coverage.</li>
            <li className="hni">Dental work — get recommendations from expat groups before choosing a dentist for major work. Quality varies significantly between clinics.</li>
          </ol>
        </div>
      </section>

      {/* ── SPECIALIST CARE ── */}
      <section className="section section-dark" id="specialist-care">
        <div className="section-inner">
          <p className="section-label">Specialist Medical Care</p>
          <h2 className="section-heading section-heading-light">Specialist Medical Care in the Philippines — What Is Available and Where</h2>
          <p className="hb hb-light">The Philippines has excellent specialist medical care in its major private hospitals. Here is what to know about accessing specialist care as an expat.</p>

          <h3 className="hsub hsub-first hsub-light">Urology</h3>
          <p className="hb hb-light">Philippine urologists are highly trained and see a high volume of cases including benign prostatic hyperplasia (BPH) which is extremely common among older expat men. TURP (transurethral resection of the prostate) is widely performed at major private hospitals. Green Light Laser and HoLEP (holmium laser enucleation) procedures are available at better-equipped facilities.</p>
          <ul className="hlist">
            <li className="hli hli-light">Cost comparison: TURP in the Philippines costs approximately 80,000 to 200,000 pesos ($1,300 to $3,400 USD) compared to $15,000 to $30,000 in the United States without insurance.</li>
            <li className="hli hli-light">For urology in Cebu: Chong Hua Hospital and Cebu Doctors University Hospital both have strong urology departments.</li>
            <li className="hli hli-light">For complex cases: St. Luke&rsquo;s Medical Center BGC in Manila is the Philippines&rsquo; top-tier referral hospital for complex urological procedures.</li>
            <li className="hli hli-light">Practical tip: bring your medical documentation and imaging from your home country when seeking specialist consultation here. Philippine specialists will want your history and previous test results.</li>
          </ul>

          <h3 className="hsub hsub-light">Cardiology</h3>
          <p className="hb hb-light">Cebu Doctors University Hospital has a dedicated Heart Center and is the strongest cardiac care option in Cebu. Chong Hua Hospital also has cardiology services. For cardiac surgery and complex interventional cardiology Manila remains the reference — Makati Medical Center and St. Luke&rsquo;s BGC have the strongest cardiac programs in the Philippines.</p>

          <h3 className="hsub hsub-light">Oncology</h3>
          <p className="hb hb-light">Cancer care in the Philippines has improved significantly. Cebu Doctors University Hospital has an oncology program. The Medical City Cebu handles some cancer cases. For serious cancer treatment Manila is the standard referral destination — The Medical City Manila, St. Luke&rsquo;s BGC, and Philippine General Hospital for government-subsidized care.</p>

          <h3 className="hsub hsub-light">Orthopedics</h3>
          <p className="hb hb-light">Good orthopedic care is available in Cebu. Chong Hua and Cebu Doctors both have orthopedic departments. Joint replacements are performed routinely. Cost of a total knee replacement in the Philippines is approximately 200,000 to 400,000 pesos compared to $30,000 to $50,000 in the US.</p>

          <h3 className="hsub hsub-light">Finding a Specialist — Practical Tips</h3>
          <ul className="hlist">
            <li className="hli hli-light">Most Philippine private hospitals allow you to book directly with a specialist without a GP referral — unlike the US system.</li>
            <li className="hli hli-light">Ask your expat Facebook group or the outpatient department of Chong Hua or Cebu Doctors directly for specialist recommendations.</li>
            <li className="hli hli-light">English is universal at major private hospitals. Language is not a barrier.</li>
            <li className="hli hli-light">Bring all previous medical records, imaging, and test results when seeing a specialist for the first time.</li>
          </ul>
        </div>
      </section>

      {/* ── STEVE'S NOTE ── */}
      <section className="sn-section">
        <div className="sn-inner">
          <div className="sn-header">
            <div className="sn-monogram">S</div>
            <div>
              <p className="sn-name">Expat Compass PH Note</p>
              <p className="sn-tag">Honest assessment &nbsp;·&nbsp; Cebu, Philippines</p>
            </div>
          </div>
          <div className="sn-rule" />
          <div className="sn-body">
            <p>Healthcare was a major concern before moving to the Philippines. Stories about poor facilities and inadequate care in developing countries were worrying. The experience at Chong Hua completely changed that thinking. The facilities are modern. The doctors are excellent and speak perfect English. The nurses were genuinely caring in a way that felt personal rather than procedural. The bill was $300 USD for treatment that would have cost thousands at home.</p>
            <p>For expats covered by US employer health insurance, Chong Hua works well for routine and urgent care on a pay-out-of-pocket basis. For retired expats without employer coverage, the recommendation is a combination of an international plan like SafetyWing for emergency coverage and a cash reserve for routine care.</p>
            <p>Philippine private healthcare does not require sacrificing quality. In some ways — the personal attention, the lack of rushed appointments, the absence of insurance bureaucracy — the experience is actually better.</p>
          </div>
          <p className="sn-verified">Last Updated: November 2026 · Cebu, Philippines</p>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section className="legal-section">
        <div className="legal-inner">
          <p className="legal-body">
            <strong>Medical costs change regularly.</strong> The figures on this page reflect 2026 rates and personal experience. Always verify current costs directly with hospitals and clinics before making healthcare decisions. This page is for general informational purposes only and is <strong>not medical advice</strong>. Consult a licensed physician for any health concerns. Insurance coverage terms vary — read your policy carefully before relying on any plan described here.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

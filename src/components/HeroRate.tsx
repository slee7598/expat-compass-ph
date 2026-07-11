"use client";

import { useEffect, useState } from "react";

const FbIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="#0B1F3A" />
    <path
      d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"
      fill="#C9A84C"
    />
  </svg>
);

export default function HeroRate() {
  const [rate, setRate] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((r) => r.json())
      .then((d) => { if (d?.rates?.PHP) setRate(d.rates.PHP); })
      .catch(() => {});
  }, []);

  return (
    <div className="hrate-wrap" aria-label="Live USD to PHP exchange rate">
      <div className="hrate-row">
        <span className="hrate-line" />
        <span className="hrate-text">
          {rate === null ? (
            <span className="hrate-loading">— — —</span>
          ) : (
            <>
              $1 <span className="hrate-usd">USD</span>
              &nbsp;=&nbsp;
              <span className="hrate-php">₱{rate.toFixed(2)}</span>
              &nbsp;<span className="hrate-usd">PHP</span>
            </>
          )}
        </span>
        <span className="hrate-line" />
      </div>
      <p className="hrate-label">Live Rate</p>

      <div className="hrate-fb-row">
        <a
          className="hrate-fb-link"
          href="https://www.facebook.com/profile.php?id=61591708973713"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Our Facebook Page"
        >
          <FbIcon />
          <span className="hrate-fb-label">Our Facebook Page</span>
        </a>
        <a
          className="hrate-fb-link"
          href="https://www.facebook.com/groups/1029851842787333"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join Our Group"
        >
          <FbIcon />
          <span className="hrate-fb-label">Join Our Group</span>
        </a>
      </div>

      <style>{`
        .hrate-wrap {
          margin-bottom: 32px;
        }
        .hrate-row {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .hrate-line {
          display: block;
          width: 36px;
          height: 1px;
          background: rgba(201,168,76,0.4);
          flex-shrink: 0;
        }
        .hrate-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1.1rem, 2.2vw, 1.45rem);
          font-weight: 500;
          color: #F8F6F1;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .hrate-usd {
          font-size: 0.75em;
          font-weight: 400;
          color: rgba(248,246,241,0.78);
          letter-spacing: 0.06em;
        }
        .hrate-php {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.45rem, 3vw, 1.95rem);
          font-weight: 700;
          color: #C9A84C;
        }
        .hrate-loading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.45rem, 3vw, 1.95rem);
          font-weight: 700;
          color: rgba(201,168,76,0.3);
          letter-spacing: 0.1em;
        }
        .hrate-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(248,246,241,0.78);
          margin-top: 8px;
          margin-left: 54px;
        }
        .hrate-fb-row {
          display: flex;
          flex-direction: row;
          gap: 10px;
          margin-top: 8px;
          margin-left: 54px;
        }
        .hrate-fb-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          text-decoration: none;
          min-width: 44px;
          min-height: 44px;
          justify-content: center;
          padding: 2px 4px;
          transition: opacity 0.15s;
          -webkit-tap-highlight-color: transparent;
        }
        .hrate-fb-link:hover { opacity: 0.75; }
        .hrate-fb-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: rgba(248,246,241,0.78);
          white-space: nowrap;
          text-align: center;
          line-height: 1.3;
        }
      `}</style>
    </div>
  );
}

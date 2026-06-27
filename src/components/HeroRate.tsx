"use client";

import { useEffect, useState } from "react";

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
          color: rgba(248,246,241,0.55);
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
          color: rgba(248,246,241,0.32);
          margin-top: 8px;
          margin-left: 54px;
        }
      `}</style>
    </div>
  );
}

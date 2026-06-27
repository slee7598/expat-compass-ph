"use client";

import { useEffect, useState } from "react";

export default function ExchangeRate() {
  const [rate, setRate] = useState<number | null>(null);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        if (data?.rates?.PHP) {
          setRate(data.rates.PHP);
          const d = new Date(data.time_last_update_unix * 1000);
          setUpdatedAt(
            d.toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
              timeZoneName: "short",
            })
          );
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, []);

  if (error) return null;

  return (
    <div className="er-bar">
      <div className="er-inner">
        <p className="er-label">Live Exchange Rate</p>
        {rate === null ? (
          <span className="er-loading">Fetching rate…</span>
        ) : (
          <span className="er-rate">
            $1 USD&nbsp;=&nbsp;<span className="er-php">₱{rate.toFixed(2)}</span>&nbsp;PHP
          </span>
        )}
        {updatedAt && (
          <p className="er-updated">Updated {updatedAt}</p>
        )}
      </div>

      <style>{`
        .er-bar {
          background: transparent;
          padding: 0 0 48px 0;
        }
        .er-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 16px;
        }
        .er-label::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #C9A84C;
        }
        .er-inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .er-divider { display: none; }
        .er-loading {
          font-size: 1.4rem;
          font-weight: 300;
          color: rgba(248,246,241,0.4);
        }
        .er-rate {
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 600;
          color: #F8F6F1;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }
        .er-php {
          color: #C9A84C;
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 700;
        }
        .er-updated {
          margin-top: 10px;
          font-size: 0.72rem;
          font-weight: 400;
          color: rgba(248,246,241,0.35);
          letter-spacing: 0.04em;
        }
        @media (max-width: 900px) {
          .er-bar { padding: 0 0 36px 0; }
        }
      `}</style>
    </div>
  );
}

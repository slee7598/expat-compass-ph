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
        <span className="er-label">Live Exchange Rate</span>
        <span className="er-divider">·</span>
        {rate === null ? (
          <span className="er-loading">Fetching rate…</span>
        ) : (
          <span className="er-rate">
            $1 USD&nbsp;=&nbsp;<span className="er-php">₱{rate.toFixed(2)}</span>&nbsp;PHP
          </span>
        )}
        {updatedAt && (
          <span className="er-updated">Updated {updatedAt}</span>
        )}
      </div>

      <style>{`
        .er-bar {
          background: #0B1F3A;
          border-bottom: 2px solid #C9A84C;
          padding: 18px 48px;
        }
        .er-inner {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          max-width: 1100px;
        }
        .er-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #C9A84C;
        }
        .er-divider {
          color: rgba(248,246,241,0.25);
          font-size: 0.8rem;
        }
        .er-loading {
          font-size: 0.85rem;
          font-weight: 300;
          color: rgba(248,246,241,0.5);
        }
        .er-rate {
          font-size: 1.15rem;
          font-weight: 600;
          color: #F8F6F1;
          letter-spacing: 0.01em;
        }
        .er-php {
          color: #C9A84C;
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-weight: 700;
        }
        .er-updated {
          font-size: 0.72rem;
          font-weight: 400;
          color: rgba(248,246,241,0.35);
          margin-left: 4px;
        }
        @media (max-width: 900px) {
          .er-bar { padding: 14px 24px; }
          .er-rate { font-size: 1rem; }
          .er-php { font-size: 1.1rem; }
        }
      `}</style>
    </div>
  );
}

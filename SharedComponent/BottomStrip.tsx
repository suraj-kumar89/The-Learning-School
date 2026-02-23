"use client";

import React, { useEffect, useState } from "react";

export default function Bottomestrip() {
  const [showStrip, setShowStrip] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStrip(window.scrollY > 350);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`bottomstrip-wrapper ${showStrip ? "active" : ""}`}>
        {/* PRICE */}
        <div className="bs-price-section">
          <div className="bs-price-big">₹299</div>

          <div className="bs-price-right">
            <div className="bs-old-price">Rs.2990</div>
            <div className="bs-discount">90% OFF</div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="bs-features">
          <div className="bs-feature">
            <img src="/calenderIcon.svg" className="bs-icon" alt="calendar" />
            <div>
              <h4>Daily Batches</h4>
              <p>Morning • Afternoon • Evening</p>
            </div>
          </div>

          <div className="bs-feature">
            <img src="/zoomicon.svg" className="bs-icon" alt="zoom" />
            <div>
              <h4>Online</h4>
              <p>Zoom Webinar • 30 Min Session</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          className="bs-btn"
          onClick={() => (window.location.href = "https://pages.razorpay.com/tef-india")}
        >
          Book your seat now
        </button>
      </div>

      {/* STYLES */}
      <style jsx>{`
        /* WRAPPER — MATCH FIGMA */
        .bottomstrip-wrapper {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 999;

          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6rem;

          padding: 1.5rem 8rem;

          backdrop-filter: blur(16px);
          background: rgba(251, 244, 209, 0.65);

          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .bottomstrip-wrapper.active {
          opacity: 1;
        }

        /* PRICE */
        .bs-price-section {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .bs-price-big {
          font-size: 36px;
          font-weight: 700;
          color: #111;
        }

        .bs-price-right {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .bs-old-price {
          font-size: 14px;
          color: #666;
          text-decoration: line-through;
        }

        .bs-discount {
          font-size: 12px;
          color: #666;
        }

        /* FEATURES */
        .bs-features {
          display: flex;
          gap: 3rem;
          align-items: center;
        }

        .bs-feature {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .bs-feature h4 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
        }

        .bs-feature p {
          margin: 0;
          font-size: 12px;
          color: #666;
        }

        .bs-icon {
          width: 28px;
        }

        /* BUTTON — MATCH FIGMA */
        .bs-btn {
          display: flex;
          justify-content: center;
          align-items: center;

          padding: 1rem 2rem;
          border-radius: 3.5rem;

          background: #e9c81a;
          border: none;

          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
        }

        .bs-btn:hover {
          transform: scale(1.05);
        }

        /* MOBILE */
      @media (max-width: 768px) {
  .bottomstrip-wrapper {
    padding: 0.8rem 1rem;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
  }

  /* hide features completely */
  .bs-features {
    display: none;
  }

  /* price section compact horizontal */
  .bs-price-section {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .bs-price-big {
    font-size: 20px;
    font-weight: 700;
  }

  .bs-price-right {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .bs-old-price {
    font-size: 12px;
  }

  .bs-discount {
    font-size: 11px;
  }

  /* button small + rounded */
  .bs-btn {
    padding: 0.6rem 1rem;
    font-size: 13px;
    border-radius: 999px;
    white-space: nowrap;
  }
        }
      `}</style>
    </>
  );
}
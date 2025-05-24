import { useEffect, useState } from "react";
import "./styles.css";

export default function AnimatedOrderButton() {
  const [animate, setAnimate] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (!animate) {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 10000);
    }
  };

  return (
    <div className="order-container">
      <button
        className={`order ${
          animate ? "animate" : ""
        } glassmorphism-button rounded-full sm:rounded-l-none sm:rounded-r-full`}
        onClick={handleClick}
      >
        <span className="default" style={{ fontWeight: "bolder" }}>
          Join Waitlist
        </span>
        <span className="success">
          Confirmed
          <svg viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1" />
          </svg>
        </span>
        <div className="box"></div>
        <div className="truck">
          <div className="back"></div>
          <div className="front">
            <div className="window"></div>
          </div>
          <div className="light top"></div>
          <div className="light bottom"></div>
        </div>
        <div className="lines"></div>
      </button>
    </div>
  );
}

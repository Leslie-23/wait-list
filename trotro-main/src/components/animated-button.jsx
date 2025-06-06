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
      }, 8000);
    }
  };

  return (
    <div className=" font-[E`uclid-Circular-B]">
      <button
        className={`order ${
          animate ? "animate" : ""
        } glassmorphism-button rounded-full sm:rounded-l-none sm:rounded-r-full md:rounded-l-none md:rounded-r-full lg:rounded-l-none lg:rounded-r-full`}
        onClick={handleClick}
      >
        <span className="default">Join Waitlist</span>
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

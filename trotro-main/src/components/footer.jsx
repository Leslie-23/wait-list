import React from "react";
import AnimatedOrderButton from "./animated-button";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";

const Footer = () => {
  const generateSpeckles = () => {
    const speckles = [];
    for (let i = 0; i < 40; i++) {
      const size = Math.random() * 7 + 1; // 1px to 3px
      const left = Math.random() * 100; // %
      const duration = Math.random() * 20 + 10; // 10s to 30s
      const delay = Math.random() * 20; // 0s to 20s

      speckles.push(
        <span
          key={i}
          className="speckle"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    }
    return speckles;
  };

  return (
    <>
      <div className="w-full px-4 sm:px-0 my-28 relative z-10 overflow-hidden">
        
        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 sm:gap-0 ">
            {generateSpeckles()}
          <input
            type="email"
            placeholder="Enter your email to join waitlist"
            aria-label="Email"
            className="flex-grow px-4 sm:px-5 md:py-1 py-5 md:h-[63px]  bg-transparent border border-gray-400 rounded-full sm:rounded-l-full sm:rounded-r-none text-white placeholder-white placeholder:text-sm focus:outline-none focus:border-green-400 transition-colors"
          />
          <AnimatedOrderButton className="glassmorphism-button" />
        </div>
      </div>
      <div className="w-full md:px-4 sm:px-0 relative z-10 overflow-hidden ">
        <p className="glassmorphism-footer text-center text-sm text-gray-400">
            {generateSpeckles()}
          © 2025 Trofficient. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;

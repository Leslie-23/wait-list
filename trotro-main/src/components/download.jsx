"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Apple, SmartphoneIcon as Android } from "lucide-react";
import mockup from "../assets/portrait-mockup.png";

export default function DownloadPage() {
  const mockupRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    // Add floating animation to mockup
    const mockup = mockupRef.current;
    if (mockup) {
      let floatY = 0;
      let floatX = 0;
      let direction = 1;
      let xDirection = 1;
      const floatSpeed = 0.5;
      const xFloatSpeed = 0.3;

      const animateMockup = () => {
        if (!mockup) return;

        floatY += floatSpeed * direction;
        floatX += xFloatSpeed * xDirection;

        // Change direction when reaching limits
        if (floatY > 15 || floatY < -15) direction *= -1;
        if (floatX > 10 || floatX < -10) xDirection *= -1;

        mockup.style.transform = `translate(${floatX}px, ${floatY}px) rotate(${
          floatX * 0.1
        }deg)`;
        requestAnimationFrame(animateMockup);
      };

      animateMockup();
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16">
          {/* Left Column - Text */}
          <div
            className="w-full lg:w-1/2 text-center lg:text-left mx-8"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              We are <span className="text-green-400 ">everywhere</span> you go.
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Download our mobile apps
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/download/ios"
                className="glassmorphism-button flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white hover:scale-105 transition-all"
              >
                <Apple size={24} />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </Link>

              <Link
                to="/download/android"
                className="glassmorphism-button flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white hover:scale-105 transition-all"
              >
                <Android size={24} />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column - Mockup */}
          <div
            className="w-full lg:w-1/2 flex justify-center items-center "
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div ref={mockupRef} className="mockup-container relative">
              {/* Glassmorphism effect for the mockup */}
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400/10 to-transparent rounded-3xl blur-xl"></div>

              {/* Mockup image */}
              <div className="mockup-phone relative z-10">
                <div className="mockup-wrapper relative overflow-hidden rounded-[40px] shadow-xl">
                  <img
                    src={mockup}
                    alt="Trofficient Mobile App"
                    className="w-[250px] h-[500px] object-cover"
                  />

                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-green-400/5 pointer-events-none"></div>

                  {/* Reflection effect */}
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
                </div>

                {/* Phone details */}
                {/* <div className="absolute top-[25px] left-1/2 transform -translate-x-1/2 w-1/3 h-[25px] bg-gray-800 rounded-b-xl"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

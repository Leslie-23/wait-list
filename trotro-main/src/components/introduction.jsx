import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import AnimatedOrderButton from "./animated-button";

export default function IntroductionPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="animated-background absolute inset-0 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl pt-6 w-full">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold m-0 sm:mb-5 text-white"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          Introducing
        </h1>
        <h1
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[150px] font-extrabold sm:mb-8 text-green-400 font-[Macondo] leading-tight"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Trofficient
        </h1>
        <p
          className="text-sm sm:text-md md:text-lg mb-6 text-gray-200 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          A revolutionary way to navigate Ghana with ease and efficiency
        </p>

        {/* Glassmorphism CTA Button */}
        <div
          data-aos="zoom-out"
          data-aos-delay="1000"
          className="w-full px-4 sm:px-0 "
        >
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email to join waitlist"
              aria-label="Email"
              className="flex-grow px-4 sm:px-5 md:py-1 py-5 md:h-[63px]  bg-transparent border border-gray-400 rounded-full sm:rounded-l-full sm:rounded-r-none text-white placeholder-white placeholder:text-sm focus:outline-none focus:border-green-400 transition-colors"
            />
            {/* <Link
              href="/waitlist"
              className="glassmorphism-button px-5 py-3 text-md font-semibold rounded-full sm:rounded-l-none sm:rounded-r-full text-white hover:bg-opacity-40 transition-all whitespace-nowrap border border-white sm:border-l-0"
            >
              Join Waiting List
            </Link> */}
            <AnimatedOrderButton className="glassmorphism-button" />
          </div>
        </div>
      </div>
    </div>
  );
}

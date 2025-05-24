import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

export default function MissionPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <HeroSection />
      <ChallengeSection />
      <SolutionSection />
      <FeaturesCarousel />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-start">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1664298159107-d579362ca341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent z-10"></div>
      </div>

      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl" data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Make transportation{" "}
              <span className="text-[#2da873]">efficient</span>, not wasteful.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChallengeSection() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://www.adomonline.com/wp-content/uploads/2019/09/2735a1f6073b4a2bba3d153834f70dd7_18.jpg"
              alt="Traffic congestion in city"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">The challenge</h2>
            <div className="space-y-4 text-gray-200">
              <p>
                Transportation inefficiency costs cities billions in lost
                productivity and fuel consumption.
              </p>
              <p>
                Today's urban transport is plagued by poor route planning,
                inefficient scheduling, and lack of coordination between
                different transport modes.
              </p>
              <p>
                The absence of smart transport management leads to increased
                travel times, higher costs, and unnecessary environmental
                impact.
              </p>
              <p>
                As the global urban population continues to grow, the need for
                intelligent transportation solutions becomes more critical than
                ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-6">The solution</h2>
        <div className="max-w-4xl">
          <p className="text-gray-200 text-lg leading-relaxed">
            Trofficient revolutionizes urban mobility through intelligent
            scheduling, advanced route optimization, and seamless coordination.
            Our platform uses cutting-edge algorithms to maximize efficiency,
            reduce travel times, and minimize environmental impact while
            providing users with the most cost-effective transportation
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeaturesCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const features = [
    {
      id: 0,
      title: "Smart Scheduling",
      description:
        "Advanced algorithms that optimize pickup and drop-off times based on real-time traffic data and user preferences.",
      stats:
        "85% of our scheduled rides arrive within 2 minutes of the predicted time, reducing wait times and improving user satisfaction.",
      link: "Learn more about our scheduling technology",
      mainImage:
        "https://images.unsplash.com/photo-1572675339312-3e8b094a544d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      sideImages: [
        "https://images.unsplash.com/photo-1572675339312-3e8b094a544d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1572675339312-3e8b094a544d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      id: 1,
      title: "Route Optimization",
      description:
        "AI-powered route planning that finds the fastest, most fuel-efficient paths while considering traffic patterns and road conditions.",
      stats:
        "Our route optimization reduces travel time by an average of 23% and fuel consumption by 18% compared to traditional navigation.",
      link: "Discover our route optimization features",
      mainImage:
        "https://images.unsplash.com/photo-1572675339312-3e8b094a544d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      sideImages: [
        "https://images.unsplash.com/photo-1572675339312-3e8b094a544d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/images/routes-side-1.jpg",
        "https://images.unsplash.com/photo-1572675339312-3e8b094a544d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      id: 2,
      title: "Efficiency Analytics",
      description:
        "Comprehensive insights and analytics that help users and fleet managers track performance, reduce costs, and improve service quality.",
      stats:
        "Fleet managers using our analytics see an average 30% improvement in operational efficiency and 25% reduction in operational costs.",
      link: "Explore our analytics dashboard",
      mainImage: "/images/analytics-main.jpg",
      sideImages: [
        "/images/analytics-side-1.jpg",
        "/images/analytics-side-2.jpg",
      ],
    },
    {
      id: 3,
      title: "Real-time Tracking",
      description:
        "Live tracking and monitoring of all vehicles and routes with instant updates and notifications for optimal coordination.",
      stats:
        "Real-time tracking improves delivery accuracy by 40% and reduces customer complaints by 60%.",
      link: "See real-time tracking in action",
      mainImage: "/images/tracking-main.jpg",
      sideImages: [
        "/images/tracking-side-1.jpg",
        "/images/tracking-side-2.jpg",
      ],
    },
    {
      id: 4,
      title: "Sustainable Transport",
      description:
        "Promoting eco-friendly transportation options that reduce carbon emissions and support environmental sustainability.",
      stats:
        "Our platform has helped reduce CO2 emissions by over 15,000 tonnes through optimized routing and shared mobility solutions.",
      link: "Learn about our sustainability impact",
      mainImage: "/images/sustainability-main.jpg",
      sideImages: [
        "/images/sustainability-side-1.jpg",
        "/images/sustainability-side-2.jpg",
      ],
    },
  ];

  const currentFeature = features[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left side - Feature content */}
          <div className="lg:w-2/5 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              {currentFeature.title}
            </h2>

            <p className="text-gray-200 text-lg leading-relaxed">
              {currentFeature.description}
            </p>

            <p className="text-gray-200 font-medium">{currentFeature.stats}</p>

            <a
              href="#"
              className="inline-flex items-center text-[#26ae60] font-medium hover:text-[#229954] transition-colors group"
            >
              {currentFeature.link}
              <svg
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Center - Main image with navigation */}
          <div className="lg:w-3/5 relative">
            <div className="relative">
              {/* Main image */}
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={
                    currentFeature.mainImage ||
                    "/placeholder.svg?height=400&width=600"
                  }
                  alt={currentFeature.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#26ae60] hover:bg-[#229954] text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#26ae60] hover:bg-[#229954] text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Side images preview */}
              <div className="absolute -right-4 top-4 space-y-2 hidden xl:block">
                {currentFeature.sideImages.map((image, index) => (
                  <div
                    key={index}
                    className="w-20 h-16 rounded overflow-hidden opacity-80"
                  >
                    <img
                      src={image || "/placeholder.svg?height=64&width=80"}
                      alt={`${currentFeature.title} preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Slide indicator */}
            <div className="flex justify-center mt-6">
              <span className="text-gray-500 font-medium">
                {activeSlide + 1}/{features.length}
              </span>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeSlide === index ? "bg-[#26ae60]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

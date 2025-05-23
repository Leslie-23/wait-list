"use client";

import { useEffect } from "react";
import { Clock, MapPin, CreditCard, Route } from "lucide-react";
import AOS from "aos";

export default function FeatureCards() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    {
      icon: <Clock className="h-10 w-10 text-green-400" />,
      title: "Real-Time Tracking",
      description:
        "Track your bus in real-time and never miss a ride. Get accurate ETAs and live updates.",
      delay: 100,
      bgImage:
        "https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      icon: <MapPin className="h-10 w-10 text-green-400" />,
      title: "Convenient Scheduling",
      description:
        "Plan your journey with easy-to-use schedules and receive timely notifications.",
      delay: 300,
      bgImage:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-green-400" />,
      title: "Digital Payments",
      description:
        "Cashless transactions with multiple payment options. Save with digital passes and subscriptions.",
      delay: 500,
      bgImage:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      icon: <Route className="h-10 w-10 text-green-400" />,
      title: "Smart Routing",
      description:
        "AI-powered route optimization to get you to your destination faster and more efficiently.",
      delay: 700,
      bgImage:
        "https://images.unsplash.com/photo-1544620347-c4fd8a3b5393?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <div className="features relative py-20 px-4 max-w-7xl mx-auto">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        data-aos="fade-up"
      >
        Why Choose Our <span className="text-green-400">Bus System</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card relative overflow-hidden rounded-xl shadow-xl"
            data-aos="fade-up"
            data-aos-delay={feature.delay}
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url(${feature.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
            </div>

            {/* Card Content */}
            <div className="relative z-10 p-8 h-full flex flex-col items-center text-center">
              <div className="icon-container mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

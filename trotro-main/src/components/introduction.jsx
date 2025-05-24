import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../assets/trofficient.jpg";
import AnimatedOrderButton from "./animated-button";

export default function IntroductionPageGradient() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      const response = await fetch(
        "https://wait-list-psi.vercel.app/api/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitSuccess(true);
      setEmail("");
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (err) {
      setError("Failed to submit. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateSpeckles = () => {
    const speckles = [];
    for (let i = 0; i < 40; i++) {
      const size = Math.random() * 7 + 1;
      const left = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 20;

      speckles.push(
        <span
          key={i}
          className="absolute rounded-full bg-white/30 animate-float"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    }
    return speckles;
  };

  return (
    <div className="relative min-h-screen font-[Euclid-Circular-B] overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mb-12" data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Make transportation{" "}
              <span className="text-[#2da873]">efficient</span>, not wasteful.
            </h1>
            <p className="text-gray-300 mt-6 text-lg">
              A revolutionary way to navigate Ghana with ease and efficiency
            </p>
          </div>

          {/* CTA Section */}
          <form onSubmit={handleSubmit}>
            <div
              className="max-w-lg mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email to join waitlist"
                  aria-label="Email"
                  className="w-full px-5 py-4 bg-black/30 border border-gray-400 rounded-full text-white placeholder-gray-300 focus:outline-none focus:border-green-400 transition-colors backdrop-blur-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
                <AnimatedOrderButton
                  isLoading={isSubmitting}
                  isSuccess={submitSuccess}
                  disabled={isSubmitting}
                 
                />
              </div>
              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
              {submitSuccess && (
                <p className="text-green-400 text-sm mt-2">
                  Thank you! We'll be in touch soon.
                </p>
              )}
              <p className="text-gray-400 text-sm mt-3">
                Join thousands of others revolutionizing their commute
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

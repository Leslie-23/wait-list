import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import Navbar from "../components/navbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const { pathname } = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, [pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main className="flex flex-col min-h-screen font-[Euclid-Circular-B]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-start">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent z-10"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <div className="max-w-2xl" data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Let's Build
              <span className="text-[#2da873]"> Smarter Mobility</span>
            </h1>
            <p className="text-gray-300 mt-6 text-lg">
              Connect with our team to revolutionize African transport
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 bg-black/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Methods */}
            <div
              className="bg-black/30 p-6 rounded-2xl border border-gray-700/50"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Email</h3>
                  <p className="text-gray-300 text-sm">General inquiries</p>
                </div>
              </div>
              <a
                href="mailto:contact@trofficient.com"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                contact@trofficient.com
              </a>
            </div>

            <div
              className="bg-black/30 p-6 rounded-2xl border border-gray-700/50"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Phone</h3>
                  <p className="text-gray-300 text-sm">24/7 Support</p>
                </div>
              </div>
              <a
                href="tel:+233123456789"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                +233 123 456 789
              </a>
            </div>

            <div
              className="bg-black/30 p-6 rounded-2xl border border-gray-700/50"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">HQ</h3>
                  <p className="text-gray-300 text-sm">Accra, Ghana</p>
                </div>
              </div>
              <p className="text-gray-300">
                Blue House Residential, Spintex-Tema
              </p>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="grid md:grid-cols-2 gap-12">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              data-aos="fade-right"
            >
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-black/30 border border-gray-700/50 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-black/30 border border-gray-700/50 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-black/30 border border-gray-700/50 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full bg-black/30 border border-gray-700/50 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-400 text-black px-8 py-3 rounded-full font-bold hover:bg-green-300 transition-colors flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>

            <div
              className="bg-black/30 rounded-2xl overflow-hidden border border-gray-700/50"
              data-aos="fade-left"
            >
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.3910590219194!2d-0.18646738573571727!3d5.654674995911673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a157b6d443b%3A0x6c7f4a9a9a541d5e!2sAirport%20City%2C%20Accra!5e0!3m2!1sen!2sgh!4v1712345678901"
                width="100%"
                height="100%"
                style={{ minHeight: "400px", border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-16 text-center" data-aos="fade-up">
            <h3 className="text-xl font-bold mb-6 text-gray-300">
              Connect With Us
            </h3>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Twitter className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Github className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

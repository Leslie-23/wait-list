import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BarChart, Rocket, Wallet, Globe, Clock, Zap } from "lucide-react";
import Navbar from "./navbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Investors() {
  const { pathname } = useLocation();
  const [currentInvestment, setCurrentInvestment] = useState(150000);
  const investmentTarget = 500000;
  const progress = (currentInvestment / investmentTarget) * 100;

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, [pathname]);

  return (
    <main className="flex flex-col min-h-screen font-[Euclid-Circular-B]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-start">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent z-10"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <div className="max-w-2xl" data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Fueling Africa's
              <span className="text-[#2da873]"> Mobility Revolution</span>
            </h1>
            <p className="text-gray-300 mt-6 text-lg">
              $15.8M daily market | 300% projected ROI in 3 years
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-16 bg-black/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div
              className="bg-black/30 p-6 rounded-xl border border-gray-700/50"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-4 mb-4">
                <Wallet className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-semibold text-white">
                  Market Pain Points
                </h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• 65% daily commuter delays</li>
                <li>• 30-40% income spent on transport</li>
                <li>• $1.2B+ annual economic loss (Lagos)</li>
              </ul>
            </div>

            <div
              className="bg-black/30 p-6 rounded-xl border border-gray-700/50"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-4 mb-4">
                <Rocket className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-semibold text-white">
                  Growth Projections
                </h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <p>• 500% user base growth Y1-Y3</p>
                <p>• $1M ARR by Year 3</p>
                <p>• 50 buses → 300+ fleet in 36mo</p>
              </div>
            </div>

            <div
              className="bg-black/30 p-6 rounded-xl border border-gray-700/50"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center gap-4 mb-4">
                <Zap className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-semibold text-white">
                  Tech Advantage
                </h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <p>• 23% faster routes (AI)</p>
                <p>• 15% commission model</p>
                <p>• 98% payment success rate</p>
              </div>
            </div>
          </div>

          {/* Financial Projections */}
          <div
            className="bg-black/30 p-8 rounded-2xl border border-gray-700/50"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <BarChart className="w-8 h-8 text-green-400" />
              <span>3-Year Financial Outlook</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-green-400/10 rounded-xl">
                <p className="text-2xl font-bold text-green-400">Year 1</p>
                <p className="text-gray-300">$200K Revenue</p>
                <p className="text-sm text-gray-400">500 rides/day</p>
              </div>
              <div className="p-4 bg-green-400/10 rounded-xl">
                <p className="text-2xl font-bold text-green-400">Year 2</p>
                <p className="text-gray-300">$600K Revenue</p>
                <p className="text-sm text-gray-400">1,200 rides/day</p>
              </div>
              <div className="p-4 bg-green-400/10 rounded-xl">
                <p className="text-2xl font-bold text-green-400">Year 3</p>
                <p className="text-gray-300">$1M+ Revenue</p>
                <p className="text-sm text-gray-400">3,000 rides/day</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-black/50 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-green-400 font-medium">Market Capture</p>
                  <p className="text-gray-300">2% → 15% in 36mo</p>
                </div>
                <div>
                  <p className="text-green-400 font-medium">Gross Margin</p>
                  <p className="text-gray-300">62% by Year 2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Streams */}
          <div className="mt-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Globe className="w-8 h-8 text-green-400" />
              <span>Revenue Architecture</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-black/30 rounded-xl border border-gray-700/50">
                <p className="text-green-400 font-bold">15%</p>
                <p className="text-sm text-gray-300">Ride Commission</p>
              </div>
              <div className="p-4 bg-black/30 rounded-xl border border-gray-700/50">
                <p className="text-green-400 font-bold">$10-25</p>
                <p className="text-sm text-gray-300">Subscriptions/Mo</p>
              </div>
              <div className="p-4 bg-black/30 rounded-xl border border-gray-700/50">
                <p className="text-green-400 font-bold">B2B</p>
                <p className="text-sm text-gray-300">Corporate Contracts</p>
              </div>
              <div className="p-4 bg-black/30 rounded-xl border border-gray-700/50">
                <p className="text-green-400 font-bold">Ad Revenue</p>
                <p className="text-sm text-gray-300">In-App Advertising</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center" data-aos="fade-up">
            <div className="bg-green-400/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Join Our Seed Round</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                $500K target with 20% equity offering. Projected 5x return by
                2027
              </p>
              <button className="bg-green-400 text-black px-8 py-3 rounded-full font-bold hover:bg-green-300 transition-colors">
                Schedule Investment Call
              </button>
              <p className="mt-4 text-sm text-gray-400">
                investors@trofficient.com
              </p>
            </div>
            <div className="mt-8" data-aos="fade-up">
              <div className="mb-4 flex justify-between text-sm font-medium">
                <span className="text-green-400">
                  ${currentInvestment.toLocaleString()} raised
                </span>
                <span className="text-gray-300">
                  ${investmentTarget.toLocaleString()} target
                </span>
              </div>

              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-400 rounded-full transition-all duration-1000"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="mt-2 text-sm text-gray-400 text-center">
                `{progress}`% of seed round committed
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

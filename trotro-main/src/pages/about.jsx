import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Rocket, Lightbulb, Zap, Globe, Clock } from "lucide-react";
import Navbar from "../components/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../assets/trofficient-1.JPG";

export default function AboutUsSection() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, [pathname]);

  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Navbar />

        {/* Hero Section */}

        <section className="relative h-screen flex items-center justify-start">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent z-10"></div>
          </div>

          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-2xl" data-aos="fade-right">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Born in the traffic,
                  <br />
                  <span className="text-[#2da873]">perfected</span> for the
                  commute
                </h1>
              </div>
            </div>
          </div>
        </section>
        {/* Origin Story */}
        <section className="py-16 bg-black/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2" data-aos="fade-right">
                <div className="p-8 bg-green-400/10 rounded-xl relative">
                  <Lightbulb className="w-12 h-12 text-green-400 mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Why We Exist</h2>
                  <p className="text-gray-200 leading-relaxed">
                    Trofficient was conceived in the gridlock of Accra's rush
                    hour, where founder{" "}
                    <span className="text-green-400 whitespace-nowrap">
                      {" "}
                      Leslie Paul
                    </span>{" "}
                    spent 3 hours daily commuting. Existing solutions focused on
                    either luxury transport or basic tracking - none addressed
                    the core{" "}
                    <span className="text-green-400">efficiency problem</span>.
                  </p>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-6" data-aos="fade-left">
                <Zap className="w-12 h-12 text-green-400" />
                <h3 className="text-2xl font-bold">The Efficiency Gap</h3>
                <div className="space-y-4 text-gray-200">
                  <p>While others track vehicles, we optimize movement:</p>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>38% of urban transport capacity goes unused</li>
                    <li>Average commute wastes 22 minutes daily in detours</li>
                    <li>Fuel costs 40% more on inefficient routes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Efficiency Focus */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16" data-aos="fade-up">
              <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">
                Transport + Efficient ={" "}
                <span className="text-green-400">Trofficient</span>
              </h2>
              <p className="text-gray-200 max-w-2xl mx-auto">
                Our name defines our mission - making transportation systems
                work smarter, not harder. Where others see roads, we see
                networks. Where others see vehicles, we see data points.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up">
              <div className="bg-black/30 p-6 rounded-xl border border-gray-700/50">
                <Clock className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Time Intelligence</h3>
                <p className="text-gray-200">
                  Predictive algorithms that learn from 1.4M+ daily commutes
                </p>
              </div>

              <div className="bg-black/30 p-6 rounded-xl border border-gray-700/50">
                <Rocket className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Fuel Optimization</h3>
                <p className="text-gray-200">
                  18% average fuel savings through route perfecting
                </p>
              </div>

              <div className="bg-black/30 p-6 rounded-xl border border-gray-700/50">
                <Zap className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Instant Scaling</h3>
                <p className="text-gray-200">
                  Adapts to cities from 100K to 10M+ population seamlessly
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-16 bg-black/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row gap-8" data-aos="fade-up">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
                <div className="space-y-6 text-gray-200">
                  <div className="border-l-2 border-red-400 pl-4">
                    <p className="font-medium">2024</p>
                    <p>Born in Accra's traffic madness</p>
                    <p className="text-red-400 text-xs">
                      Long wait times and delay.
                    </p>
                    <p className="text-red-400 text-xs">
                      problems that BOLT ,UBER and YANGO could not fix
                    </p>
                  </div>
                  <div className="border-l-2 border-yellow-400 pl-4">
                    <p className="font-medium">2025</p>
                    <p>Pilot reduced commute times by 32%</p>
                    <p className="text-yellow-400 text-xs">
                      Launch promises to reduce commute times by up to 50%
                      report in delays
                    </p>
                    <p className="text-yellow-400 text-xs">
                      On launch and scale efficiecy is set to be the driving{" "}
                      <span className="font-italic">MANTRA</span> of the
                      organization
                    </p>
                  </div>
                  <div className="border-l-2 border-green-400 pl-4">
                    <p className="font-medium">
                      2026{" "}
                      <span className="text-green-500 font-italic">
                        The future
                      </span>
                    </p>
                    <p>Expand to 4 West African cities</p>
                    <p className="text-green-400 text-xs">
                      Integrate with the local unions
                    </p>
                    <p className="text-green-400 text-xs">
                      Become a household name synonymous to{" "}
                      <span className="text-italic">transport</span>{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">
                  By the Numbers{" "}
                  <span className="text-italic text-xs text-green-500">
                    ( Review research here )
                  </span>{" "}
                </h3>
                <div className="grid grid-cols-2 gap-4 text-gray-200">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <p className="text-green-400 text-2xl font-bold">1.2M+</p>
                    <p>Daily optimized trips</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <p className="text-green-400 text-2xl font-bold">42%</p>
                    <p>Fuel cost reduction</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <p className="text-green-400 text-2xl font-bold">17K+</p>
                    <p>Tonnes CO2 saved</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <p className="text-green-400 text-2xl font-bold">83%</p>
                    <p>User time reclaimed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

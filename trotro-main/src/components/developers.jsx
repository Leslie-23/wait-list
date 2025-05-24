import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Code2,
  Cpu,
  TestTube2,
  BrainCircuit,
  Linkedin,
  Twitter,
  Github,
  User,
} from "lucide-react";
import Navbar from "./navbar";
import AOS from "aos";
import "aos/dist/aos.css";

import leslie from "../assets/TONEE4994.JPG";
import elton from "../assets/TINW5361.JPG";
import joyce from "../assets/mockup2.png";
import selorm from "../assets/mockup2.png";

const teamMembers = [
  {
    name: "Leslie Paul",
    role: "Founder, CEO & Lead Backend Engineer",
    story: `The architect of Trofficient's core systems. Spent 72 consecutive hours debugging our routing algorithm during launch week. Believes 'sleep is for the optimized' when closing in on a solution.`,
    email: "leslie@trofficient.com",
    socials: [
      { icon: <Linkedin />, link: "#" },
      // { icon: <Twitter />, link: "#" },
      { icon: <Github />, link: "#" },
    ],
    icon: <Code2 className="w-6 h-6" />,
    image: leslie,
  },
  {
    name: "Elton John",
    role: "CTO & Lead Frontend Engineer",
    story:
      "Turned down FAANG offers to build intuitive African mobility solutions. Once refactored an entire UI component library in a weekend sprint. Always says: 'Smooth roads make fast journeys'.",
    email: "elton@trofficient.com",
    socials: [
      { icon: <Linkedin />, link: "#" },
      // { icon: <Twitter />, link: "#" },
      { icon: <Github />, link: "#" },
    ],
    icon: <Cpu className="w-6 h-6" />,
    image: elton,
  },
  {
    name: "Joyce Elli",
    role: "Ideation & Strategy Lead",
    story:
      "Our cognitive firestarter. Solved a critical pathfinding paradox during her lunch break using topology principles. Known for asking 'What if we invert the problem?'",
    email: "joyce@trofficient.com",
    socials: [
      { icon: <Linkedin />, link: "#" },
      { icon: <Twitter />, link: "#" },
    ],
    icon: <BrainCircuit className="w-6 h-6" />,
    image: <User />,
  },
  {
    name: "Selorm Prince",
    role: "Lead QA & User Advocate",
    story:
      "Our human fuzzer. Found 17 edge cases in what we thought was perfect code. Takes pride in 'breaking things to make them unbreakable'. Secret weapon: methodical chaos.",
    email: "selorm@trofficient.com",
    socials: [
      { icon: <Linkedin />, link: "#" },
      { icon: <Github />, link: "#" },
    ],
    icon: <TestTube2 className="w-6 h-6" />,
    image: <User />,
  },
];

export default function Developers() {
  const { pathname } = useLocation();

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
              The Minds Behind
              <span className="text-[#2da873]"> The Machine</span>
            </h1>
            <p className="text-gray-300 mt-6 text-lg">
              Building efficient mobility through relentless innovation
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-black/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-green-400 transition-all"
              >
                {/* Image Placeholder */}
                {/* <div className="w-full h-48 bg-gray-800/50 rounded-lg mb-4 animate-pulse"></div> */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-lg mb-4 border border-gray-700/50"
                />
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-green-400/10 rounded-lg">
                    {member.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">{member.role}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4">{member.story}</p>

                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-green-400 text-sm hover:text-green-300 transition-colors"
                    >
                      {member.email}
                    </a>
                    <div className="flex gap-3">
                      {member.socials.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.link}
                          className="text-gray-400 hover:text-green-400 transition-colors"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

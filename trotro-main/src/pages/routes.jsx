import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../assets/trofficient.jpg";
import {
  Route,
  MapPin,
  Clock,
  Compass,
  Car,
  Factory,
  Home,
  Ship,
  Bus,
  Users,
  Umbrella,
  ShoppingCart,
  Navigation,
  Bike,
  Shield,
  Briefcase,
} from "lucide-react";
import Navbar from "../components/navbar";

// Transportation route data for Accra
const accraRoutes = [
  {
    name: "N1 Highway",
    description: "International corridor connecting Accra to Tema Port",
    distance: "27km",
    time: "45-60 mins",
    keyPoints: ["Tema Port", "Kotoka Airport", "Ashaiman"],
    icon: <Route className="w-6 h-6" />,
  },
  {
    name: "N4 Liberation Road",
    description: "Western gateway to Accra Central",
    distance: "14km",
    time: "35-50 mins",
    keyPoints: ["Awudome Cemetery", "Kaneshie Market", "Graphic Road"],
    icon: <Compass className="w-6 h-6" />,
  },

  {
    name: "George Walker Bush Highway",
    description: "Modern bypass connecting East Legon to Spintex Road",
    distance: "11km",
    time: "20-40 mins",
    keyPoints: ["East Legon", "Adjiringano", "Airport Hills"],
    icon: <Car className="w-6 h-6" />,
  },
  {
    name: "Spintex Road",
    description: "Commercial artery with heavy industrial traffic",
    distance: "9km",
    time: "30-50 mins",
    keyPoints: ["Papaye", "Shoprite", "Palace Mall"],
    icon: <Factory className="w-6 h-6" />,
  },
  {
    name: "Madina Road",
    description: "Key residential-commercial corridor",
    distance: "8.5km",
    time: "25-45 mins",
    keyPoints: ["Legon Campus", "Madina Market", "Zongo Junction"],
    icon: <Home className="w-6 h-6" />,
  },
  {
    name: "Tema Motorway",
    description: "Primary industrial and port access route",
    distance: "19km",
    time: "40-70 mins",
    keyPoints: ["Community 18", "Dawa Industrial Zone", "Tema Roundabout"],
    icon: <Ship className="w-6 h-6" />,
  },

  {
    name: "Circle ↔ Achimota",
    description: "Popular trotro route through inner suburbs",
    distance: "7km",
    time: "35-55 mins",
    keyPoints: ["Abossey Okai", "Alajo", "Achimota Station"],
    icon: <Bus className="w-6 h-6" />,
  },
  {
    name: "Kaneshie ↔ Mallam",
    description: "Western commuter corridor",
    distance: "6.5km",
    time: "40-60 mins",
    keyPoints: ["Darkuman", "Odorkor", "Gbawe"],
    icon: <Users className="w-6 h-6" />,
  },
  {
    name: "Osu ↔ Labadi",
    description: "Coastal leisure route",
    distance: "5km",
    time: "20-40 mins",
    keyPoints: ["Labadi Beach", "Coconut Grove", "La Palm Hotel"],
    icon: <Umbrella className="w-6 h-6" />,
  },
  {
    name: "Agbogbloshie Market Run",
    description: "Informal trading network routes",
    distance: "3km",
    time: "15-30 mins",
    keyPoints: ["Abossey Okai", "Makola", "Rawlings Park"],
    icon: <ShoppingCart className="w-6 h-6" />,
  },
  {
    name: "Dansoman Commuter",
    description: "Residential mass transit corridor",
    distance: "9km",
    time: "40-65 mins",
    keyPoints: ["Dansoman", "Mpoase", "Kokrobite"],
    icon: <Bus className="w-6 h-6" />,
  },
  {
    name: "Abeka Lapaz Circuit",
    description: "Northern suburban connector",
    distance: "4km",
    time: "20-35 mins",
    keyPoints: ["Abeka Junction", "Lapaz Market", "Star Hotel"],
    icon: <Navigation className="w-6 h-6" />,
  },
  {
    name: "Adenta ↔ Madina",
    description: "Eastern residential shuttle",
    distance: "6km",
    time: "25-40 mins",
    keyPoints: ["Adenta Barrier", "SDA Junction", "Madina Zongo"],
    icon: <Bike className="w-6 h-6" />,
  },
  {
    name: "Cantonments Loop",
    description: "Diplomatic district service route",
    distance: "5km",
    time: "15-25 mins",
    keyPoints: ["Osu Castle", "Flagstaff House", "Villagio"],
    icon: <Shield className="w-6 h-6" />,
  },
  {
    name: "Dzorwulu Shuttle",
    description: "Business district connector",
    distance: "3km",
    time: "10-20 mins",
    keyPoints: ["A&C Mall", "Trasacco", "Fiesta Royale"],
    icon: <Briefcase className="w-6 h-6" />,
  },
];

export default function AppRoutes() {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const generateSpeckles = () => {
    // ... (keep the same speckles function from your example)
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen font-[Euclid-Circular-B] overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt="Accra routes background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-center py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mb-16" data-aos="fade-right">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Accra Transportation
                <span className="text-[#2da873]"> Network</span>
              </h1>
              <p className="text-gray-300 mt-6 text-lg">
                Major routes and transit corridors in Ghana's capital
              </p>
            </div>

            {/* Routes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accraRoutes.map((route, index) => (
                <div
                  key={route.name}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-green-400 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-green-400/10 rounded-lg">
                      {route.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {route.name}
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        {route.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-4">
                    <div className="flex items-center gap-2 text-green-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{route.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{route.distance}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <h4 className="text-sm font-medium text-green-400 mb-2">
                      Key Points
                    </h4>
                    <ul className="space-y-1">
                      {route.keyPoints.map((point) => (
                        <li
                          key={point}
                          className="text-gray-300 text-sm flex items-center gap-2"
                        >
                          <span className="text-green-400">•</span> {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

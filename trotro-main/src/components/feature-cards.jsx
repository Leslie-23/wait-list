// export default function FeaturesCards() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <div className="w-full max-w-7xl px-4 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {/* Rides Card */}
//           <div
//             id="card-1"
//             className="relative overflow-hidden rounded-xl text-white h-[400px]"
//           >
//             <div className="p-8 h-full flex flex-col">
//               <div className="mb-auto">
//                 <h2 className="text-4xl font-bold mb-4">Real Time Tracking</h2>
//                 <p className="text-gray-300 text-lg">
//                   Track our bus in real-time and never miss a ride
//                 </p>
//               </div>
//               <div className="mb-4">
//                 <button className="bg-[#34BE82] hover:bg-[#2da873] text-white font-medium py-3 px-6 rounded-md">
//                   Get started
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Delivery Card */}
//           <div
//             id="card-2"
//             className="relative overflow-hidden rounded-xl  text-white h-[400px] bg-black/50"
//           >
//             <div className="p-8 h-full flex flex-col">
//               <div className="mb-auto">
//                 <h2 className="text-4xl font-bold mb-4">Convenient Scheduling</h2>
//                 <p className="text-gray-300 text-lg">
//                   Plan your journey with easy-to-use schedule and receive timely notifications
//                 </p>
//               </div>
//               <div className="mb-4">
//                 <button className="bg-[#34BE82] hover:bg-[#2da873] text-white font-medium py-3 px-6 rounded-md">
//                   Go to Bolt Food
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Car-sharing Card */}
//           <div
//             id="card-3"
//             className="relative overflow-hidden rounded-xl  text-white h-[400px]"
//           >
//             <div className="p-8 h-full flex flex-col">
//               <div className="mb-auto">
//                 <h2 className="text-4xl font-bold mb-4">Smart Routing</h2>
//                 <p className="text-gray-300 text-lg">
//                   AI-powered route optimization for smooth and efficient journeys
//                 </p>
//               </div>
//               <div className="mb-4">
//                 <button className="bg-[#E9F9F1] hover:bg-[#d8f0e3] text-black font-medium py-3 px-6 rounded-md">
//                   Go to Bolt Drive
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Groceries Card */}
//           <div
//             id="card-4"
//             className="relative overflow-hidden rounded-xl  text-white h-[400px]"
//           >
//             <div className="p-8 h-full flex flex-col">
//               <div className="mb-auto">
//                 <h2 className="text-4xl font-bold mb-4">Convenient Scheduling</h2>
//                 <p className="text-white text-lg">
//                   Plan your journey with easy-to-use schedule and receive timely notifications.
//                 </p>
//               </div>
//               <div className="mb-4">
//                 <button className="bg-[#E9F9F1] hover:bg-[#d8f0e3] text-black font-medium py-3 px-6 rounded-md">
//                   Go to Bolt Market
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Clock } from "lucide-react";
import React from "react";

export default function FeaturesPage() {
  const features = [
    {
      id: 1,
      title: "Feature One",
      subtitle: "Earn money as a driver",
      heading: "Real Time Tracking",
      description: "Track our bus in real-time and never miss a ride",
      ctaText: "Join Waitlist",
      ctaLink: "#register-drive",
      imageUrl:
        "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imagePosition: "left",
    },
    {
      id: 2,
      title: "Feature Two",
      subtitle: "Make money delivering food",
      heading: "Digital Payments",
      description:
        "Plan your journey with easy-to-use schedule and receive timely notifications.",
      ctaText: "We'd love to have you",
      ctaLink: "#register-courier",
      imageUrl:
        "https://images.unsplash.com/photo-1726056652605-c4cf751ec0df?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imagePosition: "right",
    },
    {
      id: 3,
      title: "Feature Three",
      subtitle: "Grow your business",
      heading: "Smart Routing",
      description:
        "AI-powered route optimization for smooth and efficient journeys",
      ctaText: "Learn more",
      ctaLink: "#become-partner",
      imageUrl:
        "https://images.unsplash.com/photo-1678466272132-ded8f248f172?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imagePosition: "left",
    },
    {
      id: 4,
      title: "Feature Four",
      subtitle: "Fleet management",
      heading: "Scheduling Flexibility",
      description:
        " Plan your journey with easy-to-use schedule and receive timely notifications.",
      ctaText: "Download App",
      ctaLink: "#fleet-management",
      imageUrl:
        "https://images.unsplash.com/photo-1600783245563-16114264a2c8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imagePosition: "right",
    },
  ];

  return (
    <div className="min-h-screen font-[Euclid-Circular-B]">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          What sets us apart
        </h1>
        <p className="text-lg text-gray-200 max-w-3xl">
          <Clock className="inline-block ml-2 text-green-500 mr-1" size={20} />
           A 2-minute read on how we are different
          {/* <br /> */}
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {features.map((feature) => (
          <FeatureSection key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
}

function FeatureSection({ feature }) {
  const {
    title,
    subtitle,
    heading,
    description,
    ctaText,
    ctaLink,
    imageUrl,
    imagePosition,
  } = feature;

  if (imagePosition === "left") {
    return (
      <div className="py-16 md:py-16 ">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 group relative overflow-hidden">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              className="rounded-xl w-full h-[600px] object-cover shadow-md transition-transform duration-500 ease-in-out group-hover:scale-110 z-0"
            />
          </div>

          <div className="w-full md:w-1/2">
            <div className="text-sm text-[#34BE82] font-medium mb-1">
              {subtitle}
            </div>
            <h2 className="text-3xl font-bold mb-4">{heading}</h2>
            <p className="text-gray-200 mb-6">{description}</p>
            <a
              href={ctaLink}
              className="inline-block bg-[#34BE82] hover:bg-[#2da873] text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-16 ">
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
        {/* Image Column */}
        <div className="w-full md:w-1/2 group relative overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="rounded-xl w-full h-[600px] object-cover shadow-md  transition-transform duration-500 ease-in-out group-hover:scale-110 z-0"
          />
        </div>

        <div className="w-full md:w-1/2">
          <div className="text-sm text-[#34BE82] font-medium mb-1">
            {subtitle}
          </div>
          <h2 className="text-3xl font-bold mb-4">{heading}</h2>
          <p className="text-gray-200 mb-6">{description}</p>
          <a
            href={ctaLink}
            className="inline-block bg-[#34BE82] hover:bg-[#2da873] text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
}

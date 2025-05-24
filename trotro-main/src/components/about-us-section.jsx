import image from "../assets/mockup2.png";
import { Link } from "react-router-dom";

export default function AboutUsSection() {
  const generateSpeckles = () => {
    const speckles = [];
    for (let i = 0; i < 40; i++) {
      const size = Math.random() * 7 + 1; // 1px to 3px
      const left = Math.random() * 100; // %
      const duration = Math.random() * 20 + 10; // 10s to 30s
      const delay = Math.random() * 20; // 0s to 20s

      speckles.push(
        <span
          key={i}
          className="speckle"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    }
    return speckles;
  };
  return (
    <section className=" text-white min-h-screen flex flex-col items-center justify-center px-4 py-16 relative z-10 overflow-hidden">
      {generateSpeckles()}
      <div className="container mx-auto max-w-6xl flex flex-col items-center font-[Euclid-Circular-B]">
        <div className="text-center mb-12">
          <p className="text-lg mb-2">About us</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-4xl">
            Trofficient is the first Ghanaian mobility super-app.
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            We're making cities for people, offering better alternatives for
            every purpose a commercial car serves — including ride-hailing,
            shared cars, scooters, and food and grocery delivery.
          </p>
    <div className="mt-8">
        <Link
            to="/mission"
            className=" bg-white text-[#26ae60] font-medium py-3 px-6 rounded-md hover:bg-gray-100 transition-colors"
          >
            Our mission
          </Link>
    </div>
          
        </div>

        {/* <div className="mt-8 w-full ">
          <img
            src={image}
            alt="Bolt app interface showing ride options"
            className="w-full h-auto rounded-tl-4xl rounded-tr-4xl z-10 shadow-lg shadow-green-500/30"
          />
        </div> */}
      </div>
    </section>
  );
}

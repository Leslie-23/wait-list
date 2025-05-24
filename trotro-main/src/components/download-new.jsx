import image from "../assets/portrait-mockup.png";
import "./styles.css";
import mobile from "../assets/mobile.webm";
export default function DownloadPage() {
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
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 py-16 relative z-10 overflow-hidden font-[Euclid-Circular-B]">
      {generateSpeckles()}
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Phone image */}
          <video
            src="https://res.cloudinary.com/dklqsfwcu/video/upload/v1748020975/5_23_2025_18_22_9_contentcore.xyz_fth294.webm"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[600px] max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] object-contain drop-shadow-xl"
          />

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Download our app
            </h1>
            <p className="text-gray-400 mb-8">
              Available for iOS and Android devices.
            </p>

            <div className="inline-flex space-x-4 mb-8 ">
              <button className="text-white font-medium hover:text-[#26ae60] border-b-2 border-[#26ae60] pb-2">
                Rides
              </button>
            </div>

            <h2 className="text-3xl font-bold mb-4">
              The fast, affordable way to ride.
            </h2>
            <p className="text-gray-400 mb-8">
              Available for iOS and Android devices.
            </p>

            <button className="bg-[#26ae60] hover:bg-[#229954] text-white font-medium py-3 px-6 rounded-md transition-colors">
              Get Trofficient
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

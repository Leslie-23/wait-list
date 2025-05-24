import React from "react";
import Navbar from "../components/navbar";
import IntroductionPage from "../components/introduction";
import FeaturesPage from "../components/feature-cards";
import Footer from "../components/footer";
import PainPointCards from "../components/pain-points";
import AboutUsSection from "../components/about-us-section";
import DownloadPage from "../components/download-new";

const Home = () => {
  return (
    <div>
      <Navbar />
      <IntroductionPage />
      <PainPointCards />
      <DownloadPage />
      <FeaturesPage />
      <AboutUsSection />
      <Footer />
    </div>
  );
};

export default Home;

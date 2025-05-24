import React from "react";
import IntroductionPage from "./components/introduction";
import Navbar from "./components/navbar";
import "./index.css";
import FeatureCards from "./components/feature-cards";
import DownloadPage from "./components/download";
import OrderButton from "./components/animated-button";

const App = () => {
  return (
    <div>
      <Navbar />
      <IntroductionPage />
      <FeatureCards />
      <DownloadPage />

    </div>
  );
};

export default App;

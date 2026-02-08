import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import StatsSection from "./components/StatsSection/StatsSection";
import Recruiters from "./components/Recruiters/Recruiters";
import PlacementProcess from "./components/PlacementProcess/PlacementProcess";
import Footer from "./components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <Recruiters />
      <PlacementProcess />
      <Footer />
    </>
  );
};

export default Home;

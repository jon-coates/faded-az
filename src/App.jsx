// import React from 'react';
import Hero from "./components/Hero";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Navbar from "./components/Navbar";
import Instagram from "./components/Instagram";
import MetaTags from "./components/Metatags";
import LocalBusinessSchema from "./components/LocalBusinessSchema";
import PerformanceOptimizer from "./components/PerformanceOptimizer";
import TimelyScript from "./components/TimelyScript";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Map from "./components/Map";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Content sections - all relative positioned */}
      <div className="relative" style={{ zIndex: 10 }}>
        <MetaTags />
        <LocalBusinessSchema />
        <PerformanceOptimizer />
        <TimelyScript />
        <Navbar />
        <Hero />
        <About />
        <Map />
        <Reviews />
        <Instagram />
        <FAQ />
        <Footer />
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default App;

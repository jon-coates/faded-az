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
      {/* Fixed background image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dixfrcina/image/upload/w_1080/v1758201585/faded-az-west-end-barber-internal-02_onkvts.jpg)`,
          zIndex: 0
        }}
        aria-hidden="true"
      />
      
      {/* Fixed dark overlay for hero section */}
      <div 
        className="fixed top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '100vh',
          background: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1
        }}
        aria-hidden="true"
      />
      
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

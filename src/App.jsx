// import React from 'react';
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Instagram from "./components/Instagram";
import MetaTags from "./components/Metatags";
import LocalBusinessSchema from "./components/LocalBusinessSchema";
import PerformanceOptimizer from "./components/PerformanceOptimizer";
import TimelyScript from "./components/TimelyScript";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Map from "./components/Map";

function App() {
  return (
    <div>
      <MetaTags />
      <LocalBusinessSchema />
      <PerformanceOptimizer />
      <TimelyScript />
      <Navbar />
      <Hero />
      <About />
      <Instagram />
      <Map />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

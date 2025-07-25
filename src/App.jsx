// import React from 'react';
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Instagram from "./components/Instagram";
import MetaTags from "./components/Metatags";
import LocalBusinessSchema from "./components/LocalBusinessSchema";
import PerformanceOptimizer from "./components/PerformanceOptimizer";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <MetaTags />
      <LocalBusinessSchema />
      <PerformanceOptimizer />
      <Navbar />
      <Hero />
      <Instagram />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

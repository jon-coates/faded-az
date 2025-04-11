// import React from 'react';
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Instagram from "./components/Instagram";
import MetaTags from "./components/Metatags";

function App() {
  return (
    <div>
      <MetaTags />
      {/* <Navbar /> */}
      <Hero />
      <Instagram />
      <About />
    </div>
  );
}

export default App;

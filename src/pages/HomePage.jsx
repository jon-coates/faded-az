import MetaTags from "../components/Metatags";
import Hero from "../components/Hero";
import About from "../components/About";
import Instagram from "../components/Instagram";
import Map from "../components/Map";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";

export default function HomePage() {
  return (
    <>
      <MetaTags />
      <Hero />
      <About />
      <Instagram />
      <Map />
      <Reviews />
      <FAQ />
    </>
  );
}

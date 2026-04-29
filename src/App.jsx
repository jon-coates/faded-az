import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import LocalBusinessSchema from "./components/LocalBusinessSchema";
import PerformanceOptimizer from "./components/PerformanceOptimizer";
import TimelyScript from "./components/TimelyScript";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import ServicesPage from "./pages/ServicesPage";
import FindUsPage from "./pages/FindUsPage";
import ReviewsPage from "./pages/ReviewsPage";

function App() {
  return (
    <div className="bg-gray-950">
      <div className="relative" style={{ zIndex: 10 }}>
        <LocalBusinessSchema />
        <PerformanceOptimizer />
        <TimelyScript />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/find-us" element={<FindUsPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;

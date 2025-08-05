import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
import AboutUs from "./pages/AboutUs";
import BackToTopButton from "./components/BackToTopButton";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between">
        {/* Navbar */}
        <div className="sticky bg-white top-0 z-50">
          <Navbar />
        </div>

        {/* Page Content */}
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>

          {/* Back to Top Button */}
          <BackToTopButton />
        </div>

        {/* Footer */}
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

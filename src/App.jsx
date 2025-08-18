import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
import AdminDashboard from "./pages/AdminDashboard";
import AboutUs from "./pages/AboutUs";

function AppWrapper() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");
  const loc = useLocation();
  useEffect(() => {
    // @ts-ignore
    window.gtag?.("event", "page_view", {
      page_location: window.location.href,
      page_path: window.location.pathname + window.location.search,
      page_title: document.title,
    });
  }, [loc.pathname, loc.search]);

  // Optional: scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Only show Navbar if not on admin page */}
      {!isAdminPage && (
        <div className="sticky bg-white top-0 z-50">
          <Navbar />
        </div>
      )}
      {/* Main Content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>

      {/* Only show Footer if not on admin page */}
      {!isAdminPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

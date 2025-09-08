import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
import AdminDashboard from "./pages/AdminDashboard";
import AboutUs from "./pages/AboutUs";
import LoginPage from "./pages/LoginPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import AdminRoute from "./components/AdminRoute";

function AppWrapper() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (import.meta.env.VITE_GA_ID) {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${
      import.meta.env.VITE_GA_ID
    }`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${import.meta.env.VITE_GA_ID}');
  `;
    document.head.appendChild(script2);
  }

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {!isAdminPage && (
        <div className="sticky bg-white top-0 z-50">
          <Navbar />
        </div>
      )}

      <div className="flex-grow">
        <Routes>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />

          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          {/* Admin */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
        </Routes>
      </div>

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

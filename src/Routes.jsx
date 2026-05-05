import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/home/Home";
import Contact from "./assets/pages/contact/Contact";
import Navbar from "./assets/components/Navbar/Navbar";
import Footer from "./assets/components/Footer/Footer";
import WhoWeAre from "./assets/pages/whoweare/WhoWeAre";
import Distributors from "./assets/pages/distributors/Distributors";
import Resellers from "./assets/pages/resellers/Resellers";
import PrivacyPolicy from "./assets/pages/privacypolicy/PrivacyPolicy";
import ScrollToTop from "./assets/components/ScrollToTop/ScrollToTop";

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<WhoWeAre />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/distribuidores" element={<Distributors />} />
          <Route path="/resellers" element={<Resellers />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRoutes;

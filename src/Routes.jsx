import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Contact from "./assets/pages/Contact";
import Navbar from "./assets/components/Navbar/Navbar";
import Footer from "./assets/components/Footer/Footer";
import WhoWeAre from "./assets/pages/whoweare/WhoWeAre";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<WhoWeAre />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRoutes;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Contact from './assets/pages/Contact';
import Navbar from './assets/components/Navbar/Navbar';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>ACE</h1>
      </div>
      {isMobile && (
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      )}
      <ul className={`nav-links ${isMobile && isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => isMobile && toggleMenu()}>Home</Link></li>
        <li><Link to="/about" onClick={() => isMobile && toggleMenu()}>About</Link></li>
        <li><Link to="/contact" onClick={() => isMobile && toggleMenu()}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

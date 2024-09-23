import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from './../../../TranslationContext'; // Cambia la ruta si es necesario
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { translate, setCurrentLanguage } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    setIsDropdownOpen(false);
    setIsOpen(false);
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
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>{translate('home')}</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>{translate('about')}</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>{translate('contact')}</Link></li>
        <li className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-toggle">
            {translate('language')}
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><button onClick={() => changeLanguage('cat')}>{translate('language1')}</button></li>
              <li><button onClick={() => changeLanguage('es')}>{translate('language2')}</button></li>
              <li><button onClick={() => changeLanguage('en')}>{translate('language3')}</button></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

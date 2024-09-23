import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from './../../../TranslationContext'; // Cambia la ruta si es necesario
import './Navbar.css';

import flagCat from './../../../assets/svgs/catalonia.svg';
import flagEs from './../../../assets/svgs/spain.svg';
import flagEn from './../../../assets/svgs/united-kingdom.svg';

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
        {/* Usamos NavLink para que se aplique una clase al link activo */}
        <li>
          <NavLink 
            exact to="/" 
            activeClassName="active" 
            onClick={toggleMenu}
          >
            {translate('home')}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            activeClassName="active" 
            onClick={toggleMenu}
          >
            {translate('about')}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            activeClassName="active" 
            onClick={toggleMenu}
          >
            {translate('contact')}
          </NavLink>
        </li>
        <li className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-toggle">
            {translate('language')}
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <button onClick={() => changeLanguage('cat')}>
                  <img src={flagCat} alt="Catalan flag" className="flag-icon" /> {translate('language1')}
                </button>
              </li>
              <li>
                <button onClick={() => changeLanguage('es')}>
                  <img src={flagEs} alt="Spanish flag" className="flag-icon" /> {translate('language2')}
                </button>
              </li>
              <li>
                <button onClick={() => changeLanguage('en')}>
                  <img src={flagEn} alt="English flag" className="flag-icon" /> {translate('language3')}
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

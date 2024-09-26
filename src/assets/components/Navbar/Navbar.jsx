import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from './../../../TranslationContext';
import './Navbar.css';

import logo from './../../../assets/images/logoAce.png';

import flagCat from './../../../assets/svgs/catalonia.svg';
import flagEs from './../../../assets/svgs/spain.svg';
import flagEn from './../../../assets/svgs/united-kingdom.svg';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { translate, currentLanguage, setCurrentLanguage } = useTranslation();
  const [scrolled, setScrolled] = useState(false); // Nuevo estado para detectar el scroll

  const flags = {
    en: flagEn,
    es: flagEs,
    cat: flagCat,
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Cambia el valor según tus necesidades
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" onClick={toggleMenu}>
            {translate('home')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={toggleMenu}>
            {translate('about')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={toggleMenu}>
            {translate('contact')}
          </NavLink>
        </li>
        <li className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-toggle">
            <img src={flags[currentLanguage]} alt="Selected language" className="flag-icon" />
            <FaChevronDown className="dropdown-arrow" />
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

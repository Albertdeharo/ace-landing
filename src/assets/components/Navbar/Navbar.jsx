import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from './../../../TranslationContext';
import './Navbar.css';

import logoCombined from './../../../assets/images/logo-phrase.png';
import flagCat from './../../../assets/svgs/catalonia.svg';
import flagEs from './../../../assets/svgs/spain.svg';
import flagEn from './../../../assets/svgs/united-kingdom.svg';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { translate, currentLanguage, setCurrentLanguage } = useTranslation();

  const flags = { en: flagEn, es: flagEs, cat: flagCat };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    setIsDropdownOpen(false);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languageSelectorDropdown = (isMobileClass) => (
    <div className={`dropdown ${isMobileClass}`}>
      <button onClick={toggleDropdown} className="dropdown-toggle">
        <img src={flags[currentLanguage]} alt="Selected language" className="flag-icon" />
        <FaChevronDown className={`dropdown-arrow ${isDropdownOpen ? 'rotate' : ''}`} />
      </button>
      
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          {Object.keys(flags)
            .filter((lang) => lang !== currentLanguage)
            .map((lang) => (
              <li key={lang}>
                <button onClick={() => changeLanguage(lang)}>
                  <img src={flags[lang]} alt={`${lang} flag`} className="flag-icon" />
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );

  return (
    <nav className="navbar">
      
      <div className="navbar__left">
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <img src={logoCombined} alt="Ace Pro Grip Logo" className="brand-logo" />
        </NavLink>
      </div>

      <div className={`navbar__center ${isOpen ? 'open' : ''}`}>
        <div className="menu-links__container">
          {/* Cambiamos toggleMenu por () => setIsOpen(false) */}
          <NavLink to="/" onClick={() => setIsOpen(false)} className="nav-item">
            {translate('nav_home') || 'Inicio'}
          </NavLink>
          <NavLink to="/resellers" onClick={() => setIsOpen(false)} className="nav-item">
            {translate('nav_resellers') || 'Resellers'}
          </NavLink>
          <NavLink to="/distribuidores" onClick={() => setIsOpen(false)} className="nav-item">
            {translate('nav_distributors') || 'Distribuidores'}
          </NavLink>
          <NavLink to="/quienes-somos" onClick={() => setIsOpen(false)} className="nav-item">
            {translate('nav_about') || 'Quiénes somos'}
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className="nav-item">
            {translate('nav_contact') || 'Contacto'}
          </NavLink>
          
          {languageSelectorDropdown('mobile-lang')}
        </div>
      </div>

      <div className="navbar__right">
        {languageSelectorDropdown('desktop-lang')}
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
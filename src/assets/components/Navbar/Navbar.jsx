import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from './../../../TranslationContext';
import './Navbar.css';

import logo from './../../../assets/images/logo_ace_transparente_prev_ui.png';
import logoPhrase from './../../../assets/images/frase_ace_transparente.png';
import flagCat from './../../../assets/svgs/catalonia.svg';
import flagEs from './../../../assets/svgs/spain.svg';
import flagEn from './../../../assets/svgs/united-kingdom.svg';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { translate, currentLanguage, setCurrentLanguage } = useTranslation();
  const dropdownRef = useRef(null);

  const flags = { en: flagEn, es: flagEs, cat: flagCat };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('no-scroll', !isOpen);
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    setIsDropdownOpen(false);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="logoPhrase">
        <NavLink to="/">
          <img src={logoPhrase} alt="logo" />
        </NavLink>
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <div className="logo" onClick={toggleMenu}>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="menu-links">
          <div className="menu-links__container">
            <span>
              <NavLink to="/about" onClick={toggleMenu}>{translate('about')}</NavLink>
            </span>
            <span>
              <NavLink to="/contact" onClick={toggleMenu}>{translate('contact')}</NavLink>
            </span>
          </div>
          <div className="dropdown" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="dropdown-toggle">
              <img src={flags[currentLanguage]} alt="Selected language" className="flag-icon" />
              <FaChevronDown className={`dropdown-arrow ${isDropdownOpen ? 'rotate' : ''}`} />
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                {Object.keys(flags)
                  .filter((lang) => lang !== currentLanguage)
                  .map((lang) => (
                    <div key={lang}>
                      <button onClick={() => changeLanguage(lang)}>
                        <img src={flags[lang]} alt={`${lang} flag`} className="flag-icon" />
                      </button>
                    </div>
                  ))}
              </ul>
            )}
          </div>
        </div>
        <div className="logoPhrase" onClick={toggleMenu}>
          <NavLink to="/">
            <img src={logoPhrase} alt="logo" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

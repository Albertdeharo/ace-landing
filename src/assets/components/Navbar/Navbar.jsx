import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from './../../../TranslationContext';
import ReactCountryFlag from 'react-country-flag';
import './Navbar.css';

import logoCombined from './../../../assets/images/logo_img_transparente.png';
import flagCat from './../../../assets/svgs/catalonia.svg';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { translate, currentLanguage, setCurrentLanguage } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);
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

  const renderFlag = (lang) => {
    if (lang === 'cat') {
      return <img src={flagCat} alt="Català" className="flag-icon custom-svg-flag" />;
    }
    const countryCodes = { en: 'GB', es: 'ES', de: 'DE', it: 'IT', fr: 'FR', pt: 'PT' };
    return (
      <ReactCountryFlag 
        countryCode={countryCodes[lang]} 
        svg 
        style={{
          width: '1.5em', height: '1.5em',
          borderRadius: '50%', objectFit: 'cover'
        }} 
        title={lang}
      />
    );
  };

  const languageSelectorDropdown = (isMobileClass) => (
    <div className={`dropdown ${isMobileClass}`}>
      <button onClick={toggleDropdown} className="dropdown-toggle" aria-expanded={isDropdownOpen}>
        {renderFlag(currentLanguage)}
        <FaChevronDown className={`dropdown-arrow ${isDropdownOpen ? 'rotate' : ''}`} />
      </button>
      
      <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
        {['es', 'en', 'cat', 'de', 'it', 'fr', 'pt']
          .filter((lang) => lang !== currentLanguage)
          .map((lang) => (
            <li key={lang} style={{ width: '100%' }}>
              <button onClick={() => changeLanguage(lang)} className="dropdown-item">
                {renderFlag(lang)}
                <span className="lang-text">{lang.toUpperCase()}</span>
              </button>
            </li>
          ))}
      </ul>
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
          <NavLink to="/comprar" onClick={() => setIsOpen(false)} className="nav-item" style={{ color: '#e7185f', fontWeight: 'bold' }}>
            {translate('nav_buy') || 'Comprar'}
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
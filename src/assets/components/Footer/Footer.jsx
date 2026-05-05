import { Link } from 'react-router-dom';
import { useTranslation } from './../../../TranslationContext'; 
import { FaInstagram, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTiktok } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { translate } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top-wave"></div>
      
      <div className="footer__container">
        {/* Columna 1: Marca y descripción */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo-text-link">
            <span className="footer__logo-text">
              ACE PRO <span className="highlight-text">GRIP</span>
            </span>
          </Link>
          <p className="footer__description">
            {translate('footer_desc')}
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos (Explora) */}
        <div className="footer__links">
          <h4 className="footer__title">{translate('quick_links') || 'Explora'}</h4>
          <ul>
            <li><Link to="/">{translate('home') || 'Inicio'}</Link></li>
            <li><Link to="/resellers">{translate('nav_resellers') || 'Resellers'}</Link></li>
            <li><Link to="/distribuidores">{translate('nav_distributors') || 'Distribuidores'}</Link></li>
            <li><Link to="/quienes-somos">{translate('nav_about') || 'Quiénes somos'}</Link></li>
            <li><Link to="/contact">{translate('contact') || 'Contacto'}</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="footer__contact">
          <h4 className="footer__title">{translate('contact_us')}</h4>
          <ul>
            <li>
              <FaEnvelope className="footer__icon" />
              <a href="mailto:contacto@aceprogrip.com">contacto@aceprogrip.com</a>
            </li>
            <li>
              <FaMapMarkerAlt className="footer__icon" />
              <span>Barcelona, Spain</span>
            </li>
          </ul>
        </div>

        {/* Columna 4: Redes Sociales */}
        <div className="footer__social">
          <h4 className="footer__title">{translate('follow_us')}</h4>
          <div className="footer__social-icons">
            <a href="https://www.instagram.com/aceprogrip/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/aceprogrip/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.tiktok.com/@ace.pro.grip" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright y legales */}
      <div className="footer__bottom">
        <p>&copy; {currentYear} ACE PRO GRIP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
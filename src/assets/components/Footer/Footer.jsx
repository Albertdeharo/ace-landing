import { Link } from 'react-router-dom';
import { useTranslation } from './../../../TranslationContext'; 
import { FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';
import logo from './../../../assets/images/logo_ace_transparente_prev_ui.png'; 

const Footer = () => {
  const { translate } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top-wave"></div>
      
      <div className="footer__container">
        {/* Columna 1: Marca y descripción */}
        <div className="footer__brand">
          <Link to="/">
            <img src={logo} alt="ACE PRO GRIP Logo" className="footer__logo" />
          </Link>
          <p className="footer__description">
            {translate('footer_desc')}
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div className="footer__links">
          <h4 className="footer__title">{translate('quick_links')}</h4>
          <ul>
            <li><Link to="/">{translate('home')}</Link></li>
            <li><Link to="/contact">{translate('contact')}</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="footer__contact">
          <h4 className="footer__title">{translate('contact_us')}</h4>
          <ul>
            <li>
              <FaEnvelope className="footer__icon" />
              <a href="mailto:hello@aceprogrip.com">hello@aceprogrip.com</a>
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
          </div>
        </div>
      </div>

      {/* Copyright y legales */}
      <div className="footer__bottom">
        <p>&copy; {currentYear} ACE PRO GRIP. All rights reserved.</p>
        {/* <div className="footer__legal-links">
          <Link to="/privacy">{translate('privacy')}</Link>
          <span>|</span>
          <Link to="/terms">{translate('terms')}</Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
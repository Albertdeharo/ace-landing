import { Link } from 'react-router-dom';
import { useTranslation } from './../../../TranslationContext';
import { FaStoreAlt, FaDumbbell, FaUsers, FaExternalLinkAlt } from 'react-icons/fa';

import '../distributors/Distributors.css'; 
import './Resellers.css';

import logoCelescala from './../../../assets/images/partners/celescala-logo.jpg';
import logoMaresmePadelClub from './../../../assets/images/partners/maresme-padel-club.jpg';
import logoOnePadelValencia from './../../../assets/images/partners/one-padel-valencia.jpg';
import logoPadelCañaveral from './../../../assets/images/partners/padel-cañaveral.jpg';
import logoCatalunyaPadelClub from './../../../assets/images/partners/catalunya-padel-club.jpeg';

const Resellers = () => {
  const { translate } = useTranslation();

  return (
    <div className="resellers-page">
      <section className="dist-hero section">
        <h1 className="hero-title custom-title">
          {translate('reseller_hero_title')} <span>{translate('reseller_hero_subtitle')}</span>
        </h1>
      </section>

      <section className="dist-info section">
        <div className="info-grid">
          <div className="info-text">
            <p className="lead-text">{translate('reseller_intro_1')}</p>
            <p className="custom-description p-0">{translate('reseller_intro_2')}</p>
            <p className="custom-description p-0"><strong>{translate('reseller_intro_3')}</strong></p>
          </div>
          
          <div className="info-icons">
            <div className="icon-box">
              <FaStoreAlt className="dist-icon" aria-hidden="true" />
              <span>{translate('reseller_icon_1')}</span>
            </div>
            <div className="icon-box">
              <FaDumbbell className="dist-icon" aria-hidden="true" />
              <span>{translate('reseller_icon_2')}</span>
            </div>
            <div className="icon-box">
              <FaUsers className="dist-icon" aria-hidden="true" />
              <span>{translate('reseller_icon_3')}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="reseller-cta section bg-light text-center">
        <h2 className="custom-title mb-2 text-white">{translate('reseller_cta_title')}</h2>
        <p className="custom-subtitle mb-4 text-gray">{translate('reseller_cta_desc')}</p>
        
        <Link to="/contact" className="btn-primary">
          {translate('reseller_cta_button')}
        </Link>
      </section>

      <section className="dist-current section bg-dark">
        <h2 className="custom-title mb-4 text-white">{translate('reseller_current_title')}</h2>
        
        <div className="partners-grid">
          {/* CE L'escala */}
          <a href="https://celescala.com/" target="_blank" rel="noopener noreferrer" className="partner-card">
            <div className="partner-image-container">
              <img src={logoCelescala} alt="C. E. L'escala Logo" className="partner-logo" />
            </div>
            <div className="partner-content">
              <h3 className="partner-name">C. E. L'escala</h3>
              <span className="partner-link">
                {translate('dist_visit_web')} <FaExternalLinkAlt aria-hidden="true" />
              </span>
            </div>
          </a>

          {/* Maresme padel club */}
          <a href="https://www.instagram.com/maresmepadelclub/" target="_blank" rel="noopener noreferrer" className="partner-card">
            <div className="partner-image-container">
              <img src={logoMaresmePadelClub} alt="Maresme Padel Club Logo" className="partner-logo" />
            </div>
            <div className="partner-content">
              <h3 className="partner-name">Maresme Padel Club</h3>
              <span className="partner-link">
                {translate('dist_visit_instagram')} <FaExternalLinkAlt aria-hidden="true" />
              </span>
            </div>
          </a>

          {/* One Padel Valencia */}
          <a href="https://www.instagram.com/onepadelvalencia/" target="_blank" rel="noopener noreferrer" className="partner-card">
            <div className="partner-image-container">
              <img src={logoOnePadelValencia} alt="One Padel Valencia Logo" className="partner-logo" />
            </div>
            <div className="partner-content">
              <h3 className="partner-name">One Padel Valencia</h3>
              <span className="partner-link">
                {translate('dist_visit_instagram')} <FaExternalLinkAlt aria-hidden="true" />
              </span>
            </div>
          </a>

          {/* Padel Cañaveral */}
          <a href="https://www.instagram.com/padelelcanaveral/" target="_blank" rel="noopener noreferrer" className="partner-card">
            <div className="partner-image-container">
              <img src={logoPadelCañaveral} alt="Padel Cañaveral Logo" className="partner-logo" />
            </div>
            <div className="partner-content">
              <h3 className="partner-name">Padel Cañaveral</h3>
              <span className="partner-link">
                {translate('dist_visit_instagram')} <FaExternalLinkAlt aria-hidden="true" />
              </span>
            </div>
          </a>
          {/* Catalunya Padel club */}
          <a href="https://www.instagram.com/catalunyapadelclub/" target="_blank" rel="noopener noreferrer" className="partner-card">
            <div className="partner-image-container">
              <img src={logoCatalunyaPadelClub} alt="Catalunya Padel Club Logo" className="partner-logo" />
            </div>
            <div className="partner-content">
              <h3 className="partner-name">Catalunya Padel Club</h3>
              <span className="partner-link">
                {translate('dist_visit_instagram')} <FaExternalLinkAlt aria-hidden="true" />
              </span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Resellers;
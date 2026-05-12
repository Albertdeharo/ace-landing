import { Link } from 'react-router-dom';
import { useTranslation } from './../../../TranslationContext';
import { FaHandshake, FaStoreAlt, FaGlobe, FaExternalLinkAlt } from 'react-icons/fa';
import './Distributors.css';

import logoCelescala from './../../../assets/images/partners/celescala-logo.jpg';

const Distributors = () => {
  const { translate } = useTranslation();

  return (
    <div className="distributors-page">
      {/* SECCIÓN HERO (Reutilizando clase genérica) */}
      <section className="dist-hero section">
        <h1 className="hero-title custom-title">
          {translate('dist_hero_title')} <span>{translate('dist_hero_subtitle')}</span>
        </h1>
      </section>

      {/* SECCIÓN INFO */}
      <section className="dist-info section">
        <div className="info-grid">
          <div className="info-text">
            <p className="lead-text">{translate('dist_intro_1')}</p>
            <p className="custom-description p-0">{translate('dist_intro_2')}</p>
            <p className="custom-description p-0"><strong>{translate('dist_intro_3')}</strong></p>
          </div>
          
          <div className="info-icons">
            <div className="icon-box">
              <FaStoreAlt className="dist-icon" aria-hidden="true" />
              <span>{translate('dist_icon_1')}</span>
            </div>
            <div className="icon-box">
              <FaGlobe className="dist-icon" aria-hidden="true" />
              <span>{translate('dist_icon_2')}</span>
            </div>
            <div className="icon-box">
              <FaHandshake className="dist-icon" aria-hidden="true" />
              <span>{translate('dist_icon_3')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CTA */}
      <section className="dist-cta section bg-light text-center">
        <h2 className="custom-title">{translate('dist_cta_title')}</h2>
        <p className="custom-subtitle mb-4">{translate('dist_cta_desc')}</p>
        
        <Link to="/contact" className="btn-primary">
          {translate('dist_cta_button')}
        </Link>
      </section>

      {/* SECCIÓN PARTNERS */}
      <section className="dist-current section bg-dark">
        <h2 className="custom-title mb-4 text-white">{translate('dist_current_title')}</h2>
        
        <div className="partners-grid">
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
        </div>
      </section>
    </div>
  );
};

export default Distributors;
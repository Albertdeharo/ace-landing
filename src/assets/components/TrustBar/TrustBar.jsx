import { useTranslation } from '../../../TranslationContext';
import { FaTruck, FaStar, FaBuilding } from 'react-icons/fa';
import './TrustBar.css';

const TrustBar = () => {
  const { translate } = useTranslation();

  return (
    <div className="trust-bar-wrapper">
      <div className="container trust-bar-content">
        
        <div className="trust-item">
          <FaTruck className="trust-icon" aria-hidden="true" />
          <span>{translate('topbar_shipping') || 'Envíos España 24/48h'}</span>
        </div>
        
        <div className="trust-item">
          <FaStar className="trust-icon star-icon" aria-hidden="true" />
          <span>{translate('topbar_reviews') || 'Valoraciones 5/5'}</span>
        </div>
        
        <div className="trust-item">
          <FaBuilding className="trust-icon" aria-hidden="true" />
          <span>{translate('topbar_b2b') || '+25 Clientes B2B'}</span>
        </div>

      </div>
    </div>
  );
};

export default TrustBar;
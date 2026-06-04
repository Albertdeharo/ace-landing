import { useTranslation } from '../../../TranslationContext';
import { FaShoppingCart, FaCheckCircle, FaShieldAlt, FaTruck } from 'react-icons/fa';
import './HomePricing.css';

const HomePricing = () => {
  const { translate } = useTranslation();

  return (
    <section className="home-pricing-wrapper">
      <div className="container">
        
        <div className="product-pricing-section">
          <div className="cards-grid-home">
            
            {/* TARJETA 1: 200ml */}
            <div className="pricing-card">
              <h3 className="card-title">{translate('product_unit_1') || '1 Unidad'}</h3>
              <p className="card-volume">200 ml</p>
              <div className="product-price">
                <span className="price-currency">€</span>
                <span className="price-value">18</span>
                <span className="price-decimals">,95</span>
              </div>
              <ul className="card-benefits">
                <li><FaCheckCircle className="benefit-icon" /> {translate('product_benefit_control') || 'Control total'}</li>
                <li><FaShieldAlt className="benefit-icon" /> {translate('product_benefit_grip') || 'Máximo agarre'}</li>
              </ul>
              <a href="https://buy.stripe.com/00wfZi2eS2BSbCdg1V0oM00" className="cta-stripe-button">
                <FaShoppingCart className="button-icon" /> {translate('product_buy_1') || 'Comprar 1 Ud'}
              </a>
            </div>

            {/* TARJETA 2: Pack 200ml */}
            <div className="pricing-card highlight">
              <div className="badge">{translate('product_badge_free_shipping') || 'Envío Gratis'}</div>
              <h3 className="card-title">{translate('product_pack_title') || 'Pack Ahorro x2'}</h3>
              <p className="card-volume">2x 200 ml</p>
              <div className="product-price">
                <span className="price-currency">€</span>
                <span className="price-value">34</span>
                <span className="price-decimals">,95</span>
              </div>
              <ul className="card-benefits">
                <li><FaCheckCircle className="benefit-icon" /> {translate('product_benefit_control') || 'Control total'}</li>
                <li><FaShieldAlt className="benefit-icon" /> {translate('product_benefit_grip') || 'Máximo agarre'}</li>
                <li><FaTruck className="benefit-icon" /> {translate('product_benefit_shipping') || 'Envío gratis incluido'}</li>
              </ul>
              <a href="https://buy.stripe.com/eVqbJ2g5I90g8q16rl0oM01" className="cta-stripe-button highlight-btn">
                <FaShoppingCart className="button-icon" /> {translate('product_buy_pack') || 'Comprar Pack'}
              </a>
            </div>

          </div>
          
          <p className="secure-checkout-text-home">
            {translate('product_secure_payment') || 'Pagos seguros 100% encriptados con Stripe'}
          </p>
        </div>

      </div>
    </section>
  );
};

export default HomePricing;
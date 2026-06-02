import { useTranslation } from '../../../TranslationContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Product.css';
import { FaShoppingCart, FaCheckCircle, FaShieldAlt, FaTruck } from 'react-icons/fa';

import productImg from './../../images/ENVASE.png';

const Product = () => {
  const { translate } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="product-page">
      <section className="product-hero" ref={ref}>
        <div className="container product-container-new">
          
          <div className="product-header-section">
            <h1 className="product-main-title">{translate('product_title')}</h1>
            <p className="product-subtitle">
              {translate('product_subtitle')}
            </p>
          </div>

          <motion.div
            className="features-content-center-product"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img 
              src={productImg} 
              alt={translate('product_image_alt')} 
              className="product-image-floating"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            <div className="product-shadow"></div>
          </motion.div>

          <div className="product-pricing-section">
            <div className="cards-grid">
              
              <div className="pricing-card">
                <h3 className="card-title">{translate('product_unit_1')}</h3>
                <div className="product-price">
                  <span className="price-currency">€</span>
                  <span className="price-value">18</span>
                  <span className="price-decimals">,95</span>
                </div>
                <ul className="card-benefits">
                  <li><FaCheckCircle className="benefit-icon" /> {translate('product_benefit_control')}</li>
                  <li><FaShieldAlt className="benefit-icon" /> {translate('product_benefit_grip')}</li>
                </ul>
                <a href="https://buy.stripe.com/00wfZi2eS2BSbCdg1V0oM00" className="cta-stripe-button">
                  <FaShoppingCart className="button-icon" /> {translate('product_buy_1')}
                </a>
              </div>

              <div className="pricing-card highlight">
                <div className="badge">{translate('product_badge_free_shipping')}</div>
                <h3 className="card-title">{translate('product_pack_title')}</h3>
                <div className="product-price">
                  <span className="price-currency">€</span>
                  <span className="price-value">34</span>
                  <span className="price-decimals">,95</span>
                </div>
                <ul className="card-benefits">
                  <li><FaCheckCircle className="benefit-icon" /> {translate('product_benefit_control')}</li>
                  <li><FaShieldAlt className="benefit-icon" /> {translate('product_benefit_grip')}</li>
                  <li><FaTruck className="benefit-icon" /> {translate('product_benefit_shipping')}</li>
                </ul>
                <a href="https://buy.stripe.com/eVqbJ2g5I90g8q16rl0oM01" className="cta-stripe-button highlight-btn">
                  <FaShoppingCart className="button-icon" /> {translate('product_buy_pack')}
                </a>
              </div>

            </div>
            <p className="secure-checkout-text">{translate('product_secure_payment')}</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Product;
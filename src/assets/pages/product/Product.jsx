import { useTranslation } from "../../../TranslationContext";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SEO from "../../components/SEO/SEO";
import "./Product.css";
import {
  FaShoppingCart,
  FaCheckCircle,
  FaShieldAlt,
  FaTruck,
  /* FaClock, */
} from "react-icons/fa";

import productImg from "./../../images/ENVASE.png";

const Product = () => {
  const { translate } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="product-page">
      <SEO title={translate("product_title") || "Comprar"} />
      <section className="product-hero" ref={ref}>
        <div className="container product-container-new">
          <div className="product-header-section">
            <h1 className="product-main-title">
              {translate("product_title") || "Elige tu formato ideal"}
            </h1>
            <p className="product-subtitle">
              {translate("product_subtitle") ||
                "El spray antideslizante definitivo para un control total."}
            </p>
          </div>

          <motion.div
            className="features-content-center-product"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img
              src={productImg}
              alt={translate("product_image_alt") || "ACE Pro Grip Envase"}
              className="product-image-floating"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            <div className="product-shadow"></div>
          </motion.div>

          <div className="product-pricing-section">
            <div className="cards-grid">
              {/* TARJETA 1: 200ml */}
              <div className="pricing-card">
                <h3 className="card-title">
                  {translate("product_unit_1") || "1 Unidad"}
                </h3>
                <p className="card-volume">200 ml</p>
                <div className="product-price">
                  <span className="price-currency">€</span>
                  <span className="price-value">18</span>
                  <span className="price-decimals">,95</span>
                </div>
                <ul className="card-benefits">
                  <li>
                    <FaCheckCircle className="benefit-icon" />{" "}
                    {translate("product_benefit_control") || "Control total"}
                  </li>
                  <li>
                    <FaShieldAlt className="benefit-icon" />{" "}
                    {translate("product_benefit_grip") || "Máximo agarre"}
                  </li>
                </ul>
                <a
                  href="https://buy.stripe.com/00wfZi2eS2BSbCdg1V0oM00"
                  className="cta-stripe-button"
                >
                  <FaShoppingCart className="button-icon" />{" "}
                  {translate("product_buy_1") || "Comprar 1 Ud"}
                </a>
              </div>

              {/* TARJETA 2: Pack 200ml */}
              <div className="pricing-card highlight">
                <div className="badge">
                  {translate("product_badge_free_shipping") || "Envío Gratis"}
                </div>
                <h3 className="card-title">
                  {translate("product_pack_title") || "Pack Ahorro x2"}
                </h3>
                <p className="card-volume">2x 200 ml</p>
                <div className="product-price">
                  <span className="price-currency">€</span>
                  <span className="price-value">34</span>
                  <span className="price-decimals">,95</span>
                </div>
                <ul className="card-benefits">
                  <li>
                    <FaCheckCircle className="benefit-icon" />{" "}
                    {translate("product_benefit_control") || "Control total"}
                  </li>
                  <li>
                    <FaShieldAlt className="benefit-icon" />{" "}
                    {translate("product_benefit_grip") || "Máximo agarre"}
                  </li>
                  <li>
                    <FaTruck className="benefit-icon" />{" "}
                    {translate("product_benefit_shipping") ||
                      "Envío gratis incluido"}
                  </li>
                </ul>
                <a
                  href="https://buy.stripe.com/eVqbJ2g5I90g8q16rl0oM01"
                  className="cta-stripe-button highlight-btn"
                >
                  <FaShoppingCart className="button-icon" />{" "}
                  {translate("product_buy_pack") || "Comprar Pack"}
                </a>
              </div>

              {/* TARJETA 3: Pack 100ml */}
            <div className="pricing-card highlight">
              <div className="badge">{translate('product_badge_free_shipping') || 'Envío Gratis'}</div>
              <h3 className="card-title">{translate('product_pack_title') || 'Pack Ahorro x2'}</h3>
              <p className="card-volume">2x 100 ml</p>
              <div className="product-price">
                <span className="price-currency">€</span>
                <span className="price-value">29</span>
                <span className="price-decimals">,95</span>
              </div>
              <ul className="card-benefits">
                <li><FaCheckCircle className="benefit-icon" /> {translate('product_benefit_control') || 'Control total'}</li>
                <li><FaShieldAlt className="benefit-icon" /> {translate('product_benefit_grip') || 'Máximo agarre'}</li>
                <li><FaTruck className="benefit-icon" /> {translate('product_benefit_shipping') || 'Envío gratis incluido'}</li>
              </ul>
              <a href="https://buy.stripe.com/7sYfZi7zc6S88q102X0oM03" className="cta-stripe-button highlight-btn">
                <FaShoppingCart className="button-icon" /> {translate('product_buy_pack') || 'Comprar Pack'}
              </a>
            </div>

            {/* TARJETA 4: Pack 100ml + 200ml */}
            <div className="pricing-card highlight">
              <div className="badge">{translate('product_badge_free_shipping') || 'Envío Gratis'}</div>
              <h3 className="card-title">{translate('product_pack_title') || 'Pack Ahorro x2'}</h3>
              <p className="card-volume">100 ml + 200 ml</p>
              <div className="product-price">
                <span className="price-currency">€</span>
                <span className="price-value">32</span>
                <span className="price-decimals">,45</span>
              </div>
              <ul className="card-benefits">
                <li><FaCheckCircle className="benefit-icon" /> {translate('product_benefit_control') || 'Control total'}</li>
                <li><FaShieldAlt className="benefit-icon" /> {translate('product_benefit_grip') || 'Máximo agarre'}</li>
                <li><FaTruck className="benefit-icon" /> {translate('product_benefit_shipping') || 'Envío gratis incluido'}</li>
              </ul>
              <a href="https://buy.stripe.com/00wbJ2dXA5O45dP6rl0oM04" className="cta-stripe-button highlight-btn">
                <FaShoppingCart className="button-icon" /> {translate('product_buy_pack') || 'Comprar Pack'}
              </a>
            </div>

              {/* TARJETA : 100ml (PRÓXIMAMENTE) */}
              {/* <div className="pricing-card coming-soon">
                <div className="badge badge-gray">
                  {translate("product_badge_soon") || "Próximamente"}
                </div>
                <div className="coming-soon-content">
                  <div className="coming-soon-info">
                    <h3 className="card-title">
                      {translate("product_unit_travel") || "Formato Viaje"}
                    </h3>
                    <p className="card-volume">100 ml</p>
                  </div>
                  <button className="cta-stripe-button btn-disabled" disabled>
                    <FaClock className="button-icon" />{" "}
                    {translate("product_btn_soon") || "Muy pronto"}
                  </button>
                </div>
              </div> */}
            </div>
            <p className="secure-checkout-text">
              {translate("product_secure_payment") ||
                "Pagos seguros 100% encriptados con Stripe"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;

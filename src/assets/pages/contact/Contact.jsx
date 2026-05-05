import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { useTranslation } from '../../../TranslationContext';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const ContactForm = () => {
  const { translate } = useTranslation();
  
  // 1. Ampliamos el estado inicial con los nuevos campos
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    city: '',
    message: '',
    privacyAccepted: false // El checkbox
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  // 2. Modificamos handleChange para que detecte si es un texto o un checkbox
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState({
      ...formState,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    // Enviamos el estado completo a EmailJS
    emailjs.send(
      'service_aceprogrip',
      'template_5sfl9h8',
      formState,
      '8lN1MphoBhmFeeNu3'
    )
    .then(() => {
      setStatus({ submitting: false, success: true, error: false });
      // Limpiamos el formulario tras el envío
      setFormState({ 
        name: '', email: '', phone: '', company: '', 
        country: '', city: '', message: '', privacyAccepted: false 
      });
      
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    })
    .catch((err) => {
      console.error('Error al enviar el mensaje:', err);
      setStatus({ submitting: false, success: false, error: true });
    });
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        
        {/* INFO LATERAL (Sin cambios importantes) */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="custom-main-title">{translate('contact_page_title')}</h1>
          <p className="contact-subtitle">
            {translate('contact_page_subtitle')}
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <FaEnvelope className="contact-icon" />
              <span>contacto@aceprogrip.com</span>
            </div>
            <div className="contact-detail-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Barcelona, Spain</span>
            </div>
          </div>

          <div className="contact-social">
            <p>{translate('follow_us') || 'Síguenos en redes:'}</p>
            <a href="https://www.instagram.com/aceprogrip/" target="_blank" rel="noopener noreferrer" className="social-button">
              <FaInstagram /> Instagram
            </a>
          </div>
        </motion.div>

        {/* FORMULARIO AMPLIADO */}
        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            
            {/* Fila 1: Nombre y Email */}
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="name">{translate('form_name')}</label>
                <input 
                  type="text" id="name" name="name"
                  placeholder={translate('form_name_ph')}
                  value={formState.name} onChange={handleChange} 
                  required autoComplete="name" disabled={status.submitting}
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">{translate('form_email')}</label>
                <input 
                  type="email" id="email" name="email" 
                  placeholder={translate('form_email_ph')}
                  value={formState.email} onChange={handleChange} 
                  required autoComplete="email" disabled={status.submitting}
                />
              </div>
            </div>

            {/* Fila 2: Teléfono y Empresa */}
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="phone">{translate('form_phone')}</label>
                <input 
                  type="tel" id="phone" name="phone"
                  placeholder={translate('form_phone_ph')}
                  value={formState.phone} onChange={handleChange} 
                  autoComplete="tel" disabled={status.submitting}
                />
              </div>

              <div className="input-group">
                <label htmlFor="company">{translate('form_company')}</label>
                <input 
                  type="text" id="company" name="company" 
                  placeholder={translate('form_company_ph')}
                  value={formState.company} onChange={handleChange} 
                  autoComplete="organization" disabled={status.submitting}
                />
              </div>
            </div>

            {/* Fila 3: País y Ciudad */}
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="country">{translate('form_country')}</label>
                <input 
                  type="text" id="country" name="country"
                  placeholder={translate('form_country_ph')}
                  value={formState.country} onChange={handleChange} 
                  required autoComplete="country-name" disabled={status.submitting}
                />
              </div>

              <div className="input-group">
                <label htmlFor="city">{translate('form_city')}</label>
                <input 
                  type="text" id="city" name="city" 
                  placeholder={translate('form_city_ph')}
                  value={formState.city} onChange={handleChange} 
                  required autoComplete="address-level2" disabled={status.submitting}
                />
              </div>
            </div>
              
            {/* Mensaje */}
            <div className="input-group">
              <label htmlFor="message">{translate('form_message')}</label>
              <textarea 
                id="message" name="message"
                placeholder={translate('form_message_ph')}
                value={formState.message} onChange={handleChange} 
                required rows="4" disabled={status.submitting}
              />
            </div>

            {/* Checkbox de Privacidad */}
            <div className="checkbox-group">
              <input 
                type="checkbox" 
                id="privacyAccepted" 
                name="privacyAccepted" 
                checked={formState.privacyAccepted}
                onChange={handleChange}
                required 
                disabled={status.submitting}
              />
              <label htmlFor="privacyAccepted">
                {translate('form_privacy')} <Link to="/politica-privacidad" className="privacy-link" target="_blank">{translate('form_privacy_link')}</Link>.
              </label>
            </div>

            {/* Mensajes de feedback */}
            {status.success && (
              <div className="feedback-message success">
                {translate('form_success')}
              </div>
            )}
            {status.error && (
              <div className="feedback-message error">
                {translate('form_error')}
              </div>
            )}

            <button 
              type="submit" 
              className={`submit-button ${status.submitting ? 'loading' : ''}`}
              disabled={status.submitting}
            >
              {status.submitting ? translate('form_sending') : translate('form_send')}
              {!status.submitting && <FaPaperPlane className="submit-icon" />}
            </button>
            
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactForm;
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { useTranslation } from './../../TranslationContext';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const ContactForm = () => {
  const { translate } = useTranslation();
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    emailjs.send(
      'service_aceprogrip',
      'template_5sfl9h8',
      formState,
      '8lN1MphoBhmFeeNu3'
    )
    .then(() => {
      setStatus({ submitting: false, success: true, error: false });
      setFormState({ name: '', email: '', message: '' });
      
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
              <span>hello@aceprogrip.com</span>
            </div>
            <div className="contact-detail-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Barcelona, Spain</span>
            </div>
          </div>

          <div className="contact-social">
            <p>Síguenos en redes:</p>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-button">
              <FaInstagram /> Instagram
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            
            <div className="input-group">
              <label htmlFor="name">{translate('form_name')}</label>
              <input 
                type="text" 
                id="name"
                name="name"
                placeholder={translate('form_name_ph')}
                value={formState.name} 
                onChange={handleChange} 
                required
                autoComplete="off"
                disabled={status.submitting}
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">{translate('form_email')}</label>
              <input 
                type="email" 
                id="email"
                name="email" 
                placeholder={translate('form_email_ph')}
                value={formState.email} 
                onChange={handleChange} 
                required
                autoComplete="off"
                disabled={status.submitting}
              />
            </div>
              
            <div className="input-group">
              <label htmlFor="message">{translate('form_message')}</label>
              <textarea 
                id="message"
                name="message"
                placeholder={translate('form_message_ph')}
                value={formState.message} 
                onChange={handleChange} 
                required
                rows="5"
                disabled={status.submitting}
              />
            </div>

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
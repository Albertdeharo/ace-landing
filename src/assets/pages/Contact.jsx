import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
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

    emailjs.send(
      'service_svju4yf',
      'template_5sfl9h8',
      formState,
      '8lN1MphoBhmFeeNu3'
    )
    .then((response) => {
      alert('Mensaje enviado con éxito!');
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch((err) => {
      console.error('Error al enviar el mensaje:', err);
    });
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-left">
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="single-row">
                <input 
                  type="text" 
                  name="name"
                  placeholder="First Name"
                  className="form-in"
                  value={formState.name} 
                  onChange={handleChange} 
                  required
                  autoComplete="off"
                />
            </div>
            <div className="multiple-row">
              <input 
                type="email" 
                name="email" 
                placeholder="Email"
                className="form-in"
                value={formState.email} 
                onChange={handleChange} 
                required
                autoComplete="off"
              />
              <textarea 
                name="message"
                className="form-in"
                placeholder="Your Message"
                value={formState.message} 
                onChange={handleChange} 
                required
                autoComplete="off"
              />
              <input type="submit" id="submit" />
              <label htmlFor="submit">
                <i className="fas fa-paper-plane"></i>
              </label>
            </div>
          </form>
        </div>
        <div className="contact-right">
          <h2>Contact Informations</h2>
          <div className="contact-info">
            <p><i className="fas fa-phone-alt"></i> +977 9800000000 </p>
            <p><i className="fas fa-envelope"></i> info@example.com </p>
            <p><i className="fas fa-map-marker-alt"></i> Butwal, Nepal</p>
          </div>

          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

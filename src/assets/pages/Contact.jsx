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
          <form onSubmit={handleSubmit} className="contact-form">
            <h1 className='text-center p1'>Contactanos</h1>
            <div className="form-box">
              <label htmlFor="name">Nombre</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Enter your name"
                  className="form-in"
                  value={formState.name} 
                  onChange={handleChange} 
                  required
                  autoComplete="off"
                />
            </div>
            <div className="form-box">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email"
                className="form-in"
                value={formState.email} 
                onChange={handleChange} 
                required
                autoComplete="off"
              />
            </div>
              
              <div className="">
                <label htmlFor="message">Mensaje</label>
                <textarea 
                  name="message"
                  className="form-in"
                  placeholder="Your Message"
                  value={formState.message} 
                  onChange={handleChange} 
                  required
                  autoComplete="off"
                  />
              </div>

              <input type="submit" id="submit" />
              <label htmlFor="submit">
                <i className="fas fa-paper-plane"></i>
              </label>
          </form>
      </div>
    </>
  );
};

export default ContactForm;

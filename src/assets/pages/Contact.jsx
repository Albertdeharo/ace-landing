import ContactForm from './../components/ContactForm/ContactForm'; // Importa el nuevo componente
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contacto</h2>
      <ContactForm /> {/* Incluye el formulario aquí */}
      <div className="contact-info">
        <h3>Información de Contacto</h3>
        <p>Email: contacto@ace.com</p>
        <p>Teléfono: +123 456 789</p>
        <h3>Nuestra Ubicación</h3>
        {/* Aquí puedes agregar un mapa si lo deseas */}
        <iframe
          title="Mapa de Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12091.896033183645!2d2.1589877491390833!3d41.38506335018858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2aaf378b6a7%3A0x5015c97b8e80c2c3!2sBarcelona!5e0!3m2!1sen!2ses!4v1615248430470!5m2!1sen!2ses"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Contact;

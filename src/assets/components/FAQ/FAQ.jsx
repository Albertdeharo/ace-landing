import { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: '¿Cuánto dura el efecto del spray?',
    answer: (
      <>
        <h4>Título de la Respuesta</h4>
        <p>El efecto del spray puede durar varias horas, dependiendo de las condiciones de uso.</p>
      </>
    ),
  },
  {
    question: '¿Es seguro para la piel?',
    answer: (
      <>
        <h4>Seguridad del Producto</h4>
        <p>Sí, el spray está formulado para ser seguro y no irritante para la piel.</p>
      </>
    ),
  },
  {
    question: '¿Puedo usarlo en cualquier tipo de pala?',
    answer: (
      <>
        <h4>Compatibilidad</h4>
        <p>Sí, es adecuado para la mayoría de las palas de padel y tenis.</p>
      </>
    ),
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2>Preguntas Frecuentes</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            onClick={() => toggleAnswer(index)}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
          >
            <h3>
              {item.question}
              <span className="icon">{activeIndex === index ? '-' : '+'}</span>
            </h3>
            <div className="answer-content">
              {activeIndex === index && item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

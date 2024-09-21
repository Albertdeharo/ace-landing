import { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: '¿Cuánto dura el efecto del spray?',
    answer: 'El efecto del spray puede durar varias horas, dependiendo de las condiciones de uso.',
  },
  {
    question: '¿Es seguro para la piel?',
    answer: 'Sí, el spray está formulado para ser seguro y no irritante para la piel.',
  },
  {
    question: '¿Puedo usarlo en cualquier tipo de pala?',
    answer: 'Sí, es adecuado para la mayoría de las palas de padel y tenis.',
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
          <div className="faq-item" key={index}>
            <h3 onClick={() => toggleAnswer(index)}>{item.question}</h3>
            {activeIndex === index && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

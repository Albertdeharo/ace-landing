import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useTranslation } from './../../../TranslationContext';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { translate } = useTranslation();

  const faqData = [
    { question: translate('faq_q1'), answer: translate('faq_a1') },
    { question: translate('faq_q2'), answer: translate('faq_a2') },
    { question: translate('faq_q3'), answer: translate('faq_a3') },
    { question: translate('faq_q4'), answer: translate('faq_a4') },
    { question: translate('faq_q5'), answer: translate('faq_a5') },
    { question: translate('faq_q6'), answer: translate('faq_a6') },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-header">
        <h2 className="custom-title">{translate('faq_title')}</h2>
      </div>
      
      <div className="faq-list">
        {faqData.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              className={`faq-item ${isActive ? 'active' : ''}`}
              key={index}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleAnswer(index)}
              >
                <h3>{item.question}</h3>
                <motion.div
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="faq-icon-wrapper"
                >
                  <FaChevronDown className="faq-icon" />
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    className="faq-answer-container"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="faq-answer-content">
                      <p>{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: 'What is Neo-Brutalism?',
    answer: 'Neo-brutalism is a modern design style that emphasizes bold, blocky layouts with sharp edges and high contrast.',
  },
  {
    question: 'How can I implement Neo-Brutalism in my project?',
    answer: 'To implement Neo-Brutalism, use blocky shapes, bold borders, solid shadows, and high-contrast color schemes.',
  },
  {
    question: 'What are the key features of Neo-Brutalism?',
    answer: 'Key features include bold typography, flat design elements, strong shadows, and a minimal yet powerful layout structure.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-4xl font-extrabold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white border-4 border-black p-4 rounded-lg shadow-[8px_8px_0px_#000] cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">{faq.question}</h3>
              <motion.span
                className="text-xl"
                animate={{ rotate: openIndex === index ? 180 : 0 }}
              >
                ▼
              </motion.span>
            </div>
            {openIndex === index && (
              <motion.div
                className="mt-4 text-lg"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

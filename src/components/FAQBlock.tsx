import React, { useState } from 'react';
import type { FAQItem } from '../data/types';

interface FAQBlockProps {
  faqs: FAQItem[];
}

const FAQAccordionItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="w-full flex justify-between items-center text-left py-4 px-2 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-[#09143e] focus-visible:ring-opacity-75"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-lg text-gray-800">{item.question}</span>
        <i className={`fa-solid fa-chevron-down text-[#bf9f5c] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      {isOpen && (
        <div className="px-2 pb-4 text-gray-600">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQBlock: React.FC<FAQBlockProps> = ({ faqs }) => {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQAccordionItem key={`${faq.question}-${index}`} item={faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQBlock;

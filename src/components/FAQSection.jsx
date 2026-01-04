import React, { useState } from "react";

const faqs = [
  {
    question: "How do I book a vehicle?",
    answer: "Select your desired vehicle from the homepage or all vehicles page, login to your account, click 'Book Now', and follow the steps to complete your booking."
  },
  {
    question: "Can I cancel my booking?",
    answer: "Yes, you can cancel your booking up to 24 hours before the scheduled time from your profile page."
  },
  {
    question: "Do I need an account to book a vehicle?",
    answer: "Yes, you must register and log in with your email to make a booking."
  },
  {
    question: "How do I contact support?",
    answer: "You can contact our support team via the 'Contact Us' page or email us at support@luxtrip.com."
  },
  {
    question: "Are there any hidden charges?",
    answer: "No, all charges are clearly displayed during the booking process. No hidden fees."
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onClick}
      className="w-full text-left py-4 px-2 flex justify-between items-center font-medium text-accent hover:text-orange-400"
    >
      {faq.question}
      <span>{isOpen ? "−" : "+"}</span>
    </button>
    {isOpen && <p className="px-2 pb-4 text-primary">{faq.answer}</p>}
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-12 bg-blue-50 max-w-4xl mx-auto p-8 rounded-2xl">
      <h2 data-aos="fade-left" className="text-3xl md:text-4xl font-bold text-accent mb-8">Frequently Asked <span className="text-orange-400">Questions</span></h2>

      <div className="bg-white shadow rounded">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

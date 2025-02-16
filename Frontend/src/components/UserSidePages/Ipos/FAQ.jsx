import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How to Subscribe to an IPO?",
      answer: `
        Step 1: Log in to your respective service provider. 
        Step 2: Click on the IPO section. 
        Step 3: Select the IPO you want to bid on and enter the relevant details. 
        Step 4: Your subscription will be completed once you make the payment or give permission.
      `,
    },
    {
      question: "Should I buy an IPO first day?",
      answer:
        "Buying on the first day depends on your strategy and market research.",
    },
    {
      question: "How do you know if an IPO is good?",
      answer:
        "Analyze the company's financials, growth potential, and market trends.",
    },
    {
      question: "How to check IPO start date?",
      answer:
        "Check the stock exchange or service provider's website for details.",
    },
    {
      question: "What is issue size?",
      answer:
        "Issue size refers to the total monetary value of the IPO being offered.",
    },
    {
      question: "How many shares in a lot?",
      answer: "It depends on the IPO. Check the IPO prospectus for details.",
    },
  ];

  return (
    <div className="bg-gray-100 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Find answers to common questions that come in your mind related to IPOs.
        </p>

        {/* FAQ List */}
        <div className="mt-6 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 transition-shadow duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-gray-800 font-medium focus:outline-none transition-colors hover:text-blue-600"
              >
                <span>{faq.question}</span>
                <span className="text-gray-500">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 text-gray-600 text-sm">
                  {faq.answer.split("\n").map((line, i) => (
                    <p key={i}>{line.trim()}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

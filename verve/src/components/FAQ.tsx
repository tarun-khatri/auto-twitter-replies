import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does Verve analyze my writing style?",
    answer: "Verve uses advanced natural language processing to analyze 1000+ of your past tweets, replies, and interactions. It identifies patterns in your vocabulary, sentence structure, humor style, emoji usage, and topic-specific responses to create a 94% accurate profile of your unique voice."
  },
  {
    question: "Is my data safe and private?",
    answer: "Absolutely. We only analyze publicly available content and pattern data to understand your writing style. We never store your personal information or private messages. All analysis happens securely, and your data is never shared with third parties."
  },
  {
    question: "Can I mimic multiple accounts?",
    answer: "Yes! With our Pro plan, you can analyze and mimic any public account. This is perfect for studying successful creators in your niche or adapting different communication styles for various contexts."
  },
  {
    question: "How accurate are the personalized replies?",
    answer: "Our users report 94% authenticity match with reply quality. Verve gets better over time as it analyzes more of your content. Most users see 47% higher engagement within the first week of use."
  },
  {
    question: "Does it work with images and videos?",
    answer: "Yes! Verve can analyze images in posts to understand context and create 23% more relevant replies. This ensures your responses are contextually appropriate and show you actually engaged with the content."
  },
  {
    question: "What makes Verve different from other reply tools?",
    answer: "Unlike generic response tools that achieve 12% engagement, Verve creates a unique profile of YOUR writing style achieving 47% engagement. Instead of robotic templates, you get replies that sound authentically like you, driving 5x faster growth."
  },
  {
    question: "How quickly can I start seeing results?",
    answer: "You can start using Verve immediately after installation. Most users see 47% improved engagement within the first few days as the system learns their style. Full optimization and 127% growth typically occurs within 1-2 weeks."
  },
  {
    question: "Do I need to be tech-savvy to use Verve?",
    answer: "Not at all! Verve is designed for everyone. Simply install the Chrome extension, connect your account, and start getting personalized replies in under 2 seconds with one click. No technical knowledge required."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 noise-overlay">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-xl text-gray-300 leading-relaxed">
            Everything you need to know about Verve
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-800/40 backdrop-blur-md border border-gray-600/50 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg animate-slide-up"
              style={{animationDelay: `${index * 0.05}s`}}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-all duration-300"
              >
                <span className="font-sans text-lg font-semibold text-white pr-8 tracking-wide">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={26} className="text-indigo-400 flex-shrink-0 transition-colors duration-300" />
                ) : (
                  <ChevronDown size={26} className="text-gray-400 flex-shrink-0 hover:text-indigo-400 transition-colors duration-300" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 animate-fade-in">
                  <p className="font-sans text-gray-300 leading-relaxed text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-slide-up" style={{animationDelay: '0.6s'}}>
          <div className="bg-gray-800/40 backdrop-blur-md border border-gray-600/50 rounded-3xl p-10 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-white mb-6 tracking-wide">Ready to grow 5x faster?</h3>
            <p className="font-sans text-gray-300 mb-8 text-lg">Join 100+ creators achieving 127% average growth with Verve</p>
            <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-indigo-500/25">
              <span className="group-hover:tracking-wide transition-all duration-300">
              Start Growing Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: "How does Verve learn my writing style?",
    answer: "Verve analyzes hundreds of your past tweets — vocabulary, sentence length, humor, tone, emoji habits — and builds a unique voice profile. It doesn't just template your words; it understands the patterns behind how you communicate. The result is replies that feel like you actually typed them."
  },
  {
    question: "Is my data safe?",
    answer: "Yes. We only analyze publicly available tweets. Your data is encrypted in transit and at rest, and we never sell or share it with third parties. You can delete your profile and all associated data at any time from your account settings."
  },
  {
    question: "What does 'account mimicking' mean?",
    answer: "You can enter any public X handle and Verve will analyze their communication style — how they reply, what tone they use, their vocabulary patterns. You can then generate replies in that style. It's perfect for studying creators who are crushing it in your niche and adapting their playbook."
  },
  {
    question: "How good are the replies, honestly?",
    answer: "Our users report a 96% voice-match accuracy. The replies aren't perfect 100% of the time — no AI is — but they're a strong first draft that you can post as-is or tweak in 2 seconds. Most users say their Verve replies get more engagement than what they'd write manually because consistency beats perfection."
  },
  {
    question: "Can it understand images in tweets?",
    answer: "Yes — this is a Pro feature. Verve uses multimodal AI to analyze charts, memes, screenshots, and photos in tweets so your reply is contextually relevant. You won't accidentally say 'great insight!' to a meme about a dog."
  },
  {
    question: "How is this different from ChatGPT or other AI tools?",
    answer: "ChatGPT gives you generic, obviously-AI responses. Verve is purpose-built for X replies with your specific voice baked in. It knows Twitter culture, understands context from images, and writes replies that match your personality — not a corporate chatbot's personality."
  },
  {
    question: "How fast will I see results?",
    answer: "You'll generate your first personalized reply within 2 minutes of signing up. Most users notice a bump in engagement within the first week as they reply more consistently. The compounding effect is real — more replies means more visibility means more followers."
  },
  {
    question: "Do I need any technical skills?",
    answer: "Zero. Install the Chrome extension, connect your account, and you'll see a small button on every tweet in your X feed. Click it, get a reply, post it. That's the entire workflow."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const chromeUrl = import.meta.env.VITE_CHROME_WEBSTORE_URL || "https://chromewebstore.google.com/detail/twitter-reply-generator/fjhakkgjfcnjoapnedaiiocjjiehnnop";

  return (
    <section id="faq" className="py-28 px-6 relative mesh-gradient-2">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-full text-pink-600 text-[13px] font-semibold mb-5">
            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
            FAQ
          </div>
          <h2 className="font-heading text-4xl md:text-[52px] text-gray-900 leading-tight mb-5">
            Got Questions?
          </h2>
          <p className="text-lg text-gray-500 max-w-md mx-auto leading-relaxed">
            Here are the ones everyone asks before they sign up
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border transition-all duration-300 animate-fade-up ${
                openIndex === index
                  ? 'border-gray-200 shadow-card'
                  : 'border-gray-100 hover:border-gray-200 hover:shadow-soft'
              }`}
              style={{animationDelay: `${index * 0.04}s`}}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-7 py-5 text-left flex items-center justify-between gap-4"
              >
                <span className="text-[15px] font-semibold text-gray-900 leading-relaxed">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === index ? 'bg-gray-900 rotate-180' : 'bg-gray-100'
                }`}>
                  <ChevronDown
                    size={16}
                    className={`transition-colors ${openIndex === index ? 'text-white' : 'text-gray-500'}`}
                  />
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-7 pb-6">
                  <p className="text-[15px] text-gray-500 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-up" style={{animationDelay: '0.5s'}}>
          <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-violet-950 rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-fuchsia-500/10 rounded-full blur-[60px]" />

            <div className="relative z-10">
              <h3 className="font-heading text-3xl text-white mb-3">Still on the fence?</h3>
              <p className="text-gray-400 text-[16px] mb-8 max-w-md mx-auto">
                The free plan has no time limit. Try it, see the difference, then decide.
              </p>
              <a
                href={chromeUrl}
                target="_blank"
                className="group inline-flex items-center gap-2.5 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-[15px] transition-all hover:shadow-lg hover:scale-[1.02]"
              >
                Try Verve Free
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

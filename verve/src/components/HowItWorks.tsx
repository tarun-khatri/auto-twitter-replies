import React from 'react';
import { Search, Brain, MessageCircle, Image } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Connect Your Account",
    description: "Link your account or enter any public profile. Verve analyzes 1000+ past tweets to understand your unique voice and engagement patterns.",
    features: ["Private account login", "Public profile analysis", "Secure data handling"]
  },
  {
    icon: Brain,
    title: "Advanced Tone Analysis",
    description: "Our advanced system studies your writing patterns, humor style, emoji usage, and topic preferences to create a 94% accurate digital voice profile.",
    features: ["Writing pattern recognition", "Humor style detection", "Topic-specific tone mapping"]
  },
  {
    icon: MessageCircle,
    title: "Smart Reply Generation",
    description: "Get contextually perfect replies in under 2 seconds that match your personality. Achieve 47% higher engagement with authentic responses.",
    features: ["One-click replies", "Image context analysis", "Real-time generation"]
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 noise-overlay">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
            How Verve Works
          </h2>
          <p className="font-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Three simple steps to unlock 5x faster growth with personalized replies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent z-0 transform translate-x-6 rounded-full"></div>
              )}
              
              <div className="relative bg-gray-800/40 backdrop-blur-md border border-gray-600/50 rounded-3xl p-10 hover:border-indigo-500/50 transition-all duration-500 h-full hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl mb-8 mx-auto shadow-lg hover:scale-110 hover:rotate-3 transition-all duration-300">
                    <step.icon size={36} className="text-white" />
                  </div>
                </div>
                
                <div className="text-center mb-8 relative">
                  <h3 className="font-serif text-2xl font-bold text-white mb-4 tracking-wide">{step.title}</h3>
                  <p className="font-sans text-gray-300 leading-relaxed text-lg">{step.description}</p>
                </div>

                <div className="space-y-3 relative">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 text-gray-400 font-medium">
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse" style={{animationDelay: `${featureIndex * 0.2}s`}}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="inline-flex items-center px-8 py-4 bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/30 rounded-full text-indigo-400 font-medium hover:bg-indigo-500/20 transition-all duration-300">
            <Image size={20} className="mr-3" />
            Pro Tip: Verve analyzes images in posts for 23% better context understanding
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
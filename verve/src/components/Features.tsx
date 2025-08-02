import React from 'react';
import { Brain, Zap, Users, Target } from 'lucide-react';

const coreFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Voice Cloning",
    description: "Our advanced AI analyzes your writing patterns, humor style, and communication preferences to create replies that sound exactly like you.",
    metric: "96%",
    metricLabel: "Voice Accuracy"
  },
  {
    icon: Zap,
    title: "Context-Aware Intelligence",
    description: "Understands images, hashtags, and conversation context to generate replies that are relevant and engaging.",
    metric: "2s",
    metricLabel: "Generation Time"
  },
  {
    icon: Users,
    title: "Authentic Engagement",
    description: "Build genuine connections with personalized replies that resonate with your audience and drive meaningful interactions.",
    metric: "32%",
    metricLabel: "Higher Engagement"
  },
  {
    icon: Target,
    title: "Account Mimicking",
    description: "Study and replicate the communication style of successful accounts in your niche to accelerate your growth strategy.",
    metric: "5x",
    metricLabel: "Faster Growth"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 noise-overlay relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
            Why Verve Works
          </h2>
          <p className="font-sans text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Advanced technology that understands your voice and amplifies your impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {coreFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-800/20 backdrop-blur-md border border-gray-700/30 rounded-2xl p-10 hover:border-indigo-500/30 transition-all duration-700 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/5 animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/3 to-purple-600/3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative">
                <div className="flex items-start justify-between mb-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 rounded-xl group-hover:scale-110 group-hover:border-indigo-500/40 transition-all duration-500">
                    <feature.icon size={24} className="text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {feature.metric}
                    </div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{feature.metricLabel}</div>
                  </div>
                </div>
                
                <h3 className="font-serif text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors tracking-wide">
                  {feature.title}
                </h3>
                <p className="font-sans text-gray-400 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist CTA */}
        <div className="mt-24 text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="inline-flex items-center gap-6 bg-gray-800/20 backdrop-blur-md border border-gray-700/30 rounded-2xl px-8 py-6">
            <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse"></div>
            <div className="text-left">
              <p className="text-white font-medium">Ready to transform your social media presence?</p>
              <p className="text-gray-500 text-sm">Join creators who've already elevated their engagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
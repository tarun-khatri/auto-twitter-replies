import React from 'react';
import { User, Download, Link, Brain, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: User,
    title: "Signup/Login",
    description: "Create your account on our website",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/30"
  },
  {
    number: "02", 
    icon: Download,
    title: "Download Extension",
    description: "Get the Chrome extension",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/30"
  },
  {
    number: "03",
    icon: Link,
    title: "Connect X Account",
    description: "Link your X or enter public account to mimic",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/30"
  },
  {
    number: "04",
    icon: Brain,
    title: "Analyze Tone",
    description: "AI analyzes the account's writing style",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-500/30"
  },
  {
    number: "05",
    icon: MessageSquare,
    title: "Generate Replies",
    description: "Get personalized replies instantly",
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-500/10 to-purple-500/10",
    borderColor: "border-indigo-500/30"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 noise-overlay relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-medium mb-8 animate-fade-in">
            <Sparkles size={16} className="mr-2" />
            Simple 5-Step Process
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
            How Verve Works
          </h2>
          <p className="font-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From signup to personalized replies in under 2 minutes
          </p>
        </div>

        {/* Horizontal Steps Container */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-600/30 to-transparent transform -translate-y-1/2 z-0"></div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-full flex items-center justify-center">
                      <ArrowRight size={16} className="text-gray-400 group-hover:text-indigo-400 transition-colors duration-300" />
                    </div>
                  </div>
                )}
                
                {/* Step Card */}
                <div className={`relative bg-gray-800/40 backdrop-blur-md border ${step.borderColor} rounded-3xl p-8 h-full transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl group-hover:border-opacity-60 animate-slide-up`} 
                     style={{animationDelay: `${index * 0.15}s`}}>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative">
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-900 border-2 border-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-400">{step.number}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <step.icon size={28} className="text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="font-serif text-xl font-bold text-white tracking-wide group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {step.title}
                      </h3>
                      <p className="font-sans text-gray-300 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/30 rounded-2xl px-8 py-6 shadow-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles size={24} className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-lg">Ready to Transform Your Engagement?</p>
              <p className="text-gray-400 text-sm">Join 100+ creators already growing 5x faster</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
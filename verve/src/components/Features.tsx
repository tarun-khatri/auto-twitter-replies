import React from 'react';
import { Zap, Target, Globe, Image, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Replies",
    description: "Generate personalized responses in seconds. No more staring at the screen wondering what to say.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Target,
    title: "Tone Precision",
    description: "Match your exact writing style, humor, and personality. Every reply sounds authentically you.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Globe,
    title: "Mimic Any Account",
    description: "Want to reply like your favorite influencer? Add their profile and adopt their tone instantly.",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Image,
    title: "Image Context Analysis",
    description: "Understands visual content in posts to craft contextually perfect replies that show you actually saw the content.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Users,
    title: "Build Real Connections",
    description: "Authentic replies lead to meaningful interactions, growing your network organically.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays secure. We analyze patterns, not store personal information.",
    color: "from-purple-500 to-indigo-500"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 noise-overlay">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
            Advanced Features That Drive Results
          </h2>
          <p className="font-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology that delivers measurable growth and authentic engagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-800/40 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <feature.icon size={32} className="text-white" />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors tracking-wide">
                  {feature.title}
                </h3>
                <p className="font-sans text-gray-300 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gray-800/40 backdrop-blur-md border border-gray-600/50 rounded-3xl p-10 max-w-4xl mx-auto shadow-2xl animate-slide-up" style={{animationDelay: '0.8s'}}>
            <h3 className="font-serif text-3xl font-bold text-white mb-8 tracking-wide">The Verve Performance Edge</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3">47%</div>
                <div className="text-gray-300 font-medium">Higher Engagement</div>
              </div>
              <div>
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">94%</div>
                <div className="text-gray-300 font-medium">Authenticity Match</div>
              </div>
              <div>
                <div className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent mb-3">5x</div>
                <div className="text-gray-300 font-medium">Faster Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
import React from 'react';
import { TrendingUp, Users, Clock, Target, Zap, Award } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "5x Faster Growth",
    description: "Users see average follower growth of 127% within 30 days",
    stat: "127%",
    statLabel: "Avg Growth"
  },
  {
    icon: Users,
    title: "3x More Engagement",
    description: "Authentic replies generate 47% higher engagement rates",
    stat: "47%",
    statLabel: "Higher Engagement"
  },
  {
    icon: Clock,
    title: "Save 4 Hours Daily",
    description: "Spend less time crafting replies, more time creating content",
    stat: "4hrs",
    statLabel: "Time Saved Daily"
  },
  {
    icon: Target,
    title: "94% Authenticity Match",
    description: "Replies so authentic, followers think you wrote them personally",
    stat: "94%",
    statLabel: "Authenticity Score"
  },
  {
    icon: Zap,
    title: "Instant Reply Generation",
    description: "Generate perfect replies in under 2 seconds with one click",
    stat: "<2s",
    statLabel: "Generation Time"
  },
  {
    icon: Award,
    title: "Premium Results",
    description: "Join the top 1% of creators who use personalized engagement",
    stat: "Top 1%",
    statLabel: "Creator Tier"
  }
];

const Benefits = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 to-gray-900 noise-overlay">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
            The Verve Advantage
          </h2>
          <p className="font-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real results from creators who chose authentic engagement over generic replies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-800/40 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <benefit.icon size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {benefit.stat}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">{benefit.statLabel}</div>
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors tracking-wide">
                  {benefit.title}
                </h3>
                <p className="font-sans text-gray-300 leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gray-800/40 backdrop-blur-md border border-gray-600/50 rounded-3xl p-10 max-w-5xl mx-auto shadow-2xl animate-slide-up" style={{animationDelay: '0.8s'}}>
            <h3 className="font-serif text-3xl font-bold text-white mb-8 tracking-wide">Success Stories in Numbers</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-3">2.3M</div>
                <div className="text-gray-300 font-medium">Replies Generated</div>
              </div>
              <div>
                <div className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3">89%</div>
                <div className="text-gray-300 font-medium">User Retention</div>
              </div>
              <div>
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">156%</div>
                <div className="text-gray-300 font-medium">Avg Follower Growth</div>
              </div>
              <div>
                <div className="text-5xl font-bold bg-gradient-to-r from-rose-gold to-yellow-400 bg-clip-text text-transparent mb-3">24/7</div>
                <div className="text-gray-300 font-medium">Growth Acceleration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
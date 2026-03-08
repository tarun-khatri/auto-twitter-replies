import React from 'react';
import { Fingerprint, Eye, TrendingUp, Repeat2, ArrowUpRight } from 'lucide-react';

const coreFeatures = [
  {
    icon: Fingerprint,
    title: "Your Voice. Not a Bot's.",
    description: "Verve studies how you talk — your slang, humor, and vibe — and writes replies your followers can't tell apart from the real you.",
    metric: "96%",
    metricLabel: "Voice Match",
    gradient: "from-violet-500 to-purple-600",
    lightBg: "from-violet-50 to-purple-50",
    iconColor: "text-violet-600",
    accentBorder: "border-violet-200",
  },
  {
    icon: Eye,
    title: "Sees What Others Miss",
    description: "Charts, memes, screenshots — Verve reads images in tweets so your reply actually makes sense. No more 'great post' to a graph.",
    metric: "<2s",
    metricLabel: "Per Reply",
    gradient: "from-blue-500 to-cyan-500",
    lightBg: "from-blue-50 to-cyan-50",
    iconColor: "text-blue-600",
    accentBorder: "border-blue-200",
  },
  {
    icon: TrendingUp,
    title: "Engagement That Compounds",
    description: "Personalized replies start conversations, attract followers, and build your reputation — one authentic interaction at a time.",
    metric: "32%",
    metricLabel: "More Engagement",
    gradient: "from-emerald-500 to-teal-500",
    lightBg: "from-emerald-50 to-teal-50",
    iconColor: "text-emerald-600",
    accentBorder: "border-emerald-200",
  },
  {
    icon: Repeat2,
    title: "Clone Any Creator's Style",
    description: "Found an account crushing it? Plug their handle in and Verve decodes their communication playbook so you can adapt it.",
    metric: "5x",
    metricLabel: "Faster Growth",
    gradient: "from-orange-500 to-rose-500",
    lightBg: "from-orange-50 to-rose-50",
    iconColor: "text-orange-600",
    accentBorder: "border-orange-200",
  }
];

const Features = () => {
  return (
    <section id="features" className="py-28 px-6 relative mesh-gradient-2">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-600 text-[13px] font-semibold mb-5">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            FEATURES
          </div>
          <h2 className="font-heading text-4xl md:text-[52px] text-gray-900 leading-tight mb-5">
            Built for People Who<br className="hidden md:block" /> Actually Want to Grow
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Not another "AI reply" tool. Verve is the only one that sounds like you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {coreFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-card hover:border-gray-200 transition-all duration-500 hover:-translate-y-1 animate-fade-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.lightBg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.lightBg} rounded-2xl flex items-center justify-center border ${feature.accentBorder} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon size={24} className={feature.iconColor} />
                  </div>
                  <div className="text-right">
                    <div className={`font-display text-3xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                      {feature.metric}
                    </div>
                    <div className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">{feature.metricLabel}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-14 text-center animate-fade-up" style={{animationDelay: '0.5s'}}>
          <div className="inline-flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-8 py-5 shadow-soft">
            <div className="w-3 h-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full animate-pulse" />
            <div className="text-left">
              <p className="font-display text-[15px] font-bold text-gray-900">Stop blending in. Start standing out.</p>
              <p className="text-[13px] text-gray-400">Every reply is a chance to grow — make them count</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

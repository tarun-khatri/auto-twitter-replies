import React from 'react';
import { ArrowRight, Star, Zap, Shield, Clock } from 'lucide-react';

const Hero = () => {
  const chromeUrl = import.meta.env.VITE_CHROME_WEBSTORE_URL || "https://chromewebstore.google.com/detail/twitter-reply-generator/fjhakkgjfcnjoapnedaiiocjjiehnnop";

  return (
    <section className="relative pt-32 pb-24 px-6 mesh-gradient-1">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-violet-200/30 rounded-full blur-[100px] animate-pulse-soft" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-pink-200/30 rounded-full blur-[100px] animate-pulse-soft" style={{animationDelay: '1.5s'}} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/20 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-gray-200/60 rounded-full shadow-soft">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[13px] font-semibold text-gray-700">AI-Powered Reply Engine for X/Twitter</span>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center mb-8 animate-fade-up" style={{animationDelay: '0.1s'}}>
          <h1 className="font-heading text-[52px] sm:text-[64px] md:text-[76px] lg:text-[88px] text-gray-900 leading-[1.05] tracking-tight mb-0">
            Grow 5x Faster
          </h1>
          <h1 className="font-heading text-[52px] sm:text-[64px] md:text-[76px] lg:text-[88px] leading-[1.05] tracking-tight">
            <span className="italic gradient-text-warm">with Replies</span>
            <span className="text-gray-900"> That</span>
          </h1>
          <h1 className="font-heading text-[52px] sm:text-[64px] md:text-[76px] lg:text-[88px] text-gray-900 leading-[1.05] tracking-tight">
            Sound Like <span className="underline decoration-accent/40 decoration-[6px] underline-offset-[6px]">You</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-center text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up" style={{animationDelay: '0.2s'}}>
          Verve analyzes your writing style and generates personalized replies that feel 100% authentic. More engagement, real connections, zero effort.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-up" style={{animationDelay: '0.3s'}}>
          <a
            href={chromeUrl}
            target="_blank"
            className="group relative bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-[16px] transition-all duration-300 hover:shadow-glow-purple inline-flex items-center gap-3 hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Add to Chrome — It's Free</span>
            <ArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="text-gray-500 hover:text-gray-900 text-[15px] font-medium transition-colors flex items-center gap-2 px-6 py-4"
          >
            <span className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-gray-400">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
            </span>
            See how it works
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-up" style={{animationDelay: '0.4s'}}>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
              ].map((src, i) => (
                <img key={i} src={src} alt="" className="w-9 h-9 rounded-full border-[3px] border-white object-cover shadow-sm" />
              ))}
            </div>
            <div>
              <p className="text-[14px] font-semibold text-gray-800">103+ creators</p>
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="text-[12px] text-gray-500 ml-1">4.9/5</span>
              </div>
            </div>
          </div>

          <div className="h-8 w-px bg-gray-200 hidden sm:block" />

          <div className="flex items-center gap-6 text-[14px] text-gray-500">
            <span className="flex items-center gap-1.5"><span className="font-bold text-gray-800 text-[18px]">32%</span> more engagement</span>
            <span className="flex items-center gap-1.5"><span className="font-bold text-gray-800 text-[18px]">&lt;2s</span> per reply</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-up" style={{animationDelay: '0.5s'}}>
          {[
            { icon: Zap, value: '96%', label: 'Voice Accuracy', desc: 'Matches your exact tone', gradient: 'from-violet-500/10 to-purple-500/10', iconColor: 'text-violet-600', border: 'border-violet-100' },
            { icon: Clock, value: '<2s', label: 'Per Reply', desc: 'Lightning fast generation', gradient: 'from-amber-500/10 to-orange-500/10', iconColor: 'text-amber-600', border: 'border-amber-100' },
            { icon: Shield, value: '100%', label: 'Your Data Safe', desc: 'Encrypted & private', gradient: 'from-emerald-500/10 to-teal-500/10', iconColor: 'text-emerald-600', border: 'border-emerald-100' },
          ].map((stat, i) => (
            <div key={i} className={`glass-card rounded-2xl p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 border ${stat.border}`}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4`}>
                <stat.icon size={22} className={stat.iconColor} />
              </div>
              <div className="font-display text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-[14px] font-semibold text-gray-700 mb-0.5">{stat.label}</div>
              <div className="text-[13px] text-gray-400">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

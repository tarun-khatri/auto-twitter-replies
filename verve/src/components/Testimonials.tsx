import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Content Creator",
    handle: "42K followers",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
    content: "I used to spend 2 hours a day just replying to tweets. Now I spend 10 minutes and my engagement is actually higher. The replies genuinely sound like me — even my friends can't tell the difference.",
    highlight: "10 min instead of 2 hours"
  },
  {
    name: "Marcus Rodriguez",
    role: "SaaS Founder",
    handle: "@marcusbuildz",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    content: "Was very skeptical — another AI tool, right? But Verve picked up on my dry humor and tech references. My reply impressions went from ~500 to 3K+ per tweet.",
    highlight: "500 to 3K+ impressions"
  },
  {
    name: "Emma Thompson",
    role: "Agency Owner",
    handle: "Digital Marketing",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    content: "The image analysis is what sold me. I reply to a lot of data/chart tweets and Verve actually understands what's in the image. No other tool does this. Worth every penny.",
    highlight: "Image understanding"
  },
  {
    name: "David Park",
    role: "Startup Founder",
    handle: "YC W24",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    content: "I used the account mimicking feature to study how top VCs communicate on Twitter. Applied those patterns to my own voice and my follower growth rate literally doubled in 3 weeks.",
    highlight: "2x follower growth"
  },
  {
    name: "Lisa Wang",
    role: "Growth Lead",
    handle: "B2B Tech",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    content: "My team manages 4 client accounts. Verve lets us switch between different tone profiles instantly. What used to take a junior hire 4 hours now takes 15 minutes.",
    highlight: "4 hours → 15 minutes"
  },
  {
    name: "Alex Kumar",
    role: "Creator",
    handle: "18K → 67K in 4 months",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    content: "I've tried Typefully, Hypefury, Tweet Hunter — none of them do replies well. Verve is the only tool that made my replies feel like actual conversations. People DM me now.",
    highlight: "18K to 67K followers"
  }
];

const Testimonials = () => {
  return (
    <section className="py-28 px-6 bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-violet-500/10 to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-fuchsia-500/10 to-transparent rounded-full blur-[80px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-violet-300 text-[13px] font-semibold mb-5">
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
            TESTIMONIALS
          </div>
          <h2 className="font-heading text-4xl md:text-[52px] text-white leading-tight mb-5">
            Real Creators.<br />Real Results.
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            Don't take our word for it — here's what happens when your replies actually sound like you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-7 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-1 animate-fade-up"
              style={{animationDelay: `${index * 0.08}s`}}
            >
              {/* Highlight badge */}
              <div className="mb-5">
                <span className="inline-block text-[12px] font-bold text-violet-300 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
                  {testimonial.highlight}
                </span>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-[15px] text-gray-300 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10"
                />
                <div>
                  <p className="text-[14px] font-semibold text-white">{testimonial.name}</p>
                  <p className="text-[13px] text-gray-500">{testimonial.role} · {testimonial.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-up" style={{animationDelay: '0.6s'}}>
          <div className="flex -space-x-3">
            {testimonials.slice(0, 5).map((t, i) => (
              <img key={i} src={t.avatar} alt="" className="w-10 h-10 rounded-full border-[3px] border-gray-950 object-cover" />
            ))}
          </div>
          <div>
            <p className="text-white font-semibold text-[16px]">Trusted by 100+ creators</p>
            <p className="text-gray-500 text-[14px]">Average 2x follower growth in 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

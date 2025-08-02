import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=48&h=48&fit=crop&crop=face",
    content: "Verve transformed my engagement completely. My replies actually sound like me now, not some generic bot. My follower growth increased 3x in just two months!",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Tech Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face",
    content: "I was skeptical at first, but Verve nailed my writing style perfectly. It even picked up on my tendency to use specific tech jargon. This is the future of social media.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "Digital Marketer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face",
    content: "The image analysis feature is incredible. Verve understands context from photos and creates relevant replies. It's like having a personal social media assistant.",
    rating: 5
  },
  {
    name: "David Park",
    role: "Startup Founder",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face",
    content: "Being able to mimic successful accounts in my niche helped me understand effective communication patterns. My engagement rate went from 2% to 8%!",
    rating: 5
  },
  {
    name: "Lisa Wang",
    role: "Growth Hacker",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=48&h=48&fit=crop&crop=face",
    content: "Verve doesn't just save time - it helps me build authentic relationships. People actually respond to my comments now because they feel genuine.",
    rating: 5
  },
  {
    name: "Alex Kumar",
    role: "Influencer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop&crop=face",
    content: "I've tried every reply tool out there. Verve is the only one that actually sounds like me. The tone analysis is incredibly sophisticated.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 noise-overlay">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
            Join 100+ Fast-Growing Creators
          </h2>
          <p className="font-sans text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See how Verve is helping creators achieve 127% average growth with authentic engagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-gray-800/40 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400 hover:scale-110 transition-transform duration-200" />
                ))}
                </div>
              
                <div className="relative mb-8">
                  <Quote size={28} className="text-indigo-400 opacity-40 absolute -top-3 -left-3" />
                  <p className="font-sans text-gray-300 leading-relaxed pl-8 text-lg">
                  {testimonial.content}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 object-cover"
                  />
                  <div>
                    <p className="text-white font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-gray-400 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="inline-flex items-center gap-6 bg-gray-800/40 backdrop-blur-md border border-gray-600/50 rounded-full px-10 py-6 shadow-xl">
            <div className="flex -space-x-2">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900 animate-float" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900 animate-float" style={{animationDelay: '0.2s'}} />
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900 animate-float" style={{animationDelay: '0.4s'}} />
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900 animate-float" style={{animationDelay: '0.6s'}} />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face" alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900 animate-float" style={{animationDelay: '0.8s'}} />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-lg">100+ Happy Users</p>
              <p className="text-gray-400 font-medium">127% avg growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
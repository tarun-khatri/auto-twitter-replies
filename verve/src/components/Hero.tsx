import React from 'react';
import { Chrome, Star, Users, Zap, X } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900 noise-overlay relative overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Spline
          scene="https://prod.spline.design/e0ffqY22-XA7P1hk/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}
        />
      </div>
      
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-indigo-900/80 z-10"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl animate-float z-20"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-float z-20" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-medium mb-8 animate-fade-in hover:bg-indigo-500/20 transition-all duration-300">
              <Zap size={16} className="mr-2" />
              Your Personal Reply Assistant
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-wider animate-slide-up">
              Grow 5x Faster with
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-gold bg-clip-text text-transparent">
                Personalized Replies
              </span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
              Verve analyzes your past tweets to craft replies that sound exactly like you. 
              Get 3x more engagement, build authentic connections, and grow your influence 10x faster.
            </p>
          </div>

          <div className="mb-16 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <button className="group bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-700 hover:via-purple-700 hover:to-rose-gold text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto shadow-2xl hover:shadow-indigo-500/25 animate-glow">
              <Chrome size={24} />
              <span className="group-hover:tracking-wide transition-all duration-300">Add to Chrome - It's Free</span>
            </button>
            <p className="text-gray-400 text-sm mt-4 font-medium">No credit card required • Works instantly</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-2 border-gray-900 animate-float"></div>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-gray-900 animate-float" style={{animationDelay: '1s'}}></div>
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-gold rounded-full border-2 border-gray-900 animate-float" style={{animationDelay: '2s'}}></div>
              </div>
              <span className="text-sm font-medium">Trusted by 10,000+ users</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={18} className="fill-yellow-400 text-yellow-400 hover:scale-110 transition-transform duration-200" />
              ))}
              <span className="text-sm ml-2 font-medium">4.9/5 • 127% avg growth</span>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gray-800/30 backdrop-blur-md border border-gray-600/50 rounded-3xl p-10 max-w-5xl mx-auto shadow-2xl animate-slide-up" style={{animationDelay: '0.8s'}}>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-white mb-6 tracking-wide">Why Verve Dominates the Competition</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                        <X size={14} className="text-white" />
                      </div>
                      <div>
                        <p className="text-red-400 font-semibold text-lg">Generic Reply Tools</p>
                        <p className="text-gray-400">Robotic templates • 12% engagement • No personalization</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                        <Zap size={14} className="text-white" />
                      </div>
                      <div>
                        <p className="text-green-400 font-semibold text-lg">Verve</p>
                        <p className="text-gray-400">Your exact tone • 47% engagement • Deep personalization</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/50 shadow-xl">
                  <div className="text-sm text-gray-400 mb-4 font-medium">Sample Reply Analysis</div>
                  <div className="space-y-3">
                    <div className="text-gray-300 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Analyzing 1,247 past tweets...
                    </div>
                    <div className="text-gray-300 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      Tone: Casual, tech-focused, witty
                    </div>
                    <div className="text-gray-300 flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      Style: Short sentences, 3 emojis avg
                    </div>
                    <div className="text-indigo-400 font-medium flex items-center gap-2 mt-4">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                      → 94% authenticity match achieved
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
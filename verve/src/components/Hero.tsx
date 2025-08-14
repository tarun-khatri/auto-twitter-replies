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
            <a href={import.meta.env.VITE_CHROME_WEBSTORE_URL || "https://chromewebstore.google.com/detail/twitter-reply-generator/fjhakkgjfcnjoapnedaiiocjjiehnnop"} target="_blank" className="group bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-700 hover:via-purple-700 hover:to-rose-gold text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto shadow-2xl hover:shadow-indigo-500/25 animate-glow">
              <Chrome size={24} />
              <span className="group-hover:tracking-wide transition-all duration-300">Add to Chrome - It's Free</span>
            </a>
            <p className="text-gray-400 text-sm mt-4 font-medium">No credit card required • Works instantly</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900 animate-float" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900 animate-float" style={{animationDelay: '1s'}} />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900 animate-float" style={{animationDelay: '2s'}} />
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900 animate-float" style={{animationDelay: '3s'}} />
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face" alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900 animate-float" style={{animationDelay: '4s'}} />
              </div>
              <span className="text-sm font-medium">Trusted by 103+ users</span>
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
            <div className="relative bg-gray-800/30 backdrop-blur-md border border-gray-600/50 rounded-3xl p-10 max-w-6xl mx-auto shadow-2xl animate-slide-up" style={{animationDelay: '0.8s'}}>
              <div className="text-center mb-12">
                <h3 className="font-serif text-3xl font-bold text-white tracking-wide">Why Verve Dominates the Competition</h3>
                <p className="text-gray-400 mt-4 text-lg">See the real difference in results and user experience</p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Generic Reply Tools */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                      <X size={14} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-red-400 font-semibold text-xl mb-4">Generic Reply Tools</p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-gray-300 font-medium">Robotic, template-based responses</p>
                            <p className="text-gray-500 text-sm">Sounds like a bot, not like you</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-gray-300 font-medium">1% average engagement rate</p>
                            <p className="text-gray-500 text-sm">Below industry standard</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-gray-300 font-medium">No personalization</p>
                            <p className="text-gray-500 text-sm">Same replies for everyone</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-gray-300 font-medium">Limited context understanding</p>
                            <p className="text-gray-500 text-sm">Ignores images and context</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-gray-300 font-medium">2-3 hours daily time investment</p>
                            <p className="text-gray-500 text-sm">Manual reply crafting</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-gray-300 font-medium">Generic tone analysis</p>
                            <p className="text-gray-500 text-sm">Basic sentiment only</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Verve */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                      <Zap size={14} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-green-400 font-semibold text-xl mb-4">Verve</p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-gray-300 font-medium">Your exact tone & personality</p>
                            <p className="text-gray-500 text-sm">94% accuracy in voice matching</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-gray-300 font-medium">32% higher engagement rate</p>
                            <p className="text-gray-500 text-sm">3.9x better than competitors</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-gray-300 font-medium">Deep personalization</p>
                            <p className="text-gray-500 text-sm">Learns your unique style</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-gray-300 font-medium">Advanced image & context analysis</p>
                            <p className="text-gray-500 text-sm">53% better context understanding</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-gray-300 font-medium">Under 2 seconds per reply</p>
                            <p className="text-gray-500 text-sm">Saves 2-3 hours daily</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="text-gray-300 font-medium">AI-powered tone analysis</p>
                            <p className="text-gray-500 text-sm">Studies 1000+ past tweets</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Results Summary */}
              <div className="mt-12 pt-8 border-t border-gray-600/30">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">32%</div>
                    <p className="text-gray-300 font-medium">Higher Engagement</p>
                    <p className="text-gray-500 text-sm">vs generic tools</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">96%</div>
                    <p className="text-gray-300 font-medium">Voice Accuracy</p>
                    <p className="text-gray-500 text-sm">tone matching</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">2-3h</div>
                    <p className="text-gray-300 font-medium">Time Saved Daily</p>
                    <p className="text-gray-500 text-sm">automated replies</p>
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